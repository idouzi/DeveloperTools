<template>
    <div class="section">
        <header-bar></header-bar>

        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import HeaderBar from '../../components/background/layout/headerBar'

export default {
    data() {
        return {
           
        }
    },
    components: {
        HeaderBar
    }
}
</script>

<style lang="scss" scoped>
    $color-blue: #409EFF;  

    .section {
        .content {
            width: 1200px;
            margin: auto;
        }
    }
</style>
