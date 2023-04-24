<template>
    <div>
      <div class="contact-container">
        <div class="time-display">{{ currentTime }}</div>
        <div class="date-picker-container">
          <DatePicker v-model="selectedDate" format="MMMM d, yyyy" />
        </div>
      </div>
      <div class="texts">
        <p>Autor</p>
        <p> Adrese: Saulkrasti, Saulkrastu novads</p>
        <p> Saulkrastu novada Saulkrastu pilsētas</p>
        <p> E-pasts: example@example.com, </p>
        <p> Talrunis :+37122344428</p>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted, onUnmounted } from "vue";
  import DatePicker from "vue3-datepicker";
  import "vue3-datepicker/dist/vue3-datepicker.css";
  
  export default {
     // eslint-disable-next-line vue/multi-word-component-names
    name: 'Contact',
    components: {
      DatePicker,
    },
    setup() {
      const currentTime = ref("");
      const selectedDate = ref(new Date());
  
      const updateCurrentTime = () => {
        currentTime.value = new Date().toLocaleString("en-LV", {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: false,
        });
      };
  
      let interval;
      onMounted(() => {
        updateCurrentTime();
        interval = setInterval(updateCurrentTime, 1000);
      });
  
      onUnmounted(() => {
        clearInterval(interval);
      });
  
      return {
        currentTime,
        selectedDate,
      };
    },
  };
  </script>
  
  <style scoped>
  .contact-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
  
  .time-display {
    display: flex;
    justify-content: center;
    font-size: 3rem;
    margin-top: 40px;
  }
  
  .date-picker-container {
    display: flex;
    align-items: baseline;
    margin-top: 20px;
  }
  
  .texts {
    padding-left: 200px;
    padding-right: 20px;
  }
  </style>