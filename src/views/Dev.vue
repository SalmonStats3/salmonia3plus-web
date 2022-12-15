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
const identifier: string = "npf0c1afa76bd1a3c9b"
const tkgling: string = "eyJhbGciOiJIUzI1NiJ9.eyJzdDpzY3AiOlswLDgsOSwxNywyM10sImV4cCI6MTczMzUzMTk5NywiaWF0IjoxNjcwNDU5OTk3LCJpc3MiOiJodHRwczovL2FjY291bnRzLm5pbnRlbmRvLmNvbSIsImp0aSI6MTA2MzczMzE0OTIsInN1YiI6IjVhZThmN2E3OGIwY2NhNGQiLCJhdWQiOiI3MWI5NjNjMWI3YjZkMTE5IiwidHlwIjoic2Vzc2lvbl90b2tlbiJ9.XsXMV16Rf4rMHj7CPPesX0SmINp8FZOhFRXmyPVP1kk"
const oshake: string = "eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NzAxNDUyMjksImp0aSI6MTA2MDM4NjI4NTEsInN0OnNjcCI6WzAsOCw5LDE3LDIzXSwidHlwIjoic2Vzc2lvbl90b2tlbiIsImV4cCI6MTczMzIxNzIyOSwiYXVkIjoiNzFiOTYzYzFiN2I2ZDExOSIsImlzcyI6Imh0dHBzOi8vYWNjb3VudHMubmludGVuZG8uY29tIiwic3ViIjoiNDAyMmNlZjg0M2Y1OGM5MSJ9.l8reHGmJ3UsYSW5a2ergz-PjXdNnQphhzKdnogXfUww"

function openURL(token: string) {
  window.open(`${identifier}://salmonia3plus?session_token=${token}`, "_self")
}

function backupURL() {
  window.open(`${identifier}://salmonia3plus?backup_realm`, "_self")
}

function shareURL() {
  window.open(`${identifier}://salmonia3plus?share_account`, "_self")
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
      <h1>開発者向けツール</h1>
      <p>本ツールは開発者及びデバッガー向けのツールです。</p>
      <h2>データベースバックアップ</h2>
      <IonButton expand="block" shape="round" @click="backupURL">バックアップ</IonButton>
      <p>データベース自体のバックアップを取得するリンクです。アプリがクラッシュして動作しない場合などに使えます。</p>
      <h2>アカウント情報共有</h2>
      <IonButton expand="block" shape="round" @click="shareURL">アカウント情報共有</IonButton>
      <p>開発者がテストできるようにアカウント情報を共有します。このアカウント情報には以下のものが含まれます。カッコ内は有効期限です。この中で利用するのはセッショントークンです。</p>
      <ul>
        <li>1. ニックネーム</li>
        <li>2. メンバーシップ加入状況</li>
        <li>3. フレンドコード</li>
        <li>4. サムネイル画像</li>
        <li>5. ニンテンドースイッチアカウントID</li>
        <li>6. スプラトゥーン2用トークン(24時間)</li>
        <li>7. スプラトゥーン3用トークン(2時間)</li>
        <li>8. ゲームサービストークン(2時間)</li>
        <li>9. ゲームウェブトークン(6.5時間)</li>
        <li>10. セッショントークン(730日)</li>
      </ul>
      <p>トークンを利用することでユーザーの生年月日、性別、言語、国を特定することができます。氏名、住所、決済情報などは特定できません。</p>
      <h2>強制サインイン</h2>
      <p>通常のログインプロセスをスキップしてデモ用のアカウントでサインインします。</p>
      <IonButton expand="block" shape="round" @click="openURL(tkgling)">しんさとおして</IonButton>
      <IonButton expand="block" shape="round" @click="openURL(oshake)">きたーん(☆Д☆)</IonButton>
    </IonContent>
  </IonPage>
</template>

<style lang="scss" scoped>
ion-button {
  width: 160px;
  height: 40px;
  margin: 20px auto;
}

ion-text {
  margin-bottom: 10px;
}
</style>
