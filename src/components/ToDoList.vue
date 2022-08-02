<template>
  <ion-list>
    <ion-item>
      <ion-label>This is test item</ion-label>
    </ion-item>
  </ion-list>
</template>


<script lang="ts" setup>
import { PropType } from 'vue';
import { Task } from "@/interfaces";

const props = defineProps({
  tasks: {
    type: Object as PropType<Task[]>,
    required: true,
  }
})
</script>