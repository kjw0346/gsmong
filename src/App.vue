<template>
  <v-app id="app" :theme="theme">
    <v-app-bar elevation="4">
      <v-toolbar-title><h1><samp>ㅤ수학의 지름길 학원</samp></h1></v-toolbar-title>
      <v-spacer />
      <div class="d-none d-sm-flex">
        <v-btn class="mr-3" to="/">홈</v-btn>
        <v-btn class="mr-3" to="/about">정보</v-btn>
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
        <v-icon>mdi mdi-home</v-icon>
        <span>홈</span>
      </v-btn>
      <v-btn to="/about">
        <v-icon>class="fas fa-address-card"</v-icon>
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
