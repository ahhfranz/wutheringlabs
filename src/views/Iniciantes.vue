<template>
  <div>
    <div class="sidebar-overlay"></div>

    <nav id="sidebar">
      <div class="sidebar-header">
        <router-link to="/">Wuthering Labs</router-link>
        <img src="@/assets/images/logo.webp" class="logo-wuwalabs" alt="Logo de WuWa Labs" width="120" height="36">
        <img src="@/assets/images/logo2.webp" class="logo-wuwalabsmini" alt="Logo de WuWa Labs pequeño" width="40"
          height="40">
        <ul>
          <li>
            <router-link to="/" class="menu-link-flex"></router-link>
            <span>Inicio</span>
            <img src="@/assets/images/categorias/inicio.webp" alt="Inicio" class="menu-icon-img">
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
      </div>
    </nav>

    <!-- Encabezado de la guía -->

    <div class="guide-header">
      <div class="guide-breadcrumbs">
        <router-link to="/">Wuthering Labs</router-link> / <span>Guía para iniciantes</span>
      </div>
      <div class="guide-header-main">
        <div class="intro-anim">
          <div class="guide-img-wrapper">
            <img src="@/assets/images/categorias/diaryclosed.webp" alt="Introducción a Wuthering Waves"
              class="guide-img default">
            <img src="@/assets/images/categorias/diaryopen.webp" alt="Introducción a Wuthering Waves"
              class="guide-img hover">
          </div>
        </div>
        <div class="guide-header-info">
          <h1 class="guide-header-title">Guía para iniciantes</h1>
          <div class="guide-header-desc">Una guía para principiantes que te ayudará a comprender
            mejor los conceptos básicos del juego.</div>
          <div class="guide-header-date">última actualización: <b>08/06/2025</b></div>
        </div>
      </div>
    </div>

    <!-- GUÍAS -->

    <div class="guides-section">
      <h2 class="guides-title">EXPLORACIÓN</h2>

      <section class="about-section">
        <h2 class="about-title">
        </h2>
        <p>
          Recorrer el mundo abierto no solo es emocionante, sino también clave para avanzar más rápido en el juego. Al
          explorar los distintos territorios del mapa, podrás encontrar cofres ocultos, enemigos desafiantes, acertijos
          ambientales y otros secretos que enriquecen tu aventura.</p>
        <p>
          Explorar a fondo te permitirá obtener recompensas valiosas como experiencia para subir tu <b>nivel de
            Unión</b>,
          <b>Astritas</b> (la moneda premium del juego), y diversos objetos útiles. Completar misiones secundarias,
          descubrir
          nuevos jefes y abrir cofres por primera vez acelera considerablemente tu progreso.
        </p>
        <p>
          Durante la exploración, controlarás a uno de los tres resonadores de tu equipo, a quien puedes cambiar en
          cualquier momento según la situación. Este personaje será tu avatar en pantalla, el que se mueve, combate y
          resuelve los retos del entorno.
        </p>
        <p>
          Fuera de las zonas seguras o ciudades, te encontrarás con enemigos patrullando libremente. Si te acercas
          demasiado, entrarán en estado de alerta y te perseguirán, lo que añade un componente dinámico y estratégico a
          cada travesía.
        </p>

        <div class="custom-img-container">
          <img src="@/assets/images/capturas/1.webp" alt="Exploración en Wuthering Waves" class="custom-img" />
        </div>

      </section>

      <h2 class="guides-title">COMBATE</h2>
      <section class="about-section">
        <h2 class="about-title">
        </h2>
        <p>
          El combate en Wuthering Waves es intensamente dinámico y estratégico. Aunque conformas un equipo con <b>3
            Resonadores</b> (personajes), solo uno está activo en el campo de batalla en un momento dado. Sin embargo,
          <b>puedes
            cambiar entre ellos instantáneamente</b>, lo que añade una capa de fluidez y táctica a cada enfrentamiento.
        </p>
        <p>
          Esta mecánica de cambio está profundamente integrada en las habilidades de los personajes: cada uno cuenta con
          una habilidad de <b>Introducción (Intro)</b>, que se activa al entrar en combate y una habilidad de <b>Salida
            (Outro)</b>, que se ejecuta
          al salir, generando combos y sinergias únicas según el momento del intercambio.
        </p>
        <p>
          El sistema fomenta que adaptes tu estilo según las situaciones, alternando entre Resonadores que pueden
          especializarse en <b>control</b>, <b>daño explosivo</b> de un solo objetivo o múltiples, e incluso <b>apoyo
            mediante curaciones y escudos</b>, haciendo que cada combate sea una experiencia
          fresca y estratégica.
        </p>
        <p>
          Adéntrate en el combate del juego y su lógica con el siguiente video:
        </p>

        <div class="youtube-video-container">
          <iframe width="100%" height="400" src="https://www.youtube.com/embed/ep_9Qo8VqSI" title="YouTube video player"
            frameborder="0" allowfullscreen></iframe>
        </div>

      </section>

      <h2 class="guides-title">RESONADORES</h2>
      <section class="about-section">
        <h2 class="about-title">
        </h2>
        <p>
          Los Resonadores <b>son los personajes jugables</b> en Wuthering Waves. Cada uno cuenta con <b>habilidades</b>,
          estilos de
          combate y <b>roles</b> únicos dentro del equipo, como <b>daño principal</b>, <b>apoyo o control de masas</b>.
          Son el núcleo del
          sistema de combate y progresión del juego.
        </p>
        <p>
          La forma principal de obtener nuevos Resonadores es a través de los banners que funcionan como un
          <b>sistema de gacha</b>, es decir, un sistema de invocaciones aleatorias en el que puedes gastar una moneda
          del juego
          (obtenida jugando o comprando) para intentar <b>desbloquear nuevos personajes</b>. Existen diferentes tipos de
          banners, algunos <b>permanentes</b> y otros por <b>tiempo limitado</b> (promocionales), que suelen presentar
          Resonadores
          exclusivos con una tasa de obtención mejorada.
        </p>
        <p>
          Varios Resonadores también pueden <b>conseguirse de forma gratuita</b>
          cumpliendo ciertos requisitos dentro del juego, como completar <b>misiones principales</b>, participar en
          <b>eventos
            especiales</b> o alcanzar ciertos <b>logros</b>. Esto permite a todos los jugadores, incluso quienes no
          invierten dinero
          real, acceder a personajes valiosos y competitivos si se esfuerzan en las actividades del juego.
        </p>

        <div class="tier-col">

          <div class="resonadores-gelio" data-rarezas="5" data-elemento="gelio" data-arma="pistolas"
            data-labs-rank-dps="S+" data-torre-rank-dps="S+" data-olas-rank-dps="S" data-role="dps">
            <span class="elemento-gelio">
              <img src="@/assets/images/elementos/icon_gelio.webp" alt="gelio">
            </span>
            <div class="imagen-personaje-5">
              <img src="@/assets/images/personajes/icon_carlotta.webp" alt="Carlotta">
            </div>
            <div class="contenido-del-tooltip">
              <img class="resonadores-avatar-5" src="@/assets/images/personajes/icon_carlotta.webp" alt="Carlotta">
              <div class="resonadores-nombre">Carlotta</div>
              <div class="resonadores-tags">
                <span class="tag tag-rarezas">5★</span>
                <span class="tag tag-tipo-gelio">
                  <img src="@/assets/images/elementos/icon_gelio.webp" alt="Destrucción" class="tag-iconos"> Gelio
                </span>
                <span class="tag tag-armas">
                  <img src="@/assets/images/tipos-armas/weapon_pistolas.webp" alt="pistolas" class="tag-iconos">
                  pistolas
                </span>
              </div>
              <div class="tiers-role dps"><img src="@/assets/images/categorias/dps.webp" alt="DPS" class="icono-rol">
                DPS
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

          <div class="resonadores-destrucción" data-rarezas="5" data-elemento="destrucción" data-arma="espada"
            data-labs-rank-dps="S+" data-torre-rank-dps="S" data-olas-rank-dps="S+" data-role="dps">
            <span class="elemento-destrucción">
              <img src="@/assets/images/elementos/icon_havoc.webp" alt="destrucción">
            </span>
            <div class="imagen-personaje-5">
              <img src="@/assets/images/personajes/icon_camellya.webp" alt="Camellya">
            </div>
            <div class="contenido-del-tooltip">
              <img class="resonadores-avatar-5" src="@/assets/images/personajes/icon_camellya.webp" alt="Camellya">
              <div class="resonadores-nombre">Camellya</div>
              <div class="resonadores-tags">
                <span class="tag tag-rarezas">5★</span>
                <span class="tag tag-tipo-destrucción">
                  <img src="@/assets/images/elementos/icon_havoc.webp" alt="Destrucción" class="tag-iconos"> Destrucción
                </span>
                <span class="tag tag-armas">
                  <img src="@/assets/images/tipos-armas/weapon_espada.webp" alt="Espada" class="tag-iconos"> Espada
                </span>
              </div>
              <div class="tiers-role dps"><img src="@/assets/images/categorias/dps.webp" alt="DPS" class="icono-rol">
                DPS
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

          <div class="resonadores-fusion" data-rarezas="5" data-elemento="fusion" data-arma="espada"
            data-labs-rank-dps="A+" data-labs-rank-hybrid="A+" data-torre-rank-dps="A+" data-torre-rank-hybrid="A+"
            data-olas-rank-dps="S+" data-olas-rank-hybrid="A+" data-role="dps hybrid">
            <span class="elemento-fusion">
              <img src="@/assets/images/elementos/icon_fusion.webp" alt="fusion">
            </span>
            <div class="imagen-personaje-5">
              <img src="@/assets/images/personajes/icon_changli.webp" alt="Changli">
            </div>
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
              <div class="tiers-role dps"><img src="@/assets/images/categorias/dps.webp" alt="DPS" class="icono-rol">
                DPS
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
                    class="icono-rol"> SUB-DPS</div>
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


          <div class="resonadores-espectro" data-rarezas="5" data-elemento="espectro" data-arma="rectificador"
            data-labs-rank-support="S+" data-torre-rank-support="S+" data-olas-rank-support="S+" data-role="support">
            <span class="elemento-espectro">
              <img src="@/assets/images/elementos/icon_espectro.webp" alt="espectro">
            </span>
            <div class="imagen-personaje-5">
              <img src="@/assets/images/personajes/icon_shorekeeper.webp" alt="Shorekeeper">
            </div>
            <div class="contenido-del-tooltip">
              <img class="resonadores-avatar-5" src="@/assets/images/personajes/icon_shorekeeper.webp"
                alt="Shorekeeper">
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

          <div class="resonadores-aero" data-rarezas="4" data-elemento="aero" data-arma="espada"
            data-labs-rank-hybrid="A" data-torre-rank-hybrid="B" data-olas-rank-hybrid="A+" data-role="hybrid">
            <span class="elemento-aero">
              <img src="@/assets/images/elementos/icon_aero.webp" alt="aero">
            </span>
            <div class="imagen-personaje-4">
              <img src="@/assets/images/personajes/icon_yangyang.webp" alt="Yangyang">
            </div>
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

          <div class="resonadores-electro" data-rarezas="4" data-elemento="electro" data-arma="mandoble"
            data-labs-rank-hybrid="C" data-torre-rank-hybrid="C" data-olas-rank-hybrid="C" data-role="hybrid">
            <span class="elemento-electro">
              <img src="@/assets/images/elementos/icon_electro.webp" alt="Electro">
            </span>
            <div class="imagen-personaje-4">
              <img src="@/assets/images/personajes/icon_lumi.webp" alt="Lumi">
            </div>
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
        </div>
      </section>

    </div>

    <h2 class="guides-title">ESTADÍSTICAS</h2>
    <section class="about-section">

      <h2 class="about-title"></h2>

      <p>
        Las estadísticas de los personajes son <b>valores numéricos</b> que determinan el
        <b>rendimiento de cada Resonador en combate</b>. Estas estadísticas influyen directamente en aspectos clave
        como el
        <b>daño</b> que infligen, la <b>vida máxima</b> que tienen, la <b>velocidad</b> con la que recuperan sus
        habilidades y mucho más.
      </p>
      <p>
        Las estadísticas pueden ser:
      </p>

      <div class="stats-list">

        <details class="stat-accordion">
          <summary>
            <div class="stat-header">
              <div class="stats-icons">
                <img src="@/assets/images/stats/stamina.webp">
              </div>
              <span class="stat-title">Resistencia máx.</span>
            </div>
            <span class="accordion-arrow"></span>
          </summary>
          <div class="stat-content">
            <span class="nowrap">
              Determina cuánta resistencia continua puedes usar antes de agotarte, al realizar acciones como correr,
              esquivar, escalar, nadar, planear y realizar ataques cargados.
            </span>
            <div class="stat-extra">
              <span class="formula">
                Después de no realizar ninguna de estas acciones durante <b>1,5</b> segundos, la energía se regenerará
                de forma natural a una velocidad de <b>25</b> puntos de energía por segundo. El medidor de energía se
                muestra
                como una barra amarilla a la derecha del personaje en el centro de la pantalla cuando se está agotando
                o
                recargando, y se ocultará automáticamente cuando esté completamente cargada. Visualmente, el medidor
                está dividido en secciones, cada una representando <b>100</b> puntos de energía.
              </span>
            </div>
          </div>
        </details>

        <details class="stat-accordion">
          <summary>
            <div class="stat-header">
              <div class="stats-icons">
                <img src="@/assets/images/stats/critrate.webp">
              </div>
              <span class="stat-title">Prob. CRIT</span>
            </div>
            <span class="accordion-arrow"></span>
          </summary>
          <div class="stat-content">
            <span class="nowrap">
              Probabilidad de que el Resonador haga un golpe crítico. Todos los personajes comienzan con un 5% de
              probabilidad y se calcula:
            </span>
            <div class="stat-extra">
              <span class="formula">
                Prob. CRIT= Prob. CRIT base<sub>Resonador</sub> + Prob. CRIT<sub>Arma</sub> + Prob.
                CRIT<sub>Ecos</sub> + Prob. CRIT de bonificaciones<sub>Sets y habilidades</sub>
              </span>
            </div>
          </div>
        </details>

        <details class="stat-accordion">
          <summary>
            <div class="stat-header">
              <div class="stats-icons">
                <img src="@/assets/images/stats/critdamage.webp">
              </div>
              <span class="stat-title">Daño CRIT</span>
            </div>
            <span class="accordion-arrow"></span>
          </summary>
          <div class="stat-content">
            <span class="nowrap">
              Multiplicador de daño al hacer un golpe crítico. Se calcula:
            </span>
            <div class="stat-extra">
              <span class="formula">
                Daño Promedio= Daño &times; % de Daño CRIT &times; % de Prob. CRIT + Daño &times; (1 - % Prob. CRIT)
              </span>
            </div>
          </div>
        </details>

        <details class="stat-accordion">
          <summary>
            <div class="stat-header">
              <div class="stats-icons">
                <img src="@/assets/images/stats/energyre.webp">
              </div>
              <span class="stat-title">Regen. de energía</span>
            </div>
            <span class="accordion-arrow"></span>
          </summary>
          <div class="stat-content">
            <span class="nowrap">
              Velocidad de recarga de energía para la Liberación de Resonancia (Ultimate). Se calcula:
            </span>
            <div class="stat-extra">
              <span class="formula">
                Energía ganada= Regen. de energía base<sub>Resonador</sub> &times; % de Regen. de energía
              </span>
            </div>
          </div>
        </details>

        <details class="stat-accordion">
          <summary>
            <div class="stat-header">
              <div class="stats-icons">
                <img src="@/assets/images/stats/bonif.webp">
              </div>
              <span class="stat-title">Bonif. de Habilidad de resonancia</span>
            </div>
            <span class="accordion-arrow"></span>
          </summary>
          <div class="stat-content">
            <span class="nowrap">
              Aumenta el daño de la Habilidad de Resonancia. Se calcula:
            </span>
            <div class="stat-extra">
              <span class="formula">
                Daño= Daño Base<sub>Resonador</sub> &times; (1 + % Bonif. de Habilidad de Resonancia) &times; Otros
                modificadores
              </span>
            </div>
          </div>
        </details>

        <details class="stat-accordion">
          <summary>
            <div class="stat-header">
              <div class="stats-icons">
                <img src="@/assets/images/stats/bonif.webp">
              </div>
              <span class="stat-title">Bonif. de Liberación de resonancia</span>
            </div>
            <span class="accordion-arrow"></span>
          </summary>
          <div class="stat-content">
            <span class="nowrap">
              Aumenta el daño de la Liberación de Resonancia (Ultimate). Se calcula:
            </span>
            <div class="stat-extra">
              <span class="formula">
                Daño= Daño Base<sub>Resonador</sub> &times; (1 + % Bonif. de Liberación de resonancia) &times; Otros
                modificadores
              </span>
            </div>
          </div>
        </details>

        <details class="stat-accordion">
          <summary>
            <div class="stat-header">
              <div class="stats-icons">
                <img src="@/assets/images/stats/bonif.webp">
              </div>
              <span class="stat-title">Bonif. de ATQ básico</span>
            </div>
            <span class="accordion-arrow"></span>
          </summary>
          <div class="stat-content">
            <span class="nowrap">
              Aumenta el daño de los ataques básicos. Se calcula:
            </span>
            <div class="stat-extra">
              <span class="formula">
                Daño= Daño Base<sub>Resonador</sub> &times; (1 + % Bonif. de ATQ básico) &times; Otros
                modificadores
              </span>
            </div>
          </div>
        </details>

        <details class="stat-accordion">
          <summary>
            <div class="stat-header">
              <div class="stats-icons">
                <img src="@/assets/images/stats/bonif.webp">
              </div>
              <span class="stat-title">Bonif. de ATQ cargado</span>
            </div>
            <span class="accordion-arrow"></span>
          </summary>
          <div class="stat-content">
            <span class="nowrap">
              Aumenta el daño de los ataques cargados. Se calcula:
            </span>
            <div class="stat-extra">
              <span class="formula">
                Daño= Daño Base<sub>Resonador</sub> &times; (1 + % Bonif. de ATQ cargado) &times; Otros
                modificadores
              </span>
            </div>
          </div>
        </details>

        <details class="stat-accordion">
          <summary>
            <div class="stat-header">
              <div class="stats-icons">
                <img src="@/assets/images/stats/bonif.webp">
              </div>
              <span class="stat-title">Bonif. de Daño Elemental</span>
            </div>
            <span class="accordion-arrow"></span>
          </summary>
          <div class="stat-content">
            <span class="nowrap">
              Aumenta todo el daño elemental (hay seis elementos, cada uno con su propio bonus). Se calcula:
            </span>
            <div class="stat-extra">
              <span class="formula">
                Daño= Daño Base<sub>Resonador</sub> &times; (1 + % Bonificación de Daño Elemental) &times; Otros
                modificadores
              </span>
            </div>
          </div>
        </details>

        <details class="stat-accordion">
          <summary>
            <div class="stat-header">
              <div class="stats-icons">
                <img src="@/assets/images/stats/res.webp">
              </div>
              <span class="stat-title">RES Elemental</span>
            </div>
            <span class="accordion-arrow"></span>
          </summary>
          <div class="stat-content">
            <span class="nowrap">
              Reduce el daño elemental recibido de un elemento específico. Se calcula:
            </span>
            <div class="stat-extra">
              <span class="formula">
                Daño Recibido = Daño Base<sub>Resonador</sub> &times; (1 - RES Elemental)
              </span>
            </div>
          </div>
        </details>

        <details class="stat-accordion">
          <summary>
            <div class="stat-header">
              <div class="stats-icons">
                <img src="@/assets/images/stats/healingbonus.webp">
              </div>
              <span class="stat-title">Bonif. de curación</span>
            </div>
            <span class="accordion-arrow"></span>
          </summary>
          <div class="stat-content">
            <span class="nowrap">
              Aumenta la cantidad de curación que proporciona un Resonador. Se calcula:
            </span>
            <div class="stat-extra">
              <span class="formula">
                Cantidad de Curación = Curación Base<sub>Resonador</sub> &times; (1 + Bonif. de
                curación<sub>Resonador</sub>) + Bonif. de curación<sub>Objetivo</sub>
              </span>
            </div>
          </div>
        </details>
      </div>
    </section>


    <h2 class="guides-title">ELEMENTOS</h2>
    <section class="about-section">
      <h2 class="about-title"></h2>
      <p>
        En <b>Wuthering Waves</b>, cada Resonador está vinculado a un <b>Elemento</b>, el cual define el tipo de
        daño que inflige con sus <b>habilidades</b>, <b>ataques básicos</b> y <b>definitivas</b>.
      </p>
      <p>
        El Elemento no solo determina la afinidad del personaje, sino que también interactúa con enemigos, efectos
        de estado y mecánicas de resistencia y bonificación de daño.
        Comprender la afinidad elemental de un Resonador es clave para optimizar <b>sinergias en equipo</b>,
        contrarrestar enemigos resistentes y <b>potenciar el daño infligido</b>.
      </p>
      <p>
        <b>Wuthering Waves</b> cuenta actualmente con <b>6 elementos</b> jugables:
      </p>
      <div class="lista-animada">
        <span class="gelio-title">
          <img src="@/assets/images/elementos/icon_gelio.webp" alt="Gelio" class="gelio-icon">
          Gelio
        </span>
        <span class="fusion-title">
          <img src="@/assets/images/elementos/icon_fusion.webp" alt="Fusion" class="fusion-icon">
          Fusión
        </span>
        <span class="aero-title">
          <img src="@/assets/images/elementos/icon_aero.webp" alt="Aero" class="aero-icon">
          Aero
        </span>
        <span class="electro-title">
          <img src="@/assets/images/elementos/icon_electro.webp" alt="Electro" class="electro-icon">
          Electro
        </span>
        <span class="espectro-title">
          <img src="@/assets/images/elementos/icon_espectro.webp" alt="Espectro" class="espectro-icon">
          Espectro
        </span>
        <span class="destrucción-title">
          <img src="@/assets/images/elementos/icon_havoc.webp" alt="Destrucción" class="destrucción-icon">
          Destrucción
        </span>
      </div>
    </section>

    <h2 class="guides-title">ARMAS</h2>

    <section class="about-section">
      <h2 class="about-title"></h2>
      <p>
        Las armas son un componente clave del desarrollo de tus resonadores y su rendimiento en combate. Cada
        resonador puede utilizar <b>un solo tipo</b> de arma específico y proporcionan mejoras a estadísticas
        extremadamente
        importantes como la <b>Prob. CRIT</b>, el <b>Daño CRIT</b> o la <b>Regen. de energía</b>.
      </p>
      <p>
        Las armas tienen distintos niveles de rareza, que van desde <b>2★</b> hasta <b>5★</b>. A mayor rareza,
        <b>mejores estadísticas</b> base y habilidades pasivas más poderosas. Pueden <b>mejorarse</b> utilizando
        materiales obtenidos durante
        la <b>exploración</b>, farmeo de <b>dungeons</b> y <b>combates</b>, lo que permite incrementar su nivel y
        potencial.
      </p>

      <div class="lista-animada">
        <span class="armacolor-lista">
          <img src="@/assets/images/tipos-armas/weapon_espada.webp" alt="Espada" class="armaicono-lista">
          Espadas
        </span>
        <span class="armacolor-lista">
          <img src="@/assets/images/tipos-armas/weapon_mandoble.webp" alt="Mandoble" class="armaicono-lista">
          Mandobles
        </span>
        <span class="armacolor-lista">
          <img src="@/assets/images/tipos-armas/weapon_pistolas.webp" alt="pistolas" class="armaicono-lista">
          pistolas
        </span>
        <span class="armacolor-lista">
          <img src="@/assets/images/tipos-armas/weapon_rectificador.webp" alt="Rectificador" class="armaicono-lista">
          Rectificadores
        </span>
        <span class="armacolor-lista">
          <img src="@/assets/images/tipos-armas/weapon_brazales.webp" alt="Brazales" class="armaicono-lista">
          Brazales
        </span>
      </div>
    </section>

    <h2 class="guides-title">HABILIDADES DE LOS RESONADORES</h2>
    <section class="about-section">
      <h2 class="about-title"></h2>

      <p>
        Cada <b>Resonador</b> cuenta con <b>6 habilidades</b> principales que definen su estilo de juego y su
        rol
        en
        el equipo. Comprender bien cómo y cuándo usar cada una de ellas es clave para aprovechar al máximo su
        potencial en combate.
      </p>
      <p>
        Las habilidades son:
      </p>

      <div class="stats-list">

        <details class="stat-accordion">
          <summary>
            <div class="stat-header">
              <div class="stats-icons">
                <img src="@/assets/images/stats/basicattack.webp">
              </div>
              <span class="stat-title">Ataque normal</span>
            </div>
            <span class="accordion-arrow"></span>
          </summary>
          <div class="stat-content">
            <span class="nowrap">
              Es el ataque automático del personaje y siempre está disponible. Generalmente se trata de la
              habilidad
              más utilizada
              en combate, ya que permite realizar una cadena de golpes rápidos sin consumir recursos.
            </span>
            <div class="stat-extra">
              <span class="formula">
                También sirve como principal método para <b>generar energía</b> o <b>cargar otras
                  habilidades</b>,
                dependiendo del personaje y si se mantiene presionado el botón de ataque, se activa el <b>Ataque
                  cargado</b>, una variante más poderosa que puede tener efectos adicionales.
              </span>
            </div>
          </div>
        </details>

        <details class="stat-accordion">
          <summary>
            <div class="stat-header">
              <div class="stats-icons">
                <img src="@/assets/images/stats/skill.webp">
              </div>
              <span class="stat-title">Habilidad de Resonancia</span>
            </div>
            <span class="accordion-arrow"></span>
          </summary>
          <div class="stat-content">
            <span class="nowrap">
              Es una habilidad activa con efectos únicos, que puede variar según el Resonador: desde <b>ataques
                en
                área</b>, <b>escudos</b>, <b>control de masas</b>, hasta <b>sanaciones</b>.
            </span>
            <div class="stat-extra">
              <span class="formula">
                Estas habilidades suelen tener un <b>tiempo de reutilización</b> (cooldown), por lo que deben
                usarse estrategicamente.
              </span>
            </div>
          </div>
        </details>

        <details class="stat-accordion">
          <summary>
            <div class="stat-header">
              <div class="stats-icons">
                <img src="@/assets/images/stats/ultimate.webp">
              </div>
              <span class="stat-title">Liberación de Resonancia</span>
            </div>
            <span class="accordion-arrow"></span>
          </summary>
          <div class="stat-content">
            <span class="nowrap">
              Es la <b>habilidad definitiva</b> o "ultimate" del personaje. Es, por lo general, su técnica más
              poderosa.
            </span>
            <div class="stat-extra">
              <span class="formula">
                Para activarla, es necesario cargar una barra especial, lo cual se logra al realizar acciones
                como
                <b>dañar enemigos</b>, <b>esquivar</b> en el momento exacto (Evasión Extrema), o <b>generar
                  energía</b> con otras
                habilidades. Tras su uso, esta habilidad debe volver a <b>recargarse</b>, lo que la convierte en
                una
                herramienta de uso limitado pero muy decisiva en momentos críticos del combate.
              </span>
            </div>
          </div>
        </details>

        <details class="stat-accordion">
          <summary>
            <div class="stat-header">
              <div class="stats-icons">
                <img src="@/assets/images/stats/forte.webp">
              </div>
              <span class="stat-title">Circuito del Forte</span>
            </div>
            <span class="accordion-arrow"></span>
          </summary>
          <div class="stat-content">
            <span class="nowrap">
              Es una <b>mecánica única para cada Resonador</b> y define muchas veces su estilo de juego. Se
              representa
              mediante un <b>indicador especial</b> ubicado sobre la barra de vida del personaje.
            </span>
            <div class="stat-extra">
              <span class="formula">
                Se activa mediante <b>ciertas acciones</b> o al usar <b>habilidades específicas</b> y una vez
                disponible, cambia
                de color según el Elemento del personaje (como Glacio, Fusión, Aero, etc.) y adopta una forma
                similar a una <b>onda sonora</b>. Al activarlo, proporciona <b>efectos potentes</b> o <b>combos
                  especiales</b> que
                refuerzan enormemente el rendimiento del personaje durante un breve periodo.
              </span>
            </div>
          </div>
        </details>

        <details class="stat-accordion">
          <summary>
            <div class="stat-header">
              <div class="stats-icons">
                <img src="@/assets/images/stats/intro.webp">
              </div>
              <span class="stat-title">Habilidades de Entrada y Salida (Intro y Outro)</span>
            </div>
            <span class="accordion-arrow"></span>
          </summary>
          <div class="stat-content">
            <span class="nowrap">
              Estas habilidades se relacionan con el sistema de cambio de personajes en combate, y se activan al
              acumular la Energía de Concierto, visible en un medidor a la izquierda de la barra
              de vida.
            </span>
            <div class="stat-extra">
              <span class="formula">
                La <b>Habilidad Outro</b> se activa cuando se <b>cambia de personaje</b> y el <b>resonador
                  saliente</b> ejecuta una
                acción de apoyo, como aumentar el daño o aplicar efectos al siguiente personaje.
                En cambio, la <b>Habilidad Intro</b>, es la que realiza el <b>resonador entrante</b> al
                aparecer,
                normalmente un
                ataque inicial o una técnica que inicia una cadena de combos.
                Este sistema fomenta un estilo de juego dinámico, en el que la <b>rotación eficiente</b> de
                personajes es
                esencial para <b>maximizar el daño</b>.
              </span>
            </div>
          </div>
        </details>
      </div>
    </section>

    <h2 class="guides-title">MEJORAR A LOS RESONADORES</h2>

    <section class="about-section">
      <h2 class="about-title"></h2>

      <p>
        <b>Mejorar</b> a tus Resonadores en Wuthering Waves es fundamental para potenciar sus habilidades de
        combate y enfrentarte con éxito a los <b>desafíos más exigentes</b> que ofrece el juego.
        Existen diversas <b>formas de fortalecer</b> a un Resonador, cada una con un impacto significativo
        en su <b>rendimiento</b> en combate:
      </p>

      <div class="stats-list">

        <details class="stat-accordion">
          <summary>
            <div class="stat-header">
              <div class="stats-icons">
                <img src="@/assets/images/stats/level.webp">
              </div>
              <span class="stat-title">Subir de nivel</span>
            </div>
            <span class="accordion-arrow"></span>
          </summary>
          <div class="stat-content">
            <span class="nowrap">
              Cada Resonador puede alcanzar un nivel máximo de <b>90</b>. Al subir de nivel, <b>aumentan sus
                estadísticas</b> base como el <b>ATQ</b>, la D<b></b>EF y los <b>PS</b> máximos.
            </span>
            <div class="stat-extra">
              <span class="formula">
                Los Resonadores comienzan con un nivel máximo inicial de <b>20</b>. Para seguir subiendo más
                allá
                de ese límite, deberás realizar una <b>Ascensión</b>. Cada ascensión desbloquea <b>10
                  niveles
                  adicionales</b> hasta llegar al nivel <b>90</b>. Estas ascensiones requieren
                <b>materiales</b> obtenidos de
                <b>jefes</b>, <b>enemigos especiales</b> y <b>recursos recolectables</b> del mundo abierto,
                como flores
                resonantes o núcleos elementales.
              </span>
              <div class="custom-img-container">
                <img src="@/assets/images/capturas/2.webp" alt="Exploración en Wuthering Waves" class="custom-img" />
              </div>
            </div>
          </div>
        </details>



        <details class="stat-accordion">
          <summary>
            <div class="stat-header">
              <div class="stats-icons">
                <img src="@/assets/images/stats/level.webp">
              </div>
              <span class="stat-title">Mejorar los Fortes (Habilidades)</span>
            </div>
            <span class="accordion-arrow"></span>
          </summary>
          <div class="stat-content">
            <span class="nowrap">
              Los Fortes son un <b>árbol de mejora de habilidades</b> exclusivo de cada Resonador.
              Al desbloquear y mejorar los distintos nodos del árbol de Fortalezas, tu personaje obtendrá
              <b>bonificaciones de estadísticas</b>, <b>habilidades pasivas</b> adicionales y <b>mejoras</b>
              directas a sus
              habilidades principales.
            </span>
            <div class="stat-extra">
              <span class="formula">
                Para mejorar las Fortes necesitarás reunir materiales específicos que se consiguen a través
                del farmeo de "dungeons" como los Desafíos de falsificación, Desafíos semanales y derrotando
                a jefes de mundo.
                Sin embargo, no podrás mejorar las Fortes de un Resonador si no lo
                has <b>ascendido</b> previamente. Cada mejora está vinculada al <b>nivel de Ascensión</b>
                del personaje, por
                lo que primero deberás subir su nivel y realizar las ascensiones necesarias para desbloquear
                nuevas ramas del árbol.
              </span>
              <div class="custom-img-container">
                <img src="@/assets/images/capturas/5.webp" alt="Exploración en Wuthering Waves" class="custom-img" />
              </div>
            </div>
          </div>
        </details>

        <details class="stat-accordion">
          <summary>
            <div class="stat-header">
              <div class="stats-icons">
                <img src="@/assets/images/stats/level.webp">
              </div>
              <span class="stat-title">Mejorar la cadena de resonancia (Dupes)</span>
            </div>
            <span class="accordion-arrow"></span>
          </summary>
          <div class="stat-content">
            <span class="nowrap">
              La Cadena de Resonancia <b>mejora las habilidades</b> del Resonador y le otorga nuevas
              <b>bonificaciones
                pasivas</b>. Cada Resonador tiene <b>6</b> mejoras en la Cadena de Resonancia, y cada una
              proporciona una
              <b>bonificación diferente</b> que mejoran <b>su rendimiento</b> y daño general <b>o el del
                equipo</b>.
            </span>
            <div class="stat-extra">
              <span class="formula">
                Las mejoras de la Cadena de Resonancia se pueden desbloquear obteniendo <b>copias
                  duplicadas</b>
                (llamadas <b>Bandas de Onda</b>) del Resonador a través de <b>Convocaciones</b> (el sistema
                gacha) o
                mediante <b>misiones</b> y <b>eventos</b> dentro del juego. A diferencia de otros juegos,
                también <b>puedes
                  comprar</b> Bandas de Onda en la <b>tienda del juego</b> usando una moneda que se obtiene
                al hacer
                tiradas; sin embargo, la tienda <b>limita</b> la cantidad de Bandas de Onda que puedes
                comprar a <b>2
                  por personaje</b>.
                La única excepción a esto es el <b>Personaje Principal</b>, que puede obtener sus Bandas de
                Onda mediante <b>misiones del juego</b> y <b>recompensas</b>.
              </span>
              <div class="custom-img-container">
                <img src="@/assets/images/capturas/6.webp" alt="Exploración en Wuthering Waves" class="custom-img" />
              </div>
            </div>
          </div>
        </details>

        <details class="stat-accordion">
          <summary>
            <div class="stat-header">
              <div class="stats-icons">
                <img src="@/assets/images/stats/level.webp">
              </div>
              <span class="stat-title">Mejorar las armas</span>
            </div>
            <span class="accordion-arrow"></span>
          </summary>
          <div class="stat-content">
            <span class="nowrap">
              Las Armas son un tipo de <b>equipamiento</b> que todos los Resonadores pueden usar y
              proporcionan
              bonificaciones de estadísticas al Resonador, además de una nueva <b>habilidad pasiva</b>. Al
              igual
              que los Resonadores, las Armas también <b>tienen un Nivel</b> que va del <b>1</b> al
              <b>90</b>. Estas pueden <b>subir
                de nivel</b> y <b>ascenderse</b>. Al hacerlo, se <b>incrementa</b> la bonificación de
              <b>estadísticas</b> que otorgan
              al Resonador que las lleva equipadas.
            </span>
            <div class="stat-extra">
              <span class="formula">
                Cada Arma también posee una <b>Habilidad de Arma</b>, que es una <b>bonificación pasiva</b>.
                Esta
                habilidad comienza en <b>Rango 1</b> y puede mejorarse hasta <b>Rango 5</b> utilizando la
                función de
                <b>Sintonizar</b>.
                Para usar la <b>función de Sintonizar</b>, necesitarás <b>gastar armas duplicadas de la
                  misma que estás
                  mejorando</b>. Cada arma duplicada que utilices <b>aumentará en 1 el Rango de la
                  Habilidad</b> del
                arma. Ten en cuenta que <b>cualquier arma utilizada como material será consumida y
                  destruida</b>. Aumentar el Rango de una Habilidad de Arma <b>mejorará</b> parte o la
                totalidad del
                valor numérico de la <b>bonificación que proporciona</b>.
              </span>
              <div class="custom-img-container">
                <img src="@/assets/images/capturas/3.webp" alt="Exploración en Wuthering Waves" class="custom-img" />
              </div>
            </div>
          </div>
        </details>

        <details class="stat-accordion">
          <summary>
            <div class="stat-header">
              <div class="stats-icons">
                <img src="@/assets/images/stats/level.webp">
              </div>
              <span class="stat-title">Mejorar los ecos</span>
            </div>
            <span class="accordion-arrow"></span>
          </summary>
          <div class="stat-content">
            <span class="nowrap">
              Los <b>Ecos son el otro tipo de equipamiento en este juego</b> y cumplen la función de
              <b>armaduras</b> y
              <b>accesorios</b> en un juego de rol tradicional. Equipar Ecos a tu Resonador le proporcionará
              una
              <b>variedad de aumentos de estadísticas</b>, desde <b>ATK</b> hasta <b>PS</b> y <b>Regen. de
                energía</b>. Los Ecos
              <b> representan la mayor parte del incremento de estadísticas de los Resonadores</b>.
            </span>
            <div class="stat-extra">
              <span class="formula">
                <ul class="echo-list">
                  <li><b>Todos los Ecos</b> tienen una habilidad activa llamada <b>Habilidad de Eco</b>.
                  </li>
                  <li>Hay un total de <b>5 ranuras</b> de Eco. El Eco que <b>equipes en la primera
                      ranura</b> tendrá su
                    <b> Habilidad de Eco activa</b> disponible para usar en los combates. El orden de los
                    demás <b>no importa</b>.
                  </li>
                  <li>Cada Resonador tiene un <b>límite de COSTE de 10 al inicio del juego</b>, y es posible
                    <b>aumentarlo a 12</b>
                    mediante mejoras en el <b>Módulo de datos</b>. Los Resonadores <b>solo pueden equipar
                      Ecos hasta alcanzar ese límite</b>.
                  </li>
                </ul>

                <p>Existen <b>4</b> Clases diferentes de Ecos:</p>
                <ul class="echo-list">
                  <li><span class="echo-common"><b>Estándar</b></span> (COSTE-1)</li>
                  <li><span class="echo-elite"><b>Élite</b></span> (COSTE-3)</li>
                  <li><span class="echo-overlord"><b>Marea</b></span> (COSTE-4)</li>
                  <li><span class="echo-calamity"><b>Tsunami</b></span> (COSTE-4)</li>
                </ul>

                <p>Cada Eco tiene <b>2 estadísticas principales</b> y hasta <b>5 sub-estadísticas</b>. Las
                  <b>estadísticas
                    principales</b> varían, mientras que las <b>estadísticas secundarias</b> principales
                  <b>son fijas
                    según la Clase del Eco</b>. Dependiendo de la Clase del Eco, las posibles estadísticas
                  principales son:
                </p>
                <ul class="echo-list">
                  <li><span class="echo-common"><b>Estándar</b></span> - PS%, ATQ%, DEF%</li>
                  <li><span class="echo-elite"><b>Élite</b></span> - PS%, ATQ%, DEF%, Regen. de energía%,
                    Bonif. de daño elemental*</li>
                  <li><span class="echo-overlord"><b>Marea</b></span> - PS%, ATQ%, DEF%, Prob. CRIT%,
                    Daño CRIT%, Bonif. de curación%</li>
                  <li><span class="echo-calamity"><b>Tsunami</b></span> - PS%, ATQ%, DEF%, Prob. CRIT%,
                    Daño CRIT%, Bonif. de curación%</li>
                </ul>
                <p><i>*Ten en cuenta, que la Bonif. de daño elemental solo puede
                    ser de uno
                    de los 6 elementos posibles. No es una Bonif. de daño elemental general.</i></p>

                <p>Según la Clase del Eco, las <b>estadísticas secundarias principales fijas</b> son:</p>
                <ul class="echo-list">
                  <li><span class="echo-common"><b>Estándar</b></span> - PS plano</li>
                  <li><span class="echo-elite"><b>Élite</b></span> - ATQ plano</li>
                  <li><span class="echo-overlord"><b>Marea</b></span> - ATQ plano</li>
                  <li><span class="echo-calamity"><b>Tsunami</b></span> - ATQ plano</li>
                </ul>
              </span>
              <div class="custom-img-container">
                <img src="@/assets/images/capturas/4.webp" alt="Exploración en Wuthering Waves" class="custom-img" />
              </div>
            </div>
          </div>
        </details>
      </div>
    </section>
  </div>
</template>

<script>
import { inicializarTooltips } from '@/utils/tooltips-resonadores.js'
import { inicializarAccordion } from '@/utils/accordion-anim.js'

export default {
  name: 'Iniciantes',
  mounted() {
    inicializarTooltips();
    inicializarAccordion()
  }
}
</script>

<style scoped>
/* Add your sidebar styles here */
</style>