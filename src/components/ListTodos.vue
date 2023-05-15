<template>
  <div class="todos-list">
    <div><h2>Todos List</h2>  <button type="button" class="create" @click="showCreateForm()">Create Todo</button></div>
    <ol>
      <li v-for="todo in todos" :key="todo.id">
        <div><h4>{{todo.title}}</h4> <button type="button" class="edit" @click="showUpdateForm(todo.id)">Update</button>
                               </div>
        <p>{{todo.description}}</p>
        <button type="button" class="remove" @click="removeTodo(todo.id)">Remove</button>
      </li>
    </ol>
  </div>
</template>

<script>
import {computed} from 'vue';
import {useTodosStore} from "../store/todos";

export default {
  name: "ListTodos",
  setup() {
    const store = useTodosStore();

    const showCreateForm = () => {
      store.$patch({
        showForm: true,
        id: null
      });
    }

    const showUpdateForm = (id) => {
      store.$patch({
        showForm: true,
        id
      });
    }
const removeTodo = (id) => {
      store.remove(id);
    }
   const todos = computed(() => store.$state.todos);

    return {
      todos,
      showCreateForm,
      showUpdateForm,
      removeTodo
    }
  }
}
</script>

<style scoped>
  h4, h2 {
    display: inline;
  }

  button {
    margin: 5px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 12px;
    padding: 4px 6px;
  }

  button.edit {
    background-color: aqua;
  }

  button.remove {
    background-color: red;
  }

  button.create {
    background-color: #1377e2;
    color: #fff;
  }

  p {
    font-size: 13px;
  }
</style>