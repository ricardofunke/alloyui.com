/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.7.1pr1
build: 3.7.1pr1
*/
YUI.add("array-extras",function(d){var b=d.Array,a=d.Lang,c=Array.prototype;b.lastIndexOf=a._isNative(c.lastIndexOf)?function(e,g,f){return f||f===0?e.lastIndexOf(g,f):e.lastIndexOf(g);}:function(f,j,h){var e=f.length,g=e-1;if(h||h===0){g=Math.min(h<0?e+h:h,e);}if(g>-1&&e>0){for(;g>-1;--g){if(g in f&&f[g]===j){return g;}}}return -1;};b.unique=function(l,n){var f=0,k=l.length,g=[],e,o,h,m;outerLoop:for(;f<k;f++){m=l[f];for(e=0,h=g.length;e<h;e++){o=g[e];if(n){if(n.call(l,m,o,f,l)){continue outerLoop;}}else{if(m===o){continue outerLoop;}}}g.push(m);}return g;};b.filter=a._isNative(c.filter)?function(e,g,h){return c.filter.call(e,g,h);}:function(g,l,m){var j=0,e=g.length,h=[],k;for(;j<e;++j){if(j in g){k=g[j];if(l.call(m,k,j,g)){h.push(k);}}}return h;};b.reject=function(e,g,h){return b.filter(e,function(k,j,f){return !g.call(h,k,j,f);});};b.every=a._isNative(c.every)?function(e,g,h){return c.every.call(e,g,h);}:function(g,j,k){for(var h=0,e=g.length;h<e;++h){if(h in g&&!j.call(k,g[h],h,g)){return false;}}return true;};b.map=a._isNative(c.map)?function(e,g,h){return c.map.call(e,g,h);}:function(g,k,l){var j=0,e=g.length,h=c.concat.call(g);for(;j<e;++j){if(j in g){h[j]=k.call(l,g[j],j,g);}}return h;};b.reduce=a._isNative(c.reduce)?function(e,i,g,h){return c.reduce.call(e,function(l,k,j,f){return g.call(h,l,k,j,f);},i);}:function(h,m,k,l){var j=0,g=h.length,e=m;for(;j<g;++j){if(j in h){e=k.call(l,e,h[j],j,h);}}return e;};b.find=function(g,j,k){for(var h=0,e=g.length;h<e;h++){if(h in g&&j.call(k,g[h],h,g)){return g[h];}}return null;};b.grep=function(e,f){return b.filter(e,function(h,g){return f.test(h);});};b.partition=function(e,h,i){var g={matches:[],rejects:[]};b.each(e,function(j,f){var k=h.call(i,j,f,e)?g.matches:g.rejects;k.push(j);});return g;};b.zip=function(f,e){var g=[];b.each(f,function(i,h){g.push([i,e[h]]);});return g;};b.flatten=function(g){var f=[],h,e,j;if(!g){return f;}for(h=0,e=g.length;h<e;++h){j=g[h];if(a.isArray(j)){f.push.apply(f,b.flatten(j));}else{f.push(j);}}return f;};},"3.7.1pr1",{requires:["yui-base"]});