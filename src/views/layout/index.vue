<template>
  <div class="app-wrapper">
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <div class="fixed-header">
        <navbar />
      </div>
      <AppMain />
    </div>
  </div>
</template>

<script>
import { AppMain, Navbar, Sidebar } from './components'
export default {
  components: { AppMain, Navbar, Sidebar },
  data () {
    return {

    }
  },
  computed: {},
  watch: {},
  created () { },
  mounted () { },
  methods: {}
}
</script>

<style lang='scss' scoped>
.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - 240px);
}
</style>
