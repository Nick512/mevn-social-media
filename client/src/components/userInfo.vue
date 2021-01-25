<template>
	<div class="container mb-4">
		<div class="row">
			<div class="card col-8 mt-4  mx-auto">
				<div class="card-body w-75">
					<h5 class="card-title">User name</h5>
					<p class="card-text">
						Some quick example text to build on the card title and
						make up the bulk of the card's content.
					</p>
					<p class="follow">Followers:</p>
					<span>100</span><br />
					<p class="follow">Following:</p>
					<span>100</span><br />
					<p class="follow posts">Posts:</p>
					<span>100</span><br />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "userInfo",
}
</script>

<style scoped>
.follow {
	font-size: 0.9rem;
	margin-bottom: 0px;
	width: 25%;
	margin-right: 0px;
	display: inline;
	padding-right: 2px;
}

.posts {
	padding-left: 28px;
	text-align: right;
}

span {
	display: inline-block;
	font-size: 0.9rem;
}

.card {
	background-color: rgb(248, 250, 248);
}
</style>
