<template >
  <header>
    {{ msg }}
    {{ cc }}

  </header>
</template>

<script>

export default {
  name: 'Header',
  props: {
    msg: String
  },
  data() {
    return {
      cc: 'dd'
    }
  }
}
</script>


<style scoped>
h3 {
  margin: 40px 0 0;
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

.c1 {
  display: none;
}
</style>
