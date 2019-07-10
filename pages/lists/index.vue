<template>
  <div>
    <ul>
			<li v-for="item  in lists" :key="item.id">
				<nuxt-link :to="'/detail/'+item.id">{{item.name}}</nuxt-link>
				
			</li>
		</ul>
  </div>
</template>

<script>
export default {
	data() {
		return {
			lists: '',
		}
	},
	created() {
		this. getData()
	},
	methods: {
		async getData() {
			const { data } = await this.$axios.get('../json/test.json')
			this.lists = data.data;
		}
	}
}
</script>

<style lang="scss">

</style>

