<template>
  <div>
    <UserHeader />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    <div class="profile">
      <br />
      <br />
      <h1>USER INFO</h1>
      <div v-if="update">
        <div>
          NAME:
          <input type="text" v-if="isVisible" v-model="full_name" required />
          <p v-else>{{ name }}</p>
          <button class="work1" v-if="!isVisible" @click="Visible">
            Update
          </button>

          <button class="work" v-else @click="update">Submit</button>
        </div>
      </div>
      <p>EMAIL:{{ email }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      isVisible: false,
      full_name: '',
    }
  },
  computed: {
    ...mapState(['name', 'email']),
  },
  // props: {
  //   item: {
  //     type: Object,
  //     required: true,
  //   },
  // },
  methods: {
    Visible() {
      this.isVisible = !this.isVisible
      this.full_name = this.name
    },
    async update() {
      this.isVisible = false

      await this.$store.dispatch('updateUser', this.full_name)
      await this.$store.commit('updateUser', this.full_name)
    },
    // async deleteTodo(id) {
    //   console.log(id)
    //   await this.$store.dispatch('deleteTodo', id)
    //   await this.$store.dispatch('getAllTodos')
    // },
  },
}
</script>

<style>

</style>