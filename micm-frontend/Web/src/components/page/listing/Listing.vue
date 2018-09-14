<template>
    <div class="page">
        <common-search @searchHeight="getSearchHeight" ></common-search>
        <div class="box">
            <van-row type="flex" justify="center">
                <van-col span="8">
                    <div class="text-grey-1">上市公司</div>
                    <div class="text-blue" style="left: 10px;top: 108px">43</div>
                    <div class="text-grey-1">（户）</div>
                </van-col>
                <div class="vertical-line"></div>
                <van-col span="8">
                    <div  class="text-grey-1">IRR</div>
                    <div class="text-blue">33.11%</div>
                </van-col>
                <div class="vertical-line"></div>
                <van-col span="8">
                    <div class="text-grey-1">TV MULTIPLE</div>
                    <div class="text-blue">5.05</div>
                    <div class="text-grey-1">（CNY）</div>
                </van-col>
            </van-row>
            <div class="transvarse-line"></div>
            <van-row type="flex" justify="center">
                <van-col span="8">
                    <div>累积投资金额</div>
                    <div class="text-blue">800.05</div>
                    <div>（USD，bn）</div>
                </van-col>
                <div class="vertical-line"></div>
                <van-col span="8">
                    <div>累积投资成本</div>
                    <div class="text-blue">110</div>
                    <div>（USD，bn）</div>
                </van-col>
            </van-row>
            <van-row type="flex" justify="end">
                <div class="text-tips" style="margin-top:10px;">统计截止：2018-08-08</div>
            </van-row>
        </div>

        <div class="wrapper" ref="wrapper">
            <ul class="content"  >
                <li > 01 </li>
                <li > 01 </li>
                <li > 01 </li>
                <li > 01 </li>
                <li > 01 </li>
                <li > 01 </li>
                
            </ul>
        </div>

        <!--<div class="list" >
            <van-list
                    v-model="loading"
                    :finished="finished"
                    @load="onLoad"
            >

                <div v-for="item in list" :key="item" :title="item + ''" class="list-block">
                <van-row type="flex" justify="space-between">
                    <van-col><span class="text-title">11.com lnc.</span></van-col>
                    <van-col><span class="text-tips">收盘：08-08 15:00:00(UTF+8)</span></van-col>
                </van-row>
                <van-row type="flex" >
                    <div class="list-block-sub">
                        <van-col span="12">
                            <div>成本：{{ item }}0，000</div>
                            <div>币种，单位：USD，MN</div>
                        </van-col>
                        <van-col span="2">
                            <div class="vertical-line" style="height:40px;width: 2.5px;"></div>
                        </van-col>
                        <van-col span="10">
                            <div>最新估值：100，000</div>
                            <div class="text-red">日涨跌幅：+10%</div>
                        </van-col>
                    </div>
                </van-row>
                </div>
            </van-list>
        </div>-->
        <common-footer @footerHeight="getFooterHeight" ></common-footer>
    </div>
</template>

<script>
    import CommonSearch from '../../common/search/Search'
    import CommonFooter from '../../common/footer/Footer'
    import Divider from "vux/src/components/divider/index";
    import BScroll from 'better-scroll'
    //let scroll = new BScroll('.wrapper')

    export default {
        name: "Listing",
        components:{
            Divider,
            CommonSearch,
            CommonFooter
        },
        mounted() {
            this.$nextTick(() => {
                this.scroll = new Bscroll(this.$refs.wrapper, {})
            })
        },
        data() {
            return {
                list: [],
                loading: false,
                finished: false
            };
        },
        methods: {
            onLoad() {
                setTimeout(() => {
                    for (let i = 0; i < 20; i++) {
                        this.list.push(this.list.length + 1);
                    }
                    this.loading = false;

                    if (this.list.length >= 20) {
                        this.finished = true;
                    }
                }, 500);
            },
            getSearchHeight (height) {
                this.searchHeight = height
            },
            getFooterHeight (height) {
                this.footerHeight = height
            }
        }
    }
</script>

<style lang="less" scoped>
    .wrapper{
        ul{
            li{
                width: 100%;
                height:50px;
                background: #000;
            }
        }
    }
    .page{
        margin-top:44px;
        color:rgba(16, 16, 16, 1)
    }
    .box, .list{
        margin: 15px auto;
        background: #ffffff;
        padding: 10px 20px;
        line-height: 20px;
        font-size: 14px;
        font-family: Arial;
        border: 1px solid rgba(255, 255, 255, 0);
    }
    .box{
        margin-top: 50px;
        text-align: center;
    }
    .list{
        overflow:auto;position: absolute;top:260px;bottom:35px;left:0;right:0;
    }
    .list-block-sub{
        margin:5px 0;
        overflow: auto;
        width: 100%;
        div{
            margin:5px 0;
        }
    }
    .vertical-line{
        background: #E2E5EA;
        width: 2px;
        height: 60px;
        display: inline-block;
    }
    .transvarse-line{
        margin: 15px;
        background: #E2E5EA;
        width: 92%;
        height: 1px;
    }
    .text-grey-1{
        color:rgba(83, 85, 102, 1)
    }
    .text-red{
        color: #E51C23;
    }
    .text-blue{
        line-height: 29px;
        color: rgba(5, 99, 248, 1);
        font-weight: bold;
        font-size: 20px;
        text-align: center;
        box-shadow: 0px 0px 0px 0px rgba(255, 255, 255, 0);
        font-family: Arial;
        border: 1px solid rgba(255, 255, 255, 0);
    }
    .text-title{
        font-size: 16px;
        font-weight: bold;
    }
    .text-tips{
        font-size: 6px;
        color:rgba(186, 194, 206, 1);
    }
</style>