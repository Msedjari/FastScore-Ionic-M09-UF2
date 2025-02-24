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
                    <p class="text-muted mb-4">Únete a nuestra comunidad deportiva</p>
                  </div>
  
                  <form>
                    <div class="form-group mb-4">
                      <ion-item class="custom-form-control">
                        <ion-label position="floating">Nombre</ion-label>
                        <ion-input 
                          v-model="name" 
                          placeholder="Ingresa tu nombre"
                          class="form-control-lg">
                        </ion-input>
                      </ion-item>
                    </div>
  
                    <div class="form-group mb-4">
                      <ion-item class="custom-form-control">
                        <ion-label position="floating">Correo</ion-label>
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
                        <ion-label position="floating">Contraseña</ion-label>
                        <ion-input 
                          v-model="password" 
                          type="password" 
                          placeholder="Ingresa tu contraseña"
                          class="form-control-lg">
                        </ion-input>
                      </ion-item>
                    </div>
  
                    <ion-button 
                      expand="block" 
                      class="mt-4 py-2" 
                      @click="register">
                      Crear cuenta
                    </ion-button>
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
  
  const register = () => {
    // Validación básica
    if (!name.value || !email.value || !password.value) {
      alert('Por favor, rellena todos los campos');
      return;
    }
    
    console.log('Registrando:', { name: name.value, email: email.value, password: password.value });
    router.push('/Info'); // Volvemos a la redirección original a Info.vue
  };
  </script>
  
  <style scoped>
  .dark-bg {
    --background: black;
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
  }
  
  ion-button {
    --background: #31E504;
    --background-activated: #2acc04;
    --background-hover: #2acc04;
    --border-radius: 10px;
    font-weight: 600;
    font-size: 1.1rem;
    height: 48px;
    margin: 1rem 0;
  }
  
  @media (max-width: 768px) {
    .card-body {
      padding: 2rem !important;
    }
  }
  </style>