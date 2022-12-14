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
      <IonImg
        src="https://github.com/tkgstrator/Salmonia3NW/blob/master/salmonia3plus/Assets.xcassets/AppIcon.appiconset/1024.png?raw=true">
      </IonImg>
      <h3>{{ t("about.title") }}</h3>
      <IonText>{{ t("about.text") }}</IonText>
      <h3><a href="faq">{{ t("frequently_asked_question.title") }}</a></h3>
      <IonText>{{ t("frequently_asked_question.text") }}</IonText>
      <h3>{{ t("liability.title") }}</h3>
      <IonText>{{ t("liability.text") }}</IonText>
      <h3><a href="/privacy">{{ t("privacy_policy.title") }}</a></h3>
      <IonText>{{ t("privacy_policy.text") }}</IonText>
      <h3><a href="/agreements">{{ t("license_agreement.title") }}</a></h3>
      <IonText>{{ t("license_agreement.text") }}</IonText>
      <h3>{{ t("contact.title") }}</h3>
      <IonText>{{ t("contact.text") }}</IonText>
    </IonContent>
  </IonPage>
</template>
