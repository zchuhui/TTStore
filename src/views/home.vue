<template>
    <div>
        {{msg}}
    </div>
    
</template>

<script>
import Layout from '@/components/Layout'

export default {
  name: "home",
  components:{
      Layout
  },
  data() {
    return {
      msg: "This is home"
    };
  },
  methods: {}
};
</script>
