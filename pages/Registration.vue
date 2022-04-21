<template>
  <div>
    <RegisterHeader />
    <div class="wrapper">
      <h2 id="hid">REGISTER HERE</h2>
      <div id="success" class="suc"></div>
      <div id="error_message"></div>
      <form @submit.prevent="register">
        <div class="input_field">
          <input
            v-model="name"
            type="text"
            placeholder="name"
            id="name"
          />
        </div>
        <br>
        <br>
        <div class="input_field">
          <input v-model="email" type="text" placeholder="Email" id="email" />
        </div>
        <br>
        <br>
        <div class="input_field">
          <input
            v-model="password"
            type="password"
            placeholder="Password"
            id="pass"
          />
        </div>
        <br>
        <br>

        <input class="login" type="submit" value="submit" onclick="return val()" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'registration',

  data() {
    return {
      name: '',
      email: '',
      password: '',
    }
  },
  methods: {
    async register() {
      console.log(this.name)
      console.log(this.email)
      console.log(this.password)
      await this.$store.dispatch('registerUser', {
        name: this.name,
        email: this.email,
        password: this.password,
      })
      await this.$router.push('/')
    },
  },
}
</script>

<style scoped>
.wrapper{
  text-align: center;
}
.login{
  background-color: rgb(92, 180, 218);
  border-radius: 5px;
  border: 0px solid;
  padding: 7px;
}


</style>