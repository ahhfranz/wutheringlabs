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
      </div>
    </nav>

    <!-- Encabezado de la guía -->

    <div class="guide-header">
      <div class="guide-breadcrumbs">
        <router-link to="/">Wuthering Labs</router-link> / <span>Guía del gacha</span>
      </div>
      <div class="guide-header-main">
        <div class="intro-anim">
          <div class="guide-img-wrapper">
            <img src="@/assets/images/categorias/lustroustide.webp"
              alt="Introducción al sistema gacha de Wuthering Waves" class="guide-img default">
            <img src="@/assets/images/categorias/radianttide.webp"
              alt="Introducción al sistema gacha de Wuthering Waves" class="guide-img hover">
          </div>
        </div>
        <div class="guide-header-info">
          <h1 class="guide-header-title">Guía del gacha</h1>
          <div class="guide-header-desc">Una guía para comprender el funcionamiento del sistema gacha de Wuthering
            Waves.</div>
          <div class="guide-header-date">última actualización: <b>08/06/2025</b></div>
        </div>
      </div>
    </div>

    <!-- GUÍAS -->

    <div class="guides-section">
      <h2 class="guides-title"> <ion-icon name="dice-outline"></ion-icon> SISTEMA GACHA</h2>

      <section class="about-section">
        <p>
          El sistema gacha de <b>Wuthering Waves</b> funciona como un sistema de "<b>tiradas</b>" o
          "<b>invocaciones</b>" similar al de otros
          juegos gacha, donde los jugadores <b>utilizan una moneda especial del juego para obtener personajes</b> y
          <b>armas exclusivas</b> para ellos.
        </p>

        <details class="stat-accordion">
          <summary>
            <div class="stat-header">
              <div class="stats-icons">
                <img src="@/assets/images/categorias/invocar.webp">
              </div>
              <span class="stat-title">INVOCACIÓN</span>
            </div>
            <span class="accordion-arrow"></span>
          </summary>
          <div class="stat-content">
            <span class="nowrap">
              El sistema gacha en <b>Wuthering Waves</b> funciona como una
              <b>lotería</b> que permite a los jugadores obtener <b>nuevos personajes y armas</b>. Este sistema se
              presenta dentro del
              juego bajo el nombre de "<b>Invocación</b>", y es accesible desde el
              menú principal una vez que el jugador ha avanzado lo suficiente en la historia inicial. Como en otros
              juegos gacha, la experiencia se basa en el <b>azar</b>, pero existen <b>mecanismos que equilibran las
                probabilidades</b>
              para asegurar que los jugadores eventualmente consigan recompensas valiosas, incluso si no tienen suerte
              al principio.
            </span>
            <div class="stat-extra">
              <div class="formula">
                Para realizar tiradas en los banners, necesitarás usar <b>Astritas</b> (la moneda del gacha) o
                <b>Marea
                  Radiante</b>
                (Una suerte de boletos que funcionan de la misma manera que las Astritas).

                Tanto las <b>Astritas</b> y <b>Mareas Radiantes</b> pueden obtenerse de diversas formas dentro del
                juego, como <b>misiones</b>, <b>eventos</b> y
                ciertas <b>tiendas</b>.
              </div>
              <div class="gacha-info-list">
                <ul>
                  <li>Puedes intercambiar <b>160 Astritas</b> por 1 <span class="star-3-color">Marea
                      Brillante</span>, 1 <span class="star-5-color">Marea Radiante</span> o 1 <span
                      class="star-5-color">Marea de Forja</span>.</li>
                  <li>Las <span class="star-3-color">Mareas Brillantes</span> se usan en el banner de Novato,
                    Permanente de Personaje y Permanente de Arma.</li>
                  <li>Las <span class="star-5-color">Mareas Radiantes</span> se usan en el banner de Evento de
                    Resonador destacado.</li>
                  <li>Las <span class="star-5-color">Mareas de Forja</span> se usan en el banner de Evento de Armas.
                  </li>
                </ul>
                <p>Puedes obtener lo siguiente al invocar:</p>
                <ul class="gacha-rewards">
                  <li><span class="star star-3">3★</span> Armas</li>
                  <li><span class="star star-4">4★</span> Armas</li>
                  <li><span class="star star-5">5★</span> Armas</li>
                  <li><span class="star star-4">4★</span> Resonadores</li>
                  <li><span class="star star-5">5★</span> Resonadores</li>
                </ul>
                <p class="gacha-note">
                  Las estrellas indican la rareza del Resonador y las Armas. A mayor número de estrellas, mayor rareza
                  (y
                  dificultad de obtener).
                </p>
                <div class="gacha-guarantee-4">
                  <b>Garantía 4★:</b> Si no obtienes un Resonador o Arma <span class="star star-4">4★</span> tras
                  <b>9</b>
                  invocaciones, la tirada <b>10</b> está garantizada como <span class="star star-4">4★</span>. El
                  contador se
                  reinicia cada vez que obtienes un <span class="star star-4">4★</span>.
                </div>
                <div class="gacha-guarantee-5">
                  <b>Garantía 5★:</b> Si no obtienes un Resonador o Arma <span class="star star-5">5★</span> tras
                  <b>79</b>
                  invocaciones, la tirada <b>80</b> está garantizada como <span class="star star-5">5★</span>. El
                  contador se
                  reinicia cada vez que obtienes un <span class="star star-5">5★</span>.
                </div>
              </div>
            </div>
          </div>
        </details>

        <div class="guides-section">
          <h2 class="guides-title"> <ion-icon name="medical-outline"></ion-icon> CORALES</h2>

          <section class="about-section">
            <p>
              Los <span class="star-3-color">Corales oscilados</span> y los <span class="star-5-color">Corales
                postbrillantes</span> son <b>monedas del juego</b> que <b>solo se pueden obtener
                mediante invocaciones</b>. Pueden usarse en sus respectivas <b>tiendas de intercambio</b> para comprar
              <b>Mareas</b>, <b>Bandas
                de Olas</b>, <b>materiales</b> de mejora y otros recursos.
            </p>

            <details class="stat-accordion">
              <summary>
                <div class="stat-header">
                  <div class="stats-icons">
                    <img src="@/assets/images/categorias/coraloscilado.webp">
                  </div>
                  <span class="stat-title">CORAL OSCILADO</span>
                </div>
                <span class="accordion-arrow"></span>
              </summary>
              <div class="stat-content">
                <div class="stat-extra">
                  <div class="formula">
                    Puedes obtener <span class="star-3-color">Corales Oscilados</span> al conseguir un arma de <span
                      class="star star-3">3★</span> mediante invocaciones. Cada arma de <span
                      class="star star-3">3★</span>
                    te dará <b>15</b> <span class="star-3-color">Corales Oscilados</span>.
                  </div>
                </div>
              </div>
            </details>

            <details class="stat-accordion">
              <summary>
                <div class="stat-header">
                  <div class="stats-icons">
                    <img src="@/assets/images/categorias/coralpostbrillante.webp">
                  </div>
                  <span class="stat-title">CORAL POSTBRILLANTE</span>
                </div>
                <span class="accordion-arrow"></span>
              </summary>
              <div class="stat-content">
                <div class="stat-extra">
                  <div class="formula">
                    Puedes obtener <span class="star-5-color">Corales Postbrillantes</span> mediante invocaciones, de
                    las siguientes maneras:
                  </div>
                  <ul>
                    <li>
                      Al obtener cualquier arma <span class="star star-4">4★</span>:
                      <ul>
                        <li><b>3</b> <span class="star-5-color">Corales Postbrillantes</span></li>
                      </ul>
                    </li>
                    <li>
                      Al obtener cualquier arma <span class="star star-5">5★</span>:
                      <ul>
                        <li><b>15</b> <span class="star-5-color">Corales Postbrillantes</span></li>
                      </ul>
                    </li>
                    <li>
                      Al obtener un duplicado de Resonador <span class="star star-4">4★</span>:
                      <ul>
                        <li>Del <b>1º</b> al <b>6º</b> duplicado: <b>3</b> <span class="star-5-color">Corales
                            Postbrillantes</span> y <b>1</b> <span class="star-5-color">Banda de onda</span> de ese
                          Resonador</li>
                        <li>Del <b>7º</b> duplicado en adelante: <b>8</b> <span class="star-5-color">Corales
                            Postbrillantes</span></li>
                        <li><span class="gacha-note"><b>No</b> recibirás <span class="star-5-color">Corales
                              Postbrillantes</span> si obtienes un Resonador <span class="star star-4">4★</span> que
                            no
                            tenías antes.</span></li>
                      </ul>
                    </li>
                    <li>
                      Al obtener un duplicado de Resonador <span class="star star-5">5★</span>:
                      <ul>
                        <li>Del <b>1º</b> al <b>6º</b> duplicado: <b>15</b> <span class="star-5-color">Corales
                            Postbrillantes</span> y <b>1</b> <span class="star-5-color">Banda de onda</span> de ese
                          Resonador</li>
                        <li>Del <b>7º</b> duplicado en adelante: <b>40</b> <span class="star-5-color">Corales
                            Postbrillantes</span></li>
                        <li><span class="gacha-note"><b>No</b> recibirás <span class="star-5-color">Corales
                              Postbrillantes</span> si obtienes un Resonador <span class="star star-5">5★</span> que
                            no
                            tenías antes.</span></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </details>

            <div class="guides-section">
              <h2 class="guides-title"> <ion-icon name="person-circle-outline"></ion-icon>BANDAS DE ONDA</h2>

              <section class="about-section">
                <p>
                  Las <span class="star-5-color">Banda de onda</span> son objetos clave que se utilizan para <b>subir
                    el
                    nivel de resonancia</b> de los
                  Resonadores. Cada resonador tiene hasta <b>6</b> <span class="star-5-color">Banda de onda</span> y
                  pueden adquirirse <b>un máximo de 2</b> (Por
                  resonador), utilizando <span class="star-5-color">Corales
                    Postbrillantes</span>.
                </p>

                <details class="stat-accordion">
                  <summary>
                    <div class="stat-header">
                      <div class="stats-icons">
                        <img src="@/assets/images/categorias/wave-cantarella.webp">
                      </div>
                      <span class="stat-title">CANJE DE BANDAS DE ONDA</span>
                    </div>
                    <span class="accordion-arrow"></span>
                  </summary>
                  <div class="stat-content">
                    <div class="stat-extra">
                      <div class="formula">
                        <ul>
                          <li>Es posible canjear <b>270</b> <span class="star-5-color">Corales
                              Postbrillantes</span> por una <span class="star-5-color">Banda de onda</span> de un
                            resonador
                            específico.
                            Cada <span class="star-5-color">Banda de onda</span>
                            adquirida aumenta el nivel de resonancia del Resonador en <b>1</b>, hasta un máximo de
                            <b>6</b>.
                          </li>
                          <li>El costo de las <span class="star-5-color">Bandas de onda</span> de un resonador que se
                            encuentre <b>activo</b> en el evento actual,
                            es de <b>360</b> <span class="star-5-color">Corales
                              Postbrillantes</span>.</li>
                        </ul>
                      </div>
                      <div class="custom-img-container">
                        <img src="@/assets/images/capturas/7.webp" alt="Canje de bandas de onda" class="custom-img" />
                      </div>
                    </div>
                  </div>
                </details>

                <div class="guides-section">
                  <h2 class="guides-title"> <ion-icon name="contract-outline"></ion-icon>BANNERS DE INVOCACIÓN</h2>

                  <section class="about-section">
                    <p>
                      Los <b>Banners de invocación</b> son sistemas de <b>gacha</b>, una mecánica que permite a los
                      jugadores gastar una
                      moneda del juego para <b>obtener personajes</b> y <b>armas</b> de manera <b>aleatoria</b>. En
                      Wuthering Waves, esto se
                      conoce como "<b>Invocación</b>", y cada banner tiene <b>su propio contenido</b>, <b>reglas</b> y
                      <b>probabilidades</b>.
                    </p>

                    <details class="stat-accordion">
                      <summary>
                        <div class="stat-header">
                          <div class="stats-icons">
                            <img src="@/assets/images/categorias/invocar.webp">
                          </div>
                          <span class="stat-title">BANNER DE INVOCACIÓN DE NOVATO</span>
                        </div>
                        <span class="accordion-arrow"></span>
                      </summary>
                      <div class="stat-content">
                        <div class="stat-extra">
                          <div class="formula">
                            <ul>
                              <li>
                                Solo puedes invocar <b>50 veces</b> en el banner de Novato, pero tienes garantizado
                                obtener un Resonador <span class="star star-5">5★</span> dentro de esas <b>50</b>
                                invocaciones.
                              </li>
                              <li>
                                No puedes hacer invocaciones individuales en el banner de Novato. Solo puedes invocar
                                en
                                múltiplos de <b>10</b> (comúnmente llamado "<b>multis</b>"). Sin embargo, recibirás un
                                <b class="discount">20% de descuento</b> cada vez que hagas una multi, por lo
                                que solo costará <b>8</b> <b class="star-3-color">Mareas Brillantes</b> en vez de
                                <b>10</b>.
                              </li>
                              <li>
                                La probabilidad de obtener un Resonador <span class="star star-5">5★</span> en este
                                banner es de <b>0.8%</b>.
                              </li>
                              <li>
                                La probabilidad de obtener un Resonador o Arma <span class="star star-4">4★</span> en
                                este banner es de <b>6.0%</b>.
                              </li>
                              <li>
                                <b>No</b> hay Resonadores ni Armas con tasa aumentada en este banner.
                              </li>
                              <li>
                                Una vez que obtengas un personaje <span class="star star-5">5★</span>, el banner
                                <b>desaparecerá</b> permanentemente.
                              </li>
                              <li>
                                Solo puedes usar <b class="star-3-color">Mareas Brillantes</b> en este banner (el
                                ticket
                                básico de invocación).
                              </li>
                            </ul>
                          </div>
                          <div class="custom-img-container">
                            <img src="@/assets/images/capturas/8.webp" alt="Banner de novato" class="custom-img" />
                          </div>
                          <p>Puedes obtener solo uno de los siguientes Resonadores <span class="star star-5">5★</span>
                            del banner de Novato:</p>

                          <div class="tier-col">

                            <div class="resonadores-espectro" data-rarezas="5" data-elemento="espectro"
                              data-arma="rectificador" data-labs-rank-support="S+" data-torre-rank-support="S+"
                              data-olas-rank-support="S+" data-role="support">
                              <span class="elemento-espectro">
                                <img src="@/assets/images/elementos/icon_espectro.webp" alt="espectro">
                              </span>
                              <div class="imagen-personaje-5">
                                <img src="@/assets/images/personajes/icon_verina.webp" alt="Verina">
                              </div>
                              <div class="contenido-del-tooltip">
                                <img class="resonadores-avatar-5" src="@/assets/images/personajes/icon_verina.webp"
                                  alt="Verina">
                                <div class="resonadores-nombre">Verina</div>
                                <div class="resonadores-tags">
                                  <span class="tag tag-rarezas">5★</span>
                                  <span class="tag tag-tipo-espectro">
                                    <img src="@/assets/images/elementos/icon_espectro.webp" alt="Espectro"
                                      class="tag-iconos">
                                    Espectro
                                  </span>
                                  <span class="tag tag-armas">
                                    <img src="@/assets/images/tipos-armas/weapon_rectificador.webp" alt="Rectificador"
                                      class="tag-iconos">
                                    Rectificador
                                  </span>
                                </div>
                                <div class="tiers-role support"><img src="@/assets/images/categorias/support.webp"
                                    alt="SUPPORT" class="icono-rol"> SOPORTE
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
                                  <div class="tiers-desc labs-score-desc"> <i class="bi bi-sort-up"></i> Labs Score
                                  </div>
                                </div>
                                <div class="tooltip-arrow"></div>
                              </div>
                            </div>

                            <div class="resonadores-fusion" data-rarezas="5" data-elemento="fusion"
                              data-arma="rectificador" data-labs-rank-dps="A+" data-torre-rank-dps="A+"
                              data-olas-rank-dps="A" data-role="dps">
                              <span class="elemento-fusion">
                                <img src="@/assets/images/elementos/icon_fusion.webp" alt="fusion">
                              </span>
                              <div class="imagen-personaje-5">
                                <img src="@/assets/images/personajes/icon_encore.webp" alt="Encore">
                              </div>
                              <div class="contenido-del-tooltip">
                                <img class="resonadores-avatar-5" src="@/assets/images/personajes/icon_encore.webp"
                                  alt="Encore">
                                <div class="resonadores-nombre">Encore</div>
                                <div class="resonadores-tags">
                                  <span class="tag tag-rarezas">5★</span>
                                  <span class="tag tag-tipo-fusion">
                                    <img src="@/assets/images/elementos/icon_fusion.webp" alt="Fusion"
                                      class="tag-iconos">
                                    Fusion
                                  </span>
                                  <span class="tag tag-armas">
                                    <img src="@/assets/images/tipos-armas/weapon_rectificador.webp" alt="Rectificador"
                                      class="tag-iconos">
                                    Rectificador
                                  </span>
                                </div>
                                <div class="tiers-role dps"><img src="@/assets/images/categorias/dps.webp" alt="DPS"
                                    class="icono-rol"> DPS
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
                                  <div class="tiers-desc labs-score-desc"> <i class="bi bi-sort-up"></i> Labs Score
                                  </div>
                                </div>
                                <div class="tooltip-arrow"></div>
                              </div>
                            </div>

                            <div class="resonadores-aero" data-rarezas="5" data-elemento="aero" data-arma="brazales"
                              data-labs-rank-hybrid="B" data-torre-rank-hybrid="C" data-olas-rank-hybrid="B"
                              data-role="hybrid">
                              <span class="elemento-aero">
                                <img src="@/assets/images/elementos/icon_aero.webp" alt="aero">
                              </span>
                              <div class="imagen-personaje-5">
                                <img src="@/assets/images/personajes/icon_jianxin.webp" alt="Jianxin">
                              </div>
                              <div class="contenido-del-tooltip">
                                <img class="resonadores-avatar-5" src="@/assets/images/personajes/icon_jianxin.webp"
                                  alt="Jianxin">
                                <div class="resonadores-nombre">Jianxin</div>
                                <div class="resonadores-tags">
                                  <span class="tag tag-rarezas">5★</span>
                                  <span class="tag tag-tipo-aero">
                                    <img src="@/assets/images/elementos/icon_aero.webp" alt="Aero" class="tag-iconos">
                                    Aero
                                  </span>
                                  <span class="tag tag-armas">
                                    <img src="@/assets/images/tipos-armas/weapon_brazales.webp" alt="Brazales"
                                      class="tag-iconos">
                                    Brazales
                                  </span>
                                </div>
                                <div class="tiers-role sub-dps"><img src="@/assets/images/categorias/subdps.webp"
                                    alt="SUB-DPS" class="icono-rol"> SUB-DPS
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
                                  <div class="tiers-desc labs-score-desc"> <i class="bi bi-sort-up"></i> Labs Score
                                  </div>
                                </div>
                                <div class="tooltip-arrow"></div>
                              </div>
                            </div>

                            <div class="resonadores-gelio" data-rarezas="5" data-elemento="gelio" data-arma="brazales"
                              data-labs-rank-dps="C" data-torre-rank-dps="C" data-olas-rank-dps="C" data-role="dps">
                              <span class="elemento-gelio">
                                <img src="@/assets/images/elementos/icon_gelio.webp" alt="gelio">
                              </span>
                              <div class="imagen-personaje-5">
                                <img src="@/assets/images/personajes/icon_ling.webp" alt="Lingyang">
                              </div>
                              <div class="contenido-del-tooltip">
                                <img class="resonadores-avatar-5" src="@/assets/images/personajes/icon_ling.webp"
                                  alt="Lingyang">
                                <div class="resonadores-nombre">Lingyang</div>
                                <div class="resonadores-tags">
                                  <span class="tag tag-rarezas">5★</span>
                                  <span class="tag tag-tipo-gelio">
                                    <img src="@/assets/images/elementos/icon_gelio.webp" alt="Destrucción"
                                      class="tag-iconos">
                                    Gelio
                                  </span>
                                  <span class="tag tag-armas">
                                    <img src="@/assets/images/tipos-armas/weapon_brazales.webp" alt="Brazales"
                                      class="tag-iconos">
                                    Brazales
                                  </span>
                                </div>
                                <div class="tiers-role dps"><img src="@/assets/images/categorias/dps.webp" alt="DPS"
                                    class="icono-rol"> DPS
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
                                  <div class="tiers-desc labs-score-desc"> <i class="bi bi-sort-up"></i> Labs Score
                                  </div>
                                </div>
                                <div class="tooltip-arrow"></div>
                              </div>
                            </div>

                            <div class="resonadores-electro" data-rarezas="5" data-elemento="electro"
                              data-arma="mandoble" data-labs-rank-dps="B" data-torre-rank-dps="B" data-olas-rank-dps="C"
                              data-role="dps">
                              <span class="elemento-electro">
                                <img src="@/assets/images/elementos/icon_electro.webp" alt="Electro">
                              </span>
                              <div class="imagen-personaje-5">
                                <img src="@/assets/images/personajes/icon_calcharo.webp" alt="Calcharo">
                              </div>
                              <div class="contenido-del-tooltip">
                                <img class="resonadores-avatar-5" src="@/assets/images/personajes/icon_calcharo.webp"
                                  alt="Calcharo">
                                <div class="resonadores-nombre">Calcharo</div>
                                <div class="resonadores-tags">
                                  <span class="tag tag-rarezas">5★</span>
                                  <span class="tag tag-tipo-electro">
                                    <img src="@/assets/images/elementos/icon_electro.webp" alt="Electro"
                                      class="tag-iconos">
                                    Electro
                                  </span>
                                  <span class="tag tag-armas">
                                    <img src="@/assets/images/tipos-armas/weapon_mandoble.webp" alt="Mandoble"
                                      class="tag-iconos">
                                    Mandoble
                                  </span>
                                </div>
                                <div class="tiers-role dps"><img src="@/assets/images/categorias/dps.webp" alt="DPS"
                                    class="icono-rol"> DPS
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
                                  <div class="tiers-desc labs-score-desc"> <i class="bi bi-sort-up"></i> Labs Score
                                  </div>
                                </div>
                                <div class="tooltip-arrow"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </details>

                    <details class="stat-accordion">

                      <summary>
                        <div class="stat-header">
                          <div class="stats-icons">
                            <img src="@/assets/images/categorias/invocar.webp">
                          </div>
                          <span class="stat-title">BANNER DE INVOCACIÓN DE ARMAS PERMANENTE</span>
                        </div>
                        <span class="accordion-arrow"></span>
                      </summary>

                      <div class="stat-content">
                        <div class="stat-extra">
                          <div class="formula">
                            <ul>
                              <li>
                                El arma de <span class="star star-5">5★</span> que selecciones de este banner
                                será la
                                que obtendrás y estará <b>garantizada</b>,
                                hay un arma de cada <b>tipo</b>.
                              </li>
                              <li>
                                Se te garantiza obtener el arma de <span class="star star-5">5★</span>
                                seleccionada en
                                la invocación número <b>80</b>, y el
                                sistema de “<b>pity</b>” no se comparte con las invocaciones de eventos de
                                armas.
                              </li>
                              <li>
                                La probabilidad de obtener un arma de <span class="star star-5">5★</span> en
                                este banner
                                es de <b>0.8%</b>.
                              </li>
                              <li>
                                La probabilidad de obtener un Resonador o Arma <span class="star star-4">4★</span> en
                                este banner es de <b>6.0%</b>.
                              </li>
                              <li>
                                Solo puedes usar <b class="star-3-color">Mareas Brillantes</b> en este banner
                                (el ticket
                                básico de invocación).
                              </li>
                            </ul>
                          </div>

                          <div class="custom-img-container">
                            <img src="@/assets/images/capturas/9.webp" alt="Banner de armas" class="custom-img" />
                          </div>
                          <p>Puedes obtener cualquiera de las siguientes armas de <span class="star star-5">5★</span>
                            del banner de armas:</p>
                        </div>
                      </div>
                    </details>


                    <details class="stat-accordion">

                      <summary>
                        <div class="stat-header">
                          <div class="stats-icons">
                            <img src="@/assets/images/categorias/invocar.webp">
                          </div>
                          <span class="stat-title">BANNER DE INVOCACIÓN DE RESONADORES DESTACADA</span>
                        </div>
                        <span class="accordion-arrow"></span>
                      </summary>

                      <div class="stat-content">
                        <div class="stat-extra">
                          <div class="formula">
                            <ul>
                              <li>
                                Un Resonador de <span class="star star-5">5★</span> y tres Resonadores de
                                <span class="star star-4">4★</span> estarán <b>destacados</b> en cada Evento
                                de Invocación
                                de Resonadores destacada.
                              </li>
                              <li>
                                La probabilidad de obtener un Resonador de <span class="star star-5">5★</span>
                                en estos
                                banners es del <b>0.8%</b>.
                              </li>
                              <li>
                                La probabilidad de obtener un Resonador o Arma de <span class="star star-4">4★</span>
                                en
                                estos banners es del <b>6%</b>.
                              </li>
                              <li>
                                Una vez que obtienes un Resonador de <span class="star star-5">5★</span>,
                                tienes un
                                <b>50%</b> de probabilidad de que sea el destacado.
                              </li>
                              <li>
                                Si pierdes ese 50/50, el segundo Resonador de <span class="star star-5">5★</span> que
                                obtengas será <b>garantizado</b> el destacado.
                              </li>
                              <li>
                                Se te garantiza obtener un <span class="star star-5">5★</span> dentro de
                                <b>80</b>
                                invocaciones (esto es el sistema de “pity”). Así que, si tienes mala suerte,
                                te tomará
                                como máximo <b>160</b> invocaciones conseguir el Resonador destacado.
                              </li>
                              <li>
                                Solo puedes usar <span class="star-5-color">Marea Radiante</span> en este
                                banner.
                              </li>
                            </ul>
                          </div>
                          <div class="custom-img-container">
                            <img src="@/assets/images/capturas/10.webp" alt="Canje de bandas de onda"
                              class="custom-img" />
                          </div>
                        </div>
                      </div>

                    </details>


                    <details class="stat-accordion">

                      <summary>
                        <div class="stat-header">
                          <div class="stats-icons">
                            <img src="@/assets/images/categorias/invocar.webp">
                          </div>
                          <span class="stat-title">BANNER DE INVOCACIÓN DE ARMAS DESTACADA</span>
                        </div>
                        <span class="accordion-arrow"></span>
                      </summary>

                      <div class="stat-content">
                        <div class="stat-extra">
                          <div class="formula">
                            <ul>
                              <li>
                                Un Arma de <span class="star star-5">5★</span> y tres Armas de <span
                                  class="star star-4">4★</span> estarán <b>destacados</b> en cada Evento de
                                Invocación
                                de Resonadores destacada.
                              </li>
                              <li>
                                La probabilidad de obtener un Arma de <span class="star star-5">5★</span> en
                                estos
                                banners es del <b>0.8%</b>.
                              </li>
                              <li>
                                La probabilidad de obtener un Resonador o Arma de <span class="star star-4">4★</span>
                                en
                                estos banners es del <b>6%</b>.
                              </li>
                              <li>
                                Una vez que obtienes un Arma de <span class="star star-5">5★</span>, tienes un
                                <b>50%</b> de probabilidad de que sea el destacado.
                              </li>
                              <li>
                                Si pierdes ese 50/50, la segunda Arma de <span class="star star-5">5★</span>
                                que
                                obtengas será <b>garantizada</b> la destacada.
                              </li>
                              <li>
                                Se te garantiza obtener un <span class="star star-5">5★</span> dentro de
                                <b>80</b>
                                invocaciones (esto es el sistema de “pity”). Así que, si tienes mala suerte,
                                te
                                tomará
                                como máximo <b>160</b> invocaciones conseguir el Arma destacada.
                              </li>
                              <li>
                                Solo puedes usar <span class="star-5-color">Marea de forja</span> en este
                                banner.
                              </li>
                            </ul>
                          </div>
                          <div class="custom-img-container">
                            <img src="@/assets/images/capturas/11.webp" alt="Canje de bandas de onda"
                              class="custom-img" />
                          </div>
                        </div>
                      </div>
                    </details>


                  </section>
                </div>
              </section>
            </div>
          </section>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { inicializarTooltips } from '@/utils/tooltips-resonadores.js'
import { inicializarAccordion } from '@/utils/accordion-anim.js'

export default {
  name: 'Gacha',
  mounted() {
    inicializarTooltips();
    inicializarAccordion()
  }
}
</script>

<style scoped>
/* Add your sidebar styles here */
</style>