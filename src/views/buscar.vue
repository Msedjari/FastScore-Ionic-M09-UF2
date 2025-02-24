<template>
    <ion-searchbar v-model="searchQuery" placeholder="Buscar equipo, liga o copa" @ionInput="filterTeams">
      <ion-icon slot="start" src="buscar.png"></ion-icon>
    </ion-searchbar>
    <ion-list>
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
    </ion-list>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue';
  
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
  </style>
  