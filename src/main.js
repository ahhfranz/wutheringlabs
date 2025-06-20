import '@/utils/accordion-anim.js'
import '@/utils/app.js'
import '@/utils/boton-arriba.js'
import '@/utils/filtros-armas.js'
import '@/utils/filtros-resonadores.js'
import '@/utils/filtros-tierlist.js'
import '@/utils/tooltips-resonadores.js'

import { createApp } from 'vue';
import App from './App.vue';
import '@/assets/styles/global.css'
import router from './router'

createApp(App).use(router).mount('#app');