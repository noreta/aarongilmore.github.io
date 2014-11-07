/*
scrollConverter 1.0
https://github.com/koggdal/scroll-converter

Copyright 2011 Johannes Koggdal (http://koggdal.com/)
Developed for BombayWorks (http://bombayworks.com/)

Released under MIT license
*/
window.scrollConverter=function(a,b,c){var d=b.documentElement,e=!1,f=!1,g=!1,h=function(c,f,g){if(!e)return;var h,i,j,k,l,m,n,o;h=0,i=10,l=(d?d.offsetWidth:0)||0,m=b.body.scrollWidth||0,n=d?d.clientWidth:0,o=Math.max(l,m)-n,f.detail?h=f.detail*-240:f.wheelDelta&&(h=f.wheelDelta*5),j=h/120*i,k=c.x-j,k>=0&&k<=o?(c.x=k,c.setByScript=!0,a.scrollTo(c.x,c.y)):c.x!==0&&c.x!==o&&(c.x=k>o?o:0,c.setByScript=!0,a.scrollTo(c.x,c.y)),typeof g=="function"&&g(c)},i=function(c){c=c.toUpperCase();var d="page"+c+"Offset",e="scroll"+c,f="scroll"+(c==="X"?"Left":"Top");return a[d]||a[e]||function(){var a=b.documentElement||b.body.parentNode;return(typeof a[f]=="number"?a:b.body)[f]}()},j=function(c,d){var e=function(b){b=b||a.event,h(c,b,d);if(b.preventDefault&&b.stopPropagation)b.preventDefault(),b.stopPropagation();else return!1},f=function(){c.setByScript||(c.x=i("x"),c.y=i("y")),c.setByScript=!1};a.addEventListener?"onmousewheel"in a?(a.addEventListener("mousewheel",e,!1),a.addEventListener("scroll",f,!1)):(a.addEventListener("DOMMouseScroll",e,!1),a.addEventListener("scroll",f,!1)):(b.attachEvent("onmousewheel",e),a.attachEvent("onscroll",f))},k=function(a){return a.preventDefault(),a.stopPropagation(),!1};return{activate:function(b){e=!0;if(!g){var c={x:0,y:0};j(c,b),g=!0}f&&(a.addEventListener?a.removeEventListener("scroll",k,!0):a.detachEvent("onscroll",k),f=!1)},deactivate:function(){e=!1},deactivateAllScrolling:function(){e=!1,f=!0,a.addEventListener?a.addEventListener("scroll",k,!0):a.attachEvent("onscroll",k)}}}(window,document)