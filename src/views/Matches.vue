<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title class="main-title">⚽ Matches</ion-title>
          <ion-buttons slot="end" class="buttons-container">
            <img src="/ajustes.png" @click="goToAjustes" class="ajustes-icon"></img>
            <img src="/buscar.png" @click="goToBuscar" class="buscar-icon"></img>
          </ion-buttons>
        </ion-toolbar>
        <ion-segment v-model="selectedSegment" class="custom-segment">
          <ion-segment-button value="live" class="segment-button">
            <strong><ion-label>En directo</ion-label></strong>
          </ion-segment-button>
          <ion-segment-button value="upcoming" class="segment-button">
            <strong><ion-label>Próximos</ion-label></strong>
          </ion-segment-button>
          <ion-segment-button value="leagues" class="segment-button">
            <strong><ion-label>Ligas Fijas</ion-label></strong>
          </ion-segment-button>
        </ion-segment>
      </ion-header>
      <ion-content :fullscreen="true" class="main-content">
        <!-- Vista de partidos en directo -->
        <ion-list v-if="selectedSegment === 'live'" class="matches-list">
          <div v-for="(leagueMatches, league) in liveMatchesByLeague" :key="league" class="league-section">
            <div class="league-header">
              <img :src="leagueLogos[league as keyof LeagueLogos]" class="league-logo" />
              <h2 class="league-title"><strong>{{ league }}</strong></h2>
            </div>
            
            <ion-item v-for="match in leagueMatches" :key="match.id" class="match-item">
              <ion-label>
                <div class="match-container">
                  <div class="team">
                    <img :src="match.homeLogo" class="team-logo" />
                    <span class="team-name"><strong>{{ match.homeTeam }}</strong></span>
                    <span class="score">{{ match.homeScore }}</span>
                  </div>
                  <div class="vs-container">
                    <div class="live-indicator">
                      <span class="live-dot"></span>
                      <span class="minute">{{ match.minute }}'</span>
                    </div>
                  </div>
                  <div class="team">
                    <img :src="match.awayLogo" class="team-logo" />
                    <span class="team-name"><strong>{{ match.awayTeam }}</strong></span>
                    <span class="score">{{ match.awayScore }}</span>
                  </div>
                  <img src="/camiseta.png" class="shirt-icon" alt="Camiseta" />
                </div>
              </ion-label>
            </ion-item>
          </div>
        </ion-list>
  
        <!-- Vista de próximos partidos -->
        <ion-list v-if="selectedSegment === 'upcoming'" class="matches-list">
          <div v-for="(leagueMatches, league) in upcomingMatchesByLeague" :key="league" class="league-section">
            <div class="league-header">
              <img :src="leagueLogos[league as keyof LeagueLogos]" class="league-logo" />
              <h2 class="league-title">{{ league }}</h2>
            </div>
            
            <ion-item v-for="match in leagueMatches" :key="match.id" class="match-item">
              <ion-label>
                <div class="match-container">
                  <div class="team">
                    <img :src="match.homeLogo" class="team-logo" />
                    <span class="team-name"><strong>{{ match.homeTeam }}</strong></span>
                  </div>
                  <div class="vs-container">
                    <img src="/vs.png" class="vs" alt="VS" />
                  </div>
                  <div class="team">
                    <img :src="match.awayLogo" class="team-logo" />
                    <span class="team-name"><strong>{{ match.awayTeam }}</strong></span>
                  </div>
                  <img src="/camiseta.png" class="shirt-icon" alt="Camiseta" />
                </div>
              </ion-label>
            </ion-item>
          </div>
        </ion-list>
  
        <!-- Vista de ligas fijas -->
        <ion-list v-if="selectedSegment === 'leagues'" class="leagues-list">
          <ion-item v-for="league in fixedLeagues" :key="league.name" button @click="showLeagueMatches(league.name)" class="league-item">
            <img :src="league.logo" class="league-logo" slot="start"/>
            <ion-label class="league-name">{{ league.name }}</ion-label>
          </ion-item>
        </ion-list>
  
        <!-- Modal para mostrar partidos de la liga seleccionada -->
        <ion-modal :is-open="showModal" @didDismiss="closeModal" class="league-modal">
          <ion-header>
            <ion-toolbar>
              <ion-title class="modal-title">{{ selectedLeague }}</ion-title>
              <ion-buttons slot="end">
                <ion-button @click="closeModal" class="close-button">Cerrar</ion-button>
              </ion-buttons>
            </ion-toolbar>
          </ion-header>
          <ion-content>
            <ion-list class="modal-matches-list">
              <ion-item v-for="match in leagueMatches" :key="match.id" class="match-item">
                <ion-label>
                  <div class="match-container">
                    <div class="team">
                      <img :src="match.homeLogo" class="team-logo" />
                      <span class="team-name">{{ match.homeTeam }}</span>
                      <span v-if="match.status === 'live'" class="score">{{ match.homeScore }}</span>
                    </div>
                    <div class="vs-container">
                      <div v-if="match.status === 'live'" class="live-indicator">
                        <span class="live-dot"></span>
                        <span class="minute">{{ match.minute }}'</span>
                      </div>
                      <img v-else src="/vs.png" class="vs" alt="VS" />
                    </div>
                    <div class="team">
                      <img :src="match.awayLogo" class="team-logo" />
                      <span class="team-name">{{ match.awayTeam }}</span>
                      <span v-if="match.status === 'live'" class="score">{{ match.awayScore }}</span>
                    </div>
                    <img src="/camiseta.png" class="shirt-icon" alt="Camiseta" />
                  </div>
                </ion-label>
              </ion-item>
            </ion-list>
          </ion-content>
        </ion-modal>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue';
  import { 
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent, 
    IonSegment, IonSegmentButton, IonLabel, IonList, IonItem,
    IonButtons, IonIcon, IonModal, IonButton
  } from '@ionic/vue';
  import { settingsOutline } from 'ionicons/icons';
  import { useRouter } from 'vue-router'
  const router = useRouter();

  const goToAjustes = () => {
    router.push('/ajustes');
  };

  interface Match {
    id: number;
    league: string;
    homeTeam: string;
    homeLogo: string;
    awayTeam: string;
    awayLogo: string;
    status: string;
    homeScore?: number;
    awayScore?: number;
    minute?: number;
  }
  
  const selectedSegment = ref('upcoming');
  const showModal = ref(false);
  const selectedLeague = ref('');
  const leagueMatches = ref<Match[]>([]);
  
  const matches = ref<Match[]>([
    { id: 1, league: 'La Liga', homeTeam: 'Barcelona', homeLogo: '/Barcelona.png', awayTeam: 'Real Madrid', awayLogo: '/realmadrid.png', status: 'live', homeScore: 2, awayScore: 1, minute: 75 },
    { id: 2, league: 'La Liga', homeTeam: 'Atlético', homeLogo: '/atleticomadrid.png', awayTeam: 'Sevilla', awayLogo: '/sevilla.png', status: 'upcoming' },
    { id: 3, league: 'Premier League', homeTeam: 'Manchester City', homeLogo: '/Mancity.png', awayTeam: 'Manchester United', awayLogo: '/ManUnited.png', status: 'live', homeScore: 3, awayScore: 2, minute: 65 },
    { id: 4, league: 'Premier League', homeTeam: 'Arsenal', homeLogo: '/Arsenal.png', awayTeam: 'Chelsea', awayLogo: '/Chelsea.png', status: 'upcoming' },
    { id: 5, league: 'Serie A', homeTeam: 'Inter Milan', homeLogo: '/intermilan.png', awayTeam: 'A.C. Milan', awayLogo: '/milan.png', status: 'live', homeScore: 1, awayScore: 1, minute: 30 },
    { id: 6, league: 'Serie A', homeTeam: 'Juventus', homeLogo: '/juventus.png', awayTeam: 'Napoli', awayLogo: '/napoli.png', status: 'upcoming' },
    { id: 7, league: 'Bundesliga', homeTeam: 'Bayern Munich', homeLogo: '/Bayernmunchen.png', awayTeam: 'Dortmund', awayLogo: '/Dortmund.png', status: 'live', homeScore: 4, awayScore: 2, minute: 82 },
    { id: 8, league: 'Bundesliga', homeTeam: 'Leipzig FC', homeLogo: '/leipzig.png', awayTeam: 'Leverkusen', awayLogo: '/leverkusen.png', status: 'upcoming' },
    { id: 9, league: 'Ligue 1', homeTeam: 'PSG', homeLogo: '/psg.png', awayTeam: 'Marseille', awayLogo: '/marseille.png', status: 'live', homeScore: 2, awayScore: 0, minute: 55 },
    { id: 10, league: 'Ligue 1', homeTeam: 'Lyon', homeLogo: '/lyon.png', awayTeam: 'Monaco', awayLogo: '/monaco.png', status: 'upcoming' },
    { id: 11, league: 'Champions League', homeTeam: 'Real Madrid', homeLogo: '/realmadrid.png', awayTeam: 'Bayern', awayLogo: '/Bayernmunchen.png', status: 'upcoming' },
    { id: 12, league: 'Champions League', homeTeam: 'Manchester City', homeLogo: '/Mancity.png', awayTeam: 'PSG', awayLogo: '/psg.png', status: 'upcoming' },
    { id: 13, league: 'Champions League', homeTeam: 'Barcelona FC', homeLogo: '/Barcelona.png', awayTeam: 'Inter', awayLogo: '/intermilan.png', status: 'upcoming' },
    { id: 14, league: 'Champions League', homeTeam: 'Arsenal FC', homeLogo: '/Arsenal.png', awayTeam: 'Napoli', awayLogo: '/napoli.png', status: 'upcoming' }
  ]);
  
  type LeagueLogos = {
    [key in 'La Liga' | 'Premier League' | 'Serie A' | 'Bundesliga' | 'Ligue 1' | 'Champions League' | 'Euro']: string;
  };
  
  const leagueLogos: LeagueLogos = {
    "La Liga": "/laliga.png",
    "Premier League": "/premierleague.png",
    "Serie A": "/seriea.png",
    "Bundesliga": "/Bundesliga.png",
    "Ligue 1": "/ligue1.png",
    "Champions League": "/championsleague.png",
    "Euro": "/euro.png"
  };
  
  const fixedLeagues = [
    { name: "La Liga", logo: "/laliga.png" },
    { name: "Premier League", logo: "/premierleague.png" },
    { name: "Serie A", logo: "/seriea.png" },
    { name: "Bundesliga", logo: "/Bundesliga.png" },
    { name: "Ligue 1", logo: "/ligue1.png" },
    { name: "Champions League", logo: "/championsleague.png" },
    { name: "Euro", logo: "/eurocopa.png" }
  ];
  
  const showLeagueMatches = (leagueName: string) => {
    selectedLeague.value = leagueName;
    leagueMatches.value = matches.value.filter(match => match.league === leagueName);
    showModal.value = true;
  };
  
  const closeModal = () => {
    showModal.value = false;
  };
  
  const liveMatchesByLeague = computed(() => {
    return matches.value
      .filter(match => match.status === 'live')
      .reduce((acc: { [key: string]: Match[] }, match) => {
        if (!acc[match.league]) {
          acc[match.league] = [];
        }
        acc[match.league].push(match);
        return acc;
      }, {});
  });
  
  const upcomingMatchesByLeague = computed(() => {
    return matches.value
      .filter(match => match.status === 'upcoming')
      .reduce((acc: { [key: string]: Match[] }, match) => {
        if (!acc[match.league]) {
          acc[match.league] = [];
        }
        acc[match.league].push(match);
        return acc;
      }, {});
  });
  const goToBuscar = () => {
    router.push('/buscar');
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
  
  .settings-icon {
    
    font-size: 1.3rem;
    
    color: #fcfcfc;
    
    margin-right: 1rem;
    
  }
  
  .custom-segment {
    
    --background: #2b2929;
    
    padding: 5px;
    
    font-size: 1.2rem;
    
  }
  
  .segment-button {
    
    --color: #ffffff;
    
    --color-checked: #E58F04;
    
    --indicator-color: #E58F04;
    
  }
  
  .matches-list {
    
    padding: 10px;
    
  }
  
  .league-section {
    
    margin-bottom: 20px;
    
    background: #2b2929;
    
    border-radius: 12px;
    
    overflow: hidden;
    
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    
  }
  
  .league-header {
    
    display: flex;
    
    align-items: center;
    
    gap: 12px;
    
    padding: 15px;
    
    background: #2b2929;
    
    border-bottom: 1px solid #eee;
    
    color: #ffffff;
    
  }
  
  .league-title {
    
    font-size: 1.2rem;
    
    font-weight: 600;
    
    color: #ffffff;
    
    margin: 0;

  }
  
  .match-item {
    
    --background: #2b2929;
    
    --border-color: #eee;
    
    --padding-start: 16px;
    
    --padding-end: 16px;
    
    --padding-top: 12px;
    
    --padding-bottom: 12px;
    
  }
  
  .match-container {
    
    display: flex;
    
    align-items: center;
    
    justify-content: space-between;
    
    width: 100%;
    
    padding: 8px 0;
    
  }
  
  .team {
    
    display: flex;
    
    align-items: center;
    
    gap: 12px;
    
    flex: 1;
    
  }
  
  .team-name {
    
    font-size: 0.95rem;
    
    color: #ffffff;
    
    font-weight: 500;
    
  }
  
  .team-logo {
    
    width: 32px;
    
    height: 32px;
    
    object-fit: contain;
    
  }
  
  .vs-container {
    
    display: flex;
    
    align-items: center;
    
    justify-content: center;
    
    width: 80px;
    
  }
  
  .vs {
    
    width: 30px;
    
    height: 30px;
    
    object-fit: contain;
    
  }
  
  .live-indicator {
    
    display: flex;
    
    align-items: center;
    
    gap: 6px;
    
    background: rgba(255,68,68,0.1);
    
    padding: 4px 8px;
    
    border-radius: 12px;
    
  }
  
  .live-dot {
    
    width: 8px;
    
    height: 8px;
    
    background-color: #ff4444;
    
    border-radius: 50%;
    
    animation: blink 1s infinite;
    
  }
  
  .minute {
    
    color: #ff4444;
    
    font-weight: 600;
    
    font-size: 0.9rem;
    
  }
  
  .score {
    
    font-weight: 600;
    
    font-size: 1.1rem;
    
    color: #E58F04;

    
  }
  
  .leagues-list {
    
    padding: 16px;
    
  }
  
  .league-item {
    
    --background: #fff;
    
    --border-radius: 10px;
    
    margin-bottom: 10px;
    
    box-shadow: 0 2px 6px rgba(0,0,0,0.08);
    
  }
  .le
  .league-logo {
    
    width: 36px;
    
    height: 36px;
    
    object-fit: contain;
    
  }
  
  .league-name {
    
    font-weight: 500;
    
    color: #ffffff;
    
  }
  
  .league-modal {
    
    --height: 90%;
    
    --border-radius: 20px 20px 0 0;
    
  }
  .league-item {
    --background: #494646;
  }
  
  .modal-title {
    
    font-size: 1.3rem;
    
    font-weight: 600;
    
  }
  
  .close-button {
    --color: #ffffff;
    --background: #9602024b;
    font-weight: 500;
    
  }
  .buscar-icon{
    width: 35px;
    height: 35px;
    object-fit: contain;
    display: block;       /* Permite centrar el elemento */
    margin: 0 auto;       /* Centrado horizontal */
  }
  .ajustes-icon{
    width: 35px;
    height: 35px;
    object-fit: contain;
    display: block;       /* Permite centrar el elemento */
    margin: 0 auto;       /* Centrado horizontal */
  }
  .buttons-container{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  
  @keyframes blink {
    
    0% { opacity: 1; }
    
    50% { opacity: 0.5; }
    
    100% { opacity: 1; }
    
  }
  
  @media (max-width: 768px) {
    
    .match-container {
      
      flex-direction: row;
      
      gap: 8px;
      
    }
  
    .team {
      
      font-size: 0.9rem;
      
    }
  
    .team-logo {
      
      width: 28px;
      
      height: 28px;
      
    }
  
    .league-logo {
      
      width: 32px;
      
      height: 32px;
      
    }
  
    .score {
      
      font-size: 1rem;
      
    }
    
  }
  
  @media (max-width: 480px) {
    
    .team-name {
      
      font-size: 0.85rem;
      
    }
  
    .team-logo {
      
      width: 24px;
      
      height: 24px;
      
    }
  
    .league-logo {
      
      width: 28px;
      
      height: 28px;
      
    }
  
    .score {
      
      font-size: 0.9rem;
      
    }
  
    .live-indicator {
      
      padding: 3px 6px;
      
    }
  
    .minute {
      
      font-size: 0.8rem;
      
    }
    
  }
  .custom-segment{
    --background: #2b2929;
  }
  .segment-button{
    --background: #2b2929 !important;
    --color: #ffffff !important;
  }
  .segment-button-checked{
    --background: #2b2929 !important;
    --color: #ffffff;
  }
  .league-section{
    text-align: center;
    font-weight: bold;
  }
  </style>