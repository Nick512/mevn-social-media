<template>
	<div class="container">
		<div class="row">
			<div class="card col-8 mt-4  mx-auto">
				<div class="card-body w-100 ">
					<h5 v-if="timeline == 'true'" class="card-title user">
						{{ createdBy }}
					</h5>
					<h5 class="card-title">{{ title }}</h5>
					<p class="card-text">
						{{ body }}
					</p>
					<i v-on:click="like" :id="postID" class="far fa-heart"></i
					><span>{{ numLikes }}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "post",
	props: {
		timeline: String,
		title: String,
		body: String,
		likes: Number,
		createdBy: String,
		createdAt: String,
		postID: String,
	},
	data: function() {
		return {
			numLikes: this.likes,
		}
	},

	methods: {
		like: function() {
			let icon = document.getElementById(this.postID)
			if (icon.className == "fas fa-heart") {
				icon.setAttribute("class", "far fa-heart")
				this.numLikes--
			} else if (icon.className == "far fa-heart") {
				icon.setAttribute("class", "fas fa-heart")
				this.numLikes++
			}
		},
	},
}
</script>

<style scoped>
i {
	color: green;
}
span {
	margin-left: 5px;
	font-size: 0.9rem;
	color: green;
}
.user {
	text-align: center;
}

.card {
	background-color: rgb(248, 250, 248);
}
</style>
