<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-4 is-offset-4">
          <h2 class="title has-text-centered">Welcome back!</h2>

          <Notification :message="error" v-if="error" />

          <form method="post" @submit.prevent="login">
            <div class="field">
              <label class="label">username</label>
              <div class="control">
                <input
                  type="email"
                  class="input"
                  name="username"
                  v-model="username"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input
                  type="password"
                  class="input"
                  name="password"
                  v-model="password"
                />
              </div>
            </div>
            <div class="control">
              <button type="submit" class="button is-dark is-fullwidth">
                Log In
              </button>
            </div>
          </form>
          <div class="has-text-centered" style="margin-top: 20px">
            <p>
              Don't have an account?
              <nuxt-link to="/register">Register</nuxt-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Notification from '~/components/Notification'

export default {
  components: {
    Notification,
  },

  data() {
    return {
      username: 'test@test.tn',
      password: 'Azerty$20',
      error: null
    }
  },

  methods: {
    async login() {
      try {
      let response=  await this.$auth.loginWith('local', {
          data: {
          username: this.username,
          password: this.password
          }
        })
       // await this.$auth.fetchUser()

      //   this.$store.commit('increment', 1)
      // // chgt de la valeur affichée
      // this.value = this.$store.state.counter
      // // sauvegarde du store dans le cookie de session
       //this.$cookies.set('session', { store: this.$store.state }, { path: this.$nuxt.context.base, maxAge: this.$nuxt.context.env.maxAge })
      
      
      
      
      // this.$axios.post('/auth/signin', {
      //  username: this.username,
      //     password: this.password
      //   }).then((resp) => {
      //     // this.$auth.setToken('local', 'Bearer ' + resp.data.access_token)
      //     // this.$auth.setHeader();
      //     // this.$auth.setRefreshToken('local', resp.data.refresh_token)
          
      //     this.$axios.setHeader('Set-Cookie', + resp.data.access_token)
      //     this.$auth.ctx.app.$axios.setHeader('Set-Cookie', resp.header)
      //     this.$axios.get('/auth/me').then((resp) => { this.$auth.setUser(resp.data); this.$router.push('/') })
      //   })
      
      // await this.$fetch('http://localhost:3002/auth/signin',{
      //   method: 'Post',
      //   headers:{
      //     'Content-Type': 'text/plain',
      //     'Access-Control-Allow-Origin': '*'},
      //   credentials:'include',
        
      //   body: JSON.stringify({
      //      username: this.username,
      //      password: this.password
      //      })
      //   })  

         this.$router.push('/')
        // alert(JSON.stringify(this.$auth.loggedIn))
      } catch (e) {
        this.error = e.response.data.message
      }
      
    //  await  this.$auth.loginWith('local', {
    //       data: {
    //       username: this.username,
    //       password: this.password
    //      }
    //     })
    //      .then((response) => {
    //     this.$store.commit("setUser", response.data);
    //     this.$store.commit("setAuthenticated", true);
        
    //      })
        
      
    }
  }
}
</script>