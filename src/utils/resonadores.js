export default [
    {
        nombre: "Aalto",
        rareza: 4,
        elemento: "aero",
        arma: "pistolas",
        iconoElemento: require("@/assets/images/elementos/icon_aero.webp"),
        imagen: require("@/assets/images/perfiles-personajes/Aalto.webp"),
        imagenPerfil: require("@/assets/images/perfiles-personajes/Aalto.webp"),
        avatar: require("@/assets/images/personajes/icon_aalto.webp"),
        descripcion: "Es un enigmático Corredor de Información, conocido por su naturaleza esquiva y su sonrisa acogedora. Se rumorea que proporcionará cualquier información al precio correcto.",
        ecos: ['ventisca', 'nubes'],
        matsAscension: [
            // 1-40
            [
                { qty: 4, img: require('@/assets/images/materiales/lfhowlercore.webp'), name: 'Núcleo de aullido básico' },
                { qty: '5000', img: require('@/assets/images/materiales/shellcredit.webp'), name: 'Moneda Caparazón' },
            ],
            // 41-50
            [
                { qty: 3, img: require('@/assets/images/materiales/roaringrockfist.webp'), name: 'Puño de Roca Rugiente' },
                { qty: 4, img: require('@/assets/images/materiales/wintrybell.webp'), name: 'Campana invernal' },
                { qty: 4, img: require('@/assets/images/materiales/mfhowlercore.webp'), name: 'Núcleo de aullido medio' },
                { qty: '10000', img: require('@/assets/images/materiales/shellcredit.webp'), name: 'Moneda Caparazón' },
            ],
            // 51-60
            [
                { qty: 6, img: require('@/assets/images/materiales/roaringrockfist.webp'), name: 'Puño de Roca Rugiente' },
                { qty: 8, img: require('@/assets/images/materiales/wintrybell.webp'), name: 'Campana invernal' },
                { qty: 8, img: require('@/assets/images/materiales/mfhowlercore.webp'), name: 'Núcleo de aullido medio' },
                { qty: '15000', img: require('@/assets/images/materiales/shellcredit.webp'), name: 'Moneda Caparazón' },
            ],
            // 61-70
            [
                { qty: 9, img: require('@/assets/images/materiales/roaringrockfist.webp'), name: 'Puño de Roca Rugiente' },
                { qty: 12, img: require('@/assets/images/materiales/wintrybell.webp'), name: 'Campana invernal' },
                { qty: 4, img: require('@/assets/images/materiales/hfhowlercore.webp'), name: 'Núcleo de aullido avanzado' },
                { qty: '20000', img: require('@/assets/images/materiales/shellcredit.webp'), name: 'Moneda Caparazón' },
            ],
            // 71-80
            [
                { qty: 12, img: require('@/assets/images/materiales/roaringrockfist.webp'), name: 'Puño de Roca Rugiente' },
                { qty: 16, img: require('@/assets/images/materiales/wintrybell.webp'), name: 'Campana invernal' },
                { qty: 8, img: require('@/assets/images/materiales/hfhowlercore.webp'), name: 'Núcleo de aullido avanzado' },
                { qty: '40000', img: require('@/assets/images/materiales/shellcredit.webp'), name: 'Moneda Caparazón' },
            ],
            // 81-90
            [
                { qty: 16, img: require('@/assets/images/materiales/roaringrockfist.webp'), name: 'Puño de Roca Rugiente' },
                { qty: 20, img: require('@/assets/images/materiales/wintrybell.webp'), name: 'Campana invernal' },
                { qty: 4, img: require('@/assets/images/materiales/ffhowlercore.webp'), name: 'Núcleo de aullido premium' },
                { qty: '80000', img: require('@/assets/images/materiales/shellcredit.webp'), name: 'Moneda Caparazón' },
            ],
        ],
        skills: [
            [
                {
                    nombre: "Bonif. de Daño Aero+",
                    descripcion: `Bonif. de  <span class="desc-aero">Daño Aero</span> +4.20%`,
                    icono: require('@/assets/images/habilidades/Aalto/T_Iconpropertyredwind_UI.webp')
                },
                {
                    nombre: "Bonif. de Daño Aero+",
                    descripcion: `Bonif. de  <span class="desc-aero">Daño Aero</span> +1.80%`,
                    icono: require('@/assets/images/habilidades/Aalto/T_Iconpropertyredwind_UI.webp')
                },
                {
                    nombre: "Medias verdades",
                    subtitulo: "Ataque normal",
                    descripcion: `
<ul class="desc-list">
    <li>
        <span class="desc-title">Ataque básico</span>
        Aalto realiza hasta 5 disparos consecutivos que infligen <span class="desc-aero">Daño Aero</span>. El 4.º Ataque básico dispersará una Niebla durante 1.5 s.
    </li>
    <li>
        <span class="desc-title">Ataque cargado</span>
        Activa el modo de apuntado, permitiendo disparos más fuertes. Tras cargar, ataca al objetivo e inflige <span class="desc-aero">Daño Aero</span>.
    </li>
    <li>
        <span class="desc-title">Ataque aéreo</span>
        Consume resistencia para atacar consecutivamente en el aire, infligiendo <span class="desc-aero">Daño Aero</span>.
    </li>
    <li>
        <span class="desc-title">Contraataque evasivo</span>
        Tras una <span class="desc-importante">evasión exitosa</span>, pulsa <span class="desc-importante">Ataque básico</span> poco después para atacar al objetivo e infligir <span class="desc-aero">Daño Aero</span>.
    </li>
</ul>
`,
                    icono: require('@/assets/images/habilidades/Aalto/SP_IconNorGun.webp'),
                    statsSkill: [
                        { label: "Daño de 1.ª etapa", values: [16, 17.32, 18.63, 20.47, 21.78, 23.29, 25.39, 27.48, 29.58, 31.81], isPercent: true },
                        { label: "Daño de 2.ª etapa", values: [26.67, 28.86, 31.04, 34.11, 36.29, 38.81, 42.31, 45.8, 49.3, 53.02], isPercent: true },
                        { label: "Daño de 3.ª etapa", values: ["24%*2", "25.97%*2", "27.94%*2", "30.07%*2", "32.66%*2", "34.93%*2", "38.08%*2", "41.22%*2", "44.37%*2", "47.72%*2"] },
                        { label: "Daño de 4.ª etapa", values: ["25.34%*2", "27.42%*2", "29.49%*2", "32.4%*2", "34.48%*2", "36.87%*2", "40.19%*2", "43.51%*2", "46.84%*2", "50.37%*2"] },
                        { label: "Daño de 5.ª etapa", values: [90.4, 97.82, 105.23, 115.61, 123.02, 131.55, 143.41, 155.27, 167.13, 179.73], isPercent: true },
                        { label: "ATQ aéreo", values: [30, 32.46, 34.92, 38.37, 40.83, 43.66, 47.59, 51.53, 55.47, 59.65], isPercent: true },
                        { label: "Coste de resistencia ATQ aéreo", values: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5] },
                        { label: "Daño apuntado", values: [18, 19.48, 20.96, 23.02, 24.50, 26.20, 28.56, 30.92, 33.28, 35.79], isPercent: true },
                        { label: "Daño apuntado a máxima carga", values: [40.50, 43.83, 47.15, 51.80, 55.12, 58.94, 64.25, 69.56, 74.88, 80.52], isPercent: true },
                        { label: "Daño de Contraataque evasivo", values: [107.7, 116.54, 125.37, 137.73, 146.56, 156.72, 170.85, 184.98, 199.11, 214.12], isPercent: true },
                    ]
                },
            ],
            [
                {
                    nombre: "ATQ+",
                    descripcion: "ATQ +4.20%",
                    icono: require('@/assets/images/habilidades/Aalto/T_Iconpropertyredattack_UI.webp')
                },
                {
                    nombre: "ATQ+",
                    descripcion: "ATQ +1.80%",
                    icono: require('@/assets/images/habilidades/Aalto/T_Iconpropertyredattack_UI.webp')
                },
                {
                    nombre: "Truco de cambio",
                    subtitulo: "Habilidad de resonancia",
                    descripcion: `
<ul class="desc-list">
    <li>
        <span class="desc-title">Avatar de Niebla</span>
Lanza "Niebla" y 1 "Avatar de Niebla" para provocar a los objetivos circundantes. El avatar heredan una porción de los PS de Aalto y generan 6 Balas de Niebla a su alrededor, infligiendo <span class="desc-aero">Daño Aero</span>.
    </li>
    <li>
        <span class="desc-title">Balas de Niebla</span>
        Inflige <span class="desc-aero">Daño Aero</span>, considerado daño de Habilidad de resonancia.
    </li>
</ul>
`,
                    icono: require('@/assets/images/habilidades/Aalto/SP_IconQiushuiB1.webp'),
                    statsSkill: [
                        { label: "Daño de Misil de niebla", values: [30, 32.46, 34.92, 38.37, 40.83, 43.66, 47.59, 51.53, 55.47, 59.65], isPercent: true },
                        { label: "REU", values: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10], isPercent: false },
                        { label: "PS del Avatar de niebla", values: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100], isPercent: true },
                        { label: "Duración del Avatar de niebla", values: [8, 8, 8, 8, 8, 8, 8, 8, 8, 8], isPercent: false },
                        { label: "Regen. de concierto", values: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15], isPercent: false },
                    ]
                },
            ],
            [
                {
                    nombre: "Descanso a mitad del juego",
                    subtitulo: "Ataque normal",
                    descripcion: `<span class="desc-info">Aalto continuará recuperando Resistencia cuando se encuentre en el estado de <span class="desc-importante">Carrera en niebla</span> en el Circuito del Forte.</span>`,
                    icono: require('@/assets/images/habilidades/Aalto/SP_IconQiushuiD2.webp')
                },
                {
                    nombre: "Rendimiento perfecto",
                    subtitulo: "Ataque normal",
                    descripcion: `<span class="desc-info">El <span class="desc-importante">Ataque cargado</span> de Aalto siempre dará un golpe crítico, activado una vez cada 30 s.</span>`,
                    icono: require('@/assets/images/habilidades/Aalto/SP_IconQiushuiD1.webp')
                },
                {
                    nombre: "Cubierta brumosa",
                    subtitulo: "Circuito del Forte",
                    descripcion: `<span class="desc-info">Cuando Aalto pasa a través de "Niebla" o "Puerta del dilema", entra en <b>Carrera en niebla</b>.</span>
<ul class="desc-list">
    <li>
        <span class="desc-title">Carrera en niebla</span>
Velocidad de movimiento incrementada;
Durante este periodo, las "Gotas de niebla" se consumen continuamente, y por cada 1 "Gota de niebla" consumida, se genera 1 <span class="desc-importante">Bala de niebla</span>.
    </li>
    <li>
        <span class="desc-title">Gotas de niebla</span>
        Aalto puede contener hasta 6 "Gotas de niebla". Cuando <span class="desc-importante">Ataque básico</span> o <span class="desc-importante">Ataque aéreo</span> pasa a tráves de "Niebla" y golpea al objetivo, se recupera 1 "Gota de niebla".
    </li>
</ul>
`,
                    icono: require('@/assets/images/habilidades/Aalto/SP_IconQiushuiY.webp'),
                    statsSkill: [
                        { label: "Vel. de movimiento +", values: [40, 40, 40, 40, 40, 40, 40, 40, 40, 40], isPercent: true },
                        { label: "Daño de Bala de niebla", values: [30, 32.46, 34.92, 38.37, 40.83, 43.66, 47.59, 51.53, 55.47, 59.65], isPercent: true },
                    ]
                },
                {
                    nombre: "Niebla desvanecida",
                    subtitulo: "Habilidad Outro",
                    descripcion: `<span class="desc-info">El personaje entrante tiene su Daño Aero amplificado en un 23% durante 14 s o hasta que se cambie.</span>`,
                    icono: require('@/assets/images/habilidades/Aalto/SP_IconQiushuiT.webp')
                },
            ],
            [
                {
                    nombre: "ATQ+",
                    descripcion: "ATQ +4.20%",
                    icono: require('@/assets/images/habilidades/Aalto/T_Iconpropertyredattack_UI.webp')
                },
                {
                    nombre: "ATQ+",
                    descripcion: "ATQ +1.80%",
                    icono: require('@/assets/images/habilidades/Aalto/T_Iconpropertyredattack_UI.webp')
                },
                {
                    nombre: "Flor en la niebla",
                    subtitulo: "Liberación de resonancia",
                    descripcion: `<span class="desc-info">Genera una "Puerta del dilema" al frente, infligiendo <span class="desc-aero">Daño Aero</span>. Cuando las balas pasan a través de la "Puerta del dilema", el ATQ aumenta. "Puerta del dilema" dura 10 s.</span>`,
                    icono: require('@/assets/images/habilidades/Aalto/SP_IconQiushuiC1.webp'),
                    statsSkill: [
                        { label: "Daño de habilidad", values: [200, 216.4, 232.8, 255.76, 272.16, 291.02, 317.26, 343.5, 369.74, 397.62], isPercent: true },
                        { label: "ATQ de Puerta del dilema +", values: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10], isPercent: true },
                        { label: "Coste de resonancia", values: [150, 150, 150, 150, 150, 150, 150, 150, 150, 150] },
                        { label: "REU", values: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20] },
                        { label: "Regen. de concierto", values: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20], },
                    ]
                },
            ],
            [
                {
                    nombre: "Bonif. de Daño Aero+",
                    descripcion: `Bonif. de  <span class="desc-aero">Daño Aero</span> +4.20%`,
                    icono: require('@/assets/images/habilidades/Aalto/T_Iconpropertyredwind_UI.webp')
                },
                {
                    nombre: "Bonif. de Daño Aero+",
                    descripcion: `Bonif. de  <span class="desc-aero">Daño Aero</span> +1.80%`,
                    icono: require('@/assets/images/habilidades/Aalto/T_Iconpropertyredwind_UI.webp')
                },
                {
                    nombre: "Disparo finta",
                    subtitulo: "Habilidad Intro",
                    descripcion: `<span class="desc-info">Aalto aparece de la nada para realizar disparos continuos rápidos, infligiendo <span class="desc-aero">Daño Aero</span>.</span>`,
                    icono: require('@/assets/images/habilidades/Aalto/SP_IconQiushuiQTE.webp'),
                    statsSkill: [
                        { label: "Daño de 1.ª etapa", values: ["33.34%*3", "36.07%*3", "38.8%*3", "42.63%*3", "45.36%*3", "48.51%*3", "52.88%*3", "57.25%*3", "61.63%*3", "66.27%*3"], },
                        { label: "Daño de 2.ª etapa", values: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10] },
                    ]
                },
            ],
        ],
        cadenaResonancia: [
            {
                icono: require('@/assets/images/dupes/Aalto/aalto1.webp'),
                titulo: "Espectáculo de apertura del embaucador",
                subtitulo: "Cadena de Resonancia 1",
                descripcion: "El tiempo de reutilización de la habilidad de Resonancia <b>Truco de cambio</b> se reduce en 4 s."
            },
            {
                icono: require('@/assets/images/dupes/Aalto/aalto2.webp'),
                titulo: "Debut de Mistweaver",
                subtitulo: "Cadena de Resonancia 2",
                descripcion: `"Avatar de niebla" hereda 100% más PS de Aalto. Cuando Aalto ataca a objetivos provocados por el "Avatar de niebla", su ATQ se incrementa en 15%.`
            },
            {
                icono: require('@/assets/images/dupes/Aalto/aalto3.webp'),
                titulo: "Transición nebulosa",
                subtitulo: "Cadena de Resonancia 3",
                descripcion: `Cuando el <b>Ataque básico</b> o el <b>Ataque aéreo</b> de Aalto pasa a través de la "Niebla", se generarán 2 balas más, infligiendo un 50% del daño de <b>Ataque básico</b> o <b>Ataque aéreo</b>.`
            },
            {
                icono: require('@/assets/images/dupes/Aalto/aalto4.webp'),
                titulo: "Flor negra para el final",
                subtitulo: "Cadena de Resonancia 4",
                descripcion: `El daño de la habilidad de Resonancia <b>Bala de niebla</b> se incrementa en 30%; Aalto recibe 30% menos de daño en su estado de Circuito del Forte <b>Carrera en niebla</b>.`
            },
            {
                icono: require('@/assets/images/dupes/Aalto/aalto5.webp'),
                titulo: "Aplausos de los perdidos",
                subtitulo: "Cadena de Resonancia 5",
                descripcion: `En el estado de Circuito del Forte <b>Carrera en niebla</b>, la Bonif. de <span class="desc-aero">Daño Aero</span> de Aalto se incrementa en 25% durante 6 s.`
            },
            {
                icono: require('@/assets/images/dupes/Aalto/aalto6.webp'),
                titulo: "Los secretos del intermediario",
                subtitulo: "Cadena de Resonancia 6",
                descripcion: `La Liberación de resonancia <b>Flor en la niebla</b> ahora aumenta la Prob. CRIT un 8% adicional. Cuando el Ataque cargado de Aalto pasa a través de la "Puerta del dilema", el daño infligido aumenta un 50% adicional.`
            }
        ],
        stats: [
            { label: 'PS', values: [788, 854, 920, 987, 1053, 1119, 1186, 1252, 1319, 1385, 1451, 1518, 1584, 1651, 1717, 1784, 1850, 1916, 1983, 2049, 2641, 2707, 2774, 2840, 2907, 2973, 3039, 3106, 3172, 3238, 3305, 3371, 3438, 3504, 3571, 3637, 3703, 3770, 3836, 3903, 4494, 4561, 4627, 4694, 4760, 4826, 4893, 4959, 5026, 5092, 5684, 5750, 5817, 5883, 5949, 6016, 6082, 6149, 6215, 6281, 6873, 6939, 7006, 7072, 7139, 7205, 7271, 7338, 7404, 7471, 8062, 8129, 8195, 8262, 8328, 8394, 8461, 8527, 8594, 8660, 9252, 9318, 9385, 9451, 9517, 9584, 9650, 9717, 9783, 9850], icon: require('@/assets/images/stats/ps.webp') },
            { label: 'ATQ', values: [21, 22, 24, 26, 28, 29, 31, 33, 35, 36, 38, 40, 42, 44, 45, 47, 49, 51, 52, 54, 72, 73, 75, 77, 79, 80, 82, 84, 86, 88, 89, 91, 93, 95, 96, 98, 100, 102, 103, 105, 123, 125, 126, 128, 130, 132, 133, 135, 137, 139, 156, 158, 160, 162, 163, 165, 167, 169, 170, 172, 190, 191, 193, 195, 197, 199, 200, 202, 204, 206, 218, 220, 221, 223, 225, 227, 228, 230, 232, 234, 246, 248, 250, 251, 253, 255, 257, 258, 260, 262], icon: require('@/assets/images/stats/atq.webp') },
            { label: 'DEF', values: [88, 95, 102, 109, 116, 124, 131, 138, 146, 153, 160, 167, 175, 182, 189, 196, 204, 211, 218, 225, 290, 297, 304, 311, 319, 326, 333, 340, 348, 355, 362, 369, 377, 384, 391, 398, 406, 413, 420, 427, 492, 499, 506, 513, 521, 528, 535, 542, 550, 557, 621, 628, 636, 643, 650, 657, 665, 672, 679, 686, 751, 758, 765, 772, 780, 787, 794, 801, 809, 816, 880, 887, 895, 902, 909, 917, 924, 931, 938, 946, 1010, 1017, 1024, 1032, 1039, 1046, 1053, 1061, 1068, 1075], icon: require('@/assets/images/stats/def.webp') },
            { label: 'Prob. CRIT', values: [5], icon: require('@/assets/images/stats/critrate.webp'), isPercent: true },
            { label: 'Daño CRIT', values: [150], icon: require('@/assets/images/stats/critdamage.webp'), isPercent: true },
            { label: 'Regen. de energía', values: [100], icon: require('@/assets/images/stats/energyre.webp'), isPercent: true },
        ],
        bestWeapons: [
            {
                name: "Niebla estática",
                rarity: 5,
                refinement: "R1",
                percent: 100,
                img: require('@/assets/images/armas/nieblaestatica.webp'),
                desc: "La opción más viable que ofrece Prob. CRIT como stat principal, buen ATQ base y Regen. de energía.",
                efectoArma: `
            <b>Efecto:</b> Aumenta la Regen. de energía un <b>12.8%</b>. Cuando se libera la Habilidad Outro, aumenta el ATQ del Resonador entrante un <b>10%</b>, acumulándose hasta <b>1</b> veces. Este efecto dura <b>14</b> s.`,
                statsArma: [
                    { label: "ATQ", value: 587.5 },
                    { label: "Prob. CRIT", value: "24.3%" }
                ]
            },
            {
                name: "Novestallido",
                rarity: 4,
                refinement: "R5",
                percent: 83.54,
                img: require('@/assets/images/armas/novaburst.webp'),
                desc: "Opción viable para todos los resonadores, ofrece un buen bonus de ATQ pero es dependiente de mantener los 3 stacks acumulados de esquivar, (Y luego mantenerlos continuamente). El cálculo asume que mantienes el buff perfectamente durante todo el encuentro.",
                efectoArma: `
            <b>Efecto:</b> Cuando el personaje esprinta o esquiva, aumenta el ATQ un <b>8%</b>, acumulándose hasta <b>3</b> veces. Este efecto dura <b>8</b>.`,
                statsArma: [
                    { label: "ATQ", value: 412.5 },
                    { label: "ATQ%", value: "30.38%" }
                ]
            },
            {
                name: "Chorro relativista",
                rarity: 4,
                refinement: "R5",
                percent: 83.51,
                img: require('@/assets/images/armas/novaburst.webp'),
                desc: "La duración del buff en esta arma es una de las más consistentes y fiables para los DPS que utilizan pistola y escalan con ATQ. El aumento de ATQ% que otorga al lanzar tu Habilidad de Resonancia es excelente para la mayoría de los personajes, también ofrece una pequeña bonificación de Regen. de energía.",
                efectoArma: `
            <b>Efecto:</b> Al lanzar la Habilidad de resonancia, se obtienen <b>10</b> de energía de resonancia y se aumenta el ATQ en un <b>20%</b>, durante <b>16</b> s. Este efecto se puede activar cada <b>20</b> s.`,
                statsArma: [
                    { label: "ATQ", value: 462.5 },
                    { label: "ATQ%", value: "18.23%" }
                ]
            },
        ],
        tags: [
            { tipo: "rareza", valor: "4★" },
            { tipo: "elemento", valor: "Aero", icono: require("@/assets/images/elementos/icon_aero.webp") },
            { tipo: "arma", valor: "Pistolas", icono: require("@/assets/images/tipos-armas/weapon_pistolas.webp") }
        ],
        roles: [
            {
                nombre: "DPS",
                icono: require("@/assets/images/categorias/dps.webp"),
                colorClass: "dps",
                tiers: [
                    { label: "C", desc: "Torre de la adversidad" },
                    { label: "C", desc: "Olas Clamantes" }
                ]
            },
            {
                nombre: "SUB-DPS",
                icono: require("@/assets/images/categorias/subdps.webp"),
                colorClass: "sub-dps",
                tiers: [
                    { label: "C", desc: "Torre de la adversidad" },
                    { label: "C", desc: "Olas Clamantes" }
                ]
            }
        ],
        labsScore: "C",
        labsScoreTier: "tier-box-labs-c",
    },

    {
        nombre: "Baizhi",
        rareza: 4,
        elemento: "gelio",
        arma: "rectificador",
        iconoElemento: require("@/assets/images/elementos/icon_gelio.webp"),
        imagen: require("@/assets/images/perfiles-personajes/Baizhi.webp"),
        imagenPerfil: require("@/assets/images/perfiles-personajes/Baizhi.webp"),
        avatar: require("@/assets/images/personajes/icon_baizhi.webp"),
        tags: [
            { tipo: "rareza", valor: "4★" },
            { tipo: "elemento", valor: "Gelio", icono: require("@/assets/images/elementos/icon_gelio.webp") },
            { tipo: "arma", valor: "Rectificador", icono: require("@/assets/images/tipos-armas/weapon_rectificador.webp") }
        ],
        roles: [
            {
                nombre: "SOPORTE",
                icono: require("@/assets/images/categorias/support.webp"),
                colorClass: "support",
                tiers: [
                    { label: "A", desc: "Torre de la adversidad" },
                    { label: "A+", desc: "Olas Clamantes" }
                ]
            }
        ],
        labsScore: "A+",
        labsScoreTier: "tier-box-labs-aa"
    },

    {
        nombre: "Brant",
        rareza: 5,
        elemento: "fusion",
        arma: "espada",
        iconoElemento: require("@/assets/images/elementos/icon_fusion.webp"),
        imagen: require("@/assets/images/perfiles-personajes/Brant.webp"),
        imagenPerfil: require("@/assets/images/perfiles-personajes/Brant.webp"),
        avatar: require("@/assets/images/personajes/icon_brant.webp"),
        tags: [
            { tipo: "rareza", valor: "5★" },
            { tipo: "elemento", valor: "Fusion", icono: require("@/assets/images/elementos/icon_fusion.webp") },
            { tipo: "arma", valor: "Espada", icono: require("@/assets/images/tipos-armas/weapon_espada.webp") }
        ],
        roles: [
            {
                nombre: "DPS",
                icono: require("@/assets/images/categorias/dps.webp"),
                colorClass: "dps",
                tiers: [
                    { label: "A+", desc: "Torre de la adversidad" },
                    { label: "A+", desc: "Olas Clamantes" }
                ]
            },
            {
                nombre: "SUB-DPS",
                icono: require("@/assets/images/categorias/subdps.webp"),
                colorClass: "sub-dps",
                tiers: [
                    { label: "A+", desc: "Torre de la adversidad" },
                    { label: "S", desc: "Olas Clamantes" }
                ]
            }
        ],
        labsScore: "A+",
        labsScoreTier: "tier-box-labs-aa"
    },

    {
        nombre: "Calcharo",
        rareza: 5,
        elemento: "electro",
        arma: "mandoble",
        iconoElemento: require("@/assets/images/elementos/icon_electro.webp"),
        imagen: require("@/assets/images/perfiles-personajes/Calcharo.webp"),
        imagenPerfil: require("@/assets/images/perfiles-personajes/Calcharo.webp"),
        avatar: require("@/assets/images/personajes/icon_calcharo.webp"),
        tags: [
            { tipo: "rareza", valor: "5★" },
            { tipo: "elemento", valor: "Electro", icono: require("@/assets/images/elementos/icon_electro.webp") },
            { tipo: "arma", valor: "Mandoble", icono: require("@/assets/images/tipos-armas/weapon_mandoble.webp") }
        ],
        roles: [
            {
                nombre: "DPS",
                icono: require("@/assets/images/categorias/dps.webp"),
                colorClass: "dps",
                tiers: [
                    { label: "B", desc: "Torre de la adversidad" },
                    { label: "C", desc: "Olas Clamantes" }
                ]
            }
        ],
        labsScore: "B",
        labsScoreTier: "tier-box-labs-b"
    },

    {
        nombre: "Camellya",
        rareza: 5,
        elemento: "destrucción",
        arma: "espada",
        iconoElemento: require("@/assets/images/elementos/icon_havoc.webp"),
        imagen: require("@/assets/images/perfiles-personajes/Camellya.webp"),
        imagenPerfil: require("@/assets/images/perfiles-personajes/Camellya.webp"),
        avatar: require("@/assets/images/personajes/icon_camellya.webp"),
        tags: [
            { tipo: "rareza", valor: "5★" },
            { tipo: "elemento", valor: "Destrucción", icono: require("@/assets/images/elementos/icon_havoc.webp") },
            { tipo: "arma", valor: "Espada", icono: require("@/assets/images/tipos-armas/weapon_espada.webp") }
        ],
        roles: [
            {
                nombre: "DPS",
                icono: require("@/assets/images/categorias/dps.webp"),
                colorClass: "dps",
                tiers: [
                    { label: "S", desc: "Torre de la adversidad" },
                    { label: "S+", desc: "Olas Clamantes" }
                ]
            }
        ],
        labsScore: "S+",
        labsScoreTier: "tier-box-labs-ss"
    },

    {
        nombre: "Cantarella",
        rareza: 5,
        elemento: "destrucción",
        arma: "rectificador",
        iconoElemento: require("@/assets/images/elementos/icon_havoc.webp"),
        imagen: require("@/assets/images/perfiles-personajes/Cantarella.webp"),
        imagenPerfil: require("@/assets/images/perfiles-personajes/Cantarella.webp"),
        avatar: require("@/assets/images/personajes/icon_cantarella.webp"),
        tags: [
            { tipo: "rareza", valor: "5★" },
            { tipo: "elemento", valor: "Destrucción", icono: require("@/assets/images/elementos/icon_havoc.webp") },
            { tipo: "arma", valor: "Rectificador", icono: require("@/assets/images/tipos-armas/weapon_rectificador.webp") }
        ],
        roles: [
            {
                nombre: "SUB-DPS",
                icono: require("@/assets/images/categorias/subdps.webp"),
                colorClass: "sub-dps",
                tiers: [
                    { label: "A", desc: "Torre de la adversidad" },
                    { label: "A", desc: "Olas Clamantes" }
                ]
            }
        ],
        labsScore: "A",
        labsScoreTier: "tier-box-labs-a"
    },

    {
        nombre: "Carlotta",
        rareza: 5,
        elemento: "gelio",
        arma: "pistolas",
        iconoElemento: require("@/assets/images/elementos/icon_gelio.webp"),
        imagen: require("@/assets/images/perfiles-personajes/Carlotta.webp"),
        imagenPerfil: require("@/assets/images/perfiles-personajes/Carlotta.webp"),
        avatar: require("@/assets/images/personajes/icon_carlotta.webp"),
        tags: [
            { tipo: "rareza", valor: "5★" },
            { tipo: "elemento", valor: "Gelio", icono: require("@/assets/images/elementos/icon_gelio.webp") },
            { tipo: "arma", valor: "Pistolas", icono: require("@/assets/images/tipos-armas/weapon_pistolas.webp") }
        ],
        roles: [
            {
                nombre: "DPS",
                icono: require("@/assets/images/categorias/dps.webp"),
                colorClass: "dps",
                tiers: [
                    { label: "S+", desc: "Torre de la adversidad" },
                    { label: "S", desc: "Olas Clamantes" }
                ]
            }
        ],
        labsScore: "S+",
        labsScoreTier: "tier-box-labs-ss"
    },

    {
        nombre: "Cartethyia",
        nueva: true,
        rareza: 5,
        elemento: "aero",
        arma: "espada",
        iconoElemento: require("@/assets/images/elementos/icon_aero.webp"),
        imagen: require("@/assets/images/perfiles-personajes/Cartethyia.webp"),
        imagenPerfil: require("@/assets/images/perfiles-personajes/Cartethyia.webp"),
        avatar: require("@/assets/images/personajes/icon_cartethyia.webp"),
        tags: [
            { tipo: "rareza", valor: "5★" },
            { tipo: "elemento", valor: "Aero", icono: require("@/assets/images/elementos/icon_aero.webp") },
            { tipo: "arma", valor: "Espada", icono: require("@/assets/images/tipos-armas/weapon_espada.webp") }
        ],
        roles: [
            {
                nombre: "DPS",
                icono: require("@/assets/images/categorias/dps.webp"),
                colorClass: "dps",
                tiers: [
                    { label: "S+", desc: "Torre de la adversidad" },
                    { label: "S", desc: "Olas Clamantes" }
                ]
            }
        ],
        labsScore: "S+",
        labsScoreTier: "tier-box-labs-ss"
    },

    {
        nombre: "Changli",
        rareza: 5,
        elemento: "fusion",
        arma: "espada",
        iconoElemento: require("@/assets/images/elementos/icon_fusion.webp"),
        imagen: require("@/assets/images/perfiles-personajes/Changli.webp"),
        imagenPerfil: require("@/assets/images/perfiles-personajes/Changli.webp"),
        avatar: require("@/assets/images/personajes/icon_changli.webp"),
        tags: [
            { tipo: "rareza", valor: "5★" },
            { tipo: "elemento", valor: "Fusion", icono: require("@/assets/images/elementos/icon_fusion.webp") },
            { tipo: "arma", valor: "Espada", icono: require("@/assets/images/tipos-armas/weapon_espada.webp") }
        ],
        roles: [
            {
                nombre: "DPS",
                icono: require("@/assets/images/categorias/dps.webp"),
                colorClass: "dps",
                tiers: [
                    { label: "A+", desc: "Torre de la adversidad" },
                    { label: "S+", desc: "Olas Clamantes" }
                ]
            },
            {
                nombre: "SUB-DPS",
                icono: require("@/assets/images/categorias/subdps.webp"),
                colorClass: "sub-dps",
                tiers: [
                    { label: "A+", desc: "Torre de la adversidad" },
                    { label: "A+", desc: "Olas Clamantes" }
                ]
            }
        ],
        labsScore: "A+",
        labsScoreTier: "tier-box-labs-aa"
    },

    {
        nombre: "Chixia",
        rareza: 4,
        elemento: "fusion",
        arma: "pistolas",
        iconoElemento: require("@/assets/images/elementos/icon_fusion.webp"),
        imagen: require("@/assets/images/perfiles-personajes/Chixia.webp"),
        imagenPerfil: require("@/assets/images/perfiles-personajes/Chixia.webp"),
        avatar: require("@/assets/images/personajes/icon_chixia.webp"),
        tags: [
            { tipo: "rareza", valor: "4★" },
            { tipo: "elemento", valor: "Fusion", icono: require("@/assets/images/elementos/icon_fusion.webp") },
            { tipo: "arma", valor: "Pistolas", icono: require("@/assets/images/tipos-armas/weapon_pistolas.webp") }
        ],
        roles: [
            {
                nombre: "DPS",
                icono: require("@/assets/images/categorias/dps.webp"),
                colorClass: "dps",
                tiers: [
                    { label: "B", desc: "Torre de la adversidad" },
                    { label: "B", desc: "Olas Clamantes" }
                ]
            }
        ],
        labsScore: "B",
        labsScoreTier: "tier-box-labs-b"
    },

    {
        nombre: "Ciaccona",
        rareza: 5,
        elemento: "aero",
        arma: "pistolas",
        iconoElemento: require("@/assets/images/elementos/icon_aero.webp"),
        imagen: require("@/assets/images/perfiles-personajes/Ciaccona.webp"),
        imagenPerfil: require("@/assets/images/perfiles-personajes/Ciaccona.webp"),
        avatar: require("@/assets/images/personajes/icon_ciaccona.webp"),
        tags: [
            { tipo: "rareza", valor: "5★" },
            { tipo: "elemento", valor: "Aero", icono: require("@/assets/images/elementos/icon_aero.webp") },
            { tipo: "arma", valor: "Pistolas", icono: require("@/assets/images/tipos-armas/weapon_pistolas.webp") }
        ],
        roles: [
            {
                nombre: "DPS",
                icono: require("@/assets/images/categorias/dps.webp"),
                colorClass: "dps",
                tiers: [
                    { label: "A+", desc: "Torre de la adversidad" },
                    { label: "S", desc: "Olas Clamantes" }
                ]
            },
            {
                nombre: "SUB-DPS",
                icono: require("@/assets/images/categorias/subdps.webp"),
                colorClass: "sub-dps",
                tiers: [
                    { label: "S+", desc: "Torre de la adversidad" },
                    { label: "S", desc: "Olas Clamantes" }
                ]
            }
        ],
        labsScore: "S",
        labsScoreTier: "tier-box-labs-s"
    },

    {
        nombre: "Danjin",
        rareza: 4,
        elemento: "destrucción",
        arma: "espada",
        iconoElemento: require("@/assets/images/elementos/icon_havoc.webp"),
        imagen: require("@/assets/images/perfiles-personajes/Danjin.webp"),
        imagenPerfil: require("@/assets/images/perfiles-personajes/Danjin.webp"),
        avatar: require("@/assets/images/personajes/icon_danjin.webp"),
        tags: [
            { tipo: "rareza", valor: "4★" },
            { tipo: "elemento", valor: "Destrucción", icono: require("@/assets/images/elementos/icon_havoc.webp") },
            { tipo: "arma", valor: "Espada", icono: require("@/assets/images/tipos-armas/weapon_espada.webp") }
        ],
        roles: [
            {
                nombre: "DPS",
                icono: require("@/assets/images/categorias/dps.webp"),
                colorClass: "dps",
                tiers: [
                    { label: "A", desc: "Torre de la adversidad" },
                    { label: "A", desc: "Olas Clamantes" }
                ]
            },
            {
                nombre: "SUB-DPS",
                icono: require("@/assets/images/categorias/subdps.webp"),
                colorClass: "sub-dps",
                tiers: [
                    { label: "A", desc: "Torre de la adversidad" },
                    { label: "A", desc: "Olas Clamantes" }
                ]
            }
        ],
        labsScore: "A",
        labsScoreTier: "tier-box-labs-a"
    },

    {
        nombre: "Encore",
        rareza: 5,
        elemento: "fusion",
        arma: "rectificador",
        iconoElemento: require("@/assets/images/elementos/icon_fusion.webp"),
        imagen: require("@/assets/images/perfiles-personajes/Encore.webp"),
        imagenPerfil: require("@/assets/images/perfiles-personajes/Encore.webp"),
        avatar: require("@/assets/images/personajes/icon_encore.webp"),
        tags: [
            { tipo: "rareza", valor: "5★" },
            { tipo: "elemento", valor: "Fusion", icono: require("@/assets/images/elementos/icon_fusion.webp") },
            { tipo: "arma", valor: "Rectificador", icono: require("@/assets/images/tipos-armas/weapon_rectificador.webp") }
        ],
        roles: [
            {
                nombre: "DPS",
                icono: require("@/assets/images/categorias/dps.webp"),
                colorClass: "dps",
                tiers: [
                    { label: "A+", desc: "Torre de la adversidad" },
                    { label: "A", desc: "Olas Clamantes" }
                ]
            }
        ],
        labsScore: "A+",
        labsScoreTier: "tier-box-labs-aa"
    },

    {
        nombre: "Jianxin",
        rareza: 5,
        elemento: "aero",
        arma: "brazales",
        iconoElemento: require("@/assets/images/elementos/icon_aero.webp"),
        imagen: require("@/assets/images/perfiles-personajes/Jianxin.webp"),
        imagenPerfil: require("@/assets/images/perfiles-personajes/Jianxin.webp"),
        avatar: require("@/assets/images/personajes/icon_jianxin.webp"),
        tags: [
            { tipo: "rareza", valor: "5★" },
            { tipo: "elemento", valor: "Aero", icono: require("@/assets/images/elementos/icon_aero.webp") },
            { tipo: "arma", valor: "Brazales", icono: require("@/assets/images/tipos-armas/weapon_brazales.webp") }
        ],
        roles: [
            {
                nombre: "SUB-DPS",
                icono: require("@/assets/images/categorias/subdps.webp"),
                colorClass: "sub-dps",
                tiers: [
                    { label: "C", desc: "Torre de la adversidad" },
                    { label: "B", desc: "Olas Clamantes" }
                ]
            }
        ],
        labsScore: "B",
        labsScoreTier: "tier-box-labs-b"
    },

    {
        nombre: "Jinhsi",
        rareza: 5,
        elemento: "espectro",
        arma: "mandoble",
        iconoElemento: require("@/assets/images/elementos/icon_espectro.webp"),
        imagen: require("@/assets/images/perfiles-personajes/Jinhsi.webp"),
        imagenPerfil: require("@/assets/images/perfiles-personajes/Jinhsi.webp"),
        avatar: require("@/assets/images/personajes/icon_jinhsi.webp"),
        tags: [
            { tipo: "rareza", valor: "5★" },
            { tipo: "elemento", valor: "Espectro", icono: require("@/assets/images/elementos/icon_espectro.webp") },
            { tipo: "arma", valor: "Mandoble", icono: require("@/assets/images/tipos-armas/weapon_mandoble.webp") }
        ],
        roles: [
            {
                nombre: "DPS",
                icono: require("@/assets/images/categorias/dps.webp"),
                colorClass: "dps",
                tiers: [
                    { label: "S", desc: "Torre de la adversidad" },
                    { label: "A+", desc: "Olas Clamantes" }
                ]
            }
        ],
        labsScore: "S",
        labsScoreTier: "tier-box-labs-s"
    },

    {
        nombre: "Jiyan",
        rareza: 5,
        elemento: "aero",
        arma: "mandoble",
        iconoElemento: require("@/assets/images/elementos/icon_aero.webp"),
        imagen: require("@/assets/images/perfiles-personajes/Jiyan.webp"),
        imagenPerfil: require("@/assets/images/perfiles-personajes/Jiyan.webp"),
        avatar: require("@/assets/images/personajes/icon_jiyan.webp"),
        tags: [
            { tipo: "rareza", valor: "5★" },
            { tipo: "elemento", valor: "Aero", icono: require("@/assets/images/elementos/icon_aero.webp") },
            { tipo: "arma", valor: "Mandoble", icono: require("@/assets/images/tipos-armas/weapon_mandoble.webp") }
        ],
        roles: [
            {
                nombre: "DPS",
                icono: require("@/assets/images/categorias/dps.webp"),
                colorClass: "dps",
                tiers: [
                    { label: "A+", desc: "Torre de la adversidad" },
                    { label: "S+", desc: "Olas Clamantes" }
                ]
            }
        ],
        labsScore: "S",
        labsScoreTier: "tier-box-labs-s"
    },

    {
        nombre: "Lingyang",
        rareza: 5,
        elemento: "gelio",
        arma: "brazales",
        iconoElemento: require("@/assets/images/elementos/icon_gelio.webp"),
        imagen: require("@/assets/images/perfiles-personajes/Lingyang.webp"),
        imagenPerfil: require("@/assets/images/perfiles-personajes/Lingyang.webp"),
        avatar: require("@/assets/images/personajes/icon_ling.webp"),
        tags: [
            { tipo: "rareza", valor: "5★" },
            { tipo: "elemento", valor: "Gelio", icono: require("@/assets/images/elementos/icon_gelio.webp") },
            { tipo: "arma", valor: "Brazales", icono: require("@/assets/images/tipos-armas/weapon_brazales.webp") }
        ],
        roles: [
            {
                nombre: "DPS",
                icono: require("@/assets/images/categorias/dps.webp"),
                colorClass: "dps",
                tiers: [
                    { label: "C", desc: "Torre de la adversidad" },
                    { label: "C", desc: "Olas Clamantes" }
                ]
            }
        ],
        labsScore: "C",
        labsScoreTier: "tier-box-labs-c"
    },

    {
        nombre: "Lumi",
        rareza: 4,
        elemento: "electro",
        arma: "mandoble",
        iconoElemento: require("@/assets/images/elementos/icon_electro.webp"),
        imagen: require("@/assets/images/perfiles-personajes/Lumi.webp"),
        imagenPerfil: require("@/assets/images/perfiles-personajes/Lumi.webp"),
        avatar: require("@/assets/images/personajes/icon_lumi.webp"),
        tags: [
            { tipo: "rareza", valor: "4★" },
            { tipo: "elemento", valor: "Electro", icono: require("@/assets/images/elementos/icon_electro.webp") },
            { tipo: "arma", valor: "Mandoble", icono: require("@/assets/images/tipos-armas/weapon_mandoble.webp") }
        ],
        roles: [
            {
                nombre: "SUB-DPS",
                icono: require("@/assets/images/categorias/subdps.webp"),
                colorClass: "sub-dps",
                tiers: [
                    { label: "C", desc: "Torre de la adversidad" },
                    { label: "C", desc: "Olas Clamantes" }
                ]
            }
        ],
        labsScore: "C",
        labsScoreTier: "tier-box-labs-c"
    },

    {
        nombre: "Mortefi",
        rareza: 4,
        elemento: "fusion",
        arma: "pistolas",
        iconoElemento: require("@/assets/images/elementos/icon_fusion.webp"),
        imagen: require("@/assets/images/perfiles-personajes/Mortefi.webp"),
        imagenPerfil: require("@/assets/images/perfiles-personajes/Mortefi.webp"),
        avatar: require("@/assets/images/personajes/icon_mortefi.webp"),
        tags: [
            { tipo: "rareza", valor: "4★" },
            { tipo: "elemento", valor: "Fusion", icono: require("@/assets/images/elementos/icon_fusion.webp") },
            { tipo: "arma", valor: "Pistolas", icono: require("@/assets/images/tipos-armas/weapon_pistolas.webp") }
        ],
        roles: [
            {
                nombre: "SUB-DPS",
                icono: require("@/assets/images/categorias/subdps.webp"),
                colorClass: "sub-dps",
                tiers: [
                    { label: "S", desc: "Torre de la adversidad" },
                    { label: "S", desc: "Olas Clamantes" }
                ]
            }
        ],
        labsScore: "S",
        labsScoreTier: "tier-box-labs-s"
    },

    {
        nombre: "Phoebe",
        rareza: 5,
        elemento: "espectro",
        arma: "rectificador",
        iconoElemento: require("@/assets/images/elementos/icon_espectro.webp"),
        imagen: require("@/assets/images/perfiles-personajes/Phoebe.webp"),
        imagenPerfil: require("@/assets/images/perfiles-personajes/Phoebe.webp"),
        avatar: require("@/assets/images/personajes/icon_phoebe.webp"),
        tags: [
            { tipo: "rareza", valor: "5★" },
            { tipo: "elemento", valor: "Espectro", icono: require("@/assets/images/elementos/icon_espectro.webp") },
            { tipo: "arma", valor: "Rectificador", icono: require("@/assets/images/tipos-armas/weapon_rectificador.webp") }
        ],
        roles: [
            {
                nombre: "DPS",
                icono: require("@/assets/images/categorias/dps.webp"),
                colorClass: "dps",
                tiers: [
                    { label: "S", desc: "Torre de la adversidad" },
                    { label: "S", desc: "Olas Clamantes" }
                ]
            },
            {
                nombre: "SUB-DPS",
                icono: require("@/assets/images/categorias/subdps.webp"),
                colorClass: "sub-dps",
                tiers: [
                    { label: "S+", desc: "Torre de la adversidad" },
                    { label: "S", desc: "Olas Clamantes" }
                ]
            }
        ],
        labsScore: "S+",
        labsScoreTier: "tier-box-labs-ss"
    },

    {
        nombre: "Roccia",
        rareza: 5,
        elemento: "destrucción",
        arma: "brazales",
        iconoElemento: require("@/assets/images/elementos/icon_havoc.webp"),
        imagen: require("@/assets/images/perfiles-personajes/Roccia.webp"),
        imagenPerfil: require("@/assets/images/perfiles-personajes/Roccia.webp"),
        avatar: require("@/assets/images/personajes/icon_roccia.webp"),
        tags: [
            { tipo: "rareza", valor: "5★" },
            { tipo: "elemento", valor: "Destrucción", icono: require("@/assets/images/elementos/icon_havoc.webp") },
            { tipo: "arma", valor: "Brazales", icono: require("@/assets/images/tipos-armas/weapon_brazales.webp") }
        ],
        roles: [
            {
                nombre: "SUB-DPS",
                icono: require("@/assets/images/categorias/subdps.webp"),
                colorClass: "sub-dps",
                tiers: [
                    { label: "A+", desc: "Torre de la adversidad" },
                    { label: "S+", desc: "Olas Clamantes" }
                ]
            }
        ],
        labsScore: "S",
        labsScoreTier: "tier-box-labs-s"
    },

    {
        nombre: "Rover (Aero)",
        rareza: 5,
        elemento: "aero",
        arma: "espada",
        iconoElemento: require("@/assets/images/elementos/icon_aero.webp"),
        imagen: require("@/assets/images/perfiles-personajes/Rover.webp"),
        imagenPerfil: require("@/assets/images/perfiles-personajes/Rover.webp"),
        avatar: require("@/assets/images/personajes/icon_rover.webp"),
        tags: [
            { tipo: "rareza", valor: "5★" },
            { tipo: "elemento", valor: "Aero", icono: require("@/assets/images/elementos/icon_aero.webp") },
            { tipo: "arma", valor: "Espada", icono: require("@/assets/images/tipos-armas/weapon_espada.webp") }
        ],
        roles: [
            {
                nombre: "SOPORTE",
                icono: require("@/assets/images/categorias/support.webp"),
                colorClass: "support",
                tiers: [
                    { label: "A+", desc: "Torre de la adversidad" },
                    { label: "A", desc: "Olas Clamantes" }
                ]
            }
        ],
        labsScore: "A+",
        labsScoreTier: "tier-box-labs-aa"
    },

    {
        nombre: "Rover (Destrucción)",
        rareza: 5,
        elemento: "destrucción",
        arma: "espada",
        iconoElemento: require("@/assets/images/elementos/icon_havoc.webp"),
        imagen: require("@/assets/images/perfiles-personajes/Rover.webp"),
        imagenPerfil: require("@/assets/images/perfiles-personajes/Rover.webp"),
        avatar: require("@/assets/images/personajes/icon_rover.webp"),
        tags: [
            { tipo: "rareza", valor: "5★" },
            { tipo: "elemento", valor: "Destrucción", icono: require("@/assets/images/elementos/icon_havoc.webp") },
            { tipo: "arma", valor: "Espada", icono: require("@/assets/images/tipos-armas/weapon_espada.webp") }
        ],
        roles: [
            {
                nombre: "DPS",
                icono: require("@/assets/images/categorias/dps.webp"),
                colorClass: "dps",
                tiers: [
                    { label: "A+", desc: "Torre de la adversidad" },
                    { label: "A+", desc: "Olas Clamantes" }
                ]
            }
        ],
        labsScore: "A+",
        labsScoreTier: "tier-box-labs-aa"
    },

    {
        nombre: "Rover (Espectro)",
        rareza: 5,
        elemento: "espectro",
        arma: "espada",
        iconoElemento: require("@/assets/images/elementos/icon_espectro.webp"),
        imagen: require("@/assets/images/perfiles-personajes/Rover.webp"),
        imagenPerfil: require("@/assets/images/perfiles-personajes/Rover.webp"),
        avatar: require("@/assets/images/personajes/icon_rover.webp"),
        tags: [
            { tipo: "rareza", valor: "5★" },
            { tipo: "elemento", valor: "Espectro", icono: require("@/assets/images/elementos/icon_espectro.webp") },
            { tipo: "arma", valor: "Espada", icono: require("@/assets/images/tipos-armas/weapon_espada.webp") }
        ],
        roles: [
            {
                nombre: "SUB-DPS",
                icono: require("@/assets/images/categorias/subdps.webp"),
                colorClass: "sub-dps",
                tiers: [
                    { label: "A", desc: "Torre de la adversidad" },
                    { label: "A", desc: "Olas Clamantes" }
                ]
            },
            {
                nombre: "SOPORTE",
                icono: require("@/assets/images/categorias/support.webp"),
                colorClass: "support",
                tiers: [
                    { label: "A+", desc: "Torre de la adversidad" },
                    { label: "A+", desc: "Olas Clamantes" }
                ]
            }
        ],
        labsScore: "A+",
        labsScoreTier: "tier-box-labs-aa"
    },

    {
        nombre: "Sanhua",
        rareza: 4,
        elemento: "gelio",
        arma: "espada",
        iconoElemento: require("@/assets/images/elementos/icon_gelio.webp"),
        imagen: require("@/assets/images/perfiles-personajes/sanhua.webp"),
        imagenPerfil: require("@/assets/images/perfiles-personajes/sanhua.webp"),
        avatar: require("@/assets/images/personajes/icon_sanhua.webp"),
        tags: [
            { tipo: "rareza", valor: "4★" },
            { tipo: "elemento", valor: "Gelio", icono: require("@/assets/images/elementos/icon_gelio.webp") },
            { tipo: "arma", valor: "Espada", icono: require("@/assets/images/tipos-armas/weapon_espada.webp") }
        ],
        roles: [
            {
                nombre: "SUB-DPS",
                icono: require("@/assets/images/categorias/subdps.webp"),
                colorClass: "sub-dps",
                tiers: [
                    { label: "S+", desc: "Torre de la adversidad" },
                    { label: "S+", desc: "Olas Clamantes" }
                ]
            }
        ],
        labsScore: "S+",
        labsScoreTier: "tier-box-labs-ss"
    },

    {
        nombre: "Taoqi",
        rareza: 4,
        elemento: "destrucción",
        arma: "mandoble",
        iconoElemento: require("@/assets/images/elementos/icon_havoc.webp"),
        imagen: require("@/assets/images/perfiles-personajes/Taoqi.webp"),
        imagenPerfil: require("@/assets/images/perfiles-personajes/Taoqi.webp"),
        avatar: require("@/assets/images/personajes/icon_taoqi.webp"),
        tags: [
            { tipo: "rareza", valor: "4★" },
            { tipo: "elemento", valor: "Destrucción", icono: require("@/assets/images/elementos/icon_havoc.webp") },
            { tipo: "arma", valor: "Mandoble", icono: require("@/assets/images/tipos-armas/weapon_mandoble.webp") }
        ],
        roles: [
            {
                nombre: "SUB-DPS",
                icono: require("@/assets/images/categorias/subdps.webp"),
                colorClass: "sub-dps",
                tiers: [
                    { label: "B", desc: "Torre de la adversidad" },
                    { label: "C", desc: "Olas Clamantes" }
                ]
            }
        ],
        labsScore: "B",
        labsScoreTier: "tier-box-labs-b"
    },

    {
        nombre: "Shorekeeper",
        rareza: 5,
        elemento: "espectro",
        arma: "rectificador",
        iconoElemento: require("@/assets/images/elementos/icon_espectro.webp"),
        imagen: require("@/assets/images/perfiles-personajes/Shorekeeper.webp"),
        imagenPerfil: require("@/assets/images/perfiles-personajes/Shorekeeper.webp"),
        avatar: require("@/assets/images/personajes/icon_shorekeeper.webp"),
        tags: [
            { tipo: "rareza", valor: "5★" },
            { tipo: "elemento", valor: "Espectro", icono: require("@/assets/images/elementos/icon_espectro.webp") },
            { tipo: "arma", valor: "Rectificador", icono: require("@/assets/images/tipos-armas/weapon_rectificador.webp") }
        ],
        roles: [
            {
                nombre: "SOPORTE",
                icono: require("@/assets/images/categorias/support.webp"),
                colorClass: "support",
                tiers: [
                    { label: "S+", desc: "Torre de la adversidad" },
                    { label: "S+", desc: "Olas Clamantes" }
                ]
            }
        ],
        labsScore: "S+",
        labsScoreTier: "tier-box-labs-ss"
    },

    {
        nombre: "Verina",
        rareza: 5,
        elemento: "espectro",
        arma: "rectificador",
        iconoElemento: require("@/assets/images/elementos/icon_espectro.webp"),
        imagen: require("@/assets/images/perfiles-personajes/Verina.webp"),
        imagenPerfil: require("@/assets/images/perfiles-personajes/Verina.webp"),
        avatar: require("@/assets/images/personajes/icon_verina.webp"),
        tags: [
            { tipo: "rareza", valor: "5★" },
            { tipo: "elemento", valor: "Espectro", icono: require("@/assets/images/elementos/icon_espectro.webp") },
            { tipo: "arma", valor: "Rectificador", icono: require("@/assets/images/tipos-armas/weapon_rectificador.webp") }
        ],
        roles: [
            {
                nombre: "SOPORTE",
                icono: require("@/assets/images/categorias/support.webp"),
                colorClass: "support",
                tiers: [
                    { label: "S+", desc: "Torre de la adversidad" },
                    { label: "S+", desc: "Olas Clamantes" }
                ]
            }
        ],
        labsScore: "S+",
        labsScoreTier: "tier-box-labs-ss"
    },

    {
        nombre: "Xiangli Yao",
        rareza: 5,
        elemento: "electro",
        arma: "brazales",
        iconoElemento: require("@/assets/images/elementos/icon_electro.webp"),
        imagen: require("@/assets/images/perfiles-personajes/Xiangli Yao.webp"),
        imagenPerfil: require("@/assets/images/perfiles-personajes/Xiangli Yao.webp"),
        avatar: require("@/assets/images/personajes/icon_xiang.webp"),
        tags: [
            { tipo: "rareza", valor: "5★" },
            { tipo: "elemento", valor: "Electro", icono: require("@/assets/images/elementos/icon_electro.webp") },
            { tipo: "arma", valor: "Brazales", icono: require("@/assets/images/tipos-armas/weapon_brazales.webp") }
        ],
        roles: [
            {
                nombre: "DPS",
                icono: require("@/assets/images/categorias/dps.webp"),
                colorClass: "dps",
                tiers: [
                    { label: "A+", desc: "Torre de la adversidad" },
                    { label: "A+", desc: "Olas Clamantes" }
                ]
            }
        ],
        labsScore: "A+",
        labsScoreTier: "tier-box-labs-aa"
    },

    {
        nombre: "Yangyang",
        rareza: 4,
        elemento: "aero",
        arma: "espada",
        iconoElemento: require("@/assets/images/elementos/icon_aero.webp"),
        imagen: require("@/assets/images/perfiles-personajes/Yangyang.webp"),
        imagenPerfil: require("@/assets/images/perfiles-personajes/Yangyang.webp"),
        avatar: require("@/assets/images/personajes/icon_yangyang.webp"),
        tags: [
            { tipo: "rareza", valor: "4★" },
            { tipo: "elemento", valor: "Aero", icono: require("@/assets/images/elementos/icon_aero.webp") },
            { tipo: "arma", valor: "Espada", icono: require("@/assets/images/tipos-armas/weapon_espada.webp") }
        ],
        roles: [
            {
                nombre: "SUB-DPS",
                icono: require("@/assets/images/categorias/subdps.webp"),
                colorClass: "sub-dps",
                tiers: [
                    { label: "B", desc: "Torre de la adversidad" },
                    { label: "A+", desc: "Olas Clamantes" }
                ]
            }
        ],
        labsScore: "A",
        labsScoreTier: "tier-box-labs-a"
    },

    {
        nombre: "Yinlin",
        rareza: 5,
        elemento: "electro",
        arma: "rectificador",
        iconoElemento: require("@/assets/images/elementos/icon_electro.webp"),
        imagen: require("@/assets/images/perfiles-personajes/Yinlin.webp"),
        imagenPerfil: require("@/assets/images/perfiles-personajes/Yinlin.webp"),
        avatar: require("@/assets/images/personajes/icon_yinlin.webp"),
        tags: [
            { tipo: "rareza", valor: "5★" },
            { tipo: "elemento", valor: "Electro", icono: require("@/assets/images/elementos/icon_electro.webp") },
            { tipo: "arma", valor: "Rectificador", icono: require("@/assets/images/tipos-armas/weapon_rectificador.webp") }
        ],
        roles: [
            {
                nombre: "SUB-DPS",
                icono: require("@/assets/images/categorias/subdps.webp"),
                colorClass: "sub-dps",
                tiers: [
                    { label: "A", desc: "Torre de la adversidad" },
                    { label: "A+", desc: "Olas Clamantes" }
                ]
            }
        ],
        labsScore: "A+",
        labsScoreTier: "tier-box-labs-aa"
    },

    {
        nombre: "Youhu",
        rareza: 4,
        elemento: "gelio",
        arma: "brazales",
        iconoElemento: require("@/assets/images/elementos/icon_gelio.webp"),
        imagen: require("@/assets/images/perfiles-personajes/Youhu.webp"),
        imagenPerfil: require("@/assets/images/perfiles-personajes/Youhu.webp"),
        avatar: require("@/assets/images/personajes/icon_youhu.webp"),
        tags: [
            { tipo: "rareza", valor: "4★" },
            { tipo: "elemento", valor: "Gelio", icono: require("@/assets/images/elementos/icon_gelio.webp") },
            { tipo: "arma", valor: "Brazales", icono: require("@/assets/images/tipos-armas/weapon_brazales.webp") }
        ],
        roles: [
            {
                nombre: "SOPORTE",
                icono: require("@/assets/images/categorias/support.webp"),
                colorClass: "support",
                tiers: [
                    { label: "B", desc: "Torre de la adversidad" },
                    { label: "C", desc: "Olas Clamantes" }
                ]
            }
        ],
        labsScore: "B",
        labsScoreTier: "tier-box-labs-b"
    },

    {
        nombre: "Yuanwu",
        rareza: 4,
        elemento: "electro",
        arma: "brazales",
        iconoElemento: require("@/assets/images/elementos/icon_electro.webp"),
        imagen: require("@/assets/images/perfiles-personajes/Yuanwu.webp"),
        imagenPerfil: require("@/assets/images/perfiles-personajes/Yuanwu.webp"),
        avatar: require("@/assets/images/personajes/icon_yuanwu.webp"),
        tags: [
            { tipo: "rareza", valor: "4★" },
            { tipo: "elemento", valor: "Electro", icono: require("@/assets/images/elementos/icon_electro.webp") },
            { tipo: "arma", valor: "Brazales", icono: require("@/assets/images/tipos-armas/weapon_brazales.webp") }
        ],
        roles: [
            {
                nombre: "SOPORTE",
                icono: require("@/assets/images/categorias/support.webp"),
                colorClass: "support",
                tiers: [
                    { label: "C", desc: "Torre de la adversidad" },
                    { label: "C", desc: "Olas Clamantes" }
                ]
            }
        ],
        labsScore: "C",
        labsScoreTier: "tier-box-labs-c"
    },

    {
        nombre: "Zani",
        rareza: 5,
        elemento: "espectro",
        arma: "brazales",
        iconoElemento: require("@/assets/images/elementos/icon_espectro.webp"),
        imagen: require("@/assets/images/perfiles-personajes/Zani.webp"),
        imagenPerfil: require("@/assets/images/perfiles-personajes/Zani.webp"),
        avatar: require("@/assets/images/personajes/icon_zani.webp"),
        tags: [
            { tipo: "rareza", valor: "5★" },
            { tipo: "elemento", valor: "Espectro", icono: require("@/assets/images/elementos/icon_espectro.webp") },
            { tipo: "arma", valor: "Brazales", icono: require("@/assets/images/tipos-armas/weapon_brazales.webp") }
        ],
        roles: [
            {
                nombre: "DPS",
                icono: require("@/assets/images/categorias/dps.webp"),
                colorClass: "dps",
                tiers: [
                    { label: "S+", desc: "Torre de la adversidad" },
                    { label: "S+", desc: "Olas Clamantes" }
                ]
            }
        ],
        labsScore: "S+",
        labsScoreTier: "tier-box-labs-ss"
    },

    {
        nombre: "Zhezhi",
        rareza: 5,
        elemento: "gelio",
        arma: "rectificador",
        iconoElemento: require("@/assets/images/elementos/icon_gelio.webp"),
        imagen: require("@/assets/images/perfiles-personajes/Zhezhi.webp"),
        imagenPerfil: require("@/assets/images/perfiles-personajes/Zhezhi.webp"),
        avatar: require("@/assets/images/personajes/icon_zhezhi.webp"),
        tags: [
            { tipo: "rareza", valor: "5★" },
            { tipo: "elemento", valor: "Gelio", icono: require("@/assets/images/elementos/icon_gelio.webp") },
            { tipo: "arma", valor: "Rectificador", icono: require("@/assets/images/tipos-armas/weapon_rectificador.webp") }
        ],
        roles: [
            {
                nombre: "SUB-DPS",
                icono: require("@/assets/images/categorias/subdps.webp"),
                colorClass: "sub-dps",
                tiers: [
                    { label: "S+", desc: "Torre de la adversidad" },
                    { label: "A+", desc: "Olas Clamantes" }
                ]
            }
        ],
        labsScore: "S",
        labsScoreTier: "tier-box-labs-s"
    },

]