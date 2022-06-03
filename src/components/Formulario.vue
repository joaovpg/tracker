<template>
    <div class="box">
        <div class="columns">
            <div class="column is-8" role="form">
                <input type="text" class="input" placeholder="Qual tarefa você deseja iniciar?" v-model="descricao" />
            </div>
            <div class="column">
                <TemporizadorVue @aoTemporizadorFinalizado="finalizarTarefa" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { defineComponent } from "vue";
import TemporizadorVue from "./Temporizador.vue";

export default defineComponent({
    name: "FormularioVue",
    components: {
        TemporizadorVue
    },
    data() {
        return {
            descricao: ''
        }
    },
    methods: {
        finalizarTarefa(tempoDecorrido: number): void {
            console.log('Tempo da tarefa', tempoDecorrido);
            console.log('Descrição da tarefa: ', this.descricao);
            this.descricao = '';
        }
    }
});
</script>
