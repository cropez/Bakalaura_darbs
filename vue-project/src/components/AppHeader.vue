<template>
  <header class="header">
    <div class="container">
      <div class="toolbar">
        <div class="logo" @click="$router.push('/dashboard')">
          Saulkrasti
        </div>
        <nav :class="showMenu ? 'nav-menu active' : 'nav-menu'">
          <button class="nav-menu-item" @click="$router.push('/')">
            Home
          </button>
          <button class="nav-menu-item" @click="$router.push('/contact')">
            Contacti
          </button>
          <button class="nav-menu-item" @click="$router.push('/education')">
            Education
          </button>
          <button class="nav-menu-item" @click="$router.push('/profile')">
            Profile
          </button>
          <button class="nav-menu-item" @click="onLogout">
            Iziet
          </button>
        </nav>
        <button class="menu-toggle" @click="showMenu = !showMenu">
          &#9776;
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false
    };
  },
  methods: {
    onLogout() {
      window.localStorage.removeItem("auth");
      console.log("logout");
      this.$router.push("/");
    }
  }
};
</script>


  <style>
  .header {
    background-color: #386cbb;
    padding: 8px 0;
    color: white;
  }
  
  .container {
    max-width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  
  .logo {
    font-size: 24px;
    font-family: monospace;
    font-weight: 700;
    letter-spacing: 0.3rem;
    cursor: pointer;
  }
  
  .toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  
  .nav-menu {
    display: none;
  }
  
  .nav-menu-item {
    border: 2px solid #ffffff;
    border-radius: 25px;
    padding: 8px 16px;
    margin-left: 10px;
    cursor: pointer;
    background-color: transparent;
    color: #ffffff;
    font-size: 16px;
    font-weight: 500;
    outline: none;
    transition: background-color 0.3s, color 0.3s;
  }
  
  .nav-menu-item:hover {
    background-color: #ffffff;
    color: #3f51b5;
  }
  
  .nav-menu-item:focus {
    box-shadow: 0 0 0 3px rgba(63, 81, 181, 0.5);
  }
  
  .menu-toggle {
    display: inline-block;
    font-size: 24px;
    cursor: pointer;
    background-color: transparent;
    color: #ffffff;
    border: none;
    outline: none;
  }
  
  @media screen and (min-width: 768px) {
    .nav-menu {
      display: flex;
    }
    .menu-toggle {
      display: none;
    }
  }
  
  @media screen and (max-width: 767px) {
    .nav-menu.active {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 100%;
      left: 0;
      background-color: #3f51b5;
      width: 100%;
      padding: 10px 0;
    }
    .nav-menu-item {
display: block;
margin-left: 0;
margin-top: 10px;
}
}
</style>