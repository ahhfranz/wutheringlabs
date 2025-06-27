<template>
    <div class="guide-header">
        <div class="guide-breadcrumbs">
            <router-link to="/">Wuthering Labs</router-link> / <router-link to="/resonadores">Resonadores</router-link>
            / <span>{{ personaje ? personaje.nombre : '...' }}</span>
        </div>
        <div class="guide-header-main">

        </div>
        <div class="guide-header-info">
            <div class="guide-header-date">
                <div class="perfil-mini-icon" v-if="personaje">
                    <img :src="personaje.imagenPerfil || personaje.imagen" :alt="personaje.nombre" />
                </div>
                Última actualización: <b>26/06/2025</b>
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
                <div class="perfil-nombre-bloque">
                    <div style="display: flex; align-items: center; width: 100%; justify-content: space-between;">
                        <div style="display: flex; flex-direction: column;">
                            <h1 class="perfil-nombre">
                                {{ personaje.nombre }}
                                <span class="perfil-rareza">{{ personaje.rareza }}★</span>
                            </h1>
                            <div class="perfil-subtitulo">{{ personaje.nombre }}</div>
                        </div>
                        <div class="perfil-tags-row">
                            <span class="perfil-tag perfil-tag-elemento" :class="elementColorClass">
                                <img :src="personaje.iconoElemento" alt="" class="tag-iconos"
                                    v-if="personaje.iconoElemento" />
                                {{ personaje.elemento.charAt(0).toUpperCase() + personaje.elemento.slice(1) }}
                            </span>
                            <span class="perfil-tag perfil-tag-arma">
                                {{ personaje.arma.charAt(0).toUpperCase() + personaje.arma.slice(1) }}
                            </span>
                        </div>
                    </div>
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
                <span :class="['perfil-intro-rareza-' + personaje.rareza]">{{ personaje.rareza }}★</span> del elemento
                <span class="perfil-intro-elemento">{{ personaje.elemento.charAt(0).toUpperCase() +
                    personaje.elemento.slice(1) }}</span>
                que utiliza
                <span class="perfil-intro-arma">{{ personaje.arma.charAt(0).toUpperCase() + personaje.arma.slice(1)
                    }}</span>
                como arma.<br>
                <span class="perfil-intro-desc">
                    {{ personaje.descripcion || 'Sin descripción disponible.' }}
                </span>
            </div>
        </div>
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
            return this.personaje?.mats || [];
        },
        stats() {
            return this.personaje?.stats || [];
        },
        elementColorClass() {
            if (!this.personaje) return '';
            const map = {
                'gelio': 'elementcolor-1',
                'fusion': 'elementcolor-2',
                'aero': 'elementcolor-3',
                'electro': 'elementcolor-4',
                'espectro': 'elementcolor-5',
                'destrucción': 'elementcolor-6',
            };
            return map[this.personaje.elemento.toLowerCase()] || '';
        },
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
    width: 100%;
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
    flex-direction: row;
    align-items: center;
    gap: 12px;
    margin-bottom: 8px;
    margin-top: 4px;
}

.perfil-nombre-bloque {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
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
    white-space: nowrap;
}

.perfil-tag-arma {
    border-color: #b0bac7;
    color: #b0bac7;
}

.tag-iconos {
    width: 22px;
    height: 22px;
    margin-right: 6px;
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
    margin-bottom: 15px;
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
    border: 1px solid #a44ce7;
    border-radius: 5px;
    padding: 4px 12px;
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

.perfil-mini-icon {
    display: inline-block;
    vertical-align: middle;
    margin-right: 12px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid #a44ce7;
    box-shadow: 0 2px 8px #0003;
    background: #23243a;
}

.perfil-mini-icon img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center -20%;
    display: block;
    transform: scale(3);
}

.guide-header-date {
    display: flex;
    align-items: center;
    gap: 8px;
}

.perfil-skilltree-section {
    margin-top: 36px;
    background: #23243a;
    border-radius: 14px;
    padding: 18px 18px 24px 18px;
    color: #fff;
    box-shadow: 0 2px 8px #0002;
}

.perfil-skill-info-box {
    margin-top: 24px;
    background: #18192a;
    border-radius: 12px;
    padding: 18px 18px 14px 18px;
    color: #fff;
    font-size: 1.08em;
    box-shadow: 0 2px 8px #0002;
}

.perfil-skill-info-title {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 1.2em;
    font-weight: bold;
    margin-bottom: 8px;
}

.perfil-skill-info-icon {
    width: 36px;
    height: 36px;
    object-fit: contain;
}

.perfil-skill-type {
    background: #35365a;
    color: #a44ce7;
    border-radius: 8px;
    padding: 2px 10px;
    font-size: 0.9em;
    margin-left: 8px;
}

.perfil-skill-info-desc {
    color: #b0b3c1;
    margin-top: 6px;
}

:deep(.elementcolor-1) {
    border-color: #41AEFB;
    color: #41AEFB;
}

:deep(.elementcolor-2) {
    border-color: #F47C56;
    color: #F47C56;
}

:deep(.elementcolor-3) {
    border-color: #5FFFC2;
    color: #5FFFC2;
}

:deep(.elementcolor-4) {
    border-color: #B86FFF;
    color: #B86FFF;
}

:deep(.elementcolor-5) {
    border-color: #FFF180;
    color: #FFF180;
}

:deep(.elementcolor-6) {
    border-color: #ED41A3;
    color: #ED41A3;
}
</style>