<template>
  <div class="todos">
    <ListTodos v-if="!showForm" />
    <TodoForm v-if="showForm" />
  </div>
</template>

<script>
import {useTodosStore} from "../store/todos";
import {computed} from "vue";

import ListTodos from "./ListTodos";
import TodoForm from "./TodoForm";

export default {
  name: "TodosComponent",
  components: {TodoForm, ListTodos},
  setup() {
    const store = useTodosStore();

    const showForm = computed(() => store.$state.showForm);

    return {
      showForm: showForm
    }
  }
}
</script>