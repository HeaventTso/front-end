<template>
  <div class="screen">
    <van-popup v-model="show" position="right" :overlay="true">
      <div class="screen-box">
        <div class="screen-container">
          <div class="screen-bolck" v-if="screenData.list">
            <div class="screen-title">{{screenData.listTitle}}</div>
            <ul class="screen-ul">
            	<li class="screen-item" :class="{'item-select': item.title == listActive}" v-for="item of screenData.list" :key="item.id" @click="selectActive('listActive', item.title)">{{item.title}}</li>
            </ul>
          </div>
          <div class="screen-bolck" v-if="screenData.accuInvest">
            <div class="screen-title">{{screenData.accuInvest}}</div>
            <div class="input-block">
              <input class="input-item" type="text" placeholder="最低价" />
              <span class="input-line"></span>
              <input class="input-item" type="text" placeholder="最高价" />
            </div>
          </div>
          <div class="screen-bolck" v-if="screenData.investYearList">
            <div class="screen-title">{{screenData.investYear}}</div>
            <ul class="screen-ul">
              <li class="screen-item" :class="{'item-select': item.title == yearActive}" v-for="item of screenData.investYearList" :key="item.id" @click="selectActive('yearActive', item.title)">{{item.title}}</li>
            </ul>
          </div>
          <div class="screen-bolck" v-if="screenData.industryList">
            <div class="screen-title">{{screenData.industry}}</div>
            <ul class="screen-ul">
              <li class="screen-item" :class="{'item-select': item.title == industryActive}" v-for="item of screenData.industryList" :key="item.id" @click="selectActive('industryActive', item.title)">{{item.title}}</li>
            </ul>
          </div>
          <div class="btn-list">
            <van-button type="default" class="cancel-btn" @click="cancel">取消</van-button>
            <van-button type="primary" class="comfire-btn" @click="comfire">确认</van-button>
          </div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { Popup, Button } from 'vant'
export default {
  name: 'CommonScreen',
  components: {
    [Popup.name]:Popup,
    [Button.name]:Button,
  },
  props: {
    showScreen: Boolean,
    screenData: Object
  },
  data () {
    return {
      show: false,
      listActive: 'MIG',
      yearActive: '',
      industryActive: ''
    }
  },
  watch: {
    showScreen () {
      this.show = !this.show
    }
  },
  methods: {
    cancel () {
      this.$emit('change')
    },
    comfire () {
      this.$emit('change')
    },
    selectActive (type, title) {
      if (type === 'listActive') {
        this.listActive = title
      } else if (type === 'yearActive') {
        this.yearActive = title
      } else if (type === 'industryActive') {
        this.industryActive = title
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .screen
    .screen-box
      width: 280px
      height: 100vh
      background-color: #fff
      overflow: hidden
      .screen-container
        position: relative
        width: 240px
        height: 90%
        border: 1px solid #bbb;/*no*/
        border-radius: 5px
        margin: 15px 20px 0 20px;
        .btn-list
          display: flex
          justify-content: space-between
          position: absolute
          bottom: 0
          left: 0
          width: 100%
          .cancel-btn, .comfire-btn
            width: 100px
            height: 30px
            line-height: 30px
            border: 1px solid #bbb;/*no*/
            border-radius: 4px
            margin: 0 10px 6px 10px
          .cancel-btn
            background-color: #fff
          .comfire-btn
            background-color: #0060FD
        .screen-bolck
          padding: 10px 0 10px 10px
          border-bottom: 1px solid #bbb;/*no*/
          .screen-title
            font-size: 14px
            color: $fontColor
          .input-block
            display: flex
            margin-top: 5px
            .input-item
              width: 78px
              height: 30px
              font-size: 12px
              color: #101010
              text-align: center
              border: 1px solid #bbb;/*no*/
              border-radius: 4px;
            .input-line
              width: 15px
              height: 1px;/*no*/
              margin: 15px 12px 0 12px
              background-color: #bbb
          .screen-ul
            display: flex
            flex-wrap: wrap
            margin-top: 5px
            .screen-item
              width: 61px
              height: 30px
              line-height: 30px
              font-size: 12px
              color: #101010
              text-align: center
              margin: 0 12px 9px 0
              border: 1px solid #bbb;/*no*/
              border-radius: 4px
            .item-select
              color: #fff
              background-color: #035FFF
</style>
