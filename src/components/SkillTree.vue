<template>
    <div class="skilltree-container">
        <div class="skilltree-svg-wrapper">
            <svg :width="width" :height="height" class="skilltree-svg">
                <g v-for="(con, idx) in connections" :key="'con-' + idx">
                    <line :x1="con.from.x" :y1="con.from.y" :x2="con.to.x" :y2="con.to.y" stroke="#4fffd7"
                        stroke-width="2" stroke-linecap="round" opacity="0.7" />
                </g>
            </svg>
            <div v-for="node in layout" :key="node.id" :style="nodeStyle(node)" class="skilltree-node-wrapper">
                <div class="skilltree-node" :class="{ selected: selectedSkill && selectedSkill.id === node.id }"
                    @click="$emit('select-skill', skills[node.id])">
                    <img v-if="skills[node.id] && skills[node.id].icon" :src="skills[node.id].icon"
                        :alt="skills[node.id].name" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SkillTree',
    props: {
        skills: { type: Object, required: true },
        skillTree: { type: Array, required: true },
        selectedSkill: { type: Object, default: null },
        width: { type: Number, default: 700 },
        height: { type: Number, default: 420 },
    },
    computed: {
        layout() {
            // Layout especial: 5 columnas (3,3,4,3,3) en forma de flecha/pirámide
            // skillTree debe ser un array de arrays, cada subarray es una columna
            // Ejemplo: [[a,b,c],[d,e,f],[g,h,i,j],[k,l,m],[n,o,p]]
            const columns = this.skillTree;
            const colCount = columns.length;
            const maxRows = Math.max(...columns.map(col => col.length));
            const nodeSize = 64;
            const hGap = 90; // horizontal gap
            const vGap = 90; // vertical gap
            const totalWidth = (colCount - 1) * hGap;
            const totalHeight = (maxRows - 1) * vGap;
            // Centrar el árbol
            const offsetX = (this.width - totalWidth) / 2;
            const offsetY = (this.height - totalHeight) / 2;
            let layout = [];
            columns.forEach((col, colIdx) => {
                const colX = offsetX + colIdx * hGap;
                // Centrar verticalmente cada columna
                const colOffsetY = offsetY + ((maxRows - col.length) * vGap) / 2;
                col.forEach((id, rowIdx) => {
                    let nodeId = typeof id === 'object' && id !== null ? id.id : id;
                    layout.push({
                        id: nodeId,
                        x: colX,
                        y: colOffsetY + rowIdx * vGap,
                    });
                });
            });
            return layout;
        },
        nodeMap() {
            const map = {};
            this.layout.forEach(n => { map[n.id] = n; });
            return map;
        },
        connections() {
            // Conexiones verticales dentro de cada columna
            const cons = [];
            this.skillTree.forEach((col, colIdx) => {
                for (let i = 1; i < col.length; i++) {
                    let fromId = typeof col[i - 1] === 'object' ? col[i - 1].id : col[i - 1];
                    let toId = typeof col[i] === 'object' ? col[i].id : col[i];
                    if (this.nodeMap[fromId] && this.nodeMap[toId]) {
                        cons.push({ from: this.nodeMap[fromId], to: this.nodeMap[toId] });
                    }
                }
            });
            // Conexiones horizontales/diagonales para la forma de flecha
            // (opcional: puedes agregar conexiones entre columnas si lo deseas)
            return cons;
        },
    },
    methods: {
        nodeStyle(node) {
            return {
                position: 'absolute',
                left: `${node.x}px`,
                top: `${node.y}px`,
                width: '80px',
                height: '80px',
                'pointer-events': 'all',
            };
        },
    },
};
</script>

<style scoped>
.skilltree-container {
    position: relative;
    width: 100%;
    min-height: 420px;
    margin: 0 auto;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
}

.skilltree-svg-wrapper {
    position: relative;
    width: 600px;
    height: 420px;
    margin: 0 auto;
}

.skilltree-svg {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    pointer-events: none;
    width: 600px;
    height: 420px;
}

.skilltree-node-wrapper {
    position: absolute;
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.skilltree-node {
    width: 64px;
    height: 64px;
    background: #18192a;
    border: 2.5px solid #4fffd7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: border 0.2s, box-shadow 0.2s;
    box-shadow: 0 2px 8px #0005;
    filter: drop-shadow(0 0 0.5rem #222a);
}

.skilltree-node.selected {
    border: 2.5px solid #a44ce7;
    box-shadow: 0 0 16px #a44ce7cc;
    background: #23243a;
}

.skilltree-node:hover {
    border: 2.5px solid #fff180;
    box-shadow: 0 0 10px #fff18099;
}

.skilltree-node img {
    width: 38px;
    height: 38px;
    object-fit: contain;
    filter: brightness(1.2) drop-shadow(0 0 2px #fff8);
}
</style>
