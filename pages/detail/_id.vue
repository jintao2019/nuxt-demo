<template>
  <div class="container">
    <div>{{$route.params.id}}</div>
    <ul>
      <div>{{title}}</div>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData ({ params }) {
    let { data } = await axios.get('../json/test.json')
    const id = parseInt(params.id.slice(2)) - 1
    return { title: data.data[id].name }
  },
  created() {
    console.log(this)
  }
}
</script>

<style lang="scss">

</style>

