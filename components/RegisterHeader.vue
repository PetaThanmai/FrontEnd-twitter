<template>
  <div>
    <nav class="nav">
      <ul class="list">
        <li>
          TWITTER
        </li>
        <li>
          <nuxt-link to="/">Logout</nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'MainHeader',
}
</script>

<style scoped>
.nav{
  padding: 10px;
  background-color: rgb(231, 40, 221);
  border-radius: 20px;

}
.list{
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  font-size: bold;
}
</style>