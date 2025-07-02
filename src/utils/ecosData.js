export default {
    ventisca: {
        id: 'ventisca',
        tipo: 'principal',
        nombre: 'Ventisca de sierra',
        icon: require('@/assets/images/ecos/T_IconElementAttriWind.webp'),
        bonus: [
            { set: 2, desc: ' <span class="ecos-highlight">Daño Aero</span> +<b>10%</b>.' },
            { set: 5, desc: ' <span class="ecos-highlight">Daño Aero</span> +<b>30%</b> durante <b>15s</b> cuando se utiliza la habilidad intro.' }
        ],
        descripcion: 'Ofrece un aumento del 10% al Daño Aero y un 30% adicional después de usar la habilidad intro, para un total de un 40% de Daño Aero adicional durante 15 segundos.',
        opciones: [
            {
                nombre: 'Pesadilla: Beringal del Bosque',
                img: require('@/assets/images/ecos/T_IconMonsterHead_YZ_33014_UI.webp'),
                desc: 'Ofrece un aumento del 12% al Daño Aero y al Ataque cargado cuando se utiliza como Eco principal, además, es un Eco de tipo invocación, lo que lo hace fácil de usar en la rotación de cualquier personaje.'
            },
            {
                nombre: 'Beringal del Bosque',
                img: require('@/assets/images/ecos/T_IconMonsterGoods_996_UI.webp'),
                desc: 'Otorga los mismos beneficios que su variante Pesadilla, pero únicamente después de transformarse, durante una duración de 15 segundos. Esto se compensa haciendo casi el doble de daño que el Pesadilla y otorgando más energía al personaje que lo usa, pero es más difícil de incorporar en las rotaciones, ya que es necesario cancelar la animación mediante un intercambio de personaje después del primer golpe para usarse óptimamente,  asegurándose de que tu personaje reciba sus mejoras.'
            }
        ]
    },
    nubes: {
        id: 'nubes',
        tipo: 'situacional',
        nombre: 'Nubes iluminadas',
        icon: require('@/assets/images/ecos/T_IconElementAttriCloud.webp'),
        bonus: [
            { set: 2, desc: ' </b> Regen. de energía +<b>10%</b>.' },
            { set: 5, desc: ' </b> Tras usar la Habilidad Outro, el <b>ATQ</b> del siguiente personaje +<b>22.5%</b> durante <b>15s</b>.' }
        ],
        descripcion: 'Ofrece un aumento del 10% a la Regen. de Energía, haciéndote mas fácil que logres alcanzar el cap de Regen. de energía de ciertos personajes. Además, al usar la habilidad Outro, otorga al siguiente personaje al que hayas intercambiado un aumento del 22.5% en el ATQ, normalmente intentarás hacerlo en el DPS principal de tu equipo.',
        opciones: [
            {
                nombre: 'Garza Impermanencia',
                img: require('@/assets/images/ecos/T_IconMonsterHead_995_UI.webp'),
                desc: 'Eco de apoyo que se puede usar a costa de una pérdida considerable de daño para el personaje que lo equipa, resumidamente, intercambias daño personal por daño- rendimiento general del equipo.Siempre debe usarse y cancelarse inmediatamente con un cambio de personaje justo antes de realizar la habilidad Outro, dando paso a otro DPS.Al hacerlo, se le otorga al siguiente personaje que entra un aumento del 12 % en el Daño %, lo que, combinado con el conjunto de 5 piezas de Nubes iluminadas, (Que también otorga un 22.5 % de ATK % bajo las mismas condiciones), representa una mejora considerable.Si bien el eco reduce el daño del portador, otorga una gran cantidad de energía al usarse, lo que generalmente permite prescindir de 1 o incluso 2 sub-stadísticas de Regen.de Energía que de otro modo serían necesarias, permitiendo así recuperar parte de ese daño que estarías perdiendo.'
            }
        ]
    }
};