<template>
    <div class="container">
      <div class="footer">
        <div class="socialIcon">
          <a href="https://www.youtube.com" target="_blank" class="youtube social">
            <font-awesome-icon :icon="faYoutube" size="2x" />
          </a>
        </div>
        <div class="socialIcon">
          <a href="https://www.facebook.com" target="_blank" class="facebook social">
            <font-awesome-icon :icon="faFacebook" size="2x" />
          </a>
        </div>
        <div class="socialIcon">
          <a href="https://www.twitter.com" target="_blank" class="twitter social">
            <font-awesome-icon :icon="faTwitter" size="2x" />
          </a>
        </div>
        <div class="socialIcon">
          <a href="https://www.instagram.com" target="_blank" class="instagram social">
            <font-awesome-icon :icon="faInstagram" size="2x" />
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
  import { faYoutube, faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
  
  export default {
    components: {
      FontAwesomeIcon,
    },
    setup() {
      return {
        faYoutube,
        faFacebook,
        faTwitter,
        faInstagram,
      };
    },
  };
  </script>
  
  <style>
  .footer {
    padding: 0%;
    margin: 0%;
    justify-content: space-around;
  }
  
  a.social {
    margin: 0 1rem;
    transition: transform 150ms;
    display: inline-block;
  }
  
  a.social:hover {
    transform: translateY(-4px);
  }
  
  a.youtube {
    color: #000000;
  }
  
  a.facebook {
    color: #000000;
  }
  
  a.twitter {
    color: #000000;
  }
  
  a.instagram {
    color: #000000;
  }
  </style>