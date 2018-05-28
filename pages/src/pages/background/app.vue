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
    import utils from '../../utils';

    export default {
        name: 'background',
        data() {
            return {

            }
        },
        created() {
            let _this = this;

            _this.jumpRouter();
        },
        components: {
            HeaderBar
        },
        methods: {
            // 根据url中的name值，跳转路由
            jumpRouter() {
                let name = utils.getQueryValue('name');

                if(name) {
                    this.$router.push({
                        path: `/${name}`
                    })
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    $color-blue: #409EFF;

    .section {
        font-size: 14px;
        border-top: 1px solid transparent;
        background-color: #f7f7f7;

        .content {
            box-sizing: border-box;
            width: 1200px;
            margin: 60px auto 0;
            padding: 20px;
            min-height: 500px;
            border-radius: 5px;
            background-color: #fff;
        }
    }
</style>
