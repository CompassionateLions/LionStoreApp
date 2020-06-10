<template>
<div class="">
    <div class="card-panel red lighten-1 white-text error-box">
        <P>{{message}}</P>
        <i 
        class="material-icons close-icon"
        @click="$emit('dismiss-error', index)"
        >close</i>
    </div>
</div>
</template>

<script>
    export default {
        name: "ErrorMessage",
        props:['message', 'index']
    }
</script>

<style scoped>
    .error-box {
        margin: 5px 0;
        display: flex;
        align-content: center;
        justify-content: space-between;
        padding: 3px 10px;
    }
    .close-icon {
        cursor: pointer;
    }
</style>