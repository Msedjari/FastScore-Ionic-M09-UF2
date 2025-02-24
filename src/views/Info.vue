<template>
    <ion-page class="info-page">
      <div class="content">
        <img src="/logo.png" alt="FAST SCORE" class="logo" />
        
        <div class="info-box">
          <p>
            <strong>
            <span class="highlight-orange">FastScore</span> es una aplicación web diseñada para los amantes del fútbol, que ofrece 
            resultados en directo, estadísticas detalladas y un historial de partidos anteriores de tus equipos y competiciones favoritas. 
            Además, incluye noticias actualizadas sobre el mundo del fútbol y te permite personalizar tu experiencia 
            seleccionando equipos favoritos, ligas y copas que deseas seguir de cerca. 
            Con una interfaz intuitiva y accesible, <span class="highlight-blue">FastScore</span> busca convertirse en tu mejor 
            compañero para mantenerte al tanto de toda la acción futbolística en tiempo real.
            </strong>
          </p>
        </div>
  
        <ion-button class="next-button" @click="goToMatches">Siguiente →</ion-button>
      </div>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { IonPage, IonButton } from '@ionic/vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const goToMatches = () => {
    router.push('/tabs/Matches'); // Redirige a la página de Matches dentro de tabs
  };
  </script>
  
  <style scoped>
  .info-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: black;
    color: white;
    text-align: center;
    position: relative;
  }
  
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    max-width: 600px;
  }
  
  .logo {
    width: px;
    height: 220px;
  }
  
  .info-box {
    background: rgba(255, 255, 255, 0.1);
    padding: 20px;
    border-radius: 10px;
    font-size: 16px;
    line-height: 1.5;
  }
  
  .highlight-orange {
    color: orange;
    font-weight: bold;
  }
  
  .highlight-blue {
    color: orange;
    font-weight: bold;
  }
  
  .next-button {
    margin-top: 20px;
    background-color: green;
    color: white;
    font-weight: bold;
  }
  
  .fire-effect {
    width: 100%;
    position: absolute;
    bottom: 0;
  }
  </style>
    