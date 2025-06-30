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
          <a href="../pages/resonadores.html" class="menu-link-flex active">
            <span>Resonadores</span>
            <img src="@/assets/images/categorias/resonadores.webp" alt="Resonadores" class="menu-icon-img">
          </a>
        </li>
        <li>
          <a href="../pages/armas.html" class="menu-link-flex">
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
        <router-link to="/">Wuthering Labs</router-link> / <span>Resonadores</span>
      </div>
      <div class="guide-header-main">
        <div class="intro-anim">
          <div class="guide-img-wrapper">
            <img src="@/assets/images/categorias/wave-sanhua.webp" alt="Personajes de Wuthering Waves"
              class="guide-img default">
            <img src="@/assets/images/categorias/wave-jinhsi.webp" alt="Personajes de Wuthering Waves"
              class="guide-img hover">
          </div>
        </div>
        <div class="guide-header-info">
          <h1 class="guide-header-title">Resonadores</h1>
          <div class="guide-header-desc">Base de datos con todos los personajes <b>jugables</b> de Wuthering Waves
            hasta
            la fecha.</div>
          <div class="guide-header-date">última actualización: <b>14/06/2025</b></div>
        </div>
      </div>
    </div>

    <h2 class="guides-title">RESONADORES</h2>

    <div class="filters-bar">
      <div class="filters-group search-group">
        <input type="text" class="filter-search" placeholder="Buscar personaje...">
      </div>

      <div class="filters-group stars">
        <button class="filter-btn active" title="Todos"><i class="bi bi-asterisk"></i></button>
        <button class="filter-btn" title="Rareza 4 estrellas">4★</button>
        <button class="filter-btn" title="Rareza 5 estrellas">5★</button>
      </div>

      <div class="filters-group elements">
        <button class="filter-btn active" title="Todos"><i class="bi bi-asterisk"></i></button>
        <button class="filter-btn" title="Espectro">
          <img src="@/assets/images/elementos/icon_espectro.webp" alt="Espectro" />
        </button>
        <button class="filter-btn" title="Aero">
          <img src="@/assets/images/elementos/icon_aero.webp" alt="Aero" />
        </button>
        <button class="filter-btn" title="Destrucción">
          <img src="@/assets/images/elementos/icon_havoc.webp" alt="Destrucción" />
        </button>
        <button class="filter-btn" title="Fusion">
          <img src="@/assets/images/elementos/icon_fusion.webp" alt="Fusion" />
        </button>
        <button class="filter-btn" title="Gelio">
          <img src="@/assets/images/elementos/icon_gelio.webp" alt="Gelio" />
        </button>
        <button class="filter-btn" title="Electro">
          <img src="@/assets/images/elementos/icon_electro.webp" alt="Electro" />
        </button>
      </div>

      <div class="filters-group weapons">
        <button class="filter-btn active" title="Todos"><i class="bi bi-asterisk"></i></button>
        <button class="filter-btn" title="Espada">
          <img src="@/assets/images/tipos-armas/weapon_espada.webp" alt="Espada" />
        </button>
        <button class="filter-btn" title="Mandoble">
          <img src="@/assets/images/tipos-armas/weapon_mandoble.webp" alt="Mandoble" />
        </button>
        <button class="filter-btn" title="Pistolas">
          <img src="@/assets/images/tipos-armas/weapon_pistolas.webp" alt="Pistolas" />
        </button>
        <button class="filter-btn" title="Brazales">
          <img src="@/assets/images/tipos-armas/weapon_brazales.webp" alt="Brazales" />
        </button>
        <button class="filter-btn" title="Rectificador">
          <img src="@/assets/images/tipos-armas/weapon_rectificador.webp" alt="Rectificador" />
        </button>
      </div>

      <button class="filter-reset-btn">✖ QUITAR FILTROS</button>
    </div>

    <!-- Personajes -->

    <div class="characters-grid">
      <router-link v-for="(resonador, idx) in resonadores" :key="idx" :to="`/personaje/${resonador.nombre}`"
        style="text-decoration: none;">
        <div :class="['character-card-' + resonador.rareza]" :data-rareza="resonador.rareza"
          :data-elemento="resonador.elemento" :data-arma="resonador.arma" style="position: relative;">
          <span v-if="resonador.nueva" class="new-badge">NUEVA</span>
          <img class="element-icon" :src="resonador.iconoElemento" :alt="resonador.elemento" />
          <img class="character-img" :src="resonador.imagen" :alt="resonador.nombre" />
          <div class="character-name">{{ resonador.nombre }}</div>
          <div class="contenido-del-tooltip">
            <img :class="`resonadores-avatar-${resonador.rareza}`" :src="resonador.avatar" :alt="resonador.nombre" />
            <div class="resonadores-nombre">{{ resonador.nombre }}</div>
            <div class="resonadores-tags">
              <span class="tag tag-rarezas">{{ resonador.rareza }}★</span>
              <span :class="`tag tag-tipo-${resonador.elemento}`">
                <img :src="resonador.iconoElemento" :alt="resonador.elemento" class="tag-iconos" />
                {{ resonador.elemento.charAt(0).toUpperCase() + resonador.elemento.slice(1) }}
              </span>
              <span class="tag tag-armas">
                <img :src="resonador.tags.find(t => t.tipo === 'arma').icono" :alt="resonador.arma"
                  class="tag-iconos" />
                {{ resonador.arma.charAt(0).toUpperCase() + resonador.arma.slice(1) }}
              </span>
            </div>

            <div class="resonadores-roles-tiers">
              <div v-for="(rol, i) in resonador.roles" :key="i" class="rol-con-tier">
                <div :class="['tiers-role', rol.colorClass]">
                  <img :src="rol.icono" :alt="rol.nombre" class="icono-rol" />
                  <span>{{ rol.nombre }}</span>
                </div>
                <div class="resonadores-tiers tiers-row">
                  <div class="tier-grupos" v-for="(tier, j) in rol.tiers" :key="j">
                    <div :class="['tier-box', tierClass(tier.label)]">
                      <div class="tiers-label">{{ tier.label }}</div>
                    </div>
                    <div class="tiers-desc">{{ tier.desc }}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tier-grupos labs-score-label">
              <div :class="['tier-box-labs', resonador.labsScoreTier]">
                <div class="tiers-label">{{ resonador.labsScore }}</div>
              </div>
              <div class="tiers-desc labs-score-desc">
                <i class="bi bi-sort-up"></i> Labs Score
              </div>
            </div>
            <div class="tooltip-arrow"></div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import resonadores from '@/utils/resonadores.js'
import { onMounted, nextTick } from 'vue'
import { inicializarTooltips } from '@/utils/tooltips-resonadores.js'
import { inicializarFiltrosResonadores } from '@/utils/filtros-resonadores.js'

function tierClass(label) {
  switch (label) {
    case 'S+': return 'tier-box-ss'
    case 'S': return 'tier-box-s'
    case 'A+': return 'tier-box-aa'
    case 'A': return 'tier-box-a'
    case 'B': return 'tier-box-b'
    case 'C': return 'tier-box-c'
    default: return ''
  }
}

onMounted(() => {
  nextTick(() => {
    inicializarTooltips()
    inicializarFiltrosResonadores()
  })
})
</script>