<template>
  <div>
    <tab-bar>
      <tab-bar-item link="/home">
        <i slot="icon-slot" class="iconfont icon-home" ></i>
        <span slot="text-slot">首页</span>
      </tab-bar-item>
      <tab-bar-item link="/category">
        <i slot="icon-slot" class="iconfont icon-category" ></i>
        <span slot="text-slot">分类</span>
      </tab-bar-item>
      <tab-bar-item link="/cart">
        <i slot="icon-slot" class="iconfont icon-cart" ></i>
        <span slot="text-slot">购物车</span>
      </tab-bar-item>
      <tab-bar-item link="/profile">
        <i slot="icon-slot" class="iconfont icon-user" ></i>
        <span slot="text-slot">我的</span>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from 'common/tabbar/TabBar'
import TabBarItem from 'common/tabbar/TabBarItem'
// import TabBar from '../common/TabBar'
// import TabBarItem from '../common/TabBarItem'
export default {
  components: {
    TabBar,TabBarItem
  }
}
</script>

<style>

</style>