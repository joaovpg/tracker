<template>
    <section class="projetos">
        <form @submit.prevent="salvar">
            <div class="field">
                <label for="nomeDoProjeto" class="label">Nome Do Projeto</label>
                <input type="text" class="input" v-model="nomeDoProjeto" />
            </div>
            <div>
                <button class="button" type="submit">Salvar</button>
            </div>
        </form>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from '@/store';
import { ALTERA_PROJETO, ADICIONA_PROJETO } from "@/store/tipo-mutacoes";

export default defineComponent({
    name: 'FormularioView',
    props: {
        id: {
            type: String
        }
    },
    mounted() {
        if (this.id) {
            const projeto = this.store.state.projetos.find(proj => proj.id == this.id);
            this.nomeDoProjeto = projeto?.nome || ''
        }
    },
    data() {
        return {
            nomeDoProjeto: "",
        }
    },
    methods: {
        salvar() {
            if (this.id) {
                this.store.commit(ALTERA_PROJETO, {
                    id: this.id,
                    nome: this.nomeDoProjeto
                })
            } else {
                this.store.commit(ADICIONA_PROJETO, this.nomeDoProjeto);
            }
            this.nomeDoProjeto = '';
            this.$router.push('/projetos')
        }
    },
    setup() {
        const store = useStore()
        return {
            store,
        }
    }
})
</script>

