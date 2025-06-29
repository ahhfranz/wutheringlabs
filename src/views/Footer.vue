<template>
    <footer>
        <div class="footer-nav">
            <div class="footercontainer">
                <ul class="footer-nav-list">
                    <li class="footer-nav-item">
                        <h2 class="nav-title">Navegación</h2>
                    </li>
                    <li class="footer-nav-item">
                        <a href="index.html" class="footer-nav-link">Inicio</a>
                    </li>
                    <li class="footer-nav-item">
                        <router-link to="/politicas" class="footer-nav-link">Políticas de privacidad</router-link>
                    </li>
                </ul>

                <ul class="footer-nav-list">
                    <li class="footer-nav-item">
                        <h2 class="nav-title">Redes</h2>
                    </li>
                    <li class="footer-social-icons">
                        <a href="https://discord.gg/3U7bmCyET5" target="_blank"><img
                                src="@/assets/images/icons/discord.webp" alt="Discord"></a>
                        <a href="https://ko-fi.com/wutheringlabs" target="_blank"><img
                                src="@/assets/images/icons/kofi.webp" alt="Ko-fi"></a>
                    </li>
                </ul>

                <ul class="footer-nav-list">
                    <li class="footer-nav-item">
                        <h2 class="nav-title">Contacto</h2>
                    </li>
                    <li class="footer-nav-item">
                        <a href="mailto:wutheringlabs@gmail.com" target="_blank"
                            class="footer-nav-link">wutheringlabs@gmail.com</a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="footercontainer">
            <div class="copyright">
                Copyright &copy; 2025 Wuthering Labs by
                <a href="http://discordapp.com/users/640310157796179978" target="_blank" class="franz-link">franz</a>
            </div>
        </div>
    </footer>
</template>
