(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9fb972d6","chunk-18261269"],{"1a2c":function(e,t,i){"use strict";var a=i("7bc1");t["a"]={getStatisticsForForum:function(e){return a["a"].get("/forum/backend/home/getStatistics",e)},getStatisticsForCms:function(e){return a["a"].get("/cms/backend/home/getStatistics",e)},getArticleIncr:function(e){return a["a"].post("/cms/backend/home/getArticleIncr",e)},getScoreRank:function(e){return a["a"].post("/cms/backend/home/getScoreRank",e)},homeSteamerList:function(e){return a["a"].post("/cms/backend/steamer/page",e)},homeSteamerSave:function(e){return a["a"].post("/cms/backend/steamer/save",e)},homeSteamerInfo:function(e){return a["a"].get("/cms/backend/steamer/getById",e)},homeSteamerDel:function(e){return a["a"].get("/cms/backend/steamer/delete",e)},homeSteamerTurnon:function(e){return a["a"].get("/cms/backend/steamer/updateUsableById",e)}}},"46bf":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-dialog",{attrs:{visible:e.visible,title:e.title,width:e.width},on:{"update:visible":function(t){e.visible=t},close:e.close}},[i("el-form",{ref:"form",attrs:{"label-width":"150px",model:e.form,size:"medium",rules:e.rules,disabled:"view"===e.method},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submit.apply(null,arguments)}}},[i("el-row",[i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"横幅名称",prop:"name"}},[i("el-input",{attrs:{placeholder:"请输入名称"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"是否启用",prop:"usable"}},[i("el-radio-group",{model:{value:e.form.usable,callback:function(t){e.$set(e.form,"usable",t)},expression:"form.usable"}},[i("el-radio-button",{attrs:{label:"1"}},[e._v("是")]),i("el-radio-button",{attrs:{label:"0"}},[e._v("否")])],1)],1)],1),i("el-col",{attrs:{span:24}},[i("el-form-item",{attrs:{label:"横幅图:"}},[i("kr-upload",{ref:"isAlreadyCut",attrs:{"http-request":e.httpRequest,action:e.$BASE_URL+"/source/upload","auto-upload":!0,accept:".png, .jpg, .gif","list-type":"picture-card","on-remove":e.handleImgRemove,isView:"view"!==e.method,imgEditEnable:!0,"file-list":e.imgFileList,imgCutOption:e.imgCutOption,"before-upload":e.beforeupload}})],1)],1)],1)],1),i("span",{attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:e.close}},[e._v("取 消")]),i("el-button",{directives:[{name:"noMoreClick",rawName:"v-noMoreClick"}],attrs:{type:"primary"},on:{click:e.submit}},[e._v("确 定")])],1)],1)},r=[],n=i("1da1"),s=(i("c740"),i("a434"),i("96cf"),i("1a2c")),o=i("85b6"),l=i("d4ec"),u=i("ade3"),c=function e(){Object(l["a"])(this,e),Object(u["a"])(this,"name",""),Object(u["a"])(this,"id",null),Object(u["a"])(this,"image",null),Object(u["a"])(this,"remarks",""),Object(u["a"])(this,"usable",0)},d=i("5444"),m={components:{krUpload:o["a"]},props:{imgCutOption:{type:Object,default:function(){return{boxWidth:920,boxHeight:520,originalGraph:!1,cutWidth:1220,cutHeight:105}}},imgCutOptionT:{type:Object,default:function(){return{boxWidth:920,boxHeight:520,cutWidth:240,cutHeight:420,originalGraph:!1}}},width:{type:String,default:"60%"}},watch:{},data:function(){return{theoryEducationMenuOptions:[],imgFileList:[],visible:!1,nodeIds:"",parentId:"",pid:0,source:"file",method:"",form:new c,typeList:[],rules:{menuType:[{required:!0,message:"专题分类类型不能为空",trigger:"blur"}],name:[{required:!0,message:"名称不能为空",trigger:"blur"}]},id:"",title:"",defaultProps:{children:"children",label:"name"}}},methods:{init:function(e,t,i){var a=this;this.imgFileList=[],this.method=e,"add"===e?(this.nodeIds="",this.form=new c,this.title="新增横幅"):this.title="view"===e?"查看横幅":"编辑横幅",this.id=t,this.$nextTick(Object(n["a"])(regeneratorRuntime.mark((function i(){var r,n;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(a.visible=!0,"edit"!==e&&"view"!==e){i.next=12;break}return i.next=4,s["a"].homeSteamerInfo({id:t});case 4:if(r=i.sent,n=r.data,"add"!==e&&(a.imgFileList=null!==n&&void 0!==n&&n.data.image?[{url:null===n||void 0===n?void 0:n.data.image}]:[]),0==n.code){i.next=10;break}return a.$message.error("获取数据失败"),i.abrupt("return");case 10:a.form=n.data,a.nodeIds=n.data.parentNodeIds;case 12:case"end":return i.stop()}}),i)}))))},httpRequest:function(e){setTimeout((function(){e.onProgress({percent:25})}),1e3),setTimeout((function(){e.onProgress({percent:65})}),2e3),setTimeout((function(){e.onProgress({percent:100})}),3e3),setTimeout((function(){e.onSuccess()}),4e3)},handleImgRemove:function(e,t){var i=t.findIndex((function(t){return t.uid===e.uid}));i>=0&&t.splice(i,1)},getValue:function(e){this.form.parentNodeIds=e.nodeIds},beforeupload:function(e){var t=this,i="image/jpeg"===e.type||"image/png"==e.type,a=e.size/1024/1024<20;if(i){if(a)return d["d"].uploadFile({file:e,pid:this.pid,source:this.source}).then((function(e){t.form.image="/file/"+e.data.data.path}));this.$message.error("上传图片大小不能超过 20MB")}else this.$message.error("上传图片只能是JPG或PNG格式")},close:function(){this.visible=!1,this.$refs.isAlreadyCut.isAlreadyCut=!1},submit:function(){var e=this;try{if(!this.form.image)return this.$message.error("横幅图不能为空"),!1;this.$refs.form.validate(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(i){var a,r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!i){t.next=13;break}return a=e.form,t.next=4,s["a"].homeSteamerSave(a);case 4:if(r=t.sent,n=r.data,0==n.code){t.next=8;break}return t.abrupt("return",e.$message.error(n.msg));case 8:e.$message.success(n.msg),e.$parent.$refs.table.init(),e.close(),t.next=14;break;case 13:return t.abrupt("return",!1);case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}catch(t){this.$message.error(t)}}}},f=m,p=i("2877"),h=Object(p["a"])(f,a,r,!1,null,null,null);t["default"]=h.exports},6395:function(e,t,i){"use strict";i("c502")},"816a":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"notification"},[i("div",{staticClass:"content-header"},[i("el-form",{ref:"elForm",staticClass:"filter-form",attrs:{inline:!0,model:e.searchForm}},[i("el-form-item",[i("el-input",{attrs:{placeholder:"横幅名称",clearable:""},model:{value:e.searchForm.nameKeyword,callback:function(t){e.$set(e.searchForm,"nameKeyword",t)},expression:"searchForm.nameKeyword"}})],1),i("el-form-item",[i("el-select",{attrs:{placeholder:"状态选择",clearable:""},model:{value:e.searchForm.usable,callback:function(t){e.$set(e.searchForm,"usable",t)},expression:"searchForm.usable"}},[i("el-option",{attrs:{label:"全部",value:""}}),i("el-option",{attrs:{label:"启用",value:0}}),i("el-option",{attrs:{label:"未启用",value:1}})],1)],1),i("el-form-item",[i("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.doSearch}},[e._v("查询")]),i("el-button",{attrs:{icon:"el-icon-refresh-right"},on:{click:e.resetParams}},[e._v("重置")])],1)],1)],1),i("div",{staticClass:"table"},[i("kr-table",{ref:"table",attrs:{columns:e.columns,fetchFunc:e.getList,searchParams:e.searchForm},on:{"selection-change":e.handleSelectionChange}},[i("div",{attrs:{slot:"handleButtons"},slot:"handleButtons"},[i("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(t){return e.addOrEdit("add")}}},[e._v("新增横幅")])],1)])],1),i("formDialog",{ref:"form"})],1)},r=[],n=i("1da1"),s=i("5530"),o=(i("96cf"),i("b0c0"),i("46bf")),l=i("1a2c"),u=(i("f477"),i("2f62")),c={name:"sys-notification",components:{formDialog:o["default"]},props:{},data:function(e){this.$createElement;var t=this;return{usableSpecialSubjectMenuTreeOptions:[],menuOptions:[],defaultProps:{children:"children",label:"name"},notiType:[],articleStatus:"",searchForm:{ascs:"",current:1,nameKeyword:"",size:20,usable:""},selectedRows:[],total:100,rows:[],columns:[{prop:"name",label:"横幅标题",render:function(e,t){return e("div",{style:"color:var(--defaultTheme)"},[t.name])}},{prop:"usable",sortable:!0,label:"是否启用",render:function(t,i){return t("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949",value:1==i.usable,size:e.size},on:{change:function(){return e.changeUse(i)}}})}},{label:"操作",headerAlign:"center",prop:"ffff",width:200,fixed:"right",align:"center",render:function(e,i){return e("div",[e("el-button",{on:{click:function(){return t.addOrEdit("view",i)}},attrs:{type:"text",size:t.size,icon:"krIconfont kr-icon_yulan"}},["查看"]),e("el-button",{attrs:{size:t.size,icon:"krIconfont kr-tianxie",type:"text"},on:{click:function(){return t.addOrEdit("edit",i)}}},["编辑"]),e("el-button",{attrs:{size:t.size,icon:" kr-shanchu krIconfont",type:"text"},on:{click:function(){return t.del(i)}},style:"color:red"},["删除"])])}}],showDetail:!1}},computed:Object(s["a"])(Object(s["a"])({},Object(u["c"])({size:function(e){return e.config.defaultSize}})),{},{getList:function(){return l["a"].homeSteamerList}}),watch:{},created:function(){},mounted:function(){},methods:{changeUse:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function i(){var a,r;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return e.usable=0==e.usable?"1":"0",delete e.children,i.next=4,l["a"].homeSteamerTurnon(e);case 4:if(a=i.sent,r=a.data,0==r.code){i.next=8;break}return i.abrupt("return",t.$message.error(r.msg));case 8:t.$refs.table.init(),t.$message.success(r.msg);case 10:case"end":return i.stop()}}),i)})))()},resetParams:function(){this.searchForm.title="",this.doSearch()},doSearch:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$refs.table.insidePage=1,e.$refs.table.init();case 2:case"end":return t.stop()}}),t)})))()},addOrEdit:function(e,t){this.$refs.form.init(e,null===t||void 0===t?void 0:t.id)},handleSelectionChange:function(e){this.selectedRows=e},del:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:t.$confirm("此操作将永久删除所选, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(n["a"])(regeneratorRuntime.mark((function i(){var a,r;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,l["a"].homeSteamerDel({id:e.id});case 2:if(a=i.sent,r=a.data,0==r.code){i.next=6;break}return i.abrupt("return",t.$message.error(r.msg));case 6:t.$message({type:"success",message:"删除成功!"}),t.doSearch();case 8:case"end":return i.stop()}}),i)})))).catch((function(){t.$message({type:"info",message:"已取消删除"})}));case 1:case"end":return i.stop()}}),i)})))()}}},d=c,m=(i("b839"),i("2877")),f=Object(m["a"])(d,a,r,!1,null,"f9ce916e",null);t["default"]=f.exports},"85b6":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"upload",style:{"--drag-width":e.dragOption.width||"360px","--drag-height":e.dragOption.height||"220px"}},["picture-card"===e.$attrs["list-type"]?i("el-upload",e._b({ref:"upload",attrs:{"on-change":e.uploadImgsChange,"on-success":e.uploadSuccess,headers:{token:e.$store.state.user.user.token}},scopedSlots:e._u([{key:"file",fn:function(t){var a=t.file;return i("div",{},[i("img",{staticClass:"el-upload-list__item-thumbnail",attrs:{src:a.url,alt:""}}),i("span",{staticClass:"el-upload-list__item-actions"},[i("span",{staticClass:"el-upload-list__item-preview",on:{click:function(t){return e.handlePictureCardPreview(a)}}},[i("i",{staticClass:"el-icon-zoom-in"})]),e.imgEditEnable&&e.isView?i("span",{staticClass:"el-upload-list__item-delete",on:{click:function(t){return e.handleEditImg(a)}}},[i("i",{staticClass:"el-icon-edit-outline"})]):e._e(),e.isView?i("span",{staticClass:"el-upload-list__item-delete",on:{click:function(t){return e.handleRemove(a)}}},[i("i",{staticClass:"el-icon-delete"})]):e._e()])])}}],null,!1,863019275)},"el-upload",e.$attrs,!1),[i("i",{staticClass:"el-icon-plus"})]):i("el-upload",e._b({ref:"upload",attrs:{headers:{token:e.$store.state.user.user.token}},on:{"on-success":e.uploadImgsSuccess}},"el-upload",e.$attrs,!1),[e.$attrs.drag?i("div",{staticClass:"drag-tooltip"},[i("i",{staticClass:"el-icon-upload drag-tooltip-icon"}),i("div",{staticClass:"drag-tooltip-text"},[e._v(" 将文件拖到此处，或 "),i("em",[e._v("点击上传")])]),e.tooltip?i("div",{staticClass:"tooltip-text"},[e._v("支持扩展名："+e._s(e.tooltip))]):e._e()]):e._e(),i("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),!e.$attrs.drag&&e.tooltip?i("div",{staticClass:"tooltip-text",attrs:{slot:"tip"},slot:"tip"},[e._v(e._s(e.tooltip))]):e._e()],1),i("el-dialog",{attrs:{title:"图片预览",visible:e.dialogVisible,top:"3vh","append-to-body":!0},on:{"update:visible":function(t){e.dialogVisible=t}}},[i("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})]),i("el-dialog",{attrs:{title:"图片剪裁",visible:e.ImgCutterData.visible,"append-to-body":!0},on:{"update:visible":function(t){return e.$set(e.ImgCutterData,"visible",t)}}},[e.ImgCutterData.visible?i("img-cutter",e._b({ref:"ImgCutter",attrs:{showChooseBtn:!1,isModal:!1},on:{loaded:e.imgCutterLoaded,cutDown:e.imgCutDown,onClearAll:function(t){e.ImgCutterData.visible=!1},changeAllreadyCut:e.changeAllreadyCut}},"img-cutter",e.imgCutOption,!1)):e._e()],1)],1)},r=[],n=(i("d3b7"),i("3ca3"),i("ddb0"),i("b0c0"),function(){return i.e("ImgCutter").then(i.bind(null,"447d"))}),s={name:"kr-upload",components:{ImgCutter:n},props:{tooltip:String,isView:{type:Boolean,default:!0},uploadType:{type:String,default:"file"},dragOption:{type:Object,default:function(){return{width:"360px",height:"220px"}}},imgCutOption:{type:Object,default:function(){return{boxHeight:400,boxWidth:800,originalGraph:!1,rate:null}}},imgEditEnable:{type:Boolean,default:!1}},data:function(){return{isAlreadyCut:!1,dialogImageUrl:"",dialogVisible:!1,ImgCutterData:{loadImgCutter:!1,visible:!1,file:null},uid:""}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{changeAllreadyCut:function(e){this.isAlreadyCut=e},uploadSuccess:function(e,t,i){this.loading=!1},uploadImgsChange:function(e,t){!0!==this.$attrs.multiple&&(this.$refs.upload._data.uploadFiles=[e]),this.isAlreadyCut||this.uid===e.uid||(this.ImgCutterData.visible=!0,this.ImgCutterData.file=e),this.uid=e.uid},handleRemove:function(e){this.$attrs["on-remove"](e,this.$refs.upload._data.uploadFiles),this.$emit("remove")},handlePictureCardPreview:function(e){this.dialogImageUrl=e.url,this.dialogVisible=!0},handleEditImg:function(e){e.name||(e.name="无名称.png"),this.ImgCutterData.file=e,this.ImgCutterData.visible=!0},imgCutterLoaded:function(){console.log(),this.$refs.ImgCutter.handleOpen(this.ImgCutterData.file)},imgCutDown:function(e){this.ImgCutterData.file.raw=e.file,this.ImgCutterData.file.raw.uid=this.ImgCutterData.file.uid,this.ImgCutterData.file.url=e.dataURL,this.ImgCutterData.file.size=e.file.size,this.ImgCutterData.file.status="ready",this.ImgCutterData.visible=!1,!1!==this.$attrs["auto-upload"]&&this.$refs.upload.submit(),this.$emit("cutDown",this.ImgCutterData.file)}}},o=s,l=(i("6395"),i("2877")),u=Object(l["a"])(o,a,r,!1,null,"b560955c",null);t["a"]=u.exports},b839:function(e,t,i){"use strict";i("b91d")},b91d:function(e,t,i){},c502:function(e,t,i){},d4ec:function(e,t,i){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}i.d(t,"a",(function(){return a}))}}]);