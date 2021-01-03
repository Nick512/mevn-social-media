<template>
	<div class="login container mt-4">
		<form class="mx-auto">
			<div class="row">
				<h1 class="col-md-12">Login</h1>
			</div>
			<div class="row mt-3">
				<label for="username" class="form-label">Username</label>
				<input
					type="text"
					class="form-control"
					id="username"
					name="username"
					placeholder="Username"
				/>
			</div>
			<div class="row mt-3">
				<label for="password" class="form-label">Password</label>
				<input
					type="text"
					class="form-control"
					id="password"
					name="password"
					placeholder="Password"
				/>
			</div>
			<div class="row mt-2">
				<div class="col-md-12 mt-3">
					<button type="submit" class="btn btn-success">
						Login
					</button>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
export default {
	name: "loginForm",
}
</script>

<style scoped>
h1 {
	text-align: center;
}
form {
	max-width: 50%;
}

label {
	font-weight: bold;
}
</style>
