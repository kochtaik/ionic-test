<template>
  <ion-fab horizontal="end" vertical="bottom" slot="fixed">
    <ion-fab-button>
      <ion-icon :icon="headsetOutline"></ion-icon>
    </ion-fab-button>
  </ion-fab>
</template>

<script lang="ts" setup>
import {
  IonFab,
  IonFabButton,
  IonIcon
} from "@ionic/vue";

import { headsetOutline } from "ionicons/icons";
</script>