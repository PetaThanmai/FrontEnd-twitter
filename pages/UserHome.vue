<template>
  <div class="container">
    <UserHeader />
    <br>
    <br>
    <br>
    <br>
    <br>
  
    <div class="title">
      <!-- <h1>MY TODO LIST</h1> -->
      <!-- <h6>What are you doing today?</h6> -->
    </div>

    <!-- <p id="error">Nothing to do today?</p> -->

    <table id="customers">
      <h1>ALL TWITTER POSTS</h1>

      <tr v-for="(post, i) in $store.state.Posts" :key="i">
        <td>{{ i + 1 }}</td>
        <td>
          {{ post.title
          }}<button class="button" @click="goToPost(post.id)">-></button>
        </td>
      </tr>
    </table>
    <!-- <br />
    <br />
    <br /> -->
    <!-- <div class="done"><input type="text" /><button>DONE</button></div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      errorMsg: '',
    }
  },
  async mounted() {
    await this.$store.dispatch('getAllPosts')
    // await this.$store.dispatch('getAllComments')
    return
  },

  methods: {
    async goToPost(id) {
      console.log(id)
      await this.$store.dispatch('goToPost', id)
      await this.$router.push('/Post')
    },
  },
}
</script>

<style scoped>
.button{
  float: right;
}
</style>