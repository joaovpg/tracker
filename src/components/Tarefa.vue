<template>
  <Box>
    <div class="columns clicavel" @click="tarefaClicada">
      <div class="column is-4">
        {{ tarefa.descricao || 'Tarefa sem descrição' }}
      </div>
      <div class="column is-3">
        {{ tarefa.projeto?.nome || 'N/D' }}
      </div>
      <div class="column">
        <Cronometro :tempoEmSegundos="tarefa.duracaoEmSegundos"/>
      </div>
    </div>
  </Box>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';
import Cronometro from "./Cronometro.vue";
import Box from "./Box.vue";
import ITarefa from "../interfaces/ITarefa";

export default defineComponent({
  name: 'TarefaVue',
  emits: ['aoTarefaClicada'],
  components: {
    Cronometro,
    Box
  },
  props: {
    tarefa: {
      type: Object as PropType<ITarefa>,
      required: true
    }
  },
  setup(props, { emit }){
    const tarefaClicada = () : void => {
      emit('aoTarefaClicada', props.tarefa)
    }
    const tempoGasto = computed(() => {
      return new Date(props.tarefa.duracaoEmSegundos * 1000)
      .toISOString()
      .substr(11,8)
    })

    return {
      tarefaClicada,
      tempoGasto
    }
  }
});
</script>
<style scoped>
 .clicavel {
  cursor: pointer;
 }

</style>