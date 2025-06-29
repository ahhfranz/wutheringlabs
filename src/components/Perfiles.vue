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
                Última actualización: <b>28/06/2025</b>
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
                    <div class="perfil-nivel-bar" ref="nivelBar" :style="{
                        '--nivel-bar-main': elementColors.main,
                        '--nivel-bar-grad': elementColors.grad
                    }" @mousedown="onBarClick">
                        <div class="perfil-nivel-bar-fill" :style="{ width: ((nivel - 1) / 89 * 100) + '%' }"></div>
                        <div class="perfil-nivel-thumb" :class="{ dragging: draggingNivel }"
                            :style="{ left: ((nivel - 1) / 89 * 100) + '%' }" @mousedown="startDragNivel"></div>
                    </div>
                    <span class="perfil-nivel-num">{{ nivel }}</span>
                </div>
                <div class="perfil-mats-title">
                    <b>{{ matsTitle }}</b>
                </div>
                <div class="perfil-mats-stats-wrapper">
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
        </div>

        <div class="perfil-content-centered" :style="{
            '--diamond-main': elementColors.main,
            '--diamond-grad': elementColors.grad,
            '--diamond-shadow': elementColors.shadow,
            '--section-title-bar': elementColors.main
        }">
            <div class="perfil-intro-section">
                <h3 class="perfil-section-title">Introducción</h3>
                <div class="perfil-intro-box">
                    <span class="perfil-intro-highlight">{{ personaje.nombre }}</span>
                    es un personaje de
                    <span :class="['perfil-intro-rareza-' + personaje.rareza]">{{ personaje.rareza
                        }}★</span> del
                    elemento
                    <span class="perfil-intro-elemento" :class="elementColorClass">
                        {{ personaje.elemento.charAt(0).toUpperCase() + personaje.elemento.slice(1) }}
                    </span>
                    que utiliza
                    <span class="perfil-intro-arma">{{ personaje.arma.charAt(0).toUpperCase() +
                        personaje.arma.slice(1)
                        }}</span>
                    como arma.<br>
                    <span class="perfil-intro-desc">
                        {{ personaje.descripcion || 'Sin descripción disponible.' }}
                    </span>
                </div>
            </div>
            <h3 class="perfil-section-title">Habilidades</h3>
            <div class="perfil-skilltree-section">
                <div
                    :class="['skilltree-columns', { 'skilltree-columns-shifted': selectedSkill !== null, 'skilltree-columns-centered': selectedSkill === null }]">
                    <div class="skilltree-vertical skilltree-vertical-extra-izq">
                        <div v-for="n in 3" :key="'extra-izq-' + n" class="skilltree-node">
                            <div class="skilltree-diamond"
                                :class="{ selected: selectedSkill && selectedSkill.col === 0 && selectedSkill.idx === n - 1 }"
                                @click="selectSkill(0, n - 1)">
                                <span class="skilltree-icon-placeholder">
                                    <img v-if="skills[0] && skills[0][n - 1]" :src="skills[0][n - 1].icono"
                                        alt="Skill Icon" class="skilltree-icon-img" />
                                </span>
                            </div>
                            <div v-if="n < 3" class="skilltree-connector"></div>
                        </div>
                    </div>
                    <div class="skilltree-vertical skilltree-vertical-tercera">
                        <div v-for="n in 3" :key="'tercera-' + n" class="skilltree-node">
                            <div class="skilltree-diamond"
                                :class="{ selected: selectedSkill && selectedSkill.col === 1 && selectedSkill.idx === n - 1 }"
                                @click="selectSkill(1, n - 1)">
                                <span class="skilltree-icon-placeholder">
                                    <img v-if="skills[1] && skills[1][n - 1]" :src="skills[1][n - 1].icono"
                                        alt="Skill Icon" class="skilltree-icon-img" />
                                </span>
                            </div>
                            <div v-if="n < 3" class="skilltree-connector"></div>
                        </div>
                    </div>
                    <div class="skilltree-vertical">
                        <div v-for="n in 4" :key="n" class="skilltree-node">
                            <div class="skilltree-diamond"
                                :class="{ selected: selectedSkill && selectedSkill.col === 2 && selectedSkill.idx === n - 1 }"
                                @click="selectSkill(2, n - 1)">
                                <span class="skilltree-icon-placeholder">
                                    <img v-if="skills[2] && skills[2][n - 1]" :src="skills[2][n - 1].icono"
                                        alt="Skill Icon" class="skilltree-icon-img" />
                                </span>
                            </div>
                            <div v-if="n < 3" class="skilltree-connector"></div>
                        </div>
                    </div>
                    <div class="skilltree-vertical skilltree-vertical-sec">
                        <div v-for="n in 3" :key="'sec-' + n" class="skilltree-node">
                            <div class="skilltree-diamond"
                                :class="{ selected: selectedSkill && selectedSkill.col === 3 && selectedSkill.idx === n - 1 }"
                                @click="selectSkill(3, n - 1)">
                                <span class="skilltree-icon-placeholder">
                                    <img v-if="skills[3] && skills[3][n - 1]" :src="skills[3][n - 1].icono"
                                        alt="Skill Icon" class="skilltree-icon-img" />
                                </span>
                            </div>
                            <div v-if="n < 3" class="skilltree-connector"></div>
                        </div>
                    </div>
                    <div class="skilltree-vertical skilltree-vertical-extra-der">
                        <div v-for="n in 3" :key="'extra-der-' + n" class="skilltree-node">
                            <div class="skilltree-diamond"
                                :class="{ selected: selectedSkill && selectedSkill.col === 4 && selectedSkill.idx === n - 1 }"
                                @click="selectSkill(4, n - 1)">
                                <span class="skilltree-icon-placeholder">
                                    <img v-if="skills[4] && skills[4][n - 1]" :src="skills[4][n - 1].icono"
                                        alt="Skill Icon" class="skilltree-icon-img" />
                                </span>
                            </div>
                            <div v-if="n < 3" class="skilltree-connector"></div>
                        </div>
                    </div>
                </div>
                <transition name="fade-slide">
                    <div v-if="selectedSkillData" class="perfil-skill-info-box">
                        <button class="perfil-skill-info-close" @click="closeSkillInfo" aria-label="Cerrar">✕</button>
                        <div class="perfil-skill-info-title">
                            <img v-if="selectedSkillData.icono" :src="selectedSkillData.icono"
                                class="perfil-skill-info-icon" />
                            <span>{{ selectedSkillData.nombre || 'Habilidad seleccionada' }}</span>
                        </div>
                        <div v-if="selectedSkillData.subtitulo" class="perfil-skill-info-subtitulo">
                            {{ selectedSkillData.subtitulo }}
                        </div>
                        <div class="perfil-skill-info-desc" v-html="selectedSkillData.descripcion || ''"></div>
                    </div>
                </transition>
            </div>
            <h3 class="perfil-section-title">Cadena de Resonancia</h3>
            <div class="perfil-cadena-resonancia-list"
                :class="{ 'perfil-cadena-resonancia-list-shifted': selectedDupe !== null }"
                v-if="cadenaResonancia && cadenaResonancia.length">
                <div class="perfil-cadena-resonancia-item" v-for="(dupe, idx) in cadenaResonancia" :key="idx">
                    <div class="skilltree-diamond perfil-cadena-resonancia-diamond"
                        :class="{ selected: selectedDupe === idx }" @click="selectDupe(idx)">
                        <span class="skilltree-icon-placeholder">
                            <img :src="dupe.icono" alt="Dupe Icon" class="perfil-cadena-resonancia-icon" />
                        </span>
                    </div>
                    <div class="dupe-label">S{{ idx + 1 }}</div>
                </div>
                <transition name="fade-slide">
                    <div v-if="selectedDupeData" class="perfil-skill-info-box perfil-dupe-info-box">
                        <button class="perfil-skill-info-close" @click="closeDupeInfo" aria-label="Cerrar">✕</button>
                        <div class="perfil-skill-info-title">
                            <img v-if="selectedDupeData.icono" :src="selectedDupeData.icono"
                                class="perfil-skill-info-icon" />
                            <span>{{ selectedDupeData.titulo || ('Cadena de Resonancia ' + (selectedDupe + 1)) }}</span>
                        </div>
                        <div v-if="selectedDupeData.subtitulo" class="perfil-skill-info-subtitulo">
                            {{ selectedDupeData.subtitulo }}
                        </div>
                        <div class="perfil-skill-info-desc" v-html="selectedDupeData.descripcion"></div>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
import resonadores from '@/utils/resonadores.js';

const ELEMENT_COLORS = {
    gelio: { main: '#41AEFB', grad: '#0ff', shadow: '#41AEFBcc' },
    fusion: { main: '#F47C56', grad: '#ffb347', shadow: '#F47C56cc' },
    aero: { main: '#1ecb7a', grad: '#0e7c4a', shadow: '#1ecb7acc' },
    electro: { main: '#B86FFF', grad: '#8e44ad', shadow: '#B86FFFcc' },
    espectro: { main: '#FFF180', grad: '#ffe066', shadow: '#FFF180cc' },
    destrucción: { main: '#ED41A3', grad: '#ff5fa2', shadow: '#ED41A3cc' },
};

export default {
    data() {
        return {
            personaje: null,
            selectedSkill: null,
            selectedDupe: null,
            nivel: 90,
            draggingNivel: false,
        };
    },
    computed: {
        matsTitle() {
            if (this.nivel <= 40) return 'Materiales de ascensión - Nivel máximo: 40';
            if (this.nivel <= 50) return 'Materiales de ascensión - Nivel máximo: 50';
            if (this.nivel <= 60) return 'Materiales de ascensión - Nivel máximo: 60';
            if (this.nivel <= 70) return 'Materiales de ascensión - Nivel máximo: 70';
            if (this.nivel <= 80) return 'Materiales de ascensión - Nivel máximo: 80';
            return 'Materiales de ascensión - Nivel máximo: 90';
        },
        mats() {
            if (this.personaje?.matsAscension) {
                if (this.nivel <= 40) return this.personaje.matsAscension[0];
                if (this.nivel <= 50) return this.personaje.matsAscension[1];
                if (this.nivel <= 60) return this.personaje.matsAscension[2];
                if (this.nivel <= 70) return this.personaje.matsAscension[3];
                if (this.nivel <= 80) return this.personaje.matsAscension[4];
                return this.personaje.matsAscension[5];
            }
            return this.personaje?.mats || [];
        },
        stats() {
            if (!this.personaje?.stats) return [];
            return this.personaje.stats.map(stat => {
                if (stat.values && Array.isArray(stat.values)) {
                    let value = stat.values.length === 1
                        ? stat.values[0]
                        : stat.values[this.nivel - 1];
                    if (stat.isPercent) {
                        value = Math.round(value) + '%';
                    }
                    return { ...stat, value };
                }
                return stat;
            });
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
        elementColors() {
            if (!this.personaje) return ELEMENT_COLORS.aero;
            return ELEMENT_COLORS[this.personaje.elemento.toLowerCase()] || ELEMENT_COLORS.aero;
        },
        selectedSkillIcon() {
            return '';
        },
        cadenaResonancia() {
            return this.personaje?.cadenaResonancia || [];
        },
        skills() {
            return this.personaje?.skills || [];
        },
        selectedSkillData() {
            if (!this.selectedSkill) return null;
            const { col, idx } = this.selectedSkill;
            return this.skills[col]?.[idx] || null;
        },
        selectedDupeData() {
            if (this.selectedDupe === null) return null;
            return this.cadenaResonancia[this.selectedDupe] || null;
        },
    },
    created() {
        const nombre = this.$route.params.nombre;
        this.personaje = resonadores.find(p => p.nombre === nombre);
    },
    methods: {
        selectSkill(col, idx) {
            this.selectedSkill = { col, idx };
        },
        closeSkillInfo() {
            this.selectedSkill = null;
        },
        selectDupe(idx) {
            this.selectedDupe = idx;
        },
        closeDupeInfo() {
            this.selectedDupe = null;
        },
        startDragNivel(e) {
            this.draggingNivel = true;
            document.body.classList.add('grabbing-cursor');
            document.addEventListener('mousemove', this.onDragNivel);
            document.addEventListener('mouseup', this.stopDragNivel);
        },
        onDragNivel(e) {
            if (!this.draggingNivel) return;
            e.preventDefault();
            const bar = this.$refs.nivelBar;
            const rect = bar.getBoundingClientRect();
            let x = e.clientX - rect.left;
            x = Math.max(0, Math.min(x, rect.width));
            const nivel = Math.round((x / rect.width) * 89) + 1;
            this.nivel = nivel;
        },
        onBarClick(e) {
            if (e.target.classList.contains('perfil-nivel-thumb')) return;
            const bar = this.$refs.nivelBar;
            const rect = bar.getBoundingClientRect();
            let x = e.clientX - rect.left;
            x = Math.max(0, Math.min(x, rect.width));
            const nivel = Math.round((x / rect.width) * 89) + 1;
            this.nivel = nivel;
        },
        stopDragNivel() {
            this.draggingNivel = false;
            document.body.classList.remove('grabbing-cursor');
            document.removeEventListener('mousemove', this.onDragNivel);
            document.removeEventListener('mouseup', this.stopDragNivel);
        },
    }
};
</script>

<style>
.grabbing-cursor,
.grabbing-cursor * {
    cursor: grabbing !important;
}
</style>

<style scoped>
.perfil-main {
    width: fit-content;
    max-width: 100%;
    margin: 0 auto;
    color: #fff;
    box-sizing: border-box;
    display: flex;
    padding: 0 20px;
    flex-direction: column;
    align-items: stretch;
    margin-left: -30px;
}

.perfil-header {
    display: grid;
    grid-template-columns: 1fr 1.4fr;
    gap: 40px;
    align-items: flex-start;
    border-radius: 32px;
    width: 100%;
    box-sizing: border-box;
}

.perfil-content-centered {
    width: 100%;
    max-width: none;
    margin: 0 auto;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: relative;
}

.perfil-intro-section,
.perfil-skilltree-section {
    width: 100%;
    max-width: 100%;
    margin-left: 0;
    align-items: flex-start;
    box-sizing: border-box;
}

.perfil-intro-section {
    margin-top: 36px;
}

.perfil-intro-box {
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    padding-left: 0;
    padding-right: 0;

}

.perfil-skilltree-section {
    border-radius: 14px;
    padding: 18px 18px 24px 18px;
    color: #fff;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    min-height: 380px;
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
    min-width: unset;
    min-height: unset;
    width: 100%;
    max-width: 400px;
    overflow: hidden;

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
    width: 100%;
    max-width: 100%;
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

.perfil-section-title {
    font-size: 1.6em;
    font-weight: 700;
    color: #fff;
    margin-top: 40px;
    margin-bottom: 18px;
    letter-spacing: 2px;
    background: none;
    border: none;
    padding-bottom: 10px;
    position: relative;
    display: block;
    text-shadow: 0 2px 10px #0007;
}

.perfil-section-title::after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, var(--section-title-bar, #a44ce7) 0%, transparent 100%);
    border-radius: 1px;
    opacity: 0.85;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s;
}

.perfil-section-title:hover::after {
    transform: scaleX(1);
}

.perfil-tags-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
}

.perfil-nombre-bloque {
    width: 90%;
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
    max-width: 90%;
}

.perfil-nivel-bar {
    position: relative;
    flex: 1;
    height: 16px;
    background: #23243a;
    border-radius: 8px;
    overflow: visible;
    margin: 0 8px;
    box-shadow: 0 2px 8px #0003;
    display: flex;
    align-items: center;
}

.perfil-nivel-bar,
.perfil-nivel-thumb {
    user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
}

.perfil-nivel-bar-fill {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background: linear-gradient(90deg, var(--nivel-bar-main, #a44ce7) 0%, var(--nivel-bar-grad, #6ee7b7) 100%);
    border-radius: 8px;
    z-index: 1;
    transition: none;
}

.perfil-nivel-num {
    font-weight: bold;
    font-size: 1.2em;
    min-width: 32px;
    text-align: center;
}

.perfil-mats-title {
    font-size: 1em;
    color: #fff;
    margin-bottom: 15px;
    max-width: fit-content;
    width: auto;
    margin-left: 0;
}

.perfil-mats-row {
    display: flex;
    gap: 18px;
    max-width: 92%;
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
    border-radius: 5px;
    padding: 12px 10px;
    margin-top: 18px;
    box-shadow: 0 2px 8px #0002;
    display: flex;
    flex-direction: column;
    gap: 0;
    width: 92%;

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

.perfil-intro-box {
    width: 96%;
    background: #23243a;
    border-radius: 5px;
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

.perfil-skill-info-box {
    position: absolute;
    right: 40px;
    top: 50%;
    transform: translateY(-50%);
    width: 700px;
    min-height: 600px;
    z-index: 10;
    margin-left: 40px;
    box-shadow: 0 2px 24px #0007;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background: #18192a;
    border-radius: 18px;
    padding: 32px 38px 32px 38px;
    font-size: 1.18em;
}

.perfil-skill-info-close {
    position: absolute;
    top: 18px;
    right: 18px;
    background: none;
    border: none;
    color: #fff;
    font-size: 2.1em;
    cursor: pointer;
    z-index: 20;
    opacity: 0.7;
    transition: opacity 0.2s;
}

.perfil-skill-info-close:hover {
    opacity: 1;
}

.perfil-skill-info-title {
    display: flex;
    align-items: center;
    gap: 18px;
    font-size: 1.20em;
    font-weight: bold;
    margin-bottom: 0;
    margin-top: 8px;
}

.perfil-skill-info-subtitulo {
    font-size: 1em;
    color: #b0b3c1;
    margin-top: -10px;
    font-weight: 600;
    margin-left: 78px;
}

.perfil-skill-info-icon {
    width: 60px;
    height: 60px;
    object-fit: contain;
}

.perfil-skill-info-desc {
    color: #b0b3c1;
    margin-top: 10px;
    font-size: 0.9em;
    line-height: 1.7;
    margin-top: 50px;
}

.skilltree-columns {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 50px;
    position: relative;
    width: 100%;
    margin: 0 auto;
    justify-content: center;
    transition: transform 0.5s cubic-bezier(0.77, 0, 0.175, 1);
}

.skilltree-columns-shifted {
    transform: translateX(-400px);
}

.skilltree-vertical-sec {
    margin-top: 70px;
}

.skilltree-vertical-tercera {
    margin-top: 70px;
}

.skilltree-vertical-extra-izq {
    margin-top: 120px;
}

.skilltree-vertical-extra-der {
    margin-top: 120px;
}

.skilltree-vertical {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px 0;
}

.skilltree-vertical-extra-izq .skilltree-node:nth-child(1) .skilltree-diamond,
.skilltree-vertical-extra-izq .skilltree-node:nth-child(2) .skilltree-diamond,
.skilltree-vertical-tercera .skilltree-node:nth-child(1) .skilltree-diamond,
.skilltree-vertical-tercera .skilltree-node:nth-child(2) .skilltree-diamond,
.skilltree-vertical-sec .skilltree-node:nth-child(1) .skilltree-diamond,
.skilltree-vertical-sec .skilltree-node:nth-child(2) .skilltree-diamond,
.skilltree-vertical-extra-der .skilltree-node:nth-child(1) .skilltree-diamond,
.skilltree-vertical-extra-der .skilltree-node:nth-child(2) .skilltree-diamond {
    width: 70px !important;
    height: 70px !important;
    border-radius: 50px !important;
}



.skilltree-node {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
}

.skilltree-node {
    margin-bottom: 20px;
}

.skilltree-node:nth-child(4) {
    margin-top: 60px;
}

.skilltree-node:last-child {
    margin-bottom: 0;
}

.skilltree-diamond {
    width: 80px;
    height: 80px;
    border-radius: 18px;
    transform: rotate(45deg);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: box-shadow 0.3s, border-color 0.3s, transform 0.3s, background 0.3s;
    cursor: pointer;
    position: relative;
    z-index: 2;
    backdrop-filter: blur(2px);
    background-clip: padding-box;
    opacity: 0.97;
}

.skilltree-diamond::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 18px;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s;
}

.skilltree-diamond:hover {
    border-color: #fff;
    transform: rotate(45deg) scale(1.10);
}

.skilltree-diamond:hover::after {
    opacity: 1;
}

.skilltree-icon-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 2.2em;
    color: #fff;
    transform: rotate(-45deg);
    user-select: none;
}

.skilltree-icon-img {
    width: 60px;
    height: 60px;
    object-fit: contain;
    display: block;
    filter: drop-shadow(0 2px 8px #0008);
}

.skilltree-connector {
    width: 4px;
    height: 72px;
    background: linear-gradient(to bottom, #363536 60%, transparent 100%);
    position: relative;
    top: -16px;
    left: 0;
    margin-bottom: -16px;
    z-index: 1;
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

.perfil-mats-stats-wrapper {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.skilltree-diamond.selected {
    border-color: #fff;
    transform: rotate(45deg) scale(1.10);
}

.fade-slide-enter-active,
.fade-slide-leave-active {
    transition: opacity 0.5s cubic-bezier(0.77, 0, 0.175, 1), transform 0.5s cubic-bezier(0.77, 0, 0.175, 1);
}

.fade-slide-enter-from,
.fade-slide-leave-to {
    opacity: 0;
    transform: translateY(-50%) translateX(400px);
}

.fade-slide-enter-to,
.fade-slide-leave-from {
    opacity: 1;
    transform: translateY(-50%) translateX(0);
}

:deep(.desc-title) {
    color: #ffffff;
    font-weight: bold;
    font-size: 1em;
    display: block;
}

:deep(.desc-list) {
    list-style: none;
    padding-left: 0;
    margin: 0;
}

:deep(.desc-title:first-child) {
    margin-top: 5px;
}

:deep(.desc-importante) {
    color: #f3df27;
    font-weight: bold;
    font-size: 0.9em;
}

:deep(.desc-aero) {
    color: #5FFFC2;
    font-weight: bold;
    font-size: 0.9em;
}

.perfil-cadena-resonancia-list {
    display: flex;
    flex-direction: row;
    gap: 50px;
    margin-top: 50px;
    margin-bottom: 32px;
    justify-content: center;
    position: relative;
    transition: opacity 0.5s cubic-bezier(0.77, 0, 0.175, 1), transform 0.5s cubic-bezier(0.77, 0, 0.175, 1);
}

.perfil-cadena-resonancia-list-shifted {
    transform: translateX(-400px);
}

.perfil-cadena-resonancia-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: none;
    box-shadow: none;
    padding: 0;
    gap: 8px;
}

.perfil-cadena-resonancia-diamond {
    width: 80px;
    height: 80px;
    border-radius: 18px;
    transform: rotate(45deg);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: box-shadow 0.3s, border-color 0.3s, transform 0.3s, background 0.3s;
    cursor: pointer;
    position: relative;
    z-index: 2;
    backdrop-filter: blur(2px);
    background-clip: padding-box;
    opacity: 0.97;
}

.perfil-cadena-resonancia-diamond::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 18px;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s;
}

.perfil-cadena-resonancia-diamond:hover {
    border-color: #fff;
    transform: rotate(45deg) scale(1.10);
}

.perfil-cadena-resonancia-diamond:hover::after {
    opacity: 1;
}

.perfil-cadena-resonancia-diamond.selected {
    border-color: #fff;
    transform: rotate(45deg) scale(1.10);
}

.perfil-cadena-resonancia-icon {
    width: 60px;
    height: 60px;
    object-fit: contain;
    margin: 0;
}

.perfil-dupe-info-box {
    position: absolute;
    right: -360px;
    top: 50%;
    transform: translateY(-50%);
    width: 700px;
    min-height: 200px;
    margin-left: 40px;
    box-shadow: 0 2px 24px #0007;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: #18192a;
    border-radius: 18px;
    font-size: 1.18em;
    margin-top: 24px;
    z-index: 20;
    padding: 32px 32px 32px 32px;
}

.skilltree-diamond,
.perfil-cadena-resonancia-diamond {
    border: 2.5px solid var(--diamond-main);
    background: linear-gradient(135deg, var(--diamond-grad) 0%, var(--diamond-main) 100%);
}

.skilltree-diamond.selected,
.perfil-cadena-resonancia-diamond.selected,
.skilltree-diamond:hover,
.perfil-cadena-resonancia-diamond:hover {
    box-shadow: 0 0 32px 8px var(--diamond-shadow), 0 4px 24px #000a;
    border-color: var(--diamond-main);
    background: linear-gradient(135deg, var(--diamond-grad) 0%, var(--diamond-main) 100%);
}

.dupe-label {
    margin-top: 12px;
    color: #fff;
    font-size: 1.25em;
    font-weight: 600;
    text-align: center;
    letter-spacing: 1px;
    text-shadow: 0 2px 8px #000a;
}

.perfil-nivel-bar {
    position: relative;
}

.perfil-nivel-thumb {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 28px;
    height: 28px;
    background: #fff;
    border: 4px solid var(--nivel-bar-main, #a44ce7);
    box-shadow: 0 2px 8px #0006;
    border-radius: 50%;
    cursor: pointer;
    z-index: 2;
    transition: border-color 0.2s, background 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
}

.perfil-nivel-thumb::after {
    content: '';
    display: block;
    width: 14px;
    height: 14px;
    background: var(--nivel-bar-main, #a44ce7);
    border-radius: 50%;
    margin: auto;
    transition: background 0.2s;
}

.perfil-nivel-thumb {
    cursor: grab;
}

.perfil-nivel-thumb.dragging {
    cursor: grabbing;
}
</style>