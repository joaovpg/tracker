<template>
    <BoxVue>
        <div class="columns">
            <div class="column is-7">{{ tarefa.descricao || 'Tarefa sem descrição' }}</div>
            <div class="column">
                <Cronometro :tempoEmSegundos="tarefa.duracaoEmSegundos" />
            </div>
        </div>
    </BoxVue>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Cronometro from "./Cronometro.vue";
import ITarefa from '../interface/ITarefa';
import BoxVue from './Box.vue';
export default defineComponent({
    name: "TarefaVue",
    components: {
        Cronometro,
        BoxVue
    },
    props: {
        tarefa: {
            type: Object as PropType<ITarefa>,
            required: true
        }
    }
});
</script>