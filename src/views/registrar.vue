<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Registro</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content class="ion-padding dark-bg">
        <div class="container py-5">
          <div class="row justify-content-center">
            <div class="col-12 col-md-8 col-lg-6">
              <div class="card shadow-lg border-0 dark-card">
                <div class="card-body p-5">
                  <div class="mb-4 text-center">
                    <h2 class="fw-bold mb-2 text-white">Crear Cuenta</h2>
                    <p color="white" class="text-muted mb-4">Únete a nuestra comunidad deportiva</p>
                  </div>
  
                  <form>
                    <div class="form-group mb-4">
                      <ion-item class="custom-form-control">
                        <ion-label position="floating">Nombre</ion-label><br>
                        <ion-input 
                          v-model="name" 
                          placeholder="Ingresa tu nombre"
                          class="form-control-lg">
                        </ion-input>
                      </ion-item>
                    </div>
  
                    <div class="form-group mb-4">
                      <ion-item class="custom-form-control">
                        <ion-label position="floating">Correo</ion-label><br>
                        <ion-input 
                          v-model="email" 
                          type="email" 
                          placeholder="Ingresa tu correo"
                          class="form-control-lg">
                        </ion-input>
                      </ion-item>
                    </div>
  
                    <div class="form-group mb-4">
                      <ion-item class="custom-form-control">
                        <ion-label position="floating">Contraseña</ion-label><br>
                        <ion-input 
                          v-model="password" 
                          type="password" 
                          placeholder="Ingresa tu contraseña"
                          class="form-control-lg">
                        </ion-input>
                      </ion-item>
                    </div>
                    <div class="buttons-container">
                      <ion-button @click="goToInfo" class="custom-button">Registrarse</ion-button>
                      <p>¿Ya tienes una cuenta? <a href="/login">Inicia sesión</a></p>
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
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton, IonLabel, IonItem } from '@ionic/vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  const name = ref('');
  const email = ref('');
  const password = ref('');

  const goToInfo = () => {
      router.push('/Info');
    };
  </script>
  
  <style scoped>
  .dark-bg {
    --background: black !important;
  }
  
  .dark-card {
    background: #121212;
    border-radius: 15px;
  }
  
  .custom-form-control {
    --background: #1e1e1e;
    --border-color: #333;
    --border-radius: 10px;
    --border-width: 1px;
    --padding-start: 1rem;
    --padding-end: 1rem;
    margin-bottom: 1rem;
  }
  
  ion-input {
    --color: white;
    --placeholder-color: rgba(255, 255, 255, 0.6);
    --padding-start: 0.5rem;
    font-size: 1rem;
  }
  
  ion-label {
    --color: white;
    margin-bottom: 0;
    font-weight: bold;
  }
  
  .buttons-container {
      display: flex;
      flex-direction: column;
      gap: 15px;
      width: 100%; /* Ensure buttons take full width */
      justify-content: center;
      text-align: center;
      margin-left: 0;
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
      margin-left: 170px;
      margin-top: 10px;
      text-align: center;
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
  
  @media (max-width: 768px) {
    .card-body {
      padding: 2rem !important;
    }
    .custom-button {
      margin-left: 0; /* Center button on smaller screens */
      margin-top: 10px;
    }
    .buttons-container {
      flex-direction: column; /* Stack buttons vertically */
      align-items: center; /* Center align buttons */
    }
    ion-input {
      font-size: 0.9rem; /* Adjust font size for smaller screens */
    }
    .p {
      font-size: 0.9rem; /* Adjust paragraph font size for smaller screens */
    }
  }
  
  .p {
    font-size: 1rem;
    align-items: center;
    justify-content: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
  </style>