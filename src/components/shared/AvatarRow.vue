<template>
  <div class="avatars">
    <ion-avatar
      v-for="avatar in avatarsToRender"
      :key="avatar.imgSrc"
      :title="avatar.name"
    >
      <img :src="avatar.imgSrc" />
    </ion-avatar>
  </div>
  <ion-label
    v-if="avatars.length > avatarsToRender.length"
    color="primary"
  >
  {{ `+${avatars.length - avatarsToRender.length} more` }}
  </ion-label>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';
import { Avatar } from "@/interfaces";

import {
  IonAvatar,
  IonLabel,
} from "@ionic/vue";

export default defineComponent({
  components: {
    IonAvatar,
    IonLabel,
  },
  
  props: {
    avatars: {
      type: Object as PropType<Avatar[]>,
      required: true,
    },
    /**
     * Number of avatars to render.
     * 
     * @default 5
     */
    toShow: {
      type: Number,
      default: 5,
    },
  },

  setup(props) {
    const avatarsToRender = computed(() => [...props.avatars].splice(0, props.toShow))

    return {
      avatarsToRender,
    }
  }
})
</script>

<style scoped>
.avatars {
  display: inline-flex;
  flex-direction: row-reverse;
  margin-right: 0.25rem;
}

ion-avatar {
  width: 35px;
  height: 35px;
  position: relative;
  overflow: hidden;
  border: 1px solid #fff;
}

ion-avatar:not(:last-child) {
  margin-left: -15px;
}
</style>