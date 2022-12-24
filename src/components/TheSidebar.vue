<template>
    <div class="sidebar">
        <router-link to="/">
            <div class="navbar item1">
                <div class="icon" ></div>
                <div class="text">Tổng quan</div>
            </div>
        </router-link>

        <router-link to="/">
            <div class="navbar item2">
                <div class="icon" ></div>
                <div class="text">Thiết bị</div>
            </div>
        </router-link>

        <router-link to="/">
            <div class="navbar item3">
                <div class="icon"></div>
                <div class="text">Mượn trả</div>
            </div>
        </router-link>

        <router-link to="/report">
            <div class="navbar item4">
                <div class="icon"></div>
                <div class="text">Báo cáo</div>
            </div>
        </router-link>
        
        <router-link to="/">
            <div class="navbar item5">
                <div class="icon"></div>
                <div class="text">Hệ thống</div>
            </div>
        </router-link>

    </div>
</template>

<script>
export default {
    name: "TheSidebar"
}
</script>

<style scoped>
@import url(../css/layout/sidebar.css);
</style>