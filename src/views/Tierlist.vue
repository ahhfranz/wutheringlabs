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
          <router-link to="/tierlist" class="menu-link-flex" active-class="active">
            <span>Tier List</span>
            <img src="@/assets/images/categorias/tierlist.webp" alt="Tier List" class="menu-icon-img">
          </router-link>
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
        <router-link to="/">Wuthering Labs</router-link> / <span>Tier List</span>
      </div>
      <div class="guide-header-main">
        <div class="intro-anim">
          <div class="guide-img-wrapper">
            <img src="@/assets/images/categorias/mod1.webp" alt="Tier List de Wuthering Waves"
              class="guide-img default">
            <img src="@/assets/images/categorias/mod2.webp" alt="Tier List de Wuthering Waves" class="guide-img hover">
          </div>
        </div>
        <div class="guide-header-info">
          <h1 class="guide-header-title">Tier List</h1>
          <div class="guide-header-desc">Una Tier List completa de Wuthering Waves que clasifica y evalúa a todos los
            personajes disponibles del juego según su rendimiento general.</div>
          <div class="guide-header-date">última actualización: <b>13/06/2025</b></div>
        </div>
      </div>
    </div>

    <div class="guides-section">
      <div class="guides-title-wrapper tierlist-title-wrapper">
        <h2 class="guides-title">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
            <path d="M160-160v-320h160v320H160Zm240 0v-640h160v640H400Zm240 0v-440h160v440H640Z" />
          </svg>
          WUTHERING WAVES TIER LIST
          <span class="parche-label">PARCHE 2.4</span>
        </h2>
      </div>

      <section class="about-section">
        <p>
          Ten en cuenta que <b>Wuthering Waves</b> es un juego basado en las habilidades de sus personajes, y cada uno
          de ellos tiene un
          <b>estilo de juego
            diferente</b>, un <b>nivel de dificultad distinto</b> e incluso <b>trucos</b> y <b>combos únicos</b>.
        </p>
        <p>
          <b>Wuthering Waves</b> también está basado en <b>composiciones de equipo</b> de <b>3</b> resonadores, y solo
          combinando ambos factores
          al máximo nivel es posible que
          un personaje alcance su rendimiento <b>óptimo</b>.
        </p>
        <p>
          En <b>Wuthering Labs</b>, diseñamos estas <b>tier lists</b> basados en información de diversas <b>fuentes</b>,
          <b>wikis</b>, y la ayuda de varios <b>jugadores</b> y <b>creadores de contenido</b> que compartieron
          con nosotros sus opiniones sobre los personajes y su rendimiento general, tanto en la <b>Torre de la
            Adversidad</b>, como en <b>Olas Clamantes</b>.

          Entre las fuentes más relevantes, se encuentran:
        </p>
        <p class="fuentes-links">
          <a href="https://wutheringwaves.fandom.com/wiki/Wuthering_Waves_Wiki" target="_blank">Wuthering Waves
            Wiki</a> | <a href="https://wuthering.gg/" target="_blank">Wuthering.gg</a> |
          <a href="https://www.prydwen.gg/wuthering-waves/" target="_blank">Prydwen Institute</a> | <a
            href="https://wuwaflex.com/" target="_blank">WUWA Flex</a> | <a href="https://wuthering.gg/"
            target="_blank">Wuthering.gg</a>
        </p>

        <details class="stat-accordion">
          <summary>
            <div class="stat-header">
              <div class="stats-icons">
                <img src="@/assets/images/categorias/invocar.webp">
              </div>
              <span class="stat-title">INFORMACIÓN DE LOS TIER LISTS</span>
            </div>
            <span class="accordion-arrow"></span>
          </summary>
          <div class="stat-content">
            <span class="nowrap">
              <p>Ofrecemos hasta <b>3 Tier Lists</b> separadas entre sí, que evalúan a los personajes según
                <b>diferentes
                  criterios</b> debido a
                la diversidad de <b>características</b> y <b>habilidades</b> que los distintos <b>contenidos del
                  juego</b> requieren para
                superarlos.
                Como resultado, te recomendamos revisar todas las Tier Lists antes de decidir la
                posición definitiva de un personaje en el meta del juego. Pero en resumen, <b>cuanto mejor se
                  desempeñe un personaje en una variedad de
                  modos de juego, más valioso será en general</b>.
              </p>

              <p><strong>NOTA: El orden de los personajes dentro de cada tier no es relevante ni es indicativo de su
                  rendimiento por sobre los demás.</strong></p>
            </span>
            <div class="stat-extra">
              <div class="formula">
                <div class="texto-tierlists">
                  <b>LABS SCORE</b>
                  <p>Diseñamos este <b>Tier List</b> para evaluar y realizar un <b>promedio general de todos los
                      personajes</b>,
                    teniendo cuenta <b>múltiples factores</b> y su <b>rendimiento en los distintos modos de juego</b>.
                    Se <b>promedian</b> las
                    calificaciones en la <b>Torre de la Adversidad</b> y <b>Olas Clamantes</b>, su <b>impacto
                      general</b> en el juego, (<b>Mecánicas</b>, <b>skill
                      ceiling</b>,
                    <b>valor</b> en
                    diferentes composiciones, <b>ventajas</b> para la exploración, etc), así como
                    también su <b>costo y dificultad para buildearlos</b> y que puedan funcionar de manera óptima en el
                    menor
                    tiempo posible.
                  </p>
                  <p>
                    <b>Este Tier List continúa en desarrollo y es posible que pueda sufrir diversos cambios con el paso
                      del tiempo.</b>
                  </p>
                </div>
              </div>
            </div>
            <div class="stat-extra">
              <div class="formula">
                <div class="texto-tierlists">
                  <b>TORRE DE LA ADVERSIDAD</b>
                  <p>Este Tier List evalúa a los personajes según su rendimiento y potencial de combate en uno de los
                    contenidos finales Wuthering Waves, la <b>Torre de la Adversidad</b>.
                  </p>
                  <p>
                    Específicamente, evaluamos el rendimiento dentro de la <b>Zona de Peligro</b>, que se reinicia
                    periódicamente a diferencia de las demás zonas. Es un modo similar al Espiral del Abismo de
                    <em>Genshin
                      Impact</em> o la Memoria del Caos de <em>Honkai Star Rail</em>, y requiere <b>3</b> equipos de
                    <b>3</b>
                    personajes equipados con <b>Ecos fuertes</b> y <b>Armas decentes</b>. El modo ofrece una mezcla
                    razonable de
                    encuentros con <b>jefes</b> (enemigos individuales) y <b>grupos de Élites</b> (2-3 enemigos) junto
                    con algunos
                    escenarios para realizar <b>daño AoE</b> (más de 5 enemigos). Sin embargo, este modo tiene una
                    inclinación
                    obvia hacia el
                    combate individual y al daño <b>single-target</b>, ya que los
                    niveles más desafiantes se centran por sobre todo, en <b>vencer a los jefes</b>.
                  </p>
                </div>
              </div>
            </div>
            <div class="stat-extra">
              <div class="formula">
                <div class="texto-tierlists">
                  <b>OLAS CLAMANTES</b>
                  <p>Este Tier List evalúa a los personajes según su rendimiento y potencial de combate en otro de los
                    contenidos finales Wuthering Waves, las <b>Olas Clamantes</b>.
                  </p>
                  <p>
                    Este modo de juego, de manera similar a Pura ficción de <em>Honkai Star Rail</em>, favorece mucho la
                    capacidad de un personaje para lidiar con
                    varias oleadas de enemigos pequeños con poca salud de maner rápida y eficiente, (<b>Realizando daño
                      en área o AoE</b>). Requiere <b>2</b>
                    equipos de <b>3</b> personajes equipados con <b>Ecos fuertes</b> y <b>Armas decentes</b>. Los
                    personajes que cuentan con <b>habilidades de daño AoE</b> son muy
                    favorecidos por encima de los de personajes con daño <b>single-target</b>.
                  </p>
                  <p>Los personajes en este Tier List, son evaluados según su rendimiento promedio en la etapa
                    final "<b>Torrentes infinitos</b>", donde los jugadores tienen un total de <b>2 minutos</b> para
                    eliminar la mayor
                    cantidad de oleadas de enemigos posible.</p>
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
              <span class="stat-title">CRITERIOS DE EVALUACIÓN</span>
            </div>
            <span class="accordion-arrow"></span>
          </summary>
          <div class="stat-content">
            <div class="stat-extra">
              <div class="formula">
                <div class="texto-tierlists">
                  <p>
                    <b>CRITERIOS</b>
                  </p>
                  <ul>
                    <li>
                      Se asume que todos los personajes se utilizan con su <b>mejor equipo posible de 3 resonadores</b>,
                      jugados
                      con <b>rotaciones óptimas</b> de manera estándar <b>sin errores de ejecución</b>, usando los
                      <b>mejores conjuntos
                        principales
                        de Ecos</b> y <b>valores correctos</b> de Regeneración de energía. Esto significa que la gran
                      mayoría de las
                      rotaciones se ejecutarán de manera simplificada, un personaje a la vez.
                    </li>
                    <li>
                      Todos los personajes usan <b>Ecos de rareza máxima</b> y se considera que todas <b>las
                        estadísticas
                        principales son las mejores posibles</b>, también se considera que cada Eco tiene <b>5
                        sub-estadísticas</b>
                      con porcentajes "<b>promedio</b>".
                    </li>
                    <li>
                      <b>15 sub-estadísticas</b> de los Ecos se designan como "<b>Buenas</b>", es decir, las que el
                      personaje
                      necesita, y
                      las <b>10</b> restantes son <b>aleatorias</b>.
                    </li>
                    <li>
                      Todos los personajes de <span class="star star-5">5★</span> se evalúan en <b>Resonancia 0</b>, a
                      menos
                      que se indique lo contrario, como
                      el Rover (Espectro), que comienza en <b>Resonancia 6</b>. Todos los personajes de <span
                        class="star star-4">4★</span> se evalúan en
                      <b>Resonancia 6</b>.
                    </li>
                    <li>
                      Se evalúa a todos los personajes como si tuvieran acceso a la <b>R1</b> de todas las armas de
                      <span class="star star-4">4★</span> y <b>R5</b> de
                      todas las armas de <b>2★</b> y <b class="star-3-color">3★</b>.
                    </li>
                    <li>
                      En <b>Olas Clamantes</b>, todos los personajes se evalúan como si tuvieran acceso a cualquier
                      <b>Token</b>, (de
                      rareza púrpura). Se utiliza la <b>mejor opción</b> para la evaluación.
                    </li>
                    <li>
                      Se considera que todos los personajes están al <b>nivel máximo posible</b> (<b>90</b>), con todos
                      los <b>Fortes
                        mejorados al rango máximo</b> y con un <b>arma al nivel máximo</b> (<b>90</b>).
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="stat-extra">
              <div class="formula">
                <div class="texto-tierlists">
                  <p>
                    <b>OTROS CRITERIOS</b>
                  </p>
                  <p>
                    Los criterios que se mencionaron en la sección anterior se aplican a todos nuestros Tier Lists; sin
                    embargo, cada Tier List específica <b>evalúa</b> y <b>califica</b> a los personajes según su
                    <b>valor promedio</b> en el
                    <b> modo particular que representa</b>. Por lo tanto, cuanto más alto esté <b>"calificado"</b> un
                    personaje, mayor será su <b>rendimiento</b>, <b>"poder"</b> y <b>utilidad</b> en ese modo,
                    facilitando
                    el acceso a todas las <b>recompensas</b> para los jugadores.
                    No se tiene en consideración alcanzar las puntuaciones más altas ni los tiempos más bajos, solo la
                    capacidad de
                    <b>obtener fácilmente todas las recompensas</b>.
                    Sin embargo, algunos <b>criterios pueden ser específicos</b> para ciertos arquetipos de personajes o
                    para
                    ciertos modos en particular, dependiendo de la Tier List que se consulte. Ejemplo:
                  </p>
                  <ul>
                    <li>
                      En el caso de ciertos <b>SUB-DPS</b>: Tenemos en cuenta su<b> capacidad de rendir eficazmente</b>
                      con
                      <b>niveles bajos de inversión</b> (Si su <b>farmeo de Ecos</b> y <b>estadísticas necesarias</b>
                      son fáciles de
                      obtener, si requiere de las estadísticas proporcionadas por su <b>arma promocional</b>, si no
                      requiere de
                      otros <b>personajes específicos</b> para poder alcanzar su máximo potencial, etc);
                    </li>
                    <li>
                      Todos los personajes usan <b>Ecos de rareza máxima</b> y se considera que todas <b>las
                        estadísticas
                        principales son las mejores posibles</b>, también se considera que cada Eco tiene <b>5
                        sub-estadísticas</b>
                      con porcentajes "<b>promedio</b>".
                    </li>
                    <li>
                      En el caso de los <b>SOPORTES</b> de <b>Curación</b> y <b>Escudos</b>: Cuánta capacidad de
                      <b>curación-sustain/utilidad</b> defensiva aportan al
                      equipo, y cuántos <b>errores mecánicos</b> permiten cometer durante un enfrentamiento.
                    </li>
                    <li>
                      En el caso de los personajes en <b>Olas Clamantes</b>: Tenemos en cuenta su <b>capacidad para
                        agrupar enemigos</b> y su capacidad
                      para lidiar con <b>múltiples oleadas de enemigos</b> de manera rápida y eficiente.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </details>
      </section>

      <details class="stat-accordion">
        <summary>
          <div class="stat-header">
            <div class="stats-icons">
              <img src="@/assets/images/categorias/invocar.webp">
            </div>
            <span class="stat-title">ROLES DE LOS RESONADORES</span>
          </div>
          <span class="accordion-arrow"></span>
        </summary>
        <div class="stat-content">
          <div class="stat-extra">
            <div class="formula">
              <div class="texto-tierlists">
                <div>
                  <div class="role dps"><img src="@/assets/images/categorias/dps.webp" alt="DPS" class="icono-rol">DPS
                  </div>
                </div>
                <p>
                  Los personajes <b>DPS</b> se centran en ser los <b>principales causantes de daño del equipo</b>, y
                  el resto del
                  grupo se construye para <b>sinergizar con ellos y potenciarlos</b>.
                  El objetivo de muchos equipos meta es <b>potenciar a un DPS</b> combinando bonificaciones de
                  conjuntos de
                  <b>Ecos</b>, <b>habilidades del personaje</b> y bonificaciones de <b>Amplificación de Outro</b>.
                  Existen algunas excepciones, ya que ciertos personajes <b>DPS</b> pueden jugarse junto a otros
                  personajes
                  del mismo rol, pero en general buscan <b>ocupar la mayor parte del tiempo en campo</b> de tu equipo,
                  a
                  veces incluso hasta <b>14</b> o <b>15</b> segundos.
                  Este tiempo puede variar según el personaje, pero en todos los casos el objetivo es aprovechar al
                  máximo las <b>mejoras</b> de tus otros <b>2</b> personajes para causar la <b>mayor cantidad de daño
                    en el menor
                    tiempo posible</b>.
                </p>
                <P>
                  Criterios que se evalúan en los <b>DPS</b>:
                </P>
                <ul>
                  <li>
                    La <b>dificultad de rotación</b> del personaje, (La posibilidad de cometer <b>errores</b> o
                    disminución severa
                    del
                    rendimiento si su estilo de juego no se ejecuta de manera óptima).
                  </li>
                  <li>
                    <b>Daño general del personaje</b> mientras se utiliza su <b>mejor equipo</b> posible.
                  </li>
                  <li>
                    <b>Flexibilidad</b> y <b>adaptabilidad</b> del personaje en el enfrentamiento, (¿Le afecta
                    negativamente tener
                    que
                    <b>esquivar</b>? ¿Pueden <b>seguir</b> fácilmente una rotación predefinida? ¿Pueden
                    <b>adaptarse</b> a diferentes
                    mecánicas de los enemigos?).
                  </li>
                  <li>
                    Capacidad del personaje para enfrentarse a distintas situaciones: <b>Daño en área </b>(AoE), o
                    <b>daño a un
                      solo objetivo</b>, (Single-target). Esto tiene un impacto menor en la <b>Torre de la
                      Adversidad</b>, ya
                    que se favorece el daño a <b>un solo objetivo</b>. Pero en <b>Olas Clamantes</b>, se favorece
                    en gran medida el <b>daño en área</b>.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="stat-extra">
            <div class="formula">
              <div class="texto-tierlists">
                <div>
                  <div class="role sub-dps"><img src="@/assets/images/categorias/subdps.webp" alt="SUB-DPS"
                      class="icono-rol">SUB-DPS</div>
                </div>
                <p>
                  Los personajes <b>SUB-DPS</b> apoyan directamente a tu DPS principal, a menudo con kits
                  extremadamente <b>sinérgicos</b>, <b>bonificaciones</b> especiales de <b>Outro</b> como
                  <b>multiplicadores</b> de “<b>Bonif. de
                    daño elemental</b>” u otros <b>efectos beneficiosos</b>, o incluso siendo una excelente fuente de
                  daño
                  secundario.
                  Suelen estar diseñados para completar su rotación justo antes de que tu <b>DPS</b> ejecute su combo
                  de daño
                  completo, ya que en algunos casos sus buffos pueden expirar justo al cambiar de personaje.
                  Los <b>SUB-DPS</b> pueden desempeñar una <b>variedad de roles</b> y ofrecer
                  habilidades <b>ofensivas</b>, de <b>apoyo</b> o de <b>sustento</b>, e incluso <b>las tres al mismo
                    tiempo</b>.
                  Como resultado, cubren la mayor variedad de estilos de juego y funciones.
                  Por lo general, buscan ejecutar sus combos en las ventanas de tiempo más cortas posibles para
                  generar <b>Energía de Concierto</b> y de <b>Resonancia rápidamente</b>, con el fin de activar sus
                  mejoras para tu
                  <b>DPS</b> principal en <b>el menor tiempo posible</b>.
                  Ciertos <b>SUB-DPS</b> pueden ser especialmente valiosos para infligir <b>daño adicional en
                    conjunto con tu DPS principal</b>, pero en cualquier caso, usualmente querrán entrar y salir del
                  enfrentamiento
                  lo antes posible.
                </p>
                <P>
                  Criterios que se evalúan en los <b>SUB-DPS</b>:
                </P>
                <ul>
                  <li>
                    La <b>dificultad de rotación</b> del personaje, (La posibilidad de cometer <b>errores</b> o
                    disminución severa
                    del
                    rendimiento si su estilo de juego no se ejecuta de manera óptima).
                  </li>
                  <li>
                    <b>Rendimiento del personaje</b> dentro de su <b>mejor equipo</b> posible;
                  </li>
                  <li>
                    Cantidad de <b>equipos viables</b> en los que el personaje <b>puede desempeñarse</b> eficazmente;
                  </li>
                  <li>
                    <b>Impacto de su kit de habilidades</b> en el rendimiento del equipo (Personajes que son capaces
                    de <b>elevar la clasificación de otros personajes</b> y/o equipos gracias a su presencia);
                  </li>
                  <li>
                    <b>Flexibilidad</b> y <b>adaptabilidad</b> del personaje en el enfrentamiento, (¿Le afecta
                    negativamente tener que <b>esquivar</b>? ¿Pueden <b>seguir</b> fácilmente una rotación
                    predefinida? ¿Pueden
                    <b>adaptarse</b> a diferentes
                    mecánicas de los enemigos?).
                  </li>
                  <li>
                    <b>Contribución</b> efectiva del daño del personaje posterior a <b>buffear a sus compañeros</b> de
                    equipo.
                  </li>
                  <li>
                    <b>Tiempo total</b> necesario en el enfrentamiento para poder ejecutar su <b>rotación
                      completa</b>.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="stat-extra">
            <div class="formula">
              <div class="texto-tierlists">
                <div>
                  <div class="role support"><img src="@/assets/images/categorias/support.webp" alt="SOPORTE"
                      class="icono-rol">SOPORTE</div>
                </div>
                <p>
                  Los personajes <b>SOPORTE</b> deben ser capaces de <b>aportar buffos</b>, (<b>Beneficios</b>), al
                  equipo sin importar el orden en
                  que sean intercambiados, para no interferir con la mayoría de las <b>bonificaciones de Outro</b> de
                  los
                  <b> SUB-DPS</b>, que tienden a beneficiar únicamente al siguiente personaje que entra al campo.
                  Su utilidad principal es <b>proporcionar mejoras a todo el equipo</b>, aunque también suelen ser
                  valiosos
                  por ofrecer <b>capacidades defensivas</b> y de <b>curación</b>; todo esto en <b>el menor tiempo
                    posible</b>
                  en el enfrentamiento, ya que normalmente <b>no son responsables de colaborar</b> en gran medida con
                  el <b>daño general</b> del equipo,
                  permitiendo así <b>maximizar el potencial</b> de tus personajes <b>DPS</b> y <b>SUB-DPS</b>.
                </p>
                <P>
                  Criterios que se evalúan en los <b>SOPORTES</b>:
                </P>
                <ul>
                  <li>
                    La <b>dificultad de rotación</b> del personaje, (La posibilidad de cometer <b>errores</b> o
                    disminución severa
                    del
                    rendimiento si su estilo de juego no se ejecuta de manera óptima).
                  </li>
                  <li>
                    <b>Rendimiento del personaje</b> dentro de su <b>mejor equipo</b> posible;
                  </li>
                  <li>
                    Cantidad de <b>equipos viables</b> en los que el personaje <b>puede desempeñarse</b> eficazmente;
                  </li>
                  <li>
                    <b>Impacto de su kit de habilidades</b> en el rendimiento del equipo (Personajes que son capaces
                    de <b>elevar la clasificación de otros personajes</b> y/o equipos gracias a su presencia);
                  </li>
                  <li>
                    <b>Flexibilidad</b> y <b>adaptabilidad</b> del personaje en el enfrentamiento, (¿Le afecta
                    negativamente tener que <b>esquivar</b>? ¿Pueden <b>seguir</b> fácilmente una rotación
                    predefinida? ¿Pueden
                    <b>adaptarse</b> a diferentes
                    mecánicas de los enemigos?).
                  </li>
                  <li>
                    <b>Contribución</b> efectiva del daño del personaje posterior a <b>buffear a sus compañeros</b> de
                    equipo.
                  </li>
                  <li>
                    <b>Tiempo total</b> necesario en el enfrentamiento para poder ejecutar su <b>rotación
                      completa</b>.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </details>

      <div class="about-section">

        <!-- Menu de modos -->

        <div class="menu-imagenes">
          <div class="menu-img-item" :class="{ activo: selectedTierList === 'labs' }" data-tipo="labs"
            @click="selectedTierList = 'labs'">
            <img src="@/assets/images/labscorefondo.webp" alt="Labs score" />
            <span class="menu-titulo">LABS SCORE</span>
          </div>
          <div class="menu-img-item" :class="{ activo: selectedTierList === 'torre' }" data-tipo="torre"
            @click="selectedTierList = 'torre'">
            <img src="@/assets/images/torrefondo.webp" alt="Torre de la adversidad" />
            <span class="menu-titulo">TORRE DE LA ADVERSIDAD</span>
          </div>
          <div class="menu-img-item" :class="{ activo: selectedTierList === 'olas' }" data-tipo="olas"
            @click="selectedTierList = 'olas'">
            <img src="@/assets/images/olasfondo.webp" alt="Olas clamantes" />
            <span class="menu-titulo">OLAS CLAMANTES</span>
          </div>
        </div>

        <!-- Filtros -->

        <div class="filters-bar">
          <div class="filters-group search-group">
            <input type="text" class="filter-search" placeholder="Buscar personaje..." v-model="filtroBusqueda">
          </div>

          <div class="filters-group stars">
            <button class="filter-btn" :class="{ active: filtroRareza === '*' }" title="Todos"
              @click="filtroRareza = '*'"><i class="bi bi-asterisk"></i></button>
            <button class="filter-btn" :class="{ active: filtroRareza === '4' }" title="Rareza 4 estrellas"
              @click="filtroRareza = '4'">4★</button>
            <button class="filter-btn" :class="{ active: filtroRareza === '5' }" title="Rareza 5 estrellas"
              @click="filtroRareza = '5'">5★</button>
          </div>

          <div class="filters-group elements">
            <button class="filter-btn" :class="{ active: filtroElemento === '*' }" title="Todos"
              @click="filtroElemento = '*'"><i class="bi bi-asterisk"></i></button>
            <button class="filter-btn" :class="{ active: filtroElemento === 'espectro' }" title="Espectro"
              @click="filtroElemento = 'espectro'">
              <img src="@/assets/images/elementos/icon_espectro.webp" alt="Espectro" />
            </button>
            <button class="filter-btn" :class="{ active: filtroElemento === 'aero' }" title="Aero"
              @click="filtroElemento = 'aero'">
              <img src="@/assets/images/elementos/icon_aero.webp" alt="Aero" />
            </button>
            <button class="filter-btn" :class="{ active: filtroElemento === 'destrucción' }" title="Destrucción"
              @click="filtroElemento = 'destrucción'">
              <img src="@/assets/images/elementos/icon_havoc.webp" alt="Destrucción" />
            </button>
            <button class="filter-btn" :class="{ active: filtroElemento === 'fusion' }" title="Fusion"
              @click="filtroElemento = 'fusion'">
              <img src="@/assets/images/elementos/icon_fusion.webp" alt="Fusion" />
            </button>
            <button class="filter-btn" :class="{ active: filtroElemento === 'gelio' }" title="Gelio"
              @click="filtroElemento = 'gelio'">
              <img src="@/assets/images/elementos/icon_gelio.webp" alt="Gelio" />
            </button>
            <button class="filter-btn" :class="{ active: filtroElemento === 'electro' }" title="Electro"
              @click="filtroElemento = 'electro'">
              <img src="@/assets/images/elementos/icon_electro.webp" alt="Electro" />
            </button>
          </div>

          <div class="filters-group weapons">
            <button class="filter-btn" :class="{ active: filtroArma === '*' }" title="Todos"
              @click="filtroArma = '*'"><i class="bi bi-asterisk"></i></button>
            <button class="filter-btn" :class="{ active: filtroArma === 'espada' }" title="Espada"
              @click="filtroArma = 'espada'">
              <img src="@/assets/images/tipos-armas/weapon_espada.webp" alt="Espada" />
            </button>
            <button class="filter-btn" :class="{ active: filtroArma === 'mandoble' }" title="Mandoble"
              @click="filtroArma = 'mandoble'">
              <img src="@/assets/images/tipos-armas/weapon_mandoble.webp" alt="Mandoble" />
            </button>
            <button class="filter-btn" :class="{ active: filtroArma === 'brazales' }" title="Brazales"
              @click="filtroArma = 'brazales'">
              <img src="@/assets/images/tipos-armas/weapon_brazales.webp" alt="Brazales" />
            </button>
            <button class="filter-btn" :class="{ active: filtroArma === 'pistolas' }" title="Pistolas"
              @click="filtroArma = 'pistolas'">
              <img src="@/assets/images/tipos-armas/weapon_pistolas.webp" alt="Pistolas" />
            </button>
            <button class="filter-btn" :class="{ active: filtroArma === 'rectificador' }" title="Rectificador"
              @click="filtroArma = 'rectificador'">
              <img src="@/assets/images/tipos-armas/weapon_rectificador.webp" alt="Rectificador" />
            </button>
          </div>

          <button class="filter-reset-btn" @click="resetFiltros">✖ QUITAR FILTROS</button>
        </div>

        <!-- TIER LIST -->

        <div class="tierlist-container" id="tierlist-container">
          <div class="tierlist-roles">
            <div class="role dps"><img src="@/assets/images/categorias/dps.webp" alt="DPS" class="icono-rol">DPS</div>
            <div class="role sub-dps"><img src="@/assets/images/categorias/subdps.webp" alt="SUB-DPS"
                class="icono-rol">SUB-DPS</div>
            <div class="role support"><img src="@/assets/images/categorias/support.webp" alt="SOPORTE"
                class="icono-rol">SOPORTE</div>
          </div>

          <div v-for="tier in ['S+', 'S', 'A+', 'A', 'B', 'C']" :key="tier" class="tier-section">
            <div class="tierlist-row" :data-tier="tier">
              <div :class="['tier-label',
                tier === 'S+' ? 't0' :
                  tier === 'S' ? 't0-5' :
                    tier === 'A+' ? 't1' :
                      tier === 'A' ? 't1-5' :
                        tier === 'B' ? 't2' :
                          tier === 'C' ? 't2-5' : ''
              ]">{{ tier }}</div>

              <!-- DPS -->

              <div class="tier-col">
                <div class="role-mobile dps">
                  <img src="@/assets/images/categorias/dps.webp" alt="DPS" class="icono-rol">DPS
                </div>

                <div v-for="({ personaje, role }, idx) in getRolesByTypeFiltered(tier, 'dps')"
                  :key="personaje.nombre + '-dps-' + idx" :class="['resonadores-' + personaje.elemento]"
                  :data-rarezas="personaje.rareza" :data-elemento="personaje.elemento" :data-arma="personaje.arma"
                  :data-labs-rank-dps="role.tierLabs" :data-torre-rank-dps="role.tierTorre"
                  :data-olas-rank-dps="role.tierOlas" :data-role="role.rol">
                  <router-link :to="`/personaje/${personaje.nombre}`" class="character-card-link"
                    style="text-decoration: none;">
                    <span :class="'elemento-' + personaje.elemento">
                      <img :src="personaje.iconoElemento" :alt="personaje.elemento">
                    </span>
                    <div style="position: relative; width: 100px; height: 100px;">
                      <span v-if="personaje.nombre === 'Cartethyia'" class="new-badge"
                        style="top: -5px; right: -8px;">NUEVA</span>
                      <div :class="'imagen-personaje-' + personaje.rareza">
                        <img :src="personaje.avatar" :alt="personaje.nombre">
                      </div>
                    </div>
                  </router-link>
                  <div class="contenido-del-tooltip">
                    <img :class="'resonadores-avatar-' + personaje.rareza" :src="personaje.avatar"
                      :alt="personaje.nombre">
                    <div class="resonadores-nombre">{{ personaje.nombre }}</div>
                    <div class="resonadores-tags">
                      <span class="tag tag-rarezas">{{ personaje.rareza }}★</span>
                      <span :class="'tag tag-tipo-' + personaje.elemento">
                        <img :src="personaje.iconoElemento" :alt="personaje.elemento" class="tag-iconos">
                        {{personaje.tags.find(t => t.tipo === 'elemento').valor}}
                      </span>
                      <span class="tag tag-armas">
                        <img :src="personaje.tags.find(t => t.tipo === 'arma').icono" :alt="personaje.arma"
                          class="tag-iconos">
                        {{ personaje.arma.charAt(0).toUpperCase() + personaje.arma.slice(1) }}
                      </span>
                    </div>
                    <div class="tiers-role dps">
                      <img src="@/assets/images/categorias/dps.webp" alt="DPS" class="icono-rol">DPS
                    </div>
                    <div class="resonadores-tiers">
                      <div class="tier-grupos">
                        <div :class="['tier-box', tierClass(role.tierTorre)]">
                          <div class="tiers-label">{{ role.tierTorre }}</div>
                        </div>
                        <div class="tiers-desc">Torre de la adversidad</div>
                      </div>
                      <div class="tier-grupos">
                        <div :class="['tier-box', tierClass(role.tierOlas)]">
                          <div class="tiers-label">{{ role.tierOlas }}</div>
                        </div>
                        <div class="tiers-desc">Olas Clamantes</div>
                      </div>
                    </div>
                    <div class="tier-grupos labs-score-label">
                      <div :class="['tier-box-labs', role.labsScoreTier]">
                        <div class="tiers-label">{{ role.tierLabs }}</div>
                      </div>
                      <div class="tiers-desc labs-score-desc"><i class="bi bi-sort-up"></i> Labs Score</div>
                    </div>
                    <div class="tooltip-arrow"></div>
                  </div>
                </div>
              </div>

              <!-- SUB-DPS -->

              <div class="tier-col">
                <div class="role-mobile sub-dps">
                  <img src="@/assets/images/categorias/subdps.webp" alt="SUB-DPS" class="icono-rol">SUB-DPS
                </div>
                <div v-for="({ personaje, role }, idx) in getRolesByTypeFiltered(tier, 'subdps')"
                  :key="personaje.nombre + '-subdps-' + idx" :class="['resonadores-' + personaje.elemento]"
                  :data-rarezas="personaje.rareza" :data-elemento="personaje.elemento" :data-arma="personaje.arma"
                  :data-labs-rank-dps="role.tierLabs" :data-torre-rank-dps="role.tierTorre"
                  :data-olas-rank-dps="role.tierOlas" :data-role="role.rol">
                  <router-link :to="`/personaje/${personaje.nombre}`" class="character-card-link"
                    style="text-decoration: none;">
                    <span :class="'elemento-' + personaje.elemento">
                      <img :src="personaje.iconoElemento" :alt="personaje.elemento">
                    </span>
                    <div :class="'imagen-personaje-' + personaje.rareza">
                      <img :src="personaje.avatar" :alt="personaje.nombre">
                    </div>
                  </router-link>
                  <div class="contenido-del-tooltip">
                    <img :class="'resonadores-avatar-' + personaje.rareza" :src="personaje.avatar"
                      :alt="personaje.nombre">
                    <div class="resonadores-nombre">{{ personaje.nombre }}</div>
                    <div class="resonadores-tags">
                      <span class="tag tag-rarezas">{{ personaje.rareza }}★</span>
                      <span :class="'tag tag-tipo-' + personaje.elemento">
                        <img :src="personaje.iconoElemento" :alt="personaje.elemento" class="tag-iconos">
                        {{personaje.tags.find(t => t.tipo === 'elemento').valor}}
                      </span>
                      <span class="tag tag-armas">
                        <img :src="personaje.tags.find(t => t.tipo === 'arma').icono" :alt="personaje.arma"
                          class="tag-iconos">
                        {{ personaje.arma.charAt(0).toUpperCase() + personaje.arma.slice(1) }}
                      </span>
                    </div>
                    <div class="tiers-role sub-dps">
                      <img src="@/assets/images/categorias/subdps.webp" alt="SUB-DPS" class="icono-rol">SUB-DPS
                    </div>
                    <div class="resonadores-tiers">
                      <div class="tier-grupos">
                        <div :class="['tier-box', tierClass(role.tierTorre)]">
                          <div class="tiers-label">{{ role.tierTorre }}</div>
                        </div>
                        <div class="tiers-desc">Torre de la adversidad</div>
                      </div>
                      <div class="tier-grupos">
                        <div :class="['tier-box', tierClass(role.tierOlas)]">
                          <div class="tiers-label">{{ role.tierOlas }}</div>
                        </div>
                        <div class="tiers-desc">Olas Clamantes</div>
                      </div>
                    </div>
                    <div class="tier-grupos labs-score-label">
                      <div :class="['tier-box-labs', role.labsScoreTier]">
                        <div class="tiers-label">{{ role.tierLabs }}</div>
                      </div>
                      <div class="tiers-desc labs-score-desc"><i class="bi bi-sort-up"></i> Labs Score</div>
                    </div>
                    <div class="tooltip-arrow"></div>
                  </div>
                </div>
              </div>

              <!-- SOPORTE -->

              <div class="tier-col">
                <div class="role-mobile support">
                  <img src="@/assets/images/categorias/support.webp" alt="SOPORTE" class="icono-rol">SOPORTE
                </div>
                <div v-for="({ personaje, role }, idx) in getRolesByTypeFiltered(tier, 'support')"
                  :key="personaje.nombre + '-support-' + idx" :class="['resonadores-' + personaje.elemento]"
                  :data-rarezas="personaje.rareza" :data-elemento="personaje.elemento" :data-arma="personaje.arma"
                  :data-labs-rank-dps="role.tierLabs" :data-torre-rank-dps="role.tierTorre"
                  :data-olas-rank-dps="role.tierOlas" :data-role="role.rol">
                  <router-link :to="`/personaje/${personaje.nombre}`" class="character-card-link"
                    style="text-decoration: none;">
                    <span :class="'elemento-' + personaje.elemento">
                      <img :src="personaje.iconoElemento" :alt="personaje.elemento">
                    </span>
                    <div :class="'imagen-personaje-' + personaje.rareza">
                      <img :src="personaje.avatar" :alt="personaje.nombre">
                    </div>
                  </router-link>
                  <div class="contenido-del-tooltip">
                    <img :class="'resonadores-avatar-' + personaje.rareza" :src="personaje.avatar"
                      :alt="personaje.nombre">
                    <div class="resonadores-nombre">{{ personaje.nombre }}</div>
                    <div class="resonadores-tags">
                      <span class="tag tag-rarezas">{{ personaje.rareza }}★</span>
                      <span :class="'tag tag-tipo-' + personaje.elemento">
                        <img :src="personaje.iconoElemento" :alt="personaje.elemento" class="tag-iconos">
                        {{personaje.tags.find(t => t.tipo === 'elemento').valor}}
                      </span>
                      <span class="tag tag-armas">
                        <img :src="personaje.tags.find(t => t.tipo === 'arma').icono" :alt="personaje.arma"
                          class="tag-iconos">
                        {{ personaje.arma.charAt(0).toUpperCase() + personaje.arma.slice(1) }}
                      </span>
                    </div>
                    <div class="tiers-role support">
                      <img src="@/assets/images/categorias/support.webp" alt="SOPORTE" class="icono-rol">SOPORTE
                    </div>
                    <div class="resonadores-tiers">
                      <div class="tier-grupos">
                        <div :class="['tier-box', tierClass(role.tierTorre)]">
                          <div class="tiers-label">{{ role.tierTorre }}</div>
                        </div>
                        <div class="tiers-desc">Torre de la adversidad</div>
                      </div>
                      <div class="tier-grupos">
                        <div :class="['tier-box', tierClass(role.tierOlas)]">
                          <div class="tiers-label">{{ role.tierOlas }}</div>
                        </div>
                        <div class="tiers-desc">Olas Clamantes</div>
                      </div>
                    </div>
                    <div class="tier-grupos labs-score-label">
                      <div :class="['tier-box-labs', role.labsScoreTier]">
                        <div class="tiers-label">{{ role.tierLabs }}</div>
                      </div>
                      <div class="tiers-desc labs-score-desc"><i class="bi bi-sort-up"></i> Labs Score</div>
                    </div>
                    <div class="tooltip-arrow"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>








<script setup>
import { ref, nextTick, watch, onMounted } from 'vue'
import { inicializarAccordion } from '@/utils/accordion-anim.js'
import { inicializarTooltips } from '@/utils/tooltips-resonadores.js'
import tierlist from '@/utils/tierlist.js'

const selectedTierList = ref('labs')
const filtroRareza = ref('*')
const filtroElemento = ref('*')
const filtroArma = ref('*')
const filtroBusqueda = ref('')

function resetFiltros() {
  filtroRareza.value = '*'
  filtroElemento.value = '*'
  filtroArma.value = '*'
  filtroBusqueda.value = ''
}

function getTierValue(personaje) {
  if (selectedTierList.value === 'labs') return personaje.tierLabs
  if (selectedTierList.value === 'torre') return personaje.tierTorre
  if (selectedTierList.value === 'olas') return personaje.tierOlas
  return personaje.tierLabs
}

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

function getRolesByTypeFiltered(tier, rol) {
  return tierlist.flatMap(personaje => {
    const matchRareza = filtroRareza.value === '*' || personaje.rareza == filtroRareza.value
    const matchElemento = filtroElemento.value === '*' || personaje.elemento === filtroElemento.value
    const matchArma = filtroArma.value === '*' || personaje.arma === filtroArma.value
    const matchBusqueda = !filtroBusqueda.value || personaje.nombre.toLowerCase().includes(filtroBusqueda.value.toLowerCase())
    if (!(matchRareza && matchElemento && matchArma && matchBusqueda)) return []
    if (Array.isArray(personaje.roles)) {
      return personaje.roles
        .filter(role => role.rol === rol && getTierValue(role) === tier)
        .map(role => ({ personaje, role }))
    } else if (personaje.rol === rol && getTierValue(personaje) === tier) {
      return [{ personaje, role: personaje }]
    }
    return []
  })
}

onMounted(() => {
  nextTick(() => {
    inicializarTooltips()
    inicializarAccordion()
  })
})

watch(
  [selectedTierList, filtroRareza, filtroElemento, filtroArma, filtroBusqueda],
  () => {
    nextTick(() => {
      inicializarTooltips()
    })
  }
)
</script>