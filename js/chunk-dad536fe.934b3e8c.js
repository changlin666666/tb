(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dad536fe"],{"038f":function(e,t,n){"use strict";var r=n("5530"),a=n("7bc1");t["a"]={save:function(e){return a["a"].post("/cms/backend/article/save",Object(r["a"])({contributeFlag:1},e))},list:function(e){return a["a"].post("/cms/backend/article/page",e)},del:function(e){return a["a"].get("/cms/backend/article/delete",e)},detail:function(e){return a["a"].get("/cms/backend/article/getById",e)},copyToOtherMenu:function(e){return a["a"].get("/cms/backend/article/copyToOtherMenu",e)},publish:function(e){return a["a"].post("/cms/backend/article/updateArticleStatus",e)},getOaDeptTree:function(e){return a["a"].get("/sys/oadept/getOaDeptTree",e)},getMenuList:function(e){return a["a"].get("/cms/backend/menu/getMenuList",e)},getMenuTreeForAudit:function(e){return a["a"].get("/cms/backend/menu/getMenuTreeForAudit",e)},getCommentPage:function(e){return a["a"].post("/cms/backend/comment/page",e)},deleteComment:function(e){return a["a"].get("/cms/backend/comment/delete",e)},getArticleTileListByMenuNodeIdsAndKeyword:function(e){return a["a"].get("/cms/backend/article/getArticleTileListByMenuNodeIdsAndKeyword",e)},getTheoryEducationMenuTree:function(e){return a["a"].get("/cms/backend/menu/getTheoryEducationMenuTree",e)},getUsableTheoryEducationMenuTree:function(e){return a["a"].get("/cms/backend/menu/getUsableTheoryEducationMenuTree",e)},queryMenuById:function(e){return a["a"].get("/cms/backend/menu/getById",e)},saveMenu:function(e){return a["a"].post("/cms/backend/menu/save",e)},delMenu:function(e){return a["a"].get("/cms/backend/menu/delete",e)},getSpecialSubjectMenuTree:function(e){return a["a"].get("/cms/backend/menu/getSpecialSubjectMenuTree",e)},getRightSubjectMenuTree:function(e){return a["a"].get("/cms/backend/menu/getPopUpMenuTree",e)},getSpecialSubjectMenuTreeUsable:function(e){return a["a"].get("/cms/backend/menu/getUsablePopUpMenuTree",e)},getUsableSpecialSubjectMenuTree:function(e){return a["a"].get("/cms/backend/menu/getUsableSpecialSubjectMenuTree",e)},getForumArticleList:function(e){return a["a"].post("/forum/backend/article/page",e)},deleteForumArticleById:function(e){return a["a"].get("/forum/backend/article/delete",e)},saveForumArticle:function(e){return a["a"].post("/forum/backend/article/save",e)},queryForumArticleById:function(e){return a["a"].get("/forum/backend/article/getById",e)},getForumModulePage:function(e){return a["a"].post("/forum/backend/module/page",e)},updateEssenceById:function(e){return a["a"].get("/forum/backend/article/updateEssenceById",e)},updateToppingById:function(e){return a["a"].get("/forum/backend/article/updateToppingById",e)},getForumCommentList:function(e){return a["a"].post("/forum/backend/comment/page",e)},deleteForumCommentById:function(e){return a["a"].get("/forum/backend/comment/delete",e)},getArticleTileListByKeyword:function(e){return a["a"].get("/forum/backend/article/getArticleTileListByKeyword",e)},getCmsHistoryPage:function(e){return a["a"].post("/cms/backend/history/page",e)},getCmsScorePage:function(e){return a["a"].post("/cms/backend/score/page",e)},getOptoutscorePage:function(e){return a["a"].post("/cms/backend/optoutscore/page",e)},SaveOptoutscore:function(e){return a["a"].post("/cms/backend/optoutscore/save",e)},getAllOaDeptTree:function(e){return a["a"].get("/sys/oadept/getAllOaDeptTree",e)},getBannerList:function(e){return a["a"].post("/cms/backend/banner/page",e)},getBannerDetail:function(e){return a["a"].get("/cms/backend/banner/getById",e)},saveBanner:function(e){return a["a"].post("/cms/backend/banner/save",e)},deleteBannerByid:function(e){return a["a"].get("/cms/backend/banner/delete",e)},getViewBannerByTime:function(e){return a["a"].get("/cms/backend/banner/getByTime",e)}}},"4ee7":function(e,t,n){},"985a":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"notification"},[n("div",{staticClass:"content-header"},[n("el-form",{ref:"elForm",staticClass:"filter-form",attrs:{inline:!0,model:e.searchForm}},[n("el-form-item",[n("el-input",{attrs:{placeholder:"姓名",clearable:""},model:{value:e.searchForm.userName,callback:function(t){e.$set(e.searchForm,"userName",t)},expression:"searchForm.userName"}})],1),n("el-form-item",[n("el-select",{attrs:{placeholder:"状态选择",clearable:""},model:{value:e.searchForm.optOutScoreUserFlag,callback:function(t){e.$set(e.searchForm,"optOutScoreUserFlag",t)},expression:"searchForm.optOutScoreUserFlag"}},[n("el-option",{attrs:{label:"全部",value:null}}),n("el-option",{attrs:{label:"不参与积分",value:0}}),n("el-option",{attrs:{label:"参与积分",value:1}})],1)],1),n("el-form-item",[n("kr-tree-select",{attrs:{data:e.allOaDeptTreeOptions,props:e.defaultProps,placeholder:"请选择部门",nodeKey:"organId"},on:{getValue:e.getValue},model:{value:e.searchForm.deptId,callback:function(t){e.$set(e.searchForm,"deptId",t)},expression:"searchForm.deptId"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.doSearch}},[e._v("查询")]),n("el-button",{attrs:{icon:"el-icon-refresh-right"},on:{click:e.resetParams}},[e._v("重置")])],1)],1)],1),n("div",{staticClass:"table"},[n("kr-table",{ref:"table",attrs:{columns:e.columns,fetchFunc:e.getList,searchParams:e.searchForm},on:{"selection-change":e.handleSelectionChange}})],1)])},a=[],c=n("1da1"),o=n("5530"),u=(n("96cf"),n("038f")),s=n("2f62"),i={name:"sys-notification",props:{},data:function(){this.$createElement;var e=this;return{allOaDeptTreeOptions:[],searchForm:{ascs:"",current:1,deptId:"",descs:"",optOutScoreUserFlag:null,size:20,userName:""},defaultProps:{children:"children",label:"name"},selectedRows:[],total:100,rows:[],columns:[{prop:"fullname",label:"用户名称",render:function(e,t){return e("div",{style:"color:var(--defaultTheme)"},[t.fullname])}},{prop:"deptName",label:"部门名称",width:300,align:"center",sortable:!0},{prop:"sex",label:"性别",width:200,align:"center",sortable:!0,render:function(e,t){return e("div",[0==t.sex&&e("el-tag",["男"]),1==t.sex&&e("el-tag",{attrs:{type:"warning"}},["女"])])}},{prop:"score",label:"是否参与积分",sortable:!0,width:200,align:"center",render:function(t,n){return t("div",[t("el-switch",{attrs:{value:n.score,"active-color":"#13ce66","inactive-color":"#ff4949","active-value":0,"inactive-value":1},on:{change:function(){return e.changSecore(n)}}}),t("span",{style:"color:#a6a7b8;margin-left:12px"},[0===n.score?"参与积分":"不参与积分"])])}}],showDetail:!1}},computed:Object(o["a"])(Object(o["a"])({},Object(s["c"])({size:function(e){return e.config.defaultSize}})),{},{getList:function(){return u["a"].getOptoutscorePage}}),watch:{},created:function(){this.getAllOaDeptTree()},mounted:function(){},methods:{getAllOaDeptTree:function(){var e=this;u["a"].getAllOaDeptTree().then((function(t){e.allOaDeptTreeOptions=t.data.data,e.allOaDeptTreeOptions.unshift({organId:"",name:"全部"})}))},changSecore:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){var r,a,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r={deptId:e.organId,flag:e.score,orgId:e.orgId,userId:e.userid,userName:e.fullname},n.next=3,u["a"].SaveOptoutscore(r);case 3:if(a=n.sent,c=a.data,0==c.code){n.next=7;break}return n.abrupt("return",t.$message.error(c.msg));case 7:t.$refs.table.init(),t.$message.success(c.msg);case 9:case"end":return n.stop()}}),n)})))()},resetParams:function(){this.searchForm.userName="",this.searchForm.optOutScoreUserFlag=null,this.searchForm.deptId="",this.doSearch()},doSearch:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$refs.table.init();case 1:case"end":return t.stop()}}),t)})))()},handleSelectionChange:function(e){this.selectedRows=e},getValue:function(e){this.searchForm.deptId=e?e.organId:""}}},l=i,d=(n("daa6"),n("2877")),m=Object(d["a"])(l,r,a,!1,null,"3023f0f3",null);t["default"]=m.exports},daa6:function(e,t,n){"use strict";n("4ee7")}}]);