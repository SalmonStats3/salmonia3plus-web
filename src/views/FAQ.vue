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
      <div class="content-container">
        <h3>アプリがクラッシュする</h3>
        <p>当アプリはデータベースにデータを保存しており、テストは入念に行っていますがデータの不整合などにより、アプリ起動時またはリザルト取得時にアプリがクラッシュするような場合が想定されます。</p>
        <p>このような場合はアプリを再インストールすることで解決する場合が多いです。</p>
        <p>アプリを一度アンインストールした段階ですべてのデータが失われるので、必要であれば必ず事前にマイページからリザルトのバックアップをとるのを忘れないようにしてください。</p>
        <p>バックアップ方法については<a href="/backup">このページ</a>で手順を説明しております。</p>
        <h3>チャートが表示されない</h3>
        <p>チャート機能はiOS16以上が必須となっています。</p>
        <p>当アプリはiOS15以上の対応ですが、iOS16以上をサポートしていないデバイスは</p>
        <ul>
          <li>iPhone 6s/Plus</li>
          <li>iPhone 7/Plus</li>
          <li>iPhone SE(1Gen)</li>
          <li>iPad Air(3/4Gen)</li>
          <li>iPad (4Gen)</li>
          <li>iPad mini(4Gen)</li>
        </ul>
        <p>になります。これらのデバイスではチャート機能を利用していただくことができません。</p>
        <h3>リザルトが取得できない</h3>
        <p>リザルトが取得できない場合、通信のどこかでエラーが発生している可能性が極めて高いです。</p>
        <p>どの段階でエラーが発生しているかを確認することで、対応方法が異なります。</p>
        <h4>api/schedules, api/summary, api/results</h4>
        <p>未知のブキ、ステージを含むスケジュールやリザルトが含まれるため、データを正しく認識できていない状態です。</p>
        <p>アプリのアップデートが必要になるので、アプリを最新のものに更新するか、対応版がリリースされるのをお待ち下さい。</p>
        <h4>app/id1234806557</h4>
        <p>Appleのサーバーが多数のリクエストにより重くなっている状態です。</p>
        <p>少し時間をおいてから再度試してください。</p>
        <h4>f</h4>
        <p>外部連携サービスが仕様変更または利用できない状態になっています。</p>
        <p>通常、数時間以内に復旧するのでしばらくお待ち下さい。</p>
        <h4>v3/Account/Login, v2/Game/GetWebServiceToken</h4>
        <p>任天堂の仕様変更で認証に必要な要求バージョンが変更された可能性があります。</p>
        <p>通常、時間をおけば問題なく対応できるはずですが十分経っても解決しない場合はアプリのアップデートが必要になる大型変更の可能性があります。</p>
        <h4>api/bullet_tokens</h4>
        <p>任天堂により認証方法の仕様変更が入った可能性があります。</p>
        <p>アプリのアップデートが必要になるので、アプリを最新のものに更新するか、対応版がリリースされるのをお待ち下さい。</p>
        <h4>上記以外</h4>
        <p>アプリの再インストールで解決するという報告を受けています。事前にバックアップをとるのを忘れないようにしてください。</p>
        <p>リザルトのバックアップ取得方法については<a href="/backup">このページ</a>をご参照ください。</p>
      </div>
    </IonContent>
  </IonPage>
</template>
