<template>
  <div id="app">
    <header class="d-flex align-items-center px-5">
      <div class="title-part">
        <img src="./assets/logo.png">
        <span class="pl-3">{{title}}</span>
      </div>
    </header>
    <div class="main-body mt-4">
      <div class="container">
        <form class="form-inline">
          <div class="form-group" :class="{isFocusIn: isHovering}">
            <label for="fromdate">Search here</label>
            <input type="text" class="form-control" ref="searchTo" placeholder="Search" @focusin="focusIn()" 
              @focusout="focusOut()" />
          </div>
          <div class="form-group pl-4">
            <button type="button" class="btn btn-primary btn-block" @click="searchDeals()">search deals</button>
          </div>
        </form>
        <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
          <span id="erroemsg" v-if="dealerr">
          {{dealErrorMsg}}
          </span>
        </transition>
        <transition name="fade">
          <div v-if="searchId" class="mt-5">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <router-link class="nav-link" :to="'/'">Deal details <span class="sr-only">(current)</span></router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" :to="'/customer'">customer details</router-link>
                  </li>
                  
                </ul>
              </div>
            </nav>

            <router-view/>

          </div>
        </transition>
      </div>
    </div>
    <footer>

    </footer>
    
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return{
      title:'Deal UI',
      isHovering: false,
      searchId:false,
      dealErrorMsg:'',
      dealerr:false
    }
  },
  methods: {
    focusIn: function()
    {
      this.isHovering = true;
    },
    focusOut:function(){
      console.log("value = "+this.$refs.searchTo.value);
      if(this.$refs.searchTo.value == ''){
        this.isHovering = false;
      }
    },
    searchDeals:function(){
      if(this.$refs.searchTo.value != ''){
        this.dealErrorMsg = '';
        if(this.$refs.searchTo.value.length <= 5){
          this.dealerr = true;
          this.dealErrorMsg = 'Enter min 6 no deal Id';
        }
        else{
          this.searchId = true;
        }

      }else{
         this.dealerr = true;
        this.dealErrorMsg = 'Enter deal Id';
      }
    }
  },
  computed:{
    currentPage(){
      console.log(this.$route.path);
      return this.$route.path;
    }
  }
}
</script>

<style>

  @import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
  @import 'https://cdn.jsdelivr.net/npm/animate.css@3.5.1';

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  .hovering,#erroemsg{
    color: red
  }
  header{
    background-color: #fff;
    height: 80px;
    border-bottom: 2px solid #ddd;
  }
  header img{
    height: 70px;
  }
  header span{
    font-weight: 600;
    font-size: 40px;

  }
  .form-control {
		background: no-repeat bottom,50% calc(100% - 1px);
		background-size: 0 100%,100% 100%;
		border: 0;
		transition: background 0s ease-out;
		padding-left: 0;
    padding-right: 0;
    padding-bottom: 0;
		background-image: linear-gradient(0deg,#3f51b5 2px,rgba(63,81,181,0) 0),linear-gradient(0deg,rgba(0,0,0,.26) 1px,transparent 0);
  }
  .form-control::placeholder{
		opacity: 0;
	}
	.form-group {
		position : relative;
	}
  .form-group label{
		position: absolute;
		font-size: 1rem;
		top: 10px;
		opacity: 0.4;
		transition-duration: .3s;
	}
	.form-group.isFocusIn label{
		font-size: 75%;
		top: -2px;
		opacity: 1;
		transition-duration: .3s;
  }
  .form-group.isFocusIn .form-control {
    color: #495057;
		background-color: #fff;
		border-color: transparent;
		outline: 0;
		box-shadow: none;
		background-size: 100% 100%,100% 100%;
		transition-duration: .3s;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .8s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .navbar-light .navbar-nav .nav-link{
    position: relative;
    font-weight: 600;
  }
  .navbar-light .navbar-nav .nav-link.router-link-exact-active{
    color: red;
  }
  a.nav-link.router-link-exact-active.router-link-active:before {
    border-bottom: 3px solid #ddd;
    content: '';
    height: 1px;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
  }
</style>
