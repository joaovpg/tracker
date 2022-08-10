<template>
    <div class="notificacoes">
        <article :class="contexto[notificacao.tipo]" v-for="notificacao in notificacoes" :key="notificacao.id">
            <div class="message-header">
                {{ notificacao.titulo }}
            </div>
            <div class="message-body">
                {{ notificacao.texto }}
            </div>
        </article>
    </div>
</template>
<script lang="ts">
import { TipoNotificacao } from "@/interface/INotificacao";
import { useStore } from "@/store";
import { computed } from "@vue/reactivity";
import { defineComponent } from "vue";

export default defineComponent({
    name: 'NotificacoesComponent',
    data() {
        return {
            contexto: {
                [TipoNotificacao.SUCESSO]: 'is-success',
                [TipoNotificacao.ATENCAO]: 'is-warning',
                [TipoNotificacao.FALHA]: 'is-danger',
            }
        }
    },
    setup() {
        const store = useStore();
        return {
            notificacoes: computed(() => store.state.notificacoes)
        }
    }
})
</script>

<style scoped>
.notificacoes {
    position: absolute;
    top: 0;
    right: 0;
    width: 300px;
    padding: 8px;
    z-index: 105;
}
</style>