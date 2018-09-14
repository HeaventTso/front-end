<template>
  <div class="tab" ref="tab">
    <div class="tabbar">
      <div class="company-select" @click="selectCompany">{{this.radio}}</div>
      <div class="invest-select">
        <div class="invest-btn"  @click="selectList">{{this.radio1}}</div>
        <div class="sort-arrow" @click="sort">
          <div class="iconfont up-arrow" :class="{'select-sort': !selectSort}">&#xe64d;</div>
          <div class="iconfont down-arrow" :class="{'select-sort': selectSort}">&#xe64c;</div>
        </div>
      </div>
      <div class="screen-btn" @click="screenShow">
        <span class="iconfont">&#xe622;</span>
      </div>
    </div>
    <van-popup v-model="show" position="bottom" :overlay="true">
      <van-radio-group v-model="radio" @change="changeRadio(radio)">
        <van-cell-group>
          <van-cell title="被投公司" clickable @click="radio = '被投公司'">
            <van-radio name="被投公司" />
          </van-cell>
          <van-cell title="投资主体" clickable @click="radio = '投资主体'">
            <van-radio name="投资主体" />
          </van-cell>
        </van-cell-group>
      </van-radio-group>
    </van-popup>
    
    <van-popup v-model="show1" position="bottom" :overlay="true">
      <van-radio-group v-model="radio1">
        <van-cell-group>
          <van-cell :title="item.title" clickable v-for="(item, index) of list" :key="index" @click="change(item.title)">
            <van-radio :name="item.title" />
          </van-cell>
        </van-cell-group>
      </van-radio-group>
    </van-popup>
  </div>
</template>

<script>
import { RadioGroup, Radio, Cell, CellGroup, Popup } from 'vant'
export default {
  name: 'CompanyTab',
  components:{
    [RadioGroup.name]:RadioGroup,
    [Radio.name]:Radio,
    [Cell.name]:Cell,
    [CellGroup.name]:CellGroup,
    [Popup.name]:Popup
  },
  data () {
    return {
      show: false,
      show1: false,
      radio: '被投公司',
      radio1: '累计投资',
      selectSort: true,
      radioList: [{
        id: '001',
        title: '累计投资'
      }, {
        id: '002',
        title: '最后投资日'
      }, {
        id: '003',
        title: '初次投资年'
      }],
      radioList1: [{
        id: '001',
        title: '累计投资'
      }, {
        id: '002',
        title: '付款次数'
      }]
    }
  },
  computed: {
    list () {
      if (this.radio === '被投公司') {
        this.radio1 = '累计投资'
        return this.radioList
      } else if (this.radio === '投资主体') {
        this.radio1 = '累计投资'
        return this.radioList1
      }
    }
  },
  methods: {
    selectCompany () {
      this.show = !this.show
    },
    selectList () {
      this.show1 = !this.show1
    },
    sort () {
      this.selectSort = !this.selectSort
    },
    changeRadio (radio) {
      this.show = !this.show
      this.$emit('changeCompany', radio)
    },
    changeRadio1 (radio) {
      this.show1 = !this.show1
    },
    screenShow () {
      this.$emit('handleShow')
    },
    change (title) {
      this.radio1 = title
      this.show1 = !this.show1
    },
    getTabHeight () {
      let tabHeight = this.$refs.tab.clientHeight
      this.$emit('tabHeight', tabHeight)
    }
  },
  mounted () {
    this.getTabHeight()
  }
}
</script>

<style lang="stylus">
  .van-icon-checked
    color: $fontColor !important
</style>
<style lang="stylus" scoped>
  .tab
    position: fixed
    top: 44px
    left: 0
    width: 100%
    background-color: #fff
    z-index: 99
    .tabbar
      display: flex
      width: 100%
      height: 40px
      line-height: 40px
      font-size: 12px
      color: $fontColor
      border-bottom: 1px solid #eee;/*no*/
      .company-select
        position: relative
        width: 120px
        text-align: center
        &:before
          content: ''
          position: absolute
          top: 17px
          right: 15px
          width: 0
          height: 0
          border-top: 6px solid $fontColor
          border-right: 4px solid transparent
          border-left: 4px solid transparent
        &:after
          content: ''
          position: absolute
          top: 5px
          right: 0
          width: 1px;/*no*/
          height: 35px
          background-color: #eee
      .invest-select
        display: flex
        flex: 1
        box-sizing: border-box
        .invest-btn
          padding: 0 10px
        .sort-arrow
          display: flex
          flex-direction: column
          align-items: center
          line-height: 35px
          .up-arrow,.down-arrow
            display: inline-block
            height: 8px
            font-size: 12px
            color: #bac2ce
          .select-sort
            color: $fontColor
      .screen-btn
        line-height: 40px
        color: #bac2ce;
        padding-right: 25px
        padding-top: 2px
</style>
