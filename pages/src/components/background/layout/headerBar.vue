<template>
    <div class="backgound-header">
        <ul class="header-list">
            <li
                class="header-list-item"
                v-for="(item, index) in headerList"
                :key="index">
                {{item.name}}
            </li>
        </ul>
    </div>
</template>

<script>
    import config from '../../../config/header'

    export default {
        name: 'headerBar',
        data() {
            return {
                headerList: config.list
            }
        }
    }
</script>

<style lang="scss" scoped>
    .backgound-header {
        width: 100%;
        height: 70px;
        background-color: gold;
    }
</style>
