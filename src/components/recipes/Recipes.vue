<template>
    <main>
      
    </main>
</template>

<script>
import data from '../../../public/cybercook.json'


export default {
    
  data() {
    return {
      data: data
    }
  },
  created() {
    console.log(data)
  }

}
</script>

<style>

</style>
