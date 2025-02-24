<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title class="main-title"><img src="/star.png" style="width: 24px; height: 24px; vertical-align: middle; background: transparent;"> Favoritos</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true" class="main-content">
        <ion-list class="teams-list">
          <ion-item v-for="team in favoriteTeams" :key="team.id" class="team-item">
            <div class="team-container">
              <img :src="team.logo" class="team-logo" />
              <div class="team-info">
                <h3 class="team-name">{{ team.name }}</h3>
                <p class="team-league">{{ team.league }}</p>
              </div>
              <ion-button fill="clear" class="favorite-button" @click="removeFromFavorites(team.id)">
                <img src="/star.png" style="width: 24px; height: 24px; background: transparent;">
              </ion-button>
            </div>
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonButton, IonIcon } from '@ionic/vue';
  import { starSharp, starOutline } from 'ionicons/icons';
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const favoriteTeams = ref([
    { id: 1, name: 'Real Madrid', league: 'La Liga', logo: '/realmadrid.png' },
    { id: 2, name: 'Barcelona', league: 'La Liga', logo: '/Barcelona.png' },
    { id: 3, name: 'Manchester United', league: 'Premier League', logo: '/ManUnited.png' },
    { id: 4, name: 'Liverpool', league: 'Premier League', logo: '/liverpool.png' },
    { id: 5, name: 'Bayern Munich', league: 'Bundesliga', logo: '/Bayernmunchen.png' },
    { id: 6, name: 'PSG', league: 'Ligue 1', logo: '/psg.png' },
    { id: 7, name: 'Juventus', league: 'Serie A', logo: '/juventus.png' },
    { id: 8, name: 'Milan', league: 'Serie A', logo: '/milan.png' },
    { id: 9, name: 'Manchester City', league: 'Premier League', logo: '/Mancity.png' },
    { id: 10, name: 'Arsenal', league: 'Premier League', logo: '/Arsenal.png' },
    { id: 11, name: 'Chelsea', league: 'Premier League', logo: '/Chelsea.png' },
    { id: 12, name: 'Tottenham', league: 'Premier League', logo: '/spurs.png' },
    { id: 13, name: 'Atletico Madrid', league: 'La Liga', logo: '/atleticomadrid.png' },
    { id: 14, name: 'Sevilla', league: 'La Liga', logo: '/sevilla.png' },
    { id: 16, name: 'Borussia Dortmund', league: 'Bundesliga', logo: '/Dortmund.png' },
    { id: 17, name: 'RB Leipzig', league: 'Bundesliga', logo: '/leipzig.png' },
    { id: 18, name: 'Inter', league: 'Serie A', logo: '/intermilan.png' },
    { id: 19, name: 'Napoli', league: 'Serie A', logo: '/napoli.png' },
    { id: 21, name: 'Lyon', league: 'Ligue 1', logo: '/lyon.png' },
    { id: 22, name: 'Marseille', league: 'Ligue 1', logo: '/marseille.png' },
  ]);
  
  const removeFromFavorites = (teamId: number) => {
    favoriteTeams.value = favoriteTeams.value.filter(team => team.id !== teamId);
  };
  
  const navigateTo = (option: string) => {
    router.push(`/${option}`);
  };
  </script>
  
  <style scoped>
  .main-content {
    --background: #000000;
  }
  
  .main-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: #ffffff;
  }
  
  .teams-list {
    padding: 16px;
  }
  
  .team-item {
    --background: #000000;
    --border-radius: 10px;
    margin-bottom: 10px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.08);
  }
  
  .team-container {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 8px;
  }
  
  .team-logo {
    width: 48px;
    height: 48px;
    object-fit: contain;
    margin-right: 16px;
  }
  
  .team-info {
    flex: 1;
  }
  
  .team-name {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 500;
    color: #ffffff;
  }
  
  .team-league {
    margin: 4px 0 0;
    font-size: 0.9rem;
    color: #cccccc;
  }
  
  .favorite-button {
    --color: #E58F04;
  }
  
  .star-icon {
    font-size: 1.5rem;
  }
  .team-name {
    justify-content: right;
  }
  </style>
  