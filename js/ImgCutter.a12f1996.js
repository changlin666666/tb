(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ImgCutter"],{"26e7":function(t,o,i){},"447d":function(t,o,i){"use strict";i.r(o);var e=function(){var t=this,o=t.$createElement,i=t._self._c||o;return i("div",[!0===t.showChooseBtn&&!0===t.isModal?i("div",{on:{click:t.handleOpen}},[t._t("openImgCutter"),t._t("open")],2):t._e(),t.$slots.openImgCutter||t.$slots.open||!0!==t.isModal?t._e():i("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.handleOpen}},[t._v(" "+t._s(t.label)+" ")]),i("transition",{attrs:{name:"fade"}},[t.visible?i("div",{ref:"mask",class:!0===t.isModal?"mask vue-img-cutter":""},[t.visible?i("div",{class:!0===t.isModal?"dialogBoxModal":"dialogBox"},[i("transition",{attrs:{name:"fade","enter-class":"fade-in-enter","enter-active-class":"fade-in-active","leave-class":"fade-out-enter","leave-active-class":"fade-out-active"}},[i("div",{ref:"dialogMainModalRef",class:!0===t.isModal?"dialogMainModal":"dialogMain",style:"width:"+(!0===t.isModal?t.boxWidth+32:t.boxWidth)+"px"},[i("div",{staticClass:"toolMain"},[!0===t.isModal?i("div",{staticClass:"tool-title"},[t._v(" 图片裁剪 "),i("span",{staticClass:"closeIcon",on:{click:t.handleClose}},[t._v("×")])]):t._e(),i("div",{ref:"toolBox",staticClass:"toolBox",style:"height:"+t.boxHeight+"px;width:"+t.boxWidth+"px",on:{mousemove:t.controlBtnMouseMove,mouseup:t.controlBtnMouseUp,mouseleave:t.controlBtnMouseUp}},[i("div",{directives:[{name:"show",rawName:"v-show",value:!t.drawImg.img&&!0===t.showChooseBtn,expression:"!drawImg.img && showChooseBtn === true"}],staticClass:"tips"},[i("div",{staticClass:"btn btn-warning btn-xs",on:{click:t.chooseImg}},[t._v(" "+t._s(t.label)+" ")])]),1==t.tool?i("div",{directives:[{name:"show",rawName:"v-show",value:t.drawImg.img&&!0!==t.dropImg.active&&1==t.controlBox.disable&&1==t.toolBox.disable,expression:"\n                    drawImg.img &&\n                    dropImg.active !== true &&\n                    controlBox.disable == true &&\n                    toolBox.disable == true\n                  "}],staticClass:"dockMain",style:"background:"+t.toolBgc,on:{mouseenter:t.dropImgOff}},[t.rate?i("div",{staticClass:"dockBtn"},[t._t("ratio",(function(){return[t._v(" Ratio: ")]})),t._v(" "+t._s(t.rate)+" ")],2):t._e(),i("div",{staticClass:"dockBtn",on:{click:t.scaleReset}},[t._t("scaleReset",(function(){return[t._v(" Scale: ")]})),t._v(" "+t._s(t.drawImg.swidth>0?(t.drawImg.width/t.drawImg.swidth).toFixed(2):"-")+" ")],2),!1===t.originalGraph?i("div",{staticClass:"dockBtn",on:{click:function(o){return t.turnImg(-90)}}},[t._t("turnLeft",(function(){return[t._v(" ↳ ")]}))],2):t._e(),!1===t.originalGraph?i("div",{staticClass:"dockBtn",on:{click:function(o){return t.turnImg(90)}}},[t._t("turnRight",(function(){return[t._v(" ↲ ")]}))],2):t._e(),!1===t.originalGraph?i("div",{staticClass:"dockBtn",on:{click:function(o){return t.turnReset()}}},[t._t("reset",(function(){return[t._v(" ↻ ")]}))],2):t._e(),!1===t.originalGraph?i("div",{staticClass:"dockBtnScrollBar"},[i("div",{ref:"dockBtnScrollControl",staticClass:"scrollBarControl",style:"left:"+t.rotateControl.position+"px",on:{mousemove:t.scrollBarControlMove,mousedown:t.scrollBarControlOn,mouseleave:t.scrollBarControlOff,mouseup:t.scrollBarControlOff}}),1==t.rotateControl.active?i("div",{staticClass:"scrollBarText",style:"left:"+t.rotateControl.position+"px"},[t._v(" "+t._s(t.rotateImg.angle.toFixed(0)+"°")+" ")]):t._e()]):t._e(),!1===t.originalGraph?i("div",{staticClass:"dockBtn",on:{click:t.flipHorizontal}},[t._t("flipHorizontal",(function(){return[t._v(" ⇆ ")]}))],2):t._e(),!1===t.originalGraph?i("div",{staticClass:"dockBtn",on:{click:t.flipVertically}},[t._t("turnRight",(function(){return[t._v(" ⇅ ")]}))],2):t._e()]):t._e(),i("div",{directives:[{name:"show",rawName:"v-show",value:null!=t.drawImg.img,expression:"drawImg.img != null"}],ref:"toolBoxControl",staticClass:"toolBoxControl",on:{mousedown:t.toolBoxMouseDown,mouseup:t.toolBoxMouseUp,mousemove:t.toolBoxMouseMove,mouseleave:t.toolBoxMouseLeave}},[i("div",{staticClass:"toolBoxControlBox"},[i("div",{staticClass:"controlBox"},[i("div",{staticClass:"controlBoxInnerLine controlBoxInnerLineTop"}),i("div",{staticClass:"controlBoxInnerLine controlBoxInnerLineBottom"}),i("div",{staticClass:"controlBoxInnerLine controlBoxInnerLineLeft"}),i("div",{staticClass:"controlBoxInnerLine controlBoxInnerLineRight"}),!1===t.originalGraph?i("div",{staticClass:"selectArea"},[t._v(" 宽:"+t._s(t.toolBox.width)+" 高:"+t._s(t.toolBox.height)+" (x:"+t._s(t.toolBoxPosition.x)+",y:"+t._s(t.toolBoxPosition.y)+") ")]):t._e(),!0===t.originalGraph?i("div",{staticClass:"selectArea"},[t._v(" 宽:"+t._s((t.toolBox.width/(t.drawImg.width/t.drawImg.swidth)).toFixed(0))+" 高:"+t._s((t.toolBox.height/(t.drawImg.width/t.drawImg.swidth)).toFixed(0))+" (x:"+t._s(t.toolBoxPosition.x)+",y:"+t._s(t.toolBoxPosition.y)+") ")]):t._e(),!0===t.sizeChange?i("div",{staticClass:"leftUp controlBtn",attrs:{"data-name":"leftUp"},on:{mousedown:function(o){return t.controlBtnMouseDown(o,"leftUp")}}}):t._e(),!0===t.sizeChange?i("div",{staticClass:"leftDown controlBtn",attrs:{"data-name":"leftDown"},on:{mousedown:function(o){return t.controlBtnMouseDown(o,"leftDown")}}}):t._e(),!0===t.sizeChange?i("div",{staticClass:"rightUp controlBtn",attrs:{"data-name":"rightUp"},on:{mousedown:function(o){return t.controlBtnMouseDown(o,"rightUp")}}}):t._e(),!0===t.sizeChange?i("div",{staticClass:"rightDown controlBtn",attrs:{"data-name":"rightDown"},on:{mousedown:function(o){return t.controlBtnMouseDown(o,"rightDown")}}}):t._e(),!0===t.sizeChange&&!t.rate&&t.toolBox.width>20?i("div",{staticClass:"topCenter controlBtn",attrs:{"data-name":"topCenter"},on:{mousedown:function(o){return t.controlBtnMouseDown(o,"topCenter")}}}):t._e(),!0===t.sizeChange&&!t.rate&&t.toolBox.width>20?i("div",{staticClass:"downCenter controlBtn",attrs:{"data-name":"downCenter"},on:{mousedown:function(o){return t.controlBtnMouseDown(o,"downCenter")}}}):t._e(),!0===t.sizeChange&&!t.rate&&t.toolBox.height>20?i("div",{staticClass:"leftCenter controlBtn",attrs:{"data-name":"leftCenter"},on:{mousedown:function(o){return t.controlBtnMouseDown(o,"leftCenter")}}}):t._e(),!0===t.sizeChange&&!t.rate&&t.toolBox.height>20?i("div",{staticClass:"rightCenter controlBtn",attrs:{"data-name":"rightCenter"},on:{mousedown:function(o){return t.controlBtnMouseDown(o,"rightCenter")}}}):t._e()]),i("div",{staticClass:"toolBoxControlLine toolBoxControlLineItem-1"}),i("div",{staticClass:"toolBoxControlLine toolBoxControlLineItem-2"}),i("div",{staticClass:"toolBoxControlLine toolBoxControlLineItem-3"}),i("div",{staticClass:"toolBoxControlLine toolBoxControlLineItem-4"})])]),i("canvas",{ref:"canvasSelectBox",staticClass:"canvasSelectBox",attrs:{width:t.boxWidth,height:t.boxHeight},on:{mousedown:t.dropImgOn,mouseup:t.dropImgOff,mousemove:t.dropImgMove}}),i("canvas",{ref:"canvas",staticClass:"canvas",attrs:{width:t.boxWidth,height:t.boxHeight}})])]),i("div",{staticClass:"i-dialog-footer"},[i("input",{ref:"inputFile",staticStyle:{width:"1px",height:"1px",border:"none",opacity:"0"},attrs:{type:"file",accept:"image/gif, image/jpeg ,image/png"},on:{change:t.putImgToCanv}}),i("span",{on:{click:t.chooseImg}},[t._t("choose",(function(){return[!0===t.showChooseBtn?i("div",{staticClass:"btn btn-primary btn-primary-plain"},[t._v(" "+t._s(t.label)+" ")]):t._e()]}))],2),i("div",{staticClass:"btn-group fr"},[i("span",{on:{click:t.handleClose}},[t._t("cancel",(function(){return[i("button",{staticClass:"btn btn-default",attrs:{type:"button"}},[t._v(" 取消 ")])]}))],2),i("span",{on:{click:function(o){return t.cropPicture(!1)}}},[t._t("confirm",(function(){return[i("button",{staticClass:"btn btn-primary",staticStyle:{"margin-left":"15px"},attrs:{type:"button",disabled:!t.drawImg.img}},[t._v(" 确定 ")])]}))],2)])])])]),i("div",{staticStyle:{clear:"both"}})],1):t._e()]):t._e()])],1)},s=[],a=i("5530"),r=i("53ca"),l=(i("a9e3"),i("b0c0"),i("ac1f"),i("1276"),i("466d"),i("d3b7"),i("5cc6"),i("9a8c"),i("a975"),i("735e"),i("c1ac"),i("d139"),i("3a7b"),i("d5d6"),i("82f8"),i("e91f"),i("60bd"),i("5f96"),i("3280"),i("3fcc"),i("ca91"),i("25a1"),i("cd26"),i("3c5d"),i("2954"),i("649e"),i("219c"),i("170b"),i("b39a9"),i("72f7"),{name:"ImgCutter",props:{crossOrigin:{type:Boolean,default:!0,required:!1},crossOriginHeader:{type:String,default:"*",required:!1},label:{type:String,default:"选择图片",required:!1},isModal:{type:Boolean,default:!0,required:!1},lockScroll:{type:Boolean,default:!0,required:!1},showChooseBtn:{type:Boolean,default:!0,required:!1},boxWidth:{type:Number,default:800,required:!1},boxHeight:{type:Number,default:400,required:!1},cutWidth:{type:Number,default:200,required:!1},cutHeight:{type:Number,default:200,required:!1},rate:{type:String,default:null,required:!1},tool:{type:Boolean,default:!0,required:!1},toolBgc:{type:String,default:"#fff",required:!1},imgMove:{type:Boolean,default:!0,required:!1},sizeChange:{type:Boolean,default:!1,required:!1},originalGraph:{type:Boolean,default:!1,required:!1},moveAble:{type:Boolean,default:!0,required:!1},previewMode:{type:Boolean,default:!0,required:!1},WatermarkText:{type:String,default:"",required:!1},WatermarkTextFont:{type:String,default:"12px Sans-serif",required:!1},WatermarkTextColor:{type:String,default:"#fff",required:!1},WatermarkTextX:{type:Number,default:.95,required:!1},WatermarkTextY:{type:Number,default:.95,required:!1},smallToUpload:{type:Boolean,default:!1,required:!1},saveCutPosition:{type:Boolean,default:!1,required:!1},scaleAble:{type:Boolean,default:!0,required:!1},index:{default:null,required:!1},fileType:{default:"png",required:!1,type:String},toolBoxOverflow:{type:Boolean,default:!0,required:!1}},model:["label","boxWidth","boxHeight","rate","tool"],data:function(){var t,o;return t=this.boxWidth/2,o=this.boxHeight/2,{visible:!1,fileName:"",cutImageObj:null,onPrintImgTimmer:null,toolBoxPosition:{x:0,y:0},drawImg:{img:null,sx:0,sy:0,swidth:0,sheight:0,x:0,y:0,width:0,height:0},toolBox:{disable:!0,width:t,height:o,x:0,y:0,boxMove:{start:{x:0,y:0},moveTo:{x:0,y:0}}},dropImg:{active:!1,pageX:0,pageY:0,params:{}},rotateImg:{angle:0},rotateControl:{active:!1,start:{x:0,y:0},position:100},scaleImg:{rate:0,params:{}},controlBox:{disable:!0,btnName:"",start:{x:0,y:0,width:0,height:0}},selectBox:!1,selectBoxColor:"rgba(0,0,0,0.6)",isFlipHorizontal:!1,isFlipVertically:!1}},mounted:function(){var t=this;!1===this.isModal&&(this.visible=!0,this.$nextTick((function(){t.$refs["toolBox"]&&(t.$refs["toolBox"].onmousewheel=t.scaleImgWheel,t.$refs["toolBox"].addEventListener("DOMMouseScroll",t.scaleImgWheel))}))),this.$emit("loaded")},methods:{handleOpen:function(t){var o=this,i=function(t){if(o.$refs["toolBox"]&&(o.$refs["toolBox"].onmousewheel=o.scaleImgWheel,o.$refs["toolBox"].addEventListener("DOMMouseScroll",o.scaleImgWheel)),!0===o.isModal){!0===o.lockScroll&&(document.body.style.overflowY="hidden");var i=o.$refs["dialogMainModalRef"].offsetHeight+200,e=window.innerHeight,s=o.$refs["mask"];s.style.overflowY=i>e?"scroll":"hidden"}t&&"function"===typeof t&&t()};if(t&&"object"==Object(r["a"])(t)&&(t.src||t.url)){if(!t.name)throw new Error("传入参数必须包含：src,name");var e=new Image;!0===this.crossOrigin&&(e.crossOrigin=this.crossOriginHeader),e.name=t.name,e.style.position="fixed",e.style.top=-5e3,e.style.opacity=0,e.onerror=function(t){console.error("图片加载失败"),o.$emit("error",{index:o.index,event:t,msg:"图片加载失败"}),o.clearCutImageObj()},e.onload=function(){if(!0!==e.complete)throw new Error("图片加载失败");o.visible=!0,o.$nextTick((function(){i((function(){o.importImgToCanv(e)}))}))},e.src=t.src||t.url,this.cutImageObj=e,document.body.appendChild(e),this.$emit("onChooseImg",t,this.index)}else this.visible=!0,this.$nextTick((function(){i()}))},handleClose:function(){var t=this;this.clearAll(),!0===this.isModal&&(!0===this.lockScroll&&(document.body.style.overflowY="scroll"),this.$nextTick((function(){t.visible=!1})))},chooseImg:function(){this.$refs["inputFile"].click()},importImgToCanv:function(t){var o,i=t.height,e=t.width,s=this.boxWidth,r=this.boxHeight,l=Object(a["a"])({},this.drawImg);this.fileName=t.name,l.img=t,this.scaleImg.rate=e/i,i<r&&e<s?(o=1,l.x=(s-e)/2,l.y=(r-i)/2):e/i<=s/r?(o=r/i,l.x=(s-e*o)/2):(o=s/e,l.y=(r-i*o)/2),l.swidth=e,l.sheight=i,l.width=e*o,l.height=i*o,l.x=(s-l.width)/2,l.y=(r-l.height)/2,this.$set(this,"drawImg",l),this.printImg(),this.putToolBox()},putImgToCanv:function(t){var o,i=this;if(!t.target.files)return console.error("IE9及以下需要自己传入image对象"),!1;if(o=t.target.files[0]||null,o){this.fileName=o.name;var e=new FileReader;e.readAsDataURL(o),e.onload=function(t){var s=t.target.result,r=document.createElement("img");r.src=s;var l=setInterval((function(){if(2===e.readyState){if(clearInterval(l),!i.sizeChange&&i.smallToUpload&&r.width<=i.cutWidth&&r.height<=i.cutHeight)return i.handleClose(),o.name=i.changeFileName(o.name,i.fileType),void i.$emit("cutDown",{filename:i.changeFileName(o.name,i.fileType),file:o,index:i.index});var t,s=r.height,n=r.width,h=i.boxWidth,d=i.boxHeight,c=Object(a["a"])({},i.drawImg);c.img=r,i.scaleImg.rate=n/s,s<d&&n<h?(t=1,c.x=(h-n)/2,c.y=(d-s)/2):n/s<=h/d?(t=d/s,c.x=(h-n*t)/2):(t=h/n,c.y=(d-s*t)/2),c.swidth=n,c.sheight=s,c.width=n*t,c.height=s*t,c.x=(h-c.width)/2,c.y=(d-c.height)/2,i.$set(i,"drawImg",c),i.printImg(),i.putToolBox()}}),200)},this.$emit("onChooseImg",o,this.index)}},putToolBox:function(){this.toolBoxOverflow?(this.toolBox.width!==this.boxWidth/2&&this.toolBox.height!==this.boxHeight/2&&!1!==this.saveCutPosition||(this.toolBox.width=this.cutWidth>this.boxWidth?this.boxWidth:this.cutWidth,this.toolBox.height=this.cutHeight>this.boxHeight?this.boxHeight:this.cutHeight),(0===this.toolBox.x&&0===this.toolBox.y||!1===this.saveCutPosition)&&(this.toolBox.x=this.boxWidth/2-this.toolBox.width/2,this.toolBox.y=this.boxHeight/2-this.toolBox.height/2)):(this.toolBox.x=this.drawImg.x,this.toolBox.y=this.drawImg.y,this.toolBox.width=this.drawImg.width,this.toolBox.height=this.drawImg.height),this.drawControlBox(this.toolBox.width,this.toolBox.height,this.toolBox.x,this.toolBox.y)},isSupportFileApi:function(){return!!(window.File&&window.FileList&&window.FileReader&&window.Blob&&-1===navigator.userAgent.indexOf("Edge")&&-1===navigator.userAgent.indexOf("MSIE")&&-1===navigator.userAgent.indexOf("Trident"))},dataURLtoFile:function(t,o){var i=t.split(","),e=i[0].match(/:(.*?);/)[1],s=atob(i[1]),a=s.length,r=new Uint8Array(a);while(a--)r[a]=s.charCodeAt(a);if(this.isSupportFileApi()){var l=new File([r],o,{type:e});return l}return"不支持File对象"},clearAll:function(){var t=this,o=t.$refs["canvas"],i=o.getContext("2d");i.clearRect(0,0,o.width,o.height);var e=t.$refs["canvasSelectBox"],s=e.getContext("2d");s.clearRect(0,0,e.width,e.height);var a=t.drawImg.sx,r=t.drawImg.sy;this.drawImg={img:null,sx:a,sy:r,swidth:0,sheight:0,x:0,y:0,width:0,height:0},this.isFlipHorizontal=!1,this.isFlipVertically=!1,this.$refs["inputFile"].value="",this.rotateImg.angle=0,this.drawImg.img=null,this.turnReset(),this.clearCutImageObj(),this.$emit("onClearAll",this.index)},clearCutImageObj:function(){null!==this.cutImageObj&&void 0!==this.cutImageObj&&("function"===typeof this.cutImageObj.remove?this.cutImageObj.remove():this.cutImageObj.removeNode()),this.cutImageObj=null},drawControlBox:function(t,o,i,e){var s=this;this.toolBoxOverflow?(t>this.boxWidth&&(t=this.boxWidth),o>this.boxHeight&&(o=this.boxHeight),i<0&&(i=0),e<0&&(e=0)):(t>this.drawImg.width&&(t=this.drawImg.width),o>this.drawImg.height&&(o=this.drawImg.height),i<this.drawImg.x&&(i=this.drawImg.x),e<this.drawImg.y&&(e=this.drawImg.y),i>this.drawImg.x+this.drawImg.width-t&&(i=this.drawImg.x+this.drawImg.width-t),e>this.drawImg.y+this.drawImg.height-o&&(e=this.drawImg.y+this.drawImg.height-o));var a,r,l=this.$refs["toolBoxControl"],n=this.$refs["canvasSelectBox"],h=n.getContext("2d");if(h.fillStyle=this.selectBoxColor,h.clearRect(0,0,n.width,n.height),h.fillRect(0,0,n.width,n.height),this.rate&&""!==this.rate){var d=this.rate.split(":")[0]/this.rate.split(":")[1];d>=1?(a=t,r=t/d):(a=o*d,r=o)}else a=t,r=o;this.toolBox.width=a,this.toolBox.height=r,l.style.width=Math.abs(a)+"px",l.style.height=Math.abs(r)+"px",this.toolBox.boxMove.moveTo.x=i,this.toolBox.boxMove.moveTo.y=e,a<0&&(i+=a),r<0&&(e+=r),i+this.toolBox.width>this.boxWidth&&(i=this.boxWidth-this.toolBox.width),i<0&&(i=0),e+this.toolBox.height>this.boxHeight&&(e=this.boxHeight-this.toolBox.height),e<0&&(e=0),this.toolBoxPosition.x=i,this.toolBoxPosition.y=e,l.style.left=i+"px",l.style.top=e+"px",h.clearRect(i,e,Math.abs(a),Math.abs(r)),this.onPrintImgTimmer&&clearTimeout(this.onPrintImgTimmer),this.onPrintImgTimmer=setTimeout((function(){s.cropPicture(!0)}),100)},resetToolBox:function(){this.toolBox.width<0&&(this.toolBox.boxMove.moveTo.x=this.toolBox.x-this.toolBox.width),this.toolBox.height<0&&(this.toolBox.boxMove.moveTo.y=this.toolBox.y-this.toolBox.height),this.toolBox.width=Math.abs(this.toolBox.width),this.toolBox.height=Math.abs(this.toolBox.height)},toolBoxMouseDown:function(t){var o=this.$refs["toolBoxControl"];this.toolBox.x=parseInt(o.style.left.split("px")[0]),this.toolBox.y=parseInt(o.style.top.split("px")[0]),this.toolBox.disable=!1,this.dropImg.active=!1,this.toolBox.boxMove.start={x:t.pageX,y:t.pageY}},toolBoxMouseMove:function(t){if(this.dropImg.active&&this.dropImgMove(t),!1===this.toolBox.disable&&!0===this.moveAble){var o=t.pageX-this.toolBox.boxMove.start.x,i=t.pageY-this.toolBox.boxMove.start.y,e=this.toolBox.x+o,s=this.toolBox.y+i;this.drawControlBox(this.toolBox.width,this.toolBox.height,e,s)}},toolBoxMouseLeave:function(){var t=this;this.toolBox.disable=!0,this.onPrintImgTimmer&&clearTimeout(this.onPrintImgTimmer),this.onPrintImgTimmer=setTimeout((function(){t.cropPicture(!0)}),100),this.resetToolBox()},toolBoxMouseUp:function(){this.toolBox.x=parseInt(this.toolBoxPosition.x),this.toolBox.y=parseInt(this.toolBoxPosition.y),this.toolBox.disable=!0,this.dropImg.active=!1,this.resetToolBox()},printImg:function(){var t=this;if(this.drawImg.img){var o=this.$refs["canvas"],i=o.getContext("2d");i.font="18px bold 黑体",i.fillStyle="#ff0",i.textAlign="center",i.textBaseline="middle",i.save(),i.clearRect(0,0,o.width,o.height),i.translate(this.drawImg.x+this.drawImg.width/2,this.drawImg.y+this.drawImg.height/2),i.rotate(this.rotateImg.angle*Math.PI/180),i.translate(-(this.drawImg.x+this.drawImg.width/2),-(this.drawImg.y+this.drawImg.height/2)),i.translate(this.drawImg.x,this.drawImg.y),i.scale(this.isFlipHorizontal?-1:1,this.isFlipVertically?-1:1),i.drawImage(this.drawImg.img,this.drawImg.sx,this.drawImg.sy,this.drawImg.swidth,this.drawImg.sheight,this.isFlipHorizontal?-this.drawImg.width:0,this.isFlipVertically?-this.drawImg.height:0,this.drawImg.width,this.drawImg.height),i.translate(-this.drawImg.x,this.drawImg.y),i.restore(),this.onPrintImgTimmer&&clearTimeout(this.onPrintImgTimmer),this.onPrintImgTimmer=setTimeout((function(){t.cropPicture(!0)}),100)}},dropImgOn:function(t){!0===this.imgMove&&(this.dropImg.active=!0,this.dropImg.params=Object(a["a"])({},this.drawImg),this.dropImg.pageX=t.pageX,this.dropImg.pageY=t.pageY)},dropImgOff:function(){var t=this;this.dropImg.active=!1,this.onPrintImgTimmer&&clearTimeout(this.onPrintImgTimmer),this.onPrintImgTimmer=setTimeout((function(){t.cropPicture(!0)}),100)},dropImgMove:function(t){if(this.dropImg.active&&this.drawImg.img){var o=Object(a["a"])({},this.drawImg);o.x=this.dropImg.params.x-(this.dropImg.pageX-t.pageX),o.y=this.dropImg.params.y-(this.dropImg.pageY-t.pageY),this.toolBoxOverflow||(o.x>this.toolBox.x&&(o.x=this.toolBox.x),o.x<this.toolBox.x+this.toolBox.width-o.width&&(o.x=this.toolBox.x+this.toolBox.width-o.width),o.y>this.toolBox.y&&(o.y=this.toolBox.y),o.y<this.toolBox.y+this.toolBox.height-o.height&&(o.y=this.toolBox.y+this.toolBox.height-o.height)),this.$set(this,"drawImg",o),this.printImg(),t.stopPropagation()}},scaleReset:function(){this.drawImg.width=this.drawImg.swidth,this.drawImg.height=this.drawImg.sheight,this.printImg()},scaleImgWheel:function(t){var o=this;if(this.drawImg.img&&!0===this.scaleAble){var i,e=t||window.event;if(e.wheelDelta?i=-e.wheelDelta/40:e.detail&&(i=e.detail),this.toolBoxOverflow){var s=50;this.drawImg.x=this.drawImg.width-9*i>s?this.drawImg.x+3*i:this.drawImg.x,this.drawImg.y=this.drawImg.width-9*i>s?this.drawImg.y+3*i:this.drawImg.y,this.drawImg.width=this.drawImg.width-9*i>s?this.drawImg.width-9*i:s,this.drawImg.height=this.drawImg.width/this.scaleImg.rate}else{var a=this.toolBox.width;this.drawImg.x=this.drawImg.width-9*i>a?this.drawImg.x+3*i:this.drawImg.x,this.drawImg.y=this.drawImg.width-9*i>a?this.drawImg.y+3*i:this.drawImg.y,(this.drawImg.x>this.toolBox.x||this.drawImg.x+this.drawImg.width<this.toolBox.x+this.toolBox.width||this.drawImg.width<=this.toolBox.width)&&(this.drawImg.x=this.toolBox.x),(this.drawImg.y>this.toolBox.y||this.drawImg.y+this.drawImg.height<this.toolBox.y+this.toolBox.height)&&(this.drawImg.y=this.toolBox.y),this.drawImg.width=this.drawImg.width-9*i>a?this.drawImg.width-9*i:a,this.drawImg.height=this.drawImg.width/this.scaleImg.rate}this.printImg(),this.onPrintImgTimmer&&clearTimeout(this.onPrintImgTimmer),this.onPrintImgTimmer=setTimeout((function(){o.cropPicture(!0)}),100)}return t.preventDefault(),t.returnValue=!1,!1},flipHorizontal:function(){this.drawImg.img&&(0==this.isFlipHorizontal?this.isFlipHorizontal=!0:this.isFlipHorizontal=!1,this.printImg())},flipVertically:function(){this.drawImg.img&&(0==this.isFlipVertically?this.isFlipVertically=!0:this.isFlipVertically=!1,this.printImg())},turnImg:function(t){var o=this.rotateImg.angle,i=o+t;i>=-180&&i<=180&&(this.rotateImg.angle=i,this.rotateControl.position=i/180*100+100,this.printImg("rotate"))},turnReset:function(){this.rotateImg.angle=0,this.rotateControl.position=100,this.printImg("rotate")},controlBtnMouseDown:function(t,o){this.controlBox.disable=!1,this.controlBox.btnName=o,this.controlBox.start.x=t.clientX,this.controlBox.start.y=t.clientY,this.controlBox.start.width=this.toolBox.width,this.controlBox.start.height=this.toolBox.height,t.stopPropagation()},controlBtnMouseUp:function(t){this.controlBox.disable=!0,this.dropImgOff(),this.resetToolBox(),this.toolBoxMouseUp(),t.stopPropagation()},controlBtnMouseMove:function(t){if(!1===this.controlBox.disable){var o,i,e=t.clientX-this.controlBox.start.x,s=t.clientY-this.controlBox.start.y;if("leftUp"==this.controlBox.btnName){if(this.rate){var a=this.rate.split(":")[0]/this.rate.split(":")[1];a>=1?(o=this.toolBox.x+e,i=this.toolBox.y+e/a):(o=this.toolBox.x+s*a,i=this.toolBox.y+s)}else o=this.toolBox.x+e,i=this.toolBox.y+s;this.toolBox.width=this.controlBox.start.width-e,this.toolBox.height=this.controlBox.start.height-s}if("rightUp"==this.controlBox.btnName){if(this.rate){var r=this.rate.split(":")[0]/this.rate.split(":")[1];r>=1?(o=this.toolBox.x,i=this.toolBox.y-e/r):(o=this.toolBox.x,i=this.toolBox.y+s)}else o=this.toolBox.x,i=this.toolBox.y+s;this.toolBox.width=this.controlBox.start.width+e,this.toolBox.height=this.controlBox.start.height-s}if("rightDown"==this.controlBox.btnName&&(o=this.toolBox.x,i=this.toolBox.y,this.toolBox.width=this.controlBox.start.width+e,this.toolBox.height=this.controlBox.start.height+s),"leftDown"==this.controlBox.btnName){if(this.rate){var l=this.rate.split(":")[0]/this.rate.split(":")[1];l>=1?(o=this.toolBox.x+e,i=this.toolBox.y):(o=this.toolBox.x+-s*l,i=this.toolBox.y)}else o=this.toolBox.x+e,i=this.toolBox.y;this.toolBox.width=this.controlBox.start.width-e,this.toolBox.height=this.controlBox.start.height+s}"topCenter"==this.controlBox.btnName&&(o=this.toolBox.x,i=this.toolBox.y+s,this.toolBox.width=this.controlBox.start.width,this.toolBox.height=this.controlBox.start.height-s),"downCenter"==this.controlBox.btnName&&(o=this.toolBox.x,i=this.toolBox.y,this.toolBox.width=this.controlBox.start.width,this.toolBox.height=this.controlBox.start.height+s),"leftCenter"==this.controlBox.btnName&&(o=this.toolBox.x+e,i=this.toolBox.y,this.toolBox.width=this.controlBox.start.width-e,this.toolBox.height=this.controlBox.start.height),"rightCenter"==this.controlBox.btnName&&(o=this.toolBox.x,i=this.toolBox.y,this.toolBox.width=this.controlBox.start.width+e,this.toolBox.height=this.controlBox.start.height),this.drawControlBox(this.toolBox.width,this.toolBox.height,o,i)}t.stopPropagation()},changeFileName:function(t,o){var i=t.lastIndexOf(".");return t.substr(0,i+1)+("jpeg"===o?"jpg":o)},cropPicture:function(t){this.$emit("changeAllreadyCut",!0);var o=this;if(this.drawImg.img){var i=this.$refs["canvas"];if(this.WatermarkText&&!t){var e=i.getContext("2d");e.font=this.WatermarkTextFont,e.fillStyle=this.WatermarkTextColor,e.textAlign="right",e.textBaseline="bottom",e.fillText(this.WatermarkText,this.toolBox.x+this.toolBox.width*this.WatermarkTextX,this.toolBox.y+this.toolBox.height*this.WatermarkTextY)}var s=new Image;!0===this.crossOrigin&&(s.crossOrigin=this.crossOriginHeader),s.src=i.toDataURL("image/".concat(this.fileType)),HTMLCanvasElement.prototype.toBlob||Object.defineProperty(HTMLCanvasElement.prototype,"toBlob",{value:function(t,e,s){window.atob?setTimeout((function(){for(var a,r=atob(i.toDataURL(e,s).split(",")[1]),l=r.length,n=new Uint8Array(l),h=0;h<l;h++)n[h]=r.charCodeAt(h);try{a=new Blob([n],{type:"image/".concat(o.fileType)})}catch(g){if(window.BlobBuilder=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder,"TypeError"==g.name&&window.BlobBuilder){var d=window.BlobBuilder,c=new d;c.append(n.buffer),a=c.getBlob("image/".concat(o.fileType))}"InvalidStateError"==g.name&&(a=new Blob([n.buffer],{type:"image/".concat(o.fileType)}))}t(a)}),200):t(!1,{type:"image/".concat(o.fileType)})}}),i.toBlob((function(i){if(i){var e=new FileReader;e.readAsDataURL(i),e.onload=function(){var i=setInterval((function(){if(2==e.readyState){clearInterval(i);var a=document.createElement("canvas"),r=a.getContext("2d");if(1==o.originalGraph){var l=o.drawImg.width/o.drawImg.swidth,n=o.toolBox.width/l,h=o.toolBox.height/l;a.width=n,a.height=h;var d=(o.toolBox.x-o.drawImg.x)/l,c=(o.toolBox.y-o.drawImg.y)/l,g=o.drawImg.swidth,m=o.drawImg.sheight;r.translate(-d,-c),r.drawImage(o.drawImg.img,0,0,g,m)}else{a.width=o.toolBox.width,a.height=o.toolBox.height;var x=o.toolBox;if(o.rate){var u=o.rate.split(":")[0]/o.rate.split(":")[1],w=o.rate.split(":")[0],B=o.rate.split(":")[1];w>=B?r.drawImage(s,x.x,x.y,x.width,x.width*u,0,0,x.width,x.width*u):r.drawImage(s,x.x,x.y,x.width,x.width/u,0,0,x.width,x.width/u)}else r.drawImage(s,x.x,x.y,x.width,x.height,0,0,x.width,x.height)}a.toBlob((function(i){var e=o.changeFileName(o.fileName,o.fileType);t?o.previewMode&&o.$emit("onPrintImg",{index:o.index,fileName:e,blob:i,file:o.dataURLtoFile(a.toDataURL("image/".concat(o.fileType)),e),dataURL:a.toDataURL("image/".concat(o.fileType))}):(o.handleClose(),o.$emit("cutDown",{index:o.index,fileName:e,blob:i,file:o.dataURLtoFile(a.toDataURL("image/".concat(o.fileType)),e),dataURL:a.toDataURL("image/".concat(o.fileType))}))}),"image/".concat(o.fileType),.95)}}),200)}}else{var a=document.createElement("canvas");a.width=o.toolBox.width,a.height=o.toolBox.height;var r=a.getContext("2d"),l=o.toolBox;if(o.rate){var n=o.rate.split(":")[0]/o.rate.split(":")[1];r.drawImage(s,l.x,l.y,l.width,l.width*n,0,0,l.width,l.width*n)}else r.drawImage(s,l.x,l.y,l.width,l.height,0,0,l.width,l.height);var h=o.changeFileName(o.fileName,o.fileType);t?o.$emit("onPrintImg",{fileName:h,dataURL:a.toDataURL("image/".concat(o.fileType))}):(o.handleClose(),o.$emit("cutDown",{fileName:h,dataURL:a.toDataURL("image/".concat(o.fileType))}))}})),"image/".concat(o.fileType)}else t||(console.warn("No picture selected"),o.$emit("error",{err:1,msg:"No picture selected"}))},scrollBarControlMove:function(t){if(this.rotateControl.active){var o=t.pageX-this.rotateControl.start.x,i=this.rotateControl.start.position+o;i<=0&&(i=0),i>=200&&(i=200),this.rotateControl.position=i,this.rotateImg.angle=(i-100)/100*180,this.printImg()}},scrollBarControlOn:function(t){this.rotateControl.active=!0,this.rotateControl.start.x=t.pageX,this.rotateControl.start.y=t.pageY,this.rotateControl.start.position=this.rotateControl.position},scrollBarControlOff:function(){this.rotateControl.active=!1}}}),n=l,h=(i("5210"),i("2877")),d=Object(h["a"])(n,e,s,!1,null,"6603a406",null);o["default"]=d.exports},"466d":function(t,o,i){"use strict";var e=i("d784"),s=i("825a"),a=i("50c4"),r=i("577e"),l=i("1d80"),n=i("8aa5"),h=i("14c3");e("match",(function(t,o,i){return[function(o){var i=l(this),e=void 0==o?void 0:o[t];return void 0!==e?e.call(o,i):new RegExp(o)[t](r(i))},function(t){var e=s(this),l=r(t),d=i(o,e,l);if(d.done)return d.value;if(!e.global)return h(e,l);var c=e.unicode;e.lastIndex=0;var g,m=[],x=0;while(null!==(g=h(e,l))){var u=r(g[0]);m[x]=u,""===u&&(e.lastIndex=n(l,a(e.lastIndex),c)),x++}return 0===x?null:m}]}))},5210:function(t,o,i){"use strict";i("26e7")}}]);