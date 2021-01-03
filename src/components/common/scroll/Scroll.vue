<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll"

export default {
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    this.$nextTick(()=>{
      // 1、创建BScroll对象
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })
      // 2、监听滚动的位置
      if(this.probeType === 2 || this.probeType === 3) {
        this.scroll.on('scroll', (position) => {
          this.$emit('scroll', position)
        })
      }
      // 3、监听上拉事件
      if(this.pullUpLoad) {
        this.scroll.on('pullingUp', () => {
          this.$emit('pullingUpLoad')
        })
      console.log(this.scroll)
      }
    })
  },
  updated() {
    //解决了BScroll滚动，时有效，时无效的BUG
    // 一会儿有效，一会儿无效，刷新后就是无效的
    this.scroll.refresh();
    //
    
  },
  methods: {
    scrollTo(x, y, time = 500) {
      //先进行判断scroll对象是否存在，若不存在就不调用执行后面的方法
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    refresh() {
      this.scroll && this.scroll.refresh()
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp()
    },
    getScrollY() {
      return this.scroll ? this.scroll.y : 0
    }
  }
}
</script>

<style>

</style>