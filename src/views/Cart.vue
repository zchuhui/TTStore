<template>
    <div>
        {{ msg }}
        <div>{{ $route.query.goodsId}}</div>
    </div>
</template>

<script>

export default {
    name:'cart',
    data() {
        return {
            msg: 'This is Cart'
        }
    },
    methods: {
        
    },

}
</script>
