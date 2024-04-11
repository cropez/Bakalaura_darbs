<template>
    <div class="container">
      <h4 class="header">Profile</h4>
      <hr class="divider" />
  
      <div class="grid-container">
        <div class="grid-item personal-info">
          <div class="card">
            <div class="card-content">
              <h6>Personīgā informācija</h6>
              <p>Vārds:{{ profileData.firstName }}</p>
              <p>Uzvārds: {{ profileData.lastName }}</p>
              <p>Loma: {{ profileData.role }}</p>
            </div>
          </div>
        </div>
  
        <div class="grid-item bio">
          <div class="card">
            <div class="card-content">
              <h6>Biogrāfija</h6>
              <p>{{ profileData.bio }}</p>
            </div>
          </div>
        </div>
  
        <div class="grid-item edit-profile">
          <button class="edit-profile-btn">
            Rediģēt profilu
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Profile',
    data() {
      return {
        profileData: {
          firstName: 'test',
          lastName: 'test',
          role: 'Admin',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
      };
    }
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 1140px;
    margin: auto;
  }
  .header {
    text-align: center;
    margin-top: 40px;
  }
  .divider {
    margin-top: 16px;
    margin-bottom: 24px;
  }
  .grid-container {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 16px;
  }
  .grid-item {
    grid-column: span 12;
  }
  .personal-info {
    grid-column: span 4;
  }
  .bio {
    grid-column: span 8;
  }
  .edit-profile {
    grid-column: span 2;
    margin-top: 24px;
  }
  .card {
    border: 1px solid #e0e0e0;
    border-radius: 4px;
  }
  .card-content {
    padding: 16px;
  }
  .edit-profile-btn {
    width: 100%;
    padding: 10px;
    background-color: #1976d2;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .edit-profile-btn:hover {
    background-color: #1565c0;
  }
  </style>
  