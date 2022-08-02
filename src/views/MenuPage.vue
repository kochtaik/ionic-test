<template>
  <ion-page class="menu-page">
    <AppToolbar transparent title="EVENT NAME" text-color="light"/> 
    <ion-content :fullscreen="true">
      <ion-item class="new-post-input ion-padding-horizontal" shape="round" color="light" lines="none">
        <ion-icon :icon="searchOutline"></ion-icon>
        <ion-input type="text" placeholder="Search..." ></ion-input>
      </ion-item>
      <ion-grid>
        <ion-row>
          <ion-col class="menu-tile" v-for="tile in tiles" :key="tile.title" size="6">
            <router-link to="/">
              <ion-card color="primary" >
                <ion-card-content>
                  <ion-img  :src="tile.icon"></ion-img>
                  <ion-card-title class="ion-text-center">
                    {{ tile.title }}
                  </ion-card-title>
                </ion-card-content>
              </ion-card>
            </router-link>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
/* Vue env */
import { useRouter } from "vue-router";

import {
  IonPage,
  IonContent,
  IonItem,
  IonInput,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonCard,
  IonCardContent,
  IonCardTitle,
} from "@ionic/vue"

/* custom components */
import AppToolbar from '@/components/AppToolbar.vue';

/* icons */
import {
  searchOutline
} from "ionicons/icons"

const tiles = [
  {
    title: "Explore",
    icon: "https://cdn-icons-png.flaticon.com/512/1076/1076744.png",
    link: "/"
  },
  {
    title: "Venue Map",
    icon: "https://icon-library.com/images/location-icon-transparent-background/location-icon-transparent-background-12.jpg",
    link: "/"
  },
  {
    title: "Event Hub",
    icon: "https://cdn-icons-png.flaticon.com/512/1076/1076744.png",
    link: "/"
  },
  {
    title: "Booths",
    icon: "https://icon-library.com/images/location-icon-transparent-background/location-icon-transparent-background-12.jpg",
    link: "/"
  },
  {
    title: "Speaker's  Corner",
    icon: "https://cdn-icons-png.flaticon.com/512/1076/1076744.png",
    link: "/"
  },
  {
    title: "Support",
    icon: "https://icon-library.com/images/location-icon-transparent-background/location-icon-transparent-background-12.jpg",
    link: "/"
  },
]
const router = useRouter()
</script>

<style scoped>

ion-content {
  --background: url('https://img.freepik.com/premium-vector/modern-simple-green-abstract-background-vector-illustration-design-presentation-banner-cover-web-flyer-card-poster-wallpaper-texture-slide-magazine-powerpoint_181182-19635.jpg?w=2000') no-repeat center center / cover; 
}

ion-card {
  height: 95%;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

ion-img  {
  width: 64px;
  height: 64px;
  margin: auto;
}
</style>