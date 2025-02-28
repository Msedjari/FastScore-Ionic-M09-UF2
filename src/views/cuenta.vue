<template>
    <ion-page class="account-page">
      <ion-header translucent>
        <ion-toolbar class="header-toolbar">
          <ion-buttons slot="start">
            <ion-back-button default-href="/" />
          </ion-buttons>
          <ion-title>Mi Cuenta</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content fullscreen class="ion-padding">
        <!-- Sección superior: Foto y acciones de perfil -->
        <div class="account-header">
          <ion-avatar class="profile-photo">
            <img :src="profilePhoto" alt="Foto de perfil" />
          </ion-avatar>
          <div class="profile-actions">
            <ion-button @click="openPhotoOptions" class="change-profile-button">
              Cambiar Perfil
            </ion-button>
          </div>
        </div>
  
        <!-- Información del usuario -->
        <div class="account-info">
          <h2 class="user-name">{{ userName }}</h2>
          <p class="email">{{ userEmail }}</p>
          <p class="join-date">Miembro desde: <strong>{{ registrationDate }}</strong></p>
        </div>
  
        <!-- Estadísticas en tarjetas -->
        <ion-grid>
          <ion-row>
            <ion-col size="4" class="stat-card">
              <div class="stat-value">{{ favoritesCount }}</div>
              <div class="stat-label">Competencias</div>
            </ion-col>
            <ion-col size="4" class="stat-card">
              <div class="stat-value">{{ matchesCount }}</div>
              <div class="stat-label">Partidos</div>
            </ion-col>
            <ion-col size="4" class="stat-card">
              <div class="stat-value">{{ teamsCount }}</div>
              <div class="stat-label">Equipos</div>
            </ion-col>
          </ion-row>
        </ion-grid>
  
        <!-- Opciones y acciones -->
        <ion-list class="account-options">
          <ion-item button @click="navigateTo('changeUsername')">
            <ion-icon name="person-outline" slot="start"></ion-icon>
            <ion-label>Cambiar Nombre de Usuario</ion-label>
            <ion-icon name="chevron-forward-outline" slot="end"></ion-icon>
          </ion-item>
          <ion-item button @click="navigateTo('changePassword')">
            <ion-icon name="lock-closed-outline" slot="start"></ion-icon>
            <ion-label>Cambiar Contraseña</ion-label>
            <ion-icon name="chevron-forward-outline" slot="end"></ion-icon>
          </ion-item>
          <ion-item button @click="showTerms('valid')">
            <ion-icon name="document-text-outline" slot="start"></ion-icon>
            <ion-label>Términos Válidos</ion-label>
            <ion-icon name="chevron-forward-outline" slot="end"></ion-icon>
          </ion-item>
          <ion-item button @click="showTerms('current')">
            <ion-icon name="document-text-outline" slot="start"></ion-icon>
            <ion-label>Términos Actuales</ion-label>
            <ion-icon name="chevron-forward-outline" slot="end"></ion-icon>
          </ion-item>
        </ion-list>
  
        <!-- Botones de acción al final -->
        <div class="account-actions">
          <ion-button expand="block" color="warning" @click="logout">Cerrar Sesión</ion-button>
          <ion-button expand="block" color="danger" @click="deleteAccount">Eliminar Cuenta</ion-button>
        </div>
      </ion-content>
  
      <!-- Action Sheet para seleccionar foto de perfil -->
      <ion-action-sheet
        :is-open="isActionSheetOpen"
        @didDismiss="isActionSheetOpen = false"
        header="Selecciona una foto de perfil"
        :buttons="photoOptions.map(photo => ({
          text: photo.name,
          handler: () => selectPhoto(photo.src)
        }))"
      ></ion-action-sheet>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonAvatar, IonButton, IonGrid, IonRow, IonCol, IonList, IonItem, IonIcon, IonLabel, IonActionSheet } from '@ionic/vue';
  import { personOutline, lockClosedOutline, documentTextOutline, chevronForwardOutline } from 'ionicons/icons';
  
  const userName = ref('Mouad Sedjari');
  const userEmail = ref('mouad.sedjari@gmail.com');
  const registrationDate = ref('21 de Septiembre de 2024');
  const favoritesCount = ref(7);
  const matchesCount = ref(0);
  const teamsCount = ref(15);
  const profilePhoto = ref('/photo.jpg'); // Foto de perfil actual
  const isActionSheetOpen = ref(false); // Estado del Action Sheet
  const router = useRouter();
  
  // Opciones de fotos predefinidas
  const photoOptions = [
    { name: 'Foto 1', src: '/photo.jpg' },
    { name: 'Foto 2', src: '/photo2.jpg' },
    { name: 'Foto 3', src: '/photo3.jpg' }
  ];
  
  function openPhotoOptions() {
    isActionSheetOpen.value = true;
  }
  
  function selectPhoto(photoSrc: string) {
    profilePhoto.value = photoSrc;
    isActionSheetOpen.value = false;
  }
  
  function navigateTo(option: string) {
    router.push(`/${option}`);
  }
  
  function logout() {
    router.push('/login');
  }
  
  function deleteAccount() {
    router.push('/registrar');
  }

  // Nueva función para mostrar términos
  function showTerms(type: string) {
    // Lógica para mostrar los términos según el tipo
    console.log(`Mostrar términos: ${type}`);
  }
  </script>
  
  <style scoped>
  /* Fondo moderno y degradado */
  .account-page {
    background: linear-gradient(135deg, #1a1a1a, #333333);
    color: #ffffff;
    min-height: 100vh;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  
  /* Encabezado */
  .header-toolbar {
    --background: transparent;
    --color: #ffffff;
  }
               
  /* Sección de foto y acciones */
  .account-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  
  .profile-photo {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .change-profile-button {
    width: 200px;
    height: 30px;
    margin: 10px 0; /* Center button with margin */
  }
  
  .profile-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .profile-actions {
    display: flex;
    gap: 10px;
  }
  
  /* Información del usuario */
  .account-info {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .user-name {
    margin: 10px 0 5px;
    font-size: 1.5em;
    font-weight: bold;
  }
  
  .email,
  .join-date {
    font-size: 0.95em;
  }
  
  /* Estadísticas en tarjetas */
  .stat-card {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    text-align: center;
    padding: 15px;
    margin: 10px 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    margin-left: auto;
    margin-right: auto;
  }
  
  .stat-value {
    font-size: 1.4em;
    font-weight: bold;
  }
  
  .stat-label {
    font-size: 0.85em;
    margin-top: 5px;
  }
  
  /* Opciones de cuenta */
  .account-options ion-item {
    --background: rgba(255, 255, 255, 0.1);
    --border-color: transparent;
    border-radius: 8px;
    margin-bottom: 10px;
    margin-left: 100px;
    margin-right: 100px;
  }
  
  /* Acciones finales */
  .account-actions {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 0 20px;
    align-items: center; /* Center actions */
  }
  
  .cerrar-sesion-button {
    --border-radius: 8px;
    --padding-start: 20px;
  }

  /* Responsive styles */
  @media (max-width: 768px) {
    .profile-photo {
      width: 120px;
      height: 120px;
    }

    .change-profile-button {
      width: 150px;
      height: 28px;
    }

    .user-name {
      font-size: 1.2em;
    }

    .stat-card {
      padding: 10px;
    }

    .account-options ion-item {
      margin-left: 20px;
      margin-right: 20px;
    }
  }

  @media (max-width: 480px) {
    .user-name {
      font-size: 1em;
    }

    .email,
    .join-date {
      font-size: 0.85em;
    }

    .stat-value {
      font-size: 1.2em;
    }

    .stat-label {
      font-size: 0.75em;
    }

    .account-actions {
      padding: 0 10px;
    }
  }
  
  </style>