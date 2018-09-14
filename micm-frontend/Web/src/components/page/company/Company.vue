<template>
  <div class="compeny">
    <common-search
      @searchHeight="getSearchHeight"
    ></common-search>
    <common-screen 
      :showScreen="showScreen" 
      :screenData="screenData" 
      @change="screenShow">
    </common-screen>
    <company-tab 
      @tabHeight="getTabHeight" 
      @handleShow="screenShow" 
      @changeCompany="companyChange">
    </company-tab>
    <company-list 
      :radio="radio" 
      :searchHeight="searchHeight"
      :footerHeight="footerHeight"
      :tabHeight="tabHeight"
    >
    </company-list>
    <common-footer
      @footerHeight="getFooterHeight"
    ></common-footer>
  </div>
</template>

<script>
import CommonSearch from '../../common/search/Search'
import CommonScreen from '../../common/screen/Screen'
import CompanyTab from './components/Tab'
import CompanyList from './components/List'
import CommonFooter from '../../common/footer/Footer'
export default {
  name: 'Company',
  components: {
    CommonSearch,
    CommonScreen,
    CompanyTab,
    CompanyList,
    CommonFooter
  },
  data () {
    return {
      showScreen: false,
      radio: '被投公司',
      searchHeight: 0,
      footerHeight: 0,
      tabHeight: 0,
      screenData: {
        listTitle: 'BG',
        list:  [{
          id: '001',
          title: 'CDG'
        }, {
          id: '002',
          title: 'MIG'
        }, {
          id: '003',
          title: 'SNG'
        }, {
          id: '004',
          title: 'IEG'
        }, {
          id: '005',
          title: 'WXG'
        }],
        accuInvest: '累计投资额',
        investYear: '投资年份',
        investYearList: [{
          id: '001',
          title: '2013'
        }, {
          id: '002',
          title: '2014'
        }, {
          id: '003',
          title: '2015'
        }, {
          id: '004',
          title: '2016'
        }, {
          id: '005',
          title: '2017'
        }, {
          id: '006',
          title: '2018'
        }],
        industry: '行业',
        industryList: [{
          id: '001',
          title: 'O2O'
        }, {
          id: '002',
          title: 'GAME'
        }, {
          id: '003',
          title: 'Finance'
        }]
      }
    }
  },
  methods: {
    screenShow () {
      this.showScreen = !this.showScreen
    },
    companyChange (radio) {
      this.radio = radio
    },
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

<style scoped>

</style>
