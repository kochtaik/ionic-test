import { ref, onMounted, watch } from "vue";
import { Camera, CameraResultType, CameraSource, Photo } from "@capacitor/camera";
import { Filesystem, Directory } from "@capacitor/filesystem";
import { Storage } from "@capacitor/storage";
import { isPlatform } from "@ionic/vue";

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}

export function usePhotoGallery() {
  const photos = ref<Array<UserPhoto>>([]);
  const PHOTO_STORAGE_KEY = 'photos';
  const isLoading = ref(false);

  const takePhoto = async () => {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });
    const filepath = new Date().getTime() + '.jpeg';
    const savedFileImage = await savePicture(photo, filepath);

    photos.value = [savedFileImage, ...photos.value];
  };

  const convertBlobToBase64 = (blob: Blob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        resolve(reader.result);
      };

      reader.readAsDataURL(blob);
    });
  };

  const savePicture = async (photo: Photo, fileName: string): Promise<UserPhoto> => {
    let base64Data: string;

    if (isPlatform('hybrid')) {
      const file = await Filesystem.readFile({
        path: photo.path!,
      });
      base64Data = file.data;
    } else {
      const response = await fetch(photo.webPath!);
      const blob = await response.blob();
      base64Data = (await convertBlobToBase64(blob)) as string;
    }
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data as string,
      directory: Directory.Data,
    });

    if (isPlatform('hybrid')) {
      return {
        filepath: savedFile.uri,
        webviewPath: photo.webPath,
      };
    }

    return {
      filepath: fileName,
      webviewPath: photo.webPath,
    };
  };

  const loadSavedPhotos = async () => {
    isLoading.value = true;
    const photoList = await Storage.get({ key: PHOTO_STORAGE_KEY });
    const storedPhotos: UserPhoto[] = photoList.value ? JSON.parse(photoList.value) : [];

    if (!isPlatform('hybrid')) {
      for (const photo of storedPhotos) {
        const file = await Filesystem.readFile({
          path: photo.filepath,
          directory: Directory.Data,
        });
  
        photo.webviewPath = `data:image/jpeg;base64,${file.data}`;
      }
    }
  
    photos.value = storedPhotos;
    isLoading.value = false;
  };

  const cachePhotos = () => {
    Storage.set({
      key: PHOTO_STORAGE_KEY,
      value: JSON.stringify(photos.value),
    });
  };
  watch(photos, cachePhotos);

  onMounted(async () => loadSavedPhotos());

  return {
    photos,
    isLoading,
    takePhoto,
  };
}