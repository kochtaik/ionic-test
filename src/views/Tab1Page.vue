<template>
  <ion-page>
    <AppToolbar title="Home" />
    <ion-content :fullscreen="true">
      <ion-item lines="none" >
        <ion-item class="new-post-input" shape="round" color="light" lines="none">
          <ion-input  type="text" placeholder="Write a post..." ></ion-input>
          <ion-buttons>
            <ion-button shape="round" color="medium">
              <ion-icon :icon="cameraOutline"></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-item>
        <ion-buttons>
          <ion-button fill="solid" color="primary" size="large" shape="round">
            <ion-icon :icon="sendSharp"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-item>
      <ion-item class="visit-booth" lines="none">
        <ion-label class="home-label">Visit Our Booths</ion-label>
        <router-link to="#">See all</router-link>
      </ion-item>
      <swiper
        :modules="modules"
        slides-per-view="auto"
      >
        <swiper-slide>
          <ion-card>
            <img src="https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_960_720.jpg" />
            <ion-card-header>
              <ion-card-title>SCOOCS Team</ion-card-title>
            </ion-card-header>
            <ion-card-content>Lorem ipsum dolor sit amet consectetur</ion-card-content>
          </ion-card>
        </swiper-slide>
        <swiper-slide>
          <ion-card>
            <img src="https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_960_720.jpg" />
            <ion-card-header>
              <ion-card-title>SCOOCS Team</ion-card-title>
            </ion-card-header>
            <ion-card-content>Lorem ipsum dolor sit amet consectetur</ion-card-content>
          </ion-card>
        </swiper-slide>
        <swiper-slide>
          <ion-card>
            <img src="https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_960_720.jpg" />
            <ion-card-header>
              <ion-card-title>SCOOCS Team</ion-card-title>
            </ion-card-header>
            <ion-card-content>Lorem ipsum dolor sit amet consectetur</ion-card-content>
          </ion-card>
        </swiper-slide>
      </swiper>
      <ion-item>
        <avatar-row :avatars="avatars"></avatar-row>
          <ion-button router-link="/" shape="round" fill="solid" color="primary">
            Join in 10 min
            <ion-icon slot="end" :icon="playCircleOutline"></ion-icon>
          </ion-button>
      </ion-item>
      <support-btn></support-btn>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { 
  IonPage,
  IonContent,
  IonInput,
  IonItem,
  IonButton,
  IonButtons,
  IonIcon,
  IonLabel,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent, 
  IonicSlides,
} from '@ionic/vue';
import {
  cameraOutline,
  sendSharp,
  playCircleOutline,
} from "ionicons/icons"

/* swiper */
import { Swiper, SwiperSlide } from "swiper/vue";
import 'swiper/css';
import '@ionic/vue/css/ionic-swiper.css';

/* custom components */
import AppToolbar from "@/components/AppToolbar.vue";
import AvatarRow from "@/components/shared/AvatarRow.vue";
import SupportBtn from "@/components/shared/SupportBtn.vue";

/* types & interfaces */
import { Avatar } from "@/interfaces";

export default  defineComponent({
  name: 'Tab1Page',
  components: {
    AppToolbar,
    AvatarRow,
    SupportBtn,
    IonContent,
    IonPage,
    IonInput,
    IonIcon,
    IonItem,
    IonButton,
    IonButtons,
    IonLabel,
    Swiper,
    SwiperSlide,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
  },
  
  setup() {
    const avatars = ref<Avatar[]>([
      {
        imgSrc: 'https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI',
        name: 'Kate Smith',
      },
      {
        imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/800px-Pierre-Person.jpg',
        name: 'Pierre Person',
      },
      {
        imgSrc: 'data:image/jpeg;base64,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',
        name: 'John Doe',
      },
      {
        imgSrc: 'https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI',
        name: 'Kate Smith',
      },
      {
        imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/800px-Pierre-Person.jpg',
        name: 'Pierre Person',
      },
      {
        imgSrc: 'data:image/jpeg;base64,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',
        name: 'John Doe',
      },
    ]);
    
    return {
      cameraOutline,
      sendSharp,
      playCircleOutline,
      avatars,
      modules: [IonicSlides],
    }
  }
});
</script>

<style scoped>
ion-card-title {
  font-size: 0.875rem;
  font-weight: bold;
}

ion-card-content {
  font-size: 0.75rem;
}

ion-card-header,
ion-card-content {
  padding: 8px;
}

ion-card-content,
ion-card-title {
  text-align: start;
}

.new-post-input {
  margin-right: 0.5rem;
  border-radius: 8px;
}

.visit-booth {
  margin-top: 1rem;
}

.visit-booth > a {
  align-self: flex-start; 
  text-decoration: none;
  outline: none;
}

.home-label {
  font-size: 1.2rem;
}

.swiper-slide {
  width: 45%;
  height: auto;
}
</style>