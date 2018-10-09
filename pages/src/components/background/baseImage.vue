<template>
    <div class="base-image">
        <el-tabs v-model="activeName"
                 type="card">
            <el-tab-pane label="图片转base64"
                         name="base64">
                <imageToBase64></imageToBase64>
            </el-tab-pane>

            <el-tab-pane label="base64转图片"
                         name="image">
                <base64ToImage></base64ToImage>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import imageToBase64 from './baseImage/imageToBase64';
import base64ToImage from './baseImage/base64ToImage'

export default {
    name: "baseImage",
    data() {
        return {
            activeName: 'base64' 
        }
    },
    components: {
        imageToBase64,
        base64ToImage
    },
    methods: {
    }
}
</script>

<style lang="scss">
</style>
