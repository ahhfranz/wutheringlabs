<template>
    <div class="ecos-set-card-verde">
        <div class="ecos-set-header">
            <div class="ecos-set-verde">PRINCIPAL</div>
            <img class="ecos-set-icon" src="@/assets/images/ecos/T_IconElementAttriWind.webp" alt="Sierra Gale" />
            <div class="ecos-set-title"><b>Ventisca de sierra</b></div>
            <button class="ecos-set-toggle" @click="openVerde = !openVerde">
                <span v-if="openVerde">▲</span>
                <span v-else>▼</span>
            </button>
        </div>
        <transition name="accordion-fade">
            <div v-if="openVerde" class="ecos-set-bonus">
                <div>
                    <b>2 Set:</b> <span class="ecos-highlight">Daño Aero</span> +<b>10%</b>.
                </div>
                <div>
                    <b>5 Set:</b> <span class="ecos-highlight">Daño Aero</span> +<b>30%</b> durante <b>15s</b>
                    cuando
                    se utiliza la habilidad intro.
                </div>
            </div>

        </transition>
        <div class="ecos-set-content">
            <div class="ecos-set-desc">
                Ofrece un aumento del 10% al Daño Aero y un 30% adicional después de usar la habilidad intro, para
                un
                total de un 40% de Daño Aero adicional durante 15 segundos.
            </div>
            <div class="ecos-set-options-title">
                <b>Mejores opciones:</b>
            </div>
            <ul class="ecos-set-options-list">
                <li>
                    <img class="ecos-echo-img" src="@/assets/images/ecos/T_IconMonsterHead_YZ_33014_UI.webp"
                        alt="Nightmare: Feilian Beringal" />
                    <span>
                        <b class="ecos-echo-name ecos-echo-name">Pesadilla: Beringal del Bosque</b>
                        <span class="ecos-echo-desc">
                            Ofrece un aumento del 12% al Daño Aero y al Ataque cargado cuando se utiliza como Eco
                            principal, además, es un Eco de tipo invocación, lo que lo hace fácil de usar en la
                            rotación
                            de cualquier personaje.
                        </span>
                    </span>
                </li>
                <li>
                    <img class="ecos-echo-img" src="@/assets/images/ecos/T_IconMonsterGoods_996_UI.webp"
                        alt="Feilian Beringal" />
                    <span>
                        <b class="ecos-echo-name">Beringal del Bosque</b>
                        <span class="ecos-echo-desc">
                            Otorga los mismos beneficios que su variante Pesadilla, pero únicamente después de
                            transformarse, durante una duración de 15 segundos. Esto se compensa haciendo casi el
                            doble
                            de daño que el Pesadilla y otorgando más energía al personaje que lo usa, pero es más
                            difícil de incorporar en las rotaciones, ya que es necesario cancelar la animación
                            mediante
                            un intercambio de personaje después del primer golpe para usarse óptimamente,
                            asegurándose
                            de que tu personaje reciba sus mejoras.
                        </span>
                    </span>
                </li>
            </ul>
        </div>
    </div>

    <div class="ecos-set-card-gris">
        <div class="ecos-set-header">
            <div class="ecos-set-naranja">SITUACIONAL</div>
            <img class="ecos-set-icon" src="@/assets/images/ecos/T_IconElementAttriCloud.webp" alt="Nubes iluminadas" />
            <div class="ecos-set-title"><b>Nubes iluminadas</b></div>
            <button class="ecos-set-toggle" @click="openGris = !openGris">
                <span v-if="openGris">▲</span>
                <span v-else>▼</span>
            </button>
        </div>
        <transition name="accordion-fade">
            <div v-if="openGris" class="ecos-set-bonus">
                <div>
                    <b>2 Set:</b> Regen. de energía +<b>10%</b>.
                </div>
                <div>
                    <b>5 Set:</b> Tras usar la Habilidad Outro, el <b>ATQ</b> del siguiente personaje +<b>22.5%</b>
                    durante <b>15</b> s.

                </div>
            </div>
        </transition>
        <div class="ecos-set-content">
            <div class="ecos-set-desc">
                Ofrece un aumento del 10% a la Regen. de Energía, haciéndote mas fácil que logres alcanzar el cap de
                Regen. de energía de ciertos personajes. Además, al usar la habilidad Outro, otorga
                al siguiente personaje al que hayas intercambiado un aumento del 22.5% en el ATQ, normalmente
                intentarás
                hacerlo en el DPS principal de tu equipo.
            </div>
            <div class="ecos-set-options-title">
                <b>Mejores opciones:</b>
            </div>
            <ul class="ecos-set-options-list">
                <li>
                    <img class="ecos-echo-img" src="@/assets/images/ecos/T_IconMonsterHead_995_UI.webp"
                        alt="Garza Impermanencia" />
                    <span>
                        <b class="ecos-echo-name ecos-echo-name">Garza Impermanencia</b>
                        <span class="ecos-echo-desc">
                            Eco de apoyo que se puede usar a costa de una pérdida considerable de daño para el
                            personaje
                            que lo equipa, resumidamente, intercambias daño personal por daño-rendimiento general
                            del
                            equipo. Siempre debe
                            usarse y cancelarse inmediatamente con un cambio de personaje justo antes de realizar la
                            habilidad Outro, dando
                            paso a otro DPS. Al hacerlo, se le otorga al siguiente personaje que entra un aumento
                            del
                            12%
                            en el Daño%, lo que, combinado con el conjunto de 5 piezas de Nubes iluminadas, (Que
                            también
                            otorga un
                            22.5% de ATK% bajo las mismas condiciones), representa una mejora considerable. Si bien
                            el
                            eco reduce el daño del portador, otorga una gran cantidad de energía al usarse, lo que
                            generalmente permite prescindir de 1 o incluso 2 subestadísticas de Regen. de Energía
                            que de otro modo serían necesarias, permitiendo así recuperar parte de ese daño que
                            estarías
                            perdiendo.
                        </span>
                    </span>
                </li>
            </ul>
        </div>
    </div>

</template>

<script>
export default {
    props: {
        personaje: Object
    },
    data() {
        return {
            openVerde: false,
            openGris: false,
        }
    }
}
</script>

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

.ecos-set-toggle:hover {
    color: #4ade80;
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

.ecos-highlight {
    color: #4ade80;
    font-weight: 700;
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
    font-weight: 800;
    margin: 10px 0 20px 0;
    font-size: 1.13em;
    letter-spacing: 0.1px;
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
