<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Trophy Showcase</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Trophy Showcase</ion-title>
          </ion-toolbar>
        </ion-header>
  
        <ion-list>
          <ion-item
            v-for="team in favoriteTeams"
            :key="team.id"
            class="team-item"
            @click="selectTeam(team)">
            <div class="team-container">
              <img :src="team.logo" class="team-logo" />
              <div class="team-info">
                <h3 class="team-name">{{ team.name }}</h3>
                <p class="team-championsLeague">
                  <span v-if="team.championsLeague > 0">
                    {{ team.championsLeague }}
                    <img
                      :src="team.localCups.find(cup => cup.name === 'UEFA Champions League')?.logo"
                      alt="Champions League"
                      class="cup-icon"
                    />
                    UEFA Champions League
                  </span>
                </p>
                <p class="team-ligas">
                  <span v-if="team.leagues > 0">
                    {{ team.leagues }}
                    <img
                      :src="team.localCups.find(cup => cup.name === 'Liga' || cup.name === 'Premier league' || cup.name === 'Bundesliga')?.logo"
                      alt="League Title"
                      class="cup-icon"
                    />
                    League Title
                  </span>
                </p>
                <p class="team-localCups">
                  <span v-if="filterLocalCups(team.localCups).length > 0">
                    <strong>{{ filterLocalCups(team.localCups).length }}</strong>
                    <span
                      v-for="(cup, index) in filterLocalCups(team.localCups)"
                      :key="index"
                    >
                      <span>
                        {{ index + 1 }}
                        <img
                          :src="cup.logo"
                          alt="Local Cup"
                          class="cup-icon"
                        />{{ cup.name }}
                      </span>
                      <span v-if="index < filterLocalCups(team.localCups).length - 1">, </span>
                    </span>
                  </span>
                  <span v-else>None</span>
                </p>
              </div>
            </div>
          </ion-item>
        </ion-list>
  
        <div v-if="selectedTeam" class="info-box" @click.self="selectedTeam = null">
          <div class="info-content">
            <h2>{{ selectedTeam.name }}</h2>
            <img :src="selectedTeam.logo" class="modal-logo" />
            <h3>
              <span v-if="selectedTeam.championsLeague > 0">
                {{ selectedTeam.championsLeague }}
                <img
                  :src="selectedTeam.localCups.find(cup => cup.name === 'UEFA Champions League')?.logo"
                  alt="Champions League"
                  class="cup-icon"
                />
                UEFA Champions League
              </span>
            </h3>
            <h3>
              <span v-if="selectedTeam.leagues > 0">
                {{ selectedTeam.leagues }}
                <img
                  :src="selectedTeam.localCups.find(cup => cup.name === 'Liga' || cup.name === 'Premier league' || cup.name === 'Bundesliga')?.logo"
                  alt="League Title"
                  class="cup-icon"
                />
                League Title
              </span>
            </h3>
            <h3>
              <strong>
                {{ filterLocalCups(selectedTeam.localCups).length > 0 ? filterLocalCups(selectedTeam.localCups).length : 'None' }}
              </strong>
              <span v-if="filterLocalCups(selectedTeam.localCups).length > 0">
                <span
                  v-for="(cup, index) in filterLocalCups(selectedTeam.localCups)"
                  :key="index"
                >
                  {{ index + 1 }}
                  <img
                    :src="cup.logo"
                    alt="Local Cup"
                    class="cup-icon"
                  />{{ cup.name }}
                  <span v-if="index < filterLocalCups(selectedTeam.localCups).length - 1">, </span>
                </span>
              </span>
            </h3>
          </div>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem } from '@ionic/vue';
  
  interface Cup {
    name: string;
    logo: string;
  }
  
  interface Team {
    id: number;
    name: string;
    logo: string;
    championsLeague: number;
    leagues: number;
    localCups: Cup[];
  }
  
  const favoriteTeams = ref<Team[]>([
    { id: 1, name: 'Real Madrid', logo: '/realmadrid.png', championsLeague: 15, leagues: 34, localCups: [ { name: 'UEFA Champions League', logo: '/championsleague.png' }, { name: 'Liga', logo: '/laliga.png' }, { name: 'Copa del Rey', logo: '/copa_del_rey.png' }, { name: 'Supercopa de España', logo: '/supercopa.png' }] },
    { id: 2, name: 'Barcelona', logo: '/Barcelona.png', championsLeague: 5, leagues: 27, localCups: [{ name: 'UEFA Champions League', logo: '/championsleague.png' }, { name: 'Liga', logo: '/laliga.png' }, { name: 'Copa del Rey', logo: '/copa_del_rey.png' }, { name: 'Supercopa de España', logo: '/supercopa.png' }] },
    { id: 3, name: 'Manchester United', logo: '/ManUnited.png', championsLeague: 3, leagues: 20, localCups: [{ name: 'UEFA Champions League', logo: '/championsleague.png' }, { name: 'Premier league', logo: '/premierleague.png' }, { name: 'FA Cup', logo: '/fa_cup.png' }, { name: 'EFL Cup', logo: '/efl_cup.png' }] },
    { id: 4, name: 'Liverpool', logo: '/liverpool.png', championsLeague: 6, leagues: 18, localCups: [{ name: 'UEFA Champions League', logo: '/championsleague.png' }, { name: 'Premier league', logo: '/premierleague.png' }, { name: 'FA Cup', logo: '/fa_cup.png' }, { name: 'EFL Cup', logo: '/efl_cup.png' }] },
    { id: 5, name: 'Bayern Munich', logo: '/Bayernmunchen.png', championsLeague: 5, leagues: 31, localCups: [{ name: 'UEFA Champions League', logo: '/championsleague.png' },{ name: 'Bundesliga', logo: '/bundesliga.png' }, { name: 'DFB-Pokal', logo: '/dfb_pokal.png' }, { name: 'DFL-Supercup', logo: '/dfl_supercup.png' }] },
    { id: 6, name: 'PSG', logo: '/psg.png', championsLeague: 0, leagues: 10, localCups: [{ name: 'Coupe de France', logo: '/coupe_de_france.png' }, { name: 'Trophée des Champions', logo: '/trophee_des_champions.png' }] },
    { id: 7, name: 'Juventus', logo: '/juventus.png', championsLeague: 3, leagues: 36, localCups: [{ name: 'Coppa Italia', logo: '/coppa_italia.png' }, { name: 'Supercoppa Italiana', logo: '/supercopa_italiana.png' }] },
    { id: 8, name: 'Milan', logo: '/milan.png', championsLeague: 7, leagues: 17, localCups: [{ name: 'Coppa Italia', logo: '/coppa_italia.png' }, { name: 'Supercoppa Italiana', logo: '/supercopa_italiana.png' }] },
    { id: 9, name: 'Manchester City', logo: '/Mancity.png', championsLeague: 1, leagues: 8, localCups: [{ name: 'FA Cup', logo: '/fa_cup.png' }, { name: 'EFL Cup', logo: '/efl_cup.png' }] },
    { id: 10, name: 'Arsenal', logo: '/Arsenal.png', championsLeague: 0, leagues: 13, localCups: [{ name: 'FA Cup', logo: '/fa_cup.png' }] },
    { id: 11, name: 'Chelsea', logo: '/Chelsea.png', championsLeague: 2, leagues: 6, localCups: [{ name: 'FA Cup', logo: '/fa_cup.png' }, { name: 'EFL Cup', logo: '/efl_cup.png' }] },
    { id: 12, name: 'Tottenham', logo: '/spurs.png', championsLeague: 0, leagues: 2, localCups: [] },
    { id: 13, name: 'Atletico Madrid', logo: '/atleticomadrid.png', championsLeague: 0, leagues: 11, localCups: [{ name: 'Copa del Rey', logo: '/copa_del_rey.png' }] },
    { id: 14, name: 'Sevilla', logo: '/sevilla.png', championsLeague: 0, leagues: 1, localCups: [{ name: 'Copa del Rey', logo: '/copa_del_rey.png' }] },
    { id: 15, name: 'Borussia Dortmund', logo: '/Dortmund.png', championsLeague: 1, leagues: 8, localCups: [{ name: 'DFB-Pokal', logo: '/dfb_pokal.png' }] },
    { id: 16, name: 'RB Leipzig', logo: '/leipzig.png', championsLeague: 0, leagues: 2, localCups: [] },
    { id: 17, name: 'Inter', logo: '/intermilan.png', championsLeague: 3, leagues: 19, localCups: [{ name: 'Coppa Italia', logo: '/coppa_italia.png' }] },
    { id: 18, name: 'Napoli', logo: '/napoli.png', championsLeague: 0, leagues: 2, localCups: [{ name: 'Coppa Italia', logo: '/copa_del_rey.png' }] },
    { id: 19, name: 'Lyon', logo: '/lyon.png', championsLeague: 0, leagues: 7, localCups: [{ name: 'Coupe de France', logo: '/coupe_de_france.png' }] },
    { id: 20, name: 'Marseille', logo: '/marseille.png', championsLeague: 0, leagues: 9, localCups: [{ name: 'Coupe de France', logo: '/coupe_de_france.png' }] },
  ]);
  
  const selectedTeam = ref<Team | null>(null);
  
  const selectTeam = (team: Team) => {
    selectedTeam.value = team;
  };
  
  // Función auxiliar que filtra Champions League y los títulos de liga de los trofeos locales
  const filterLocalCups = (cups: Cup[]) => {
    const excluded = ['UEFA Champions League', 'Liga', 'Premier league', 'Bundesliga'];
    return cups.filter(cup => !excluded.includes(cup.name));
  };
  </script>
  
  <style scoped>
  .team-item {
    --background: #2c2c2c;
    --border-radius: 12px;
    margin-bottom: 20px;
    padding: 25px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.4);
    transition: transform 0.3s, box-shadow 0.3s;
  }
  
  .team-item:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  }
  
  .team-container {
    display: flex;
    align-items: center;
  }
  
  .team-logo {
    width: 70px;
    height: 70px;
    margin-right: 25px;
    border-radius: 10px;
  }
  
  .cup-icon {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
  
  .info-box {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.95);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .info-content {
    background-color: #2c2c2c;
    padding: 40px;
    border-radius: 20px;
    color: white;
    text-align: center;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.4);
  }
  
  .modal-logo {
    width: 140px;
    height: 140px;
    margin-bottom: 25px;
    border-radius: 35px;
    border: 3px solid #E58F04;
  }
  </style>
  