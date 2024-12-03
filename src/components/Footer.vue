<template>
    <v-footer class="footer bg-secondary">
        <v-container>
            <a href="https://github.com/EmirBaranKadirhan">
                <v-btn :icon=githubPath></v-btn>
            </a>
            <a href="https://www.linkedin.com/in/emirkadirhan/">
                <v-btn :icon=linkedinPath></v-btn>
            </a>
            <h4 style="margin-top:10px; letter-spacing:1px">EMİR BARAN KADİRHAN</h4>
        </v-container>
    </v-footer>
</template>

<script>
import { mdiGithub } from '@mdi/js'
import { mdiLinkedin } from '@mdi/js';
export default {
    data() {
        return {
            githubPath:'mdi-github',       // İkonun adı String olacak ve arada "-"         
            linkedinPath:'mdi-linkedin'
        }
    },
  
};

</script>

<style>
.footer{
    border: 1px solid !important;
    position: fixed !important;
    bottom: 0px !important;
    width: 100%;
}

a{
    margin-right: 10px;
}
</style>
