<template>
    <div class="dashboard-container">
      <div class="time-display">{{ currentTime }}</div>
      <div class="date-picker-container">
        <DatePicker v-model="selectedDate" format="MMMM d, yyyy" />
      </div>
      <img class="banner-image" :src="Banner" alt="Error" />
    </div>
  </template>
  
  <script>
  import { ref, onMounted, onUnmounted } from "vue";
  import DatePicker from "vue3-datepicker";
  import "vue3-datepicker/dist/vue3-datepicker.css";
  import Banner from "./assets/img_5.png";
  
  export default {
   // eslint-disable-next-line vue/multi-word-component-names
    name: 'Dashboard',
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
        Banner,
      };
    },
  };
  </script>
  
  <style scoped>
  .dashboard-container {
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
  
  .banner-image {
    margin-left: 20px;
    max-width: 100%;
    height: auto;
  }
  </style>