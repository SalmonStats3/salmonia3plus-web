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

const tkgling: string = "eyJhbGciOiJIUzI1NiJ9.eyJzdDpzY3AiOlswLDgsOSwxNywyM10sImV4cCI6MTczMzUzMTk5NywiaWF0IjoxNjcwNDU5OTk3LCJpc3MiOiJodHRwczovL2FjY291bnRzLm5pbnRlbmRvLmNvbSIsImp0aSI6MTA2MzczMzE0OTIsInN1YiI6IjVhZThmN2E3OGIwY2NhNGQiLCJhdWQiOiI3MWI5NjNjMWI3YjZkMTE5IiwidHlwIjoic2Vzc2lvbl90b2tlbiJ9.XsXMV16Rf4rMHj7CPPesX0SmINp8FZOhFRXmyPVP1kk"

function openURL(token: string) {
  window.open(`npf0c1afa76bd1a3c9b://session_token=${token}`, "_self")
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
      <h1>For Reviewer</h1>
      <p>Salmonia3+ has two ways sign in method, one is using Custom URL Scheme, the other is with id and password.</p>
      <h3>1. Sign in with Custom URL Scheme(Recommend)</h3>
      <IonButton expand="block" shape="round" @click="openURL(tkgling)">{{ t("open_url.title") }}</IonButton>
      <h1>2. Sign in with id and password</h1>
      <ul>
        <li>1. Enter id and password of Nintendo Switch Online.</li>
        <li>2. Nintendo send the verification code.</li>
        <li>3. Open this <a href="https://m.kuku.lu/" target="_blank">link</a>.</li>
        <li>4. Click `Sign in to another account`</li>
        <li>5. Enter id and password of `m.kuku.lu`</li>
        <li>6. The website confirm `Do you want to merge your email address and email into the account you are trying to
          login?`, click `Yes`.</li>
        <li>7. Open <a href="https://m.kuku.lu/recv.php" target="_blacnk">Inbox</a>.</li>
        <li>8. You can check the verification code sent from Nintendo.</li>
      </ul>
    </IonContent>
  </IonPage>
</template>

<style lang="scss" scoped>
ion-button {
  width: 200px;
  margin: 0 auto;
}

ion-text {
  margin-bottom: 10px;
}
</style>
