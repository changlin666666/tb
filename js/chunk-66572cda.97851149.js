(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66572cda"],{"2b92":function(e,t,n){"use strict";n("81f1")},"438f":function(e,t,n){},4651:function(e,t,n){e.exports={menu:"Contextmenu_menu_3EjfP",menu_item:"Contextmenu_menu_item_1DJnI",menu_item__clickable:"Contextmenu_menu_item__clickable_2JiMY",menu_item__unclickable:"Contextmenu_menu_item__unclickable_2JisN"}},5057:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container source-share"},[n("div",{staticClass:"aside-box"},[n("div",{staticClass:"header"},[n("span",[e._v(" 接口目录 ")]),n("span",{staticClass:"icons"},[n("el-button-group",[n("el-tooltip",{attrs:{content:"添加目录",placement:"top"}},[n("el-button",{staticClass:"addIcon",attrs:{icon:"el-icon-plus",size:"mini",type:"text"},on:{click:e.addGroup}})],1)],1)],1)]),n("div",{staticClass:"treeselect-box"},[n("div",{staticClass:"tree-box"},[n("kr-tree",{ref:"tree",attrs:{data:e.treeData,props:e.defaultProps,"node-key":"id","default-expand-all":"","highlight-current":"","current-node-key":"all","expand-on-click-node":!1},on:{"node-click":e.changeGroup},scopedSlots:e._u([{key:"extra",fn:function(t){return["all"!=t.data.id?n("div",{staticClass:"icon_box"},[n("el-tooltip",{attrs:{content:"添加目录",placement:"top"}},[n("el-button",{staticClass:"addIcon",attrs:{icon:"el-icon-plus",size:"mini",type:"text"},on:{click:function(n){return e.addChild(t)}}})],1),n("el-tooltip",{attrs:{content:"编辑分组",placement:"top"}},[n("el-button",{attrs:{type:"text",size:"mini",icon:"el-icon-edit"},on:{click:function(n){return n.stopPropagation(),e.editGroup(t)}}})],1),n("el-tooltip",{attrs:{content:"删除分组",placement:"top"}},[n("el-button",{staticStyle:{color:"red"},attrs:{type:"text",size:"mini",icon:"el-icon-delete"},on:{click:function(n){return n.stopPropagation(),e.delGroup(t)}}})],1)],1):e._e()]}}])})],1)])]),n("div",{staticClass:"table-content"},[n("el-form",{staticClass:"filter-form",attrs:{inline:!0,model:e.searchForm}},[n("el-form-item",[n("el-input",{attrs:{placeholder:"接口名称",clearable:""},model:{value:e.searchForm.name,callback:function(t){e.$set(e.searchForm,"name",t)},expression:"searchForm.name"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.doSearch}},[e._v("查询")]),n("el-button",{attrs:{icon:"el-icon-refresh-right"},on:{click:e.resetParams}},[e._v("重置")])],1)],1),n("div",{staticClass:"tableview"},[n("kr-table",{ref:"table",attrs:{columns:e.columns,tableOptions:{"max-height":"100%"},fetchFunc:e.getList,searchParams:e.searchForm,selection:!1},on:{"selection-change":e.handleSelectionChange}},[n("div",{attrs:{slot:"handleButtons"},slot:"handleButtons"},[n("span",{staticClass:"office_title"},[e._v(e._s(e.currentGroup.name))]),n("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(t){return e.addApi()}}},[e._v("新增")])],1)])],1)],1),n("listForm",{ref:"listForm",attrs:{treeData:e.treeData},on:{update:e.getUpdate}}),n("catalogForm",{ref:"catalogForm",attrs:{treeData:e.treeData},on:{update:e.getUpdate}}),n("docForm",{ref:"docForm"})],1)},s=[],a=n("1da1"),r=n("5530"),o=(n("96cf"),n("159b"),n("b0c0"),n("70da")),c=n("0f52"),l=n("f477"),u=n("2f62"),d=n("2b0e"),m=n("8a57"),h=n("e5d9"),f=n("8175"),p=n("bef1");d["default"].use(h["a"]);var b={components:{listForm:m["default"],catalogForm:f["default"],docForm:p["default"]},data:function(e){this.$createElement;return{active:0,type:1,current:1,sortType:0,pageSize:10,loading:!1,list:[],dates:[],loadingOption:{text:"努力加载中",spinner:"",background:"#f9f9f9"},selection:[],searchProps:[],defaultProps:{children:"children",label:"name"},dictUtils:l["a"],treeData:[],total:0,searchForm:{name:"",catalogId:"",keyword:"",usable:"",resourceType:"",identity:""},currentGroup:"",columns:[{prop:"name",label:"接口名称"},{prop:"resourceType",label:"资源类型",width:100,render:function(e,t){return 0==t.resourceType?e("span",["模型资源"]):e("span",["外部接口资源"])}},{prop:"remarks",label:"描述",minWidth:150},{prop:"usable",width:80,label:"状态",render:function(t,n){return t("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949",value:1==n.usable,size:e.size},on:{change:function(){return e.changeUse(n)}}})}},{prop:"fff",label:"操作",fixed:"right",align:"right",render:function(t,n){return t("div",[t("el-button",{attrs:{icon:" kr-tianxie krIconfont",size:e.size,type:"text"},on:{click:function(){return e.view(n)}}},["查看文档"]),t("el-button",{attrs:{icon:" kr-tianxie krIconfont",size:e.size,type:"text"},on:{click:function(){return e.edit(n)}}},["编辑"]),t("el-button",{attrs:{icon:" kr-shanchu krIconfont",size:e.size,type:"text"},on:{click:function(){return e.del(n)}},style:"color:red"},["删除"])])}}]}},computed:Object(r["a"])(Object(r["a"])({searchParams:function(){var e={};return this.searchProps.forEach((function(t){e[t.field]=t.value})),e}},Object(u["c"])({size:function(e){return e.config.defaultSize}})),{},{getList:function(){return c["a"].list}}),mounted:function(){this.init()},methods:{init:function(){this.initTree()},edit:function(e){this.$refs.listForm.init("edit",e.id,e)},changeUse:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){var i,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.usable=0==e.usable?"1":"0",delete e.children,n.next=4,c["a"].use({id:e.id,usable:e.usable});case 4:if(i=n.sent,s=i.data,0==s.code){n.next=8;break}return n.abrupt("return",t.$message.error(s.msg));case 8:t.doSearch(),t.$message.success(s.msg);case 10:case"end":return n.stop()}}),n)})))()},initTree:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o["a"].tree();case 2:n=t.sent,i=n.data,i.data.unshift({name:"全部",id:"all"}),e.treeData=i.data,e.currentGroup=e.treeData[0];case 7:case"end":return t.stop()}}),t)})))()},getUpdate:function(){this.init(),this.doSearch()},addApi:function(){this.$refs.listForm.init("add")},changeGroup:function(e){this.currentGroup=e,"all"==e.id?this.searchForm.catalogId="":this.searchForm.catalogId=e.id,this.doSearch()},onContextmenu:function(e,t){var n=this,i=[{id:1,label:"查看资源",onClick:function(){n.detail(t)}},{id:2,label:"编辑资源",onClick:function(){n.edit(t)}},{id:3,label:"删除资源",onClick:function(){n.del(t)}}];this.$contextmenu({items:i,event:e,minWidth:120})},detail:function(e){this.$router.push("/pages/data-share/detail?id="+e.id+"&name="+e.name)},search:function(){this.$refs.table.insidePage=1,this.$refs.table.init()},handleSelectionChange:function(e){this.selection=e},view:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.$refs.docForm.init("view",e.id,e);case 1:case"end":return n.stop()}}),n)})))()},del:function(e){var t=this;this.$confirm("此操作将永久删除所选, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(a["a"])(regeneratorRuntime.mark((function n(){var i,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,c["a"].del({id:e.id});case 2:if(i=n.sent,s=i.data,0==s.code){n.next=6;break}return n.abrupt("return",t.$message.error(s.msg));case 6:t.$message({type:"success",message:"删除成功!"}),t.$refs.table.init();case 8:case"end":return n.stop()}}),n)})))).catch((function(){t.$message({type:"info",message:"已取消删除"})})),this.$refs.table.init()},addGroup:function(){this.$refs.catalogForm.init("add")},addChild:function(e){this.$refs.catalogForm.init("addChild",e.data.id,e.data)},editGroup:function(e){this.$refs.catalogForm.init("edit",e.data.id,e.data)},delGroup:function(e){var t=this;this.$confirm("此操作将永久删除所选, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(a["a"])(regeneratorRuntime.mark((function n(){var i,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,o["a"].del({id:e.data.id});case 2:if(i=n.sent,s=i.data,0==s.code){n.next=6;break}return n.abrupt("return",t.$message.error(s.msg));case 6:t.$message({type:"success",message:"删除成功!"}),t.init();case 8:case"end":return n.stop()}}),n)})))).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},doSearch:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$refs.table.insidePage=1,e.$refs.table.init();case 2:case"end":return t.stop()}}),t)})))()},resetParams:function(){this.searchForm.name="",this.doSearch()}}},v=b,g=(n("fccf"),n("91d4"),n("2877")),y=Object(g["a"])(v,i,s,!1,null,"8a082e28",null);t["default"]=y.exports},"528e":function(e,t,n){"use strict";n("f789")},"69c6":function(e,t,n){},"6e3c":function(e,t,n){"use strict";n("438f")},"70da":function(e,t,n){"use strict";var i=n("7bc1");t["a"]={tree:function(e){return i["a"].get("/data-share/api-catalog/getTree",e)},use:function(e){return i["a"].get("/data-share/api-catalog/updateUsableById",e)},add:function(e){return i["a"].post("/data-share/api-catalog/add",e)},save:function(e){return i["a"].post("/data-share/api-catalog/edit",e)},del:function(e){return i["a"].get("/data-share/api-catalog/deleteById",e)}}},8175:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{attrs:{visible:e.visible,title:e.title,width:e.width},on:{"update:visible":function(t){e.visible=t},close:function(t){e.visible=!1}}},[n("el-form",{ref:"form",attrs:{"label-width":"120px",model:e.form,size:"medium",rules:e.rules,disabled:"view"===e.method},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submit.apply(null,arguments)}}},[n("el-row",[n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"上级目录",prop:"parentNodeIds"}},[n("kr-tree-select",{staticStyle:{width:"100%"},attrs:{clearable:"",props:e.treeProps,nodeKey:"nodeIds",data:e.treeData},on:{getValue:e.getValue},model:{value:e.nodeIds,callback:function(t){e.nodeIds=t},expression:"nodeIds"}})],1)],1),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"目录名称",prop:"name"}},[n("el-input",{attrs:{placeholder:"请输入名称"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"是否启用",prop:"usable"}},[n("el-radio-group",{model:{value:e.form.usable,callback:function(t){e.$set(e.form,"usable",t)},expression:"form.usable"}},[n("el-radio-button",{attrs:{label:"1"}},[e._v("是")]),n("el-radio-button",{attrs:{label:"0"}},[e._v("否")])],1)],1)],1),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"排序",prop:"sort"}},[n("el-input-number",{attrs:{min:1,label:"排序"},model:{value:e.form.sort,callback:function(t){e.$set(e.form,"sort",t)},expression:"form.sort"}})],1)],1),n("el-col",{attrs:{span:24}},[n("el-form-item",{attrs:{label:"备注",prop:"remarks"}},[n("el-input",{attrs:{type:"textarea",placeholder:"请输入备注"},model:{value:e.form.remarks,callback:function(t){e.$set(e.form,"remarks",t)},expression:"form.remarks"}})],1)],1)],1)],1),n("span",{attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("确 定")])],1)],1)},s=[],a=n("1da1"),r=(n("96cf"),n("70da")),o=n("eb2e"),c={components:{},props:{width:{type:String,default:"50%"},treeData:{type:Array,default:function(){return[]}},treeProps:{type:Object,default:function(){return{children:"children",label:"name",disabled:"disabled"}}}},watch:{},data:function(){return{visible:!1,defaultProps:{children:"children",label:"name"},defaultProps2:{children:"children",label:"name",disabled:function(e,t){return!e.clickable}},defaultKeys:[],orgTree:[],userTree:[],nodeIds:"",parentId:"",companyId:1,showTree:!1,people:[],method:"",form:new o["a"],rules:{type:[{required:!0,message:"类型不能为空",trigger:"blur"}],name:[{required:!0,message:"名称不能为空",trigger:"blur"}]},id:"",title:"",disabled:!1,userArr:[]}},mounted:function(){},computed:{},methods:{init:function(e,t,n){var i=this;this.method=e,this.form=new o["a"],"add"===e?(this.nodeIds="",this.form.parentNodeIds="",this.title="新建"):"view"===e?this.title="查看":"addChild"===e?(this.title="添加子目录",this.form=new o["a"],this.disabled=!0,this.form.flag=1,this.nodeIds=n.nodeIds,this.form.parentNodeIds=n.nodeIds):this.title="编辑",this.id=t,this.visible=!0,this.$nextTick(Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:"edit"!==e&&"view"!==e||(i.form=n,i.nodeIds=n.parentNodeIds);case 1:case"end":return t.stop()}}),t)}))))},getValue:function(e){this.form.parentNodeIds=e?e.nodeIds:""},submit:function(){var e=this;try{this.$refs.form.validate(function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(n){var i,s,a,o,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n){t.next=26;break}if(i=e.form,i.parentNodeIds=i.parentNodeIds?i.parentNodeIds:"000","add"!=e.method&&"addChild"!=e.method){t.next=13;break}return t.next=6,r["a"].add(i);case 6:if(s=t.sent,a=s.data,0==a.code){t.next=10;break}return t.abrupt("return",e.$message.error(a.msg));case 10:e.$message.success(a.msg),t.next=21;break;case 13:if("edit"!=e.method){t.next=21;break}return t.next=16,r["a"].save(i);case 16:if(o=t.sent,c=o.data,0==c.code){t.next=20;break}return t.abrupt("return",e.$message.error(c.msg));case 20:e.$message.success(c.msg);case 21:e.$emit("update"),e.$parent.init(),e.visible=!1,t.next=27;break;case 26:return t.abrupt("return",!1);case 27:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}catch(t){this.$message.error(t)}}}},l=c,u=(n("2b92"),n("2877")),d=Object(u["a"])(l,i,s,!1,null,"26fdcbbe",null);t["default"]=d.exports},"81f1":function(e,t,n){},"8c9c":function(e,t,n){"use strict";var i=n("4651"),s=n.n(i);n.d(t,"default",(function(){return s.a}))},"91d4":function(e,t,n){"use strict";n("b848")},b848:function(e,t,n){},e5d9:function(e,t,n){"use strict";var i=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div")},a=[];n("7db0");function r(e){let t=[];for(let n of document.getElementsByClassName(e)||[])t.push(n);return t}const o=3,c=-8,l="left",u="right",d="contextmenu-submenu";var m={data:function(){return{items:[],position:{x:0,y:0},style:{zIndex:2,minWidth:150},mainMenuInstance:null,customClass:null,mouseListening:!1}},mounted:function(){var e=i["default"].component(d);this.mainMenuInstance=new e,this.mainMenuInstance.items=this.items,this.mainMenuInstance.commonClass={menu:this.$style.menu,menuItem:this.$style.menu_item,clickableMenuItem:this.$style.menu_item__clickable,unclickableMenuItem:this.$style.menu_item__unclickable},this.mainMenuInstance.position={x:this.position.x,y:this.position.y,width:0,height:0},this.mainMenuInstance.style.minWidth=this.style.minWidth,this.mainMenuInstance.style.zIndex=this.style.zIndex,this.mainMenuInstance.customClass=this.customClass,this.mainMenuInstance.$mount(),document.body.appendChild(this.mainMenuInstance.$el),this.addListener()},destroyed:function(){this.removeListener(),this.mainMenuInstance&&this.mainMenuInstance.close()},methods:{mousewheelListener:function(){this.$destroy()},mouseDownListener:function(e){var t=e.target,n=r(this.$style.menu);while(!n.find((function(e){return e===t}))&&t.parentElement)t=t.parentElement;n.find((function(e){return e===t}))||this.$destroy()},mouseClickListener:function(e){var t=e.target,n=r(this.$style.menu),i=r(this.$style.menu_item),s=r(this.$style.menu_item__unclickable);while(!n.find((function(e){return e===t}))&&!i.find((function(e){return e===t}))&&t.parentElement)t=t.parentElement;if(i.find((function(e){return e===t}))){if(0!==e.button||s.find((function(e){return e===t})))return;this.$destroy()}else n.find((function(e){return e===t}))||this.$destroy()},addListener:function(){this.mouseListening||(document.addEventListener("click",this.mouseClickListener),document.addEventListener("mousedown",this.mouseDownListener),document.addEventListener("mousewheel",this.mousewheelListener),this.mouseListening=!0)},removeListener:function(){this.mouseListening&&(document.removeEventListener("click",this.mouseClickListener),document.removeEventListener("mousedown",this.mouseDownListener),document.removeEventListener("mousewheel",this.mousewheelListener),this.mouseListening=!1)}}},h=m,f=n("8c9c"),p=n("2877");function b(e){this["$style"]=f["default"].locals||f["default"]}var v=Object(p["a"])(h,s,a,!1,b,null,null),g=v.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"contextmenu-submenu-fade"}},[e.visible?n("div",{ref:"menu",class:[e.commonClass.menu,"menu",e.customClass],style:{left:e.style.left+"px",top:e.style.top+"px",minWidth:e.style.minWidth+"px",zIndex:e.style.zIndex},on:{contextmenu:function(e){return e.preventDefault()}}},[n("div",{staticClass:"menu_body"},[e._l(e.items,(function(t,i){return[t.hidden?e._e():[t.disabled?n("div",{key:i,class:[e.commonClass.menuItem,e.commonClass.unclickableMenuItem,"menu_item","menu_item__disabled",t.divided?"menu_item__divided":null]},[e.hasIcon?n("div",{staticClass:"menu_item_icon"},[t.icon?n("i",{class:t.icon}):e._e()]):e._e(),n("span",{staticClass:"menu_item_label"},[e._v(e._s(t.label))]),n("div",{staticClass:"menu_item_expand_icon"})]):t.children?n("div",{key:i,class:[e.commonClass.menuItem,e.commonClass.unclickableMenuItem,"menu_item","menu_item__available",e.activeSubmenu.index===i?"menu_item_expand":null,t.divided?"menu_item__divided":null],on:{mouseenter:function(n){return e.enterItem(n,t,i)}}},[e.hasIcon?n("div",{staticClass:"menu_item_icon"},[t.icon?n("i",{class:t.icon}):e._e()]):e._e(),n("span",{staticClass:"menu_item_label"},[e._v(e._s(t.label))]),n("div",{staticClass:"menu_item_expand_icon"},[e._v("▶")])]):n("div",{key:i,class:[e.commonClass.menuItem,e.commonClass.clickableMenuItem,"menu_item","menu_item__available",t.divided?"menu_item__divided":null],on:{mouseenter:function(n){return e.enterItem(n,t,i)},click:function(n){return e.itemClick(t)}}},[e.hasIcon?n("div",{staticClass:"menu_item_icon"},[t.icon?n("i",{class:t.icon}):e._e()]):e._e(),n("span",{staticClass:"menu_item_label"},[e._v(e._s(t.label))]),n("div",{staticClass:"menu_item_expand_icon"})])]]}))],2)]):e._e()])},_=[],x=n("b85c"),k={name:d,data:function(){return{commonClass:{menu:null,menuItem:null,clickableMenuItem:null,unclickableMenuItem:null},activeSubmenu:{index:null,instance:null},items:[],position:{x:0,y:0,width:0,height:0},style:{left:0,top:0,zIndex:2,minWidth:150},customClass:null,visible:!1,hasIcon:!1,openTrend:u}},mounted:function(){var e=this;this.visible=!0;var t,n=Object(x["a"])(this.items);try{for(n.s();!(t=n.n()).done;){var i=t.value;if(i.icon){this.hasIcon=!0;break}}}catch(s){n.e(s)}finally{n.f()}this.$nextTick((function(){var t=document.documentElement.clientWidth,n=document.documentElement.clientHeight,i=e.$refs.menu,s=i.offsetWidth,a=i.offsetHeight;(e.openTrend===l?e.leftOpen:e.rightOpen)(t,n,s),e.style.top=e.position.y,e.position.y+a>n&&(0===e.position.height?e.style.top=e.position.y-a:e.style.top=n-a)}))},methods:{leftOpen:function(e,t,n){this.style.left=this.position.x-n,this.openTrend=l,this.style.left<0&&(this.openTrend=u,0===this.position.width?this.style.left=0:this.style.left=this.position.x+this.position.width)},rightOpen:function(e,t,n){this.style.left=this.position.x+this.position.width,this.openTrend=u,this.style.left+n>e&&(this.openTrend=l,0===this.position.width?this.style.left=e-n:this.style.left=this.position.x-n)},enterItem:function(e,t,n){if(this.visible){if(this.activeSubmenu.instance){if(this.activeSubmenu.index===n)return;this.activeSubmenu.instance.close(),this.activeSubmenu.instance=null,this.activeSubmenu.index=null}if(t.children){var s=e.target.getBoundingClientRect(),a=i["default"].component(d);this.activeSubmenu.index=n,this.activeSubmenu.instance=new a,this.activeSubmenu.instance.items=t.children,this.activeSubmenu.instance.openTrend=this.openTrend,this.activeSubmenu.instance.commonClass=this.commonClass,this.activeSubmenu.instance.position={x:s.x+o,y:s.y+c,width:s.width-2*o,height:s.width},this.activeSubmenu.instance.style.minWidth="number"===typeof t.minWidth?t.minWidth:this.style.minWidth,this.activeSubmenu.instance.style.zIndex=this.style.zIndex,this.activeSubmenu.instance.customClass="string"===typeof t.customClass?t.customClass:this.customClass,this.activeSubmenu.instance.$mount(),document.body.appendChild(this.activeSubmenu.instance.$el)}}},itemClick:function(e){if(this.visible)return!e||e.disabled||e.hidden||"function"!==typeof e.onClick?void 0:e.onClick()},close:function(){var e=this;this.visible=!1,this.activeSubmenu.instance&&this.activeSubmenu.instance.close(),this.$nextTick((function(){e.$destroy()}))}}},w=k,I=(n("528e"),n("6e3c"),Object(p["a"])(w,y,_,!1,null,"4512572f",null)),C=I.exports;const $=i["default"].extend(g);function O(e){let t=null;const n=function(e){let i=new $;i.items=e.items,i.position.x=e.x||0,i.position.y=e.y||0,e.event&&(i.position.x=e.event.clientX,i.position.y=e.event.clientY),i.customClass=e.customClass,e.minWidth&&(i.style.minWidth=e.minWidth),e.zIndex&&(i.style.zIndex=e.zIndex),n.destroy(),t=i,i.$mount()};n.destroy=function(){t&&(t.$destroy(),t=null)},e.prototype.$contextmenu=n}i["default"].component(d,C),window&&window.Vue&&O(window.Vue);var S={install:O};t["a"]=S},eb2e:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n("d4ec"),s=n("ade3"),a=function e(){Object(i["a"])(this,e),Object(s["a"])(this,"name",""),Object(s["a"])(this,"code",""),Object(s["a"])(this,"nodeId",""),Object(s["a"])(this,"nodeIds",""),Object(s["a"])(this,"parentNodeIds",""),Object(s["a"])(this,"sort",0),Object(s["a"])(this,"usable",1),Object(s["a"])(this,"remarks","")}},f789:function(e,t,n){},fccf:function(e,t,n){"use strict";n("69c6")}}]);