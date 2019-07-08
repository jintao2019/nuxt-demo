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
			lists: [
				{
					name: '足球',
					id: '001'
				},
				{
					name: '篮球',
					id: '002'
				},
				{
					name: '游戏',
					id: '003'
				}
			]
		}
	}
}
</script>

<style lang="scss">

</style>

