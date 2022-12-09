<script setup lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonText,
  IonButton,
  IonImg
} from '@ionic/vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n()

function openURL() {
  window.open("npf0c1afa76bd1a3c9b://session_token=eyJhbGciOiJIUzI1NiJ9.eyJzdDpzY3AiOlswLDgsOSwxNywyM10sImV4cCI6MTczMzUzMTk5NywiaWF0IjoxNjcwNDU5OTk3LCJpc3MiOiJodHRwczovL2FjY291bnRzLm5pbnRlbmRvLmNvbSIsImp0aSI6MTA2MzczMzE0OTIsInN1YiI6IjVhZThmN2E3OGIwY2NhNGQiLCJhdWQiOiI3MWI5NjNjMWI3YjZkMTE5IiwidHlwIjoic2Vzc2lvbl90b2tlbiJ9.XsXMV16Rf4rMHj7CPPesX0SmINp8FZOhFRXmyPVP1kk")
}
</script>

<template>
  <IonPage>
    <IonHeader :translucent="true">
      <IonToolbar>
        <IonTitle>{{ t("title") }}</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent :fullscreen="true" class="ion-padding">
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonButton expand="block" shape="round" @click="openURL">{{ t("open_url.title") }}</IonButton>
    </IonContent>
  </IonPage>
</template>

<style lang="scss" scoped>
ion-button {
  width: 200px;
  margin: 0 auto;

}
</style>
