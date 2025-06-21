<template>
    <nav id="sidebar">
        <div class="sidebar-header">
            <router-link to="/">
                <img src="@/assets/images/logo.webp" class="logo-wuwalabs" alt="Logo de WuWa Labs" width="120"
                    height="36">
                <img src="@/assets/images/logo2.webp" class="logo-wuwalabsmini" alt="Logo de WuWa Labs pequeño"
                    width="40" height="40">
            </router-link>
        </div>
        <ul>
            <li>
                <router-link to="/" class="menu-link-flex" exact-active-class="active">
                    <span>Inicio</span>
                    <img src="@/assets/images/categorias/inicio.webp" alt="Inicio" class="menu-icon-img">
                </router-link>
            </li>
            <li class="divider"></li>
            <li>
                <router-link to="/tierlist" class="menu-link-flex" exact-active-class="active">
                    <span>Tier List</span>
                    <img src="@/assets/images/categorias/tierlist.webp" alt="Tier List" class="menu-icon-img">
                </router-link>
            </li>
            <li class="divider"></li>
            <li>
                <router-link to="/resonadores" class="menu-link-flex" exact-active-class="active">
                    <span>Resonadores</span>
                    <img src="@/assets/images/categorias/resonadores.webp" alt="Resonadores" class="menu-icon-img">
                </router-link>
            </li>
            <li>
                <router-link to="/armas" class="menu-link-flex" exact-active-class="active">
                    <span>Armas</span>
                    <img src="@/assets/images/categorias/armas.webp" alt="Armas" class="menu-icon-img">
                </router-link>
            </li>
            <li class="divider"></li>
            <li>
                <a href="https://forms.gle/2kPYNky9kRuUnLqQ7" target="_blank" class="menu-link-flex">
                    <span>Feedback</span>
                    <img src="@/assets/images/categorias/feedback.webp" alt="Feedback" class="menu-icon-img">
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'AppSidebar'
}
</script>

<style scoped></style>