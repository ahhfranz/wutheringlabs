<template>
    <div v-for="(eco, idx) in ecosSets" :key="eco.id" :class="[
        'ecos-set-card',
        eco.tipo === 'principal' ? 'ecos-set-card-verde' : 'ecos-set-card-gris'
    ]">
        <div class="ecos-set-header">
            <div :class="eco.tipo === 'principal' ? 'ecos-set-verde' : 'ecos-set-naranja'">
                {{ eco.tipo === 'principal' ? 'PRINCIPAL' : 'SITUACIONAL' }}
            </div>
            <img class="ecos-set-icon" :src="eco.icon" :alt="eco.nombre" />
            <div class="ecos-set-title"><b>{{ eco.nombre }}</b></div>
            <button class="ecos-set-toggle" @click="toggle(idx)">
                <span v-if="open[idx]">▲</span>
                <span v-else>▼</span>
            </button>
        </div>
        <transition name="accordion-fade">
            <div v-if="open[idx]" class="ecos-set-bonus">
                <div v-for="bonus in eco.bonus" :key="bonus.set">
                    <b>{{ bonus.set }} Set:</b>
                    <span v-html="bonus.desc"></span>
                </div>
            </div>
        </transition>
        <div class="ecos-set-content">
            <div class="ecos-set-desc">{{ eco.descripcion }}</div>
            <div class="ecos-set-options-title"><b>MEJORES OPCIONES</b></div>
            <ul class="ecos-set-options-list">
                <li v-for="op in eco.opciones" :key="op.nombre">
                    <img class="ecos-echo-img" :src="op.img" :alt="op.nombre" />
                    <span>
                        <b class="ecos-echo-name">{{ op.nombre }}</b>
                        <span class="ecos-echo-desc">{{ op.desc }}</span>
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import ecosData from '@/utils/ecosData.js';

export default {
    props: {
        personaje: Object
    },
    computed: {
        ecosSets() {
            if (!this.personaje?.ecos) return [];
            return this.personaje.ecos.map(id => ecosData[id]).filter(Boolean);
        }
    },
    data() {
        return {
            open: []
        }
    },
    watch: {
        ecosSets: {
            immediate: true,
            handler(val) {
                this.open = val.map(() => false);
            }
        }
    },
    methods: {
        toggle(idx) {
            this.open[idx] = !this.open[idx];
        }
    }
}
</script>


<style>
.ecos-highlight {
    color: #4ade80;
    font-weight: 700;
}
</style>

<style scoped>
.ecos-set-card-verde {
    background: #23243a;
    border-radius: 8px;
    box-shadow: 0 2px 16px #0006;
    color: #fff;
    margin: 18px 0;
    padding: 0 0 18px 0;
    font-family: inherit;
    border-left: 8px solid #4ade80;
    max-width: 1100px;
    margin-left: auto;
    margin-right: auto;
}

.ecos-set-card-gris {
    background: #23243a;
    border-radius: 8px;
    box-shadow: 0 2px 16px #0006;
    color: #fff;
    margin: 18px 0;
    padding: 0 0 18px 0;
    font-family: inherit;
    border-left: 8px solid #cecece;
    max-width: 1100px;
    margin-left: auto;
    margin-right: auto;
}

.ecos-set-header {
    display: flex;
    align-items: center;
    gap: 18px;
    padding: 18px 28px 12px 28px;
    background: #18192a;
    border-radius: 12px 12px 0 0;
    position: relative;
}

.ecos-set-verde {
    background: #4ade80;
    color: #222;
    font-weight: bold;
    font-size: 1.1em;
    border-radius: 6px;
    padding: 10px 16px;
    min-width: 70px;
    text-align: center;
    margin-right: 2px;
}

.ecos-set-naranja {
    background: #ffd484;
    color: #222;
    font-weight: bold;
    font-size: 1.1em;
    border-radius: 6px;
    padding: 10px 16px;
    min-width: 70px;
    text-align: center;
    margin-right: 2px;
}

.ecos-set-icon {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    object-fit: cover;
    background: #23243a;
}

.ecos-set-title {
    font-size: 1.25em;
    color: #fff;
    margin-left: 2px;
    letter-spacing: 0.5px;
}

.ecos-set-toggle {
    background: none;
    border: none;
    color: #fff;
    font-size: 1.5em;
    margin-left: auto;
    cursor: pointer;
    outline: none;
    padding: 0 8px;
    transition: color 0.2s;
    line-height: 1;
}

.ecos-set-toggle-verde:hover {
    color: #4ade80;
}

.ecos-set-toggle-gris:hover {
    color: #cecece;
}

.ecos-set-bonus {
    background: #1c1d2e;
    padding: 16px 24px 10px 24px;
    border-radius: 0 0 8px 8px;
    color: #fff;
    font-size: 1.08em;
    border-bottom: 1px solid #35364a;
}

.ecos-set-bonus>div {
    margin-bottom: 4px;
    font-size: 1.08em;
}

.ecos-set-content {
    padding: 18px 32px 0 32px;
}

.ecos-set-desc {
    color: #b0b3c1;
    font-size: 1.09em;
    line-height: 1.5;
}

.ecos-set-options-title {
    color: #fff;
    font-weight: 700;
    margin: 10px 0 20px 0;
    font-size: 1em;
    letter-spacing: 2px;
}

.ecos-set-options-list {
    list-style: none;
    padding-left: 0;
    margin: 0;
}

.ecos-set-options-list li {
    display: flex;
    align-items: flex-start;
    gap: 14px;
    margin-bottom: 16px;
    color: #fff;
    font-size: 1.08em;
    line-height: 1.5;
}

.ecos-echo-img {
    width: 38px;
    height: 38px;
    border-radius: 8px;
    object-fit: cover;
    border: 2px solid #fff3;
    margin-top: 2px;
    background: #18192a;
}

.ecos-echo-name {
    color: #facc15;
    font-weight: 700;
    font-size: 1.08em;
}

.ecos-echo-desc {
    color: #e0e0e0;
    font-weight: 400;
    margin-left: 6px;
    font-size: 1em;
}

.accordion-fade-enter-active,
.accordion-fade-leave-active {
    overflow: hidden;
}

.accordion-fade-enter,
.accordion-fade-leave-to {
    opacity: 0;
}
</style>
