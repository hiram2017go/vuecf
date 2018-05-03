<template>
    <div>
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="文件上传">
            <el-upload
              class="upload-demo"
              drag
              action="https://jsonplaceholder.typicode.com/posts/"
              multiple>
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
              <div class="el-upload__tip" slot="tip"></div>
          </el-upload>
        </el-form-item>

        <!-- <el-form-item label="活动时间">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="即时配送">
          <el-switch on-text="" off-text="" v-model="form.delivery"></el-switch>
        </el-form-item> -->
        <el-form-item label="下载网段">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="广州内网" name="type"></el-checkbox>
            <el-checkbox label="广州中网" name="type"></el-checkbox>
            <el-checkbox label="广州外网" name="type"></el-checkbox>  <br>
            <el-checkbox label="成都内网" name="type"></el-checkbox>
            <el-checkbox label="成都中网" name="type"></el-checkbox>
            <el-checkbox label="成都外网" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>

        <el-form-item label="指定下载人">
          <el-select
               v-model="value9"
               multiple
               filterable
               remote
               reserve-keyword
               placeholder="请输入关键词"
               :remote-method="remoteMethod"
               :loading="loading" style="width:40%">
               <el-option
                 v-for="item in options4"
                 :key="item.value"
                 :label="item.label"
                 :value="item.value">
               </el-option>
             </el-select>
        </el-form-item>

        <el-form-item label="指定初审人" >
          <el-select style="width:40%" v-model="form.region" placeholder="请选择初审人员">
            <el-option label="佘永波<9877>[技术工程中心]" value="sheyongbo@henhaoji.com"></el-option>
            <el-option label="翟永毅<2766>[技术工程中心]" value="zhaiyongyi@henhaoji.com"></el-option>
          </el-select>
        </el-form-item>

        <!-- <el-form-item label="特殊资源">
          <el-radio-group v-model="form.resource">
            <el-radio label="线上品牌商赞助"></el-radio>
            <el-radio label="线下场地免费"></el-radio>
          </el-radio-group>
        </el-form-item> -->
        <el-form-item label="上传理由">
          <el-input  style="width:40%;height:15%" type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item label-width="80px">
          <el-button type="primary" @click="onSubmit">提交</el-button>
          <!-- <el-button>取消</el-button> -->
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
    const cityOptions = ['高新区', '武侯区', '天府新区', '锦江区'];
    export default {
        name: '',
        data: function () {
            return {
              form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: '',
              },  options4: [],
                value9: [],
                list: [],
                loading: false,
                states: ["Alabama", "Alaska", "Arizona",
                "Arkansas", "California", "Colorado",
                "Connecticut", "Delaware", "Florida",
                "Georgia", "Hawaii", "Idaho", "Illinois",
                "Indiana", "Iowa", "Kansas", "Kentucky",
                "Louisiana", "Maine", "Maryland",
                "Massachusetts", "Michigan", "Minnesota",
                "Mississippi", "Missouri", "Montana",
                "Nebraska", "Nevada", "New Hampshire",
                "New Jersey", "New Mexico", "New York",
                "North Carolina", "North Dakota", "Ohio",
                "Oklahoma", "Oregon", "Pennsylvania",
                "Rhode Island", "South Carolina",
                "South Dakota", "Tennessee", "Texas",
                "Utah", "Vermont", "Virginia",
                "Washington", "West Virginia", "Wisconsin",
                "Wyoming"]
            }
        },
        mounted() {
     this.list = this.states.map(item => {
       return { value: item, label: item };
           });
         },
            methods: {
              onSubmit:function () {
                console.log('submit!');
              },remoteMethod(query) {
              if (query !== '') {
                this.loading = true;
                setTimeout(() => {
                  this.loading = false;
                  this.options4 = this.list.filter(item => {
                    return item.label.toLowerCase()
                      .indexOf(query.toLowerCase()) > -1;
                  });
                }, 200);
              } else {
                this.options4 = [];
              }
           },handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
     }
   }
</script>

<style scoped>
  span{
    display: inline-block;

  }
</style>
