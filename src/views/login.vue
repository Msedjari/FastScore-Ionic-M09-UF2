<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Iniciar Sesión</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content class="ion-padding">
        <ion-input v-model="email" label="Correo" placeholder="Ingresa tu correo" type="email"></ion-input>
        <ion-input v-model="password" label="Contraseña" placeholder="Ingresa tu contraseña" type="password"></ion-input>
        <ion-button expand="full" @click="goToInfo">Ingresar</ion-button>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton } from '@ionic/vue';
  import { useRouter } from 'vue-router';
  
  const email = ref('mouad10@gmail.com');
  const password = ref('mouad1234');
  const router = useRouter();
  
  const login = () => {
    console.log('Iniciando sesión con:', { email: email.value, password: password.value });
  };
   // Función para ir a Info.vue
   const goToInfo = () => {
    if(email.value == 'mouad10@gmail.com' && password.value == 'mouad1234'){
      router.push('/Info');
    }
    else{
      alert('Correo o contraseña incorrecto')
    }
     // Redirige a Info.vue
    };
  </script>
  
  <style scoped>
  ion-content {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  </style>
  