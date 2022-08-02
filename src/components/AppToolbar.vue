<template>
  <ion-header class="ion-no-border">
    <ion-toolbar :class="[{ transparent }]">
      <ion-buttons slot="start" >
        <ion-back-button :color="textColor"></ion-back-button>
      </ion-buttons>
      <ion-title :color="textColor" class="ion-text-uppercase">{{ title }}</ion-title>
      <ion-buttons slot="end">
        <ion-button :color="textColor">
          <ion-icon :icon="chatbubble"></ion-icon>
        </ion-button>
        <ion-button :color="textColor">
          <ion-icon :icon="notifications"></ion-icon>
        </ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
</template>

<script lang="ts">
import { defineComponent  } from "vue";
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonIcon,
  IonButton
} from "@ionic/vue";
import {
  chatbubble,
  notifications,
} from "ionicons/icons";

export default defineComponent({
  components: {
    IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle,
    IonIcon,
    IonButton,
  },

  props: {
    title: {
      type: String,
      required: true,
    },
    transparent: {
      type: Boolean,
      default: false,
    },
    textColor: {
      type: String,
      default: 'primary',
    }
  },

  setup() {
    return {
      chatbubble,
      notifications
    }
  }
})
</script>

<style scoped>
.transparent {
  --background: transparent;
}
</style>