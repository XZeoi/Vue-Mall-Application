<template>
  <div>
    <keep-alive><router-view/></keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from './MainTabBar'
export default {
  components: {
    MainTabBar
  }
}
</script>

<style>

</style>