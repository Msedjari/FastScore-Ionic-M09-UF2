<template>
  <ion-page class="dark-bg">
    <div class="main-screen">
      <div class="logo-container">
        <img src="/logo.png" alt="FAST SCORE" class="logo" />
      </div>
      <ion-content class="ion-padding">
        <ion-form class="form-container ">
          <ion-input v-model="email" label=" Correo :" placeholder="Ingresa tu correo" type="email" />
          <ion-input v-model="password" label=" Contraseña :" placeholder="Ingresa tu contraseña" type="password" />
        
      <div class="buttons-container">
        <ion-button @click="goToInfo" class="custom-button">Iniciar sesión</ion-button>
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
    </ion-form>
  </ion-content>
    </div>  
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
    const goToRegister = () => {
      router.push('/registrar'); // Ruta a la página de registro
    };
  </script>
  <style scoped>
  .dark-bg {
    background: black !important;
  }
  ion-content {
    display: flex;
    flex-direction: column;
    gap: 15px;
    background-color: black;
  }
  ion-page{
    background-color: black;
  }
    /* Pantalla principal */
    .main-screen {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh; /* Changed to height to prevent scrolling */
      background: black;
      color: white;
      padding: 20px; /* Added padding for smaller screens */
    }
    
    .logo-container {
      margin-bottom: 20px;
      margin-top: 0px; /* Adjusted to move the logo up */
    }
    
    .logo {
      width: 100%; /* Changed to responsive width */
      max-width: 300px; /* Reduced max width */
      height: auto; /* Set height to auto for aspect ratio */
    }
    
    .buttons-container {
      display: flex;
      flex-direction: column;
      gap: 15px;
      width: 100%; /* Ensure buttons take full width */
      justify-content: center;
      text-align: center;
      margin-left: -40px;
      margin-top: 10px;
    }
    
    .social-icon {
      width: 40px;
      height: auto;
      border-radius: 20px;
    } 
    
    .custom-button {
      width: 100%; /* Changed to full width */
      max-width: 200px; /* Set max width */
      height: 40px;
      background-color: orange;
      color: white;
      font-weight: bold;
      text-transform: uppercase;
      border-radius: 40px;
      justify-content: center;
      align-items: center;
      margin-left: 80px;
      margin-top: 10px;
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
      flex-wrap: wrap; /* Allow icons to wrap on smaller screens */
    }
    
    .social-icon {
      width: 40px;
    }
    .inner-scroll.scroll-y {
      background-color: black!important;
    }
    .form-container {
      display: flex;
      flex-direction: column;
      gap: 15px;
      width: 100%;
      max-width: 400px;
      margin: 0 auto; 
      padding: 20px;
      border-radius: 10px;
      background-color: #0f0f0f;
      border: 1px solid #000000;
      margin-top: 20px;
      margin-bottom: 20px;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: white;
      font-size: 16px;
      font-weight: bold;
      border-radius: 20px;
      margin-top: 0;
      margin-bottom: 0;
      
    --border-color: #333;
    --border-radius: 10px;
    --border-width: 1px;
    --padding-start: 1rem;
    --padding-end: 1rem;
    margin-bottom: 1rem;
    }
    
    
    .inner-scoll scroll-y{
      overflow: hidden;
      background-color: black;
    }
    ion-content{
      background-color: black;
    }
    ion-form{
      background-color: #292929;
    }
    ion-input {
    --color: white;
    --placeholder-color: rgba(152, 252, 21, 0);
    --padding-start: 0.5rem;
    font-size: 1rem;
    border-radius: 10px;
    margin-bottom: 10px;
    margin-top: 10px; 
    width: 100%;
    max-width: 400px;
    margin: 0 auto; 
    padding: 20px;
    border: 1px solid #333;
    margin-right: 10px;
    margin-left: 10px;
    background-color: #5a5858;
  }
  </style>  
