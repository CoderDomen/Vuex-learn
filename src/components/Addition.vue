<template>
  <div>
    <p>当前的count为：{{count}}</p>
    <button @click="add">点击+1</button>
    <button @click="addNum(3)">点击+3</button>
    <button @click="asyncAdd(3)">异步+3</button>
    
    <button @click="asyncc">异步</button>
  </div>
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex'

export default {
  data() {
    return {

    }
  },
  computed:{
    ...mapState(['count'])
  },
 methods:{
   ...mapMutations(['add','addNum']),
   ...mapActions(['asyncAdd']),
   asyncc(){
     this.$store.dispatch('asyncAdd',100).then(()=>{
      let arr = '1112|2222'
      console.log(arr.split('|').join(','));
      
     })
   }



 
 }
}
</script>

<style scoped>
</style>
