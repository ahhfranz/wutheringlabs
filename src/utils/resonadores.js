export default [
    {
        nombre: "Aalto",
        rareza: 4,
        elemento: "aero",
        arma: "pistolas",
        iconoElemento: require("@/assets/images/elementos/icon_aero.webp"),
        imagen: require("@/assets/images/tarjetas-personajes/aalto.webp"),
        imagenPerfil: require("@/assets/images/perfiles-personajes/Aalto.webp"),
        avatar: require("@/assets/images/personajes/icon_aalto.webp"),
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
        labsScoreTier: "tier-box-labs-c"
    },

    {
        nombre: "Baizhi",
        rareza: 4,
        elemento: "gelio",
        arma: "rectificador",
        iconoElemento: require("@/assets/images/elementos/icon_gelio.webp"),
        imagen: require("@/assets/images/tarjetas-personajes/baizhi.webp"),
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
        imagen: require("@/assets/images/tarjetas-personajes/brant.webp"),
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
        imagen: require("@/assets/images/tarjetas-personajes/calcharo.webp"),
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
        imagen: require("@/assets/images/tarjetas-personajes/camellya.webp"),
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
        imagen: require("@/assets/images/tarjetas-personajes/cantarella.webp"),
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
        imagen: require("@/assets/images/tarjetas-personajes/carlotta.webp"),
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
        imagen: require("@/assets/images/tarjetas-personajes/cartethyia.webp"),
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
        imagen: require("@/assets/images/tarjetas-personajes/changli.webp"),
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
        imagen: require("@/assets/images/tarjetas-personajes/chixia.webp"),
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
        imagen: require("@/assets/images/tarjetas-personajes/ciaccona.webp"),
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
        imagen: require("@/assets/images/tarjetas-personajes/danjin.webp"),
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
        imagen: require("@/assets/images/tarjetas-personajes/encore.webp"),
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
        imagen: require("@/assets/images/tarjetas-personajes/Jianxin.webp"),
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
        imagen: require("@/assets/images/tarjetas-personajes/jinhsi.webp"),
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
        imagen: require("@/assets/images/tarjetas-personajes/jiyan.webp"),
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
        imagen: require("@/assets/images/tarjetas-personajes/lingyang.webp"),
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
        imagen: require("@/assets/images/tarjetas-personajes/lumi.webp"),
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
        imagen: require("@/assets/images/tarjetas-personajes/mortefi.webp"),
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
        imagen: require("@/assets/images/tarjetas-personajes/phoebe.webp"),
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
        imagen: require("@/assets/images/tarjetas-personajes/roccia.webp"),
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
        imagen: require("@/assets/images/tarjetas-personajes/rover.webp"),
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
        imagen: require("@/assets/images/tarjetas-personajes/rover.webp"),
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
        imagen: require("@/assets/images/tarjetas-personajes/rover.webp"),
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
        imagen: require("@/assets/images/tarjetas-personajes/sanhua.webp"),
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
        imagen: require("@/assets/images/tarjetas-personajes/taoqi.webp"),
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
        imagen: require("@/assets/images/tarjetas-personajes/shorekeeper.webp"),
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
        imagen: require("@/assets/images/tarjetas-personajes/verina.webp"),
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
        imagen: require("@/assets/images/tarjetas-personajes/yao.webp"),
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
        imagen: require("@/assets/images/tarjetas-personajes/yangyang.webp"),
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
        imagen: require("@/assets/images/tarjetas-personajes/yinlin.webp"),
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
        imagen: require("@/assets/images/tarjetas-personajes/youhu.webp"),
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
        imagen: require("@/assets/images/tarjetas-personajes/yuanwu.webp"),
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
        imagen: require("@/assets/images/tarjetas-personajes/zani.webp"),
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
        imagen: require("@/assets/images/tarjetas-personajes/zhezhi.webp"),
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