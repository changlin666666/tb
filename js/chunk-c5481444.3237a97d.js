(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c5481444"],{"4a9d":function(e,t,r){"use strict";r.d(t,"b",(function(){return i}));var a=r("7bc1"),i=function(e){return a["a"].get("/sys/company/getCompanyTree",e)};t["a"]={tree:function(e){return a["a"].get("/sys/company/getCompanyTree",e)},queryById:function(e){return a["a"].get("/sys/company/queryById",e)},save:function(e){return a["a"].post("/sys/company/saveCompany",e)},del:function(e){return a["a"].get("/sys/company/delete",e)},loginTree:function(e){return a["a"].get("/sys/company/getUseableCompanyTree",e)},use:function(e){return a["a"].get("/sys/company/enableCompany",e)}}},6395:function(e,t,r){"use strict";r("c502")},"76bc":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{attrs:{visible:e.visible,title:e.title,width:e.width,top:"3vh"},on:{"update:visible":function(t){e.visible=t},close:function(t){e.visible=!1}}},[r("el-form",{ref:"form",attrs:{"label-width":"8em",model:e.form,size:"medium",rules:e.rules,disabled:"view"===e.method},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submit.apply(null,arguments)}}},[r("el-form-item",{attrs:{label:"头像：",prop:"avatar"}},[r("kr-upload",{attrs:{"http-request":e.httpRequest,"auto-upload":!0,accept:".png,.jpg,.jpeg",action:"","file-list":e.fileList,"list-type":"picture-card","on-remove":e.handleImgRemove,imgEditEnable:!0,imgCutOption:e.imgCutOption}})],1),r("el-form-item",{attrs:{label:"邮箱：",prop:"email"}},[r("el-input",{attrs:{placeholder:"邮箱"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),r("el-form-item",{attrs:{label:"登录名：",prop:"loginName"}},[r("el-input",{attrs:{placeholder:"请输入"},model:{value:e.form.loginName,callback:function(t){e.$set(e.form,"loginName",t)},expression:"form.loginName"}})],1),r("el-form-item",{attrs:{label:"姓名：",prop:"name"}},[r("el-input",{attrs:{placeholder:"请输入"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),r("el-form-item",{attrs:{label:"联系电话：",prop:"phone"}},[r("el-input",{attrs:{placeholder:"请输入",type:"number",oninput:"if(value.length>11)value=value.slice(0,11)","show-word-limit":""},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1),r("el-form-item",{attrs:{label:"性别：",prop:"sex"}},[r("el-radio-group",{model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},[r("el-radio-button",{attrs:{label:1}},[e._v("男")]),r("el-radio-button",{attrs:{label:0}},[e._v("女")])],1)],1),r("el-form-item",{attrs:{label:"是否启用：",prop:"useable"}},[r("el-radio-group",{model:{value:e.form.useable,callback:function(t){e.$set(e.form,"useable",t)},expression:"form.useable"}},[r("el-radio-button",{attrs:{label:1}},[e._v("是")]),r("el-radio-button",{attrs:{label:0}},[e._v("否")])],1)],1),r("el-form-item",{attrs:{label:"直属主管",prop:"useable"}},[r("el-input",{attrs:{placeholder:"点击添加人员",readonly:"",clearable:"",value:e.getNames(e.form.superVisor)},on:{focus:e.toChoseTree}})],1),r("el-form-item",{attrs:{label:"所属机构：",prop:"orgNodeIds"}},[e._l(e.form.orgNodeIds,(function(t,a){return r("el-tag",{key:a,staticStyle:{"margin-right":"4px"},attrs:{type:e.getFlag(t),closable:"view"!=e.method},on:{close:function(r){return e.removeOrg(t)}}},[e._v(" "+e._s(e.getName(t))+" ")])})),r("el-button",{staticClass:"addOrgBtn",attrs:{size:"small",type:"primary",plain:""},on:{click:function(t){return e.addOrg()}}},[r("i",{staticClass:"el-icon-plus"}),e._v("新增组织机构 ")])],2),r("el-form-item",{attrs:{label:"备注：",prop:"remarks"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.form.remarks,callback:function(t){e.$set(e.form,"remarks",t)},expression:"form.remarks"}})],1)],1),r("span",{attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取 消")]),"view"!=e.method?r("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("确 定")]):e._e()],1),r("el-dialog",{attrs:{visible:e.showTree,"append-to-body":"",width:"30%",center:"",title:"组织机构"},on:{close:function(t){e.showTree=!1}}},[r("kr-tree",{ref:"tree",staticClass:"tree",attrs:{data:e.treeData,props:e.treeProps,"node-key":"nodeIds","show-checkbox":"","check-strictly":!0,"default-expand-all":""},on:{check:e.getChecked}}),r("span",{attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.showTree=!1}}},[e._v("取 消")]),r("el-button",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{type:"primary"},on:{click:e.choseOrg}},[e._v("确 定")])],1)],1),r("el-dialog",{attrs:{visible:e.showPerson,"append-to-body":"",title:"添加人员"},on:{close:function(t){e.showPerson=!1}}},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12}},[r("div",{staticClass:"content-box"},[r("div",[e._v("选择公司")]),r("kr-tree",{ref:"companytree",staticClass:"tree",attrs:{data:e.orgTree,props:e.defaultProps,"default-expand-all":""},on:{"node-click":e.orgClick}})],1)]),r("el-col",{attrs:{span:12}},[r("div",{staticClass:"content-box"},[r("div",[e._v("选择人员")]),r("kr-tree",{ref:"usertree",staticClass:"tree",attrs:{"highlight-current":"",data:e.userTree,props:e.defaultProps2,multiple:!1,"node-key":"nodeIds","default-expand-all":""},on:{"node-click":e.chosePeople},scopedSlots:e._u([{key:"extra",fn:function(t){return[e.people.nodeIds==t.data.nodeIds?r("i",{staticClass:"el-icon-circle-close",on:{click:function(t){return t.stopPropagation(),e.cancelPerson.apply(null,arguments)}}}):e._e()]}}])})],1)])],1)],1)],1)},i=[],n=r("1da1"),s=r("5530"),o=r("b85c"),l=(r("96cf"),r("7db0"),r("b0c0"),r("fb6a"),r("a9e3"),r("c740"),r("a434"),r("a15b"),r("f477")),u=r("b15a"),c=r("a37d"),d=r("85b6"),p=r("5444"),f=r("2f62"),m=r("4a9d");function h(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=Object(o["a"])(e);try{for(a.s();!(t=a.n()).done;){var i=t.value;r.push(i),i.children&&i.children.length>0&&h(i.children,r)}}catch(n){a.e(n)}finally{a.f()}return r}function g(e,t,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=t.find((function(t){return t.nodeIds==e}));if(i){a.push(i.name);var n=e.lastIndexOf(r);if(n>-1){var s=e.slice(0,n);g(s,t,r,a)}}return a}var b={components:{krUpload:d["a"]},props:{width:{type:String,default:"50%"},treeData:{type:Array,default:function(){return[]}},companyId:{type:[Number,String],default:0}},watch:{},data:function(){return{defaultProps:{children:"children",label:"name"},defaultProps2:{children:"children",label:"name",disabled:function(e,t){return!e.clickable}},visible:!1,method:"",form:new c["a"],rules:{name:[{required:!0,message:"名称不能为空",trigger:"blur"}],loginName:[{required:!0,message:"登录名不能为空",trigger:"blur"}],orgNodeIds:[{required:!0,message:"所属机构必须选择",trigger:"blur"}],phone:[{pattern:/1[3456789]\d{9}/,message:"请输入正确手机号",trigger:"blur"}]},id:"",fileList:[],title:"",dictUtils:l["a"],loading:!1,showTree:!1,showPerson:!1,userTree:[],orgTree:[],treeCompanyId:0,userArr:[],defaultKeys:[],people:[],disabled:!1,treeProps:{children:"children",label:"name",disabled:"disabled"},newOrg:"",imgCutOption:{boxWidth:920,boxHeight:520,originalGraph:!1,rate:"4:3"}}},computed:Object(s["a"])(Object(s["a"])({},Object(f["c"])({user:function(e){return e.user.user}})),{},{alltree:function(){return h(this.treeData)}}),methods:Object(s["a"])(Object(s["a"])({},Object(f["b"])({updateUser:"user/updateUser"})),{},{submitPeople:function(){this.form.superVisor=this.people.id,this.form.superVisorNodeIds=this.people.nodeIds,this.showPerson=!1},getOrgTree:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,m["a"].loginTree();case 2:r=t.sent,a=r.data,e.treeCompanyId=a.data.id,e.orgTree=[a.data];case 6:case"end":return t.stop()}}),t)})))()},getUserTree:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,a,i,n,s,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u["a"].userTree({companyId:e.treeCompanyId});case 2:r=t.sent,a=r.data,e.userTree=[a.data],i=h(e.userTree),n=Object(o["a"])(i);try{for(l=function(){var t=s.value,r=e.userArr.findIndex((function(e){return e.nodeIds==t.nodeIds}));-1==r&&e.userArr.push(t)},n.s();!(s=n.n()).done;)l()}catch(c){n.e(c)}finally{n.f()}e.people.nodeIds=e.form.superVisorNodeIds,e.people.id=e.form.superVisor,e.$nextTick((function(){e.$refs.usertree.$refs.tree.setCurrentKey(e.form.superVisorNodeIds)}));case 11:case"end":return t.stop()}}),t)})))()},toChoseTree:function(){this.showPerson=!0,this.treeCompanyId=this.orgTree[0].id,this.getUserTree()},orgClick:function(e){this.treeCompanyId=e.id,this.getUserTree()},chosePeople:function(e){this.people=e,this.submitPeople()},cancelPerson:function(){this.form.superVisor="",this.people={id:"",nodeIds:""},this.submitPeople()},init:function(e,t){var r=this;this.method=e,"add"===e?(this.form=new c["a"],this.title="新建"):this.title="编辑",this.id=t,this.fileList=[],this.visible=!0,this.$nextTick(Object(n["a"])(regeneratorRuntime.mark((function a(){var i,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(r.$refs.form.resetFields(),"edit"!==e&&"view"!==e){a.next=11;break}return a.next=4,u["a"].getUserByID({userId:String(t),companyId:String(r.companyId)});case 4:if(i=a.sent,n=i.data,0==n.code){a.next=9;break}return r.$message.error("获取数据失败"),a.abrupt("return");case 9:r.form=n.data,n.data.avatar&&r.fileList.push({url:r.$BASE_URL+"/source/download?id="+n.data.avatar});case 11:if(r.treeCompanyId=r.companyId,r.orgTree.length){a.next=17;break}return a.next=15,r.getOrgTree();case 15:return a.next=17,r.getUserTree();case 17:case"end":return a.stop()}}),a)}))))},getNames:function(e){if(e){var t=this.userArr.find((function(t){return 4==t.flag&&t.id==e}));return t&&t.name||""}return""},addOrg:function(){var e=this;this.showTree=!0,this.$nextTick((function(){e.$refs.tree.$refs.tree.setCheckedKeys([])}))},choseOrg:function(){var e=this;this.showTree=!1;var t,r=Object(o["a"])(this.newOrg);try{var a=function(){var r=t.value,a=e.form.orgNodeIds.findIndex((function(e){return e==r}));-1==a?e.form.orgNodeIds.push(r):e.$message.error("该机构已存在！")};for(r.s();!(t=r.n()).done;)a()}catch(i){r.e(i)}finally{r.f()}this.newOrg=[]},getChecked:function(e,t){this.newOrg=t.checkedKeys},httpRequest:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var a,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Object(p["m"])({file:e.file,pid:0,source:"file"});case 2:if(a=r.sent,i=a.data,0==i.code){r.next=7;break}return t.$message.error(i.msg),r.abrupt("return");case 7:t.form.avatar=i.data.id;case 8:case"end":return r.stop()}}),r)})))()},handleImgRemove:function(e,t){var r=t.findIndex((function(t){return t.uid===e.uid}));r>=0&&t.splice(r,1),this.form.avatar=""},getName:function(e){return g(e,this.alltree,"/").reverse().join("-")},getFlag:function(e){var t=this.alltree.find((function(t){return t.nodeIds==e}));if(console.log(this.alltree),t)switch(t.flag){case 1:return"primary";case 2:return"success";case 3:return"warning"}},removeOrg:function(e){var t=this.form.orgNodeIds.findIndex((function(t){return t.nodeIds==e}));this.form.orgNodeIds.splice(t,1)},submit:function(){var e=this;try{this.$refs.form.validate(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(r){var a,i,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=22;break}return e.form.companyId=String(e.companyId),a=e.form,delete a.loginIp,delete a.allowIps,delete a.loginDate,e.loading=!0,t.next=9,u["a"].save(a);case 9:if(i=t.sent,n=i.data,0==n.code){t.next=14;break}return e.loading=!1,t.abrupt("return",e.$message.error(n.msg));case 14:e.user.id==a.id&&e.updateUser(a),e.loading=!1,e.$message.success(n.msg),e.$emit("update"),e.$parent.$refs.table.init(),e.visible=!1,t.next=23;break;case 22:return t.abrupt("return",!1);case 23:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}catch(t){this.$message.error(t)}}})},v=b,y=r("2877"),C=Object(y["a"])(v,a,i,!1,null,null,null);t["default"]=C.exports},"85b6":function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"upload",style:{"--drag-width":e.dragOption.width||"360px","--drag-height":e.dragOption.height||"220px"}},["picture-card"===e.$attrs["list-type"]?r("el-upload",e._b({ref:"upload",attrs:{"on-change":e.uploadImgsChange,"on-success":e.uploadSuccess,headers:{token:e.$store.state.user.user.token}},scopedSlots:e._u([{key:"file",fn:function(t){var a=t.file;return r("div",{},[r("img",{staticClass:"el-upload-list__item-thumbnail",attrs:{src:a.url,alt:""}}),r("span",{staticClass:"el-upload-list__item-actions"},[r("span",{staticClass:"el-upload-list__item-preview",on:{click:function(t){return e.handlePictureCardPreview(a)}}},[r("i",{staticClass:"el-icon-zoom-in"})]),e.imgEditEnable&&e.isView?r("span",{staticClass:"el-upload-list__item-delete",on:{click:function(t){return e.handleEditImg(a)}}},[r("i",{staticClass:"el-icon-edit-outline"})]):e._e(),e.isView?r("span",{staticClass:"el-upload-list__item-delete",on:{click:function(t){return e.handleRemove(a)}}},[r("i",{staticClass:"el-icon-delete"})]):e._e()])])}}],null,!1,863019275)},"el-upload",e.$attrs,!1),[r("i",{staticClass:"el-icon-plus"})]):r("el-upload",e._b({ref:"upload",attrs:{headers:{token:e.$store.state.user.user.token}},on:{"on-success":e.uploadImgsSuccess}},"el-upload",e.$attrs,!1),[e.$attrs.drag?r("div",{staticClass:"drag-tooltip"},[r("i",{staticClass:"el-icon-upload drag-tooltip-icon"}),r("div",{staticClass:"drag-tooltip-text"},[e._v(" 将文件拖到此处，或 "),r("em",[e._v("点击上传")])]),e.tooltip?r("div",{staticClass:"tooltip-text"},[e._v("支持扩展名："+e._s(e.tooltip))]):e._e()]):e._e(),r("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),!e.$attrs.drag&&e.tooltip?r("div",{staticClass:"tooltip-text",attrs:{slot:"tip"},slot:"tip"},[e._v(e._s(e.tooltip))]):e._e()],1),r("el-dialog",{attrs:{title:"图片预览",visible:e.dialogVisible,top:"3vh","append-to-body":!0},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})]),r("el-dialog",{attrs:{title:"图片剪裁",visible:e.ImgCutterData.visible,"append-to-body":!0},on:{"update:visible":function(t){return e.$set(e.ImgCutterData,"visible",t)}}},[e.ImgCutterData.visible?r("img-cutter",e._b({ref:"ImgCutter",attrs:{showChooseBtn:!1,isModal:!1},on:{loaded:e.imgCutterLoaded,cutDown:e.imgCutDown,onClearAll:function(t){e.ImgCutterData.visible=!1},changeAllreadyCut:e.changeAllreadyCut}},"img-cutter",e.imgCutOption,!1)):e._e()],1)],1)},i=[],n=(r("d3b7"),r("3ca3"),r("ddb0"),r("b0c0"),function(){return r.e("ImgCutter").then(r.bind(null,"447d"))}),s={name:"kr-upload",components:{ImgCutter:n},props:{tooltip:String,isView:{type:Boolean,default:!0},uploadType:{type:String,default:"file"},dragOption:{type:Object,default:function(){return{width:"360px",height:"220px"}}},imgCutOption:{type:Object,default:function(){return{boxHeight:400,boxWidth:800,originalGraph:!1,rate:null}}},imgEditEnable:{type:Boolean,default:!1}},data:function(){return{isAlreadyCut:!1,dialogImageUrl:"",dialogVisible:!1,ImgCutterData:{loadImgCutter:!1,visible:!1,file:null},uid:""}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{changeAllreadyCut:function(e){this.isAlreadyCut=e},uploadSuccess:function(e,t,r){this.loading=!1},uploadImgsChange:function(e,t){!0!==this.$attrs.multiple&&(this.$refs.upload._data.uploadFiles=[e]),this.isAlreadyCut||this.uid===e.uid||(this.ImgCutterData.visible=!0,this.ImgCutterData.file=e),this.uid=e.uid},handleRemove:function(e){this.$attrs["on-remove"](e,this.$refs.upload._data.uploadFiles),this.$emit("remove")},handlePictureCardPreview:function(e){this.dialogImageUrl=e.url,this.dialogVisible=!0},handleEditImg:function(e){e.name||(e.name="无名称.png"),this.ImgCutterData.file=e,this.ImgCutterData.visible=!0},imgCutterLoaded:function(){console.log(),this.$refs.ImgCutter.handleOpen(this.ImgCutterData.file)},imgCutDown:function(e){this.ImgCutterData.file.raw=e.file,this.ImgCutterData.file.raw.uid=this.ImgCutterData.file.uid,this.ImgCutterData.file.url=e.dataURL,this.ImgCutterData.file.size=e.file.size,this.ImgCutterData.file.status="ready",this.ImgCutterData.visible=!1,!1!==this.$attrs["auto-upload"]&&this.$refs.upload.submit(),this.$emit("cutDown",this.ImgCutterData.file)}}},o=s,l=(r("6395"),r("2877")),u=Object(l["a"])(o,a,i,!1,null,"b560955c",null);t["a"]=u.exports},a37d:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var a=r("d4ec"),i=r("ade3"),n=function e(){Object(a["a"])(this,e),Object(i["a"])(this,"id",""),Object(i["a"])(this,"loginName",""),Object(i["a"])(this,"name",""),Object(i["a"])(this,"phone",""),Object(i["a"])(this,"remarks",""),Object(i["a"])(this,"loginFlag",1),Object(i["a"])(this,"sex",1),Object(i["a"])(this,"superVisor",""),Object(i["a"])(this,"superVisorNodeIds",""),Object(i["a"])(this,"useable",1),Object(i["a"])(this,"orgNodeIds",[]),Object(i["a"])(this,"avatar",""),Object(i["a"])(this,"email","")}},c502:function(e,t,r){},d4ec:function(e,t,r){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}r.d(t,"a",(function(){return a}))}}]);