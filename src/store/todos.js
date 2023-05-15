import { defineStore } from 'pinia';

const initialState = [
    {
        id: 1,
        title: 'Go Shopping',
        description: 'Go to the market for shopping'
    }
];

export const useTodosStore = defineStore('todos', {
    state: () => ({
        todos: [...initialState],
        showForm: false,
        id: null
    }),
    getters: {
        count: state => state.todos.length,
        findById: state => todoId => state.todos.find(todo => todo.id === todoId),
        findIndex: state => todoId => state.todos.findIndex(todo => todo.id === todoId)
    },
    actions: {
        create(title, description) {
            const created = { id: this.count + 1, title, description };
            this.todos = [created, ...this.todos];
        },
        update(title, description) {
            const index = this.findIndex(this.id);
            this.todos[index] = { ...this.todos[index], title, description };
        },
        remove(id) {
            this.todos = this.todos.filter(todo => todo.id !== id);
        }
    }
});

/*
import {ref, computed} from 'vue';
import {defineStore} from 'pinia';

const initialState = [
    {
        id: 1,
        title: 'Go Shopping',
        description: 'Go to the market for shopping'
    }
];

export const useTodosStore = defineStore('todos', () => {

    // state
   const todos = ref(initialState);
   const showForm = ref(false);
   const id = ref(null);

   // getters
   const count = computed(() => todos.value.length);
   const findById = computed(() => todos.value.find(todo => todo.id === id.value));
   const findIndex = computed(() => todos.value.findIndex(todo => todo.id === id.value));

   // actions
    const create = (title, description) => {
        const created = {id: count.value, title, description};
        todos.value = [created, ...todos.value];
    }

    const update = (title, description) => {
        const index = findIndex(this.id);
        todos.value[index] = {...todos.value[index], title, description};
    }

    const remove = id => {
        todos.value = todos.value.filter(todo => todo.id !== id);
    }

    return {
        todos,
        showForm,
        id,
        count,
        findById,
        create,
        update,
        remove
    }
});
*/ 