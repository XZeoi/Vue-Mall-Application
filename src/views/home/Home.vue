<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
        ref="tabControl1"
        :titleArray="['流行', '新款', '精选']"
        @tabClick="tabClick"
        class="tab-control"
        v-show="isTabFixed"
      ></tab-control>

    <scroll class="scroll-content" 
      ref="scroll" 
      :probeType="3" 
      @scroll="contentScroll" 
      :pullUpLoad="true"
      @pullingUpLoad="loadMore"
      >
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <recommends-view :recommends="recommends"></recommends-view>
      <tab-control
        ref="tabControl2"
        :titleArray="['流行', '新款', '精选']"
        @tabClick="tabClick"
      ></tab-control>
      <home-goods-list :goodsList="goodsList"></home-goods-list>
    </scroll>
    
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import NavBar from "common/navbar/NavBar";
import HomeSwiper from "./homechild/HomeSwiper.vue";
import RecommendsView from "./homechild/RecommendsView";
import TabControl from "content/tabcontrol/TabControl";
import HomeGoodsList from "./homechild/HomeGoodsList";
import Scroll from "common/scroll/Scroll"
import BackTop from "content/backtop/BackTop"

import { getHomeMultiData, getHomeData } from "network/home.js";

export default {
  components: {
    NavBar,
    HomeSwiper,
    RecommendsView,
    TabControl,
    HomeGoodsList,
    Scroll,
    BackTop
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
      currentType: "pop",
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0
    };
  },
  computed: {
    goodsList() {
      return this.homeData[this.currentType].list;
    },
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
  destroyed() {
    console.log('destroyed')
  },
  // 进入（激活）
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
    // 解决有时候不可以滚动的情况
    this.$refs.scroll.refresh()
  },
  // 离开（失效）
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY()
  },
  methods: {
    getHomeMultiData() {
      getHomeMultiData().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeData(type) {
      let page = this.homeData[type].page + 1;
      getHomeData(type, page).then((res) => {
        this.homeData[type].list.push(...res.data.list);
        this.homeData[type].page = page
      });
    },
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    backClick() {
      //scroll对象中的scrollTo(第一个参数X，第二个参数Y，第三个参数时间毫秒)
      this.$refs.scroll.scrollTo(0,0,500)
    },
    contentScroll(position) {
      // 1、判断BackTop是否显示
      this.isShowBackTop = Math.abs(position.y) > 1000
      // 2、决定tabControl是否吸顶（position: fixed）
      this.isTabFixed = Math.abs(position.y) > this.tabOffsetTop
    },
    loadMore() {
      this.getHomeData(this.currentType);
      //  事情做完，需要调用此方法告诉 better-scroll 数据已加载，否则下拉事件只会执行一次
      this.$refs.scroll.finishPullUp()
    },
    swiperImageLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    }
  },
};
</script>

<style scoped>
#home {
  /* padding-top: 44px; */
  height:100vh;
  position: relative;
  /* background-color: red; */
  /* overflow: hidden; */
}
.tab-control {
  position: relative;
  z-index: 9;
}

/* .nav-bar { */
  /* 在使用浏览器原生滚动时，为了让导航不跟随一起滚动 */
  /* 因为现在不是原生滚动，而是better-scroll局部滚动，所以不需要下面的样式 */
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0; */
/* } */
.scroll-content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
/* .scroll-content {
  height: calc(100% - 93px);
  overflow: hidden;
  margin-top: 44px;
} */
.fixed {
  position: fixed;
  left: 0;
  right: 0;
  top: 44px;
}
</style>