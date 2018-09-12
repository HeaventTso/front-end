<template>
    <section class="real-app">
        <input
            type="text"
            class="add-input"
            autofocus="autofocus"
            placeholder="接下来应该做些什么呢"
            @keyup.enter="addTodo"
        >
        <Item :todo="todo"></Item>
    </section>
</template>

<script>
    import '../assets/styles/todo.styl'
    import Item from './item.vue'
    export default {
        data(){
          return {
              todo: {
                  id: 0,
                  content: 'this is todo',
                  completed: false,

              }
          }
        },
        components : {
          Item,
        },
        methods: {
            addTodo() {}
        }
    }
</script>