<template>
  <div class="list" :style="{height: windowHeight}" ref="wrapper">
    <ul class="list-ul">
      <li class="list-item" v-for="item of list" :key="item.id">
        <div class="list-top">
          <div class="list-name">
            <span class="company-name van-ellipsis">{{item.name}}</span>
            <span class="list-state" v-if="item.state">{{item.state}}</span>
          </div>
          <div class="list-date">{{item.date}}</div>
        </div>
        <div class="list-bottom" v-if="radio == '被投公司'">
          <div class="bottom-title">累计投资
            <span class="total-money">{{item.totalMoney}}</span>
            <span class="type-money">({{item.moneyType}})</span>
          </div>
          <div class="bottom-title">OS%
            <span class="os-percent">{{item.osPercent}}</span>
          </div>
          <div class="bottom-title">PIC:
            <span class="pic-type">{{item.pic}}</span>
          </div>
        </div>
        <div class="list-bottom" v-if="radio == '投资主体'">
          <div class="bottom-title">投资公司
            <span class="total-money">{{item.total}}</span>
            <span class="type-money">({{item.unit}})</span>
          </div>
          <div class="bottom-title">投资金额
            <span class="total-money">{{item.money}}</span>
            <span class="type-money">({{item.currency}})</span>
          </div>
        </div>
      </li>
    </ul>
    <!--<div class="loadmore-btn">查看更多</div>-->
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CompanyList',
  props: {
    radio: String,
    searchHeight: Number,
    footerHeight: Number,
    tabHeight: Number
  },
  data () {
    return {
      listHeight: 0,
      companyList: [{
        id: '001',
        name: '52.com Inc.',
        state: '上市',
        date: '2018-08-08',
        totalMoney: '10000',
        moneyType: 'MN',
        osPercent: '20.10%',
        pic: 'test'
      }, {
        id: '002',
        name: '52.com Inc.',
        state: '上市',
        date: '2018-08-08',
        totalMoney: '10000',
        moneyType: 'MN',
        osPercent: '20.10%',
        pic: 'test'
      }, {
        id: '003',
        name: '52.com Inc.',
        state: '上市',
        date: '2018-08-08',
        totalMoney: '10000',
        moneyType: 'MN',
        osPercent: '20.10%',
        pic: 'test'
      }, {
        id: '004',
        name: '52.com Inc.',
        state: '上市',
        date: '2018-08-08',
        totalMoney: '10000',
        moneyType: 'MN',
        osPercent: '20.10%',
        pic: 'test'
      }, {
        id: '005',
        name: '52.com Inc.',
        state: '上市',
        date: '2018-08-08',
        totalMoney: '10000',
        moneyType: 'MN',
        osPercent: '20.10%',
        pic: 'test'
      }, {
        id: '006',
        name: '52.com Inc.',
        state: '上市',
        date: '2018-08-08',
        totalMoney: '10000',
        moneyType: 'MN',
        osPercent: '20.10%',
        pic: 'test'
      }, {
        id: '007',
        name: '52.com Inc.',
        state: '上市',
        date: '2018-08-08',
        totalMoney: '10000',
        moneyType: 'MN',
        osPercent: '20.10%',
        pic: 'test'
      }, {
        id: '008',
        name: '52.com Inc.',
        state: '上市',
        date: '2018-08-08',
        totalMoney: '10000',
        moneyType: 'MN',
        osPercent: '20.10%',
        pic: 'test'
      }],
      investList: [{
        id: '001',
        name: '林芝腾讯科技有限公司',
        date: '2018-08-08',
        total: '10000',
        unit: '家',
        money: '10000',
        currency: 'CNY,MN'
      }, {
        id: '002',
        name: '林芝腾讯科技有限公司',
        date: '2018-08-08',
        total: '10000',
        unit: '家',
        money: '10000',
        currency: 'CNY,MN'
      }, {
        id: '003',
        name: '林芝腾讯科技有限公司',
        date: '2018-08-08',
        total: '10000',
        unit: '家',
        money: '10000',
        currency: 'CNY,MN'
      }, {
        id: '004',
        name: '林芝腾讯科技有限公司',
        date: '2018-08-08',
        total: '10000',
        unit: '家',
        money: '10000',
        currency: 'CNY,MN'
      }, {
        id: '005',
        name: '林芝腾讯科技有限公司',
        date: '2018-08-08',
        total: '10000',
        unit: '家',
        money: '10000',
        currency: 'CNY,MN'
      }, {
        id: '006',
        name: '林芝腾讯科技有限公司',
        date: '2018-08-08',
        total: '10000',
        unit: '家',
        money: '10000',
        currency: 'CNY,MN'
      }, {
        id: '007',
        name: '林芝腾讯科技有限公司',
        date: '2018-08-08',
        total: '10000',
        unit: '家',
        money: '10000',
        currency: 'CNY,MN'
      }, {
        id: '008',
        name: '林芝腾讯科技有限公司',
        date: '2018-08-08',
        total: '10000',
        unit: '家',
        money: '10000',
        currency: 'CNY,MN'
      }]
    }
  },
  computed: {
    list () {
      if(this.radio === '被投公司') {
        return this.companyList
      } else {
        return this.investList
      }
    },
    windowHeight () {
      let boxHeight = window.innerHeight - this.searchHeight - this.tabHeight - this.footerHeight
      this.listHeight = boxHeight + 'px'
      return this.listHeight
    }
  },
  mounted () {
   this.$nextTick(() => {
      this.scroll = new Bscroll(this.$refs.wrapper, {
        scrollbar: {
          fade: true,
          interactive: false // 1.8.0 新增
        }
      })
   })
  }
}
</script>

<style lang="stylus" scoped>
  .list
    position: fixed
    top: 84px
    left: 0
    width: 100%
    margin-bottom: 42px
    overflow: hidden
    .list-ul
      padding: 0 20px
      .list-item
        height: 88px
        padding: 12px 0;
        border-bottom: 1px solid #eee;/*no*/
        box-sizing: border-box
        &:last-child
          content: ''
          border-bottom: none
        .list-top,.list-bottom
          display: flex
          justify-content: space-between
          height: 30px
          line-height: 30px
        .list-top
          margin-bottom: 6px
          .list-name
            display: flex
            justify-content: space-between
            min-width: 120px
            max-width: 260px
            .company-name
              font-size: 14px
              color: $fontColor
            .list-state
              min-width: 25px
              font-size: 10px
              color: #35D75E
          .list-date
            font-size: 12px
            color: #101010
        .list-bottom
          justify-content: center 
          font-size: 14px
          color: #101010
          .bottom-title
            position: relative
            margin-right: 20px
            &:after
              content: ''
              position: absolute
              top: 8px
              right: -10px
              width: 1px;/*no*/
              height: 15px
              background-color: #101010;
            &:last-child
              &:after
                content: ''
                width: 0;
    .loadmore-btn
      width: 95px
      height: 25px
      line-height: 25px
      font-size: 14px
      color: #fff
      text-align: center
      margin: 5px auto
      border-radius: 20px
      border: 1px solid #bbb;/*no*/
      background-color: $fontColor
</style>
