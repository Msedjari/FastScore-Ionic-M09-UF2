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
    import { IonPage, IonButton } from '@ionic/vue';
    import { useRouter } from 'vue-router';
    
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
      router.push('/register'); // Ruta a la página de registro
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
      width: 750px;
      height: 550px;
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
    }
    
    .logo-container {
      margin-bottom: 20px;
    }
    
    .logo {
      width: 750px;
      height: 550px;
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
    