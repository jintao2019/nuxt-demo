<template>
  <div class="container">
    <div>这是home</div>
	<div>counter is {{counter}}</div>
	<notifications group="foo" />
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
	computed: mapState(['counter']),
	mounted() {
		this.$notify({
			group: 'foo',
			title: 'Important message',
			text: 'Hello user! This is a notification!'
		});
	},
}
</script>

<style lang="scss">

</style>

