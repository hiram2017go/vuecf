<template>
  <el-tabs type="card">
    <el-tab-pane>
      <span slot="label"><i class="el-icon-rank"></i>初审人</span>
      <UserMgeA/>
    </el-tab-pane>
    <el-tab-pane>
      <span slot="label"><i class="el-icon-tickets"></i>终审人</span>
      <UserMgeB/>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import UserMgeA from '@/components/page/usermgea'
import UserMgeB from '@/components/page/usermgeb'

  export default {
    name:'UserMge',
    components:{
      UserMgeA,
      UserMgeB
    }
  };
</script>
