<template>
    <ion-page>
      
      <div v-if="showSplash" class="splash-screen">
        <img src="/gif.gif" alt="Cargando..." class="splash-gif" />
      </div>
  
      <div v-else class="main-screen">
        <div class="logo-container">
          <img src="/logo.png" alt="FAST SCORE" class="logo" />
        </div>
  
        <div class="buttons-container">
          <ion-button @click="goToLogin" class="custom-button">Iniciar sesión</ion-button>
          <ion-button @click="goToRegister" class="custom-button">Registrarse</ion-button>
        </div>
  
        <div class="social-login">
          <p>Iniciar sesión con:</p>
          <div class="icons">
            <ion-button @click="goToInfo" class="custom-button1">
              <img src="/google.png" class="social-icon" />
            </ion-button>
            <ion-button @click="goToInfo" class="custom-button1">
              <img src="/facebook.png" class="social-icon" />
            </ion-button>
            <ion-button @click="goToInfo" class="custom-button1">
              <img src="/apple.png" class="social-icon" />
            </ion-button>
          </div>
        </div>
      </div>
    </ion-page>
  </template>
  
    <script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import { useRouter } from 'vue-router';
    import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonAvatar, IonButton, IonGrid, IonRow, IonCol, IonList, IonItem, IonIcon, IonLabel, IonActionSheet } from '@ionic/vue';
    import { personOutline, lockClosedOutline, documentTextOutline, chevronForwardOutline } from 'ionicons/icons';
    
    const showSplash = ref(true);
    const router = useRouter();
    
    onMounted(() => {
      setTimeout(() => {
        showSplash.value = false;
      }, 3000); // ⏳ El GIF de carga dura 3 segundos
    });
    
    const goToLogin = () => {
      router.push('/login'); // Ruta a la página de inicio de sesión
    };
    
    const goToRegister = () => {
      router.push('/registrar'); // Ruta a la página de registro
    };
  
      // Función para ir a Info.vue
    const goToInfo = () => {
      router.push('/Info'); // Redirige a Info.vue
    };
      </script>
    
    <style scoped>
    /* Splash screen (pantalla de carga) */
    .splash-screen {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background: black;
    }
    
    .splash-gif {
      width: 100%; /* Make it responsive */
      max-width: 750px; /* Limit max width */
      height: auto; /* Maintain aspect ratio */
    }
    
    /* Pantalla principal */
    .main-screen {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      background: black;
      color: white;
      padding: 20px; /* Add padding for smaller screens */
    }
    
    .logo-container {
      margin-bottom: 20px;
      width: 100%; /* Make it responsive */
      display: flex;
      justify-content: center; /* Center logo */
    }
    
    .logo {
      width: 100%; /* Make it responsive */
      max-width: 750px; /* Limit max width */
      height: auto; /* Maintain aspect ratio */
    }

    /* Responsive styles */
    @media (max-width: 768px) {
      .splash-gif, .logo {
        max-width: 90%; /* Adjust max width for smaller screens */
      }
    }

    @media (max-width: 480px) {
      .splash-gif, .logo {
        max-width: 100%; /* Full width on very small screens */
      }
      .main-screen {
        padding: 10px; /* Reduce padding on small screens */
      }
    }
    
    .buttons-container {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
    .social-icon {
    width: 40px;
    height: auto;
    border-radius: 20px;
  } 
    .custom-button {
      width: 200px;
      height: 40px;
      background-color: orange;
      color: white(255, 255, 255);
      font-weight: bold;
      text-transform: uppercase;
      border-radius: 40px;
      
    }
    
    .social-login {
      margin-top: 20px;
      text-align: center;
    }
    
    .icons {
      display: flex;
      justify-content: center;
      gap: 15px;
      margin-top: 10px;
    }
    
    .social-icon {
      width: 40px;
    }
    
    /* GIF de fuego en la parte inferior */
    .fire-gif {
      width: 10%;
      position: absolute;
      bottom: 0;
    }
    </style>
    