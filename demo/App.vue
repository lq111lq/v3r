<template>
  <div id="app">
    <ol>
      <li><a href="#/position">position scale rotation</a></li>
    </ol>
    <router-view class="router-view"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {

}

ol {
  float: left;
  width: 250px;
}

.router-view {
  float: left;
  width: 600px;
}
</style>
