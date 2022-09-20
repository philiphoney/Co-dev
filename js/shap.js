/**
* [js-shap1, 224, 256, 384, 512]
*
* @version 0.1.0
* @author Philip, Philiphoney
* @license MIT
*
*/

/*
 * [js-sha1]{@link https://github.com/emn178/js-sha1}
 *
 * @version 0.6.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */

!function(){"use strict";function t(t){t?(f[0]=f[16]=f[1]=f[2]=f[3]=f[4]=f[5]=f[6]=f[7]=f[8]=f[9]=f[10]=f[11]=f[12]=f[13]=f[14]=f[15]=0,this.blocks=f):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],this.h0=1732584193,this.h1=4023233417,this.h2=2562383102,this.h3=271733878,this.h4=3285377520,this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0}var h="object"==typeof window?window:{},s=!h.JS_SHA1_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node;s&&(h=global);var i=!h.JS_SHA1_NO_COMMON_JS&&"object"==typeof module&&module.exports,e="function"==typeof define&&define.amd,r="0123456789abcdef".split(""),o=[-2147483648,8388608,32768,128],n=[24,16,8,0],a=["hex","array","digest","arrayBuffer"],f=[],u=function(h){return function(s){return new t(!0).update(s)[h]()}},c=function(){var h=u("hex");s&&(h=p(h)),h.create=function(){return new t},h.update=function(t){return h.create().update(t)};for(var i=0;i<a.length;++i){var e=a[i];h[e]=u(e)}return h},p=function(t){var h=eval("require('crypto')"),s=eval("require('buffer').Buffer"),i=function(i){if("string"==typeof i)return h.createHash("sha1").update(i,"utf8").digest("hex");if(i.constructor===ArrayBuffer)i=new Uint8Array(i);else if(void 0===i.length)return t(i);return h.createHash("sha1").update(new s(i)).digest("hex")};return i};t.prototype.update=function(t){if(!this.finalized){var s="string"!=typeof t;s&&t.constructor===h.ArrayBuffer&&(t=new Uint8Array(t));for(var i,e,r=0,o=t.length||0,a=this.blocks;r<o;){if(this.hashed&&(this.hashed=!1,a[0]=this.block,a[16]=a[1]=a[2]=a[3]=a[4]=a[5]=a[6]=a[7]=a[8]=a[9]=a[10]=a[11]=a[12]=a[13]=a[14]=a[15]=0),s)for(e=this.start;r<o&&e<64;++r)a[e>>2]|=t[r]<<n[3&e++];else for(e=this.start;r<o&&e<64;++r)(i=t.charCodeAt(r))<128?a[e>>2]|=i<<n[3&e++]:i<2048?(a[e>>2]|=(192|i>>6)<<n[3&e++],a[e>>2]|=(128|63&i)<<n[3&e++]):i<55296||i>=57344?(a[e>>2]|=(224|i>>12)<<n[3&e++],a[e>>2]|=(128|i>>6&63)<<n[3&e++],a[e>>2]|=(128|63&i)<<n[3&e++]):(i=65536+((1023&i)<<10|1023&t.charCodeAt(++r)),a[e>>2]|=(240|i>>18)<<n[3&e++],a[e>>2]|=(128|i>>12&63)<<n[3&e++],a[e>>2]|=(128|i>>6&63)<<n[3&e++],a[e>>2]|=(128|63&i)<<n[3&e++]);this.lastByteIndex=e,this.bytes+=e-this.start,e>=64?(this.block=a[16],this.start=e-64,this.hash(),this.hashed=!0):this.start=e}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},t.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,h=this.lastByteIndex;t[16]=this.block,t[h>>2]|=o[3&h],this.block=t[16],h>=56&&(this.hashed||this.hash(),t[0]=this.block,t[16]=t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=t[7]=t[8]=t[9]=t[10]=t[11]=t[12]=t[13]=t[14]=t[15]=0),t[14]=this.hBytes<<3|this.bytes>>>29,t[15]=this.bytes<<3,this.hash()}},t.prototype.hash=function(){var t,h,s=this.h0,i=this.h1,e=this.h2,r=this.h3,o=this.h4,n=this.blocks;for(t=16;t<80;++t)h=n[t-3]^n[t-8]^n[t-14]^n[t-16],n[t]=h<<1|h>>>31;for(t=0;t<20;t+=5)s=(h=(i=(h=(e=(h=(r=(h=(o=(h=s<<5|s>>>27)+(i&e|~i&r)+o+1518500249+n[t]<<0)<<5|o>>>27)+(s&(i=i<<30|i>>>2)|~s&e)+r+1518500249+n[t+1]<<0)<<5|r>>>27)+(o&(s=s<<30|s>>>2)|~o&i)+e+1518500249+n[t+2]<<0)<<5|e>>>27)+(r&(o=o<<30|o>>>2)|~r&s)+i+1518500249+n[t+3]<<0)<<5|i>>>27)+(e&(r=r<<30|r>>>2)|~e&o)+s+1518500249+n[t+4]<<0,e=e<<30|e>>>2;for(;t<40;t+=5)s=(h=(i=(h=(e=(h=(r=(h=(o=(h=s<<5|s>>>27)+(i^e^r)+o+1859775393+n[t]<<0)<<5|o>>>27)+(s^(i=i<<30|i>>>2)^e)+r+1859775393+n[t+1]<<0)<<5|r>>>27)+(o^(s=s<<30|s>>>2)^i)+e+1859775393+n[t+2]<<0)<<5|e>>>27)+(r^(o=o<<30|o>>>2)^s)+i+1859775393+n[t+3]<<0)<<5|i>>>27)+(e^(r=r<<30|r>>>2)^o)+s+1859775393+n[t+4]<<0,e=e<<30|e>>>2;for(;t<60;t+=5)s=(h=(i=(h=(e=(h=(r=(h=(o=(h=s<<5|s>>>27)+(i&e|i&r|e&r)+o-1894007588+n[t]<<0)<<5|o>>>27)+(s&(i=i<<30|i>>>2)|s&e|i&e)+r-1894007588+n[t+1]<<0)<<5|r>>>27)+(o&(s=s<<30|s>>>2)|o&i|s&i)+e-1894007588+n[t+2]<<0)<<5|e>>>27)+(r&(o=o<<30|o>>>2)|r&s|o&s)+i-1894007588+n[t+3]<<0)<<5|i>>>27)+(e&(r=r<<30|r>>>2)|e&o|r&o)+s-1894007588+n[t+4]<<0,e=e<<30|e>>>2;for(;t<80;t+=5)s=(h=(i=(h=(e=(h=(r=(h=(o=(h=s<<5|s>>>27)+(i^e^r)+o-899497514+n[t]<<0)<<5|o>>>27)+(s^(i=i<<30|i>>>2)^e)+r-899497514+n[t+1]<<0)<<5|r>>>27)+(o^(s=s<<30|s>>>2)^i)+e-899497514+n[t+2]<<0)<<5|e>>>27)+(r^(o=o<<30|o>>>2)^s)+i-899497514+n[t+3]<<0)<<5|i>>>27)+(e^(r=r<<30|r>>>2)^o)+s-899497514+n[t+4]<<0,e=e<<30|e>>>2;this.h0=this.h0+s<<0,this.h1=this.h1+i<<0,this.h2=this.h2+e<<0,this.h3=this.h3+r<<0,this.h4=this.h4+o<<0},t.prototype.hex=function(){this.finalize();var t=this.h0,h=this.h1,s=this.h2,i=this.h3,e=this.h4;return r[t>>28&15]+r[t>>24&15]+r[t>>20&15]+r[t>>16&15]+r[t>>12&15]+r[t>>8&15]+r[t>>4&15]+r[15&t]+r[h>>28&15]+r[h>>24&15]+r[h>>20&15]+r[h>>16&15]+r[h>>12&15]+r[h>>8&15]+r[h>>4&15]+r[15&h]+r[s>>28&15]+r[s>>24&15]+r[s>>20&15]+r[s>>16&15]+r[s>>12&15]+r[s>>8&15]+r[s>>4&15]+r[15&s]+r[i>>28&15]+r[i>>24&15]+r[i>>20&15]+r[i>>16&15]+r[i>>12&15]+r[i>>8&15]+r[i>>4&15]+r[15&i]+r[e>>28&15]+r[e>>24&15]+r[e>>20&15]+r[e>>16&15]+r[e>>12&15]+r[e>>8&15]+r[e>>4&15]+r[15&e]},t.prototype.toString=t.prototype.hex,t.prototype.digest=function(){this.finalize();var t=this.h0,h=this.h1,s=this.h2,i=this.h3,e=this.h4;return[t>>24&255,t>>16&255,t>>8&255,255&t,h>>24&255,h>>16&255,h>>8&255,255&h,s>>24&255,s>>16&255,s>>8&255,255&s,i>>24&255,i>>16&255,i>>8&255,255&i,e>>24&255,e>>16&255,e>>8&255,255&e]},t.prototype.array=t.prototype.digest,t.prototype.arrayBuffer=function(){this.finalize();var t=new ArrayBuffer(20),h=new DataView(t);return h.setUint32(0,this.h0),h.setUint32(4,this.h1),h.setUint32(8,this.h2),h.setUint32(12,this.h3),h.setUint32(16,this.h4),t};var y=c();i?module.exports=y:(h.sha1=y,e&&define(function(){return y}))}();

/*
 * [js-sha512]{@link https://github.com/emn178/js-sha512}
 *
 * @version 0.8.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2018
 * @license MIT
 */

!function(){"use strict";function h(h,t){t?(p[0]=p[1]=p[2]=p[3]=p[4]=p[5]=p[6]=p[7]=p[8]=p[9]=p[10]=p[11]=p[12]=p[13]=p[14]=p[15]=p[16]=p[17]=p[18]=p[19]=p[20]=p[21]=p[22]=p[23]=p[24]=p[25]=p[26]=p[27]=p[28]=p[29]=p[30]=p[31]=p[32]=0,this.blocks=p):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],384==h?(this.h0h=3418070365,this.h0l=3238371032,this.h1h=1654270250,this.h1l=914150663,this.h2h=2438529370,this.h2l=812702999,this.h3h=355462360,this.h3l=4144912697,this.h4h=1731405415,this.h4l=4290775857,this.h5h=2394180231,this.h5l=1750603025,this.h6h=3675008525,this.h6l=1694076839,this.h7h=1203062813,this.h7l=3204075428):256==h?(this.h0h=573645204,this.h0l=4230739756,this.h1h=2673172387,this.h1l=3360449730,this.h2h=596883563,this.h2l=1867755857,this.h3h=2520282905,this.h3l=1497426621,this.h4h=2519219938,this.h4l=2827943907,this.h5h=3193839141,this.h5l=1401305490,this.h6h=721525244,this.h6l=746961066,this.h7h=246885852,this.h7l=2177182882):224==h?(this.h0h=2352822216,this.h0l=424955298,this.h1h=1944164710,this.h1l=2312950998,this.h2h=502970286,this.h2l=855612546,this.h3h=1738396948,this.h3l=1479516111,this.h4h=258812777,this.h4l=2077511080,this.h5h=2011393907,this.h5l=79989058,this.h6h=1067287976,this.h6l=1780299464,this.h7h=286451373,this.h7l=2446758561):(this.h0h=1779033703,this.h0l=4089235720,this.h1h=3144134277,this.h1l=2227873595,this.h2h=1013904242,this.h2l=4271175723,this.h3h=2773480762,this.h3l=1595750129,this.h4h=1359893119,this.h4l=2917565137,this.h5h=2600822924,this.h5l=725511199,this.h6h=528734635,this.h6l=4215389547,this.h7h=1541459225,this.h7l=327033209),this.bits=h,this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1}function t(t,s,e){var r,n=typeof t;if("string"!==n){if("object"!==n)throw new Error(i);if(null===t)throw new Error(i);if(a&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!(Array.isArray(t)||a&&ArrayBuffer.isView(t)))throw new Error(i);r=!0}var o=t.length;if(!r){for(var l,f=[],c=(o=t.length,0),u=0;u<o;++u)(l=t.charCodeAt(u))<128?f[c++]=l:l<2048?(f[c++]=192|l>>6,f[c++]=128|63&l):l<55296||l>=57344?(f[c++]=224|l>>12,f[c++]=128|l>>6&63,f[c++]=128|63&l):(l=65536+((1023&l)<<10|1023&t.charCodeAt(++u)),f[c++]=240|l>>18,f[c++]=128|l>>12&63,f[c++]=128|l>>6&63,f[c++]=128|63&l);t=f}t.length>128&&(t=new h(s,!0).update(t).array());var y=[],p=[];for(u=0;u<128;++u){var d=t[u]||0;y[u]=92^d,p[u]=54^d}h.call(this,s,e),this.update(p),this.oKeyPad=y,this.inner=!0,this.sharedMemory=e}var i="input is invalid type",s="object"==typeof window,e=s?window:{};e.JS_SHA512_NO_WINDOW&&(s=!1);var r=!s&&"object"==typeof self;!e.JS_SHA512_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node?e=global:r&&(e=self);var n=!e.JS_SHA512_NO_COMMON_JS&&"object"==typeof module&&module.exports,o="function"==typeof define&&define.amd,a=!e.JS_SHA512_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,l="0123456789abcdef".split(""),f=[-2147483648,8388608,32768,128],c=[24,16,8,0],u=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591],y=["hex","array","digest","arrayBuffer"],p=[];!e.JS_SHA512_NO_NODE_JS&&Array.isArray||(Array.isArray=function(h){return"[object Array]"===Object.prototype.toString.call(h)}),!a||!e.JS_SHA512_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(h){return"object"==typeof h&&h.buffer&&h.buffer.constructor===ArrayBuffer});var d=function(t,i){return function(s){return new h(i,!0).update(s)[t]()}},b=function(t){var i=d("hex",t);i.create=function(){return new h(t)},i.update=function(h){return i.create().update(h)};for(var s=0;s<y.length;++s){var e=y[s];i[e]=d(e,t)}return i},w=function(h,i){return function(s,e){return new t(s,i,!0).update(e)[h]()}},A=function(h){var i=w("hex",h);i.create=function(i){return new t(i,h)},i.update=function(h,t){return i.create(h).update(t)};for(var s=0;s<y.length;++s){var e=y[s];i[e]=w(e,h)}return i};h.prototype.update=function(h){if(this.finalized)throw new Error("finalize already called");var t,s=typeof h;if("string"!==s){if("object"!==s)throw new Error(i);if(null===h)throw new Error(i);if(a&&h.constructor===ArrayBuffer)h=new Uint8Array(h);else if(!(Array.isArray(h)||a&&ArrayBuffer.isView(h)))throw new Error(i);t=!0}for(var e,r,n=0,o=h.length,l=this.blocks;n<o;){if(this.hashed&&(this.hashed=!1,l[0]=this.block,l[1]=l[2]=l[3]=l[4]=l[5]=l[6]=l[7]=l[8]=l[9]=l[10]=l[11]=l[12]=l[13]=l[14]=l[15]=l[16]=l[17]=l[18]=l[19]=l[20]=l[21]=l[22]=l[23]=l[24]=l[25]=l[26]=l[27]=l[28]=l[29]=l[30]=l[31]=l[32]=0),t)for(r=this.start;n<o&&r<128;++n)l[r>>2]|=h[n]<<c[3&r++];else for(r=this.start;n<o&&r<128;++n)(e=h.charCodeAt(n))<128?l[r>>2]|=e<<c[3&r++]:e<2048?(l[r>>2]|=(192|e>>6)<<c[3&r++],l[r>>2]|=(128|63&e)<<c[3&r++]):e<55296||e>=57344?(l[r>>2]|=(224|e>>12)<<c[3&r++],l[r>>2]|=(128|e>>6&63)<<c[3&r++],l[r>>2]|=(128|63&e)<<c[3&r++]):(e=65536+((1023&e)<<10|1023&h.charCodeAt(++n)),l[r>>2]|=(240|e>>18)<<c[3&r++],l[r>>2]|=(128|e>>12&63)<<c[3&r++],l[r>>2]|=(128|e>>6&63)<<c[3&r++],l[r>>2]|=(128|63&e)<<c[3&r++]);this.lastByteIndex=r,this.bytes+=r-this.start,r>=128?(this.block=l[32],this.start=r-128,this.hash(),this.hashed=!0):this.start=r}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this},h.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var h=this.blocks,t=this.lastByteIndex;h[32]=this.block,h[t>>2]|=f[3&t],this.block=h[32],t>=112&&(this.hashed||this.hash(),h[0]=this.block,h[1]=h[2]=h[3]=h[4]=h[5]=h[6]=h[7]=h[8]=h[9]=h[10]=h[11]=h[12]=h[13]=h[14]=h[15]=h[16]=h[17]=h[18]=h[19]=h[20]=h[21]=h[22]=h[23]=h[24]=h[25]=h[26]=h[27]=h[28]=h[29]=h[30]=h[31]=h[32]=0),h[30]=this.hBytes<<3|this.bytes>>>29,h[31]=this.bytes<<3,this.hash()}},h.prototype.hash=function(){var h,t,i,s,e,r,n,o,a,l,f,c,y,p,d,b,w,A,_,v,B,U,S,g,k,z=this.h0h,E=this.h0l,O=this.h1h,m=this.h1l,x=this.h2h,N=this.h2l,j=this.h3h,J=this.h3l,H=this.h4h,I=this.h4l,R=this.h5h,V=this.h5l,C=this.h6h,K=this.h6l,P=this.h7h,D=this.h7l,F=this.blocks;for(h=32;h<160;h+=2)t=((v=F[h-30])>>>1|(B=F[h-29])<<31)^(v>>>8|B<<24)^v>>>7,i=(B>>>1|v<<31)^(B>>>8|v<<24)^(B>>>7|v<<25),s=((v=F[h-4])>>>19|(B=F[h-3])<<13)^(B>>>29|v<<3)^v>>>6,e=(B>>>19|v<<13)^(v>>>29|B<<3)^(B>>>6|v<<26),v=F[h-32],B=F[h-31],a=((U=F[h-14])>>>16)+(v>>>16)+(t>>>16)+(s>>>16)+((o=(65535&U)+(65535&v)+(65535&t)+(65535&s)+((n=((S=F[h-13])>>>16)+(B>>>16)+(i>>>16)+(e>>>16)+((r=(65535&S)+(65535&B)+(65535&i)+(65535&e))>>>16))>>>16))>>>16),F[h]=a<<16|65535&o,F[h+1]=n<<16|65535&r;var M=z,T=E,W=O,Y=m,q=x,G=N,L=j,Q=J,X=H,Z=I,$=R,hh=V,th=C,ih=K,sh=P,eh=D;for(b=W&q,w=Y&G,h=0;h<160;h+=8)t=(M>>>28|T<<4)^(T>>>2|M<<30)^(T>>>7|M<<25),i=(T>>>28|M<<4)^(M>>>2|T<<30)^(M>>>7|T<<25),s=(X>>>14|Z<<18)^(X>>>18|Z<<14)^(Z>>>9|X<<23),e=(Z>>>14|X<<18)^(Z>>>18|X<<14)^(X>>>9|Z<<23),A=(l=M&W)^M&q^b,_=(f=T&Y)^T&G^w,g=X&$^~X&th,k=Z&hh^~Z&ih,v=F[h],B=F[h+1],v=(a=((U=u[h])>>>16)+(v>>>16)+(g>>>16)+(s>>>16)+(sh>>>16)+((o=(65535&U)+(65535&v)+(65535&g)+(65535&s)+(65535&sh)+((n=((S=u[h+1])>>>16)+(B>>>16)+(k>>>16)+(e>>>16)+(eh>>>16)+((r=(65535&S)+(65535&B)+(65535&k)+(65535&e)+(65535&eh))>>>16))>>>16))>>>16))<<16|65535&o,B=n<<16|65535&r,U=(a=(A>>>16)+(t>>>16)+((o=(65535&A)+(65535&t)+((n=(_>>>16)+(i>>>16)+((r=(65535&_)+(65535&i))>>>16))>>>16))>>>16))<<16|65535&o,S=n<<16|65535&r,sh=(a=(L>>>16)+(v>>>16)+((o=(65535&L)+(65535&v)+((n=(Q>>>16)+(B>>>16)+((r=(65535&Q)+(65535&B))>>>16))>>>16))>>>16))<<16|65535&o,eh=n<<16|65535&r,t=((L=(a=(U>>>16)+(v>>>16)+((o=(65535&U)+(65535&v)+((n=(S>>>16)+(B>>>16)+((r=(65535&S)+(65535&B))>>>16))>>>16))>>>16))<<16|65535&o)>>>28|(Q=n<<16|65535&r)<<4)^(Q>>>2|L<<30)^(Q>>>7|L<<25),i=(Q>>>28|L<<4)^(L>>>2|Q<<30)^(L>>>7|Q<<25),s=(sh>>>14|eh<<18)^(sh>>>18|eh<<14)^(eh>>>9|sh<<23),e=(eh>>>14|sh<<18)^(eh>>>18|sh<<14)^(sh>>>9|eh<<23),A=(c=L&M)^L&W^l,_=(y=Q&T)^Q&Y^f,g=sh&X^~sh&$,k=eh&Z^~eh&hh,v=F[h+2],B=F[h+3],v=(a=((U=u[h+2])>>>16)+(v>>>16)+(g>>>16)+(s>>>16)+(th>>>16)+((o=(65535&U)+(65535&v)+(65535&g)+(65535&s)+(65535&th)+((n=((S=u[h+3])>>>16)+(B>>>16)+(k>>>16)+(e>>>16)+(ih>>>16)+((r=(65535&S)+(65535&B)+(65535&k)+(65535&e)+(65535&ih))>>>16))>>>16))>>>16))<<16|65535&o,B=n<<16|65535&r,U=(a=(A>>>16)+(t>>>16)+((o=(65535&A)+(65535&t)+((n=(_>>>16)+(i>>>16)+((r=(65535&_)+(65535&i))>>>16))>>>16))>>>16))<<16|65535&o,S=n<<16|65535&r,th=(a=(q>>>16)+(v>>>16)+((o=(65535&q)+(65535&v)+((n=(G>>>16)+(B>>>16)+((r=(65535&G)+(65535&B))>>>16))>>>16))>>>16))<<16|65535&o,ih=n<<16|65535&r,t=((q=(a=(U>>>16)+(v>>>16)+((o=(65535&U)+(65535&v)+((n=(S>>>16)+(B>>>16)+((r=(65535&S)+(65535&B))>>>16))>>>16))>>>16))<<16|65535&o)>>>28|(G=n<<16|65535&r)<<4)^(G>>>2|q<<30)^(G>>>7|q<<25),i=(G>>>28|q<<4)^(q>>>2|G<<30)^(q>>>7|G<<25),s=(th>>>14|ih<<18)^(th>>>18|ih<<14)^(ih>>>9|th<<23),e=(ih>>>14|th<<18)^(ih>>>18|th<<14)^(th>>>9|ih<<23),A=(p=q&L)^q&M^c,_=(d=G&Q)^G&T^y,g=th&sh^~th&X,k=ih&eh^~ih&Z,v=F[h+4],B=F[h+5],v=(a=((U=u[h+4])>>>16)+(v>>>16)+(g>>>16)+(s>>>16)+($>>>16)+((o=(65535&U)+(65535&v)+(65535&g)+(65535&s)+(65535&$)+((n=((S=u[h+5])>>>16)+(B>>>16)+(k>>>16)+(e>>>16)+(hh>>>16)+((r=(65535&S)+(65535&B)+(65535&k)+(65535&e)+(65535&hh))>>>16))>>>16))>>>16))<<16|65535&o,B=n<<16|65535&r,U=(a=(A>>>16)+(t>>>16)+((o=(65535&A)+(65535&t)+((n=(_>>>16)+(i>>>16)+((r=(65535&_)+(65535&i))>>>16))>>>16))>>>16))<<16|65535&o,S=n<<16|65535&r,$=(a=(W>>>16)+(v>>>16)+((o=(65535&W)+(65535&v)+((n=(Y>>>16)+(B>>>16)+((r=(65535&Y)+(65535&B))>>>16))>>>16))>>>16))<<16|65535&o,hh=n<<16|65535&r,t=((W=(a=(U>>>16)+(v>>>16)+((o=(65535&U)+(65535&v)+((n=(S>>>16)+(B>>>16)+((r=(65535&S)+(65535&B))>>>16))>>>16))>>>16))<<16|65535&o)>>>28|(Y=n<<16|65535&r)<<4)^(Y>>>2|W<<30)^(Y>>>7|W<<25),i=(Y>>>28|W<<4)^(W>>>2|Y<<30)^(W>>>7|Y<<25),s=($>>>14|hh<<18)^($>>>18|hh<<14)^(hh>>>9|$<<23),e=(hh>>>14|$<<18)^(hh>>>18|$<<14)^($>>>9|hh<<23),A=(b=W&q)^W&L^p,_=(w=Y&G)^Y&Q^d,g=$&th^~$&sh,k=hh&ih^~hh&eh,v=F[h+6],B=F[h+7],v=(a=((U=u[h+6])>>>16)+(v>>>16)+(g>>>16)+(s>>>16)+(X>>>16)+((o=(65535&U)+(65535&v)+(65535&g)+(65535&s)+(65535&X)+((n=((S=u[h+7])>>>16)+(B>>>16)+(k>>>16)+(e>>>16)+(Z>>>16)+((r=(65535&S)+(65535&B)+(65535&k)+(65535&e)+(65535&Z))>>>16))>>>16))>>>16))<<16|65535&o,B=n<<16|65535&r,U=(a=(A>>>16)+(t>>>16)+((o=(65535&A)+(65535&t)+((n=(_>>>16)+(i>>>16)+((r=(65535&_)+(65535&i))>>>16))>>>16))>>>16))<<16|65535&o,S=n<<16|65535&r,X=(a=(M>>>16)+(v>>>16)+((o=(65535&M)+(65535&v)+((n=(T>>>16)+(B>>>16)+((r=(65535&T)+(65535&B))>>>16))>>>16))>>>16))<<16|65535&o,Z=n<<16|65535&r,M=(a=(U>>>16)+(v>>>16)+((o=(65535&U)+(65535&v)+((n=(S>>>16)+(B>>>16)+((r=(65535&S)+(65535&B))>>>16))>>>16))>>>16))<<16|65535&o,T=n<<16|65535&r;a=(z>>>16)+(M>>>16)+((o=(65535&z)+(65535&M)+((n=(E>>>16)+(T>>>16)+((r=(65535&E)+(65535&T))>>>16))>>>16))>>>16),this.h0h=a<<16|65535&o,this.h0l=n<<16|65535&r,a=(O>>>16)+(W>>>16)+((o=(65535&O)+(65535&W)+((n=(m>>>16)+(Y>>>16)+((r=(65535&m)+(65535&Y))>>>16))>>>16))>>>16),this.h1h=a<<16|65535&o,this.h1l=n<<16|65535&r,a=(x>>>16)+(q>>>16)+((o=(65535&x)+(65535&q)+((n=(N>>>16)+(G>>>16)+((r=(65535&N)+(65535&G))>>>16))>>>16))>>>16),this.h2h=a<<16|65535&o,this.h2l=n<<16|65535&r,a=(j>>>16)+(L>>>16)+((o=(65535&j)+(65535&L)+((n=(J>>>16)+(Q>>>16)+((r=(65535&J)+(65535&Q))>>>16))>>>16))>>>16),this.h3h=a<<16|65535&o,this.h3l=n<<16|65535&r,a=(H>>>16)+(X>>>16)+((o=(65535&H)+(65535&X)+((n=(I>>>16)+(Z>>>16)+((r=(65535&I)+(65535&Z))>>>16))>>>16))>>>16),this.h4h=a<<16|65535&o,this.h4l=n<<16|65535&r,a=(R>>>16)+($>>>16)+((o=(65535&R)+(65535&$)+((n=(V>>>16)+(hh>>>16)+((r=(65535&V)+(65535&hh))>>>16))>>>16))>>>16),this.h5h=a<<16|65535&o,this.h5l=n<<16|65535&r,a=(C>>>16)+(th>>>16)+((o=(65535&C)+(65535&th)+((n=(K>>>16)+(ih>>>16)+((r=(65535&K)+(65535&ih))>>>16))>>>16))>>>16),this.h6h=a<<16|65535&o,this.h6l=n<<16|65535&r,a=(P>>>16)+(sh>>>16)+((o=(65535&P)+(65535&sh)+((n=(D>>>16)+(eh>>>16)+((r=(65535&D)+(65535&eh))>>>16))>>>16))>>>16),this.h7h=a<<16|65535&o,this.h7l=n<<16|65535&r},h.prototype.hex=function(){this.finalize();var h=this.h0h,t=this.h0l,i=this.h1h,s=this.h1l,e=this.h2h,r=this.h2l,n=this.h3h,o=this.h3l,a=this.h4h,f=this.h4l,c=this.h5h,u=this.h5l,y=this.h6h,p=this.h6l,d=this.h7h,b=this.h7l,w=this.bits,A=l[h>>28&15]+l[h>>24&15]+l[h>>20&15]+l[h>>16&15]+l[h>>12&15]+l[h>>8&15]+l[h>>4&15]+l[15&h]+l[t>>28&15]+l[t>>24&15]+l[t>>20&15]+l[t>>16&15]+l[t>>12&15]+l[t>>8&15]+l[t>>4&15]+l[15&t]+l[i>>28&15]+l[i>>24&15]+l[i>>20&15]+l[i>>16&15]+l[i>>12&15]+l[i>>8&15]+l[i>>4&15]+l[15&i]+l[s>>28&15]+l[s>>24&15]+l[s>>20&15]+l[s>>16&15]+l[s>>12&15]+l[s>>8&15]+l[s>>4&15]+l[15&s]+l[e>>28&15]+l[e>>24&15]+l[e>>20&15]+l[e>>16&15]+l[e>>12&15]+l[e>>8&15]+l[e>>4&15]+l[15&e]+l[r>>28&15]+l[r>>24&15]+l[r>>20&15]+l[r>>16&15]+l[r>>12&15]+l[r>>8&15]+l[r>>4&15]+l[15&r]+l[n>>28&15]+l[n>>24&15]+l[n>>20&15]+l[n>>16&15]+l[n>>12&15]+l[n>>8&15]+l[n>>4&15]+l[15&n];return w>=256&&(A+=l[o>>28&15]+l[o>>24&15]+l[o>>20&15]+l[o>>16&15]+l[o>>12&15]+l[o>>8&15]+l[o>>4&15]+l[15&o]),w>=384&&(A+=l[a>>28&15]+l[a>>24&15]+l[a>>20&15]+l[a>>16&15]+l[a>>12&15]+l[a>>8&15]+l[a>>4&15]+l[15&a]+l[f>>28&15]+l[f>>24&15]+l[f>>20&15]+l[f>>16&15]+l[f>>12&15]+l[f>>8&15]+l[f>>4&15]+l[15&f]+l[c>>28&15]+l[c>>24&15]+l[c>>20&15]+l[c>>16&15]+l[c>>12&15]+l[c>>8&15]+l[c>>4&15]+l[15&c]+l[u>>28&15]+l[u>>24&15]+l[u>>20&15]+l[u>>16&15]+l[u>>12&15]+l[u>>8&15]+l[u>>4&15]+l[15&u]),512==w&&(A+=l[y>>28&15]+l[y>>24&15]+l[y>>20&15]+l[y>>16&15]+l[y>>12&15]+l[y>>8&15]+l[y>>4&15]+l[15&y]+l[p>>28&15]+l[p>>24&15]+l[p>>20&15]+l[p>>16&15]+l[p>>12&15]+l[p>>8&15]+l[p>>4&15]+l[15&p]+l[d>>28&15]+l[d>>24&15]+l[d>>20&15]+l[d>>16&15]+l[d>>12&15]+l[d>>8&15]+l[d>>4&15]+l[15&d]+l[b>>28&15]+l[b>>24&15]+l[b>>20&15]+l[b>>16&15]+l[b>>12&15]+l[b>>8&15]+l[b>>4&15]+l[15&b]),A},h.prototype.toString=h.prototype.hex,h.prototype.digest=function(){this.finalize();var h=this.h0h,t=this.h0l,i=this.h1h,s=this.h1l,e=this.h2h,r=this.h2l,n=this.h3h,o=this.h3l,a=this.h4h,l=this.h4l,f=this.h5h,c=this.h5l,u=this.h6h,y=this.h6l,p=this.h7h,d=this.h7l,b=this.bits,w=[h>>24&255,h>>16&255,h>>8&255,255&h,t>>24&255,t>>16&255,t>>8&255,255&t,i>>24&255,i>>16&255,i>>8&255,255&i,s>>24&255,s>>16&255,s>>8&255,255&s,e>>24&255,e>>16&255,e>>8&255,255&e,r>>24&255,r>>16&255,r>>8&255,255&r,n>>24&255,n>>16&255,n>>8&255,255&n];return b>=256&&w.push(o>>24&255,o>>16&255,o>>8&255,255&o),b>=384&&w.push(a>>24&255,a>>16&255,a>>8&255,255&a,l>>24&255,l>>16&255,l>>8&255,255&l,f>>24&255,f>>16&255,f>>8&255,255&f,c>>24&255,c>>16&255,c>>8&255,255&c),512==b&&w.push(u>>24&255,u>>16&255,u>>8&255,255&u,y>>24&255,y>>16&255,y>>8&255,255&y,p>>24&255,p>>16&255,p>>8&255,255&p,d>>24&255,d>>16&255,d>>8&255,255&d),w},h.prototype.array=h.prototype.digest,h.prototype.arrayBuffer=function(){this.finalize();var h=this.bits,t=new ArrayBuffer(h/8),i=new DataView(t);return i.setUint32(0,this.h0h),i.setUint32(4,this.h0l),i.setUint32(8,this.h1h),i.setUint32(12,this.h1l),i.setUint32(16,this.h2h),i.setUint32(20,this.h2l),i.setUint32(24,this.h3h),h>=256&&i.setUint32(28,this.h3l),h>=384&&(i.setUint32(32,this.h4h),i.setUint32(36,this.h4l),i.setUint32(40,this.h5h),i.setUint32(44,this.h5l)),512==h&&(i.setUint32(48,this.h6h),i.setUint32(52,this.h6l),i.setUint32(56,this.h7h),i.setUint32(60,this.h7l)),t},h.prototype.clone=function(){var t=new h(this.bits,!1);return this.copyTo(t),t},h.prototype.copyTo=function(h){var t=0,i=["h0h","h0l","h1h","h1l","h2h","h2l","h3h","h3l","h4h","h4l","h5h","h5l","h6h","h6l","h7h","h7l","start","bytes","hBytes","finalized","hashed","lastByteIndex"];for(t=0;t<i.length;++t)h[i[t]]=this[i[t]];for(t=0;t<this.blocks.length;++t)h.blocks[t]=this.blocks[t]},(t.prototype=new h).finalize=function(){if(h.prototype.finalize.call(this),this.inner){this.inner=!1;var t=this.array();h.call(this,this.bits,this.sharedMemory),this.update(this.oKeyPad),this.update(t),h.prototype.finalize.call(this)}},t.prototype.clone=function(){var h=new t([],this.bits,!1);this.copyTo(h),h.inner=this.inner;for(var i=0;i<this.oKeyPad.length;++i)h.oKeyPad[i]=this.oKeyPad[i];return h};var _=b(512);_.sha512=_,_.sha384=b(384),_.sha512_256=b(256),_.sha512_224=b(224),_.sha512.hmac=A(512),_.sha384.hmac=A(384),_.sha512_256.hmac=A(256),_.sha512_224.hmac=A(224),n?module.exports=_:(e.sha512=_.sha512,e.sha384=_.sha384,e.sha512_256=_.sha512_256,e.sha512_224=_.sha512_224,o&&define(function(){return _}))}();


/**
 * [js-sha256]{@link https://github.com/emn178/js-sha256}
 *
 * @version 0.9.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
/*jslint bitwise: true */
(function() {
    'use strict';

    var ERROR = 'input is invalid type';
    var WINDOW = typeof window === 'object';
    var root = WINDOW ? window : {};
    if (root.JS_SHA256_NO_WINDOW) {
        WINDOW = false;
    }
    var WEB_WORKER = !WINDOW && typeof self === 'object';
    var NODE_JS = !root.JS_SHA256_NO_NODE_JS && typeof process === 'object' && process.versions && process.versions.node;
    if (NODE_JS) {
        root = global;
    } else if (WEB_WORKER) {
        root = self;
    }
    var COMMON_JS = !root.JS_SHA256_NO_COMMON_JS && typeof module === 'object' && module.exports;
    var AMD = typeof define === 'function' && define.amd;
    var ARRAY_BUFFER = !root.JS_SHA256_NO_ARRAY_BUFFER && typeof ArrayBuffer !== 'undefined';
    var HEX_CHARS = '0123456789abcdef'.split('');
    var EXTRA = [-2147483648, 8388608, 32768, 128];
    var SHIFT = [24, 16, 8, 0];
    var K = [
        0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
        0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
        0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
        0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
        0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
        0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
        0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
        0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
    ];
    var OUTPUT_TYPES = ['hex', 'array', 'digest', 'arrayBuffer'];

    var blocks = [];

    if (root.JS_SHA256_NO_NODE_JS || !Array.isArray) {
        Array.isArray = function(obj) {
            return Object.prototype.toString.call(obj) === '[object Array]';
        };
    }

    if (ARRAY_BUFFER && (root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
        ArrayBuffer.isView = function(obj) {
            return typeof obj === 'object' && obj.buffer && obj.buffer.constructor === ArrayBuffer;
        };
    }

    var createOutputMethod = function(outputType, is224) {
        return function(message) {
            return new Sha256(is224, true).update(message)[outputType]();
        };
    };

    var createMethod = function(is224) {
        var method = createOutputMethod('hex', is224);
        if (NODE_JS) {
            method = nodeWrap(method, is224);
        }
        method.create = function() {
            return new Sha256(is224);
        };
        method.update = function(message) {
            return method.create().update(message);
        };
        for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
            var type = OUTPUT_TYPES[i];
            method[type] = createOutputMethod(type, is224);
        }
        return method;
    };

    var nodeWrap = function(method, is224) {
        var crypto = eval("require('crypto')");
        var Buffer = eval("require('buffer').Buffer");
        var algorithm = is224 ? 'sha224' : 'sha256';
        var nodeMethod = function(message) {
            if (typeof message === 'string') {
                return crypto.createHash(algorithm).update(message, 'utf8').digest('hex');
            } else {
                if (message === null || message === undefined) {
                    throw new Error(ERROR);
                } else if (message.constructor === ArrayBuffer) {
                    message = new Uint8Array(message);
                }
            }
            if (Array.isArray(message) || ArrayBuffer.isView(message) ||
                message.constructor === Buffer) {
                return crypto.createHash(algorithm).update(new Buffer(message)).digest('hex');
            } else {
                return method(message);
            }
        };
        return nodeMethod;
    };

    var createHmacOutputMethod = function(outputType, is224) {
        return function(key, message) {
            return new HmacSha256(key, is224, true).update(message)[outputType]();
        };
    };

    var createHmacMethod = function(is224) {
        var method = createHmacOutputMethod('hex', is224);
        method.create = function(key) {
            return new HmacSha256(key, is224);
        };
        method.update = function(key, message) {
            return method.create(key).update(message);
        };
        for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
            var type = OUTPUT_TYPES[i];
            method[type] = createHmacOutputMethod(type, is224);
        }
        return method;
    };

    function Sha256(is224, sharedMemory) {
        if (sharedMemory) {
            blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] =
                blocks[4] = blocks[5] = blocks[6] = blocks[7] =
                blocks[8] = blocks[9] = blocks[10] = blocks[11] =
                blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
            this.blocks = blocks;
        } else {
            this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        }

        if (is224) {
            this.h0 = 0xc1059ed8;
            this.h1 = 0x367cd507;
            this.h2 = 0x3070dd17;
            this.h3 = 0xf70e5939;
            this.h4 = 0xffc00b31;
            this.h5 = 0x68581511;
            this.h6 = 0x64f98fa7;
            this.h7 = 0xbefa4fa4;
        } else { // 256
            this.h0 = 0x6a09e667;
            this.h1 = 0xbb67ae85;
            this.h2 = 0x3c6ef372;
            this.h3 = 0xa54ff53a;
            this.h4 = 0x510e527f;
            this.h5 = 0x9b05688c;
            this.h6 = 0x1f83d9ab;
            this.h7 = 0x5be0cd19;
        }

        this.block = this.start = this.bytes = this.hBytes = 0;
        this.finalized = this.hashed = false;
        this.first = true;
        this.is224 = is224;
    }

    Sha256.prototype.update = function(message) {
        if (this.finalized) {
            return;
        }
        var notString, type = typeof message;
        if (type !== 'string') {
            if (type === 'object') {
                if (message === null) {
                    throw new Error(ERROR);
                } else if (ARRAY_BUFFER && message.constructor === ArrayBuffer) {
                    message = new Uint8Array(message);
                } else if (!Array.isArray(message)) {
                    if (!ARRAY_BUFFER || !ArrayBuffer.isView(message)) {
                        throw new Error(ERROR);
                    }
                }
            } else {
                throw new Error(ERROR);
            }
            notString = true;
        }
        var code, index = 0,
            i, length = message.length,
            blocks = this.blocks;

        while (index < length) {
            if (this.hashed) {
                this.hashed = false;
                blocks[0] = this.block;
                blocks[16] = blocks[1] = blocks[2] = blocks[3] =
                    blocks[4] = blocks[5] = blocks[6] = blocks[7] =
                    blocks[8] = blocks[9] = blocks[10] = blocks[11] =
                    blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
            }

            if (notString) {
                for (i = this.start; index < length && i < 64; ++index) {
                    blocks[i >> 2] |= message[index] << SHIFT[i++ & 3];
                }
            } else {
                for (i = this.start; index < length && i < 64; ++index) {
                    code = message.charCodeAt(index);
                    if (code < 0x80) {
                        blocks[i >> 2] |= code << SHIFT[i++ & 3];
                    } else if (code < 0x800) {
                        blocks[i >> 2] |= (0xc0 | (code >> 6)) << SHIFT[i++ & 3];
                        blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
                    } else if (code < 0xd800 || code >= 0xe000) {
                        blocks[i >> 2] |= (0xe0 | (code >> 12)) << SHIFT[i++ & 3];
                        blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
                        blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
                    } else {
                        code = 0x10000 + (((code & 0x3ff) << 10) | (message.charCodeAt(++index) & 0x3ff));
                        blocks[i >> 2] |= (0xf0 | (code >> 18)) << SHIFT[i++ & 3];
                        blocks[i >> 2] |= (0x80 | ((code >> 12) & 0x3f)) << SHIFT[i++ & 3];
                        blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
                        blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
                    }
                }
            }

            this.lastByteIndex = i;
            this.bytes += i - this.start;
            if (i >= 64) {
                this.block = blocks[16];
                this.start = i - 64;
                this.hash();
                this.hashed = true;
            } else {
                this.start = i;
            }
        }
        if (this.bytes > 4294967295) {
            this.hBytes += this.bytes / 4294967296 << 0;
            this.bytes = this.bytes % 4294967296;
        }
        return this;
    };

    Sha256.prototype.finalize = function() {
        if (this.finalized) {
            return;
        }
        this.finalized = true;
        var blocks = this.blocks,
            i = this.lastByteIndex;
        blocks[16] = this.block;
        blocks[i >> 2] |= EXTRA[i & 3];
        this.block = blocks[16];
        if (i >= 56) {
            if (!this.hashed) {
                this.hash();
            }
            blocks[0] = this.block;
            blocks[16] = blocks[1] = blocks[2] = blocks[3] =
                blocks[4] = blocks[5] = blocks[6] = blocks[7] =
                blocks[8] = blocks[9] = blocks[10] = blocks[11] =
                blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
        }
        blocks[14] = this.hBytes << 3 | this.bytes >>> 29;
        blocks[15] = this.bytes << 3;
        this.hash();
    };

    Sha256.prototype.hash = function() {
        var a = this.h0,
            b = this.h1,
            c = this.h2,
            d = this.h3,
            e = this.h4,
            f = this.h5,
            g = this.h6,
            h = this.h7,
            blocks = this.blocks,
            j, s0, s1, maj, t1, t2, ch, ab, da, cd, bc;

        for (j = 16; j < 64; ++j) {
            // rightrotate
            t1 = blocks[j - 15];
            s0 = ((t1 >>> 7) | (t1 << 25)) ^ ((t1 >>> 18) | (t1 << 14)) ^ (t1 >>> 3);
            t1 = blocks[j - 2];
            s1 = ((t1 >>> 17) | (t1 << 15)) ^ ((t1 >>> 19) | (t1 << 13)) ^ (t1 >>> 10);
            blocks[j] = blocks[j - 16] + s0 + blocks[j - 7] + s1 << 0;
        }

        bc = b & c;
        for (j = 0; j < 64; j += 4) {
            if (this.first) {
                if (this.is224) {
                    ab = 300032;
                    t1 = blocks[0] - 1413257819;
                    h = t1 - 150054599 << 0;
                    d = t1 + 24177077 << 0;
                } else {
                    ab = 704751109;
                    t1 = blocks[0] - 210244248;
                    h = t1 - 1521486534 << 0;
                    d = t1 + 143694565 << 0;
                }
                this.first = false;
            } else {
                s0 = ((a >>> 2) | (a << 30)) ^ ((a >>> 13) | (a << 19)) ^ ((a >>> 22) | (a << 10));
                s1 = ((e >>> 6) | (e << 26)) ^ ((e >>> 11) | (e << 21)) ^ ((e >>> 25) | (e << 7));
                ab = a & b;
                maj = ab ^ (a & c) ^ bc;
                ch = (e & f) ^ (~e & g);
                t1 = h + s1 + ch + K[j] + blocks[j];
                t2 = s0 + maj;
                h = d + t1 << 0;
                d = t1 + t2 << 0;
            }
            s0 = ((d >>> 2) | (d << 30)) ^ ((d >>> 13) | (d << 19)) ^ ((d >>> 22) | (d << 10));
            s1 = ((h >>> 6) | (h << 26)) ^ ((h >>> 11) | (h << 21)) ^ ((h >>> 25) | (h << 7));
            da = d & a;
            maj = da ^ (d & b) ^ ab;
            ch = (h & e) ^ (~h & f);
            t1 = g + s1 + ch + K[j + 1] + blocks[j + 1];
            t2 = s0 + maj;
            g = c + t1 << 0;
            c = t1 + t2 << 0;
            s0 = ((c >>> 2) | (c << 30)) ^ ((c >>> 13) | (c << 19)) ^ ((c >>> 22) | (c << 10));
            s1 = ((g >>> 6) | (g << 26)) ^ ((g >>> 11) | (g << 21)) ^ ((g >>> 25) | (g << 7));
            cd = c & d;
            maj = cd ^ (c & a) ^ da;
            ch = (g & h) ^ (~g & e);
            t1 = f + s1 + ch + K[j + 2] + blocks[j + 2];
            t2 = s0 + maj;
            f = b + t1 << 0;
            b = t1 + t2 << 0;
            s0 = ((b >>> 2) | (b << 30)) ^ ((b >>> 13) | (b << 19)) ^ ((b >>> 22) | (b << 10));
            s1 = ((f >>> 6) | (f << 26)) ^ ((f >>> 11) | (f << 21)) ^ ((f >>> 25) | (f << 7));
            bc = b & c;
            maj = bc ^ (b & d) ^ cd;
            ch = (f & g) ^ (~f & h);
            t1 = e + s1 + ch + K[j + 3] + blocks[j + 3];
            t2 = s0 + maj;
            e = a + t1 << 0;
            a = t1 + t2 << 0;
        }

        this.h0 = this.h0 + a << 0;
        this.h1 = this.h1 + b << 0;
        this.h2 = this.h2 + c << 0;
        this.h3 = this.h3 + d << 0;
        this.h4 = this.h4 + e << 0;
        this.h5 = this.h5 + f << 0;
        this.h6 = this.h6 + g << 0;
        this.h7 = this.h7 + h << 0;
    };

    Sha256.prototype.hex = function() {
        this.finalize();

        var h0 = this.h0,
            h1 = this.h1,
            h2 = this.h2,
            h3 = this.h3,
            h4 = this.h4,
            h5 = this.h5,
            h6 = this.h6,
            h7 = this.h7;

        var hex = HEX_CHARS[(h0 >> 28) & 0x0F] + HEX_CHARS[(h0 >> 24) & 0x0F] +
            HEX_CHARS[(h0 >> 20) & 0x0F] + HEX_CHARS[(h0 >> 16) & 0x0F] +
            HEX_CHARS[(h0 >> 12) & 0x0F] + HEX_CHARS[(h0 >> 8) & 0x0F] +
            HEX_CHARS[(h0 >> 4) & 0x0F] + HEX_CHARS[h0 & 0x0F] +
            HEX_CHARS[(h1 >> 28) & 0x0F] + HEX_CHARS[(h1 >> 24) & 0x0F] +
            HEX_CHARS[(h1 >> 20) & 0x0F] + HEX_CHARS[(h1 >> 16) & 0x0F] +
            HEX_CHARS[(h1 >> 12) & 0x0F] + HEX_CHARS[(h1 >> 8) & 0x0F] +
            HEX_CHARS[(h1 >> 4) & 0x0F] + HEX_CHARS[h1 & 0x0F] +
            HEX_CHARS[(h2 >> 28) & 0x0F] + HEX_CHARS[(h2 >> 24) & 0x0F] +
            HEX_CHARS[(h2 >> 20) & 0x0F] + HEX_CHARS[(h2 >> 16) & 0x0F] +
            HEX_CHARS[(h2 >> 12) & 0x0F] + HEX_CHARS[(h2 >> 8) & 0x0F] +
            HEX_CHARS[(h2 >> 4) & 0x0F] + HEX_CHARS[h2 & 0x0F] +
            HEX_CHARS[(h3 >> 28) & 0x0F] + HEX_CHARS[(h3 >> 24) & 0x0F] +
            HEX_CHARS[(h3 >> 20) & 0x0F] + HEX_CHARS[(h3 >> 16) & 0x0F] +
            HEX_CHARS[(h3 >> 12) & 0x0F] + HEX_CHARS[(h3 >> 8) & 0x0F] +
            HEX_CHARS[(h3 >> 4) & 0x0F] + HEX_CHARS[h3 & 0x0F] +
            HEX_CHARS[(h4 >> 28) & 0x0F] + HEX_CHARS[(h4 >> 24) & 0x0F] +
            HEX_CHARS[(h4 >> 20) & 0x0F] + HEX_CHARS[(h4 >> 16) & 0x0F] +
            HEX_CHARS[(h4 >> 12) & 0x0F] + HEX_CHARS[(h4 >> 8) & 0x0F] +
            HEX_CHARS[(h4 >> 4) & 0x0F] + HEX_CHARS[h4 & 0x0F] +
            HEX_CHARS[(h5 >> 28) & 0x0F] + HEX_CHARS[(h5 >> 24) & 0x0F] +
            HEX_CHARS[(h5 >> 20) & 0x0F] + HEX_CHARS[(h5 >> 16) & 0x0F] +
            HEX_CHARS[(h5 >> 12) & 0x0F] + HEX_CHARS[(h5 >> 8) & 0x0F] +
            HEX_CHARS[(h5 >> 4) & 0x0F] + HEX_CHARS[h5 & 0x0F] +
            HEX_CHARS[(h6 >> 28) & 0x0F] + HEX_CHARS[(h6 >> 24) & 0x0F] +
            HEX_CHARS[(h6 >> 20) & 0x0F] + HEX_CHARS[(h6 >> 16) & 0x0F] +
            HEX_CHARS[(h6 >> 12) & 0x0F] + HEX_CHARS[(h6 >> 8) & 0x0F] +
            HEX_CHARS[(h6 >> 4) & 0x0F] + HEX_CHARS[h6 & 0x0F];
        if (!this.is224) {
            hex += HEX_CHARS[(h7 >> 28) & 0x0F] + HEX_CHARS[(h7 >> 24) & 0x0F] +
                HEX_CHARS[(h7 >> 20) & 0x0F] + HEX_CHARS[(h7 >> 16) & 0x0F] +
                HEX_CHARS[(h7 >> 12) & 0x0F] + HEX_CHARS[(h7 >> 8) & 0x0F] +
                HEX_CHARS[(h7 >> 4) & 0x0F] + HEX_CHARS[h7 & 0x0F];
        }
        return hex;
    };

    Sha256.prototype.toString = Sha256.prototype.hex;

    Sha256.prototype.digest = function() {
        this.finalize();

        var h0 = this.h0,
            h1 = this.h1,
            h2 = this.h2,
            h3 = this.h3,
            h4 = this.h4,
            h5 = this.h5,
            h6 = this.h6,
            h7 = this.h7;

        var arr = [
            (h0 >> 24) & 0xFF, (h0 >> 16) & 0xFF, (h0 >> 8) & 0xFF, h0 & 0xFF,
            (h1 >> 24) & 0xFF, (h1 >> 16) & 0xFF, (h1 >> 8) & 0xFF, h1 & 0xFF,
            (h2 >> 24) & 0xFF, (h2 >> 16) & 0xFF, (h2 >> 8) & 0xFF, h2 & 0xFF,
            (h3 >> 24) & 0xFF, (h3 >> 16) & 0xFF, (h3 >> 8) & 0xFF, h3 & 0xFF,
            (h4 >> 24) & 0xFF, (h4 >> 16) & 0xFF, (h4 >> 8) & 0xFF, h4 & 0xFF,
            (h5 >> 24) & 0xFF, (h5 >> 16) & 0xFF, (h5 >> 8) & 0xFF, h5 & 0xFF,
            (h6 >> 24) & 0xFF, (h6 >> 16) & 0xFF, (h6 >> 8) & 0xFF, h6 & 0xFF
        ];
        if (!this.is224) {
            arr.push((h7 >> 24) & 0xFF, (h7 >> 16) & 0xFF, (h7 >> 8) & 0xFF, h7 & 0xFF);
        }
        return arr;
    };

    Sha256.prototype.array = Sha256.prototype.digest;

    Sha256.prototype.arrayBuffer = function() {
        this.finalize();

        var buffer = new ArrayBuffer(this.is224 ? 28 : 32);
        var dataView = new DataView(buffer);
        dataView.setUint32(0, this.h0);
        dataView.setUint32(4, this.h1);
        dataView.setUint32(8, this.h2);
        dataView.setUint32(12, this.h3);
        dataView.setUint32(16, this.h4);
        dataView.setUint32(20, this.h5);
        dataView.setUint32(24, this.h6);
        if (!this.is224) {
            dataView.setUint32(28, this.h7);
        }
        return buffer;
    };

    function HmacSha256(key, is224, sharedMemory) {
        var i, type = typeof key;
        if (type === 'string') {
            var bytes = [],
                length = key.length,
                index = 0,
                code;
            for (i = 0; i < length; ++i) {
                code = key.charCodeAt(i);
                if (code < 0x80) {
                    bytes[index++] = code;
                } else if (code < 0x800) {
                    bytes[index++] = (0xc0 | (code >> 6));
                    bytes[index++] = (0x80 | (code & 0x3f));
                } else if (code < 0xd800 || code >= 0xe000) {
                    bytes[index++] = (0xe0 | (code >> 12));
                    bytes[index++] = (0x80 | ((code >> 6) & 0x3f));
                    bytes[index++] = (0x80 | (code & 0x3f));
                } else {
                    code = 0x10000 + (((code & 0x3ff) << 10) | (key.charCodeAt(++i) & 0x3ff));
                    bytes[index++] = (0xf0 | (code >> 18));
                    bytes[index++] = (0x80 | ((code >> 12) & 0x3f));
                    bytes[index++] = (0x80 | ((code >> 6) & 0x3f));
                    bytes[index++] = (0x80 | (code & 0x3f));
                }
            }
            key = bytes;
        } else {
            if (type === 'object') {
                if (key === null) {
                    throw new Error(ERROR);
                } else if (ARRAY_BUFFER && key.constructor === ArrayBuffer) {
                    key = new Uint8Array(key);
                } else if (!Array.isArray(key)) {
                    if (!ARRAY_BUFFER || !ArrayBuffer.isView(key)) {
                        throw new Error(ERROR);
                    }
                }
            } else {
                throw new Error(ERROR);
            }
        }

        if (key.length > 64) {
            key = (new Sha256(is224, true)).update(key).array();
        }

        var oKeyPad = [],
            iKeyPad = [];
        for (i = 0; i < 64; ++i) {
            var b = key[i] || 0;
            oKeyPad[i] = 0x5c ^ b;
            iKeyPad[i] = 0x36 ^ b;
        }

        Sha256.call(this, is224, sharedMemory);

        this.update(iKeyPad);
        this.oKeyPad = oKeyPad;
        this.inner = true;
        this.sharedMemory = sharedMemory;
    }
    HmacSha256.prototype = new Sha256();

    HmacSha256.prototype.finalize = function() {
        Sha256.prototype.finalize.call(this);
        if (this.inner) {
            this.inner = false;
            var innerHash = this.array();
            Sha256.call(this, this.is224, this.sharedMemory);
            this.update(this.oKeyPad);
            this.update(innerHash);
            Sha256.prototype.finalize.call(this);
        }
    };

    var exports = createMethod();
    exports.sha256 = exports;
    exports.sha224 = createMethod(true);
    exports.sha256.hmac = createHmacMethod();
    exports.sha224.hmac = createHmacMethod(true);

    if (COMMON_JS) {
        module.exports = exports;
    } else {
        root.sha256 = exports.sha256;
        root.sha224 = exports.sha224;
        if (AMD) {
            define(function() {
                return exports;
            });
        }
    }
})();

const shap1 = function (inshap1) {
    var keyoutput0 = sha1(inshap1);
    var keyoutput1 = sha1(keyoutput0);
    var keyoutput2 = sha1(keyoutput1);
    var keyoutput3 = sha1(keyoutput2);
    var outshap1 = sha1(keyoutput3);
  return outshap1;
}

const shap224 = function (inshap224) {
    var keyoutput0 = sha224(inshap224);
    var keyoutput1 = sha224(keyoutput0);
    var keyoutput2 = sha224(keyoutput1);
    var keyoutput3 = sha224(keyoutput2);
    var outshap224 = sha224(keyoutput3);
  return outshap224;
}

const shap256 = function (inshap256) {
    var keyoutput0 = sha256(inshap256);
    var keyoutput1 = sha256(keyoutput0);
    var keyoutput2 = sha256(keyoutput1);
    var keyoutput3 = sha256(keyoutput2);
    var outshap256 = sha256(keyoutput3);
  return outshap256;
}

const shap384 = function (inshap384) {
    var keyoutput0 = sha384(inshap384);
    var keyoutput1 = sha384(keyoutput0);
    var keyoutput2 = sha384(keyoutput1);
    var keyoutput3 = sha384(keyoutput2);
    var outshap384 = sha384(keyoutput3);
  return outshap384;
}

const shap512 = function (inshap512) {
    var keyoutput0 = sha512(inshap512);
    var keyoutput1 = sha512(keyoutput0);
    var keyoutput2 = sha512(keyoutput1);
    var keyoutput3 = sha512(keyoutput2);
    var outshap512 = sha512(keyoutput3);
  return outshap512;
}