import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Tarefas from '../views/TarefasView.vue'
import ProjetosView from '../views/ProjetosView.vue'
import Formulario from '../views/Projetos/Formulario.vue'


const rotas: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Tarefas',
        component: Tarefas
    },
    {
        path: '/projetos',
        name: 'Projetos',
        component: ProjetosView
    },
    {
        path: '/projetos/novo',
        name: 'Novo projeto',
        component: Formulario
    },
    {
        path: '/projetos/:id',
        name: 'Editar projeto',
        component: Formulario
    },
]

const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})

export default roteador