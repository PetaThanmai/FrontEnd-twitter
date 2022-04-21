<template>
  <div>
    <UserHeader />
   
    <title>CREATE POST HERE</title>
    
    <body>
      <div class="content">
        <div class="flex-div">
          <div class="name-content">
            <h1 class="logo">CreatePost</h1>
          </div>
          <form @submit.prevent="CreatePost">
            <input
              v-model="formData.title"
              type="text"
              placeholder="Give Title"
              required
            />

            <button class="login">CreatePost</button>
            <!-- <a href="#">Forgot iscompleted ?</a> -->
            <hr />
            <!-- <button class="create-account">Create New Account</button> -->
          </form>
        </div>
      </div>
    </body>
    <!-- </html> -->
  </div>
</template>

<script>
// import axios from 'axios'
// import UserHeader from "~/components/UserHeader.vue";
export default {
  name: 'createpost',
  // components: { UserHeader },
  data() {
    return {
      title: '',
      formData: {
        title: this.title,
      },
    }
  },
  methods: {
    async CreatePost() {
      console.log(this.formData.title)
      await this.$store.dispatch('CreatePost', this.formData)
      this.$router.push({ path: '/UserHome' })
    },
  },
  head() {
    return {
      title: 'Create Todo Page',
      meta: [
        {
          hid: 'create todo',
          name: 'create todo page',
          content: 'user can create here',
        },
      ],
    }
  },
}
</script>

<style>

</style>