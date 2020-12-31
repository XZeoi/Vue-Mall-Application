<template>
  <div>
    <tab-control :titleArray="titleArray">
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
  }
}
</script>

<style scoped>
</style>