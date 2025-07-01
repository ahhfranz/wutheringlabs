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
                Última actualización: <b>30/06/2025</b>
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
                            <h1 class="perfil-nombre" :style="{ color: elementColors.main }">
                                {{ personaje.nombre }}
                                <span class="perfil-rareza" :style="rarezaStyle(personaje.rareza)">
                                    {{ personaje.rareza }}★
                                </span>
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

        <div class="perfil-tabs-menu" :style="{
            '--tab-main': elementColors.main,
            '--tab-grad': elementColors.grad
        }">
            <div v-for="tab in tabs" :key="tab.key" :class="['perfil-tab-btn', { active: activeTab === tab.key }]"
                @click="activeTab = tab.key">
                <span class="perfil-tab-icon" v-html="tab.icon"></span>
                <span class="perfil-tab-label">{{ tab.label }}</span>
            </div>
        </div>

        <div v-if="activeTab === 'perfil'">
            <div class="perfil-content-centered" :style="{
                '--diamond-main': elementColors.main,
                '--diamond-grad': elementColors.grad,
                '--diamond-shadow': elementColors.shadow,
                '--section-title-bar': elementColors.main
            }">
                <div class="perfil-intro-section">
                    <h3 class="perfil-section-title">INTRODUCCIÓN</h3>
                    <div class="perfil-box">
                        <span class="perfil-intro-highlight" :class="elementColorClass">
                            {{ personaje.nombre }}
                        </span>
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
                <h3 class="perfil-section-title">HABILIDADES</h3>
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
                            <button class="perfil-skill-info-close" @click="closeSkillInfo"
                                aria-label="Cerrar">✕</button>
                            <div class="perfil-skill-info-title">
                                <img v-if="selectedSkillData.icono" :src="selectedSkillData.icono"
                                    class="perfil-skill-info-icon" />
                                <span>{{ selectedSkillData.nombre || 'Habilidad seleccionada' }}</span>
                            </div>
                            <div v-if="selectedSkillData.subtitulo" class="perfil-skill-info-subtitulo">
                                {{ selectedSkillData.subtitulo }}
                            </div>
                            <div class="perfil-skill-info-desc" v-html="selectedSkillData.descripcion || ''"></div>
                            <div v-if="selectedSkill && selectedSkill.col === 0 && selectedSkill.idx === 2"
                                style="width:100%;margin-top:10px;">
                                <div class="skill-slider-header">
                                    <span class="skill-slider-label">NIVEL DE HABILIDAD</span>
                                    <span class="skill-slider-value">{{ skillLevel }}</span>
                                </div>
                                <div class="perfil-nivel-bar" :style="{
                                    '--nivel-bar-main': elementColors.main,
                                    '--nivel-bar-grad': elementColors.grad
                                }" @mousedown="onSkillBarClick" ref="skillBar">
                                    <div class="perfil-nivel-bar-fill"
                                        :style="{ width: ((skillLevel - 1) / 9 * 100) + '%' }"></div>
                                    <div class="perfil-nivel-thumb" :class="{ dragging: draggingSkill }"
                                        :style="{ left: ((skillLevel - 1) / 9 * 100) + '%' }"
                                        @mousedown="startDragSkill"></div>
                                </div>
                            </div>
                            <div v-if="selectedSkillData && selectedSkillData.statsSkill"
                                class="skill-slider-stats-list">
                                <div v-for="stat in selectedSkillData.statsSkill" :key="stat.label"
                                    class="skill-slider-stat-row">
                                    <span class="skill-slider-stat-label">{{ stat.label }}</span>
                                    <span class="skill-slider-stat-value">
                                        <template
                                            v-if="stat.isPercent && typeof stat.values[skillLevel - 1] === 'number'">
                                            {{ stat.values[skillLevel - 1].toFixed(2) }}%
                                        </template>
                                        <template v-else>
                                            {{ stat.values[skillLevel - 1] }}
                                        </template>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>
                <h3 class="perfil-section-title">CADENA DE RESONANCIA</h3>
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
                            <button class="perfil-skill-info-close" @click="closeDupeInfo"
                                aria-label="Cerrar">✕</button>
                            <div class="perfil-skill-info-title">
                                <img v-if="selectedDupeData.icono" :src="selectedDupeData.icono"
                                    class="perfil-skill-info-icon" />
                                <span>{{ selectedDupeData.titulo || ('Cadena de Resonancia ' + (selectedDupe + 1))
                                    }}</span>
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




        <div v-else-if="activeTab === 'build'">
            <div class="build-section" :style="{ '--section-title-bar': elementColors.main }">
                <h3 class="perfil-section-title">MEJORES ARMAS</h3>
                <div v-for="(weapon, idx) in personaje.bestWeapons" :key="weapon.name + idx" class="weapon-card">
                    <div class="weapon-card-header">
                        <div class="weapon-card-percent">{{ weapon.percent }}%</div>
                        <img class="weapon-card-img" :src="weapon.img" :alt="weapon.name"
                            :style="{ background: weaponBgColor(weapon.rarity) }" />
                        <div class="weapon-card-title" :class="{
                            'weapon-card-title-4': weapon.rarity === 4,
                            'weapon-card-title-5': weapon.rarity === 5
                        }">
                            <b>{{ weapon.name }}</b>
                            <span class="weapon-card-refine-badge" :class="{
                                'weapon-card-refine-4': weapon.rarity === 4,
                                'weapon-card-refine-5': weapon.rarity === 5
                            }">
                                {{ weapon.refinement }}
                            </span>
                        </div>
                        <button class="weapon-card-toggle" @click="weapon.open = !weapon.open">
                            <span v-if="weapon.open">▲</span>
                            <span v-else>▼</span>
                        </button>
                    </div>
                    <transition name="accordion-fade" @enter="accordionEnter" @after-enter="accordionAfterEnter"
                        @leave="accordionLeave" @after-leave="accordionAfterLeave">
                        <div v-if="weapon.open !== false">
                            <div class="weapon-card-effect">
                                <div v-html="weapon.efectoArma"></div>
                                <div v-if="weapon.statsArma && weapon.statsArma.length" class="weapon-card-stats"
                                    style="padding-left:0;padding-right:0;padding-bottom:0;margin-top:8px;">
                                    <span v-for="(stat, sidx) in weapon.statsArma" :key="stat.label + sidx"
                                        style="margin-right: 18px;">
                                        <b>{{ stat.label }}:</b> <span>{{ stat.value }}</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </transition>
                    <div class="weapon-card-desc">
                        {{ weapon.desc }}
                    </div>
                </div>
                <h3 class="perfil-section-title">MEJORES ECOS</h3>
                <div class="perfil-box perfil-ecos-info">
                    <div class="ecos-info-title">¿Cómo se clasifican los ecos?</div>
                    <div class="ecos-info-main">
                        <span class="ecos-info-label">Conjunto principal:</span>
                        El mejor conjunto general para el personaje, que apoya su estilo de juego principal y funciona
                        directamente sin necesidad de ajustes.
                    </div>
                    <div class="ecos-info-main">
                        <span class="ecos-info-label">Conjuntos situacionales:</span>
                        Alternativas que buscan crear un estilo de juego diferente o están orientadas a optimizar y
                        maximizar el
                        daño de otro personaje del equipo.
                    </div>
                </div>
                <div class="perfil-ecos-list">
                    <PerfilesEcos :personaje="personaje" />
                </div>
            </div>
        </div>

        <div v-else-if="activeTab === 'stats'">
            <div class="perfil-tab-content-placeholder">Sección de Stats (en desarrollo)</div>
        </div>

        <div v-else-if="activeTab === 'equipos'">
            <div class="perfil-tab-content-placeholder">Sección de Gameplay y Equipos (en desarrollo)</div>
        </div>



        <div v-else-if="activeTab === 'calculos'">
            <div class="perfil-tab-content-placeholder">Sección de Cálculos (en desarrollo)</div>
        </div>


    </div>
</template>









<script>
import PerfilesEcos from './Perfiles-ecos.vue';
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
    components: {
        PerfilesEcos
    },
    data() {
        return {
            personaje: null,
            selectedSkill: null,
            skillLevel: 1,
            selectedDupe: null,
            nivel: 90,
            draggingNivel: false,
            draggingSkill: false,
            activeTab: 'perfil',
            open: true,
            tabs: [
                {
                    key: 'perfil',
                    label: 'PERFIL',
                    icon: `<svg width="24" height="24" fill="none"><circle cx="12" cy="8" r="4" fill="#222"/><rect x="4" y="16" width="16" height="4" rx="2" fill="#222"/></svg>`
                },
                {
                    key: 'build',
                    label: 'BUILD',
                    icon: `<svg width="24" height="24" fill="none"><rect x="4" y="4" width="16" height="16" rx="2" fill="#222"/><path d="M8 8h8v8H8z" fill="#222"/></svg>`
                },
                {
                    key: 'stats',
                    label: 'STATS',
                    icon: `<svg width="24" height="24" fill="none"><rect x="4" y="14" width="3" height="6" rx="1.5" fill="#222"/><rect x="10.5" y="9" width="3" height="11" rx="1.5" fill="#222"/><rect x="17" y="5" width="3" height="15" rx="1.5" fill="#222"/></svg>`
                },
                {
                    key: 'equipos',
                    label: 'EQUIPOS',
                    icon: `<svg width="24" height="24" fill="none"><circle cx="8" cy="12" r="4" fill="#222"/><circle cx="16" cy="12" r="4" fill="#222"/></svg>`
                },
                {
                    key: 'calculos',
                    label: 'CÁLCULOS',
                    icon: `<svg width="24" height="24" fill="none"><path d="M4 20L20 4" stroke="#222" stroke-width="2"/><rect x="4" y="16" width="4" height="4" fill="#222"/><rect x="16" y="4" width="4" height="4" fill="#222"/></svg>`
                }
            ]
        };
    },
    computed: {
        matsTitle() {
            if (this.nivel <= 40) return 'Materiales de ascensión - Nivel: 40';
            if (this.nivel <= 50) return 'Materiales de ascensión - Nivel: 50';
            if (this.nivel <= 60) return 'Materiales de ascensión - Nivel: 60';
            if (this.nivel <= 70) return 'Materiales de ascensión - Nivel: 70';
            if (this.nivel <= 80) return 'Materiales de ascensión - Nivel: 80';
            return 'Materiales de ascensión - Nivel: 90';
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
        if (this.personaje && this.personaje.bestWeapons) {
            this.personaje.bestWeapons.forEach(w => w.open = false);
        }
    },
    methods: {
        rarezaStyle(rareza) {
            if (rareza === 5) {
                return {
                    background: '#b89c3a',
                    color: '#fff'
                };
            }
            if (rareza === 4) {
                return {
                    background: '#6d3e99',
                    color: '#fff'
                };
            }
            return {
                background: '#23243a',
                color: '#fff'
            };
        },
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
        startDragSkill(e) {
            this.draggingSkill = true;
            document.body.classList.add('grabbing-cursor');
            document.addEventListener('mousemove', this.onDragSkill);
            document.addEventListener('mouseup', this.stopDragSkill);
        },
        onDragSkill(e) {
            if (!this.draggingSkill) return;
            e.preventDefault();
            const bar = this.$refs.skillBar;
            const rect = bar.getBoundingClientRect();
            let x = e.clientX - rect.left;
            x = Math.max(0, Math.min(x, rect.width));
            const skillLevel = Math.round((x / rect.width) * 9) + 1;
            this.skillLevel = skillLevel;
        },
        onSkillBarClick(e) {
            if (e.target.classList.contains('perfil-nivel-thumb')) return;
            const bar = this.$refs.skillBar;
            const rect = bar.getBoundingClientRect();
            let x = e.clientX - rect.left;
            x = Math.max(0, Math.min(x, rect.width));
            const skillLevel = Math.round((x / rect.width) * 9) + 1;
            this.skillLevel = skillLevel;
        },
        stopDragSkill() {
            this.draggingSkill = false;
            document.body.classList.remove('grabbing-cursor');
            document.removeEventListener('mousemove', this.onDragSkill);
            document.removeEventListener('mouseup', this.stopDragSkill);
        },
        accordionEnter(el) {
            el.style.height = 'auto';
            el.style.opacity = '1';
            el.style.transition = 'none';
        },
        accordionAfterEnter(el) {
            el.style.height = 'auto';
            el.style.transition = '';
        },
        accordionLeave(el) {
            el.style.height = '0px';
            el.style.opacity = '0';
            el.style.transition = 'none';
        },
        accordionAfterLeave(el) {
            el.style.transition = '';
            el.style.height = '';
        },
        weaponBgColor(rarity) {
            if (rarity === 5) return '#facc15';
            if (rarity === 4) return '#a44ce7';
            return '#23243a';
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
    max-width: 1100px;
    width: 100%;
    margin: 0 auto;
    color: #fff;
    box-sizing: border-box;
    display: flex;
    padding: 0 20px;
    flex-direction: column;
    align-items: stretch;
}

.perfil-header {
    display: grid;
    grid-template-columns: auto 0.5fr;
    column-gap: 40px;
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

.perfil-skilltree-section {
    border-radius: 14px;
    padding: 18px 18px 24px 18px;
    color: #fff;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    min-height: 380px;
    margin-top: 30px;
    margin-bottom: 30px;
}

.perfil-img-col {
    display: flex;
    justify-content: center;
    margin-right: 20px;
    margin-left: -50px;
}

.perfil-img-bg {
    display: flex;
    align-items: flex-end;
    min-width: unset;
    min-height: unset;
    overflow: hidden;
    margin-top: 25px;

}

.perfil-info-col {
    width: 100%;
    min-width: 700px;
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
    font-size: 1.17em;
    font-weight: 700;
    color: #fff;
    margin-top: 20px;
    margin-bottom: 20px;
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
    background: linear-gradient(90deg, var(--section-title-bar) 0%, transparent 100%);
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
    width: 100%;
    height: 22px;
    margin-right: 6px;
}

.perfil-nivel-row {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 8px;
    width: 100%;
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
    margin-bottom: 20px;
    width: auto;
    margin-left: 0;
}

.perfil-mats-row {
    display: flex;
    gap: 1rem 10px;
    max-width: 100%;
    width: 100%;
    white-space: nowrap;
}

.perfil-mat {
    background: #18192a;
    border-radius: 15px;
    text-align: center;
    box-shadow: 0 2px 8px #0002;
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1 1 0;
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
    background-color: #1d212b;
    border-radius: 5px;
    font-size: 13px;
    font-weight: 600;
    padding: 5px 5px 5px 5px;
    width: 100%;
}

.perfil-stats-box {
    background: #18192a;
    border-radius: 15px;
    padding: 15px 15px 15px 15px;
    margin-top: 18px;
    box-shadow: 0 2px 8px #0002;
    display: flex;
    flex-direction: column;
    gap: 0;
    width: 100%;

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

.perfil-box {
    width: 100%;
    background: #18192a;
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
    right: -300px;
    top: 50%;
    transform: translateY(-50%);
    width: 800px;
    min-height: 0;
    z-index: 10;
    margin-left: 40px;
    box-shadow: 0 2px 24px #0007;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background: #18192a;
    border-radius: 18px;
    padding: 16px 16px 16px 16px;
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
    font-size: 1em;
    font-weight: bold;
    margin-bottom: 0;
}

.perfil-skill-info-subtitulo {
    font-size: 0.8em;
    color: #b0b3c1;
    margin-top: -16px;
    font-weight: 600;
    margin-left: 68px;
}

.perfil-skill-info-icon {
    width: 50px;
    height: 50px;
    object-fit: contain;
}

.perfil-skill-info-desc {
    color: #b0b3c1;
    margin-top: 10px;
    font-size: 0.8em;
    line-height: 1.7;
    margin-top: 20px;
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

:deep(.desc-info) {
    font-size: 0.9em;
    display: block;
}

:deep(.desc-list) {
    font-size: 0.9em;
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
    margin-bottom: 200px;
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
    right: -600px;
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
    background: var(--nivel-bar-main);
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

.perfil-tabs-menu {
    display: flex;
    gap: 20px;
    margin-top: 75px;
    margin-bottom: 20px;
    justify-content: center;
    align-items: flex-end;
    background: none;
    position: relative;
    z-index: 2;
}

.perfil-tab-btn {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #23242b;
    border: 1.5px solid #35363f;
    border-radius: 0;
    min-width: 300px;
    min-height: 90px;
    padding: 0 0 10px 0;
    cursor: pointer;
    box-shadow: none;
    transition:
        border-color 0.2s,
        background 0.2s,
        color 0.2s;
    outline: none;
    font-family: inherit;
    overflow: visible;
}

.perfil-tab-btn:not(.active):hover {
    border-color: var(--tab-main, #41FFC2);
    background: #23243a;
}

.perfil-tab-btn.active {
    background: #18192a;
    border-color: var(--tab-main, #41FFC2);
}

.perfil-tab-btn .perfil-tab-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 6px;
    background: var(--tab-main, #41FFC2);
    margin: -24px auto 10px auto;
    box-shadow: 0 2px 8px #41ffc24d;
    font-size: 1.5em;
    transition: background 0.2s, box-shadow 0.2s;
}

.perfil-tab-btn:not(.active) .perfil-tab-icon {
    background: #2e2f3a;
    box-shadow: 0 2px 8px #0002;
}

.perfil-tab-btn.active .perfil-tab-icon {
    background: var(--tab-main, #41FFC2);
    box-shadow: 0 4px 16px var(--tab-main, #41ffc277);
}

.perfil-tab-btn .perfil-tab-label {
    font-size: 1.17em;
    font-weight: 700;
    color: #b0b3c1;
    letter-spacing: 2px;
    text-shadow: none;
    margin-top: 8px;
    transition: color 0.2s;
    text-align: center;
}

.perfil-tab-btn.active .perfil-tab-label {
    color: #fff;
    font-weight: 700;
    letter-spacing: 2px;
}

.perfil-tab-btn::after {
    content: "";
    display: block;
    position: absolute;
    left: 0px;
    right: 0;
    bottom: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--tab-main, #41FFC2) 0%, var(--tab-grad, #41AEFB) 100%);
    border-radius: 2px;
    opacity: 0;
    transition: opacity 0.2s;
    z-index: 1;
}

.perfil-tab-btn.active::after {
    opacity: 1;
}

.perfil-tab-btn:not(.active)::after {
    opacity: 0;
}

.perfil-ecos-info {
    background: #23243a;
    border-left: 8px solid #a44ce7;
    padding: 22px 26px 18px 26px;
    margin-bottom: 18px;
    font-size: 1.08em;
    box-shadow: 0 4px 24px #0002;
    border-radius: 8px;
    color: #b0b3c1;
}

.ecos-info-title {
    font-size: 1.13em;
    font-weight: 700;
    color: #a44ce7;
    margin-bottom: 10px;
    letter-spacing: 1px;
}

.ecos-info-main {
    margin-bottom: 8px;
    line-height: 1.7;
}

.ecos-info-label {
    color: #ffffff;
    margin-right: 6px;
}

.weapon-card {
    background: #373a54;
    border-radius: 8px;
    box-shadow: 0 2px 12px #0004;
    color: #fff;
    margin: 18px 0;
    padding: 0;
    font-family: inherit;
    min-width: 100%;
    border-left: 8px solid #9c57f7;
}

.weapon-card-header {
    display: flex;
    align-items: center;
    padding: 12px 18px;
    background: #18192a;
    border-radius: 8px 8px 0 0;
    position: relative;
}

.weapon-card-percent {
    background: #9c57f7;
    color: #222;
    font-weight: bold;
    font-size: 1.1em;
    border-radius: 4px;
    padding: 8px 12px;
    margin-right: 18px;
    min-width: 100px;
    text-align: center;
}

.weapon-card-img {
    width: 48px;
    height: 48px;
    object-fit: contain;
    margin-right: 18px;
    border-radius: 4px;
    border: 1px solid #fff3;
}

.weapon-card-title-4 {
    color: #a44ce7;
}

.weapon-card-title-5 {
    color: #facc15;
}

.weapon-card-title-4,
.weapon-card-title-5 {
    font-size: 1.17em;
    display: flex;
    align-items: center;
    gap: 8px;
}

.weapon-card-refine-badge {
    display: inline-block;
    min-width: 36px;
    padding: 2px 10px;
    margin-left: 10px;
    font-size: 1.1em;
    font-weight: 700;
    border-radius: 8px;
    background: #23243a;
    color: #fff;
    border: 2px solid #fff3;
    letter-spacing: 1px;
    box-shadow: 0 2px 8px #0002;
    vertical-align: middle;
    text-align: center;
    transition: background 0.2s, border-color 0.2s;
}

.weapon-card-refine-4.weapon-card-refine-badge {
    background: #a44ce7;
    color: #fff;
    border-color: #fff3;
}

.weapon-card-refine-5.weapon-card-refine-badge {
    background: #facc15;
    color: #222;
    border-color: #fff3;
}

.weapon-card-toggle {
    background: none;
    border: none;
    color: #fff;
    font-size: 1.3em;
    margin-left: auto;
    cursor: pointer;
    outline: none;
    padding: 0 8px;
    transition: color 0.2s;
}

.weapon-card-toggle:hover {
    color: #ffe066;
}

.weapon-card-effect {
    background: #1c1d2e;
    padding: 16px 24px 10px 24px;
    border-radius: 0 0 8px 8px;
    color: #fff;
    font-size: 1.08em;
    border-bottom: 1px solid #35364a;
}

.weapon-card-effect-main {
    color: #ffe066;
    font-weight: 600;
    margin-bottom: 6px;
}

.weapon-card-stats {
    color: #b0b3c1;
    font-size: 1.08em;
    padding: 0 24px 10px 24px;
    margin-bottom: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 12px 24px;
}

.weapon-card-stats b {
    color: #fff;
    font-weight: 700;
}

.weapon-card-desc {
    padding: 18px 24px 18px 24px;
    color: #fff;
    font-size: 1.08em;
    border-radius: 0 0 8px 8px;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.accordion-fade-enter-active,
.accordion-fade-leave-active {
    overflow: hidden;
}

.skill-slider-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 6px;
}

.skill-slider-label {
    font-weight: 800;
    font-size: 0.8em;
    color: #fff;
    letter-spacing: 0.5px;
}

.skill-slider-value {
    font-size: 0.8em;
    color: #fff;
    text-shadow: 0 2px 8px #000a;
    margin-left: 16px;
}

.skill-slider-stats-list {
    margin-top: 18px;
    width: 100%;
    background: none;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 0;
}

.skill-slider-stat-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.8em;
    padding: 6px 0;
    border-bottom: 1px solid #23243a;
    background: #23243a;
}

.skill-slider-stat-label {
    color: #b0b3c1;
    font-size: 0.8em;
    margin-left: 10px;
}

.skill-slider-stat-value {
    color: #fff;
    font-weight: 300;
    font-size: 0.9em;
    text-align: right;
    min-width: 60px;
    margin-right: 10px;
}
</style>