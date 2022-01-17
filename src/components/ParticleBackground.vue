<template>
    <Particles :options="particlesOptions" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    setup() {
        const particlesOptions = {
            fpsLimit: 60,
            interactivity: {
                detects0n: 'window',
                events: {
                    onHover: {
                        enable: true,
                        mode: 'grab'
                    },
                    resize: true
                }
            },
            particles: {
                color: '#05e75c',
                links: {
                    color: '#05e75c',
                    distance: 150,
                    enable: true,
                    opacity: 0.7
                },
                move: {
                    enable: true,
                    speed: 4,
                },
                number: {
                    density: {
                        enable: true,
                        value_area: 1000
                    },
                    value: 120
                },
                opacity: {
                    value: 0.7
                },
                shape: {
                    type: 'star'
                },
                size: 2
            },
            detectRetina: true
        }
        return {
            particlesOptions
        }
    }
})
</script> 
