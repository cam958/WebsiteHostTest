(function(g){function H(a){"$ignore"===a&&(f.define=y,y=null)}function I(a,c,b){b||(b=c,c=[]);q=0;B[a]=!0;r(c,function(){m[a]=b.apply(null,arguments)})}function r(){n.push(arguments);C()}function C(){var a,c;if(n.length){var b=n;n=[];var d={};k=[];for(a=b.length;a--;){var e=[];var h=!0;for(c=b[a][0].length;c--;){var p=b[a][0][c];p in m?e[c]=m[p]:(d[p]||B[p]||(k.push(p),d[p]=!0),h&&(n.push(b[a]),h=!1))}if(h){var J=!0;try{b[a][1].apply(null,e)}catch(K){t(K,"runtime")}}}J?C():n.length&&!u&&(u=z(D,100))}}
function D(){var a,c=[];u=E(u);if(!q){A=E(A);for(a=k.length;a--;){var b=k[a];v[b]?(k.splice(a,1),2>v[b]&&(v[b]++,c.push(b))):v[b]=1}q=k.length;c.length&&t(Error("Modules '"+c.join("', '")+"' failed to load"),"loadFailed");if(q){A=z(L,6E4);try{var d=l.createElement("script");d.src=M+"//s2.adform.net/stoat/626/s2.adform.net/load/v/0.0.225/e/"+m.$env.$hash()+"/i/"+m.$ignore+"/r:"+k.sort().join(":");var e=l.__gEBTN__("script")[0];d.onerror=N;e?e.parentNode.insertBefore(d,e):(l.body||l.head).appendChild(d)}catch(h){t(h,"script_insert")}}}}
function N(){w("response_error",this.src)}function L(){q=0;D()}function w(a,c,b,d){var e=[],h=g.Image;Math.random()<(b||.03)&&(e.push((x&&x.host||"//track.adform.net")+"/serving/jslog/"),e.push("?src="),e.push(encodeURIComponent(a)),e.push("&msg="),e.push(encodeURIComponent(c)),e.push("&level="),e.push(encodeURIComponent(d||"error")),a=h?new h(1,1):l.createElement("img"),a.src=e.join(""))}function t(a,c){var b=""+(a.stack||a);0>b.indexOf(a.message||"")&&(b=a+"\n"+b);z(function(){throw b;},0);w(c,
b)}function F(){for(var a=arguments,c=0,b=a.length,d=[];c<b;c++)O(a[c])||d.push(a[c]);return d.length?G.apply(f,d):f.length}function O(a){function c(e){e.apply(null,a.slice(1))}var b=a[0],d=m[b];d?c(d):r([b],c)}var y,G,u,A,k,f=g._adfq||(g._adfq=[]),l=g.document,z=g.setTimeout,E=g.clearTimeout,x=g.Adform,M=x&&"https:"===(x.shost||"").split("/")[0]||"https:"===g.location.protocol?"https:":"http:",m={require:r,$boot:{window:g,require:r,rethrow:t,log:w,deprecate:function(a,c,b){var d=!1;return function(){d||
(w("deprecate",c,b,"info"),d=!0);return a.apply(this,arguments)}}}},q=0,n=[],B={},v={};l.__gEBTN__=l.getElementsByTagName;(function(){if(f.define)y=f.define,f.define=H;else{G=f.push;f.define=I;f.push=F;var a=f.slice();f.length=0;F.apply(f,a)}})()})(window);
(function(a,j,c,b,g,Q,O,P,R,S,e,J,x,L,M,z,B,N,K,f){
a(j,[c],function(c){c=c.window;var a=c.Adform||{},d=a.ET||{},b=a.RMB||{},e=b.Content||{};b.Type=b.Type||{};b.Content=e;a.ET=d;a.RMB=b;return c.Adform=a});
a(b,[c],function(T){function xa(k){return k}function ya(){function k(){for(var a=1,c=v;a<l.length&&!l[a];a++)c=c.parent;try{return c==c.Function("return window")()}catch(e){}}function w(a,c){var e=c.charAt(0).toUpperCase()+c.slice(1);return m(a,c,"ms"+e,"moz"+e,"webkit"+e)}function m(a){for(var c=arguments,e=c.length;--e;)if(c[e]in a)return c[e]}function f(a,c){return 0<=(""+a).toLowerCase().indexOf(c.toLowerCase())}var b=T.window,g=b.document,B=g.documentElement,n=b.navigator,v=b.parent,
r=n.vendor,d=n.userAgent,C=b.location||{},D=g.createElement("div"),l=function(a){for(var c,e=100,h=a.top,p=[!0];--e&&a&&a!=h&&a!=a.parent;){try{c=!!(a=a.parent).Image}catch(U){c=!1}p.push(c)}return p}(b),x=b!=v,H=!x||l[1],t=!x||l[l.length-1],V=x&&k(),za=function(){var a=n.plugins,c=n.mimeTypes,e=b.ActiveXObject,h=26;a=a&&a["Shockwave Flash"]&&(!c||!c["application/x-shockwave-flash"]||c["application/x-shockwave-flash"].enabledPlugin)&&(a["Shockwave Flash"].version||a["Shockwave Flash"].description)||
"";if(!a&&e)for(;6<=h--;)try{var p=new e("ShockwaveFlash.ShockwaveFlash."+h);6==h&&(p.AllowScriptAccess="always",a="WIN 6.0.21.0");try{a=p.GetVariable("$version").replace(/,/g,".")}catch(U){}break}catch(U){}return parseFloat(a.replace(/^.*?(\d+[\.,].*$)/,"$1").replace(/(^\d+\.)|\./g,"$1"))||0}(),W=w(g,"hidden"),I=!!W,E=/MSIE|Trident/i.test(d),X=E&&("Microsoft Internet Explorer"===n.appName&&/MSIE (\d+[\.\d]*)/i.exec(d)||/rv:(\d+[\.\d]*)/i.exec(d))?parseFloat(RegExp.$1):-1;D=m(D,"addEventListener");
var Y=f(d,"Macintosh"),F=f(r,"apple computer"),J=f(d,"ipad"),K=f(d,"iphone"),u=J||K;var y=u&&(y=/\sos\s(\d+)_\d+/i.exec(d))&&(y=4<y[1]>>0);var L=f(r,"google"),M=!u&&f(d,"android"),Z="ontouchstart"in g||"ontouchstart"in b,N=(F||L)&&/(chrome|crios)+\/[\d\.]+\s/i.test(d),Aa=N&&/[chrome|crios]+\/([\d\.]+)\s/i.exec(d)[1],G=/Firefox\/[\d\.]+/i.test(d),aa=f(d,"opera");r=f(d,"opr")&&f(r,"opera software");var z=!/Chrome|CriOS|Skyfire/i.test(d)&&/Safari+\/[\.\d]+$/i.test(d)&&F;d=E&&(f(d,"IEMobile")||f(d,"WPDesktop"));
var ba=z&&!("webkitRequestAnimationFrame"in b),ca="screenX"in b,da="outerWidth"in b,ea="mozInnerScreenX"in b;B=B.msContentZoomFactor;var fa=!(!g.fireEvent||!g.attachEvent),Ba=w(b,"requestAnimationFrame"),ha=u&&!z&&!n.standalone,ia=m(b,"IntersectionObserver")&&!G;C=!!("srcdoc"in g.createElement("iframe"))&&f(C.href,"adform.com")&&!G;var O=u||M,q=t?b.top.omid3p:b.omid3p;if(!q)try{q=b.frames.omid_v1_present||b.top.frames.omid_v1_present}catch(a){}q=!!q;var ja=I&&!q&&!O&&!d&&t&&m(g,"hasFocus"),ka=!t&&
11==X,A=b.wisp,la=A&&A.sdk&&A.sdk.platform,ma=z&&!t,na=b._adform&&b._adform.tagFrame,oa=!!na,pa=function(a){for(var c=l.length,e,h=0;h<c;h++)l[h]&&(e=a.mraid||e),a=a.parent;return e}(b),P=!!pa,Q=n.sendBeacon&&!P,qa=!(!b.XMLHttpRequest&&!Q||!b.FormData)&&!b.XDomainRequest,Ca=function(){for(var a=b,c=v,e=l,h=1,p=e.length;h<p;h++)e[h]&&(a=c),c=c.parent;return a}(),R=H&&v.getVPAIDAd&&v.getVPAIDAd(),ra=!(!R||!R.on),sa=!!b.chrome;g=""===g.referrer&&""===g.domain;if("android"==la||"ios"==la)for(var ta in A)if(/^adObject.+/i.test(ta)){var ua=
A[ta].inscreen;var va=!!ua;break}return{result:[x,H,t,V,I,E,D,Y,F,J,K,u,y,L,M,Z,N,G,aa,r,z,d,ba,ca,da,ea,B,fa,!1,ha,ia,C,O,q,ja,ka,va,ma,oa,P,Q,qa,ra,sa,g],exports:{nop:function(){},access:l,frame:x,accParent:H,accTop:t,isolate:V,flashVersion:za,hidden:W,hasHidden:I,isIE:E,ieVersion:X,addEvent:D,isMac:Y,isApple:F,isIPad:J,isIPhone:K,isIOS:u,isIOSF:y,isGoogle:L,isAndroid:M,isTouch:Z,isChrome:N,chromeVersion:Aa,isFirefox:G,isOpera:aa,isOperaWebkit:r,isSafari:z,isIEMobile:d,isSafari5OrLess:ba,screenX:ca,
outerWidth:da,mozInnerScreenX:ea,msZF:B,ieDomEvents:fa,reqAni:Ba,isRad:!1,isIOSWebView:ha,intersectionAPI:ia,hasSrcDoc:C,isIOSOrAndroid:O,isOMID:q,hasFocus:ja,IEVisibility:ka,isWisp:va,wisp:ua,RAFVisibility:ma,asyncFrame:na,isAsyncFrame:oa,mraid:pa,isMraid:P,hasBeacon:Q,usePOST:qa,topAcc:Ca,VPAID:R,isVPAID:ra,isChromium:sa,forceBackupEdge:g}}}var wa={$hash:function(){if(!S){var k=ya(),w=k.result;k=k.exports;var m=[],f=0,b=w.length,g=0;for(b+=(6-b%6)%6;f<b;f++)g=g<<1|!!w[f],5==f%6&&(m.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.-".charAt(g)),
g=0);for(f in k)wa[f]=k[f];S=m.join("")}return S}},S;try{if(!Function("return ("+xa+")(1)===1")())throw"Incorrect eval result";}catch(k){T.log("function_constructor",k)}return wa});
a(g,[c,b],function(n,e){var g=n.window,r=g.document,A=g.setTimeout;e.$hash();return function(a){var f,l,h,k,B=new Date;var b=a.type;var t=a.placeId,C=/\.js(\?|$)/i,D=/\.swf(\?|$)/i,m=e.isIE,u=e.flashVersion,p=m&&10>e.ieVersion;m=!m&&21>u;var c="standard"==a.type&&"flash"==a.subtype;var E=e.isSafari&&6.1<=e.safariVersion&&c,F=a.fVer||a.ADFVer||a.version,G=a.ADFPoliteSrc,v=a.sources||a.videoSources,w=["src","ADFFlash","ADFInitFlash","bsrc","ADFBuckup"];b=4==a.behavior?"Slider":b.charAt(0).toUpperCase()+
b.slice(1);c=["AdConstructor","types/"+b];if("Standard"==b){for(b=0;b<w.length;b++)(f=a[w[b]])&&(f.match(D)?l=f:f.match(C)?h=f:k=f);k&&p&&(h=0);k&&p&&(v=0);if(F>u||(k||h)&&(m||E))l=0;l?c.push("contents/FlashTag"):h?c.push("contents/HTML"):v&&c.push("contents/VideoTag");(!l&&!h&&k||G)&&c.push("contents/ImageTag")}n.require(c,function x(q,y){var z=q.cbuild;var d="function"!==typeof y&&y;t?(d=r.getElementById(t)||d)?(a.placement=d.nextSibling||d.previousSibling,d&&d.parentNode.removeChild(d),z(a)):1E4>
new Date-B?A(function(){p&&(g.inDapMgrIf||g.inDapIF||g.inFIF)?x(q,r.body.firstChild):x(q)},0):n.rethrow("Failed to find placement","noplacement"):z(a)})}});
a(Q,[c,j],function(g,h){function f(a){return k(a).random()}function k(a){var n={random:l,int32:function(){var e,m=[0,2567483615];if(624<=b)for(e=b=0;624>e;e++){var d=c[e]&2147483648|c[(e+1)%624]&2147483647;c[e]=c[(e+397)%624]^d>>>1^m[d&1]}d=c[b++];d^=d>>>11;d^=d<<7&2636928640;d^=d<<15&4022730752;return(d^d>>>18)>>>0}},c=[],b;a||(a=Math.round(1E5*((new Date).getTime()+Math.random())));c[0]=a>>>0;for(b=1;a=b-1,624>b;b++)a=c[a]^c[a]>>>30,c[b]=(1812433253*((a&4294901760)>>>16)<<16)+1812433253*
(a&65535)+b,c[b]>>>=0;return n}function l(){return Math.floor(this.int32()/65535)}h.random=g.deprecate(f,"Adform.random is deprecated. Use h/random instead.");return f});
a(O,[c,j],function(k,a){function m(e,c){var f=c?9==c.nodeType?c:c.document:n;0<=e.indexOf('"')&&k.log("xss_detected",e);f.write('<script type="text/javascript" src="'+e+'">\x3c/script>')}function p(e){for(var c=a._prepareBannerDataCB,f={},d="ADFVideoCDN ADFDomainCDN ADFDomain VideoCDN ADFVideoCDNList ADFcmpgnID ADFmembID ADFtagID ADFafbanID ADFBanVer ADFBanVerBak ADFbanID ADFbanPlacID ADFUnloadID ADFClientSiteId ADFGeoData ADFDeviceType ADFGroupId ADFTemplateVersion ADFTemplateId ADF_ClickEvent".split(" "),
g=d.length-1;0<=g;g--)d[g]in h&&(f[d[g]]=h[d[g]]);var l=a.RMBData={clicktags:""};a._prepareBannerDataCB=function(){for(var b=d.length-1;0<=b;b--)d[b]in f&&(h[d[b]]=f[d[b]]);a.prepareBannerData(e);for(b in l)a.RMBData[b]="clicktags"!=b?l[b]:a.RMBData[b]+l[b];c&&c()};c||m(a.scriptBase+"bootstrap/Adform.BannerData.js?v="+a.cache)}var h=k.window,n=h.document;a.host&&(ADFDynamicDomain=a.host+"/banners/");a.shost&&(ADFTemplateDomain=a.shost+"/banners/");a.ENV={akamaiHost:("https:"==n.location.protocol?
"https://":"http://")+"s2.adform.net/Banners"};a.Log=a.Log||{sendMessage:k.log};a.loadResource=a.loadResource||m;a.prepareBannerData=a.prepareBannerData||p;return{loadResource:a.loadResource,prepareBannerData:a.prepareBannerData}});
a(P,function(){function f(a,c){this.delimiter=c||";";a=a||"";var b=a.split(";oobclicktrack=");b.shift();b.length&&(this.tracks=b);b=a.split("?");this._base=b.shift();this._parts=b.join("?").split(this.delimiter);this.append=[]}function g(a,c,b){var d=a.length;c+="=";var k=c.length;for(b||(c=c.toLowerCase());d--;){var h=a[d].slice(0,k);b||(h=h.toLowerCase());if(h===c)break}return d}var l=Object.prototype.hasOwnProperty,e=f.prototype;e.copy=function(){var a,c=new f;for(a in this)l.call(this,a)&&
(c[a]=this[a]&&this[a].slice?this[a].slice(0):this[a]);return c};e.get=function(a,c){var b=this._parts,d=g(b,a,c);if(~d)return b[d].slice(a.length+1)};e.set=function(a,c,b){var d=this._parts;b=g(d,a,b);0>b?d.push(a+"="+c):d[b]=d[b].slice(0,a.length+1)+c;return this};e.unset=function(a,c){var b=this._parts,d=g(b,a,c);~d&&b.splice(d,1);return this};e.toString=function(){return this._base+"?"+this._parts.join(this.delimiter)+this.append.join("")};return f});
a(R,[c,b,O],function(l,m,v){var a=l.window,d=a.document,n=v.loadResource,p=m.isIE&&10>m.ieVersion;return function(q,f){function r(){a[e](!0,!0)}function w(b){b||l.log("dv_not_blocked",f.BN,1,"info")}function t(b){var c=d.createElement("div");c.innerHTML=b;return c.firstChild}function x(b){var c=d.createElement("script");c.src=b;return c}function h(b,c){b.appendChild(c)}var g=d.body,e="_adform_dv_"+ +new Date+"_"+(Math.random()+"").slice(2);a[e]=function(b,c){a[e]=w;
a.removeEventListener&&a.removeEventListener("pagehide",r,!0);b&&f.set("bsdata",f.BSDATA);var u=f.toString();c?(new a.Image).src=u:n(u)};a.addEventListener&&a.addEventListener("pagehide",r,!0);var k='<script type="text/adtag"><script>'+e+"();</scr+ipt>\x3c/script>";p&&(k+='<script type="text/passback"><script>'+e+'("P");</scr+ipt>\x3c/script>');a.replaceDocumentWrite&&d.writeln===d.write&&g?(h(g,t(k)),h(g,x(q)),h(g,t("<script>\x3c/script>"))):(d.write(k),n(q),p||d.write("<script>"+e+'("F");\x3c/script>'))}});
a(S,[c,b],function(m,g){function h(a,b){for(var c=[],d,f,e,k=0;k<a.length;k++)if(d=a[k])for(var l=0;l<b.length;l++)f=b[l],((e=d[f])||0==e)&&c.push(e);return c}return function(){if(!g.accTop)return"";var a=m.window.top,b=a.document,c=b.documentElement,d=b.body;b=h([a,c,d],["pageYOffset","scrollTop"])[0];var f=Math.max.apply(null,h([c,d],["scrollHeight","offsetHeight","clientHeight"]));a=h([a,c,d],["innerHeight","clientHeight"])[0];a=f==a&&0==b;if(!a&&g.isMraid)var e=(g.mraid||{}).IS_GMA_SDK;
return a||e?1:0}});
a(e,function(){function v(a,b){try{var c=a.frames}catch(e){}if(c){(b=b||[]).push(a);for(var d=0;c&&d<c.length;d++)v(a.frames[d],b)}return b}function w(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent&&a.attachEvent("on"+b,c)}function x(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)}function y(a){var b=a.data;"string"===typeof b&&(b=h(function(){return window.JSON.parse(b)}));b&&(b=b.__uspapiReturn||{});b&&b.success&&(x(window,
"message",y),z(b.returnValue))}function z(a){if(a=void 0===a?{}:a)k("Adform",{}).us_privacy=a.uspString}function A(a,b,c){b=void 0===b?1E4:b;c=void 0===c?!1:c;B();g||window.__tcfapi?(c?l.push(a):m.push(a),r(),J(function(){var d=[C(m,a),C(l,a)],e=k("Adform",{}),n=e.gdpr,D=e.gdpr_consent,E=e.adform_consent;e=e.us_privacy;if(-1<d[0])m.splice(d[0],1)[0]({gdpr:n,gdpr_consent:D,adform_consent:E,us_privacy:e});if(-1<d[1])l.splice(d[1],1)[0]({gdpr:n,gdpr_consent:D,adform_consent:E,us_privacy:e})},b)):a(null,
"CMP not found.")}function B(){if(!g){var a=F("__tcfapiLocator");a.frameRef&&(g=a.frameRef,p=a.isCrossDomain)}return{cmpFrame:g,isCrossDomain:p}}function r(){if(p&&g&&g.postMessage){var a=window.__tcfapi;x(window,"message",G);w(window,"message",G);g.postMessage({__tcfapiCall:{command:"addEventListener",callId:K++}},"*")}else a=g&&!p?g.__tcfapi:window.__tcfapi;a&&h(function(){return a("addEventListener",null,H)})}function G(a){var b=a.data;"string"===typeof b&&(b=h(function(){return window.JSON.parse(b)}));
b&&(b=(b.__tcfapiReturn||{}).returnValue);b&&null!=b.gdprApplies&&(a=b,H({gdprApplies:a.gdprApplies,tcString:a.tcString,purpose:a.purpose,vendor:a.vendor,restrictions:a.restrictions,eventStatus:a.eventStatus}))}function H(a){if((a=void 0===a?{}:a)&&"cmpuishown"!==a.eventStatus){var b=I(a.gdprApplies),c=k("Adform",{});c.gdpr=b;c.gdpr_consent=a.tcString;if(b=!(!a.purpose||!a.vendor)||0===b){var d=a;a=d.gdprApplies;var e=t(d,"purpose.consents.1",!1),n=t(d,"vendor.consents.50",!1);d=t(d,"restrictions.1.50",
1);a=0===I(a)?!0:e&&n&&0!==d;c.adform_consent=a}a=c.gdpr;e=c.gdpr_consent;c=c.adform_consent;if(void 0!==c&&b)for(;l.length;)l.shift()({gdpr:a,gdpr_consent:e,adform_consent:c});for(;m.length;)m.shift()({gdpr:a,gdpr_consent:e,adform_consent:c})}}function I(a){if("1"==a)return 1;if("0"==a)return 0}function C(a,b){var c=a.length;if(a.indexOf)return a.indexOf(b);for(;c--&&a[c]!==b;);return c}function t(a,b,c){b=b.split(".");for(var d=0;d<b.length;d++)if(a=a[b[d]],void 0===a){a=c;break}return a}var k=
function(a,b){var c,d,e=v(window.top);for(c=e.length;c--;)try{if((d=e[c])&&(d=d[a])&&(d=d.shared))return d}catch(n){}return window[a].shared=b},h=function(a){try{return a()}catch(b){}},F=function(a){for(var b,c,d=window;d;){if(h(function(){return d.frames[a]})){b=d;break}if(d===L)break;d=d.parent}b&&(c=!h(function(){return!!b.document.getElementById}));return{frameRef:b,isCrossDomain:c}},L=window.top;window.Adform=window.Adform||{};var u=window.__uspapi,q=F("__uspapiLocator"),f=q.frameRef;(q=q.isCrossDomain)&&
f&&f.postMessage?(w(window,"message",y),f.postMessage({__uspapiCall:{command:"getUSPData",version:1,callId:1}},"*")):f&&!q&&f.__uspapi&&(u=f.__uspapi);u&&h(function(){return u("getUSPData",1,z)});var J=window.setTimeout,g,p,K=1,m=[],l=[];f=window.Adform=window.Adform||{};f.getConsent=function(){r();var a=k("Adform",{});return{gdpr:a.gdpr,gdpr_consent:a.gdpr_consent,us_privacy:a.us_privacy}};f.waitForConsent=A;f.hasConsent=function(a){A(function(b){a(null===b?!0:b.adform_consent)},1E4,!0)};f.getUSPString=
function(){return k("Adform",{}).us_privacy};B();k("Adform",{});r();return window.Adform});
a(J,[c,b,j,g,Q,O,P,R,S,e],function(y,u,k,T,z,e,H,U,V,I){function v(){if(w)return w;this.banners={};this.compoundBanners={};try{m.body||m.write('<html><body style="margin:0px;padding:0px;overflow:hidden;"></body></html>')}catch(c){}var a=r.browserLanguage||r.language||0;var b=this.getWin();this.settings=[escape(r.systemLanguage||a),escape(a),t?t.width+"X"+t.height:0,u.flashVersion,50*Math.round(b.w/
50),50*Math.round(b.h/50),t?t.colorDepth:0,8,3,7,this.hasIframeSanbox()].join("|")}function W(a){function b(l){g(["3rdparty/vendor/Adform"],function(n){n(a,l)})}var c=a.placeId="+ADFP"+a.adfxid,d=a.innerTagId,f=["types/ThirdParty"],g=y.require;m.write('<i id="'+c+'" style="display:none"></i>');d&&(_adform.push([d+".on.setup",b]),f.push("3rdparty/vendor/Adform"));g(f,function(l){l(a)})}function X(a){if(a=a||k.BannerList&&k.BannerList.shift()||k.RMBData){var b=a.type;var c=a.behavior;var d=a.adfxid||
a.ADFid;a._beforeScript=k._beforeScript;k._beforeScript=!1;({standard:1,expanding:1,singleExpanding:1})[b]&&![0,0,0,1,1][c]&&(a.placeId="+ADFP"+d,b=w.banners[d],m.write('<div id="'+a.placeId+'"'+(b.singleTag?"":' style="width:'+b.width+"px;height:"+b.height+'px;"')+'></div><i style="display:none"></i>'));T(a)}}function J(a,b,c){var d=(c=c||m).createElement("div");d.innerHTML='<iframe src="'+a+'" allowtransparency="true" webkitallowfullscreen mozallowfullscreen allowfullscreen marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no" width="1" height="1" style="'+
b+'"></iframe>';c.body.appendChild(d.removeChild(d.firstChild))}function Y(a,b){var c=new H(a,"&"),d=c.get("gdpr"),f=c.get("gdpr_consent");"0"==d||f?b(a):I.waitForConsent(function(g){g?(c.set("gdpr",g.gdpr),c.set("gdpr_consent",g.gdpr_consent||""),b(c.toString())):b(a)})}function Z(a){var b=u.asyncFrame;var c=a;if("undefined"!=typeof a.URL){try{var d=h.top.location.href.split("#")[0]}catch(f){d=b||h,d=(b=(b=d.location.ancestorOrigins)&&b[b.length-1])||d.document.referrer}d=d?A(d):a.CREFURL;c=new H(a.URL);
c.append.push("&CREFURL="+d);c.CREFURL=d;c.BSURL=a.BSURL;c.BSDATA=a.BSDATA;c.BN=a.BN;c.READ_CONSENT=a.READ_CONSENT;c.ROTSEQ=a.ROTSEQ}return c}function B(a,b){try{if(a){(b=b||[]).push(a);for(var c=0;c<a.frames.length;c++)B(a.frames[c],b);return b}}catch(d){}}function K(a){return z(a+this.id)}function L(a){try{return a.Adform&&a.Adform.ADFUtilInstance}catch(b){}}function M(a,b,c,d){"string"==typeof b&&(b=b.split(";"),3==b.length&&((new C).src=a+"/jsmetrics/?sid="+b[2]+"&rid="+b[1]+"&cid="+b[0]+c+(d?
"&deviceType="+d:"")))}function D(){return(new Date).getTime()}var w,p,x,E,h=y.window,aa=h.top,m=h.document,r=h.navigator,t=h.screen,C=h.Image,ba=Object.prototype.hasOwnProperty,ca=e.loadResource,A=h.encodeURIComponent,F=[];e=v.prototype;var N={webkitVisibilityState:"webkitvisibilitychange",mozVisibilityState:"mozvisibilitychange",msVisibilityState:"msvisibilitychange",visibilityState:"visibilitychange"};_adform=h._adform||[];if(k.ADFBannerUtils)return k.ADFBannerUtils;for(x in N)if(x in m){var O=
x;var P=N[x]}e.getCompoundBannerInfo=function(a){return this.compoundBanners["c"+a]||null};e.createBanner=function(a){var b,c,d=this,f=d.getTagID(),g=d.addNewBanner(f,"undefined"==typeof k.ADFIframe?0:1);a=g.params=Z(a,d);var l=a.get("compoundSeqNo");var n=a.BN,G=d.getCompoundBannerInfo(n),Q=d.getPropByBn("smid",n),R=a.ROTSEQ,S=a.BSURL,da=a.READ_CONSENT;a.tracks&&(g.OOBClickTracks=a.tracks);a.get("singleTag")&&(g.singleTag=!0,l=l||1,a.set("compoundSeqNo",l));g.compoundSeqNo=l;"prerender"==m[O]&&(a.set("hid",
2),g.prerender=!0,m.addEventListener(P,function(){"prerender"!=m[O]&&g.prerender&&(m.removeEventListener(P,arguments.callee,!1),d.registerImpression(g))},!1));if(l){l=d.getRotSeed();var q=l.gen(n);l.compound[n]?c=l.compound[n]:R&&(l.compound[n]=R)}a.set("js",1);a.set("adfxid",f);a.set(Math.floor(11E3*Math.random())+";set",d.settings+"|"+V());q&&a.set("rotseed",q);c&&a.set("rotseq",A(c));G&&a.set("rotseqno",G.replace("r",""));Q&&a.set("smid",Q);k.CDNHost&&a.set("cdnhost",A(k.CDNHost));da&&(q=I.getConsent(),
a.set("cmpgdpr",void 0==q.gdpr?"":q.gdpr),a.set("cmpgdprconsent",void 0==q.gdpr_consent?"":q.gdpr_consent));a.set("fd",u.accTop?""===aa.document.title?"2|2":"0|2":"0|0");q=a.toString();(b=k.RMB)&&(b=b.AdConstructor)&&(b=b.cbuild)||(k.RMB=k.RMB||{},k.RMB.AdConstructor={build:X},k.thirdPartyCB=W);S?U(S,a):ca(q);return g};e.addNewBanner=function(a,b){return this.banners[a]={id:a,type:b,adfserveLoadTime:D()}};e.copyBanner=function(a,b){var c,d=this.banners[a];if(d=d&&d.params||null){d=d.copy();for(c in b)ba.call(b,
c)&&d.set(c,b[c]);d=this.createBanner(d)}return d};e.wipeOutBanner=function(a){var b=this.banners[a];b&&(p&&(p.id=z(),p.compound&&delete p.compound[b.bn]),delete this.compoundBanners["c"+b.bn],delete this.banners[a])};e.addBannerAttribute=function(a,b,c){(a=this.banners[a])&&(a[b]=c)};e.getTagID=function(){var a=this.getRotSeed();a.xId||(a.xId=0);return++a.xId+"x"};e.getRotSeed=function(){var a,b;if(!p&&!E){E=!0;try{var c=B(h.top);var d=0;for(a=c.length;d<a;d++){var f=c[d];if(f!=h&&(b=L(f))&&b.getRotSeed){p=
b.getRotSeed();break}}}catch(g){}p?p.gen=K:p={compound:{},id:z(),gen:K}}E=!1;return p};e.getFlashVersion=y.deprecate(function(){return u.flashVersion},"Utils_getFlash");e.getWin=function(){var a=m.documentElement,b=m.body;return{w:h.innerWidth||a&&a.clientWidth||b&&b.clientWidth,h:h.innerHeight||a&&a.clientHeight||b&&b.clientHeight}};e.getSettings=function(){return this.settings};e.firePixel=function(a){("undefined"==typeof C?m.createElement("img"):new C).src=a};e.fireTargAdPixel=function(a){var b=
this.TargAd||{};b[a]||((this.TargAd=b)[a]=!0,a=a.replace("{gmtr}",Math.floor(9999999999*Math.random())).replace("{gmttzd}",(new Date).getTimezoneOffset()),this.firePixel(a))};e.registerImpression=function(a){if(a&&a.prerender){var b=a.params.copy();b.set("hid",1);a.rotseqno&&b.set("rotseqno",a.rotseqno);var c=m.createElement("script");c.src=b.toString();c.type="text/javascript";m.body.appendChild(c);delete a.prerender}};e.addCompoundBannerInfo=function(a,b){this.compoundBanners["c"+a]="r"+b};e.setBannerRegisteredStatus=
function(a){var b,c=this.banners[a];if(c){var d=D(),f=d-c.adfserveLoadTime,g=parseInt(c.serverTime,10),l=k.ADFEventsInstance;c._host=k.host;c.adfserveLoadTime=f;g&&(g+=Math.round(.5*f),c.serverTime=g,c.timeDiff=g-d);c.registered=1;this.sendLoadMetrics(a);if(c.singleTag&&1==c.compoundSeqNo){var n=2;for(b=c.syncMembersCount;n<=b;n++)this.copyBanner(a,{compoundSeqNo:n,compoundImpr:0})}try{for(l&&l.register(c),n=0,b=F.length;n<b;n++)F[n].call(this)}catch(G){}}};e.onBannerRegisteredStatus=function(a){F.push(a)};
e.hasIframeSanbox=function(){var a=this._sandbox;if("number"!=typeof a){a=1;try{h.top.document.getElementById,a=0}catch(b){}this._sandbox=a}return a};e.getPropByBn=function(a,b){var c,d=this.banners;for(c in d){var f=d[c];if(f.bn==b&&a in f)return f[a]}};e.now=D;e.getAdfscript=function(a){var b,c,d=/\/adfscript/,f=k.ADFIframe&&{src:h.location.href.replace(/cpjs=2/,"cpjs=0")};if(!f){var g=m.getElementsByTagName("script");for(b=g.length;b--&&!f;)(c=g[b]).src&&c.src.match(d)&&-1<c.src.indexOf(a)&&(f=
c)}return f||{}};e.getUnloadId=function(a){try{for(var b,c,d,f,g=B(h.top),l=g.length;l--;)for(d in b=(c=L(g[l]))&&c.banners,b)if(f=b[d],f.bn==a&&1==f.compoundSeqNo)return f.unloadID}catch(n){}};e.sendLoadMetrics=function(a){a=this.banners[a];var b=(k.shost||"").split("/")[0]+"//"+"s2.adform.net/stoat/626/s2.adform.net/load".replace("/load","")+"/bootstrap.js",c=h.performance;var d=(b=c&&c.getEntriesByName&&c.getEntriesByName(b))&&b[0]&&b[0].duration;b=h.ADFGeoData||a.geoData;c=a.deviceType||h.ADFDeviceType;!a.metricsSent&&.1>Math.random()&&
(d="&adfserve="+a.adfserveLoadTime+(d?"&asset="+parseInt(d,10):""),M(k.host,b,d,c));a.metricsSent=!0};e.sendVideoMetrics=function(a,b){var c=this.banners[a],d=h.ADFGeoData||c.geoData;c=c.deviceType||h.ADFDeviceType;.3>Math.random()&&M(k.host,d,"&video="+b,c)};e.loadFrame=J;e.loadTrackingIframes=function(a){var b=this.getRotSeed();if(a&&a.length&&!b.framesLoaded)for(b.framesLoaded=!0,b=a.length;b--;)Y(a[b],function(c){J(c,"display:none")})};e.ADFCreateObjectCallback=function(a,b){return function(){b.apply(a,
arguments)}};e.eventRegister=function(){};e.getPosition=function(a){for(var b={x:0,y:0};a;)b.x+=a.offsetLeft,b.y+=a.offsetTop,a=a.offsetParent;return b};e.getScrollXY=function(){var a=m.body,b=m.documentElement,c={x:0,y:0};"number"==typeof h.pageYOffset?(c.y=h.pageYOffset,c.x=h.pageXOffset):a&&(a.scrollLeft||a.scrollTop)?(c.y=a.scrollTop,c.x=a.scrollLeft):b&&(b.scrollLeft||b.scrollTop)&&(c.y=b.scrollTop,c.x=b.scrollLeft);return c};e.getBrowser=function(){try{var a=r.userAgent;return~r.appVersion.indexOf("MSIE")&&
0>a.indexOf("Opera")?"MSIE":~a.indexOf("Safari")?"Safari":~a.indexOf("Opera")?"Opera":~a.indexOf("Netscape")?~r.product.indexOf("Gecko")&&(~r.vendor.indexOf("Firefox")||~a.indexOf("Firefox"))?"Firefox":"Netscape":void 0}catch(b){}};k.ADFUtilInstance=w=new v;return k.ADFBannerUtils=v.getInstance=v});
a(x,[c,b],function(c,d){return function(a,e){var b=c.window,f=b.navigator,g=b.Image;try{d.hasBeacon?f.sendBeacon(a,""):(new (e||b).Image).src=a}catch(h){(new g).src=a,c.log("beacon_failure",h+"_"+a,.1,"info")}}});
a(L,[c,j,J,x],function(d,g,h,u){var n=Object.prototype.hasOwnProperty,v=d.window.document;d={Initialized:!1,InitTime:(new Date).getTime(),Host:g.host||("https:"==v.location.protocol?"https://":"http://")+"track.adform.net",callbacks:[],sendEvent:function(c,b,f,p,q){var r,m=Math.round(((new Date).getTime()-this.InitTime)/1E3);var a=t.banners[c];var k=g.adRegister&&g.adRegister[c];try{this.notifyAboutEvent.apply(this,arguments)}catch(w){}if(!a&&k)var e=k.sendEvent(b,
f,p,q);else if(a&&a.isEventsEnabled){e=a.bn;!a._imprID&&1<a.compoundSeqNo&&(a._imprID=t.getUnloadId(e)||a.unloadID);a=["bn",e,"event",b,"time",(0>m?0:m)+"","baid",a.ban,"innerbanner",a.innerban,"asid",f,"name",p,"imprid",a._imprID||a.unloadID,"icid",a.cookieID,"eData",a.eData,"adxvars",a.adxvars,"rtbdata",a.rtbdata,"rtbwp",a.rtbwp,"rnd",Math.floor(1E9*Math.random())];k=0;for(e=[];k<a.length;k+=2)(r=a[k+1])&&e.push(a[k]+"="+encodeURIComponent(r));e=this.Host+"/Serving/Event/?"+e.join("&")+(q||"");
86400>m&&u(e)}return e},Initialize:d.deprecate(function(){this.Initialized=!0},"initEvents",1),registerCallback:function(c,b){"function"==typeof c&&this.callbacks.push([c,b])},unregisterCallback:function(c){var b=this.callbacks,f=b.length;if("function"==typeof c)for(;f--;)b[f][0]==c&&b.splice(f,1)},notifyAboutEvent:function(){for(var c=this.callbacks.slice(),b=0,f=c.length;b<f;b++)c[b][0].apply(c[b][1]||this,arguments)}};var t=h();if(h=g.Events){for(var l in d)n.call(d,l)&&!n.call(h,l)&&(h[l]=d[l]);
h.sendEvent=d.sendEvent}else h=g.Events=d;g.ADFEvents2||(g.ADFEvents2=h);return d});
a(M,[c,j],function(e,a){function k(b){try{var d=b.URL,l=b.BN,m,f;b=/\/adfscript/;var g=a.ADFIframe&&{src:p.location.href.replace(/cpjs=2/,"cpjs=0")};if(!g){var c=h.getElementsByTagName("script");for(m=c.length;m--&&!g;)(f=c[m]).src&&f.src.match(b)&&-1<f.src.indexOf(l)&&(g=f)}var n=g||h.currentScript||{};var q=h.createElement("div");c=n;d=d.split(";");d[0]+=";srctype=6";for(d=d.join(";");c;){var r="BODY"==c.nodeName;var v="HEAD"==c.nodeName;c=!(r||v)&&c.parentNode}if(r){var t=n.parentNode;
var w=n}else t=h.body;q.innerHTML='<a href="'+a.host+"/C/?bn="+l+';C=0"><img src="'+d+'"></a>';t.insertBefore(q.firstChild,w||null);e.log("fallback",l)}catch(x){e.rethrow(x,"fallback_error")}}var u,p=e.window,h=p.document;e.require(["$ignore"],function(){var b=a.ADFBannerParams;u||(a.ADFUtilInstance||(a.ADFUtilInstance={}),a.ADFBanner||(a.ADFBanner=k),k(b&&b.length?b.shift():a.ADFBannerData))});return{cancel:function(){u=!0},write:k}});
a(z,[j],function(k){function f(){}function g(b){b?this._events&&this._events[b]&&delete this._events[b]:delete this._events;return this}function h(b){var a=this._events;a||(this._events=a={});return a[b]||(a[b]=[])}var l=Array.prototype.slice,e=f.prototype;k.RMB.EventEmitter=f;e.emit=function(b){var a,c,d=this._events;if(d&&(d=d[b])&&(c=d.length)){var m=l.call(arguments,1);d=d.slice();for(a=0;a<c;a++)d[a].apply(this,m)}return this};e.on=function(b,a){this.emit("newListener",b,a);h.call(this,
b).push(a);return this};e.once=function(b,a){var c=function(){return a.apply(this.off(b,c),arguments)};c._oncep=a;return this.on(b,c)};e.off=function(b,a){var c,d=(c=this._events)&&c[b];if(d){for(c=d.length;c--;)d[c]!=a&&d[c]._oncep!=a||d.splice(c,1);d.length||g.call(this,b);this.emit("removeListener",b,a)}return this};e.clear=g;e.list=h;return f});
a(B,[c,J],function(u,x){function n(h,k){for(var g in k)k.hasOwnProperty(g)&&("object"==typeof k[g]?("object"!=typeof h[g]&&(h[g]={}),n(h[g],k[g])):h[g]=k[g])}var r=u.window,y=r.parent,t={useClose:"expImage.useClose",overlay:"overlay",wallpaper:"options.wallpaper",x:"options.x",y:"options.y",hidden:"options.hidden",position:"options.position",adNotice:"options._adNotice",fixedBounding:"options.fixedBounding",resizeInFIF:"options.iabResize",panel:"panel",responsive:"options.responsive",
testPlace:"options.testPlace"};return function(h,k){var g,e,p,v;var c=h.options;var a=c.bn;var d=x();try{var f=((c.iab?y:r)._adform||[]).slice(0)}catch(w){f=[]}var z=/(?:(\d+x|\d+#\d+|#[-_0-9a-z]+|\d+))?\.?(.*)/i,q={};c.iab&&f.push.apply(f,r._adform||[]);d&&d.getPropByBn&&(d=d.getPropByBn("multiPanel",a))&&f.push.apply(f,d);if(d=(c.userParams||{})._adform)try{if((d=Function("return ("+d+")")())&&"object"==typeof d)(f=f||[]).push([c.xId,d]);else throw Error("_adform from userParams should be an object");
}catch(w){u.rethrow(w,"user_params")}if("[object Array]"==Object.prototype.toString.call(f)&&f.length){c=k||["",a,"#"+c.seqNo,a+"#"+c.seqNo,c.xId];a=0;d=c.length;for(v=f.length;a<d;a++)q[c[a]]={};for(a=0;a<v;a++){var b=f[a][0].match(z);if(g=q[b[1]||""]){var l=f[a][1];if(b[2]){b=b[2].split(".");for(p=e={};1<b.length;)e=e[b.shift()]={};e[b[0]]=l;l=p}if(b=l.on)for(m in b){if("function"==typeof b[m])h.events.on(m,b[m])}else if(l.init)h.events.on("init",l.init);b={};for(e in l)t[e]&&(b[e]=l[e]);n(g,b)}}var m=
q[c[0]];for(a=1;a<d;a++)n(m,q[c[a]]);for(a in t)if(a in m){b=t[a].split(".");for(p=e={};1<b.length;)e=e[b.shift()]={};e[b[0]]=m[a];n(h,p)}}}});
a(N,[c,j,J,z,B,x],function(r,n,J,K,L,M){function E(c){for(var e=0,h=c.length;e<h;e++){var a=void 0,k=void 0,w=void 0;var d=c[e];var F=n.scriptBase,G=n.cache;var f=d.xId;var x=d.externalScripts,y=d.trackingPixelUrls;var b=d.banner;var t=b.backup,l=b.type,H=b.innerTagId;var g=b.clickUrls;var N=d.visibility.testMode,O=d.trackingIframeUrls;var q=d.geoLocation;var m={};var p=d.csImpressionUrl;var z=u.banners[f];x&&(w=x.before,k=x.after);
w&&(A(w),n._beforeScript=!0);u.loadTrackingIframes(O);z&&(B(P,d,z),z.isDSPTag="dsp"===d.impressionType,u.setBannerRegisteredStatus(f));if("thirdparty"===l.type){b={bn:b.tagId,xId:f,bannerId:b.id};g={adfxid:f,options:b};H&&(g.innerTagId=H);q=g.events=new K;d=d.banner.script;L(g,[b.bn]);n.thirdPartyCB&&n.thirdPartyCB(g);try{q.emit("setup",g)}catch(C){r.rethrow(C,"setup")}try{(a=b.wrapper)?v.write(Q(a,d)):v.write(d)}catch(C){r.rethrow(C,"thirdPartyWrite")}p&&M(p)}else if("standard"!=l.type||"image"!=
l.subType&&"flash"!=l.subType&&"html"!=l.subType)r.log("rollback",b.tagId+" banner not rendered",1,"error");else{a=b.properties;a={type:l.type,subtype:l.subType,landingPageTarget:a.landingTarget,ADFFlash:b.asset&&b.asset.url||b.url,ADFBuckupClickURL:t&&t.clickUrl||d.clickUrl,width:b.size.width,height:b.size.height,ADFid:f,ADFban:b.tagId,bannerAlign:a.align,clicktags:m,flashvars:m,defaultClickTAG:g[0]&&g[0].name,css:F+"assets/css/Adform.RMB.css?bv="+G,quality:a.quality,wmode:a.wMode,fVer:a.flashVersion};
t&&(a.ADFBuckup=t.url);f=0;for(p=g.length;f<p;f++)m[g[f].name]=encodeURIComponent(g[f].url);B(R,d,m);m.domain=encodeURIComponent(d.staticContentUrl);m.bn=b.tagId;m.geo=[q.city.id,q.region.id,q.country.id].join(";");n.RMB.AdConstructor.build(a)}if(y)for(f=0,p=y.length;f<p;f++)u.fireTargAdPixel(y[f]);k&&A(k);N&&A([F+"unload/Adform.Inscreen.js?"+G])}}function I(){S.apply(this,arguments);E(arguments)}function A(c){for(var e=0;e<c.length;e++)v.write('<script src="'+c[e]+'">\x3c/script>')}function B(c,
e,h){var a;for(a in c){var k=c[a];"string"===typeof k?null!=e[a]&&(h[k]=e[a]):e[a]&&B(k,e[a],h)}}function Q(c,e){var h=v.createElement("div");h.innerHTML=c;var a=h.firstChild;a.innerHTML=e;return a.firstChild&&1==a.firstChild.nodeType?h.innerHTML:e}var D=r.window,v=D.document,S=Array.prototype.push,u=J(),P={visitor:{cookieId:"cookieID",isMobile:"isMobile",gdpr:"gdpr",gdpr_consent:"gdpr_consent",us_privacy:"us_privacy",isCcpaOptOut:"isCcpaOptOut"},csImpressionUrl:"csImpressionUrl",eData:"eData",uData:"uData",
deviceInfo:{deviceType:"deviceType"},interactionId:"unloadID",visibility:{sendUnload:"sendUnloadData",area:"visibilityArea",time:"visibilityTime"},serverTime:"serverTime",banner:{id:"ban",version:"bannerVersion",template:{dcoEngineId:"dcoEngineId"},size:{width:"width",height:"height"},rotationSeqenceNumber:"rotseqno",smId:"smid",tagId:"bn",campaignId:"pm",membershipId:"ms",bannerPlacementId:"bnpl",isEventEnabled:"isEventsEnabled"},isAdNoticeEnabled:"adNotice",publisher:{adxvars:"adxvars",publisherUnloadData:"publisherUnloadData",
visibility:{area:"publisherVisibilityArea",time:"publisherVisibilityTime"}},dsp:{rtbdata:"rtbdata",rtbwp:"rtbwp"},disableFlash:"disableFlash"},R={banner:{clientSiteId:"cid",template:{groupId:"gid",version:"tv",id:"tid"},version:"bv",campaignId:"ADFcmpgnID",membershipId:"ADFmembID",id:"ADFbanID",bannerPlacementId:"ADFbanPlacID",properties:{wMode:"wmode"},dynamicAdContent:"dynamicAdContent"},xId:"ADFid",interactionId:"unloadID",trackingSetupId:"trackingSetupId"};return function(){var c=D.adfjsonbanners;
c?(c.push=I,E(c)):(c=[],c.push=I,D.adfjsonbanners=c)}});
a(K,[c,j,L,M,J,N],function(f,a,g,e,h,k){function c(){var b=a.ADFBannerParams,d=b&&b.length?b.shift():a.ADFBannerData;if(d)try{h().createBanner(d)}catch(l){f.rethrow(l,"create_banner"),e.write(d)}b&&b.length&&c()}a.ADFBanner||(a.ADFBanner=c,a.ADFBanner());k();g.IE=9;e.cancel();return c});
a(f,function(){return"vCAv.IAAAAAUAA"});
})(_adfq.define,"Adform","$boot","$env","$main","h/random","bootstrap/Global","bootstrap/URL","bootstrap/dv","bootstrap/isAppView","consent-amd","bootstrap/Utils","h/beacon","bootstrap/Events","bootstrap/Fallback","common/EventEmitter","api/ARMA","bootstrap/adfjsonbanners","bootstrap/Banner","$ignore");