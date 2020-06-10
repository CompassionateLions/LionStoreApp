<template>
    <div class="row error-row">
        <ErrorMessage
        v-for="(error, i) in errors"
        :key="i"
        :index="i"
        :message="error"
        @dismiss-error="removeError"
        />
    </div>
</template>

<script>
import ErrorMessage from "./ErrorMessage";

    export default {
        name: "Errors",
        props:['errors'],
        components: {
            ErrorMessage
        },
        methods: {
            removeError(index){
                this.errors.splice(index,1);
            }
        }
    }
</script>

<style scoped>
    .error-row {
        margin: 0;
    }
</style>