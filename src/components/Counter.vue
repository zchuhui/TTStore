<template>
    <div>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <p>{{ num }}</p>
    </div>
</template>

<script>
export default {
    name:'counter',
    props:['num'],
    data() {
        return {
            msg : 'hellow vue',
            num : 0,
        }
    },
    methods: {
        increment(){
            // 子组件向父组件传数据，只能用 $emit 
            // 其实原理就是调用父组件的方法
            this.$emit("incre");
        },
        decrement(){
            this.$emit("decre");
        }
    }
}
</script>
