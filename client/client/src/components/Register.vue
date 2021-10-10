<template>
  <div id="app">
    <form >
      <h1>Register</h1>
      <div style="margin-bottom:1em">
        <label for="name">Full Name: </label>
        <input name="name" v-model="name"  />
      </div>
      <div style="margin-bottom:1em">
        <label style="margin-right:2em" for="email">Email:     </label>
        <input
          name="email"
          v-model="email"
          type="email"
        />
      </div>
      <div style="margin-bottom:1em">
        <label for="password">Password: </label>
        <input name="password" v-model="password" />
      </div>
      <input type="submit" value="Register" />
    </form>
  </div>
</template>
