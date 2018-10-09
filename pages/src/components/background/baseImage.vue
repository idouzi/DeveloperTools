<template>
    <div class="base-image">
        <div class="base-image-group upload">
            <div class="base-image-group-title">
                图片
            </div>

            <div class="base-image-group-content">
                <el-upload class="upload-image"
                           action=""
                           :http-request="previewFile"
                           list-type="picture">

                    <el-button size="small"
                               type="primary">点击上传</el-button>
                    <div slot="tip"
                         class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>

            </div>
        </div>

        <el-button type="primary"
                   class="changeBtn"
                   :loading="changeBtnLoading"
                   @click="readImageFile">
            图片转BASE64
        </el-button>

        <div class="base-image-group result">
            <div class="base-image-group-title">
                BASE64（img标签）
            </div>

            <div class="base-image-group-content">
                <el-input type="textarea"
                          class="result-input"
                          :rows="12"
                          readonly
                          v-model="result">
                </el-input>

                <div>
                    <button class="copy-image-data">
                        复制到剪切板
                    </button>
                </div>

                <div class="preview-data">
                    <img :src="result" alt="预览图片" v-if="result">
                </div>
                </div>
            </div>
        </div>
</template>

<script>
import Clipboard from 'clipboard';

export default {
    name: "baseImage",
    data() {
        return {
            fileData: '', // 图片内容信息
            result: '', // 图片base64
            previewUrl: '', // 预览图片地址
            clipboard: '', // 复制插件实例
            changeBtnLoading: false
        }
    },
    mounted() {
        this.copyText()
    },
    destroyed() {
        this.clipboard.destroy();
    },
    methods: {
        /**
         * element-ui upload组件上传执行的回调函数
         * @param {Object} data 文件信息
         */
        previewFile(data) {
            let _this = this,
                file = data.file;

            if (!file) {
                _this.$message({
                    type: 'error',
                    message: '图片内容为空，请重新上传！'
                });

                return false;
            };

            if (!/image\/\w+/.test(file.type)) {
                _this.$message({
                    type: 'error',
                    message: '请确保文件为图像类型'
                });

                return false;
            }

            _this.fileData = file;
        },

        // 读取图片数据
        readImageFile() {
            let _this = this,
                fileData = _this.fileData;

            if (!fileData) {
                _this.$message({
                    type: 'error',
                    message: '请选择图片'
                });

                return false;
            }

            _this.changeBtnLoading = true;

            let reader = new FileReader();

            reader.readAsDataURL(fileData);

            reader.addEventListener('loadstart', () => {
                console.log('读取开始');
            });

            reader.addEventListener('progress', (progress) => {
                console.log(progress);
            });

            reader.addEventListener('load', (event) => {
                _this.result = event.target.result;
                _this.changeBtnLoading = false;
            });

            reader.addEventListener('error', ()=>{
                _this.changeBtnLoading = false;
            })
        },

        /**
         * 复制文字
         * @param {String} text 需要复制的文字
         */
        copyText() {
            let _this = this;

            const clipboard = new Clipboard('.copy-image-data', {
                text() {
                    return _this.result;
                }
            });

            clipboard.on('success', (e) => {
                _this.$message({
                    type: 'success',
                    message: '复制成功'
                });

                e.clearSelection();
            });

            clipboard.on('error', (e) => {
                _this.$message({
                    type: 'error',
                    message: '复制失败，请重试！'
                });
            });

            _this.clipboard = clipboard;
        }
    }
}
</script>

<style lang="scss">
.base-image {
  display: flex;
  justify-content: space-between;

  .base-image-group {
    .base-image-group-title {
      margin-bottom: 20px;
      font-size: 14px;
    }

    &.result {
      .result-input {
        width: 500px;
      }

      .preview-data {
        margin-top: 20px;

        img {
          max-width: 500px;
        }
      }

      .copy-image-data {
        //   width: 100px;
        //   height: 40px;
        //   margin-top: 10px;
        //   border: none;
        //   outline: none;
        //   color: #fff;
        //   background-color: #ff981a;
        //   border-radius: 5px;
          cursor: pointer;
      }
    }
  }

  .changeBtn {
    width: 200px;
    height: 40px;
    margin-top: 35px;
  }
}
</style>
