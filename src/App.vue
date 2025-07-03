<template>
  <div id="app" class="app-grid">
    <Sidebar />
    <div class="main-content">
      <video v-show="isHome && !isMobile" id="bg-video" autoplay loop muted playsinline>
        <source src="@/assets/images/videos/fondo.mp4" type="video/mp4" />
        Tu navegador no soporta video HTML5.
      </video>
      <img id="bg-image" src="@/assets/images/fondo.webp" alt="Fondo"
        :class="{ 'is-home': isHome, 'is-mobile': isMobile }" v-show="!isHome || isMobile" />
      <div v-show="isHome" class="bg-darken-video"></div>
      <div v-show="!isHome" class="bg-darken-image"></div>
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

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import Sidebar from './views/AppSidebar.vue'
import Footer from './views/Footer.vue'

const showBtn = ref(false)
const router = useRouter()
const route = useRoute()

const isHome = computed(() => route.path === '/')

const isMobile = ref(window.innerWidth <= 800)
function handleResize() {
  isMobile.value = window.innerWidth <= 800
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function handleScroll() {
  showBtn.value = window.scrollY > 200;
}
function hideAllTooltips() {
  document.querySelectorAll('.contenido-del-tooltip').forEach(t => {
    t.style.display = 'none'
  })
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
  window.addEventListener('scroll', handleScroll)
  router.afterEach(() => {
    hideAllTooltips()
  })
  document.addEventListener('click', hideAllTooltips)
  window.addEventListener('blur', hideAllTooltips)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', hideAllTooltips)
  window.removeEventListener('blur', hideAllTooltips)
})
</script>

<style>
.mobile-bottom-nav {
  display: none;
}

#bg-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -2;
  pointer-events: none;
  user-select: none;
}

#bg-video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -3;
  pointer-events: none;
  user-select: none;
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

  #bg-video {
    display: none !important;
  }

  #bg-image {
    object-position: 65% center;
  }

  .bg-darken,
  .bg-overlay {
    background: transparent !important;
    opacity: 0.5 !important;
  }

  .bg-darken-video,
  .bg-darken-image {
    opacity: 0.10 !important;
  }
}
</style>