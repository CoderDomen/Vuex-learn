<template>
  <div>
    <p>当前的count为：{{count}}</p>
    <button @click="add">点击+1</button>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'

export default {
  data() {
    return {

    }
  },
  computed:{
    ...mapState(['count'])
  },
 methods:{
   ...mapMutations(['ADDITION']),

   add(){
     this.ADDITION()
   }
 
 }
}
</script>

<style scoped>
</style>
