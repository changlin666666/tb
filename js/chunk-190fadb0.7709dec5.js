(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-190fadb0"],{"274d":function(e,t,n){},"4a9d":function(e,t,n){"use strict";n.d(t,"b",(function(){return a}));var r=n("7bc1"),a=function(e){return r["a"].get("/sys/company/getCompanyTree",e)};t["a"]={tree:function(e){return r["a"].get("/sys/company/getCompanyTree",e)},queryById:function(e){return r["a"].get("/sys/company/queryById",e)},save:function(e){return r["a"].post("/sys/company/saveCompany",e)},del:function(e){return r["a"].get("/sys/company/delete",e)},loginTree:function(e){return r["a"].get("/sys/company/getUseableCompanyTree",e)},use:function(e){return r["a"].get("/sys/company/enableCompany",e)}}},e451:function(e,t,n){"use strict";n("274d")},effe:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{attrs:{visible:e.visible,title:e.title,width:e.width,"destroy-on-close":""},on:{"update:visible":function(t){e.visible=t},close:function(t){e.visible=!1}}},[e.visible?n("myForm",{ref:"formDesigner",attrs:{companyList:e.companyList}}):e._e(),n("span",{attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取 消")]),n("el-button",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"},{name:"noMoreClick",rawName:"v-noMoreClick"}],attrs:{type:"primary"},on:{click:e.submit}},[e._v("确 定")])],1)],1)},a=[],i=n("1da1"),s=(n("96cf"),n("d015")),o=n("4152"),c=n("4a9d"),u={components:{myForm:s["a"]},props:{width:{type:String,default:"100%"},treeData:{type:Array,default:function(){return[]}}},data:function(){return{visible:!1,method:"",id:"",title:"表单设计",loading:!1,btnSaveIsLoading:!1,json:{config:{columnList:[],labelPosition:"right",labelWidth:140},rules:[],list:[]},companyList:[]}},methods:{init:function(e){var t=this;this.id=e,this.loading=!1,this.visible=!0,this.json={config:{columnList:[],labelPosition:"right",labelWidth:140},list:[]},this.$nextTick(Object(i["a"])(regeneratorRuntime.mark((function n(){var r,a,i,s,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,c["a"].tree();case 2:return r=n.sent,a=r.data,t.companyList=[a.data],n.next=7,o["a"].getStruct({id:e});case 7:i=n.sent,s=i.data,0==s.code&&s.data.structContent&&"null"!==s.data.structContent?(u=JSON.parse(s.data.structContent),console.log(u),t.$refs.formDesigner.setJSON(u)):t.$refs.formDesigner.setJSON(t.json);case 10:case"end":return n.stop()}}),n)}))))},submit:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.loading=!0,n=e.$refs.formDesigner.getData(),t.next=5,o["a"].saveStruct({id:e.id,structContent:JSON.stringify(n)});case 5:if(r=t.sent,a=r.data,0==a.code){t.next=9;break}return t.abrupt("return",e.$message.error("表单设计操作失败！"));case 9:e.$message.success("表单设计操作成功！"),e.loading=!1,e.visible=!1,t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](0),e.$message.error(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})))()}}},l=u,d=(n("e451"),n("2877")),f=Object(d["a"])(l,r,a,!1,null,"649190b0",null);t["default"]=f.exports}}]);