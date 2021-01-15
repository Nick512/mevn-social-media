<template>
	<div class="title">
		<h1>Vue Social Media</h1>
		<router-link :to="{ name: 'login' }">
			<button type="button" class="btn btn-success col-md-3">
				Log In
			</button>
		</router-link>

		<router-link :to="{ name: 'register' }">
			<button type="button" class="btn btn-success col-md-3">
				Make an Account
			</button>
		</router-link>
	</div>
</template>

<script>
export default {
	name: "titleVue",
	components: {},
}
</script>

<style scoped>
h1 {
	text-align: center;
	padding: 30px;
}
.title {
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
}

button {
	display: block;
	margin: auto;
	margin-top: 10px;
	transition: transform 0.15s ease-in;
}
a {
	text-decoration: none;
}
button:hover {
	transform: scale(0.99);
	transition: transform 1 ease-in;
}
</style>
