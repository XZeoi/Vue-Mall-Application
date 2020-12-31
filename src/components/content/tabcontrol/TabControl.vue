<template>
  <div class="tab-control">
    <div
      class="tab-item"
      v-for="(item, index) in titleArray"
      :key="index"
      @click="itemClick(index)"      
    >
      <span :class="{ active: currentIndex === index }">
        {{ item }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titleArray: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('tabClick', index)
    }
  }
    
}
</script>

<style scoped>
.tab-control {
  display: flex;
  width: 100%;
  height: 44px;
  line-height: 44px;
  text-align: center;
  background-color: #fff;
}
.tab-item {
  flex: 1;
  position: relative;
}
.active {
  padding: 3px;
  color: #ff5777;
  border-bottom: 2px solid #ff5777;
}
</style>