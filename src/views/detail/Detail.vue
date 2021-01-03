<template>
  <div id="detail">  
    <detail-nav-bar></detail-nav-bar>

    <scroll class="content" ref="scroll">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-param-info :paramInfo="paramInfo"></detail-param-info>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "./detailchild/DetailNavBar";
import DetailSwiper from "./detailchild/DetailSwiper";
import DetailBaseInfo from "./detailchild/DetailBaseInfo";
import DetailShopInfo from "./detailchild/DetailShopInfo";
import DetailGoodsInfo from "./detailchild/DetailGoodsInfo";
import DetailParamInfo from "./detailchild/DetailParamInfo";

import Scroll from "common/scroll/Scroll";

import { getDetailData, Goods, Shop, GoodsParam } from "network/detail";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo
  },
  data() {
    return {
      iid: null,
      topImages: null,
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {}
    };
  },
  created() {
    // 1、保存传入的iid
    this.iid = this.$route.params.iid;
    // 2、请求数据
    this.getDetailData(this.iid);

  },
  mounted(){
    console.log(this.$refs.scroll)
  },
  methods: {
    getDetailData(iid) {
      getDetailData(iid).then((res) => {
        console.log(res);
        const data = res.result;
        // 1、保存轮播图图片
        this.topImages = data.itemInfo.topImages;
        // 2、保存商品信息
        //  已经在detail的网络封装中，整合了从后台得到的数据
        this.goods = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );
        // 3、保存店铺信息
        this.shop = new Shop(data.shopInfo);
        // 4、保存商品的详情数据
        this.detailInfo = data.detailInfo;
        // 5、保存参数信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
      });
    },
    imageLoad() {
      this.$refs.scroll.refresh()
    }
  },
};
</script>

<style scoped>
#detail {
  height: 100vh;
  overflow: hidden;
}
.content {
  height: calc(100% - 44px);
}
</style>>
</style>