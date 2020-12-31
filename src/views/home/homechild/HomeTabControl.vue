<template>
  <div>
    <tab-control :titleArray="titleArray" @tabClick="tabClick">
    <!-- <tab-control :titleArray="titleArray" @tabClick="tabClick"> -->
    </tab-control>
  </div>
</template>

<script>
import TabControl from 'content/tabcontrol/TabControl'

export default {
  props: {
    titleArray: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  components: {
    TabControl
  },
  methods: {
    tabClick(index) {
      this.$emit('tabClick',index)
    }
  }
}
</script>

<style scoped>
</style>