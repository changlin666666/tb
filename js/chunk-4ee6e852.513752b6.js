(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ee6e852"],{"02be":function(e,r,i){"use strict";i("5628")},"0494":function(e,r,i){"use strict";var t=function(){var e=this,r=e.$createElement,i=e._self._c||r;return i("div",[i("iframe",{staticStyle:{width:"100%",height:"100vh"},attrs:{src:e.src,id:"pdfIframe"}})])},o=[],n={name:"myTestTwo",props:{url:{type:String,default:"/pdfplugin/web/compressed.tracemonkey-pldi-09.pdf"}},data:function(){return{src:""}},mounted:function(){this.getUrl()},methods:{getUrl:function(){this.src="/pdfplugin/web/viewer.html?file=".concat(encodeURIComponent(this.url))}}},a=n,l=i("2877"),s=Object(l["a"])(a,t,o,!1,null,"69e75951",null);r["a"]=s.exports},5628:function(e,r,i){},"8ed7":function(e,r,i){"use strict";i.r(r);var t=function(){var e=this,r=e.$createElement,i=e._self._c||r;return i("div",{staticClass:"container"},[i("div",{staticClass:"title-box"},[e._m(0),i("div",{staticClass:"function"},[i("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,size:"mini",model:e.searchForm}},[i("el-form-item",{attrs:{label:"投标单位"}},[i("el-input",{attrs:{placeholder:"请输入投标单位"},model:{value:e.searchForm.value2,callback:function(r){e.$set(e.searchForm,"value2",r)},expression:"searchForm.value2"}})],1),i("el-form-item",{attrs:{label:"项目名称"}},[i("el-input",{attrs:{placeholder:"请输入项目名称"},model:{value:e.searchForm.value1,callback:function(r){e.$set(e.searchForm,"value1",r)},expression:"searchForm.value1"}})],1),i("el-button",{attrs:{size:"mini",type:"primary",icon:"el-icon-search"},on:{click:function(r){return e.doSearch()}}},[e._v("搜索")]),i("el-button",{attrs:{size:"mini",type:"primary",icon:"el-icon-plus"},on:{click:function(r){return e.openForm()}}},[e._v("新增")]),i("el-button",{attrs:{size:"mini",icon:"el-icon-sort"}},[e._v("重置")])],1)],1)]),i("div",{staticClass:"table-list"},[i("vxe-grid",e._b({ref:"xGrid",scopedSlots:e._u([{key:"isWinning",fn:function(r){var t=r.row;return[t.isWinning?i("el-tag",{attrs:{type:"success"}},[e._v("中标")]):i("el-tag",{attrs:{type:"warning"}},[e._v("未中标")])]}},{key:"bidPrice",fn:function(r){var i=r.row;return[e._v(" "+e._s(e.moneyFormat(i.bidPrice))+"元 ")]}},{key:"operate",fn:function(r){var t=r.row;return[i("vxe-button",{attrs:{status:"primary",type:"text"},on:{click:function(r){return e.openForm(t)}}},[e._v("编辑")]),i("vxe-button",{attrs:{status:"error",type:"text"},on:{click:function(r){return e.delHandler(t)}}},[e._v("删除")])]}}])},"vxe-grid",e.gridOptions,!1))],1),i("el-dialog",{attrs:{title:"新增/编辑代理协议",visible:e.dialogFormVisible,width:"900px"},on:{"update:visible":function(r){e.dialogFormVisible=r}}},[i("el-form",{ref:"formRef",attrs:{model:e.form,rules:e.rules,"label-width":"120px"}},[i("el-form-item",{attrs:{label:"投标单位名称",prop:"bidderName"}},[i("el-input",{attrs:{disabled:""},model:{value:e.form.bidderName,callback:function(r){e.$set(e.form,"bidderName",r)},expression:"form.bidderName"}})],1),i("el-form-item",{attrs:{label:"项目编号",prop:"projectId"}},[i("el-input",{model:{value:e.form.projectId,callback:function(r){e.$set(e.form,"projectId",r)},expression:"form.projectId"}})],1),i("el-form-item",{attrs:{label:"项目名称",prop:"projectName"}},[i("el-input",{model:{value:e.form.projectName,callback:function(r){e.$set(e.form,"projectName",r)},expression:"form.projectName"}})],1),i("el-form-item",{attrs:{label:"报价(元)",prop:"bidPrice"}},[i("el-input-number",{attrs:{type:"number"},model:{value:e.form.bidPrice,callback:function(r){e.$set(e.form,"bidPrice",r)},expression:"form.bidPrice"}})],1),i("el-form-item",{attrs:{label:"评分",prop:"score"}},[i("el-input",{attrs:{type:"number"},model:{value:e.form.score,callback:function(r){e.$set(e.form,"score",r)},expression:"form.score"}})],1),i("el-form-item",{attrs:{label:"排名",prop:"ranking"}},[i("el-input",{attrs:{type:"number"},model:{value:e.form.ranking,callback:function(r){e.$set(e.form,"ranking",r)},expression:"form.ranking"}})],1),i("el-form-item",{attrs:{label:"是否中标",prop:"isWinning"}},[i("el-switch",{model:{value:e.form.isWinning,callback:function(r){e.$set(e.form,"isWinning",r)},expression:"form.isWinning"}})],1)],1),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(r){e.dialogFormVisible=!1}}},[e._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")])],1)],1)],1)},o=[function(){var e=this,r=e.$createElement,i=e._self._c||r;return i("div",{staticClass:"title"},[i("i",{staticClass:"el-icon-s-grid"}),e._v("参投项目管理")])}],n=i("5530"),a=i("ade3"),l=(i("a15b"),i("d81d"),i("4de4"),i("159b"),i("d3b7"),i("ddb0"),i("ac1f"),i("5319"),i("0494")),s={name:"FileDuplicateChecking",components:{pdfReader:l["a"]},data:function(){var e,r=this,i=this;return{options:[{value:"蓝国科技有限公司",label:"蓝国科技有限公司"},{value:"绿岛办公设备有限公司",label:"绿岛办公设备有限公司"},{value:"黄石自动化设备有限公司",label:"黄石自动化设备有限公司"},{value:"红盾信息安全有限公司",label:"红盾信息安全有限公司"},{value:"白鸽科研设备有限公司",label:"白鸽科研设备有限公司"}],formLabelWidth:"100px",dialogFormVisible:!1,data:[{bidderId:"BID-2024-001",bidderName:"蓝国建设集团",projectId:"PROJ-2024-001",projectName:"蓝国科技园区建设",bidPrice:5e6,score:88,ranking:2,isWinning:!1},{bidderId:"BID-2024-002",bidderName:"绿岛工程有限公司",projectId:"PROJ-2024-002",projectName:"绿岛办公大楼翻新",bidPrice:32e5,score:92,ranking:1,isWinning:!0},{bidderId:"BID-2024-003",bidderName:"黄石自动化技术公司",projectId:"PROJ-2024-003",projectName:"黄石自动化设备安装",bidPrice:15e5,score:75,ranking:3,isWinning:!1},{bidderId:"BID-2024-004",bidderName:"红盾信息安全公司",projectId:"PROJ-2024-004",projectName:"红盾网络安全升级",bidPrice:28e5,score:85,ranking:2,isWinning:!0},{bidderId:"BID-2024-005",bidderName:"白鸽科研设备公司",projectId:"PROJ-2024-005",projectName:"白鸽实验室设备采购",bidPrice:43e5,score:80,ranking:4,isWinning:!1}],searchForm:{bidderId:"",bidderName:"",projectId:"",projectName:"",bidPrice:null,score:null,ranking:null,isWinning:!1},rules:{value1:[{required:!0,message:"请输入协议编号",trigger:"blur"}],value2:[{required:!0,message:"请输入协议标题",trigger:"blur"}],value3:[{required:!0,message:"请输入代理公司名称",trigger:"blur"}],value4:[{required:!0,message:"请选择签订日期",trigger:"change"}],value5:[{required:!0,message:"请选择协议有效期",trigger:"change"}],value6:[{required:!0,message:"请选择协议状态",trigger:"change"}]},form:{name:"",region:"",date1:"",date2:"",delivery:!1,resource:"",desc:"",domains:[{value:""}]},gridOptions:(e={size:"mini",border:!0,showHeaderOverflow:!0,showOverflow:!1,keepSource:!0,id:"full_edit_1",height:"auto",align:"center",keyField:"id",rowConfig:{keyField:"id",isHover:!0},sortConfig:{remote:!0},editConfig:{trigger:"click",mode:"cell"}},Object(a["a"])(e,"sortConfig",{multiple:!0}),Object(a["a"])(e,"columnConfig",{resizable:!0}),Object(a["a"])(e,"pagerConfig",{pageSize:10,pageSizes:[5,10,15,20,50,100]}),Object(a["a"])(e,"proxyConfig",{seq:!0,sort:!0,filter:!0,form:!0,props:{result:"records",total:"total"},ajax:{query:function(e){e.page;var t=e.sorts,o=e.filters,n=(e.form,Object.assign({},r.searchForm));return t&&(n.ascs=t.filter((function(e){return"asc"===e.order})).map((function(e){return e.field})).join(),n.descs=t.filter((function(e){return"desc"===e.order})).map((function(e){return e.field})).join()),o.forEach((function(e){var r=e.property,i=e.values;n[r]=i.join(",")})),new Promise((function(e){setTimeout((function(){e({total:i.data.length,records:i.data})}),1e3)}))}}}),Object(a["a"])(e,"columns",[{type:"checkbox",width:50,fixed:"left"},{field:"bidderName",title:"投标单位名称",minWidth:180,sortable:!0},{field:"projectId",title:"项目编号",minWidth:120},{field:"projectName",title:"项目名称",minWidth:200,sortable:!0},{field:"bidPrice",title:"报价",minWidth:100,slots:{default:"bidPrice"},sortable:!0},{field:"score",title:"评分",minWidth:80,sortable:!0},{field:"ranking",title:"排名",minWidth:80,sortable:!0},{field:"isWinning",title:"是否中标",minWidth:100,slots:{default:"isWinning"}},{title:"操作",width:170,fixed:"right",slots:{default:"operate"}}]),Object(a["a"])(e,"checkboxConfig",{reserve:!0,highlight:!0,range:!0}),e)}},methods:{moneyFormat:function(e){return String(e).replace(/(\d)(?=(?:\d{3})+$)/g,"$1,")},doSearch:function(){this.$refs.xGrid.commitProxy("reload")},openForm:function(e){this.dialogFormVisible=!0,e?(this.formTitle="编辑投标项目信息",this.form=Object(n["a"])({},e)):(this.formTitle="新增投标项目信息",this.form={bidderId:"",bidderName:"",projectId:"",projectName:"",bidPrice:null,score:null,ranking:null,isWinning:!1})},submitForm:function(){var e=this;this.$refs.formRef.validate((function(r){if(!r)return console.log("表单验证失败"),!1;console.log("表单提交",e.form),e.dialogFormVisible=!1}))},delHandler:function(){var e=this;this.$confirm("此操作将删除该信息, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.$message({type:"success",message:"删除成功!"})}))}}},c=s,d=(i("02be"),i("2877")),m=Object(d["a"])(c,t,o,!1,null,"7e7fd1b3",null);r["default"]=m.exports}}]);