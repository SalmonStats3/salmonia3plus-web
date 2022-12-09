<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
</script>

<template>
  <IonApp>
    <IonRouterOutlet></IonRouterOutlet>
  </IonApp>
</template>

<style lang="scss">
ion-text {
  font-size: 14px;
}

ion-app {
  max-width: 600px;
  margin: 0 auto;
}

ion-img {
  width: 120px;
  height: 120px;
  margin: 0 auto;
  clip-path: circle(50%);
}
</style>
