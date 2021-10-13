<template lang="html">
  <div id="app">
    <form method="post">
      <h1>Register</h1>
      <div style="margin-bottom:1em">
        <label for="name">Full Name: </label>
        <input name="name" v-model="User.name" />
      </div>
      <div style="margin-bottom:1em">
        <label style="margin-right:2em" for="email">Email: </label>
        <input name="email" v-model="User.email" type="email" />
      </div>
      <div style="margin-bottom:1em">
        <label for="password">Password: </label>
        <input name="password" v-model="User.password" />
      </div>
      <v-btn elevation="2">
        <button @click="addToApi($event)">Register</button>
        <p> {{User.name}}</p>
        <h1> {{data.name}}</h1>
      </v-btn>
      <ul>
        <li v-for='user in users' :key='user._id'>
          <input> {{user}}
        </li>
      </ul>
    </form>
  </div>
</template>

<script>
import RegisterApi from '@/services/RegisterApi.js'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcomee',
      data: [],
      User: { name: '', email: '', password: '' }
    }
  },
  mounted () {
    this.loadUser()
  },
  methods: {
    async addToApi () {
      event.preventDefault()
      const response = await RegisterApi.addUser(this.User)
      this.users.push(response.data)
      this.User = ''
    }
  },
  async loadUser () {
    const response = await RegisterApi.getUsers()
    this.users = response.User
  }
}
</script>
