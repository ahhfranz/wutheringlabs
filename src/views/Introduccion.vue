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
        <router-link to="/">Wuthering Labs</router-link> / <span>Introducción al juego</span>
      </div>
      <div class="guide-header-main">
        <div class="intro-anim">
          <div class="guide-img-wrapper">
            <img src="@/assets/images/categorias/compass.webp" alt="Introducción a Wuthering Waves"
              class="guide-img default">
            <img src="@/assets/images/categorias/compass2.webp" alt="Introducción a Wuthering Waves"
              class="guide-img hover">
          </div>
        </div>
        <div class="guide-header-info">
          <h1 class="guide-header-title">Introducción al juego</h1>
          <div class="guide-header-desc">Introducción para iniciantes.</div>
          <div class="guide-header-date">última actualización: <b>08/06/2025</b></div>
        </div>
      </div>
    </div>

    <!-- GUÍAS -->
    <div class="guides-section">
      <h2 class="guides-title"> <ion-icon name="book-outline"></ion-icon> ACERCA DEL JUEGO</h2>

      <section class="about-section">
        <h2 class="about-title"></h2>
        <p>
          <b>Wuthering Waves</b> es un videojuego que apuesta por la exploración en un mundo abierto, combinado con
          una narrativa profunda y variada, y un sistema de combate dinámico y flexible. Los jugadores toman el rol de
          los
          Rovers, quienes despiertan tras un largo letargo y se embarcan en un viaje a través de un vasto mundo
          marcado por una nueva era, entornos desconocidos y tecnología avanzada.
        </p>
        <p>
          Desarrollado por <b>Kuro Games</b>, el estudio responsable de Punishing: Gray Raven, este título traslada su
          aclamado sistema de combate de acción RPG al formato de mundo abierto, con una experiencia que recuerda al
          estilo de
          Genshin Impact, pero con su propia identidad, mecánicas y enfoque más centrado en la acción.
        </p>
        <p>Obtén más información sobre el juego en nuestra:</p>

        <div class="guides-grid">
          <a href="../pages/iniciantes.html" class="guide-link">
            <div class="guide-card">
              <div class="guide-img-wrapper">
                <img src="@/assets/images/categorias/diaryclosed.webp" alt="Introducción a Wuthering Waves"
                  class="guide-img default">
                <img src="@/assets/images/categorias/diaryopen.webp" alt="Introducción a Wuthering Waves"
                  class="guide-img hover">
              </div>
              <div class="guide-content">
                <div class="guide-title">Guía para iniciantes</div>
                <span class="guide-arrow">&#8594;</span>
              </div>
            </div>
          </a>
        </div>
      </section>

      <h2 class="guides-title"> <ion-icon name="desktop-outline"></ion-icon> REQUISITOS DEL SISTEMA</h2>
      <section class="about-section">
        <h2 class="about-title">
        </h2>
        <p>
          <b>Wuthering Waves</b> está actualmente disponible en <b>PC</b>, <b>PS5</b> y dispositivos móbiles
          <b>Android</b> / <b>iOS</b>.
        </p>
      </section>

      <div class="system-reqs-grid">
        <div class="system-reqs-box">
          <h3>PC - REQUISITOS MÍNIMOS</h3>
          <ul>
            <li>
              <span class="label">Versión de sistema operativo</span><br>
              Windows 10 de 64 bits o Windows 11 de 64 bits
            </li>
            <li>
              <span class="label">Procesador</span><br>
              Intel i5 (9.ª generación), Ryzen 2700
            </li>
            <li>
              <span class="label">Memoria</span><br>
              16 GB
            </li>
            <li>
              <span class="label">GPU</span><br>
              GTX 1060 / RX 570 / intel ARC A380
            </li>
            <li>
              <span class="label">Almacenamiento</span><br>
              30 GB
            </li>
          </ul>
        </div>
        <div class="system-reqs-box">
          <h3>PC - REQUISITOS RECOMENDADOS</h3>
          <ul>
            <li>
              <span class="label">Versión de sistema operativo</span><br>
              Windows 10 de 64 bits o Windows 11 de 64 bits
            </li>
            <li>
              <span class="label">Procesador</span><br>
              Intel i7 (9.ª generación), Ryzen 3700
            </li>
            <li>
              <span class="label">Memoria</span><br>
              16 GB o más
            </li>
            <li>
              <span class="label">GPU</span><br>
              GTX 2060 / RX 5700XT / intel ARC A750 and Above
            </li>
            <li>
              <span class="label">Almacenamiento</span><br>
              30 GB o más
            </li>
          </ul>
        </div>
      </div>

      <h2 class="guides-title"> <ion-icon name="game-controller-outline"></ion-icon> GAMEPLAY</h2>
      <section class="about-section">
        <h2 class="about-title">
        </h2>

        <div class="youtube-video-container">
          <iframe width="100%" height="400" src="https://www.youtube.com/embed/qUqxxqrIRMw" title="YouTube video player"
            frameborder="0" allowfullscreen></iframe>
        </div>

        <div class="guides-section">
          <h2 class="guides-title"> <ion-icon name="link-outline"></ion-icon> LINKS OFICIALES</h2>
          <div class="guides-grid">

            <a href="https://wutheringwaves.kurogames.com/es/" target="_blank" class="guide-link">
              <div class="guide-card">
                <div class="guide-img-wrapper">
                  <img src="@/assets/images/categorias/wuwalogo.webp" alt="" class="guide-img default">
                  <img src="@/assets/images/categorias/wuwalogo.webp" alt="" class="guide-img hover">
                </div>
                <div class="guide-content">
                  <div class="guide-title">Sitio web oficial</div>
                  <span class="guide-arrow">&#8594;</span>
                </div>
              </div>
            </a>

            <a href="https://www.youtube.com/@WutheringWaves" target="_blank" class="guide-link">
              <div class="guide-card">
                <div class="guide-img-wrapper">
                  <img src="@/assets/images/categorias/youtubelogo.webp" alt="" class="guide-img default">
                  <img src="@/assets/images/categorias/youtubelogo.webp" alt="" class="guide-img hover">
                </div>
                <div class="guide-content">
                  <div class="guide-title">YouTube</div>
                  <span class="guide-arrow">&#8594;</span>
                </div>
              </div>
            </a>

            <a href="https://discord.com/invite/wutheringwaves" target="_blank" class="guide-link">
              <div class="guide-card">
                <div class="guide-img-wrapper">
                  <img src="@/assets/images/categorias/discordlogo.webp" alt="" class="guide-img default">
                  <img src="@/assets/images/categorias/discordlogo.webp" alt="" class="guide-img hover">
                </div>
                <div class="guide-content">
                  <div class="guide-title">Discord</div>
                  <span class="guide-arrow">&#8594;</span>
                </div>
              </div>
            </a>

            <a href="https://x.com/Wuthering_Waves" target="_blank" class="guide-link">
              <div class="guide-card">
                <div class="guide-img-wrapper">
                  <img src="@/assets/images/categorias/xlogo.webp" alt="" class="guide-img default">
                  <img src="@/assets/images/categorias/xlogo.webp" alt="" class="guide-img hover">
                </div>
                <div class="guide-content">
                  <div class="guide-title">X</div>
                  <span class="guide-arrow">&#8594;</span>
                </div>
              </div>
            </a>

            <a href="https://play.google.com/store/apps/details?id=com.kurogame.wutheringwaves.global" target="_blank"
              class="guide-link">
              <div class="guide-card">
                <div class="guide-img-wrapper">
                  <img src="@/assets/images/categorias/playstorelogo.webp" alt="" class="guide-img default">
                  <img src="@/assets/images/categorias/playstorelogo.webp" alt="" class="guide-img hover">
                </div>
                <div class="guide-content">
                  <div class="guide-title">Play Store</div>
                  <span class="guide-arrow">&#8594;</span>
                </div>
              </div>
            </a>

            <a href="https://apps.apple.com/us/app/wuthering-waves-1st-anniv/id6475033368" target="_blank"
              class="guide-link">
              <div class="guide-card">
                <div class="guide-img-wrapper">
                  <img src="@/assets/images/categorias/applestorelogo.webp" alt="" class="guide-img default">
                  <img src="@/assets/images/categorias/applestorelogo.webp" alt="" class="guide-img hover">
                </div>
                <div class="guide-content">
                  <div class="guide-title">Apple Store</div>
                  <span class="guide-arrow">&#8594;</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
