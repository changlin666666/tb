(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4eb5e331"],{"0897":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{attrs:{visible:e.visible,title:e.title,width:e.width},on:{"update:visible":function(t){e.visible=t},close:function(t){e.visible=!1}}},[r("el-form",{ref:"form",attrs:{"label-width":"120px",model:e.form,size:"medium",rules:e.rules,disabled:"view"===e.method},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submit.apply(null,arguments)}}},[r("el-row",[1!=e.form.flag?r("el-col",{attrs:{span:24}},["add"===e.method?r("el-form-item",{attrs:{label:"类型",prop:"flag"}},[r("el-radio-group",{model:{value:e.form.flag,callback:function(t){e.$set(e.form,"flag",t)},expression:"form.flag"}},e._l(e.flagList,(function(t){return r("el-radio-button",{key:t.code,attrs:{label:t.code}},[e._v(e._s(t.value))])})),1)],1):r("el-form-item",{attrs:{label:"类型"}},[r("el-button",{attrs:{type:"primary"}},[e._v(e._s(e.getType(this.form.flag)))])],1)],1):e._e(),1!=e.form.flag?r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"上级机构",prop:"parentNodeIds"}},[e.showSelect?r("kr-tree-select",{ref:"treeSelect",staticStyle:{width:"100%"},attrs:{disabled:e.disabled,props:e.treeProps,nodeKey:"nodeIds",data:e.treeData},on:{getValue:e.getValue},model:{value:e.nodeIds,callback:function(t){e.nodeIds=t},expression:"nodeIds"}}):e._e()],1)],1):e._e(),r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:e.label+"名称",prop:"name"}},[r("el-input",{attrs:{placeholder:"请输入名称"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),r("el-col",{attrs:{span:24}},[3==e.form.flag?r("el-form-item",{attrs:{label:e.label+"类型",prop:"type"}},[r("el-select",{staticStyle:{width:"100%"},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},e._l(e.typeList,(function(e){return r("el-option",{key:e.code,attrs:{value:Number(e.code),label:e.value}})})),1)],1):e._e()],1),r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"是否可用",prop:"useable"}},[r("el-radio-group",{model:{value:e.form.useable,callback:function(t){e.$set(e.form,"useable",t)},expression:"form.useable"}},[r("el-radio-button",{attrs:{label:1}},[e._v("是")]),r("el-radio-button",{attrs:{label:0}},[e._v("否")])],1)],1)],1),r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"排序",prop:"sort"}},[r("el-input-number",{attrs:{min:1,label:"排序"},model:{value:e.form.sort,callback:function(t){e.$set(e.form,"sort",t)},expression:"form.sort"}})],1)],1),r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"备注",prop:"remarks"}},[r("el-input",{attrs:{type:"textarea",placeholder:"请输入备注"},model:{value:e.form.remarks,callback:function(t){e.$set(e.form,"remarks",t)},expression:"form.remarks"}})],1)],1)],1)],1),r("span",{attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取 消")]),r("el-button",{directives:[{name:"noMoreClick",rawName:"v-noMoreClick"}],attrs:{type:"primary"},on:{click:e.submit}},[e._v("确 定")])],1)],1)},s=[],l=r("1da1"),n=r("b85c"),i=(r("96cf"),r("caad"),r("2532"),r("c740"),r("f477")),o=r("3074"),d=r("d4ec"),c=r("ade3"),f=function e(){Object(d["a"])(this,e),Object(c["a"])(this,"code",""),Object(c["a"])(this,"flag",""),Object(c["a"])(this,"fullName",""),Object(c["a"])(this,"id",""),Object(c["a"])(this,"name",""),Object(c["a"])(this,"nodeId",""),Object(c["a"])(this,"parentNodeIds",""),Object(c["a"])(this,"nodeIds",""),Object(c["a"])(this,"remarks",""),Object(c["a"])(this,"sort",1),Object(c["a"])(this,"type",""),Object(c["a"])(this,"useable",1)};function u(e,t){var r,a=Object(n["a"])(e);try{for(a.s();!(r=a.n()).done;){var s=r.value;t.includes(s.flag)?s.disabled=!1:s.disabled=!0,s.children&&s.children.length>0&&u(s.children,t)}}catch(l){a.e(l)}finally{a.f()}return e}var m={props:{width:{type:String,default:"50%"},treeData:{type:Array,default:function(){return[]}},treeProps:{type:Object,default:function(){return{children:"children",label:"name"}}}},data:function(){return{visible:!1,showSelect:!0,method:"",form:new f,rules:{parentNodeIds:[{required:!0,message:"上级机构不能为空",trigger:"blur"}],flag:[{required:!0,message:"机构类型不能为空",trigger:"blur"}],name:[{required:!0,message:"机构名称不能为空",trigger:"blur"}]},id:"",title:"",originData:[],flagList:[],typeList:[],nodeIds:""}},computed:{disabled:function(){return!this.form.flag},label:function(){return 2==this.form.flag?"部门":3==this.form.flag?"岗位":""}},watch:{"form.flag":{handler:function(e){var t=this;this.showSelect=!1,3==e?this.treeData=u(this.treeData,[2]):2==e&&(this.treeData=u(this.treeData,[1,2])),this.$nextTick((function(){t.showSelect=!0}))}}},methods:{init:function(e,t,r){var a=this;this.id=t,this.visible=!0,this.$nextTick(Object(l["a"])(regeneratorRuntime.mark((function s(){var l,n;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(a.$refs.form.resetFields(),a.nodeIds="",a.form.parentNodeIds="",a.flagList=i["a"].getDictList("sys_company_flag"),a.typeList=i["a"].getDictList("sys_post_type"),a.originData=JSON.parse(JSON.stringify(a.treeData)),a.form=new f,a.flagList=[a.flagList[1],a.flagList[2]],a.method=e,"add"===e?(a.form.parentNodeIds="",a.title="新建"):"view"===e?a.title="查看":"addChildOffice"===e?(a.title="添加部门",a.flagList=[a.flagList[0]],a.form.flag=2,a.nodeIds=r.nodeIds,a.form.parentNodeIds=r.nodeIds):"addChildPost"===e?(a.title="添加岗位",a.flagList=[a.flagList[1]],a.nodeIds=r.nodeIds,a.form.parentNodeIds=r.nodeIds,a.form.flag=3):a.title="编辑","edit"!==e&&"view"!==e){s.next=20;break}return s.next=13,o["a"].queryById({orgId:t,flag:r.flag});case 13:if(l=s.sent,n=l.data,0==n.code){s.next=18;break}return a.$message.error("获取数据失败"),s.abrupt("return");case 18:a.form=n.data,a.nodeIds=n.data.parentNodeIds;case 20:case"end":return s.stop()}}),s)}))))},getType:function(e){var t=this.flagList.findIndex((function(t){return t.code==e}));return t>-1?this.flagList[t].value:"无"},getValue:function(e){if("add"==this.method&&3==this.form.flag&&2!=e.flag)return this.$message.error("只能选择部门作为岗位的上级");this.form.parentNodeIds=e.nodeIds},submit:function(){var e=this;try{this.$refs.form.validate(function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(r){var a,s,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=13;break}return a=e.form,t.next=4,o["a"].save(a);case 4:if(s=t.sent,l=s.data,0==l.code){t.next=8;break}return t.abrupt("return",e.$message.error(l.msg));case 8:e.$message.success(l.msg),e.$emit("update"),e.visible=!1,t.next=14;break;case 13:return t.abrupt("return",!1);case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}catch(t){this.$message.error(t)}}}},p=m,b=r("2877"),h=Object(b["a"])(p,a,s,!1,null,null,null);t["default"]=h.exports},d4ec:function(e,t,r){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}r.d(t,"a",(function(){return a}))}}]);