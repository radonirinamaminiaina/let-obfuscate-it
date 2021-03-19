<template>
  <div>
    <h1 :class="$style.articleTitle">Let obfuscate it</h1>
    <p>
      If you want to know about me, please visite
      <a href="https://radonirina.app" target="_blank" title="">my site</a>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style module>
.articleTitle {
  color: #222;
  text-align: center;
  padding: 50px 0;
}
p {
  text-align: center;
}
a {
  color: rgb(20, 100, 248);
  text-decoration: none;
}
</style>
