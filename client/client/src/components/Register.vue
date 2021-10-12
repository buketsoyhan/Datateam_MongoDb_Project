<template>
  <div id="app">
    <form method="post">
      <h1>Register</h1>
      <div style="margin-bottom:1em">
        <label for="name">Full Name: </label>
        <input name="name" v-model="name" />
      </div>
      <div style="margin-bottom:1em">
        <label style="margin-right:2em" for="email">Email: </label>
        <input name="email" v-model="email" type="email" />
      </div>
      <div style="margin-bottom:1em">
        <label for="password">Password: </label>
        <input name="password" v-model="password" />
      </div>
      <v-btn elevation="2">
        <button @click="register">Register</button>
      </v-btn>
    </form>
  </div>
</template>
<script>
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true})

const peopleSchema = {
  username: String,
  password: String,
  email: String
}

const People = mongoose.model('users', peopleSchema)

app.post('/', function (req, res) {
  let newPeople = new People({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  })
  newPeople.save()
  res.redirect('/')
})
</script>
