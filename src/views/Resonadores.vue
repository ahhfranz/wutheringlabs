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



    <h2 class="guides-title"> <ion-icon name="man-outline"></ion-icon> RESONADORES</h2>

    <!-- Filtros -->

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
        <button class="filter-btn" title="Havoc">
          <img src="@/assets/images/elementos/icon_havoc.webp" alt="Havoc" />
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

    <!-- Personajes -->

    <div class="characters-grid">

      <div class="character-card-4" data-rareza="4" data-elemento="aero" data-arma="pistola">
        <img class="element-icon" src="@/assets/images/elementos/icon_aero.webp" alt="Aero" />
        <img class="character-img" src="@/assets/images/tarjetas-personajes/aalto.webp" alt="Aalto" />
        <div class="character-name">Aalto</div>
        <div class="contenido-del-tooltip">
          <img class="resonadores-avatar-4" src="@/assets/images/personajes/icon_aalto.webp" alt="Aalto">
          <div class="resonadores-nombre">Aalto</div>
          <div class="resonadores-tags">
            <span class="tag tag-rarezas">4★</span>
            <span class="tag tag-tipo-aero">
              <img src="@/assets/images/elementos/icon_aero.webp" alt="Aero" class="tag-iconos"> Aero
            </span>
            <span class="tag tag-armas">
              <img src="@/assets/images/tipos-armas/weapon_pistola.webp" alt="Pistola" class="tag-iconos"> Pistola
            </span>
          </div>
          <div class="tiers-role dps"><img src="@/assets/images/categorias/dps.webp" alt="DPS" class="icono-rol"> DPS
          </div>
          <div class="resonadores-tiers tiers-row">
            <div class="tier-grupos">
              <div class="tier-box tier-box-c">
                <div class="tiers-label">C</div>
              </div>
            </div>
            <div class="tier-grupos">
              <div class="tier-box tier-box-c">
                <div class="tiers-label">C</div>
              </div>
            </div>
          </div>
          <div class="tiers-divider">
            <div class="tiers-role sub-dps"><img src="@/assets/images/categorias/subdps.webp" alt="SUB-DPS"
                class="icono-rol">
              SUB-DPS</div>
          </div>
          <div class="resonadores-tiers tiers-row">
            <div class="tier-grupos">
              <div class="tier-box tier-box-c">
                <div class="tiers-label">C</div>
              </div>
              <div class="tiers-desc">Torre de la adversidad</div>
            </div>
            <div class="tier-grupos">
              <div class="tier-box tier-box-c">
                <div class="tiers-label">C</div>
              </div>
              <div class="tiers-desc">Olas Clamantes</div>
            </div>
          </div>
          <div class="tier-grupos labs-score-label">
            <div class="tier-box-labs tier-box-labs-c">
              <div class="tiers-label">C</div>
            </div>
            <div class="tiers-desc labs-score-desc"> <i class="bi bi-sort-up"></i> Labs Score</div>
          </div>
          <div class="tooltip-arrow"></div>
        </div>
      </div>

      <div class="character-card-4" data-rareza="4" data-elemento="gelio" data-arma="rectificador">
        <img class="element-icon" src="@/assets/images/elementos/icon_gelio.webp" alt="Gelio" />
        <img class="character-img" src="@/assets/images/tarjetas-personajes/baizhi.webp" alt="Baizhi" />
        <div class="character-name">Baizhi</div>
        <div class="contenido-del-tooltip">
          <img class="resonadores-avatar-4" src="@/assets/images/personajes/icon_baizhi.webp" alt="Baizhi">
          <div class="resonadores-nombre">Baizhi</div>
          <div class="resonadores-tags">
            <span class="tag tag-rarezas">4★</span>
            <span class="tag tag-tipo-gelio">
              <img src="@/assets/images/elementos/icon_gelio.webp" alt="Gelio" class="tag-iconos"> Gelio
            </span>
            <span class="tag tag-armas">
              <img src="@/assets/images/tipos-armas/weapon_rectificador.webp" alt="Rectificador" class="tag-iconos">
              Rectificador
            </span>
          </div>
          <div class="tiers-role support"><img src="@/assets/images/categorias/support.webp" alt="SUPPORT"
              class="icono-rol">
            SOPORTE
          </div>
          <div class="resonadores-tiers">
            <div class="tier-grupos">
              <div class="tier-box tier-box-a">
                <div class="tiers-label">A</div>
              </div>
              <div class="tiers-desc">Torre de la adversidad</div>
            </div>
            <div class="tier-grupos">
              <div class="tier-box tier-box-aa">
                <div class="tiers-label">A+</div>
              </div>
              <div class="tiers-desc">Olas Clamantes</div>
            </div>
          </div>
          <div class="tier-grupos labs-score-label">
            <div class="tier-box-labs tier-box-labs-aa">
              <div class="tiers-label">A+</div>
            </div>
            <div class="tiers-desc labs-score-desc"> <i class="bi bi-sort-up"></i> Labs Score</div>
          </div>
          <div class="tooltip-arrow"></div>
        </div>
      </div>


      <div class="character-card-5" data-rareza="4" data-elemento="fusion" data-arma="espada">
        <img class="element-icon" src="@/assets/images/elementos/icon_fusion.webp" alt="Fusion" />
        <img class="character-img" src="@/assets/images/tarjetas-personajes/brant.webp" alt="Brant" />
        <div class="character-name">Brant</div>
        <div class="contenido-del-tooltip">
          <img class="resonadores-avatar-5" src="@/assets/images/personajes/icon_brant.webp" alt="Brant">
          <div class="resonadores-nombre">Brant</div>
          <div class="resonadores-tags">
            <span class="tag tag-rarezas">5★</span>
            <span class="tag tag-tipo-fusion">
              <img src="@/assets/images/elementos/icon_fusion.webp" alt="Fusion" class="tag-iconos"> Fusion
            </span>
            <span class="tag tag-armas">
              <img src="@/assets/images/tipos-armas/weapon_espada.webp" alt="Espada" class="tag-iconos"> Espada
            </span>
          </div>
          <div class="tiers-role dps"><img src="@/assets/images/categorias/dps.webp" alt="DPS" class="icono-rol"> DPS
          </div>
          <div class="resonadores-tiers tiers-row">
            <div class="tier-grupos">
              <div class="tier-box tier-box-aa">
                <div class="tiers-label">A+</div>
              </div>
            </div>
            <div class="tier-grupos">
              <div class="tier-box tier-box-aa">
                <div class="tiers-label">A+</div>
              </div>
            </div>
          </div>
          <div class="tiers-divider">
            <div class="tiers-role sub-dps"><img src="@/assets/images/categorias/subdps.webp" alt="SUB-DPS"
                class="icono-rol">
              SUB-DPS</div>
          </div>
          <div class="resonadores-tiers tiers-row">
            <div class="tier-grupos">
              <div class="tier-box tier-box-aa">
                <div class="tiers-label">A+</div>
              </div>
              <div class="tiers-desc">Torre de la adversidad</div>
            </div>
            <div class="tier-grupos">
              <div class="tier-box tier-box-s">
                <div class="tiers-label">S</div>
              </div>
              <div class="tiers-desc">Olas Clamantes</div>
            </div>
          </div>
          <div class="tier-grupos labs-score-label">
            <div class="tier-box-labs tier-box-labs-aa">
              <div class="tiers-label">A+</div>
            </div>
            <div class="tiers-desc labs-score-desc"> <i class="bi bi-sort-up"></i> Labs Score</div>
          </div>
          <div class="tooltip-arrow"></div>
        </div>
      </div>

      <div class="character-card-5" data-rareza="5" data-elemento="electro" data-arma="mandoble">
        <img class="element-icon" src="@/assets/images/elementos/icon_electro.webp" alt="Electro" />
        <img class="character-img" src="@/assets/images/tarjetas-personajes/calcharo.webp" alt="Calcharo" />
        <div class="character-name">Calcharo</div>
        <div class="contenido-del-tooltip">
          <img class="resonadores-avatar-5" src="@/assets/images/personajes/icon_calcharo.webp" alt="Calcharo">
          <div class="resonadores-nombre">Calcharo</div>
          <div class="resonadores-tags">
            <span class="tag tag-rarezas">5★</span>
            <span class="tag tag-tipo-electro">
              <img src="@/assets/images/elementos/icon_electro.webp" alt="Electro" class="tag-iconos"> Electro
            </span>
            <span class="tag tag-armas">
              <img src="@/assets/images/tipos-armas/weapon_mandoble.webp" alt="Mandoble" class="tag-iconos">
              Mandoble
            </span>
          </div>
          <div class="tiers-role dps"><img src="@/assets/images/categorias/dps.webp" alt="DPS" class="icono-rol"> DPS
          </div>
          <div class="resonadores-tiers">
            <div class="tier-grupos">
              <div class="tier-box tier-box-b">
                <div class="tiers-label">B</div>
              </div>
              <div class="tiers-desc">Torre de la adversidad</div>
            </div>
            <div class="tier-grupos">
              <div class="tier-box tier-box-c">
                <div class="tiers-label">C</div>
              </div>
              <div class="tiers-desc">Olas Clamantes</div>
            </div>
          </div>
          <div class="tier-grupos labs-score-label">
            <div class="tier-box-labs tier-box-labs-b">
              <div class="tiers-label">B</div>
            </div>
            <div class="tiers-desc labs-score-desc"> <i class="bi bi-sort-up"></i> Labs Score</div>
          </div>
          <div class="tooltip-arrow"></div>
        </div>
      </div>

      <div class="character-card-5" data-rareza="5" data-elemento="havoc" data-arma="espada">
        <img class="element-icon" src="@/assets/images/elementos/icon_havoc.webp" alt="Havoc" />
        <img class="character-img" src="@/assets/images/tarjetas-personajes/camellya.webp" alt="Camellya" />
        <div class="character-name">Camellya</div>
        <div class="contenido-del-tooltip">
          <img class="resonadores-avatar-5" src="@/assets/images/personajes/icon_camellya.webp" alt="Camellya">
          <div class="resonadores-nombre">Camellya</div>
          <div class="resonadores-tags">
            <span class="tag tag-rarezas">5★</span>
            <span class="tag tag-tipo-havoc">
              <img src="@/assets/images/elementos/icon_havoc.webp" alt="Destrucción" class="tag-iconos"> Destrucción
            </span>
            <span class="tag tag-armas">
              <img src="@/assets/images/tipos-armas/weapon_espada.webp" alt="Espada" class="tag-iconos"> Espada
            </span>
          </div>
          <div class="tiers-role dps"><img src="@/assets/images/categorias/dps.webp" alt="DPS" class="icono-rol"> DPS
          </div>
          <div class="resonadores-tiers">
            <div class="tier-grupos">
              <div class="tier-box tier-box-s">
                <div class="tiers-label">S</div>
              </div>
              <div class="tiers-desc">Torre de la adversidad</div>
            </div>
            <div class="tier-grupos">
              <div class="tier-box tier-box-ss">
                <div class="tiers-label">S+</div>
              </div>
              <div class="tiers-desc">Olas Clamantes</div>
            </div>
          </div>
          <div class="tier-grupos labs-score-label">
            <div class="tier-box-labs tier-box-labs-ss">
              <div class="tiers-label">S+</div>
            </div>
            <div class="tiers-desc labs-score-desc"> <i class="bi bi-sort-up"></i> Labs Score</div>
          </div>
          <div class="tooltip-arrow"></div>
        </div>
      </div>

      <div class="character-card-5" data-rareza="5" data-elemento="havoc" data-arma="rectificador">
        <img class="element-icon" src="@/assets/images/elementos/icon_havoc.webp" alt="Havoc" />
        <img class="character-img" src="@/assets/images/tarjetas-personajes/cantarella.webp" alt="Cantarella" />
        <div class="character-name">Cantarella</div>
        <div class="contenido-del-tooltip">
          <img class="resonadores-avatar-5" src="@/assets/images/personajes/icon_cantarella.webp" alt="Cantarella">
          <div class="resonadores-nombre">Cantarella</div>
          <div class="resonadores-tags">
            <span class="tag tag-rarezas">5★</span>
            <span class="tag tag-tipo-havoc">
              <img src="@/assets/images/elementos/icon_havoc.webp" alt="Destrucción" class="tag-iconos">
              Destrucción
            </span>
            <span class="tag tag-armas">
              <img src="@/assets/images/tipos-armas/weapon_rectificador.webp" alt="Rectificador" class="tag-iconos">
              Rectificador
            </span>
          </div>
          <div class="tiers-role sub-dps"><img src="@/assets/images/categorias/subdps.webp" alt="SUB-DPS"
              class="icono-rol">
            SUB-DPS
          </div>
          <div class="resonadores-tiers">
            <div class="tier-grupos">
              <div class="tier-box tier-box-a">
                <div class="tiers-label">A</div>
              </div>
              <div class="tiers-desc">Torre de la adversidad</div>
            </div>
            <div class="tier-grupos">
              <div class="tier-box tier-box-a">
                <div class="tiers-label">A</div>
              </div>
              <div class="tiers-desc">Olas Clamantes</div>
            </div>
          </div>
          <div class="tier-grupos labs-score-label">
            <div class="tier-box-labs tier-box-labs-a">
              <div class="tiers-label">A</div>
            </div>
            <div class="tiers-desc labs-score-desc"> <i class="bi bi-sort-up"></i> Labs Score</div>
          </div>
          <div class="tooltip-arrow"></div>
        </div>
      </div>

      <div class="character-card-5" data-rareza="5" data-elemento="gelio" data-arma="pistola">
        <img class="element-icon" src="@/assets/images/elementos/icon_gelio.webp" alt="Gelio" />
        <img class="character-img transparente" src="@/assets/images/tarjetas-personajes/carlotta.webp"
          alt="Carlotta" />
        <div class="character-name">Carlotta</div>
        <div class="contenido-del-tooltip">
          <img class="resonadores-avatar-5" src="@/assets/images/personajes/icon_carlotta.webp" alt="Carlotta">
          <div class="resonadores-nombre">Carlotta</div>
          <div class="resonadores-tags">
            <span class="tag tag-rarezas">5★</span>
            <span class="tag tag-tipo-gelio">
              <img src="@/assets/images/elementos/icon_gelio.webp" alt="Destrucción" class="tag-iconos"> Gelio
            </span>
            <span class="tag tag-armas">
              <img src="@/assets/images/tipos-armas/weapon_pistola.webp" alt="Pistola" class="tag-iconos"> Pistola
            </span>
          </div>
          <div class="tiers-role dps"><img src="@/assets/images/categorias/dps.webp" alt="DPS" class="icono-rol"> DPS
          </div>
          <div class="resonadores-tiers">
            <div class="tier-grupos">
              <div class="tier-box tier-box-ss">
                <div class="tiers-label">S+</div>
              </div>
              <div class="tiers-desc">Torre de la adversidad</div>
            </div>
            <div class="tier-grupos">
              <div class="tier-box tier-box-s">
                <div class="tiers-label">S</div>
              </div>
              <div class="tiers-desc">Olas Clamantes</div>
            </div>
          </div>
          <div class="tier-grupos labs-score-label">
            <div class="tier-box-labs tier-box-labs-ss">
              <div class="tiers-label">S+</div>
            </div>
            <div class="tiers-desc labs-score-desc"> <i class="bi bi-sort-up"></i> Labs Score</div>
          </div>
          <div class="tooltip-arrow"></div>
        </div>
      </div>

      <div class="character-card-5" data-rareza="5" data-elemento="aero" data-arma="espada">
        <img class="element-icon" src="@/assets/images/elementos/icon_aero.webp" alt="Aero" />
        <img class="character-img" src="@/assets/images/tarjetas-personajes/cartethyia.webp" alt="Cartethyia" />
        <div class="character-name">Cartethyia</div>
        <span class="new-badge">NUEVA</span>
        <div class="contenido-del-tooltip">
          <img class="resonadores-avatar-5" src="@/assets/images/personajes/icon_cartethyia.webp" alt="Cartethyia">
          <div class="resonadores-nombre">Cartethyia</div>
          <div class="resonadores-tags">
            <span class="tag tag-rarezas">5★</span>
            <span class="tag tag-tipo-aero">
              <img src="@/assets/images/elementos/icon_aero.webp" alt="Aero" class="tag-iconos"> Aero
            </span>
            <span class="tag tag-armas">
              <img src="@/assets/images/tipos-armas/weapon_espada.webp" alt="Pistola" class="tag-iconos"> Espada
            </span>
          </div>
          <div class="tiers-role dps"><img src="@/assets/images/categorias/dps.webp" alt="DPS" class="icono-rol"> DPS
          </div>
          <div class="resonadores-tiers">
            <div class="tier-grupos">
              <div class="tier-box tier-box-ss">
                <div class="tiers-label">S+</div>
              </div>
              <div class="tiers-desc">Torre de la adversidad</div>
            </div>
            <div class="tier-grupos">
              <div class="tier-box tier-box-s">
                <div class="tiers-label">S</div>
              </div>
              <div class="tiers-desc">Olas Clamantes</div>
            </div>
          </div>
          <div class="tier-grupos labs-score-label">
            <div class="tier-box-labs tier-box-labs-ss">
              <div class="tiers-label">S+</div>
            </div>
            <div class="tiers-desc labs-score-desc"> <i class="bi bi-sort-up"></i> Labs Score</div>
          </div>
          <div class="tooltip-arrow"></div>
        </div>
      </div>

      <div class="character-card-5" data-rareza="5" data-elemento="fusion" data-arma="espada">
        <img class="element-icon" src="@/assets/images/elementos/icon_fusion.webp" alt="Fusion" />
        <img class="character-img" src="@/assets/images/tarjetas-personajes/changli.webp" alt="Changli" />
        <div class="character-name">Changli</div>
        <div class="contenido-del-tooltip">
          <img class="resonadores-avatar-5" src="@/assets/images/personajes/icon_changli.webp" alt="Changli">
          <div class="resonadores-nombre">Changli</div>
          <div class="resonadores-tags">
            <span class="tag tag-rarezas">5★</span>
            <span class="tag tag-tipo-fusion">
              <img src="@/assets/images/elementos/icon_fusion.webp" alt="Fusion" class="tag-iconos"> Fusion
            </span>
            <span class="tag tag-armas">
              <img src="@/assets/images/tipos-armas/weapon_espada.webp" alt="Espada" class="tag-iconos"> Espada
            </span>
          </div>
          <div class="tiers-role dps"><img src="@/assets/images/categorias/dps.webp" alt="DPS" class="icono-rol"> DPS
          </div>
          <div class="resonadores-tiers tiers-row">
            <div class="tier-grupos">
              <div class="tier-box tier-box-aa">
                <div class="tiers-label">A+</div>
              </div>
            </div>
            <div class="tier-grupos">
              <div class="tier-box tier-box-ss">
                <div class="tiers-label">S+</div>
              </div>
            </div>
          </div>
          <div class="tiers-divider">
            <div class="tiers-role sub-dps"><img src="@/assets/images/categorias/subdps.webp" alt="SUB-DPS"
                class="icono-rol">
              SUB-DPS</div>
          </div>
          <div class="resonadores-tiers tiers-row">
            <div class="tier-grupos">
              <div class="tier-box tier-box-aa">
                <div class="tiers-label">A+</div>
              </div>
              <div class="tiers-desc">Torre de la adversidad</div>
            </div>
            <div class="tier-grupos">
              <div class="tier-box tier-box-aa">
                <div class="tiers-label">A+</div>
              </div>
              <div class="tiers-desc">Olas Clamantes</div>
            </div>
          </div>
          <div class="tier-grupos labs-score-label">
            <div class="tier-box-labs tier-box-labs-aa">
              <div class="tiers-label">A+</div>
            </div>
            <div class="tiers-desc labs-score-desc"> <i class="bi bi-sort-up"></i> Labs Score</div>
          </div>
          <div class="tooltip-arrow"></div>
        </div>
      </div>

      <div class="character-card-4" data-rareza="4" data-elemento="fusion" data-arma="pistola">
        <img class="element-icon" src="@/assets/images/elementos/icon_fusion.webp" alt="Fusion" />
        <img class="character-img" src="@/assets/images/tarjetas-personajes/chixia.webp" alt="Chixia" />
        <div class="character-name">Chixia</div>
        <div class="contenido-del-tooltip">
          <img class="resonadores-avatar-4" src="@/assets/images/personajes/icon_chixia.webp" alt="Chixia">
          <div class="resonadores-nombre">Chixia</div>
          <div class="resonadores-tags">
            <span class="tag tag-rarezas">4★</span>
            <span class="tag tag-tipo-fusion">
              <img src="@/assets/images/elementos/icon_fusion.webp" alt="Fusion" class="tag-iconos"> Fusion
            </span>
            <span class="tag tag-armas">
              <img src="@/assets/images/tipos-armas/weapon_pistola.webp" alt="Pistola" class="tag-iconos"> Pistola
            </span>
          </div>
          <div class="tiers-role dps"><img src="@/assets/images/categorias/dps.webp" alt="DPS" class="icono-rol"> DPS
          </div>
          <div class="resonadores-tiers">
            <div class="tier-grupos">
              <div class="tier-box tier-box-b">
                <div class="tiers-label">B</div>
              </div>
              <div class="tiers-desc">Torre de la adversidad</div>
            </div>
            <div class="tier-grupos">
              <div class="tier-box tier-box-b">
                <div class="tiers-label">B</div>
              </div>
              <div class="tiers-desc">Olas Clamantes</div>
            </div>
          </div>
          <div class="tier-grupos labs-score-label">
            <div class="tier-box-labs tier-box-labs-b">
              <div class="tiers-label">B</div>
            </div>
            <div class="tiers-desc labs-score-desc"> <i class="bi bi-sort-up"></i> Labs Score</div>
          </div>
          <div class="tooltip-arrow"></div>
        </div>
      </div>

      <div class="character-card-5" data-rareza="5" data-elemento="aero" data-arma="pistola">
        <img class="element-icon" src="@/assets/images/elementos/icon_aero.webp" alt="Aero" />
        <img class="character-img" src="@/assets/images/tarjetas-personajes/ciaccona.webp" alt="Ciaccona" />
        <div class="character-name">Ciaccona</div>
        <div class="contenido-del-tooltip">
          <img class="resonadores-avatar-5" src="@/assets/images/personajes/icon_ciaccona.webp" alt="Ciaccona">
          <div class="resonadores-nombre">Ciaccona</div>
          <div class="resonadores-tags">
            <span class="tag tag-rarezas">5★</span>
            <span class="tag tag-tipo-aero">
              <img src="@/assets/images/elementos/icon_aero.webp" alt="Aero" class="tag-iconos"> Aero
            </span>
            <span class="tag tag-armas">
              <img src="@/assets/images/tipos-armas/weapon_pistola.webp" alt="Pistola" class="tag-iconos"> Pistola
            </span>
          </div>
          <div class="tiers-role dps"><img src="@/assets/images/categorias/dps.webp" alt="DPS" class="icono-rol"> DPS
          </div>
          <div class="resonadores-tiers tiers-row">
            <div class="tier-grupos">
              <div class="tier-box tier-box-aa">
                <div class="tiers-label">A+</div>
              </div>
            </div>
            <div class="tier-grupos">
              <div class="tier-box tier-box-s">
                <div class="tiers-label">S</div>
              </div>
            </div>
          </div>
          <div class="tiers-divider">
            <div class="tiers-role sub-dps"><img src="@/assets/images/categorias/subdps.webp" alt="SUB-DPS"
                class="icono-rol">
              SUB-DPS</div>
          </div>
          <div class="resonadores-tiers tiers-row">
            <div class="tier-grupos">
              <div class="tier-box tier-box-ss">
                <div class="tiers-label">S+</div>
              </div>
              <div class="tiers-desc">Torre de la adversidad</div>
            </div>
            <div class="tier-grupos">
              <div class="tier-box tier-box-s">
                <div class="tiers-label">S</div>
              </div>
              <div class="tiers-desc">Olas Clamantes</div>
            </div>
          </div>
          <div class="tier-grupos labs-score-label">
            <div class="tier-box-labs tier-box-labs-s">
              <div class="tiers-label">S</div>
            </div>
            <div class="tiers-desc labs-score-desc"> <i class="bi bi-sort-up"></i> Labs Score</div>
          </div>
          <div class="tooltip-arrow"></div>
        </div>
      </div>

      <div class="character-card-4" data-rareza="4" data-elemento="havoc" data-arma="espada">
        <img class="element-icon" src="@/assets/images/elementos/icon_havoc.webp" alt="Havoc" />
        <img class="character-img" src="@/assets/images/tarjetas-personajes/danjin.webp" alt="Danjin" />
        <div class="character-name">Danjin</div>
        <div class="contenido-del-tooltip">
          <img class="resonadores-avatar-4" src="@/assets/images/personajes/icon_danjin.webp" alt="Danjin">
          <div class="resonadores-nombre">Danjin</div>
          <div class="resonadores-tags">
            <span class="tag tag-rarezas">4★</span>
            <span class="tag tag-tipo-havoc">
              <img src="@/assets/images/elementos/icon_havoc.webp" alt="Destrucción" class="tag-iconos">
              Destrucción
            </span>
            <span class="tag tag-armas">
              <img src="@/assets/images/tipos-armas/weapon_espada.webp" alt="Espada" class="tag-iconos">
              Espada
            </span>
          </div>
          <div class="tiers-role dps"><img src="@/assets/images/categorias/dps.webp" alt="DPS" class="icono-rol"> DPS
          </div>
          <div class="resonadores-tiers tiers-row">
            <div class="tier-grupos">
              <div class="tier-box tier-box-a">
                <div class="tiers-label">A</div>
              </div>
            </div>
            <div class="tier-grupos">
              <div class="tier-box tier-box-a">
                <div class="tiers-label">A</div>
              </div>
            </div>
          </div>
          <div class="tiers-divider">
            <div class="tiers-role sub-dps"><img src="@/assets/images/categorias/subdps.webp" alt="SUB-DPS"
                class="icono-rol">
              SUB-DPS</div>
          </div>
          <div class="resonadores-tiers tiers-row">
            <div class="tier-grupos">
              <div class="tier-box tier-box-a">
                <div class="tiers-label">A</div>
              </div>
              <div class="tiers-desc">Torre de la adversidad</div>
            </div>
            <div class="tier-grupos">
              <div class="tier-box tier-box-a">
                <div class="tiers-label">A</div>
              </div>
              <div class="tiers-desc">Olas Clamantes</div>
            </div>
          </div>
          <div class="tier-grupos labs-score-label">
            <div class="tier-box-labs tier-box-labs-a">
              <div class="tiers-label">A</div>
            </div>
            <div class="tiers-desc labs-score-desc"> <i class="bi bi-sort-up"></i> Labs Score</div>
          </div>
          <div class="tooltip-arrow"></div>
        </div>
      </div>

      <div class="character-card-5" data-rareza="5" data-elemento="fusion" data-arma="rectificador">
        <img class="element-icon" src="@/assets/images/elementos/icon_fusion.webp" alt="Fusion" />
        <img class="character-img" src="@/assets/images/tarjetas-personajes/encore.webp" alt="Encore" />
        <div class="character-name">Encore</div>
        <div class="contenido-del-tooltip">
          <img class="resonadores-avatar-5" src="@/assets/images/personajes/icon_encore.webp" alt="Encore">
          <div class="resonadores-nombre">Encore</div>
          <div class="resonadores-tags">
            <span class="tag tag-rarezas">5★</span>
            <span class="tag tag-tipo-fusion">
              <img src="@/assets/images/elementos/icon_fusion.webp" alt="Fusion" class="tag-iconos"> Fusion
            </span>
            <span class="tag tag-armas">
              <img src="@/assets/images/tipos-armas/weapon_rectificador.webp" alt="Rectificador" class="tag-iconos">
              Rectificador
            </span>
          </div>
          <div class="tiers-role dps"><img src="@/assets/images/categorias/dps.webp" alt="DPS" class="icono-rol"> DPS
          </div>
          <div class="resonadores-tiers">
            <div class="tier-grupos">
              <div class="tier-box tier-box-aa">
                <div class="tiers-label">A+</div>
              </div>
              <div class="tiers-desc">Torre de la adversidad</div>
            </div>
            <div class="tier-grupos">
              <div class="tier-box tier-box-a">
                <div class="tiers-label">A</div>
              </div>
              <div class="tiers-desc">Olas Clamantes</div>
            </div>
          </div>
          <div class="tier-grupos labs-score-label">
            <div class="tier-box-labs tier-box-labs-aa">
              <div class="tiers-label">A+</div>
            </div>
            <div class="tiers-desc labs-score-desc"> <i class="bi bi-sort-up"></i> Labs Score</div>
          </div>
          <div class="tooltip-arrow"></div>
        </div>
      </div>

      <div class="character-card-5" data-rareza="5" data-elemento="aero" data-arma="brazales">
        <img class="element-icon" src="@/assets/images/elementos/icon_aero.webp" alt="Aero" />
        <img class="character-img" src="@/assets/images/tarjetas-personajes/Jianxin.webp" alt="Jianxin" />
        <div class="character-name">Jianxin</div>
        <div class="contenido-del-tooltip">
          <img class="resonadores-avatar-5" src="@/assets/images/personajes/icon_jianxin.webp" alt="Jianxin">
          <div class="resonadores-nombre">Jianxin</div>
          <div class="resonadores-tags">
            <span class="tag tag-rarezas">5★</span>
            <span class="tag tag-tipo-aero">
              <img src="@/assets/images/elementos/icon_aero.webp" alt="Aero" class="tag-iconos"> Aero
            </span>
            <span class="tag tag-armas">
              <img src="@/assets/images/tipos-armas/weapon_brazales.webp" alt="Brazales" class="tag-iconos">
              Brazales
            </span>
          </div>
          <div class="tiers-role sub-dps"><img src="@/assets/images/categorias/subdps.webp" alt="SUB-DPS"
              class="icono-rol">
            SUB-DPS
          </div>
          <div class="resonadores-tiers">
            <div class="tier-grupos">
              <div class="tier-box tier-box-c">
                <div class="tiers-label">C</div>
              </div>
              <div class="tiers-desc">Torre de la adversidad</div>
            </div>
            <div class="tier-grupos">
              <div class="tier-box tier-box-b">
                <div class="tiers-label">B</div>
              </div>
              <div class="tiers-desc">Olas Clamantes</div>
            </div>
          </div>
          <div class="tier-grupos labs-score-label">
            <div class="tier-box-labs tier-box-labs-b">
              <div class="tiers-label">B</div>
            </div>
            <div class="tiers-desc labs-score-desc"> <i class="bi bi-sort-up"></i> Labs Score</div>
          </div>
          <div class="tooltip-arrow"></div>
        </div>
      </div>

      <div class="character-card-5" data-rareza="5" data-elemento="espectro" data-arma="mandoble">
        <img class="element-icon" src="@/assets/images/elementos/icon_espectro.webp" alt="Espectro" />
        <img class="character-img" src="@/assets/images/tarjetas-personajes/jinhsi.webp" alt="Jinhsi" />
        <div class="character-name">Jinhsi</div>
        <div class="contenido-del-tooltip">
          <img class="resonadores-avatar-5" src="@/assets/images/personajes/icon_jinhsi.webp" alt="Jinhsi">
          <div class="resonadores-nombre">Jinhsi</div>
          <div class="resonadores-tags">
            <span class="tag tag-rarezas">5★</span>
            <span class="tag tag-tipo-espectro">
              <img src="@/assets/images/elementos/icon_espectro.webp" alt="Espectro" class="tag-iconos"> Espectro
            </span>
            <span class="tag tag-armas">
              <img src="@/assets/images/tipos-armas/weapon_mandoble.webp" alt="Mandoble" class="tag-iconos">
              Mandoble
            </span>
          </div>
          <div class="tiers-role dps"><img src="@/assets/images/categorias/dps.webp" alt="DPS" class="icono-rol"> DPS
          </div>
          <div class="resonadores-tiers">
            <div class="tier-grupos">
              <div class="tier-box tier-box-s">
                <div class="tiers-label">S</div>
              </div>
              <div class="tiers-desc">Torre de la adversidad</div>
            </div>
            <div class="tier-grupos">
              <div class="tier-box tier-box-aa">
                <div class="tiers-label">A+</div>
              </div>
              <div class="tiers-desc">Olas Clamantes</div>
            </div>
          </div>
          <div class="tier-grupos labs-score-label">
            <div class="tier-box-labs tier-box-labs-s">
              <div class="tiers-label">S</div>
            </div>
            <div class="tiers-desc labs-score-desc"> <i class="bi bi-sort-up"></i> Labs Score</div>
          </div>
          <div class="tooltip-arrow"></div>
        </div>
      </div>

      <div class="character-card-5" data-rareza="5" data-elemento="aero" data-arma="mandoble">
        <img class="element-icon" src="@/assets/images/elementos/icon_aero.webp" alt="Aero" />
        <img class="character-img" src="@/assets/images/tarjetas-personajes/jiyan.webp" alt="Jiyan" />
        <div class="character-name">Jiyan</div>
        <div class="contenido-del-tooltip">
          <img class="resonadores-avatar-5" src="@/assets/images/personajes/icon_jiyan.webp" alt="Jiyan">
          <div class="resonadores-nombre">Jiyan</div>
          <div class="resonadores-tags">
            <span class="tag tag-rarezas">5★</span>
            <span class="tag tag-tipo-aero">
              <img src="@/assets/images/elementos/icon_aero.webp" alt="Aero" class="tag-iconos"> Aero
            </span>
            <span class="tag tag-armas">
              <img src="@/assets/images/tipos-armas/weapon_mandoble.webp" alt="Mandoble" class="tag-iconos">
              Mandoble
            </span>
          </div>
          <div class="tiers-role dps"><img src="@/assets/images/categorias/dps.webp" alt="DPS" class="icono-rol"> DPS
          </div>
          <div class="resonadores-tiers">
            <div class="tier-grupos">
              <div class="tier-box tier-box-aa">
                <div class="tiers-label">A+</div>
              </div>
              <div class="tiers-desc">Torre de la adversidad</div>
            </div>
            <div class="tier-grupos">
              <div class="tier-box tier-box-ss">
                <div class="tiers-label">S+</div>
              </div>
              <div class="tiers-desc">Olas Clamantes</div>
            </div>
          </div>
          <div class="tier-grupos labs-score-label">
            <div class="tier-box-labs tier-box-labs-s">
              <div class="tiers-label">S</div>
            </div>
            <div class="tiers-desc labs-score-desc"> <i class="bi bi-sort-up"></i> Labs Score</div>
          </div>
          <div class="tooltip-arrow"></div>
        </div>
      </div>

      <div class="character-card-5" data-rareza="5" data-elemento="gelio" data-arma="brazales">
        <img class="element-icon" src="@/assets/images/elementos/icon_gelio.webp" alt="Gelio" />
        <img class="character-img" src="@/assets/images/tarjetas-personajes/lingyang.webp" alt="Lingyang" />
        <div class="character-name">Lingyang</div>
        <div class="contenido-del-tooltip">
          <img class="resonadores-avatar-5" src="@/assets/images/personajes/icon_ling.webp" alt="Lingyang">
          <div class="resonadores-nombre">Lingyang</div>
          <div class="resonadores-tags">
            <span class="tag tag-rarezas">5★</span>
            <span class="tag tag-tipo-gelio">
              <img src="@/assets/images/elementos/icon_gelio.webp" alt="Destrucción" class="tag-iconos"> Gelio
            </span>
            <span class="tag tag-armas">
              <img src="@/assets/images/tipos-armas/weapon_brazales.webp" alt="Brazales" class="tag-iconos">
              Brazales
            </span>
          </div>
          <div class="tiers-role dps"><img src="@/assets/images/categorias/dps.webp" alt="DPS" class="icono-rol"> DPS
          </div>
          <div class="resonadores-tiers">
            <div class="tier-grupos">
              <div class="tier-box tier-box-c">
                <div class="tiers-label">C</div>
              </div>
              <div class="tiers-desc">Torre de la adversidad</div>
            </div>
            <div class="tier-grupos">
              <div class="tier-box tier-box-c">
                <div class="tiers-label">C</div>
              </div>
              <div class="tiers-desc">Olas Clamantes</div>
            </div>
          </div>
          <div class="tier-grupos labs-score-label">
            <div class="tier-box-labs tier-box-labs-c">
              <div class="tiers-label">C</div>
            </div>
            <div class="tiers-desc labs-score-desc"> <i class="bi bi-sort-up"></i> Labs Score</div>
          </div>
          <div class="tooltip-arrow"></div>
        </div>
      </div>

      <div class="character-card-4" data-rareza="4" data-elemento="electro" data-arma="mandoble">
        <img class="element-icon" src="@/assets/images/elementos/icon_electro.webp" alt="Electro" />
        <img class="character-img" src="@/assets/images/tarjetas-personajes/lumi.webp" alt="Lumi" />
        <div class="character-name">Lumi</div>
        <div class="contenido-del-tooltip">
          <img class="resonadores-avatar-4" src="@/assets/images/personajes/icon_lumi.webp" alt="Lumi">
          <div class="resonadores-nombre">Lumi</div>
          <div class="resonadores-tags">
            <span class="tag tag-rarezas">4★</span>
            <span class="tag tag-tipo-electro">
              <img src="@/assets/images/elementos/icon_electro.webp" alt="Electro" class="tag-iconos"> Electro
            </span>
            <span class="tag tag-armas">
              <img src="@/assets/images/tipos-armas/weapon_mandoble.webp" alt="Mandoble" class="tag-iconos">
              Mandoble
            </span>
          </div>
          <div class="tiers-role sub-dps"><img src="@/assets/images/categorias/subdps.webp" alt="SUB-DPS"
              class="icono-rol">
            SUB-DPS
          </div>
          <div class="resonadores-tiers">
            <div class="tier-grupos">
              <div class="tier-box tier-box-c">
                <div class="tiers-label">C</div>
              </div>
              <div class="tiers-desc">Torre de la adversidad</div>
            </div>
            <div class="tier-grupos">
              <div class="tier-box tier-box-c">
                <div class="tiers-label">C</div>
              </div>
              <div class="tiers-desc">Olas Clamantes</div>
            </div>
          </div>
          <div class="tier-grupos labs-score-label">
            <div class="tier-box-labs tier-box-labs-c">
              <div class="tiers-label">C</div>
            </div>
            <div class="tiers-desc labs-score-desc"> <i class="bi bi-sort-up"></i> Labs Score</div>
          </div>
          <div class="tooltip-arrow"></div>
        </div>
      </div>

      <div class="character-card-4" data-rareza="4" data-elemento="fusion" data-arma="pistola">
        <img class="element-icon" src="@/assets/images/elementos/icon_fusion.webp" alt="Fusion" />
        <img class="character-img" src="@/assets/images/tarjetas-personajes/mortefi.webp" alt="Mortefi" />
        <div class="character-name">Mortefi</div>
        <div class="contenido-del-tooltip">
          <img class="resonadores-avatar-4" src="@/assets/images/personajes/icon_mortefi.webp" alt="Mortefi">
          <div class="resonadores-nombre">Mortefi</div>
          <div class="resonadores-tags">
            <span class="tag tag-rarezas">4★</span>
            <span class="tag tag-tipo-fusion">
              <img src="@/assets/images/elementos/icon_fusion.webp" alt="Fusion" class="tag-iconos"> Fusion
            </span>
            <span class="tag tag-armas">
              <img src="@/assets/images/tipos-armas/weapon_pistola.webp" alt="Pistola" class="tag-iconos"> Pistola
            </span>
          </div>
          <div class="tiers-role sub-dps"><img src="@/assets/images/categorias/subdps.webp" alt="SUB-DPS"
              class="icono-rol">
            SUB-DPS
          </div>
          <div class="resonadores-tiers">
            <div class="tier-grupos">
              <div class="tier-box tier-box-s">
                <div class="tiers-label">S</div>
              </div>
              <div class="tiers-desc">Torre de la adversidad</div>
            </div>
            <div class="tier-grupos">
              <div class="tier-box tier-box-s">
                <div class="tiers-label">S</div>
              </div>
              <div class="tiers-desc">Olas Clamantes</div>
            </div>
          </div>
          <div class="tier-grupos labs-score-label">
            <div class="tier-box-labs tier-box-labs-s">
              <div class="tiers-label">S</div>
            </div>
            <div class="tiers-desc labs-score-desc"> <i class="bi bi-sort-up"></i> Labs Score</div>
          </div>
          <div class="tooltip-arrow"></div>
        </div>
      </div>

      <div class="character-card-5" data-rareza="5" data-elemento="espectro" data-arma="rectificador">
        <img class="element-icon" src="@/assets/images/elementos/icon_espectro.webp" alt="Espectro" />
        <img class="character-img" src="@/assets/images/tarjetas-personajes/phoebe.webp" alt="Phoebe" />
        <div class="character-name">Phoebe</div>
        <div class="contenido-del-tooltip">
          <img class="resonadores-avatar-5" src="@/assets/images/personajes/icon_phoebe.webp" alt="Phoebe">
          <div class="resonadores-nombre">Phoebe</div>
          <div class="resonadores-tags">
            <span class="tag tag-rarezas">5★</span>
            <span class="tag tag-tipo-espectro">
              <img src="@/assets/images/elementos/icon_espectro.webp" alt="Espectro" class="tag-iconos"> Espectro
            </span>
            <span class="tag tag-armas">
              <img src="@/assets/images/tipos-armas/weapon_rectificador.webp" alt="Rectificador" class="tag-iconos">
              Rectificador
            </span>
          </div>
          <div class="tiers-role dps"><img src="@/assets/images/categorias/dps.webp" alt="DPS" class="icono-rol"> DPS
          </div>
          <div class="resonadores-tiers tiers-row">
            <div class="tier-grupos">
              <div class="tier-box tier-box-s">
                <div class="tiers-label">S</div>
              </div>
            </div>
            <div class="tier-grupos">
              <div class="tier-box tier-box-s">
                <div class="tiers-label">S</div>
              </div>
            </div>
          </div>
          <div class="tiers-divider">
            <div class="tiers-role sub-dps"><img src="@/assets/images/categorias/subdps.webp" alt="SUB-DPS"
                class="icono-rol">
              SUB-DPS</div>
          </div>
          <div class="resonadores-tiers tiers-row">
            <div class="tier-grupos">
              <div class="tier-box tier-box-ss">
                <div class="tiers-label">S+</div>
              </div>
              <div class="tiers-desc">Torre de la adversidad</div>
            </div>
            <div class="tier-grupos">
              <div class="tier-box tier-box-s">
                <div class="tiers-label">S</div>
              </div>
              <div class="tiers-desc">Olas Clamantes</div>
            </div>
          </div>
          <div class="tier-grupos labs-score-label">
            <div class="tier-box-labs tier-box-labs-ss">
              <div class="tiers-label">S+</div>
            </div>
            <div class="tiers-desc labs-score-desc"> <i class="bi bi-sort-up"></i> Labs Score</div>
          </div>
          <div class="tooltip-arrow"></div>
        </div>
      </div>

      <div class="character-card-5" data-rareza="5" data-elemento="havoc" data-arma="brazales">
        <img class="element-icon" src="@/assets/images/elementos/icon_havoc.webp" alt="Havoc" />
        <img class="character-img" src="@/assets/images/tarjetas-personajes/roccia.webp" alt="Roccia" />
        <div class="character-name">Roccia</div>
        <div class="contenido-del-tooltip">
          <img class="resonadores-avatar-5" src="@/assets/images/personajes/icon_roccia.webp" alt="Roccia">
          <div class="resonadores-nombre">Roccia</div>
          <div class="resonadores-tags">
            <span class="tag tag-rarezas">5★</span>
            <span class="tag tag-tipo-havoc">
              <img src="@/assets/images/elementos/icon_havoc.webp" alt="Destrucción" class="tag-iconos">
              Destrucción
            </span>
            <span class="tag tag-armas">
              <img src="@/assets/images/tipos-armas/weapon_brazales.webp" alt="Rectificador" class="tag-iconos">
              Brazales
            </span>
          </div>
          <div class="tiers-role sub-dps"><img src="@/assets/images/categorias/subdps.webp" alt="SUB-DPS"
              class="icono-rol">
            SUB-DPS
          </div>
          <div class="resonadores-tiers">
            <div class="tier-grupos">
              <div class="tier-box tier-box-aa">
                <div class="tiers-label">A+</div>
              </div>
              <div class="tiers-desc">Torre de la adversidad</div>
            </div>
            <div class="tier-grupos">
              <div class="tier-box tier-box-ss">
                <div class="tiers-label">S+</div>
              </div>
              <div class="tiers-desc">Olas Clamantes</div>
            </div>
          </div>
          <div class="tier-grupos labs-score-label">
            <div class="tier-box-labs tier-box-labs-s">
              <div class="tiers-label">S</div>
            </div>
            <div class="tiers-desc labs-score-desc"> <i class="bi bi-sort-up"></i> Labs Score</div>
          </div>
          <div class="tooltip-arrow"></div>
        </div>
      </div>

      <div class="character-card-5" data-rareza="5" data-elemento="aero" data-arma="espada">
        <img class="element-icon" src="@/assets/images/elementos/icon_aero.webp" alt="Aero" />
        <img class="character-img" src="@/assets/images/tarjetas-personajes/rover.webp" alt="Rover (Aero)" />
        <div class="character-name">Rover (Aero)</div>
        <div class="contenido-del-tooltip">
          <img class="resonadores-avatar-5" src="@/assets/images/personajes/icon_rover.webp" alt="Rover (Aero)">
          <div class="resonadores-nombre">Rover (Aero)</div>
          <div class="resonadores-tags">
            <span class="tag tag-rarezas">5★</span>
            <span class="tag tag-tipo-aero">
              <img src="@/assets/images/elementos/icon_aero.webp" alt="Aero" class="tag-iconos"> Aero
            </span>
            <span class="tag tag-armas">
              <img src="@/assets/images/tipos-armas/weapon_espada.webp" alt="Espada" class="tag-iconos"> Espada
            </span>
          </div>
          <div class="tiers-role support"><img src="@/assets/images/categorias/support.webp" alt="SUPPORT"
              class="icono-rol">
            SOPORTE
          </div>
          <div class="resonadores-tiers">
            <div class="tier-grupos">
              <div class="tier-box tier-box-aa">
                <div class="tiers-label">A+</div>
              </div>
              <div class="tiers-desc">Torre de la adversidad</div>
            </div>
            <div class="tier-grupos">
              <div class="tier-box tier-box-a">
                <div class="tiers-label">A</div>
              </div>
              <div class="tiers-desc">Olas Clamantes</div>
            </div>
          </div>
          <div class="tier-grupos labs-score-label">
            <div class="tier-box-labs tier-box-labs-aa">
              <div class="tiers-label">A+</div>
            </div>
            <div class="tiers-desc labs-score-desc"> <i class="bi bi-sort-up"></i> Labs Score</div>
          </div>
          <div class="tooltip-arrow"></div>
        </div>
      </div>

      <div class="character-card-5" data-rareza="5" data-elemento="havoc" data-arma="espada">
        <img class="element-icon" src="@/assets/images/elementos/icon_havoc.webp" alt="Havoc" />
        <img class="character-img" src="@/assets/images/tarjetas-personajes/rover.webp" alt="Rover (Destrucción)" />
        <div class="character-name">Rover (Destrucción)</div>
        <div class="contenido-del-tooltip">
          <img class="resonadores-avatar-5" src="@/assets/images/personajes/icon_rover.webp" alt="Rover (Havoc)">
          <div class="resonadores-nombre">Rover (Destrucción)</div>
          <div class="resonadores-tags">
            <span class="tag tag-rarezas">5★</span>
            <span class="tag tag-tipo-havoc">
              <img src="@/assets/images/elementos/icon_havoc.webp" alt="Destrucción" class="tag-iconos">
              Destrucción
            </span>
            <span class="tag tag-armas">
              <img src="@/assets/images/tipos-armas/weapon_espada.webp" alt="Espada" class="tag-iconos"> Espada
            </span>
          </div>
          <div class="tiers-role dps"><img src="@/assets/images/categorias/dps.webp" alt="DPS" class="icono-rol"> DPS
          </div>
          <div class="resonadores-tiers">
            <div class="tier-grupos">
              <div class="tier-box tier-box-aa">
                <div class="tiers-label">A+</div>
              </div>
              <div class="tiers-desc">Torre de la adversidad</div>
            </div>
            <div class="tier-grupos">
              <div class="tier-box tier-box-aa">
                <div class="tiers-label">A+</div>
              </div>
              <div class="tiers-desc">Olas Clamantes</div>
            </div>
          </div>
          <div class="tier-grupos labs-score-label">
            <div class="tier-box-labs tier-box-labs-aa">
              <div class="tiers-label">A+</div>
            </div>
            <div class="tiers-desc labs-score-desc"> <i class="bi bi-sort-up"></i> Labs Score</div>
          </div>
          <div class="tooltip-arrow"></div>
        </div>
      </div>

      <div class="character-card-5" data-rareza="5" data-elemento="espectro" data-arma="espada">
        <img class="element-icon" src="@/assets/images/elementos/icon_espectro.webp" alt="Espectro" />
        <img class="character-img" src="@/assets/images/tarjetas-personajes/rover.webp" alt="Rover (Espectro)" />
        <div class="character-name">Rover (Espectro)</div>
        <div class="contenido-del-tooltip">
          <img class="resonadores-avatar-5" src="@/assets/images/personajes/icon_rover.webp" alt="Rover (Espectro)">
          <div class="resonadores-nombre">Rover (Espectro)</div>
          <div class="resonadores-tags">
            <span class="tag tag-rarezas">5★</span>
            <span class="tag tag-tipo-espectro">
              <img src="@/assets/images/elementos/icon_espectro.webp" alt="Espectro" class="tag-iconos"> Espectro
            </span>
            <span class="tag tag-armas">
              <img src="@/assets/images/tipos-armas/weapon_espada.webp" alt="Espada" class="tag-iconos">
              Espada
            </span>
          </div>
          <div class="tiers-role sub-dps"><img src="@/assets/images/categorias/subdps.webp" alt="SUB-DPS"
              class="icono-rol">
            SUB-DPS
          </div>
          <div class="resonadores-tiers tiers-row">
            <div class="tier-grupos">
              <div class="tier-box tier-box-a">
                <div class="tiers-label">A</div>
              </div>
            </div>
            <div class="tier-grupos">
              <div class="tier-box tier-box-a">
                <div class="tiers-label">A</div>
              </div>
            </div>
          </div>
          <div class="tiers-divider">
            <div class="tiers-role support"><img src="@/assets/images/categorias/support.webp" alt="SUPPORT"
                class="icono-rol">
              SOPORTE
            </div>
          </div>
          <div class="resonadores-tiers tiers-row">
            <div class="tier-grupos">
              <div class="tier-box tier-box-aa">
                <div class="tiers-label">A+</div>
              </div>
              <div class="tiers-desc">Torre de la adversidad</div>
            </div>
            <div class="tier-grupos">
              <div class="tier-box tier-box-aa">
                <div class="tiers-label">A+</div>
              </div>
              <div class="tiers-desc">Olas Clamantes</div>
            </div>
          </div>
          <div class="tier-grupos labs-score-label">
            <div class="tier-box-labs tier-box-labs-aa">
              <div class="tiers-label">A+</div>
            </div>
            <div class="tiers-desc labs-score-desc"> <i class="bi bi-sort-up"></i> Labs Score</div>
          </div>
          <div class="tooltip-arrow"></div>
        </div>
      </div>

      <div class="character-card-4" data-rareza="4" data-elemento="gelio" data-arma="espada">
        <img class="element-icon" src="@/assets/images/elementos/icon_gelio.webp" alt="Gelio" />
        <img class="character-img" src="@/assets/images/tarjetas-personajes/sanhua.webp" alt="Sanhua" />
        <div class="character-name">Sanhua</div>
        <div class="contenido-del-tooltip">
          <img class="resonadores-avatar-4" src="@/assets/images/personajes/icon_sanhua.webp" alt="Sanhua">
          <div class="resonadores-nombre">Sanhua</div>
          <div class="resonadores-tags">
            <span class="tag tag-rarezas">4★</span>
            <span class="tag tag-tipo-gelio">
              <img src="@/assets/images/elementos/icon_gelio.webp" alt="Gelio" class="tag-iconos"> Gelio
            </span>
            <span class="tag tag-armas">
              <img src="@/assets/images/tipos-armas/weapon_espada.webp" alt="Espadas" class="tag-iconos">
              Espada
            </span>
          </div>
          <div class="tiers-role sub-dps"><img src="@/assets/images/categorias/subdps.webp" alt="SUB-DPS"
              class="icono-rol">
            SUB-DPS
          </div>
          <div class="resonadores-tiers">
            <div class="tier-grupos">
              <div class="tier-box tier-box-ss">
                <div class="tiers-label">S+</div>
              </div>
              <div class="tiers-desc">Torre de la adversidad</div>
            </div>
            <div class="tier-grupos">
              <div class="tier-box tier-box-ss">
                <div class="tiers-label">S+</div>
              </div>
              <div class="tiers-desc">Olas Clamantes</div>
            </div>
          </div>
          <div class="tier-grupos labs-score-label">
            <div class="tier-box-labs tier-box-labs-ss">
              <div class="tiers-label">S+</div>
            </div>
            <div class="tiers-desc labs-score-desc"> <i class="bi bi-sort-up"></i> Labs Score</div>
          </div>
          <div class="tooltip-arrow"></div>
        </div>
      </div>

      <div class="character-card-4" data-rareza="4" data-elemento="havoc" data-arma="mandoble">
        <img class="element-icon" src="@/assets/images/elementos/icon_havoc.webp" alt="Havoc" />
        <img class="character-img" src="@/assets/images/tarjetas-personajes/taoqi.webp" alt="Taoqi" />
        <div class="character-name">Taoqi</div>
        <div class="contenido-del-tooltip">
          <img class="resonadores-avatar-4" src="@/assets/images/personajes/icon_taoqi.webp" alt="Taoqi">
          <div class="resonadores-nombre">Taoqi</div>
          <div class="resonadores-tags">
            <span class="tag tag-rarezas">4★</span>
            <span class="tag tag-tipo-havoc">
              <img src="@/assets/images/elementos/icon_havoc.webp" alt="Destrucción" class="tag-iconos">
              Destrucción
            </span>
            <span class="tag tag-armas">
              <img src="@/assets/images/tipos-armas/weapon_mandoble.webp" alt="Espada" class="tag-iconos">
              Mandoble
            </span>
          </div>
          <div class="tiers-role sub-dps"><img src="@/assets/images/categorias/subdps.webp" alt="SUB-DPS"
              class="icono-rol">
            SUB-DPS
          </div>
          <div class="resonadores-tiers">
            <div class="tier-grupos">
              <div class="tier-box tier-box-b">
                <div class="tiers-label">B</div>
              </div>
              <div class="tiers-desc">Torre de la adversidad</div>
            </div>
            <div class="tier-grupos">
              <div class="tier-box tier-box-c">
                <div class="tiers-label">C</div>
              </div>
              <div class="tiers-desc">Olas Clamantes</div>
            </div>
          </div>
          <div class="tier-grupos labs-score-label">
            <div class="tier-box-labs tier-box-labs-b">
              <div class="tiers-label">B</div>
            </div>
            <div class="tiers-desc labs-score-desc"> <i class="bi bi-sort-up"></i> Labs Score</div>
          </div>
          <div class="tooltip-arrow"></div>
        </div>
      </div>

      <div class="character-card-5" data-rareza="5" data-elemento="espectro" data-arma="rectificador">
        <img class="element-icon" src="@/assets/images/elementos/icon_espectro.webp" alt="Espectro" />
        <img class="character-img" src="@/assets/images/tarjetas-personajes/shorekeeper.webp" alt="Shorekeeper" />
        <div class="character-name">Shorekeeper</div>
        <div class="contenido-del-tooltip">
          <img class="resonadores-avatar-5" src="@/assets/images/personajes/icon_shorekeeper.webp" alt="Shorekeeper">
          <div class="resonadores-nombre">Shorekeeper</div>
          <div class="resonadores-tags">
            <span class="tag tag-rarezas">5★</span>
            <span class="tag tag-tipo-espectro">
              <img src="@/assets/images/elementos/icon_espectro.webp" alt="Espectro" class="tag-iconos"> Espectro
            </span>
            <span class="tag tag-armas">
              <img src="@/assets/images/tipos-armas/weapon_rectificador.webp" alt="Rectificador" class="tag-iconos">
              Rectificador
            </span>
          </div>
          <div class="tiers-role support"><img src="@/assets/images/categorias/support.webp" alt="SUPPORT"
              class="icono-rol">
            SOPORTE
          </div>
          <div class="resonadores-tiers">
            <div class="tier-grupos">
              <div class="tier-box tier-box-ss">
                <div class="tiers-label">S+</div>
              </div>
              <div class="tiers-desc">Torre de la adversidad</div>
            </div>
            <div class="tier-grupos">
              <div class="tier-box tier-box-ss">
                <div class="tiers-label">S+</div>
              </div>
              <div class="tiers-desc">Olas Clamantes</div>
            </div>
          </div>
          <div class="tier-grupos labs-score-label">
            <div class="tier-box-labs tier-box-labs-ss">
              <div class="tiers-label">S+</div>
            </div>
            <div class="tiers-desc labs-score-desc"> <i class="bi bi-sort-up"></i> Labs Score</div>
          </div>
          <div class="tooltip-arrow"></div>
        </div>
      </div>

      <div class="character-card-5" data-rareza="5" data-elemento="espectro" data-arma="rectificador">
        <img class="element-icon" src="@/assets/images/elementos/icon_espectro.webp" alt="Espectro" />
        <img class="character-img" src="@/assets/images/tarjetas-personajes/verina.webp" alt="Verina" />
        <div class="character-name">Verina</div>
        <div class="contenido-del-tooltip">
          <img class="resonadores-avatar-5" src="@/assets/images/personajes/icon_verina.webp" alt="Verina">
          <div class="resonadores-nombre">Verina</div>
          <div class="resonadores-tags">
            <span class="tag tag-rarezas">5★</span>
            <span class="tag tag-tipo-espectro">
              <img src="@/assets/images/elementos/icon_espectro.webp" alt="Espectro" class="tag-iconos"> Espectro
            </span>
            <span class="tag tag-armas">
              <img src="@/assets/images/tipos-armas/weapon_rectificador.webp" alt="Rectificador" class="tag-iconos">
              Rectificador
            </span>
          </div>
          <div class="tiers-role support"><img src="@/assets/images/categorias/support.webp" alt="SUPPORT"
              class="icono-rol">
            SOPORTE
          </div>
          <div class="resonadores-tiers">
            <div class="tier-grupos">
              <div class="tier-box tier-box-ss">
                <div class="tiers-label">S+</div>
              </div>
              <div class="tiers-desc">Torre de la adversidad</div>
            </div>
            <div class="tier-grupos">
              <div class="tier-box tier-box-ss">
                <div class="tiers-label">S+</div>
              </div>
              <div class="tiers-desc">Olas Clamantes</div>
            </div>
          </div>
          <div class="tier-grupos labs-score-label">
            <div class="tier-box-labs tier-box-labs-ss">
              <div class="tiers-label">S+</div>
            </div>
            <div class="tiers-desc labs-score-desc"> <i class="bi bi-sort-up"></i> Labs Score</div>
          </div>
          <div class="tooltip-arrow"></div>
        </div>
      </div>

      <div class="character-card-5" data-rareza="5" data-elemento="electro" data-arma="brazales">
        <img class="element-icon" src="@/assets/images/elementos/icon_electro.webp" alt="Electro" />
        <img class="character-img" src="@/assets/images/tarjetas-personajes/yao.webp" alt="Xiangli Yao" />
        <div class="character-name">Xiangli Yao</div>
        <div class="contenido-del-tooltip">
          <img class="resonadores-avatar-5" src="@/assets/images/personajes/icon_xiang.webp" alt="Xiangli Yao">
          <div class="resonadores-nombre">Xiangli Yao</div>
          <div class="resonadores-tags">
            <span class="tag tag-rarezas">5★</span>
            <span class="tag tag-tipo-electro">
              <img src="@/assets/images/elementos/icon_electro.webp" alt="Electro" class="tag-iconos"> Electro
            </span>
            <span class="tag tag-armas">
              <img src="@/assets/images/tipos-armas/weapon_brazales.webp" alt="Brazales" class="tag-iconos">
              Brazales
            </span>
          </div>
          <div class="tiers-role dps"><img src="@/assets/images/categorias/dps.webp" alt="DPS" class="icono-rol"> DPS
          </div>
          <div class="resonadores-tiers">
            <div class="tier-grupos">
              <div class="tier-box tier-box-aa">
                <div class="tiers-label">A+</div>
              </div>
              <div class="tiers-desc">Torre de la adversidad</div>
            </div>
            <div class="tier-grupos">
              <div class="tier-box tier-box-aa">
                <div class="tiers-label">A+</div>
              </div>
              <div class="tiers-desc">Olas Clamantes</div>
            </div>
          </div>
          <div class="tier-grupos labs-score-label">
            <div class="tier-box-labs tier-box-labs-aa">
              <div class="tiers-label">A+</div>
            </div>
            <div class="tiers-desc labs-score-desc"> <i class="bi bi-sort-up"></i> Labs Score</div>
          </div>
          <div class="tooltip-arrow"></div>
        </div>
      </div>

      <div class="character-card-4" data-rareza="4" data-elemento="aero" data-arma="espada">
        <img class="element-icon" src="@/assets/images/elementos/icon_aero.webp" alt="Aero" />
        <img class="character-img" src="@/assets/images/tarjetas-personajes/yangyang.webp" alt="Yangyang" />
        <div class="character-name">Yangyang</div>
        <div class="contenido-del-tooltip">
          <img class="resonadores-avatar-4" src="@/assets/images/personajes/icon_yangyang.webp" alt="Yangyang">
          <div class="resonadores-nombre">Yangyang</div>
          <div class="resonadores-tags">
            <span class="tag tag-rarezas">4★</span>
            <span class="tag tag-tipo-aero">
              <img src="@/assets/images/elementos/icon_aero.webp" alt="Aero" class="tag-iconos"> Aero
            </span>
            <span class="tag tag-armas">
              <img src="@/assets/images/tipos-armas/weapon_espada.webp" alt="Espada" class="tag-iconos"> Espada
            </span>
          </div>
          <div class="tiers-role sub-dps"><img src="@/assets/images/categorias/subdps.webp" alt="SUB-DPS"
              class="icono-rol">
            SUB-DPS
          </div>
          <div class="resonadores-tiers">
            <div class="tier-grupos">
              <div class="tier-box tier-box-b">
                <div class="tiers-label">B</div>
              </div>
              <div class="tiers-desc">Torre de la adversidad</div>
            </div>
            <div class="tier-grupos">
              <div class="tier-box tier-box-aa">
                <div class="tiers-label">A+</div>
              </div>
              <div class="tiers-desc">Olas Clamantes</div>
            </div>
          </div>
          <div class="tier-grupos labs-score-label">
            <div class="tier-box-labs tier-box-labs-a">
              <div class="tiers-label">A</div>
            </div>
            <div class="tiers-desc labs-score-desc"> <i class="bi bi-sort-up"></i> Labs Score</div>
          </div>
          <div class="tooltip-arrow"></div>
        </div>
      </div>

      <div class="character-card-5" data-rareza="5" data-elemento="electro" data-arma="rectificador">
        <img class="element-icon" src="@/assets/images/elementos/icon_electro.webp" alt="Electro" />
        <img class="character-img" src="@/assets/images/tarjetas-personajes/yinlin.webp" alt="Yinlin" />
        <div class="character-name">Yinlin</div>
        <div class="contenido-del-tooltip">
          <img class="resonadores-avatar-5" src="@/assets/images/personajes/icon_yinlin.webp" alt="Yinlin">
          <div class="resonadores-nombre">Yinlin</div>
          <div class="resonadores-tags">
            <span class="tag tag-rarezas">5★</span>
            <span class="tag tag-tipo-electro">
              <img src="@/assets/images/elementos/icon_electro.webp" alt="Electro" class="tag-iconos"> Electro
            </span>
            <span class="tag tag-armas">
              <img src="@/assets/images/tipos-armas/weapon_rectificador.webp" alt="Rectificador" class="tag-iconos">
              Rectificador
            </span>
          </div>
          <div class="tiers-role sub-dps"><img src="@/assets/images/categorias/subdps.webp" alt="SUB-DPS"
              class="icono-rol">
            SUB-DPS
          </div>
          <div class="resonadores-tiers">
            <div class="tier-grupos">
              <div class="tier-box tier-box-a">
                <div class="tiers-label">A</div>
              </div>
              <div class="tiers-desc">Torre de la adversidad</div>
            </div>
            <div class="tier-grupos">
              <div class="tier-box tier-box-aa">
                <div class="tiers-label">A+</div>
              </div>
              <div class="tiers-desc">Olas Clamantes</div>
            </div>
          </div>
          <div class="tier-grupos labs-score-label">
            <div class="tier-box-labs tier-box-labs-aa">
              <div class="tiers-label">A+</div>
            </div>
            <div class="tiers-desc labs-score-desc"> <i class="bi bi-sort-up"></i> Labs Score</div>
          </div>
          <div class="tooltip-arrow"></div>
        </div>
      </div>

      <div class="character-card-4" data-rareza="4" data-elemento="gelio" data-arma="brazales">
        <img class="element-icon" src="@/assets/images/elementos/icon_gelio.webp" alt="Gelio" />
        <img class="character-img" src="@/assets/images/tarjetas-personajes/youhu.webp" alt="Youhu" />
        <div class="character-name">Youhu</div>
        <div class="contenido-del-tooltip">
          <img class="resonadores-avatar-4" src="@/assets/images/personajes/icon_youhu.webp" alt="Youhu">
          <div class="resonadores-nombre">Youhu</div>
          <div class="resonadores-tags">
            <span class="tag tag-rarezas">4★</span>
            <span class="tag tag-tipo-gelio">
              <img src="@/assets/images/elementos/icon_gelio.webp" alt="Gelio" class="tag-iconos"> Gelio
            </span>
            <span class="tag tag-armas">
              <img src="@/assets/images/tipos-armas/weapon_brazales.webp" alt="Brazales" class="tag-iconos">
              Brazales
            </span>
          </div>
          <div class="tiers-role support"><img src="@/assets/images/categorias/support.webp" alt="SUPPORT"
              class="icono-rol">
            SOPORTE
          </div>
          <div class="resonadores-tiers">
            <div class="tier-grupos">
              <div class="tier-box tier-box-b">
                <div class="tiers-label">B</div>
              </div>
              <div class="tiers-desc">Torre de la adversidad</div>
            </div>
            <div class="tier-grupos">
              <div class="tier-box tier-box-c">
                <div class="tiers-label">C</div>
              </div>
              <div class="tiers-desc">Olas Clamantes</div>
            </div>
          </div>
          <div class="tier-grupos labs-score-label">
            <div class="tier-box-labs tier-box-labs-b">
              <div class="tiers-label">B</div>
            </div>
            <div class="tiers-desc labs-score-desc"> <i class="bi bi-sort-up"></i> Labs Score</div>
          </div>
          <div class="tooltip-arrow"></div>
        </div>
      </div>

      <div class="character-card-4" data-rareza="4" data-elemento="electro" data-arma="brazales">
        <img class="element-icon" src="@/assets/images/elementos/icon_electro.webp" alt="Electro" />
        <img class="character-img" src="@/assets/images/tarjetas-personajes/yuanwu.webp" alt="Yuanwu" />
        <div class="character-name">Yuanwu</div>
        <div class="contenido-del-tooltip">
          <img class="resonadores-avatar-4" src="@/assets/images/personajes/icon_yuanwu.webp" alt="Yuanwu">
          <div class="resonadores-nombre">Yuanwu</div>
          <div class="resonadores-tags">
            <span class="tag tag-rarezas">4★</span>
            <span class="tag tag-tipo-electro">
              <img src="@/assets/images/elementos/icon_electro.webp" alt="Electro" class="tag-iconos"> Electro
            </span>
            <span class="tag tag-armas">
              <img src="@/assets/images/tipos-armas/weapon_brazales.webp" alt="Brazales" class="tag-iconos">
              Brazales
            </span>
          </div>
          <div class="tiers-role support"><img src="@/assets/images/categorias/support.webp" alt="SUPPORT"
              class="icono-rol">
            SOPORTE
          </div>
          <div class="resonadores-tiers">
            <div class="tier-grupos">
              <div class="tier-box tier-box-c">
                <div class="tiers-label">C</div>
              </div>
              <div class="tiers-desc">Torre de la adversidad</div>
            </div>
            <div class="tier-grupos">
              <div class="tier-box tier-box-c">
                <div class="tiers-label">C</div>
              </div>
              <div class="tiers-desc">Olas Clamantes</div>
            </div>
          </div>
          <div class="tier-grupos labs-score-label">
            <div class="tier-box-labs tier-box-labs-c">
              <div class="tiers-label">C</div>
            </div>
            <div class="tiers-desc labs-score-desc"> <i class="bi bi-sort-up"></i> Labs Score</div>
          </div>
          <div class="tooltip-arrow"></div>
        </div>
      </div>

      <div class="character-card-5" data-rareza="5" data-elemento="espectro" data-arma="brazales">
        <img class="element-icon" src="@/assets/images/elementos/icon_espectro.webp" alt="Espectro" />
        <img class="character-img" src="@/assets/images/tarjetas-personajes/zani.webp" alt="Zani" />
        <div class="character-name">Zani</div>
        <div class="contenido-del-tooltip">
          <img class="resonadores-avatar-5" src="@/assets/images/personajes/icon_zani.webp" alt="Zani">
          <div class="resonadores-nombre">Zani</div>
          <div class="resonadores-tags">
            <span class="tag tag-rarezas">5★</span>
            <span class="tag tag-tipo-espectro">
              <img src="@/assets/images/elementos/icon_espectro.webp" alt="Espectro" class="tag-iconos"> Espectro
            </span>
            <span class="tag tag-armas">
              <img src="@/assets/images/tipos-armas/weapon_brazales.webp" alt="Brazales" class="tag-iconos">
              Brazales
            </span>
          </div>
          <div class="tiers-role dps"><img src="@/assets/images/categorias/dps.webp" alt="DPS" class="icono-rol"> DPS
          </div>
          <div class="resonadores-tiers">
            <div class="tier-grupos">
              <div class="tier-box tier-box-ss">
                <div class="tiers-label">S+</div>
              </div>
              <div class="tiers-desc">Torre de la adversidad</div>
            </div>
            <div class="tier-grupos">
              <div class="tier-box tier-box-ss">
                <div class="tiers-label">S+</div>
              </div>
              <div class="tiers-desc">Olas Clamantes</div>
            </div>
          </div>
          <div class="tier-grupos labs-score-label">
            <div class="tier-box-labs tier-box-labs-ss">
              <div class="tiers-label">S+</div>
            </div>
            <div class="tiers-desc labs-score-desc"> <i class="bi bi-sort-up"></i> Labs Score</div>
          </div>
          <div class="tooltip-arrow"></div>
        </div>
      </div>

      <div class="character-card-5" data-rareza="5" data-elemento="gelio" data-arma="rectificador">
        <img class="element-icon" src="@/assets/images/elementos/icon_gelio.webp" alt="Gelio" />
        <img class="character-img" src="@/assets/images/tarjetas-personajes/zhezhi.webp" alt="Zhezhi" />
        <div class="character-name">Zhezhi</div>
        <div class="contenido-del-tooltip">
          <img class="resonadores-avatar-5" src="@/assets/images/personajes/icon_zhezhi.webp" alt="Zhezhi">
          <div class="resonadores-nombre">Zhezhi</div>
          <div class="resonadores-tags">
            <span class="tag tag-rarezas">5★</span>
            <span class="tag tag-tipo-gelio">
              <img src="@/assets/images/elementos/icon_gelio.webp" alt="Gelio" class="tag-iconos"> Gelio
            </span>
            <span class="tag tag-armas">
              <img src="@/assets/images/tipos-armas/weapon_rectificador.webp" alt="Pistola" class="tag-iconos">
              Rectificador
            </span>
          </div>
          <div class="tiers-role sub-dps"><img src="@/assets/images/categorias/subdps.webp" alt="SUB-DPS"
              class="icono-rol">
            SUB-DPS
          </div>
          <div class="resonadores-tiers">
            <div class="tier-grupos">
              <div class="tier-box tier-box-ss">
                <div class="tiers-label">S+</div>
              </div>
              <div class="tiers-desc">Torre de la adversidad</div>
            </div>
            <div class="tier-grupos">
              <div class="tier-box tier-box-aa">
                <div class="tiers-label">A+</div>
              </div>
              <div class="tiers-desc">Olas Clamantes</div>
            </div>
          </div>
          <div class="tier-grupos labs-score-label">
            <div class="tier-box-labs tier-box-labs-s">
              <div class="tiers-label">S</div>
            </div>
            <div class="tiers-desc labs-score-desc"> <i class="bi bi-sort-up"></i> Labs Score</div>
          </div>
          <div class="tooltip-arrow"></div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { onMounted, nextTick } from 'vue'
import { inicializarTooltips } from '@/utils/tooltips-resonadores.js'
import { inicializarFiltrosResonadores } from '@/utils/filtros-resonadores.js'

onMounted(() => {
  nextTick(() => {
    inicializarTooltips()
    inicializarFiltrosResonadores()
  })
})
</script>