<template>
    <div class="home">
        <div class="home-header">
            前端工具
        </div>
        <div class="home-list">
            <ul>
                <li class="home-list-item"
                    v-for="(item, index) in homeList"
                    :key="index" @click="jump(item.url)">
                    <icon :name="item.icon" class="home-list-icon"></icon>
                    {{item.name}}
                </li>
            </ul>
        </div>
        <div class="home-footer">

        </div>
    </div>
</template>

<script>
    import config from '../../config/header'

    export default {
        data() {
            return {
                background: "",
                homeList: config.list
            }
        },

        created() {
            console.log(config);

            let _this = this;

            // 判断chrome是否存在，区分开发与正式跳转链接
            _this.background = chrome.extension ? chrome.extension.getURL('background.html') :
                               "http://localhost:8080/background.html";
        },

        mounted() {

        },

        methods: {
            /**
             * 跳转到背景页
             * @param ｛String｝ url 需要跳转的链接
             */
            jump(url) {
                window.open(`${this.background}?name=${url}`);
            }
        }

    }
</script>

<style lang="scss" scoped>
    $color-blue: #409EFF;

    .home {
        width: 200px;
        font-size: 14px;
        border-radius: 5px;

        .home-header {
            width: 100%;
            height: 40px;
            line-height: 40px;
            padding: 0 20px;
            border-bottom: 1px solid #ddd;
        }

        .home-list {
            padding: 20px 0;

            .home-list-item {
                height: 40px;
                line-height: 40px;
                padding-left: 30px;
                cursor: pointer;

                .home-list-icon {
                    margin-right: 10px;
                    color: $color-blue;
                    transition: transform 200ms linear;
                }

                &:hover {
                    color: $color-blue;

                    .home-list-icon {
                        transform: rotate(360deg);
                    }
                }
            }

        }
    }
</style>
