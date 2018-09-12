<template>
    <div id="app">
        <div id="cover"></div>
        <Header></Header>
    </div>
</template>

<script>
    import '../assets/styles/index.styl'
    import Header from './header.vue'
    export default {
        components : {
            Header,
        }
    }
</script>

<style lang="stylus" scoped>
#app{
    position absolute
    left 0
    right 0
    top 0
    bottom 0
}

</style>