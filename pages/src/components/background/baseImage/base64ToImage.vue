<template>
    <div class="base64-to-image">

        <div class="base-image-group result">
            <div class="base-image-group-title">
                BASE64（img标签）
            </div>

            <div class="base-image-group-content">
                <el-input type="textarea"
                          class="result-input"
                          :rows="12"
                          v-model="base64Data">
                </el-input>
            </div>
        </div>

        <el-button type="primary"
                   class="changeBtn"
                   :loading="changeBtnLoading"
                   @click="handleBase64">
            BASE64转图片
        </el-button>

        <div class="base-image-group preview-image">
            <div class="base-image-group-title">
                图片
            </div>

            <div class="base-image-group-content">
                <span class="image-empty"
                      v-if="!resultData"></span>
                <img :src="resultData" v-if="resultData" alt="base转图片">
            </div>
            </div>
        </div>
</template>

<script>
export default {
    name: "base64ToImage",
    data() {
        return {
            base64Data: '', // 图片base64
            resultData: '',
            changeBtnLoading: false
        }
    },
    methods: {
        errorHandle() {

        },

        handleBase64() {
            let _this = this,
                base64Data = _this.base64Data;

            if (!base64Data) {
                _this.$message({
                    type: 'error',
                    message: '请输入图片base64编码'
                });

                return false;
            }

            const image = new Image();

            image.src = base64Data;

            _this.changeBtnLoading = true;

            image.addEventListener('load', (result) => {
                _this.resultData = base64Data;

                _this.changeBtnLoading = false;
            });

            image.addEventListener('error', () => {
                _this.$message({
                    type: 'error',
                    message: '请输入正确的base64编码'
                });

                _this.changeBtnLoading = false;

            });
        }
    }
}
</script>

<style lang="scss">
.base64-to-image {
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
        cursor: pointer;
      }
    }

    &.preview-image {
      width: 360px;

      .base-image-group-content {
        .image-empty {
          display: block;
          min-height: 180px;
          border: 1px dashed #ccc;
          border-radius: 5px;
        }

        img {
          width: 100%;
        }
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
