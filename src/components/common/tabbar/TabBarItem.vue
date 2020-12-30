<template>
  <div id="tab-bar-item">
    <div class="item-container" :style="activeStyle" @click="itemClick"> 
      <div class="icon-area">
        <slot name="icon-slot"></slot>
      </div>
      <div class="text-area">
        <span>
          <slot name="text-slot"></slot>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true
    },
    activeColor: {
      type: String,
      default: '#ff8198'
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.link) !== -1
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.link)
    }
  }
};
</script>

<style scoped>
#tab-bar-item {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 100%;
}
.item-container {
  box-sizing: border-box;
  padding-top: 2px;
  height:47.999px;
}
.icon-area {
  font-size: 24px;
}
.text-area {
  font-size: 12px;
}
</style>