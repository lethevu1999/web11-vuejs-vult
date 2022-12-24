<template>
    <div class="container">
        <TheSidebarHeader></TheSidebarHeader>
        <TheSidebar></TheSidebar>
        <TheHeader></TheHeader>
        <TheMain></TheMain>
    </div>    
</template>

<script>
import TheHeader from './TheHeader.vue';
import TheMain from './TheMain.vue';
import TheSidebar from './TheSidebar.vue';
import TheSidebarHeader from './TheSidebarHeader.vue';
export default {
    name: "TheContainer",
    components:{
        TheHeader,TheMain,TheSidebar,TheSidebarHeader
    }

}
</script>

<style scoped>
@import url(../css/teacher.css);
</style>