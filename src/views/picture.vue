<template>
  <el-upload
  style="display: inline"
  :show-file-list="false"
  :on-success="onSuccess"
  :on-error="onError"
  :before-upload="beforeUpload"
  action="/api/import">
  <el-button size="mini" type="success">上传</el-button>
</el-upload>
</template>
<script>
  export default {
    methods: {
      onSuccess(response, file, fileList) {
        this.enabledUploadBtn = true;
        this.uploadBtnIcon = 'el-icon-upload2';
        this.btnText = '数据导入';
      },
      onError(err, file, fileList) {
        this.enabledUploadBtn = true;
        this.uploadBtnIcon = 'el-icon-upload2';
        this.btnText = '数据导入';
      },
      beforeUpload(file) {
        this.enabledUploadBtn = false;
        this.uploadBtnIcon = 'el-icon-loading';
        this.btnText = '正在导入';
      }
    }
  }
</script>    
