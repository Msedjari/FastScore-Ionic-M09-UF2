<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button default-href="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Ajustes</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content class="ion-padding">
        <ion-list>
          <ion-list-header>
            <ion-label>Notificaciones push</ion-label>
          </ion-list-header>
  
          <ion-item detail>
            <ion-icon slot="start" :icon="notificationsOutline"></ion-icon>
            <ion-label>Ajustes de notificaciones</ion-label>
            <ion-toggle slot="end"></ion-toggle>
          </ion-item>
  
          <ion-item detail>
            <ion-icon slot="start" :icon="volumeHighOutline"></ion-icon>
            <ion-label>Notificaciones de voz</ion-label>
            <ion-toggle slot="end"></ion-toggle>
          </ion-item>
  
          <ion-list-header>
            <ion-label>Usuario</ion-label>
          </ion-list-header>
  
          <ion-item detail>
            <ion-icon slot="start" :icon="personOutline"></ion-icon>
            <ion-label>msedjai@elpuig.xeill.net</ion-label>
          </ion-item>
  
          <ion-list-header>
            <ion-label>Aspecto</ion-label>
          </ion-list-header>
  
          <ion-item detail>
            <ion-icon slot="start" :icon="moonOutline"></ion-icon>
            <ion-label>Modo oscuro</ion-label>
            <ion-toggle slot="end"></ion-toggle>
          </ion-item>
  
          <ion-list-header>
            <ion-label>Otros</ion-label>
          </ion-list-header>
  
          <ion-item detail>
            <ion-icon slot="start" :icon="homeOutline"></ion-icon>
            <ion-label>Pestaña mostrada al inicio</ion-label>
            <ion-select slot="end" value="matches">
              <ion-select-option value="matches">Partidos</ion-select-option>
              <ion-select-option value="favorites">Favoritos</ion-select-option>
              <ion-select-option value="news">Noticias</ion-select-option>
              <ion-select-option value="trophy">Trofeos</ion-select-option>
            </ion-select>
          </ion-item>
  
          <ion-item detail>
            <ion-icon slot="start" :icon="timeOutline"></ion-icon>
            <ion-label>Zona horaria</ion-label>
            <ion-select slot="end" value="utc1">
              <ion-select-option value="utc0">UTC/GMT +0</ion-select-option>
              <ion-select-option value="utc1">UTC/GMT +1</ion-select-option>
              <ion-select-option value="utc2">UTC/GMT +2</ion-select-option>
            </ion-select>
          </ion-item>
  
          <ion-item detail>
            <ion-icon slot="start" :icon="languageOutline"></ion-icon>
            <ion-label>Idioma</ion-label>
            <ion-select slot="end" value="es">
              <ion-select-option value="es">Español</ion-select-option>
              <ion-select-option value="en">English</ion-select-option>
              <ion-select-option value="ca">Català</ion-select-option>
            </ion-select>
          </ion-item>
  
          <ion-item detail router-link="/Info">
            <ion-icon slot="start" :icon="informationCircleOutline"></ion-icon>
            <ion-label>Más información</ion-label>
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonListHeader,
    IonNote,
    IonButtons,
    IonBackButton,
    IonIcon,
    IonButton,
    IonToggle,
    IonSelect,
    IonSelectOption
  } from '@ionic/vue';
  import {
    notificationsOutline,
    volumeHighOutline,
    personOutline,
    moonOutline,
    homeOutline,
    timeOutline,
    languageOutline,
    informationCircleOutline
  } from 'ionicons/icons';
  </script>
  
  <style scoped>
  ion-list {
    background: transparent;
  }
  
  ion-item {
    --background: #1e1e1e;
    --border-radius: 10px;
    margin-bottom: 8px;
  }
  
  ion-list-header {
    padding-top: 16px;
  }
  
  ion-toggle {
    --background: #1e1e1e;
    --background-checked: #1e1e1e;
    --background-checked-opacity: 1;
  }
  
  ion-select {
    --background: #1e1e1e;
    --border-radius: 10px;
    --padding-start: 16px;
    --padding-end: 16px;
  }
  
  ion-item {
    --background: #1e1e1e;
    --border-radius: 10px;
    margin-bottom: 8px;
  }
  </style>