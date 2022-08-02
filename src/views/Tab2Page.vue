<template>
  <ion-page>
    <AppToolbar title="Agenda" />
    <ion-content :fullscreen="true">
      <ion-segment>
        <ion-segment-button value="agenda">
          <ion-label>Agenda</ion-label>
        </ion-segment-button>
        <ion-segment-button value="my-agenda">
          <ion-label>My Agenda</ion-label>
        </ion-segment-button>
      </ion-segment>
      <ion-list>
        <calendar-item v-for="event in events" :key="event.id" :event="event"></calendar-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
/* vue env */
import {
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonItem,
  IonList,
  IonLabel,
  IonBadge,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonFab,
  IonFabButton,
} from '@ionic/vue';
/* icons */
import { 
  globe,
  trash,
  close
} from 'ionicons/icons';

/* custom components */
import AppToolbar from "@/components/AppToolbar.vue";
import CalendarItem from "@/components/UI/CalendarItem.vue";

/* interfaces */
import { CalendarEvent } from "@/interfaces";
import { reactive } from 'vue';

const events  = reactive<CalendarEvent[]>([
  {
    title: ' Less Tech, More Mindset - Create Your Digital Future Readiness with our Digital platform ',
    id: Math.random(),
    startsAt: 1659078000000,
    endsAt: 1659082500000,
    holder: 'John Doe',
  },
  {
    title: ' Less Tech, More Mindset - Create Your Digital Future Readiness with our Digital platform ',
    id: Math.random(),
    startsAt: 1659106800000,
    endsAt: 1659127800000,
    holder: 'John Doe',
  },
])

</script>

<style scoped>
.time-range {
  margin-right: 8px
}

.time-point {
  display: block;
  position: absolute;
  top: 0;
  left: 43px;
  width: 12px;
  height: 12px;
  z-index: 10;
  border-radius: 100px;
  background: var(--ion-color-primary);
}

</style>