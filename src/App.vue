<template>
  <v-app id="app" :theme="theme">
    <v-app-bar elevation="4">
      <v-toolbar-title><h1><samp>ㅤ<a href="/">Open your mind!</a></samp></h1></v-toolbar-title>
      <v-spacer />
      <div class="d-none d-sm-flex">
        <v-btn class="mr-3" to="/"><h1>&radic;</h1></v-btn>
        <v-btn class="mr-3" to="/more"><h1>&Sigma;</h1></v-btn>
        <v-btn class="mr-3" to="/history"><h1>&Omega;</h1></v-btn>
        <v-btn class="mr-3" to="/footsteps"><h1>&Delta;</h1></v-btn>
        <v-btn class="mr-3" to="/videos"><h1>&Phi;</h1></v-btn>
        <v-btn class="mr-3" to="/classes"><h1>&Pi;</h1></v-btn>
        <v-btn class="mr-3" to="/about">소개</v-btn>

      </div>
      <v-btn icon @click="toggleTheme">
        <v-icon>mdi mdi-brightness-6</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <ParticleBackground id="background" />
      <router-view />
    </v-main>

    <v-bottom-navigation class="d-flex d-sm-none">
      <v-btn to="/">
        <v-icon>fas fa-square-root-alt</v-icon>
        <span>홈</span>
      </v-btn>

      <v-btn to="/more">
        <h1>&Sigma;</h1>
        <span>상세 교육과정</span>
      </v-btn>

      <v-btn to="/history">
        <h1>&Omega;</h1>
      <span>수상내역</span>
      </v-btn>

      <v-btn to="/footsteps">
        <h1>&Delta;</h1>
      <span>멘토링</span>
      </v-btn>

      <v-btn to="/footsteps">
        <h1>&Phi;</h1>
      <span>동기부여</span>
      </v-btn>

      <v-btn to="/classes">
        <h1>&Pi;</h1>
      <span>영상강의</span>
      </v-btn>

      <v-btn to="/about">
        <v-icon>fas fa-address-card</v-icon>
        <span>소개</span>
      </v-btn>


    </v-bottom-navigation>
    <footer>
      <div align="center"><samp>쿠키를 사용하는 웹사이트입니다.</samp></div>
    </footer>

  </v-app>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import ParticleBackground from "@/components/ParticleBackground.vue";


  export type DataType = {
    theme: string
  }



  export default defineComponent({
    name: 'App',
    el: '#app',
    components: {
      ParticleBackground

    },
    data(): DataType {
      return {
        theme: "dark"
      }
    },
    methods: {
      toggleTheme() {
        if (this.theme === "dark") {
            this.theme = "light";
            document.cookie = "light; expires=Fri, 31 Dec 9999 21:00:00 UTC";
        } else {
            this.theme = "dark";
            document.cookie = "dark; expires=Fri, 31 Dec 9999 21:00:00 UTC";
        }
      }
    },
    created() {
      
      const lightMedia = window.matchMedia('(prefers-color-scheme: dark)')
      lightMedia.addEventListener("change", event => {
        if (document.cookie === "light" || document.cookie === "dark") {
          this.theme = document.cookie
        } else {
          if (event.matches == true) {
            this.theme = "dark"
          } else {
            this.theme = "light"
          }
        }
      })
      if (document.cookie === "light" || document.cookie === "dark"){
        this.theme=document.cookie
      } else {
        if (lightMedia.matches == true) {
          this.theme = "dark"
        } else if (lightMedia.matches == false) {
          this.theme = "light"
        }
      }
      }
    
  })

</script>

<style>
a { text-decoration: none; }

</style>