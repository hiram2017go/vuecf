<template>
    <div>
      <el-form ref="form" :model="form" label-width="100px">
        <div class="page">
        <div id="filePicker">选择文件</div>

        <div class="file-panel">
            <h2>文件列表</h2>
            <div class="file-list">
                <ul class="file-item" :class="`file-${file.id}`" v-for="file in fileList">
                    <li class="file-type" :icon="fileCategory(file.ext)"></li>
                    <li class="file-name">{{file.name}}</li>
                    <li class="file-size">{{fileSize(file.size)}}</li>
                    <li class="file-status">上传中...</li>
                    <li class="file-operate">
                        <a title="开始" @click="resume(file)"><i class="iconfont icon-control-play"></i></a>
                        <a title="暂停" @click="stop(file)"><i class="iconfont icon-video-pause"></i></a>
                        <a title="移除" @click="remove(file)"><i class="iconfont icon-close-big"></i></a>
                    </li>
                    <li class="progress"></li>
                </ul>
                <div class="no-file" v-if="!fileList.length"><i class="iconfont icon-empty-file"></i> 暂无待上传文件</div>
            </div>
        </div>

        <vue-upload
                ref="uploader"
                uploadButton="#filePicker"
                multiple
                @fileChange="fileChange"
                @progress="onProgress"
                @success="onSuccess"
        ></vue-upload>
</div>

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
            <el-option label="佘永波" value="sheyongbo"></el-option>
            <el-option label="翟永毅" value="zhaiyongyi"></el-option>
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
    import vueUpload from '@/components/public/webupload';
    const cityOptions = ['高新区', '武侯区', '天府新区', '锦江区'];
    export default {
        name: '',
        data: function () {
            return {
              fileList:[],
              form: {
                fileList:[],
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
      },
      fileChange(file) {
               if (!file.size) return;
               this.fileList.push(file);
               console.log(file);
           },
           onProgress(file, percent) {
               $(`.file-${file.id} .progress`).css('width', percent * 100 + '%');
               $(`.file-${file.id} .file-status`).html((percent * 100).toFixed(2) + '%');
           },
           onSuccess (file, response) {
               console.log('上传成功', response);
               if (response.needMerge) {
                   api.mergeUpload({
                       tempName: response.tempName,
                       fileName: file.name
                   }).then(res => {
                       let $fileStatus = $(`.file-${file.id} .file-status`);
                       console.log(res);
                       if (res.status === 0) {
                           $fileStatus.html('上传成功，转码中');
                       } else if (res.status === 1) {
                           $fileStatus.html('上传失败');
                       } else if (res.status === 2) {
                           $fileStatus.html('上传成功');
                       }
                   });
               }
           },
           resume(file) {
               this.uploader.upload(file);
           },
           stop(file) {
               this.uploader.stop(file);
           },
           remove(file) {
               // 取消并中断文件上传
               this.uploader.cancelFile(file);
               // 在队列中移除文件
               this.uploader.removeFile(file, true);
               // 在ui上移除
               let index = this.fileList.findIndex(ele => ele.id === file.id);
               this.fileList.splice(index, 1);
           },
           fileSize(size) {
               return WebUploader.Base.formatSize(size);
           },
           fileCategory(ext) {
               let type = '';
               const typeMap = {
                   image: ['gif', 'jpg', 'jpeg', 'png', 'bmp', 'webp'],
                   video: ['mp4', 'm3u8', 'rmvb', 'avi', 'swf', '3gp', 'mkv', 'flv'],
                   text: ['doc', 'txt', 'docx', 'pages', 'epub', 'pdf', 'numbers', 'csv', 'xls', 'xlsx', 'keynote', 'ppt', 'pptx']
               };
               Object.keys(typeMap).forEach((_type) => {
                   const extensions = typeMap[_type];
                   if (extensions.indexOf(ext) > -1) {
                       type = _type
                   }
               });
               return type
           },
    },
    watch:{},
    computed: {
            uploader() {
                return this.$refs.uploader;
            }
        }, components: {
            vueUpload
        }
   }
</script>
