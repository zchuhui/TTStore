<template>
     <div class="nav-breadcrumb-wrap">
        <div class="container">
            <nav class="nav-breadcrumb">
                <a href="/">Home</a>
                <slot name="goods"></slot>
                <slot name="cart"></slot>
            </nav>
        </div>
    </div>
</template>

<script>

export default {
    name:'break',
    data() {
    },
}
</script>
