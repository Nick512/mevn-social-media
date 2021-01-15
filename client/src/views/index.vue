<template>
	<div class="" id="cont">
		<div class="row">
			<navbar />
		</div>
		<div class="row">
			<titleVue />
		</div>
	</div>
</template>

<script>
import navbar from "../components/navbar"
import titleVue from "../components/titleVue"
export default {
	name: "index",
	components: {
		navbar,
		titleVue,
	},
}
</script>

<style></style>
