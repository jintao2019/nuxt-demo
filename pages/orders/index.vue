<template>
  <div>
    <div>这是orders</div>
    <div>{{counter}}</div>
    <div>
      <button @click="add">add</button>
      <button @click="reduce">reduce</button>
      <button @click ="alertCounter">alert counter!</button>
    </div>
  </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex';

export default {
  computed: mapState(['counter']),
  methods: {
    alertCounter() {
      alert(this.counter)
    },
    ...mapMutations(['add','reduce'])
  }
}
</script>

<style lang="scss">

</style>

