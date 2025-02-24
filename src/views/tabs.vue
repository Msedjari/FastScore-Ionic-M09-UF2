<template>
    <ion-page>
      <ion-tabs>
        <ion-router-outlet></ion-router-outlet>
        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="Favoritos" href="/tabs/Favoritos">
            <ion-label>
              <img src="/star.png" class="header-icon" alt="Favoritos Icon" />
            </ion-label>
          </ion-tab-button>
  
          <ion-tab-button tab="Matches" href="/tabs/Matches">
            <ion-label>
              <img src="/campo.png" class="header-icon" alt="Matches Icon" />
            </ion-label>
          </ion-tab-button>
  
          <ion-tab-button tab="News" href="/tabs/News">
            <ion-label>
              <img src="/news.png" class="header-icon" alt="News Icon" />
            </ion-label>
          </ion-tab-button>
  
          <ion-tab-button tab="Trophy" href="/tabs/Trophy">
            <ion-label>
              <img src="/trophy.png" class="header-icon" alt="Trophy Icon" />
            </ion-label>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonPage, IonRouterOutlet } from '@ionic/vue';
  </script>
  