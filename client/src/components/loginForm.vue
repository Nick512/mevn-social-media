<template>
	<div class="login container mt-4">
		<form class="mx-auto">
			<div class="row">
				<h1 class="col-md-12">Login</h1>
			</div>
			<div class="row mt-3">
				<input
					type="text"
					id="username"
					name="username"
					placeholder="Username"
					v-model="name"
					autocomplete="off"
				/>
			</div>
			<div class="row mt-3">
				<input
					type="text"
					id="password"
					name="password"
					placeholder="Password"
					v-model="password"
					autocomplete="off"
				/>
			</div>
			<div class="row mt-2">
				<div id="button-col" class="col-md-12 mt-3">
					<button
						type="submit"
						class="btn btn-success"
						v-on:click="handleSubmit($event)"
					>
						Login
					</button>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
import axios from "axios"
export default {
	name: "loginForm",
	data: function() {
		return {
			name: null,
			password: null,
			errors: [],
		}
	},
	methods: {
		handleSubmit: function(event) {
			event.preventDefault()
			if (event) {
				event.preventDefault()
			}

			this.errors = []

			if (this.errors.length == 0) {
				axios
					.post("/api/user/login", {
						name: this.name,
						password: this.password,
					})
					.then(
						(res) => {
							console.log(res.data)
							if (res.data.user) {
								this.$router.push("/profile")
							}
						},
						(error) => {
							console.log(error)
						}
					)
			}
		},
	},
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

input[type="text"] {
	border: none;
	background-color: rgb(241, 252, 243);
	border-bottom: 1px solid green;
	font-size: 16px;
	padding: 20px 0px;
}

input:focus {
	outline: none;
}

#button-col {
	padding-left: 0px;
}
</style>
