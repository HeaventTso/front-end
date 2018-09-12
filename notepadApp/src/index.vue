<template>
    <div id="app">
        <div id="cover"></div>
        <Header></Header>
        <Todo></Todo>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from './todo/header.vue'
    import Footer from './todo/footer.jsx'
    import Todo from './todo/todo.vue'

    export default {
        components : {
            Header,
            Todo,
            Footer,
        },
        data(){
            return {
                username : "v_hhzhuo",
                introduction : "I am come from GuangDong,China"
            }
        }
    }
</script>

<style scoped>

</style>

