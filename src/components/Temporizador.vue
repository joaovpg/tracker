<template>
    <div class="is-flex is-align-items-center is-justify-content-space-between">
        <CronometroVue :tempoEmSegundos="tempoEmSegundos" />
        <BotaoVue @click="iniciar" icone="fas fa-play" texto="play" :desabilitado="cronometroRodando" />
        <BotaoVue @click="finalizar" icone="fas fa-stop" texto="stop" :desabilitado="!cronometroRodando" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CronometroVue from './Cronometro.vue';
import BotaoVue from './Botao.vue';

export default defineComponent({
    name: "TemporizadorVue",
    emits: ['aoTemporizadorFinalizado'],
    components: {
        CronometroVue,
        BotaoVue
    },
    data() {
        return {
            tempoEmSegundos: 0,
            cronometro: 0,
            cronometroRodando: false
        }
    },
    computed: {
        tempoDecorrido(): string {
            return new Date(this.tempoEmSegundos * 1000).toISOString().substr(11, 8)
        }
    },
    methods: {
        iniciar() {
            this.cronometroRodando = true;
            // começar a contagem
            // 1 seg = 1000 ms
            this.cronometro = setInterval(() => {
                this.tempoEmSegundos += 1
            }, 1000);
        },
        finalizar() {
            this.cronometroRodando = false;
            clearInterval(this.cronometro);
            this.$emit('aoTemporizadorFinalizado', this.tempoEmSegundos);
            this.tempoEmSegundos = 0;
        }
    }
});
</script>
