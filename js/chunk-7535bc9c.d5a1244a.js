(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7535bc9c"],{1367:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{attrs:{visible:e.visible,title:e.title,width:e.width},on:{"update:visible":function(t){e.visible=t},close:function(t){e.visible=!1}}},[r("el-form",{ref:"form",attrs:{"label-width":"120px",model:e.form,size:"medium",rules:e.rules},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submit.apply(null,arguments)}}},[r("el-row",[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"表单分组",prop:"categoryId"}},[r("el-select",{model:{value:e.form.categoryId,callback:function(t){e.$set(e.form,"categoryId",t)},expression:"form.categoryId"}},e._l(e.treeData,(function(e,t){return r("el-option",{key:t,attrs:{label:e.categoryTitle,value:e.id}})})),1)],1)],1),r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"表单名称",prop:"formTitle"}},[r("el-input",{attrs:{placeholder:"请输入表单名称"},model:{value:e.form.formTitle,callback:function(t){e.$set(e.form,"formTitle",t)},expression:"form.formTitle"}})],1)],1),r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"表单类型",prop:"formType"}},[r("el-radio-group",{model:{value:e.form.formType,callback:function(t){e.$set(e.form,"formType",t)},expression:"form.formType"}},[r("el-radio-button",{attrs:{label:"0"}},[e._v("普通表单")]),r("el-radio-button",{attrs:{label:"1"}},[e._v("流程表单")])],1)],1)],1),r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"表单编码",prop:"formCode"}},[r("el-input",{attrs:{disabled:"edit"==e.method,placeholder:"请输入表单编码"},model:{value:e.form.formCode,callback:function(t){e.$set(e.form,"formCode",t)},expression:"form.formCode"}})],1)],1),r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"数据库表名",prop:"dataTableName"}},[r("el-input",{attrs:{disabled:"edit"==e.method,placeholder:"请输入数据库表名"},model:{value:e.form.dataTableName,callback:function(t){e.$set(e.form,"dataTableName",t)},expression:"form.dataTableName"}})],1)],1)],1)],1),r("span",{attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取 消")]),r("el-button",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"},{name:"noMoreClick",rawName:"v-noMoreClick"}],attrs:{type:"primary"},on:{click:e.submit}},[e._v("确 定")])],1)],1)},n=[],o=r("1da1"),i=(r("96cf"),r("4152")),s=r("adcb"),l={props:{width:{type:String,default:"30%"},treeData:{type:Array,default:function(){return[]}}},data:function(){return{visible:!1,method:"",form:new s["b"],rules:{categoryId:[{required:!0,message:"分组不能为空",trigger:"blur"}],formTitle:[{required:!0,message:"表单名称不能为空",trigger:"blur"}],formCode:[{required:!0,message:"表单编码不能为空",trigger:"blur"}],dataTableName:[{required:!0,message:"数据库表名不能为空",trigger:"blur"}],formType:[{required:!0,message:"表单类型不能为空",trigger:"blur"}]},id:"",title:"",loading:!1}},methods:{init:function(e,t,r){var a=this;this.method=e,this.form=new s["b"],this.id=t,this.visible=!0,this.$nextTick(Object(o["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(a.$refs.form.resetFields(),"add"!==e){r.next=6;break}a.form.categoryId=t,a.title="新建表单",r.next=11;break;case 6:return a.title="编辑表单",r.next=9,i["a"].detail({id:t});case 9:n=r.sent,a.form=n.data.data;case 11:case"end":return r.stop()}}),r)}))))},submit:function(){var e=this;try{this.$refs.form.validate(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(r){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=28;break}if(e.loading=!0,t.prev=2,a=e.form,n=null,"add"!=e.method){t.next=11;break}return t.next=8,i["a"].add(a);case 8:n=t.sent,t.next=14;break;case 11:return t.next=13,i["a"].save(a);case 13:n=t.sent;case 14:if(0==n.data.code){t.next=17;break}return e.$message.error(n.data.msg),t.abrupt("return");case 17:e.$message.success("表单".concat("add"==e.method?"创建":"修改","成功")),e.loading=!1,e.$parent.$refs.table.init(),e.visible=!1,t.next=26;break;case 23:t.prev=23,t.t0=t["catch"](2),e.loading=!1;case 26:t.next=29;break;case 28:return t.abrupt("return",!1);case 29:case"end":return t.stop()}}),t,null,[[2,23]])})));return function(e){return t.apply(this,arguments)}}())}catch(t){this.$message.error(t)}}}},c=l,u=r("2877"),f=Object(u["a"])(c,a,n,!1,null,null,null);t["default"]=f.exports},4152:function(e,t,r){"use strict";r.d(t,"c",(function(){return n})),r.d(t,"b",(function(){return o}));var a=r("7bc1"),n=function(e){return a["a"].post("/form/page",e)},o=function(e){return a["a"].get("/form/struct",e)};t["a"]={groupList:function(e){return a["a"].post("/category/page",e)},delGroup:function(e){return a["a"].delete("/category/delete",e)},addGroup:function(e){return a["a"].post("/category/create",e)},saveGroup:function(e){return a["a"].post("/category/update",e)},detailGroup:function(e){return a["a"].get("/category/select",e)},list:function(e){return a["a"].post("/form/page",e)},add:function(e){return a["a"].post("/form/create",e)},del:function(e){return a["a"].delete("/form/delete",e)},detail:function(e){return a["a"].get("/form/select",e)},save:function(e){return a["a"].post("/form/update",e)},getStruct:function(e){return a["a"].get("/form/struct",e)},saveStruct:function(e){return a["a"].post("/form/struct",e)},tableConfig:function(e){return a["a"].post("/table/page",e)},saveTable:function(e){return a["a"].post("/table/update",e)}}},adcb:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return i}));var a=r("d4ec"),n=r("ade3"),o=function e(){Object(a["a"])(this,e),Object(n["a"])(this,"categoryId",""),Object(n["a"])(this,"dataTableName",""),Object(n["a"])(this,"formCode",""),Object(n["a"])(this,"formTitle",""),Object(n["a"])(this,"formType",0),Object(n["a"])(this,"id",""),Object(n["a"])(this,"structContent","")},i=function e(){Object(a["a"])(this,e),Object(n["a"])(this,"categoryTitle",""),Object(n["a"])(this,"categoryType",0),Object(n["a"])(this,"id","")}},d4ec:function(e,t,r){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}r.d(t,"a",(function(){return a}))}}]);