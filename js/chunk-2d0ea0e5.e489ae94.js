(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ea0e5"],{"8fbc":function(e,t,l){"use strict";l.r(t);var r=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("el-dialog",{attrs:{visible:e.visible,title:e.title,width:e.width},on:{"update:visible":function(t){e.visible=t},close:function(t){e.visible=!1}}},[l("el-form",{ref:"form",attrs:{"label-width":"120px",model:e.form,size:"medium",rules:e.rules,disabled:"view"===e.method}},[l("el-row",[l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"岗位名称",prop:"name"}},[l("el-input",{attrs:{placeholder:"请输入岗位名称"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"岗位编码",prop:"code"}},[l("el-input",{attrs:{placeholder:"请输入岗位编码"},model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",t)},expression:"form.code"}})],1)],1),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"岗位类型",prop:"type"}},[l("el-select",{staticStyle:{width:"100%"},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},e._l(3,(function(e,t){return l("el-option",{key:t,attrs:{value:e,label:"类型"+e}})})),1)],1)],1),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"是否可用",prop:"use"}},[l("el-radio-group",{model:{value:e.form.use,callback:function(t){e.$set(e.form,"use",t)},expression:"form.use"}},[l("el-radio-button",{attrs:{label:!0}},[e._v("是")]),l("el-radio-button",{attrs:{label:!1}},[e._v("否")])],1)],1)],1),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"是否可用",prop:"sort"}},[l("el-input-number",{attrs:{min:1,label:"排序"},model:{value:e.form.sort,callback:function(t){e.$set(e.form,"sort",t)},expression:"form.sort"}})],1)],1),l("el-col",{attrs:{span:24}},[l("el-form-item",{attrs:{label:"备注",prop:"desc"}},[l("el-input",{attrs:{type:"textarea",placeholder:"请输入备注"},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}})],1)],1)],1)],1),l("span",{attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取 消")]),l("el-button",{directives:[{name:"noMoreClick",rawName:"v-noMoreClick"}],attrs:{type:"primary"},on:{click:e.submit}},[e._v("确 定")])],1)],1)},o=[],s={props:{width:{type:String,default:"50%"}},data:function(){return{visible:!1,method:"",form:{name:"",code:"",type:"",use:!0,sort:1,desc:""},rules:{type:[{required:!0,message:"岗位类型不能为空",trigger:"blur"}]},id:"",title:""}},methods:{init:function(e,t,l){var r=this;this.method=e,this.title="add"===e?"新建岗位":"view"===e?"查看岗位":"编辑岗位",this.id=t,this.visible=!0,this.$nextTick((function(){r.$refs.form.resetFields(),"add"!==e&&(r.form=JSON.parse(JSON.stringify(l)))}))},submit:function(){var e=this;try{this.$refs.form.validate((function(t){if(!t)return!1;e.$message.success("操作成功!"),e.visible=!1}))}catch(t){this.$message.error(t)}}}},i=s,a=l("2877"),n=Object(a["a"])(i,r,o,!1,null,null,null);t["default"]=n.exports}}]);