<template>
  <el-tabs type="card">
    <el-tab-pane>
      <span slot="label"><i class="el-icon-upload"></i>上传</span>
      <uploadA/>
    </el-tab-pane>
    <el-tab-pane>
      <span slot="label"><i class="el-icon-tickets"></i>已上传文件</span>
      <uploadB/>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import UploadA from '@/components/page/uploada'
import UploadB from '@/components/page/uploadb'

  export default {
    name:'FileInfo',
    components:{
      UploadA,
      UploadB
    }
  };
</script>
