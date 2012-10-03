/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.7.1pr1
build: 3.7.1pr1
*/
YUI.add("dd-ddm-base",function(c,a){var b=function(){b.superclass.constructor.apply(this,arguments);};b.NAME="ddm";b.ATTRS={dragCursor:{value:"move"},clickPixelThresh:{value:3},clickTimeThresh:{value:1000},throttleTime:{value:-1},dragMode:{value:"point",setter:function(d){this._setDragMode(d);return d;}}};c.extend(b,c.Base,{_createPG:function(){},_active:null,_setDragMode:function(d){if(d===null){d=c.DD.DDM.get("dragMode");}switch(d){case 1:case"intersect":return 1;case 2:case"strict":return 2;case 0:case"point":return 0;}return 0;},CSS_PREFIX:c.ClassNameManager.getClassName("dd"),_activateTargets:function(){},_drags:[],activeDrag:false,_regDrag:function(e){if(this.getDrag(e.get("node"))){return false;}if(!this._active){this._setupListeners();}this._drags.push(e);return true;},_unregDrag:function(f){var e=[];c.each(this._drags,function(g,d){if(g!==f){e[e.length]=g;}});this._drags=e;},_setupListeners:function(){this._createPG();this._active=true;var d=c.one(c.config.doc);d.on("mousemove",c.throttle(c.bind(this._move,this),this.get("throttleTime")));d.on("mouseup",c.bind(this._end,this));},_start:function(){this.fire("ddm:start");this._startDrag();},_startDrag:function(){},_endDrag:function(){},_dropMove:function(){},_end:function(){if(this.activeDrag){this._endDrag();this.fire("ddm:end");this.activeDrag.end.call(this.activeDrag);this.activeDrag=null;}},stopDrag:function(){if(this.activeDrag){this._end();}return this;},_move:function(d){if(this.activeDrag){this.activeDrag._move.call(this.activeDrag,d);this._dropMove();}},cssSizestoObject:function(e){var d=e.split(" ");switch(d.length){case 1:d[1]=d[2]=d[3]=d[0];break;case 2:d[2]=d[0];d[3]=d[1];break;case 3:d[3]=d[1];break;}return{top:parseInt(d[0],10),right:parseInt(d[1],10),bottom:parseInt(d[2],10),left:parseInt(d[3],10)};},getDrag:function(e){var d=false,f=c.one(e);if(f instanceof c.Node){c.each(this._drags,function(h,g){if(f.compareTo(h.get("node"))){d=h;}});}return d;},swapPosition:function(e,d){e=c.DD.DDM.getNode(e);d=c.DD.DDM.getNode(d);var g=e.getXY(),f=d.getXY();e.setXY(f);d.setXY(g);return e;},getNode:function(d){if(d instanceof c.Node){return d;}if(d&&d.get){if(c.Widget&&(d instanceof c.Widget)){d=d.get("boundingBox");}else{d=d.get("node");}}else{d=c.one(d);}return d;},swapNode:function(f,d){f=c.DD.DDM.getNode(f);d=c.DD.DDM.getNode(d);var g=d.get("parentNode"),e=d.get("nextSibling");if(e==f){g.insertBefore(f,d);}else{if(d==f.get("nextSibling")){g.insertBefore(d,f);}else{f.get("parentNode").replaceChild(d,f);g.insertBefore(f,e);}}return f;}});c.namespace("DD");c.DD.DDM=new b();},"3.7.1pr1",{"requires":["node","base","yui-throttle","classnamemanager"]});