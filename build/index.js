(window.webpackJsonp_rs_blockmanialab=window.webpackJsonp_rs_blockmanialab||[]).push([[1],{4:function(e,t,n){}}]),function(e){function t(t){for(var r,i,l=t[0],c=t[1],u=t[2],s=0,b=[];s<l.length;s++)i=l[s],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&b.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(p&&p(t);b.length;)b.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,l=1;l<n.length;l++){var c=n[l];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={0:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var l=window.webpackJsonp_rs_blockmanialab=window.webpackJsonp_rs_blockmanialab||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var p=c;a.push([6,1]),n()}([function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.blockEditor},function(e,t){e.exports=window.wp.blocks},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(3),o=n(0),a=(n(4),n(1)),i=n(2);n(5),Object(r.registerBlockType)("rs-blockmanialab/rs-blockmanialab",{apiVersion:2,title:Object(o.__)("BlockmaniaLab","rs-blockmanialab"),description:Object(o.__)("Example block written with ESNext standard and JSX support – build step required.","rs-blockmanialab"),category:"widgets",icon:"smiley",supports:{html:!1},edit:function(){return Object(a.createElement)("p",Object(i.useBlockProps)(),Object(o.__)("BlockmaniaLab – hello from the editor!","rs-blockmanialab"))},save:function(){return Object(a.createElement)("p",i.useBlockProps.save(),Object(o.__)("BlockmaniaLab – hello from the saved content!","rs-blockmanialab"))}})}]);