<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 v-if="users">Users ({{users.length}})</h2>
    <ul>
      <li v-for="user in users">id: {{user.id}}, name: {{user.name}}</li>
    </ul>
  </div>
</template>

<script>
var $ = require('jquery')
var users = null

export default {
  name: 'hello',

  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      users: users
    }
  },

  created () {
    this.fetchData()
  },

  methods: {
    fetchData () {
      $.getJSON('/users', function (data) {
        console.log(users)
        users = data
        console.log(users)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
h1, h2
  font-weight: normal

ul
  list-style-type: none
  padding: 0;

li
  display: inline-block
  margin: 0 10px

a
  color: #42b983
</style>
