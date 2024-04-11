<template>
    <div class="container">
      <div class="auth-container">
        <h1>Autorizācija</h1>
        <form @submit.prevent="handleSubmit">
          <div class="input-wrapper">
            <label for="email">Lietotājvārds vai Email</label>
            <input
              type="email"
              id="email"
              required
              v-model="email"
              @input="emailErr = ''"
              :class="{ 'is-invalid': emailErr }"
            />
            <span v-if="emailErr">{{ emailErr }}</span>
          </div>
          <div class="input-wrapper">
            <label for="password">Parole</label>
            <input
              type="password"
              id="password"
              required
              v-model="password"
              @input="passwordErr = ''"
              :class="{ 'is-invalid': passwordErr }"
            />
            <span v-if="passwordErr">{{ passwordErr }}</span>
          </div>
          <div class="checkbox-wrapper">
            <input
              type="checkbox"
              id="remember"
              v-model="remember"
            />
            <label for="remember">Atcerēties mani</label>
          </div>
          <button
            type="submit"
            :disabled="loading"
          >
            Ienākt
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default {
    name: 'Autorizacija',
    setup() {
      const router = useRouter();
      const email = ref('');
      const password = ref('');
      const remember = ref(false);
      const loading = ref(false);
      const emailErr = ref('');
      const passwordErr = ref('');
  
      const EMAIL = 'mail@example.com';
      const PASSWORD = 'password';
  
      const handleSubmit = async () => {
        if (!email.value) emailErr.value = 'Enter email';
        if (!password.value) passwordErr.value = 'Enter password';
  
        if (emailErr.value || passwordErr.value) return;
  
        loading.value = true;
  
        await new Promise(resolve => setTimeout(resolve, 3000));
  
        if (email.value !== EMAIL) {
          emailErr.value = 'Email is invalid';
        }
  
        if (password.value !== PASSWORD) {
          passwordErr.value = 'Password is invalid';
        }
  
        if (!emailErr.value && !passwordErr.value) {
          if (remember.value) {
            localStorage.setItem('auth', '1');
          }
          router.push('/catalog');
        }
        loading.value = false;
      };
  
      return {
        email,
        password,
        remember,
        loading,
        emailErr,
        passwordErr,
        handleSubmit
      };
    }
  };
  </script>
  
  <style>
  .container {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
  }
  .auth-container {
    display: flex;
    flex-direction: column;
  }
  .input-wrapper {
    margin-bottom: 20px;
  }
  .input-wrapper label {
    display: block;
  }
  .input-wrapper input {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
  }
  .input-wrapper .is-invalid {
    border-color: red;
  }
  .input-wrapper span {
    color: red;
    font-size: 0.8rem;
  }
  .checkbox-wrapper {
    margin-bottom: 20px;
  }
  button {
    padding: 10px 20px;
    cursor: pointer;
  }
  </style>
  