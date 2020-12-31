<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommends-view :recommends="recommends"></recommends-view>
    <home-tab-control
      class="home-tab-bar"
      :titleArray="['流行', '新款', '精选']"
      @tabClick="tabClick"
    ></home-tab-control>
    <home-goods-list :goodsList="goodsList"></home-goods-list>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>0</li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>0</li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>0</li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
    </ul> 
  </div>
</template>

<script>
import NavBar from "common/navbar/NavBar";
import HomeSwiper from "./homechild/HomeSwiper.vue";
import RecommendsView from "./homechild/RecommendsView";
import HomeTabControl from "./homechild/HomeTabControl";
import HomeGoodsList from "./homechild/HomeGoodsList"

import { getHomeMultiData, getHomeData } from "network/home.js";

export default {
  components: {
    NavBar,
    HomeSwiper,
    RecommendsView,
    HomeTabControl,
    HomeGoodsList
  },
  data() {
    return {
      banners: [],
      recommends: [],
      homeData: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: 'pop'
    };
  },
  computed: {
    goodsList() {
      return this.homeData[this.currentType].list
    }
  },
  created() {
    // async created() {
    //    const res = await getHomeMultiData()
    //    this.result = res
    //}
    // 1、请求多个数据
    this.getHomeMultiData();
    this.getHomeData("pop");
    this.getHomeData("new");
    this.getHomeData("sell");
  },
  methods: {
    getHomeMultiData() {
      getHomeMultiData().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeData(type) {
      let page = this.homeData[type].page + 1
      getHomeData(type, page).then((res) => {
        console.log(res.data.list)
        this.homeData[type].list.push(...res.data.list)
      })
    },
    tabClick(index) {
      switch(index) {
        case 0:
          this.currentType = 'pop'
          break;
        case 1:
          this.currentType = 'new'
          break;
        case 2:
          this.currentType = 'sell'
          break;
      }
    }
  },
};
</script>

<style scoped>
#home {
  padding-top: 44px;
  overflow: hidden;
}
.nav-bar {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
}
.home-tab-bar {
  position: sticky;
  top: 44px;
}
</style>