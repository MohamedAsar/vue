<template>
<div class="container">
  <table class="table table-bordered mt-5">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">name</th>
        <th scope="col">mailid</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for ="post in posts" :key="post.id">
        <th scope="row">{{post.id}}</th>
        <td>{{post.name}}</td>
        <td>{{post.email}}</td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Customer',
  data () {
    return {
      msg: 'ada poda',
      posts:[]
    }
  },
  created(){
    console.log("created");
    axios.get('https://jsonplaceholder.typicode.com/users').then(posts => {
       this.posts = posts.data
     });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
