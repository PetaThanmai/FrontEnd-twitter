<template>
  <div class="todo-item">
    <!-- <div v-if="update"> -->
      <div class="end">
        <p v-if="isUpdating">
          <input type="text" v-model="title" required />
        </p>
        <p v-else>{{ post.title }}</p>
        <div class="btns" v-if="post.userId == $store.state.id">
          <button v-if="!isUpdating" class="btn" @click="updatePost">
            Update
          </button>
          <button
            v-if="!isUpdating"
            class="btn-danger"
            @click="deletePost(post.id)"
          >
            Delete
          </button>
          <button class="button" v-else @click="submitPost">Submit</button>
        </div>
      </div>
      <br>
      <br>

    <!-- </div> -->

    <div>
      <h3>COMMENTS</h3>
      <div v-for="(comments, i) in comments" :key="i">
        <div>
          {{ comments.commenttext
          }}<button
            class="delete"
            v-if="comments.userId == $store.state.id"
            @click="deleteComment(comments.id)"
          >Delete</button>
        </div>
      </div>
      <div>
        <br>
        <label for="">GIVE COMMET</label>
        <input type="text" v-model="commenttext" />
        <button class="comment" @click="createComment">Comment</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      commenttext: '',
      isUpdating: false,
      title: '',
    }
  },
  //   props: {
  //     item: {
  //       type: Object,
  //       required: true,
  //     },
  //   },
  computed: {
    ...mapState(['post', 'id', 'comments']),
  },
  async created() {
    await this.$store.dispatch('getAllComments')
    return
  },
  methods: {
    async createComment() {
      await this.$store.dispatch('createComment', this.commenttext)
      await this.$store.dispatch('getAllComments')
      this.commenttext = ''
    },
    async deleteComment(id) {
      await this.$store.dispatch('deleteComment', id)
      await this.$store.dispatch('getAllComments')
    },
    updatePost() {
      this.isUpdating = true
      this.title = this.post.title
     
    },
   
    async deletePost(id) {
      console.log(id)
      await this.$store.dispatch('deletePost', id)
      this.$router.push('/UserHome')
    },
    async submitPost() {
      this.isUpdating = false
      await this.$store.dispatch('updatePost', this.title)
      this.$store.commit('updatePost', this.title)
    },
  },
}
</script>

<style scoped>
.todo-item{
  text-align: center;
}
.delete{
  margin: 10px;
  padding: 5px;
  background-color: rgb(94, 132, 220);
  border: 0px solid;
  color: white;
  border-radius: 7px;
}



</style>
