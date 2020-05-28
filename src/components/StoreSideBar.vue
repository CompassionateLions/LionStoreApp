<template>
    <div class="sidebar">
        <ul>
            <div v-bind:key="catagory.id" v-for="catagory in catagories">
                <CatagoryItem  v-bind:catagory="catagory"/>
            </div>
        </ul>
    </div>
</template>

<script>
import CatagoryItem from './CatagoryItem.vue'

    export default {
        name: "StoreSideBar",
        props: ["catagories"],
        components: {
            CatagoryItem
        }
    }
</script>

<style  scoped>
.sidebar {
    height: 100%;
    background-color: orangered;
    width: 100px;
}
</style>