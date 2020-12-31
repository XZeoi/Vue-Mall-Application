<template>
  <div>
    <nav-bar>
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recomments-view :recommends="recommends"></recomments-view>
    <home-tab-control :titleArray="['流行', '新款', '精选']"></home-tab-control>
  </div>
</template>

<script>
import NavBar from 'common/navbar/NavBar'
import HomeSwiper from './homechild/HomeSwiper.vue'
import RecommentsView from './homechild/RecommendsView'
import HomeTabControl from './homechild/HomeTabControl'

import {getHomeMultiData} from 'network/home.js'

export default {
  components: {
    NavBar,
    HomeSwiper,
    RecommentsView,
    HomeTabControl
  },
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  created() {
  // async created() {
    // 1、请求多个数据
    getHomeMultiData().then(res=> {
      console.log(res)
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
      // console.log(this.recommends)
    })
    // const res = await getHomeMultiData()
    // this.result = res
    
  },
  methods: {
    
  }
}
</script>

<style>

</style>