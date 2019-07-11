<template>
  <div class="container">
    <div>这是home</div>
		<notifications group="foo" />
  </div>
</template>

<script>
export default {
	mounted() {
		this.$notify({
			group: 'foo',
			title: 'Important message',
			text: 'Hello user! This is a notification!'
		});
	}
}
</script>

<style lang="scss">

</style>

