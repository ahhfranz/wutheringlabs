<template>
    <div>
        <div class="presentacion">
            <img src="@/assets/images/logo.webp" alt="Logo Wuthering Labs" class="presentacion-logo">
            <p>
                Una wiki dedicada a la comunidad hispanohablante de <strong>Wuthering Waves</strong>. Puedes encontrar
                guías,
                herramientas, modificaciones, novedades e información sobre los personajes y el universo del juego.
            </p>
        </div>

        <div class="guides-section">
            <h2 class="guides-title">
                <img class="iconos-de-inicio" src="@/assets/images/categorias/inicio.webp" alt="Inicio"> INICIO
            </h2>
            <div class="guides-grid">
                <router-link to="/introduccion" class="guide-link">
                    <div class="guide-card">
                        <div class="guide-img-wrapper">
                            <img src="@/assets/images/categorias/compass.webp" alt="Introducción a Wuthering Waves"
                                class="guide-img default">
                            <img src="@/assets/images/categorias/compass2.webp" alt="Introducción a Wuthering Waves"
                                class="guide-img hover">
                        </div>
                        <div class="guide-content">
                            <div class="guide-title">Introducción al juego</div>
                            <span class="guide-arrow">&#8594;</span>
                        </div>
                    </div>
                </router-link>

                <router-link to="/iniciantes" class="guide-link">
                    <div class="guide-card">
                        <div class="guide-img-wrapper">
                            <img src="@/assets/images/categorias/diaryclosed.webp" alt="Guia de Wuthering Waves"
                                class="guide-img default">
                            <img src="@/assets/images/categorias/diaryopen.webp" alt="Guia de Wuthering Waves"
                                class="guide-img hover">
                        </div>
                        <div class="guide-content">
                            <div class="guide-title">Guía para iniciantes</div>
                            <span class="guide-arrow">&#8594;</span>
                        </div>
                    </div>
                </router-link>

                <router-link to="/gacha" class="guide-link">
                    <div class="guide-card">
                        <div class="guide-img-wrapper">
                            <img src="@/assets/images/categorias/lustroustide.webp"
                                alt="Como funciona el gacha en Wuthering Waves" class="guide-img default">
                            <img src="@/assets/images/categorias/radianttide.webp"
                                alt="Como funciona el gacha en Wuthering Waves" class="guide-img hover">
                        </div>
                        <div class="guide-content">
                            <div class="guide-title">Guía del gacha</div>
                            <span class="guide-arrow">&#8594;</span>
                        </div>
                    </div>
                </router-link>

                <router-link to="/tierlist" class="guide-link">
                    <div class="guide-card">
                        <div class="guide-img-wrapper">
                            <img src="@/assets/images/categorias/mod1.webp" alt="Tier List de Wuthering Waves"
                                class="guide-img default">
                            <img src="@/assets/images/categorias/mod2.webp" alt="Tier List de Wuthering Waves"
                                class="guide-img hover">
                        </div>
                        <div class="guide-content">
                            <div class="guide-title">Tier list</div>
                            <span class="guide-arrow">&#8594;</span>
                        </div>
                    </div>
                </router-link>

                <router-link to="/resonadores" class="guide-link">
                    <div class="guide-card">
                        <div class="guide-img-wrapper">
                            <img src="@/assets/images/categorias/wave-sanhua.webp" alt="Personajes de Wuthering Waves"
                                class="guide-img default">
                            <img src="@/assets/images/categorias/wave-jinhsi.webp" alt="Personajes de Wuthering Waves"
                                class="guide-img hover">
                        </div>
                        <div class="guide-content">
                            <div class="guide-title">Resonadores</div>
                            <span class="guide-arrow">&#8594;</span>
                        </div>
                    </div>
                </router-link>

                <router-link to="/armas" class="guide-link">
                    <div class="guide-card">
                        <div class="guide-img-wrapper">
                            <img src="@/assets/images/armas/stellarsymphony.webp" alt="Armas de Wuthering Waves"
                                class="guide-img default">
                            <img src="@/assets/images/armas/luminoushymn.webp" alt="Armas de Wuthering Waves"
                                class="guide-img hover">
                        </div>
                        <div class="guide-content">
                            <div class="guide-title">Armas</div>
                            <span class="guide-arrow">&#8594;</span>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>

        <h2 class="guides-title">
            <img class="iconos-de-inicio" src="@/assets/images/categorias/inicio.webp" alt="Herramientas"> HERRAMIENTAS
        </h2>
        <div class="guides-grid">
            <a href="https://www.ghzs666.com/wutheringwaves-map#/" target="_blank" class="guide-link">
                <div class="guide-card">
                    <div class="guide-img-wrapper">
                        <img src="@/assets/images/categorias/mapclosed.webp" alt="Mapa de Wuthering Waves"
                            class="guide-img default">
                        <img src="@/assets/images/categorias/firstmap.webp" alt="Mapa de Wuthering Waves"
                            class="guide-img hover">
                    </div>
                    <div class="guide-content">
                        <div class="guide-title">Mapa interactivo</div>
                        <span class="guide-arrow">&#8594;</span>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>
