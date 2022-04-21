<template>
  <div>
    <MainHeader />
    <br />
    <br />
    <br />
    <br />
    <!-- <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" /> -->
    <title>User Login Page</title>
    <!-- <link rel="stylesheet" href="./login_form_2.css" /> -->
    <!-- </head> -->
    <body>
      <div class="content">
        <div class="flex-div">
          <div class="name-content">
            <h1 class="logo">User Log In</h1>
          </div>
          <h4>{{ this.$store.state.errorMsg }}</h4>
          <form @submit.prevent="login">
            <input
              v-model="formData.email"
              type="text"
              placeholder="Enter your email.."
              required
            />
            <br>
            <br>
            <input
              v-model="formData.password"
              type="password"
              placeholder="Password"
              required
            />
            <br />
            <br />
            <button class="login">Log In</button>
            <!-- <br /> -->
            <!-- <button class="login">Register</button> -->
            <!-- <a href="#">Forgot Password ?</a> -->
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
  name: 'login',
  // components: { UserHeader },
  data() {
    return {
      email: '',
      password: '',
      formData: {
        email: this.email,
        password: this.password,
      },
    }
  },
  methods: {
    async login() {
      console.log(this.formData.email)
      console.log(this.formData.password)
      await this.$store.dispatch('login', this.formData)
      this.$router.push({ path: '/UserHome' })
    },
  },
  head() {
    return {
      title: 'login page',
      meta: [
        {
          hid: 'loginpage',
          name: 'loginpage',
          content: 'user can log in here',
        },
      ],
    }
  },
}
</script>

<style scoped>
.content{
  text-align: center;
}
.login{
  
background-color: rgb(92, 180, 218);
  border-radius: 5px;
  border: 0px solid;
  padding: 7px;
}

</style>