<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-success">
		<div class="container-fluid">
			<router-link :to="{ name: 'index' }"
				><a class="navbar-brand" href=""
					>Vue Social Media</a
				></router-link
			>
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav">
					<li class="nav-item">
						<a class="nav-link active" aria-current="page" href="#"
							>Timeline</a
						>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">Browse</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">My Profile</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#" tabindex="-1">Logout</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	name: "navbar",
	components: {},
}
</script>

<style scoped>
nav {
	padding: 12px;
}
</style>
