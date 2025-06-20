<template>
  <div id="app" class="app-grid">
    <Sidebar />
    <div class="main-content">
      <video id="bg-video" autoplay loop muted playsinline>
        <source src="@/assets/images/videos/fondo.mp4" type="video/mp4">
        Tu navegador no soporta video HTML5.
      </video>
      <div class="bg-darken"></div>
      <div class="bg-overlay"></div>
      <div class="sidebar-overlay"></div>
      <main>
        <router-view />
      </main>
      <button id="btn-ir-arriba" title="Volver arriba" v-show="showBtn" @click="scrollToTop">
        &#8679;
      </button>
    </div>
    <Footer />
    <nav class="mobile-bottom-nav">
      <router-link to="/" class="nav-btn">
        <img src="@/assets/images/categorias/inicio.webp" alt="Inicio" />
      </router-link>
      <router-link to="/tierlist" class="nav-btn">
        <img src="@/assets/images/categorias/tierlist.webp" alt="Tier List" />
      </router-link>
      <router-link to="/resonadores" class="nav-btn">
        <img src="@/assets/images/categorias/resonadores.webp" alt="Personajes" />
      </router-link>
      <router-link to="/armas" class="nav-btn">
        <img src="@/assets/images/categorias/armas.webp" alt="Armas" />
      </router-link>
    </nav>
  </div>
</template>

<script>
import Sidebar from './views/AppSidebar.vue'
import Footer from './views/Footer.vue'

export default {
  name: 'App',
  components: {
    Sidebar,
    Footer,
  },
  data() {
    return {
      showBtn: false
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    handleScroll() {
      this.showBtn = window.scrollY > 200;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>


<style>
.mobile-bottom-nav {
  display: none;
}

@media (max-width: 800px) {
  .mobile-bottom-nav {
    display: flex !important;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 65px;
    background: #191922;
    box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.15);
    z-index: 1001;
    justify-content: space-around;
    align-items: center;
    padding: 0;
  }

  .mobile-bottom-nav .nav-btn {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    background: none;
    border: none;
    min-width: 0;
    min-height: 0;
    height: 48px;
    width: 48px;
    border-radius: 12px;
    -webkit-tap-highlight-color: transparent;
    outline: none;
    box-shadow: none;
    touch-action: manipulation;
  }

  .mobile-bottom-nav .nav-btn:focus {
    outline: none;
    box-shadow: none;
  }

  .mobile-bottom-nav .nav-btn img {
    width: 30px;
    height: 30px;
    margin: 0;
    display: block;
    transition: transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .mobile-bottom-nav .nav-btn:active img,
  .mobile-bottom-nav .nav-btn:focus-visible img,
  .mobile-bottom-nav .nav-btn.router-link-exact-active img {
    transform: scale(1.30);
  }


  .main-content {
    padding-bottom: 60px;
  }

}
</style>