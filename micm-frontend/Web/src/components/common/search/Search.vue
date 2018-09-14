<template>
  <div class="search" ref="search">
    <div class="search-box">
      <input class="search-input" type="text" placeholder="公司/主体/咨询/董监高"/>
      <div class="search-btn">
        <span class="iconfont search-icon">&#xe6ae;</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CommonSearch',
  methods: {
    getSearchHeight () {
      let searchHeight = this.$refs.search.clientHeight
      this.$emit('searchHeight', searchHeight)
    }
  },
  mounted () {
    this.getSearchHeight()
  }
}
</script>
<style lang="less" scoped>
.search {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 44px;
  background-color: @bgColor;
  z-index: 99;

  .search-box {
    position: relative;
    width: 315px;
    height: 30px;
    margin: 0 auto;

    .search-input {
      width: 100%;
      height: 30px;
      font-size: 14px;
      color: #fff;
      padding-left: 8px;
      border-radius: 10px;
      background-color: #91ADFF;
      border: 1px solid #bbb;
      box-sizing: border-box;
    }
    input::-webkit-input-placeholder{
      color: #fff !important;
    }
    .search-btn {
      position: absolute;
      top: 2px;
      right: 8px;
      height: 30px;
      .search-icon {
        font-size: 22px;
        color: #fff;
      }
    }
  }
}
</style>
