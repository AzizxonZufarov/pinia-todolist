<template>
  <div>
    <h2>{{!updateId ? 'Create Todo' : 'Update Todo'}}</h2>
    <form method="post" action="#" @submit.prevent="handleSubmit">
      <p>
        <label>Title</label>
        <input type="text" name="title" id="title" v-model="form.title" />
      </p>

      <p>
        <label>Description</label>
        <textarea name="description" id="description" rows="5" v-model="form.description"></textarea>
      </p>

      <div><input type="submit" :value="!updateId ? 'Create' : 'Update'" /> </div>
    </form>
  </div>
</template>

<script>
import {reactive, computed} from 'vue';
import {useTodosStore} from "../store/todos";

export default {
  name: "TodoForm",
  setup() {
    const store = useTodosStore();

    const updateId = computed(() => store.$state.id)

    const form = reactive({title: '', description: ''});
    if(updateId.value) {
        const findForm = store.findById(updateId.value);
        form.title = findForm.title;
        form.description = findForm.description;
        }
    const handleSubmit = () => {
      if(!form.title || !form.description) {
        alert("Please enter the todo title and description");
        return;
      }
      if(!updateId.value) {
        store.create(form.title, form.description);
      } else {
        store.update(form.title, form.description);
      }
      store.$patch({
        showForm: false
      });
    }

    return {
      updateId,
      form,
      handleSubmit
    }
  }
}
</script>

<style scoped>
  p {
    font-weight: bold;
  }

  input, textarea {
    margin-left: 30px;
    padding: 5px 10px;
  }

  textarea {
    width: 700px;
  }

  input[type=submit] {
    margin: 5px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 12px;
    padding: 4px 6px;
    background-color: #1377e2;
    color: #fff;
  }
</style>