<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon :icon="homeSharp" />
          <ion-label>Home</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon :icon="calendar" />
          <ion-label>Agenda</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="menu"></ion-tab-button>

        
        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon :icon="peopleSharp" />
          <ion-label>Attendees</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon :icon="qrCode" />
          <ion-label>Scan</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  
    <ion-fab vertical="bottom" horizontal="center" slot="fixed">
      <ion-fab-button router-link="/tabs/menu">
        <ion-icon :icon="gridOutline"></ion-icon>
      </ion-fab-button>  
    </ion-fab>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonFab, IonFabButton, IonRouterOutlet } from '@ionic/vue';
import {
  images,
  calendar,
  peopleSharp,
  qrCode,
  homeSharp,
  gridOutline,
} from 'ionicons/icons';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'TabsPage',
  components: {
    IonLabel,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonPage,
    IonFab,
    IonFabButton,
    IonRouterOutlet
  },
  setup() {
    const router = useRouter();
    
    return {
      router,
      images, 
      calendar,
      peopleSharp,
      qrCode,
      homeSharp,
      gridOutline,
    }
  }
});
</script>

<style scoped> 
ion-fab-button {
  --box-shadow: none;
  --border-color: var(--ion-tab-bar-background);
  --border-width: 4px;
  --border-style: solid;
}
</style>
