<template>
  <ion-item lines="none" class="calendar-item">
    <div :class="['time-point', timePointClass]"></div>
    <div class="calendar-item__time-range">
      <div>{{ extractDayTime(event.startsAt) }}</div>
      <div>{{ extractDayTime(event.endsAt) }}</div>
    </div>
    <ion-item :class="[calendarItemBorderClass]">
      <div class="calendar-item__inner" style="max-width: 100%;">
        <ion-label class="calendar-item__title">
          {{ event.title }}
        </ion-label>
        <div class="calendar-item__secondary-info">
          <div>
            <ion-label color="medium" class="calendar-item__holder">{{ event.holder }}</ion-label>
            <ion-badge>
              <ion-icon :icon="globe"></ion-icon>
              Room C
            </ion-badge>
          </div>
          <div>
            <ion-label>Limited seats</ion-label>
          </div>
        </div>
      </div>
    </ion-item>
  </ion-item>
</template>

<script lang="ts" setup>
import { PropType, computed } from 'vue';
import { CalendarEvent } from "@/interfaces";

import { globe  } from 'ionicons/icons';

const props = defineProps({
  event: {
    type: Object as PropType<CalendarEvent>,
    required: true,
  }
})

function extractDayTime(time: number) {
  const date = new Date(time);
  const padTo2Digits = (number: number) => String(number).padStart(2, '0');
  return `${padTo2Digits(date.getHours())}:${padTo2Digits(date.getMinutes())}`
}

const isEventLive = computed(() => {
  return props.event.endsAt > Date.now();
})

const timePointClass = computed(() => {
  if (isEventLive.value) {
    return 'time-point--live';
  }

  return '';
})

const calendarItemBorderClass = computed(() => {
    if (isEventLive.value) {
    return 'calendar-item--upcoming';
  }

  return 'calendar-item--passed';
})
</script>

<style scoped>
.calendar-item:not(:first-child) .calendar-item__inner {
  margin-top: 0.5rem;
}

.calendar-item--passed {
  border-left: 2px solid var(--ion-color-primary);
}

.calendar-item--upcoming {
  border-left: 2px dashed var(--ion-color-primary);
}

.calendar-item__title {
  font-weight: bold;
}

.calendar-item__holder {
  margin-bottom: 0.25rem;
}

.calendar-item__secondary-info {
  display: flex;
  justify-content: space-between;
  margin: 0.5rem auto;
}

.calendar-item__time-range {
  margin-right: 0.5rem;
  color: var(--ion-color-medium);
  text-align: center;
}

.time-point {
  display: block;
  position: absolute;
  top: 5px;
  left: 43px;
  width: 12px;
  height: 12px;
  z-index: 10;
  border-radius: 100px;
  background: var(--ion-color-primary);
}

.time-point--live {
  animation: pulse 3s infinite;
  background-color: var(--ion-color-danger);
  box-shadow: 0 0 0 0 var(--ion-color-danger);
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(255, 82, 82, 0.7);
  }
  
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 5px rgba(255, 82, 82, 0);
  }
  
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(255, 82, 82, 0);
  }
}
</style>