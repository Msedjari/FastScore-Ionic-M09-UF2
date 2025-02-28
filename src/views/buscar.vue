<template>
  <ion-page>
    <ion-buttons slot="start">
      <ion-back-button default-href="/tabs/" style="display: block;"></ion-back-button>
    </ion-buttons>
    <ion-searchbar v-model="searchQuery" placeholder="Buscar equipo, liga o copa" @ionInput="filterTeams" >
      <ion-icon slot="end" src="micro.jpeg" style="display: block;"></ion-icon> <!-- Added audio icon -->
    </ion-searchbar>
    <ion-list style="overflow-y: auto;"> <!-- Added scroll -->
      <ion-item v-for="team in filteredTeams" :key="team.id" class="team-item" @click="selectTeam(team)">
        <div class="team-container">
          <img :src="team.logo" class="team-logo" />
          <div class="team-info">
            <h3 class="team-name">{{ team.name }}</h3>
            <p class="team-championsLeague" v-if="team.championsLeague > 0">
              {{ team.championsLeague }} 
              <img :src="team.localCups.find(cup => cup.name === 'UEFA Champions League')?.logo" 
                   alt="Champions League" class="cup-icon" />
              UEFA Champions League
            </p>
            <p class="team-ligas" v-if="team.leagues > 0">
              {{ team.leagues }}  
              <img :src="team.localCups.find(cup => cup.name === 'Liga')?.logo" 
                   alt="Ligas" class="cup-icon" />
              Liga
            </p>
            <p class="team-localCups">
              <span v-if="team.localCups.length > 0">
                <strong>{{ team.localCups.length }}</strong> 
                <span v-for="(cup, index) in team.localCups" :key="index">
                  {{ index + 1 }}  
                  <img :src="cup.logo" alt="Local Cup" class="cup-icon" /> {{ cup.name }}<span v-if="index < team.localCups.length - 1">, </span>
                </span>
              </span>
              <span v-else>None</span>
            </p>
          </div>
        </div>
        
      </ion-item>
      <h2>Sus últimas búsquedas</h2>
      <ion-item class="team-item">
        <div class="team-container">
          <img src="/realmadrid.png" class="team-logo" />
          <div class="team-info">
            <h3 class="team-name">Real Madrid</h3>
          </div>
        </div>
      </ion-item>
      <h2>Búsquedas más populares</h2>
      <ion-item v-for="popularTeam in popularTeams" :key="popularTeam.id" class="team-item" @click="selectTeam(popularTeam)">
        <div class="team-container" >
          <img :src="popularTeam.logo" class="team-logo" />
          <div class="team-info">
            <h3 class="team-name">{{ popularTeam.name }}</h3>
          </div>
        </div>
      </ion-item>
    </ion-list>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { IonSearchbar, IonList, IonItem, IonIcon ,IonBackButton, IonButtons,IonPage} from '@ionic/vue';
import { useRouter } from 'vue-router';
import { defineComponent } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import '@ionic/vue/css/ionic-swiper.css';

const router = useRouter();

interface Team {
  id: number;
  name: string;
  logo: string;
  championsLeague: number;
  leagues: number;
  localCups: { name: string; logo: string }[];
}

const searchQuery = ref('');
const favoriteTeams = ref<Team[]>([
  // ... (same team data as in Trophy.vue)
]);

const popularTeams = ref<Team[]>([
  { id: 1, name: 'Real Madrid', logo: 'realmadrid.png', championsLeague: 14, leagues: 34, localCups: [] },
  { id: 2, name: 'Manchester United', logo: 'ManUnited.png', championsLeague: 3, leagues: 20, localCups: [] },
  { id: 3, name: 'Manchester City', logo: 'Mancity.png', championsLeague: 1, leagues: 8, localCups: [] },
  { id: 4, name: 'FC Barcelona', logo: 'Barcelona.png', championsLeague: 5, leagues: 26, localCups: [] },
  { id: 5, name: 'Liverpool FC', logo: 'liverpool.png', championsLeague: 6, leagues: 19, localCups: [] },
  { id: 6, name: 'AC Milan', logo: 'milan.png', championsLeague: 7, leagues: 18, localCups: [] },
  { id: 7, name: 'Bayern de Múnich', logo: 'Bayernmunchen.png', championsLeague: 6, leagues: 31, localCups: [] },
]);

const filterTeams = () => {
  // Logic to filter teams
};

const filteredTeams = computed(() => {
  if (!searchQuery.value) {
    return favoriteTeams.value;
  }
  const query = searchQuery.value.toLowerCase();
  return favoriteTeams.value.filter(team => 
    team.name.toLowerCase().includes(query) ||
    team.localCups.some(cup => cup.name.toLowerCase().includes(query)) ||
    team.leagues.toString().includes(query) ||
    team.championsLeague.toString().includes(query)
  );
});

const selectTeam = (team: Team) => {
  // Logic to handle team selection
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
ion-searchbar {
  --background: #2c2c2c;
  --border-radius: 12px;
  --color: #fff;
  --placeholder-color: #fff;
  --width: 30% !important;
}
h2{
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  margin-left: 10px;

}
</style>