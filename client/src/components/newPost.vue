<template>
    <div class="container mb-4">
        <div class="row">
            <div class="card col-8 mt-4  mx-auto">
                <div class="card-body w-100">
                    <h5 class="card-title">New Post</h5>
                    <input
                        type="text"
                        placeholder="Post Title"
                        autocomplete="off"
                        name="postTitle"
                        id="postTitle"
                        v-model="title"
                    />
                    <textarea name="PostBody" id="postBody" placeholder="Post Body" v-model="body" />
                    <div class="cont">
                        <button type="button" v-on:click="submit" class="btn btn-success">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
export default {
    name: "newPost",
    data: function() {
        return {
            title: "",
            body: "",
            errors: [],
            userID: "test",
        }
    },
    methods: {
        submit: function() {
            if (this.title.length < 3) {
                this.errors.push("title error")
            } else if (this.body.length < 3) {
                this.errors.push("body error")
            }

            if (this.errors.length == 0) {
                axios.post("/api/post", {
                    title: this.title,
                    body: this.body,
                    createdBy: this.userID,
                })
            }

            console.log(this.errors)
            this.errors = []
        },
    },
}
</script>
<style>
.card {
    min-width: 640px;
    min-height: 300px;
}

input[type="text"] {
    border: none;
    border-bottom: 1px solid green;
    font-size: 16px;
    padding: 15px 0px;
    text-align: center;
    width: 100%;
    margin-bottom: 30px;
}
textarea {
    border: none;
    border: 1px solid green;
    font-size: 16px;
    padding: 15px 0px;
    text-align: center;
    width: 100%;
    min-height: 100px;
}

textarea:focus {
    outline: none;
}

input:focus {
    outline: none;
}
.cont {
    width: 25%;
    margin: auto;
}
button {
    width: 100%;
}
</style>
