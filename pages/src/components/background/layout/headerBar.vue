<template>
    <div class="background-header">
        <div class="background-header-inner">
            <div class="logo">
                <img src="../../../asset/logo.png" alt="logo">
            </div>

                <el-menu class="header-list"
                         :default-active="activeName"
                         mode="horizontal"
                         @select="handleSelect"
                         background-color="#ff981a"
                         text-color="#fff"
                         active-text-color="#ffd04b">
                    <el-menu-item v-for="(item, index) in headerList"
                                  :index="item.url"
                                  :key="index">
                        {{item.name}}
                    </el-menu-item>
                </el-menu>
            </div>
        </div>
</template>

<script>
import config from '../../../config/header'

export default {
    name: 'headerBar',
    data() {
        return {
            headerList: config.list,
            activeName: '' // 当前显示的路由名称
        }
    },
    created() {
        let _this = this;

        _this.activeName = this.$route.name;
    },
    methods: {
        /**
         * 导航条跳转
         * @param {String} name 跳转路由名称
         */
        jump(name) {
            let _this = this;

            this.$router.push({
                name
            });

            _this.activeName = name;
        },

        handleSelect(key) {
            this.$router.push({
                name: key
            });
        }
    }
}
</script>

<style lang="scss" scoped>
$color-blue: #ff981a;

.background-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  color: #fff;
  background-color: $color-blue;
  z-index: 20;

  .background-header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1200px;
    margin: auto;
  }
}
</style>
