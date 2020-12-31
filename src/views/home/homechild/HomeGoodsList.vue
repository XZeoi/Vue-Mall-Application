<template>
  <div class="home-goods-list">
    <goods-list>
      <goods-list-item v-for="(item, index) in goodsList" :key="index" :itemList="item">
        
      </goods-list-item>
    </goods-list>
  </div>
</template>

<script>
import {GoodsList, GoodsListItem} from 'content/goodslist'

export default {
  props: {
    goodsList: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  components: {
    GoodsList,
    GoodsListItem
  }
}
</script>

<style>

</style>