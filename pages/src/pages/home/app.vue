<template>
    <div class="home">
        <div class="home-header">
            前端工具
        </div>
        <div class="home-list">
            <ul>
                <li class="home-list-item" v-for="(item, index) in homeList" :key="index">
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
export default {
    data() {
        return {
            homeList: [
                {
                    name: 'json字符串格式化',
                    icon: 'retweet',
                    url: '#'
                }, {
                    name: '代码压缩',
                    icon: 'code',
                    url: '#'
                }, {
                    name: '页面取色工具',
                    icon: 'eye-dropper',
                    url: '#'
                }, {
                    name: '时间戳转换',
                    icon: 'exchange-alt',
                    url: '#'
                }, {
                    name: '图片Base64',
                    icon: 'file-image',
                    url: '#'
                }
            ]
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
