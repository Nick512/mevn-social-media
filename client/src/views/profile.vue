<template>
	<div>
		<navbar />
		<userInfo />
		<postIntro />
		<post
			v-for="post in posts"
			:key="post.id"
			:postID="post.postID"
			timeline="false"
			:title="post.title"
			:body="post.body"
			:likes="post.likes"
			:createdBy="post.createdBy"
			:createdAt="posts.createdAt"
		/>
	</div>
</template>

<script>
import navbar from "../components/navbar"
import userInfo from "../components/userInfo"
import postIntro from "../components/postIntro"
import post from "../components/post"

export default {
	components: {
		navbar,
		userInfo,
		postIntro,
		post,
	},
	data: function() {
		return {
			posts: [
				{
					postID: "1",
					title: "Title",
					body: "venrniubnrneuinui",
					likes: 42,
					createdBy: "Nick",
					createdAt: "today",
				},
				{
					postID: "2",
					title: "Title2",
					body: "venrniubnrneuinui2",
					likes: 102,
					createdBy: "Joe",
					createdAt: "today",
				},
			],
		}
	},
}
</script>

<style></style>
