<template>
	<div class="index">
		<common-search @searchHeight="getSearchHeight" ></common-search>
	    <!--<common-footer @footerHeight="getFooterHeight" ></common-footer>-->
	</div>
</template>
<script>
//import {NavBar,Icon} from "vant";
import CommonSearch from '../../common/search/Search'
//import CommonFooter from '../../common/footer/Footer'
export default {
	name:'Index',
	components: {
      /*[NavBar.name]:NavBar,
      [Icon.name]:Icon,*/
		CommonSearch,
        /*CommonFooter*/
	},
	data () {
		return {}
	},
	created: function () {
	},
	methods:{
		getSearchHeight (height) {
		  this.searchHeight = height
		},
		getFooterHeight (height) {
		  this.footerHeight = height
		},
		getTabHeight (height) {
		  this.tabHeight = height
		}
	}
}
</script>
<style>
	#index .van-search{
		background: #0089DC!important;
	}
</style>