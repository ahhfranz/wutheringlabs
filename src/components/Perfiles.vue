<template>
    <div class="guide-header">
        <div class="guide-breadcrumbs">
            <router-link to="/">Wuthering Labs</router-link> / <router-link to="/resonadores">Resonadores</router-link>
            / <span>{{ personaje ? personaje.nombre : '...' }}</span>
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
                <h1 class="guide-header-title">{{ personaje ? personaje.nombre : 'Resonador' }}</h1>
                <div class="guide-header-date">última actualización: <b>23/06/2025</b></div>
            </div>
        </div>
    </div>


    <div v-if="personaje" class="perfil-main">
        <div class="perfil-header">
            <div class="perfil-img-col">
                <div class="perfil-img-bg">
                    <img class="perfil-imagen" :src="personaje.imagenPerfil || personaje.imagen"
                        :alt="personaje.nombre" />
                </div>
            </div>
            <div class="perfil-info-col">
                <div class="perfil-nombre-row">
                    <h1 class="perfil-nombre">
                        {{ personaje.nombre }}
                        <span class="perfil-rareza">{{ personaje.rareza }}★</span>
                    </h1>
                    <div class="perfil-subtitulo">Aalto</div>
                </div>
                <div class="perfil-tags-row">
                    <span class="perfil-tag">
                        <img v-if="personaje.tags.find(t => t.tipo === 'arma')"
                            :src="personaje.tags.find(t => t.tipo === 'arma').icono" alt="Arma" class="tag-iconos" />
                        {{ personaje.arma.charAt(0).toUpperCase() + personaje.arma.slice(1) }}
                    </span>
                    <span class="perfil-tag perfil-tag-elemento">
                        <img :src="personaje.iconoElemento" :alt="personaje.elemento" class="tag-iconos" />
                        {{ personaje.elemento.charAt(0).toUpperCase() + personaje.elemento.slice(1) }}
                    </span>
                </div>
                <div class="perfil-nivel-row">
                    <span>Nivel</span>
                    <div class="perfil-nivel-bar">
                        <div class="perfil-nivel-bar-fill" :style="{ width: '100%' }"></div>
                    </div>
                    <span class="perfil-nivel-num">90</span>
                </div>
                <div class="perfil-mats-title">
                    <b>Materiales de ascensión</b> - Nivel máximo: 90
                </div>
                <div class="perfil-mats-row">
                    <div class="perfil-mat" v-for="mat in mats" :key="mat.name">
                        <div class="perfil-mat-qty">{{ mat.qty }}</div>
                        <img :src="mat.img" :alt="mat.name" class="perfil-mat-img" />
                        <div class="perfil-mat-name">{{ mat.name }}</div>
                    </div>
                </div>
                <div class="perfil-stats-box">
                    <div class="perfil-stat-row" v-for="stat in stats" :key="stat.label">
                        <img class="perfil-stat-icon-img" :src="stat.icon" :alt="stat.label" />
                        <span class="perfil-stat-label">{{ stat.label }}</span>
                        <span class="perfil-stat-value">{{ stat.value }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="perfil-intro-section">
            <h3>Introducción</h3>
            <div class="perfil-intro-box">
                <span class="perfil-intro-highlight">{{ personaje.nombre }}</span>
                es un personaje de
                <span class="perfil-intro-rareza-4">{{ personaje.rareza }}★</span> del elemento
                <span class="perfil-intro-elemento">{{ personaje.elemento.charAt(0).toUpperCase() +
                    personaje.elemento.slice(1) }}</span>
                que utiliza
                <span class="perfil-intro-arma">{{ personaje.arma.charAt(0).toUpperCase() + personaje.arma.slice(1)
                }}</span>
                como arma.<br>
                <span class="perfil-intro-desc">
                    Es un enigmático Corredor de Información, conocido por su naturaleza esquiva y su sonrisa
                    acogedora. Se rumorea que proporcionará cualquier información al precio correcto.
                </span>
            </div>
        </div>

    </div>
    <div v-else>
        <p>Personaje no encontrado.</p>
    </div>
</template>

<script>
import resonadores from '@/utils/resonadores.js';

export default {
    data() {
        return {
            personaje: null,
        };
    },
    computed: {
        mats() {
            return this.personaje?.mats || [
                { qty: 16, img: require('@/assets/images/materiales/roaringrockfist.webp'), name: 'Puño de Roca Rugiente' },
                { qty: 20, img: require('@/assets/images/materiales/wintrybell.webp'), name: 'Campana invernal' },
                { qty: 4, img: require('@/assets/images/materiales/ffhowlercore.webp'), name: 'Núcleo de aullido premium' },
                { qty: '80000', img: require('@/assets/images/materiales/shellcredit.webp'), name: 'Moneda Caparazón' },
            ];
        },
        stats() {
            return this.personaje?.stats || [
                { label: 'PS', value: '9850', icon: require('@/assets/images/stats/ps.webp') },
                { label: 'ATQ', value: '262', icon: require('@/assets/images/stats/atq.webp') },
                { label: 'DEF', value: '1075', icon: require('@/assets/images/stats/def.webp') },
                { label: 'Prob. CRIT', value: '5%', icon: require('@/assets/images/stats/critrate.webp') },
                { label: 'Daño CRIT', value: '150%', icon: require('@/assets/images/stats/critdamage.webp') },
                { label: 'Regen. de energía', value: '100%', icon: require('@/assets/images/stats/energyre.webp') },
            ];
        }
    },
    created() {
        const nombre = this.$route.params.nombre;
        this.personaje = resonadores.find(p => p.nombre === nombre);
    },
};
</script>

<style scoped>
.perfil-main {
    max-width: 1200px;
    margin: 0;
    padding: 0 20px 60px 0;
    color: #fff;
}

.perfil-header {
    display: flex;
    gap: 40px;
    align-items: flex-start;
    border-radius: 32px;
    padding: 32px 32px 32px 32px;
    margin-bottom: 32px;
    position: relative;
}

.perfil-img-col {
    flex: 1 1 340px;
    display: flex;
    justify-content: center;
}

.perfil-img-bg {
    padding: 32px 32px 0 32px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    min-width: 340px;
    min-height: 440px;

}

.perfil-imagen {
    max-width: 600px;
    width: 400px;
    height: 552px;
    border-radius: 14px;
    box-shadow: none;
}

.perfil-info-col {
    flex: 2 1 500px;
    display: flex;
    flex-direction: column;
    gap: 18px;
}

.perfil-nombre-row {
    margin-bottom: 8px;
}

.perfil-nombre {
    font-size: 2.2rem;
    font-weight: 800;
    color: #a44ce7;
    margin-bottom: 0;
    letter-spacing: 1px;
    text-shadow: 0 2px 8px #000a;
    display: flex;
    align-items: center;
    gap: 12px;
}

.perfil-rareza {
    font-size: 1.2rem;
    font-weight: 700;
    color: #fff;
    background: #a44ce7;
    border-radius: 8px;
    padding: 2px 10px;
    margin-left: 8px;
}

.perfil-subtitulo {
    font-size: 1.1rem;
    color: #b0b3c1;
    margin-top: 2px;
}

.perfil-tags-row {
    display: flex;
    gap: 12px;
    margin-bottom: 8px;
    position: absolute;
    top: 30px;
    right: -150px;
    z-index: 10;
}

.perfil-tag {
    display: flex;
    align-items: center;
    gap: 6px;
    background: #23243a;
    border-radius: 16px;
    padding: 4px 16px;
    font-size: 1rem;
    font-weight: 600;
    color: #fff;
    border: 2px solid #35365a;
}

.perfil-tag-fecha {
    background: #2d2330;
    color: #ff6b81;
    border-color: #ff6b81;
}

.perfil-tag-elemento {
    background: #1e2d2f;
    color: #6ee7b7;
    border-color: #6ee7b7;
}

.tag-iconos {
    width: 20px;
    height: 20px;
}

.perfil-nivel-row {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 8px;
}

.perfil-nivel-bar {
    flex: 1;
    height: 8px;
    background: #35365a;
    border-radius: 8px;
    overflow: hidden;
    position: relative;
}

.perfil-nivel-bar-fill {
    height: 100%;
    background: linear-gradient(90deg, #a44ce7 0%, #6ee7b7 100%);
    border-radius: 8px;
}

.perfil-nivel-num {
    font-weight: bold;
    font-size: 1.1em;
}

.perfil-mats-title {
    font-size: 1em;
    color: #fff;
}

.perfil-mats-row {
    display: flex;
    gap: 18px;
}

.perfil-mat {
    background: #23243a;
    border-radius: 5px;
    text-align: center;
    min-width: 90px;
    box-shadow: 0 2px 8px #0002;
    width: 190px;
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    ;
}

.perfil-mat-qty {
    background-color: #262933;
    border: 1px solid #171920;
    border-radius: 5px;
    color: #a44ce7;
    font-size: 20px;
    font-weight: 700;
    transform: translate(0, -50%);
}

.perfil-mat-img {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
}

.perfil-mat-name {
    font-size: 13px;
    font-weight: 600;
    width: 100%;
}

.perfil-stats-box {
    background: #23233a;
    border-radius: 18px;
    padding: 12px 10px;
    margin-top: 8px;
    box-shadow: 0 2px 8px #0002;
    display: flex;
    flex-direction: column;
    gap: 0;
    width: 100%;
    max-width: none;
}

.perfil-stat-row {
    display: flex;
    align-items: center;
    font-size: 1.18em;
    margin-bottom: 0;
    width: 100%;
    padding: 0 20px;
    height: 44px;
    border-radius: 10px;
    font-weight: 700;
    background: transparent;
    transition: background 0.2s;
}

.perfil-stat-row:nth-child(odd) {
    background: #373a54;
}

.perfil-stat-row:nth-child(even) {
    background: transparent;
}

.perfil-stat-icon-img {
    width: 24px;
    height: 24px;
    object-fit: contain;
    margin-right: 14px;
}

.perfil-stat-label {
    color: #fff;
    white-space: nowrap;
    flex: 1 1 auto;
    font-size: 1em;
    font-weight: 700;
}

.perfil-stat-value {
    color: #fff;
    font-size: 1em;
    text-align: right;
    min-width: 80px;
    flex: 0 0 80px;
    margin-left: 16px;
    font-weight: 700;
}

.perfil-intro-section {
    margin-top: 36px;
}

.perfil-intro-section h3 {
    font-size: 1.3em;
    margin-bottom: 10px;
}

.perfil-intro-box {
    background: #23243a;
    border-radius: 14px;
    padding: 18px 18px 14px 18px;
    color: #fff;
    font-size: 1.08em;
    box-shadow: 0 2px 8px #0002;
}

.perfil-intro-highlight {
    color: #a44ce7;
    font-weight: bold;
}

.perfil-intro-rareza-4 {
    color: #a44ce7;
    font-weight: bold;
}

.perfil-intro-rareza-5 {
    color: #facc15;
    font-weight: bold;
}

.perfil-intro-elemento {
    color: #6ee7b7;
    font-weight: bold;
}

.perfil-intro-arma {
    color: #60a5fa;
    font-weight: bold;
}

.perfil-intro-desc {
    display: block;
    margin-top: 8px;
    color: #b0b3c1;
}

.perfil-roles {
    margin-top: 36px;
}

.perfil-rol {
    margin-bottom: 18px;
    font-size: 1.15em;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
}

.rol-nombre {
    font-weight: bold;
    margin-right: 10px;
}

.perfil-tier {
    margin-left: 38px;
    font-size: 1em;
    font-weight: 400;
    color: #b0b3c1;
}

.tier-label {
    font-weight: bold;
    color: #a44ce7;
}

.tier-desc {
    color: #fff;
}

@media (max-width: 900px) {
    .perfil-header {
        flex-direction: column;
        align-items: center;
        gap: 24px;
        padding: 18px 8px;
    }

    .perfil-img-bg {
        min-width: 220px;
        min-height: 260px;
        padding: 18px 18px 0 18px;
    }

    .perfil-imagen {
        max-width: 220px;
    }

    .perfil-info-col {
        max-width: 100vw;
    }

    .perfil-stats-box {
        max-width: 100vw;
    }
}

@media (max-width: 600px) {
    .perfil-main {
        padding: 8px 2vw 24px 2vw;
    }

    .perfil-header {
        padding: 8px 2vw;
    }

    .perfil-img-bg {
        min-width: 120px;
        min-height: 140px;
        padding: 8px 8px 0 8px;
    }

    .perfil-imagen {
        max-width: 120px;
    }
}
</style>