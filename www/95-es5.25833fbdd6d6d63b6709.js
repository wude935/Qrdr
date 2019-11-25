(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{Xaun:function(t,e,r){"use strict";r.r(e),r.d(e,"ShadowCss",function(){return o}),r.d(e,"scopeCss",function(){return P});var o=function(){function t(){this.strictStyling=!0}return t.prototype.shimCssText=function(t,e,r,o,n){void 0===r&&(r=""),void 0===o&&(o=""),void 0===n&&(n=!1);var s=R(t);t=C(t);var c=[];if(n){var i=function(t){var e="/*!@___"+c.length+"___*/";return c.push({placeholder:e,comment:"/*!@"+t.selector+"*/"}),t.selector=e+t.selector,t};t=W(t,function(t){return"@"!==t.selector[0]?i(t):t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document")?(t.content=W(t.content,i),t):t})}var p=this._scopeCssText(t,e,r,o,n);return t=[p].concat(s).join("\n"),n&&c.forEach(function(e){t=t.replace(e.placeholder,e.comment)}),t},t.prototype._scopeCssText=function(t,e,r,o,n){return t=this._insertPolyfillHostInCssText(t),t=this._convertColonHost(t),t=this._convertColonHostContext(t),t=this._convertColonSlotted(t,o),t=this._convertShadowDOMSelectors(t),e&&(t=this._scopeSelectors(t,e,r,o,n)),(t=(t=t.replace(/-shadowcsshost-no-combinator/g,"."+r)).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim()},t.prototype._convertColonHost=function(t){return this._convertColonRule(t,a,this._colonHostPartReplacer)},t.prototype._convertColonSlotted=function(t,e){return t.replace(f,function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];if(t[2]){var o=t[2].trim(),n=t[3],s="."+e+" > "+o+n;return s}return _+t[3]})},t.prototype._convertColonHostContext=function(t){return this._convertColonRule(t,h,this._colonHostContextPartReplacer)},t.prototype._convertColonRule=function(t,e,r){return t.replace(e,function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(t[2]){for(var o=t[2].split(","),n=[],s=0;s<o.length;s++){var c=o[s].trim();if(!c)break;n.push(r(_,c,t[3]))}return n.join(",")}return _+t[3]})},t.prototype._colonHostContextPartReplacer=function(t,e,r){return e.indexOf(i)>-1?this._colonHostPartReplacer(t,e,r):t+e+r+", "+e+" "+t+r},t.prototype._colonHostPartReplacer=function(t,e,r){return t+e.replace(i,"")+r},t.prototype._convertShadowDOMSelectors=function(t){return g.reduce(function(t,e){return t.replace(e," ")},t)},t.prototype._scopeSelectors=function(t,e,r,o,n){var c=this;return W(t,function(t){var i=t.selector,p=t.content;return"@"!==t.selector[0]?i=c._scopeSelector(t.selector,e,r,o,c.strictStyling):(t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document"))&&(p=c._scopeSelectors(t.content,e,r,o,n)),i=i.replace(/\s{2,}/g," ").trim(),new s(i,p)})},t.prototype._scopeSelector=function(t,e,r,o,n){var s=this;return t.split(",").map(function(t){return o&&t.indexOf("."+o)>-1?t.trim():s._selectorNeedsScoping(t,e)?n?s._applyStrictSelectorScope(t,e,r).trim():s._applySelectorScope(t,e,r).trim():t.trim()}).join(", ")},t.prototype._selectorNeedsScoping=function(t,e){return!this._makeScopeMatcher(e).test(t)},t.prototype._makeScopeMatcher=function(t){return t=t.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+t+")"+v,"m")},t.prototype._applySelectorScope=function(t,e,r){return this._applySimpleSelectorScope(t,e,r)},t.prototype._applySimpleSelectorScope=function(t,e,r){if(S.lastIndex=0,S.test(t)){var o=this.strictStyling?"."+r:e;return t.replace(d,function(t,e){return e.replace(/([^:]*)(:*)(.*)/,function(t,e,r,n){return e+o+r+n})}).replace(S,o+" ")}return e+" "+t},t.prototype._applyStrictSelectorScope=function(t,e,r){for(var o,s=this,c="."+(e=e.replace(/\[is=([^\]]*)\]/g,function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return e[0]})),i=function(t){var o=t.trim();if(!o)return"";if(t.indexOf(_)>-1)o=s._applySimpleSelectorScope(t,e,r);else{var n=t.replace(S,"");if(n.length>0){var i=n.match(/([^:]*)(:*)(.*)/);i&&(o=i[1]+c+i[2]+i[3])}}return o},p=new n(t),l="",u=0,a=/( |>|\+|~(?!=))\s*/g,h=!((t=p.content()).indexOf(_)>-1);null!==(o=a.exec(t));){var f=o[1],d=t.slice(u,o.index).trim();l+=((h=h||d.indexOf(_)>-1)?i(d):d)+" "+f+" ",u=a.lastIndex}var g=t.substring(u);return l+=(h=h||g.indexOf(_)>-1)?i(g):g,p.restore(l)},t.prototype._insertPolyfillHostInCssText=function(t){return t.replace(y,l).replace(m,i).replace(x,p)},t}(),n=function(){function t(t){var e=this;this.placeholders=[],this.index=0,t=t.replace(/(\[[^\]]*\])/g,function(t,r){var o="__ph-"+e.index+"__";return e.placeholders.push(r),e.index++,o}),this._content=t.replace(/(:nth-[-\w]+)(\([^)]+\))/g,function(t,r,o){var n="__ph-"+e.index+"__";return e.placeholders.push(o),e.index++,r+n})}return t.prototype.restore=function(t){var e=this;return t.replace(/__ph-(\d+)__/g,function(t,r){return e.placeholders[+r]})},t.prototype.content=function(){return this._content},t}(),s=function(){return function(t,e){this.selector=t,this.content=e}}(),c=function(){return function(t,e){this.escapedString=t,this.blocks=e}}(),i="-shadowcsshost",p="-shadowcssslotted",l="-shadowcsscontext",u=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",a=new RegExp("("+i+u,"gim"),h=new RegExp("("+l+u,"gim"),f=new RegExp("("+p+u,"gim"),_=i+"-no-combinator",d=/-shadowcsshost-no-combinator([^\s]*)/,g=[/::shadow/g,/::content/g],v="([>\\s~+[.,{:][\\s\\S]*)?$",S=/-shadowcsshost/gim,m=/:host/gim,x=/::slotted/gim,y=/:host-context/gim,w=/\/\*\s*[\s\S]*?\*\//g,C=function(t){return t.replace(w,"")},O=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,R=function(t){return t.match(O)||[]},H=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,b=/([{}])/g,W=function(t,e){var r=k(t),o=0;return r.escapedString.replace(H,function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var c=t[2],i="",p=t[4],l="";p&&p.startsWith("{%BLOCK%")&&(i=r.blocks[o++],p=p.substring("%BLOCK%".length+1),l="{");var u=e(new s(c,i));return""+t[1]+u.selector+t[3]+l+u.content+p})},k=function(t){for(var e=t.split(b),r=[],o=[],n=0,s=[],i=0;i<e.length;i++){var p=e[i];"}"===p&&n--,n>0?s.push(p):(s.length>0&&(o.push(s.join("")),r.push("%BLOCK%"),s=[]),r.push(p)),"{"===p&&n++}return s.length>0&&(o.push(s.join("")),r.push("%BLOCK%")),new c(r.join(""),o)},P=function(t,e,r){return(new o).shimCssText(t,e,e+"-h",e+"-s",r)}}}]);