<template>
	<div class="login container mt-4">
		<form class="mx-auto">
			<div class="row">
				<h1 class="col-md-12">Register</h1>
			</div>
			<div class="alert alert-danger" role="alert" v-if="errors.length">
				<ul>
					<li v-for="error in errors" :key="errors[error.length]">
						{{ error }}
					</li>
				</ul>
			</div>
			<div class="row mt-3">
				<input
					type="text"
					id="username"
					name="username"
					placeholder="Username"
					autocomplete="off"
					v-model="userName"
				/>
			</div>
			<div class="row mt-3">
				<input
					type="text"
					id="password"
					name="password"
					placeholder="Password"
					autocomplete="off"
					v-model="password"
				/>
			</div>
			<div class="row mt-3">
				<input
					type="text"
					id="passwordConfirm"
					name="passwordConfirm"
					placeholder="Confirm Password"
					autocomplete="off"
					v-model="passwordConfirm"
				/>
			</div>
			<div class="row mt-2">
				<div id="button-col" class="col-2 col-md-12 mt-3">
					<button
						type="submit"
						class="btn btn-success"
						v-on:click="handleSubmit($event)"
					>
						Register
					</button>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
import axios from "axios"
export default {
	name: "registerForm",
	data: function() {
		return {
			userName: null,
			password: null,
			passwordConfirm: null,
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

			if (!this.userName || !this.password || !this.passwordConfirm) {
				this.errors.push("Please fill in all fields")
			} else {
				if (this.password.length < 5) {
					this.errors.push("Password is too short")
				}
				if (this.password != this.passwordConfirm) {
					this.errors.push("Passwords do not match")
				}
			}

			if (this.errors.length == 0) {
				axios
					.post("/api/user", {
						name: this.userName,
						password: this.password,
					})
					.then(
						(res) => {
							console.log(res)
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

li {
	list-style: none;
}
input[type="text"] {
	border: none;
	background-color: rgb(241, 252, 243);
	border-bottom: 1px solid green;
	font-size: 16px;
	padding: 15px 0px;
}

input:focus {
	outline: none;
}

#button-col {
	padding-left: 0px;
}
</style>
