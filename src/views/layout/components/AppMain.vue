<template>
  <section class="app-main">
    <router-view />
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  components: {},
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

<style lang="scss" scoped>
.app-main {
  /* 50= navbar  50  */
  min-height: calc(100vh - 80px);
  width: 100%;
  position: relative;
  overflow: hidden;
  background: gray;
}
</style>
