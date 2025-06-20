<template>
  <div>
    <div class="sidebar-overlay"></div>

    <nav id="sidebar">
      <div class="sidebar-header">
        <a href="../index.html">
          <img src="@/assets/images/logo.webp" class="logo-wuwalabs" alt="Logo de WuWa Labs" width="120" height="36">
          <img src="@/assets/images/logo2.webp" class="logo-wuwalabsmini" alt="Logo de WuWa Labs pequeño" width="40"
            height="40">
        </a>
      </div>
      <ul>
        <li>
          <a href="../index.html" class="menu-link-flex">
            <span>Inicio</span>
            <img src="@/assets/images/categorias/inicio.webp" alt="Inicio" class="menu-icon-img">
          </a>
        </li>
        <li class="divider"></li>
        <li>
          <a href="../pages/tierlist.html" class="menu-link-flex">
            <span>Tier List</span>
            <img src="@/assets/images/categorias/tierlist.webp" alt="Tier List" class="menu-icon-img">
          </a>
        </li>
        <li class="divider"></li>
        <li>
          <a href="../pages/resonadores.html" class="menu-link-flex">
            <span>Resonadores</span>
            <img src="@/assets/images/categorias/resonadores.webp" alt="Resonadores" class="menu-icon-img">
          </a>
        </li>
        <li>
          <a href="../pages/armas.html" class="menu-link-flex active">
            <span>Armas</span>
            <img src="@/assets/images/categorias/armas.webp" alt="Armas" class="menu-icon-img">
          </a>
        </li>
        <li class="divider"></li>
        <li>
          <a href="#" class="menu-link-flex">
            <span>Mods</span>
            <img src="@/assets/images/categorias/mods.webp" alt="Mods" class="menu-icon-img">
          </a>
        </li>
        <li class="divider"></li>
        <li>
          <a href="https://forms.gle/2kPYNky9kRuUnLqQ7" target="_blank" class="menu-link-flex">
            <span>Feedback</span>
            <img src="@/assets/images/categorias/feedback.webp" alt="Feedback" class="menu-icon-img">
          </a>
        </li>
      </ul>
    </nav>

    <!-- Encabezado de la guía -->

    <div class="guide-header">
      <div class="guide-breadcrumbs">
        <router-link to="/">Wuthering Labs</router-link> / <span>Armas</span>
      </div>
      <div class="guide-header-main">
        <div class="intro-anim">
          <div class="guide-img-wrapper">
            <img src="@/assets/images/armas/stellarsymphony.webp" alt="Armas de Wuthering Waves"
              class="guide-img default">
            <img src="@/assets/images/armas/luminoushymn.webp" alt="Armas de Wuthering Waves" class="guide-img hover">
          </div>
        </div>
        <div class="guide-header-info">
          <h1 class="guide-header-title">Armas</h1>
          <div class="guide-header-desc">Base de datos con todas las armas <b>disponibles</b> de Wuthering Waves hasta
            la fecha.</div>
          <div class="guide-header-date">última actualización: <b>15/06/2025</b></div>
        </div>
      </div>
    </div>



    <h2 class="guides-title"> <ion-icon name="man-outline"></ion-icon> RESONADORES</h2>

    <!-- Filtros -->

    <div class="filters-bar">
      <div class="filters-group search-group">
        <input type="text" class="filter-search" placeholder="Buscar personaje...">
      </div>

      <div class="filters-group stars">
        <button class="filter-btn active" title="Todos"><i class="bi bi-asterisk"></i></button>
        <button class="filter-btn" title="Rareza 1 estrellas">1★</button>
        <button class="filter-btn" title="Rareza 2 estrellas">2★</button>
        <button class="filter-btn" title="Rareza 3 estrellas">3★</button>
        <button class="filter-btn" title="Rareza 4 estrellas">4★</button>
        <button class="filter-btn" title="Rareza 5 estrellas">5★</button>
      </div>

      <div class="filters-group weapons">
        <button class="filter-btn active" title="Todos"><i class="bi bi-asterisk"></i></button>
        <button class="filter-btn" title="Espada">
          <img src="@/assets/images/tipos-armas/weapon_espada.webp" alt="Espada" />
        </button>
        <button class="filter-btn" title="Brazales">
          <img src="@/assets/images/tipos-armas/weapon_brazales.webp" alt="Brazales" />
        </button>
        <button class="filter-btn" title="Pistola">
          <img src="@/assets/images/tipos-armas/weapon_pistola.webp" alt="Pistola" />
        </button>
        <button class="filter-btn" title="Mandoble">
          <img src="@/assets/images/tipos-armas/weapon_mandoble.webp" alt="Mandoble" />
        </button>
        <button class="filter-btn" title="Rectificador">
          <img src="@/assets/images/tipos-armas/weapon_rectificador.webp" alt="Rectificador" />
        </button>
      </div>

      <button class="filter-reset-btn">✖ QUITAR FILTROS</button>
    </div>

    <!-- Armas -->

    <div class="armas-grid">
      <div class="arma-card rare-5">
        <div class="arma-tipo">
          <img src="@/assets/images/tipos-armas/weapon_espada.webp" alt="Espada" />
        </div>
        <img class="arma-img" src="@/assets/images/armas/esmeraldadelgenesis.webp" alt="Esmeralda del génesis" />
        <div class="arma-nombre">Esmeralda del génesis</div>
      </div>
      <div class="arma-card rare-5">
        <div class="arma-tipo">
          <img src="@/assets/images/tipos-armas/weapon_rectificador.webp" alt="Rectificador" />
        </div>
        <img class="arma-img" src="@/assets/images/armas/ondascosmicas.webp" alt="Ondas cósmicas" />
        <div class="arma-nombre">Ondas cósmicas</div>
      </div>
      <div class="arma-card rare-5">
        <div class="arma-tipo">
          <img src="@/assets/images/tipos-armas/weapon_pistola.webp" alt="Pistola" />
        </div>
        <img class="arma-img" src="@/assets/images/armas/nieblaestatica.webp" alt="Niebla estática" />
        <div class="arma-nombre">Niebla estática</div>
      </div>
      <div class="arma-card rare-5">
        <div class="arma-tipo">
          <img src="@/assets/images/tipos-armas/weapon_mandoble.webp" alt="Mandoble" />
        </div>
        <img class="arma-img" src="@/assets/images/armas/navajabrillante.webp" alt="Navaja brillante" />
        <div class="arma-nombre">Navaja brillante</div>
      </div>
      <div class="arma-card rare-5">
        <div class="arma-tipo">
          <img src="@/assets/images/tipos-armas/weapon_brazales.webp" alt="Brazales" />
        </div>
        <img class="arma-img" src="@/assets/images/armas/oleadasdelabismo.webp" alt="Oleadas del abismo" />
        <div class="arma-nombre">Oleadas del abismo</div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { onMounted, nextTick } from 'vue'
import { inicializarFiltrosArmas } from '@/utils/filtros-armas.js'

onMounted(() => {
  nextTick(() => {
    inicializarFiltrosArmas()
  })
})
</script>