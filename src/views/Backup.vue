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
      <h3>バックアップ手順</h3>
      <p>下部のタブからマイページを選択し、バックアップボタンを押します。</p>
      <p>JSONファイルが表示されると思うので、「ファイル」アプリなど任意の場所に保存してください。</p>
      <h3>バックアップについて</h3>
      <p>過去のバージョンのバックアップには一部バグがあり、完全に正しいデータを復旧されることができない場合があります。</p>
      <p>バージョン1.2.1以降は現在バグが見つかっていないため、それ以前のバックアップしかない場合はバックアップを取り直すようにしてください。</p>
      <h3>互換性</h3>
      <p>バージョン1.x系でバックアップしたリザルトからの復元はバージョン1.x系のみで有効で、将来的にリリースされる2.x系ではサポートされません。</p>
      <p>また、バックアップ機能は日々改良されているため、バージョンが上がるごとにバックアップをし直すことを強く推奨しています。</p>
      <p>バックアップがない場合、アプリアンインストールなどで失われたデータは取り戻すことができません。</p>
    </IonContent>
  </IonPage>
</template>
