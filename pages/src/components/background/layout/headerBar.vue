<template>
    <div class="background-header">
        <div class="background-header-inner">
            <div class="logo">
                <img src="../../../asset/logo.png" alt="logo">
            </div>

            <ul class="header-list">
                <li
                    class="header-list-item"
                    v-for="(item, index) in headerList"
                    v-if="item.isShowHeader"
                    :key="index"
                    @click="jump(item.url)">
                    {{item.name}}
                </li>
            </ul>
        </div>
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
        },
        methods: {
            /**
             * 导航条跳转
             * @param {String} url 跳转链接
             */
            jump(url) {
                this.$router.push({
                    path: url
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    $color-blue: #409EFF;

    .background-header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        color: #fff;
        background-color: $color-blue;

        .background-header-inner {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 1200px;
            margin: auto;
        }

        .header-list {
            display: flex;
            align-items: center;
            justify-content: center;
            color: #333;

            .header-list-item {
                min-width: 120px;
                padding: 0 20px;
                height: 50px;
                line-height: 50px;
                text-align: center;
                color: #fff;
                transition: background-color linear 200ms;
                cursor: pointer;

                &:hover {
                    background-color: darken($color-blue, 10%);
                }
            }
        }
    }
</style>
