<template>
  <div class="footer" ref="footer">
    <router-link tag="div" class="footer-item" v-for="item of navList" 
    :to="item.link" :class="{'footer-active': active == item.title}" :style="theWidth" :key="item.id">
      <div class="iconfont" v-html="item.icon"></div>
      <div class="item-title">{{item.title}}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CommonFooter',
  data () {
    return {
      active: '公司',itemWidth: {width: 0},
      navList: [
	      {id: '001',title: '首页',icon: '&#xe77e;',link: '/index'},
	      {id: '002',title: '公司',icon: '&#xe612;',link: '/company'},
	      {id: '003',title: '上市',icon: '&#xe730;',link: '/listing'},
	      {id: '004',title: '分析',icon: '&#xe6a3;',link: '/analysis'},
	      {id: '005',title: '资讯',icon: '&#xe64e;',link: '/news'}
      ]
    }
  },
  computed: {
    theWidth () {
      let length = this.navList.length
      let width = 100 / length + '%'
      this.$set(this.itemWidth, 'width', width)
      return this.itemWidth
    }
  },
  methods: {
    getFooterHeight () {
      let footerHeight = this.$refs.footer.clientHeight
      this.$emit('footerHeight', footerHeight)
    }
  },
  mounted () {
    this.getFooterHeight()
  }
}
</script>

<style lang="less" scoped>
.footer{
	position: fixed;
	bottom: 0;
	left: 0;
	display: flex;
	width: 100%;
	height: 42px;
	border-top: 1px solid #bbb;/*no*/
	background-color: #fff;
  z-index: 10;
}
.footer .footer-item{
	font-size: 12px;
	color:#323B4A;
	font-family: "microsoft yahei";
	text-align: center;

    .iconfont{
      font-size: 18px;
      margin: 2px 0;
    }
}
.footer .footer-item.router-link-active{
  color:#4777FF;
}
</style>