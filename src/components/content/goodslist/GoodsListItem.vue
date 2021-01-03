<template>
  <div class="goods-list-item" @click="itemClick">
      <img :src="itemList.show.img" alt="" />
    <div class="goods-info">
      <p>{{ itemList.title }}</p>
      <div>
        <span class="price-icon">¥</span>
        <span class="front-price">{{ itemList.price | showFrontPrice }}</span>
        <span class="back-price">{{ itemList.price | showBackPrice }}</span>
        <span class="price-text">{{ itemList.sale | handleNumber}}人付款</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itemList: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  methods: {
    itemClick() {
      console.log('------')
      this.$router.push('/detail'+this.itemList.iid)
    }   
  }
};
</script>

<style scoped>
.goods-list-item {
  width: 48%;
}
.goods-list-item img {
  width: 100%;
  border-radius: 5px;
}
.goods-info {
  font-size: 13px;
  overflow: hidden;
  margin: 10px 0 15px 0;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 5px;
}
.price-icon {
  font-size: 12px;
  margin-right: 2px;
  color: var(--color-tint);
}
.front-price {
  font-size: 18px;
  color: var(--color-tint);
}
.back-price {
  font-size: 12px;
  margin-right: 7px;
  color: var(--color-tint);
}
.price-text {
  font-size: 12px;
  color: #aaa;
}
</style>