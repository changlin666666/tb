(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c0ab9a74"],{"4a9d":function(e,t,r){"use strict";r.d(t,"b",(function(){return s}));var a=r("7bc1"),s=function(e){return a["a"].get("/sys/company/getCompanyTree",e)};t["a"]={tree:function(e){return a["a"].get("/sys/company/getCompanyTree",e)},queryById:function(e){return a["a"].get("/sys/company/queryById",e)},save:function(e){return a["a"].post("/sys/company/saveCompany",e)},del:function(e){return a["a"].get("/sys/company/delete",e)},loginTree:function(e){return a["a"].get("/sys/company/getUseableCompanyTree",e)},use:function(e){return a["a"].get("/sys/company/enableCompany",e)}}},"7ba5":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{attrs:{visible:e.visible,title:e.title,width:e.width},on:{"update:visible":function(t){e.visible=t},close:function(t){e.visible=!1}}},[r("el-form",{ref:"form",attrs:{"label-width":"120px",model:e.form,size:"medium",rules:e.rules,disabled:"view"===e.method},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submit.apply(null,arguments)}}},[r("div",{staticClass:"formTitle"},[e._v("基本信息")]),r("el-row",[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"类型"}},[r("el-button",{attrs:{type:"primary"}},[e._v("公司")])],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"公司上级",prop:"parentNodeIds"}},[r("kr-tree-select",{staticStyle:{width:"100%"},attrs:{disabled:e.disabled,props:e.treeProps,nodeKey:"nodeIds",data:e.treeData},on:{getValue:e.getValue},model:{value:e.nodeIds,callback:function(t){e.nodeIds=t},expression:"nodeIds"}})],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"公司名称",prop:"name"}},[r("el-input",{attrs:{placeholder:"请输入名称"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),1==e.form.flag?r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"公司全称",prop:"fullName"}},[r("el-input",{attrs:{placeholder:"请输入公司全称"},model:{value:e.form.fullName,callback:function(t){e.$set(e.form,"fullName",t)},expression:"form.fullName"}})],1)],1):e._e(),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"是否启用",prop:"useable"}},[r("el-radio-group",{model:{value:e.form.useable,callback:function(t){e.$set(e.form,"useable",t)},expression:"form.useable"}},[r("el-radio-button",{attrs:{label:"1"}},[e._v("是")]),r("el-radio-button",{attrs:{label:"0"}},[e._v("否")])],1)],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"排序",prop:"sort"}},[r("el-input-number",{attrs:{min:1,label:"排序"},model:{value:e.form.sort,callback:function(t){e.$set(e.form,"sort",t)},expression:"form.sort"}})],1)],1),r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"备注",prop:"remarks"}},[r("el-input",{attrs:{type:"textarea",placeholder:"请输入备注"},model:{value:e.form.remarks,callback:function(t){e.$set(e.form,"remarks",t)},expression:"form.remarks"}})],1)],1)],1)],1),r("el-form",{staticStyle:{"margin-top":"8px"},attrs:{"label-width":"120px",size:"medium",disabled:"view"===e.method}},[r("div",{staticClass:"formTitle"},[e._v("管理权限")]),r("el-form-item",{attrs:{label:"负责人"}},[r("el-input",{attrs:{placeholder:"点击添加人员",readonly:"",value:e.getNames(e.form.userIds)},on:{focus:e.toChoseTree}})],1)],1),r("span",{attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("确 定")])],1),r("el-dialog",{attrs:{visible:e.showTree,"append-to-body":"",width:"40%",title:"添加人员"},on:{close:function(t){e.showTree=!1}}},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12}},[r("div",{staticClass:"content-box"},[r("div",[e._v("选择公司")]),r("kr-tree",{ref:"tree",staticClass:"tree",attrs:{data:e.orgTree,props:e.defaultProps,"default-expand-all":""},on:{"node-click":e.orgClick}})],1)]),r("el-col",{attrs:{span:12}},[r("div",{staticClass:"content-box"},[r("div",[e._v("选择人员")]),r("kr-tree",{ref:"usertree",staticClass:"tree",attrs:{data:e.userTree,props:e.defaultProps2,"show-checkbox":"","node-key":"id","check-strictly":!0,"default-expand-all":""},on:{check:e.chosePeople}})],1)])],1),r("span",{attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.showTree=!1}}},[e._v("取 消")]),r("el-button",{directives:[{name:"noMoreClick",rawName:"v-noMoreClick"}],attrs:{type:"primary"},on:{click:e.submitPeople}},[e._v("确 定")])],1)],1)],1)},s=[],n=r("1da1"),o=r("b85c"),i=(r("c740"),r("d81d"),r("a15b"),r("7db0"),r("b0c0"),r("96cf"),r("f477")),l=r("4a9d"),c=r("d4ec"),u=r("ade3"),d=function e(){Object(c["a"])(this,e),Object(u["a"])(this,"code",""),Object(u["a"])(this,"flag",""),Object(u["a"])(this,"fullName",""),Object(u["a"])(this,"id",""),Object(u["a"])(this,"name",""),Object(u["a"])(this,"nodeId",""),Object(u["a"])(this,"parentNodeIds",""),Object(u["a"])(this,"nodeIds",""),Object(u["a"])(this,"remarks",""),Object(u["a"])(this,"sort",1),Object(u["a"])(this,"type",""),Object(u["a"])(this,"useable",1),Object(u["a"])(this,"userIds",[])},f=r("b15a");function p(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=Object(o["a"])(e);try{for(a.s();!(t=a.n()).done;){var s=t.value;r.push(s),s.children&&s.children.length>0&&p(s.children,r)}}catch(n){a.e(n)}finally{a.f()}return r}var m={components:{},props:{width:{type:String,default:"50%"},treeData:{type:Array,default:function(){return[]}},treeProps:{type:Object,default:function(){return{children:"children",label:"name",disabled:"disabled"}}}},watch:{},data:function(){return{visible:!1,defaultProps:{children:"children",label:"name"},defaultProps2:{children:"children",label:"name",disabled:function(e,t){return!e.clickable}},defaultKeys:[],orgTree:[],userTree:[],nodeIds:"",parentId:"",companyId:1,showTree:!1,people:[],method:"",form:new d,rules:{parentNodeIds:[{required:!0,message:"上级不能为空",trigger:"blur"}],type:[{required:!0,message:"类型不能为空",trigger:"blur"}],name:[{required:!0,message:"名称不能为空",trigger:"blur"}]},id:"",title:"",disabled:!1,userArr:[]}},mounted:function(){this.getOrgTree(),this.getUserTree()},computed:{typeList:function(){return i["a"].getDictList("menu_type")}},methods:{init:function(e,t,r){var a=this;this.flagList=i["a"].getDictList("sys_company_flag"),this.flagList.pop(),this.disabled=!1,this.method=e,"add"===e?(this.nodeIds="",this.flagList=[this.flagList[0]],this.form=new d,this.form.flag=1,this.form.parentNodeIds="",this.title="新建"):"view"===e?this.title="查看":"addChildCompany"===e?(this.title="添加子公司",this.flagList=[this.flagList[0]],this.form=new d,this.disabled=!0,this.form.flag=1,this.nodeIds=r.nodeIds,this.form.parentNodeIds=r.nodeIds):(this.title="编辑",this.disabled=!0),this.id=t,this.visible=!0,this.$nextTick(Object(n["a"])(regeneratorRuntime.mark((function r(){var s,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if("edit"!==e&&"view"!==e){r.next=10;break}return r.next=3,l["a"].queryById({companyId:t});case 3:if(s=r.sent,n=s.data,0==n.code){r.next=8;break}return a.$message.error("获取数据失败"),r.abrupt("return");case 8:a.form=n.data,a.nodeIds=n.data.parentNodeIds;case 10:case"end":return r.stop()}}),r)}))))},getOrgTree:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l["a"].loginTree();case 2:r=t.sent,a=r.data,e.companyId=a.data.id,e.orgTree=[a.data];case 6:case"end":return t.stop()}}),t)})))()},getUserTree:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,a,s,n,i,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,f["a"].userTree({companyId:e.companyId});case 2:r=t.sent,a=r.data,e.userTree=[a.data],s=p(e.userTree),n=Object(o["a"])(s);try{for(l=function(){var t=i.value,r=e.userArr.findIndex((function(e){return e.nodeIds==t.nodeIds}));-1==r&&e.userArr.push(t)},n.s();!(i=n.n()).done;)l()}catch(c){n.e(c)}finally{n.f()}e.defaultKeys=JSON.parse(JSON.stringify(e.form.userIds)),e.$refs.usertree.$refs.tree.setCheckedKeys(e.defaultKeys);case 10:case"end":return t.stop()}}),t)})))()},toChoseTree:function(){this.showTree=!0,this.companyId=this.orgTree[0].id,this.getUserTree()},chosePeople:function(e,t){this.people=t.checkedNodes},submitPeople:function(){this.form.userIds=this.people.map((function(e){return e.id})),this.showTree=!1},getNames:function(e){var t=this;if(e&&e.length>0){var r,a=[],s=Object(o["a"])(e);try{var n=function(){var e=r.value,s=t.userArr.find((function(t){return 4==t.flag&&t.id==e}));s&&a.push(s.name)};for(s.s();!(r=s.n()).done;)n()}catch(i){s.e(i)}finally{s.f()}return a.join("、")}return""},getValue:function(e){this.form.parentNodeIds=e.nodeIds},orgClick:function(e){this.companyId=e.id,this.getUserTree()},submit:function(){var e=this;try{this.$refs.form.validate(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(r){var a,s,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=13;break}return a=e.form,t.next=4,l["a"].save(a);case 4:if(s=t.sent,n=s.data,0==n.code){t.next=8;break}return t.abrupt("return",e.$message.error(n.msg));case 8:e.$message.success(n.msg),e.$emit("update"),e.visible=!1,t.next=14;break;case 13:return t.abrupt("return",!1);case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}catch(t){this.$message.error(t)}}}},h=m,b=(r("bd24"),r("2877")),g=Object(b["a"])(h,a,s,!1,null,"5517782b",null);t["default"]=g.exports},"8aab":function(e,t,r){},bd24:function(e,t,r){"use strict";r("8aab")},d4ec:function(e,t,r){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}r.d(t,"a",(function(){return a}))}}]);