(()=>{"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})();class e{constructor(t,e,n="medium",r="incomplete"){this.title=t,this.dueDate=e,this.priority=n,this.status=r}markComplete(){this.status="completed"}markIncomplete(){this.status="incomplete"}}class n{constructor(t){this.title=t,this.tasks=[]}addTask(t){this.tasks.push(new e(t))}deleteTask(t){const e=this.tasks.indexOf(t);e>-1&&this.tasks.splice(e,1)}getTasks(){return this.tasks}}class r{constructor(){this.projects=[],this.projects.push(new n("Home")),this.projects.push(new n("Today")),this.projects.push(new n("This week"))}addProject(t){this.projects.push(new n(t))}deleteProject(t){t>-1&&this.projects.splice(t,1)}getProjects(){return this.projects}getAllTasks(){let t=[];for(let e=0;e<this.projects.length;e++)1!==e&&2!==e&&(t=t.concat(this.projects[e].getTasks()));return t}}function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function i(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function o(t){i(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===a(t)&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function s(t){i(1,arguments);var e=o(t);return e.setHours(0,0,0,0),e}function u(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}var d={};function c(){return d}function l(t,e){var n,r,a,s,d,l,h,m;i(1,arguments);var f=c(),g=u(null!==(n=null!==(r=null!==(a=null!==(s=null==e?void 0:e.weekStartsOn)&&void 0!==s?s:null==e||null===(d=e.locale)||void 0===d||null===(l=d.options)||void 0===l?void 0:l.weekStartsOn)&&void 0!==a?a:f.weekStartsOn)&&void 0!==r?r:null===(h=f.locale)||void 0===h||null===(m=h.options)||void 0===m?void 0:m.weekStartsOn)&&void 0!==n?n:0);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var v=o(t),w=v.getDay(),p=(w<g?7:0)+w-g;return v.setDate(v.getDate()-p),v.setHours(0,0,0,0),v}function h(t){i(1,arguments);var e=o(t),n=e.getUTCDay(),r=(n<1?7:0)+n-1;return e.setUTCDate(e.getUTCDate()-r),e.setUTCHours(0,0,0,0),e}function m(t){i(1,arguments);var e=o(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=h(r),s=new Date(0);s.setUTCFullYear(n,0,4),s.setUTCHours(0,0,0,0);var u=h(s);return e.getTime()>=a.getTime()?n+1:e.getTime()>=u.getTime()?n:n-1}function f(t,e){var n,r,a,s,d,l,h,m;i(1,arguments);var f=c(),g=u(null!==(n=null!==(r=null!==(a=null!==(s=null==e?void 0:e.weekStartsOn)&&void 0!==s?s:null==e||null===(d=e.locale)||void 0===d||null===(l=d.options)||void 0===l?void 0:l.weekStartsOn)&&void 0!==a?a:f.weekStartsOn)&&void 0!==r?r:null===(h=f.locale)||void 0===h||null===(m=h.options)||void 0===m?void 0:m.weekStartsOn)&&void 0!==n?n:0);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var v=o(t),w=v.getUTCDay(),p=(w<g?7:0)+w-g;return v.setUTCDate(v.getUTCDate()-p),v.setUTCHours(0,0,0,0),v}function g(t,e){var n,r,a,s,d,l,h,m;i(1,arguments);var g=o(t),v=g.getUTCFullYear(),w=c(),p=u(null!==(n=null!==(r=null!==(a=null!==(s=null==e?void 0:e.firstWeekContainsDate)&&void 0!==s?s:null==e||null===(d=e.locale)||void 0===d||null===(l=d.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==a?a:w.firstWeekContainsDate)&&void 0!==r?r:null===(h=w.locale)||void 0===h||null===(m=h.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==n?n:1);if(!(p>=1&&p<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var b=new Date(0);b.setUTCFullYear(v+1,0,p),b.setUTCHours(0,0,0,0);var y=f(b,e),T=new Date(0);T.setUTCFullYear(v,0,p),T.setUTCHours(0,0,0,0);var k=f(T,e);return g.getTime()>=y.getTime()?v+1:g.getTime()>=k.getTime()?v:v-1}function v(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const w=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return v("yy"===e?r%100:r,e.length)},p=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):v(n+1,2)},b=function(t,e){return v(t.getUTCDate(),e.length)},y=function(t,e){return v(t.getUTCHours()%12||12,e.length)},T=function(t,e){return v(t.getUTCHours(),e.length)},k=function(t,e){return v(t.getUTCMinutes(),e.length)},D=function(t,e){return v(t.getUTCSeconds(),e.length)},L=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return v(Math.floor(r*Math.pow(10,n-3)),e.length)};var C={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return w(t,e)},Y:function(t,e,n,r){var a=g(t,r),i=a>0?a:1-a;return"YY"===e?v(i%100,2):"Yo"===e?n.ordinalNumber(i,{unit:"year"}):v(i,e.length)},R:function(t,e){return v(m(t),e.length)},u:function(t,e){return v(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return v(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return v(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return p(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return v(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var a=function(t,e){i(1,arguments);var n=o(t),r=f(n,e).getTime()-function(t,e){var n,r,a,o,s,d,l,h;i(1,arguments);var m=c(),v=u(null!==(n=null!==(r=null!==(a=null!==(o=null==e?void 0:e.firstWeekContainsDate)&&void 0!==o?o:null==e||null===(s=e.locale)||void 0===s||null===(d=s.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==a?a:m.firstWeekContainsDate)&&void 0!==r?r:null===(l=m.locale)||void 0===l||null===(h=l.options)||void 0===h?void 0:h.firstWeekContainsDate)&&void 0!==n?n:1),w=g(t,e),p=new Date(0);return p.setUTCFullYear(w,0,v),p.setUTCHours(0,0,0,0),f(p,e)}(n,e).getTime();return Math.round(r/6048e5)+1}(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):v(a,e.length)},I:function(t,e,n){var r=function(t){i(1,arguments);var e=o(t),n=h(e).getTime()-function(t){i(1,arguments);var e=m(t),n=new Date(0);return n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0),h(n)}(e).getTime();return Math.round(n/6048e5)+1}(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):v(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):b(t,e)},D:function(t,e,n){var r=function(t){i(1,arguments);var e=o(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=n-e.getTime();return Math.floor(r/864e5)+1}(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):v(r,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return v(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return v(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return v(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return y(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):T(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):v(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):v(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):k(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):D(t,e)},S:function(t,e){return L(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return M(a);case"XXXX":case"XX":return S(a);default:return S(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return M(a);case"xxxx":case"xx":return S(a);default:return S(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+P(a,":");default:return"GMT"+S(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+P(a,":");default:return"GMT"+S(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return v(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return v((r._originalDate||t).getTime(),e.length)}};function P(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=e||"";return n+String(a)+o+v(i,2)}function M(t,e){return t%60==0?(t>0?"-":"+")+v(Math.abs(t)/60,2):S(t,e)}function S(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+v(Math.floor(a/60),2)+n+v(a%60,2)}const j=C;var x=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},E=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},U={p:E,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],a=r[1],i=r[2];if(!i)return x(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",x(a,e)).replace("{{time}}",E(i,e))}};const W=U;var q=["D","DD"],A=["YY","YYYY"];function N(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var O={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function Y(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}var H,F={date:Y({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:Y({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:Y({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},I={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function B(t){return function(e,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var a=t.defaultFormattingWidth||t.defaultWidth,i=null!=n&&n.width?String(n.width):a;r=t.formattingValues[i]||t.formattingValues[a]}else{var o=t.defaultWidth,s=null!=n&&n.width?String(n.width):t.defaultWidth;r=t.values[s]||t.values[o]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function z(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],i=e.match(a);if(!i)return null;var o,s=i[0],u=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],d=Array.isArray(u)?function(t,e){for(var n=0;n<t.length;n++)if(t[n].test(s))return n}(u):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&t[n].test(s))return n}(u);return o=t.valueCallback?t.valueCallback(d):d,{value:o=n.valueCallback?n.valueCallback(o):o,rest:e.slice(s.length)}}}const Q={code:"en-US",formatDistance:function(t,e,n){var r,a=O[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:F,formatRelative:function(t,e,n,r){return I[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:B({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:B({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:B({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:B({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:B({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(H={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(H.matchPattern);if(!n)return null;var r=n[0],a=t.match(H.parsePattern);if(!a)return null;var i=H.valueCallback?H.valueCallback(a[0]):a[0];return{value:i=e.valueCallback?e.valueCallback(i):i,rest:t.slice(r.length)}}),era:z({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:z({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:z({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:z({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:z({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};var X=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,G=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,R=/^'([^]*?)'?$/,J=/''/g,$=/[a-zA-Z]/;function _(t,e,n){var r,s,d,l,h,m,f,g,v,w,p,b,y,T,k,D,L,C;i(2,arguments);var P=String(e),M=c(),S=null!==(r=null!==(s=null==n?void 0:n.locale)&&void 0!==s?s:M.locale)&&void 0!==r?r:Q,x=u(null!==(d=null!==(l=null!==(h=null!==(m=null==n?void 0:n.firstWeekContainsDate)&&void 0!==m?m:null==n||null===(f=n.locale)||void 0===f||null===(g=f.options)||void 0===g?void 0:g.firstWeekContainsDate)&&void 0!==h?h:M.firstWeekContainsDate)&&void 0!==l?l:null===(v=M.locale)||void 0===v||null===(w=v.options)||void 0===w?void 0:w.firstWeekContainsDate)&&void 0!==d?d:1);if(!(x>=1&&x<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var E=u(null!==(p=null!==(b=null!==(y=null!==(T=null==n?void 0:n.weekStartsOn)&&void 0!==T?T:null==n||null===(k=n.locale)||void 0===k||null===(D=k.options)||void 0===D?void 0:D.weekStartsOn)&&void 0!==y?y:M.weekStartsOn)&&void 0!==b?b:null===(L=M.locale)||void 0===L||null===(C=L.options)||void 0===C?void 0:C.weekStartsOn)&&void 0!==p?p:0);if(!(E>=0&&E<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!S.localize)throw new RangeError("locale must contain localize property");if(!S.formatLong)throw new RangeError("locale must contain formatLong property");var U=o(t);if(!function(t){if(i(1,arguments),!function(t){return i(1,arguments),t instanceof Date||"object"===a(t)&&"[object Date]"===Object.prototype.toString.call(t)}(t)&&"number"!=typeof t)return!1;var e=o(t);return!isNaN(Number(e))}(U))throw new RangeError("Invalid time value");var O=function(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}(U),Y=function(t,e){return i(2,arguments),function(t,e){i(2,arguments);var n=o(t).getTime(),r=u(e);return new Date(n+r)}(t,-u(e))}(U,O),H={firstWeekContainsDate:x,weekStartsOn:E,locale:S,_originalDate:U};return P.match(G).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,W[e])(t,S.formatLong):t})).join("").match(X).map((function(r){if("''"===r)return"'";var a,i,o=r[0];if("'"===o)return(i=(a=r).match(R))?i[1].replace(J,"'"):a;var s,u=j[o];if(u)return null!=n&&n.useAdditionalWeekYearTokens||(s=r,-1===A.indexOf(s))||N(r,e,String(t)),null!=n&&n.useAdditionalDayOfYearTokens||!function(t){return-1!==q.indexOf(t)}(r)||N(r,e,String(t)),u(Y,r,S.localize,H);if(o.match($))throw new RangeError("Format string contains an unescaped latin alphabet character `"+o+"`");return r})).join("")}const V=t.p+"fa06790b84b33be2b942.svg";(new class{constructor(){this.toDoList=this.loadToDoList()||new r,this.currentProjectIndex=0,this.basicItems=document.querySelector(".basic-items"),this.projectList=document.querySelector(".project-list"),this.addProjectBtn=document.querySelector(".add-project-btn"),this.taskList=document.querySelector(".task-list"),this.addTaskBtn=document.querySelector(".add-task-btn")}loadHomePage(){this.displayProjects(),this.displayTasks(this.currentProjectIndex),this.handleLeftPaneAnimation(this.currentProjectIndex),this.addPageEventListeners()}displayProjects(){const t=this.toDoList.getProjects();this.projectList.innerHTML="";for(let e=0;e<t.length;e++)if("Home"!==t[e].title&&"Today"!==t[e].title&&"This week"!==t[e].title){const n=document.createTextNode(t[e].title),r=document.createElement("li"),a=document.createElement("button");a.setAttribute("type","button"),a.innerHTML="X",a.classList.add("project-delete"),r.dataset.index=e,r.appendChild(n),r.appendChild(a),this.projectList.appendChild(r)}}createProject(){const t=this.projectList.querySelector(".new-project-input");if(t)return void t.focus();const e=document.createElement("input");e.setAttribute("type","text"),e.setAttribute("placeholder","Project name"),e.classList.add("new-project-input");const n=document.createElement("li");n.appendChild(e),this.projectList.appendChild(n),e.focus(),e.addEventListener("keydown",(t=>{const r=e.value.trim();if(r&&"Enter"===t.key){this.toDoList.addProject(r),this.displayProjects();const t=this.toDoList.projects.length-1;this.displayTasks(t),this.handleLeftPaneAnimation(t),n.remove(),this.saveToDoList(this.toDoList)}else"Escape"===t.key&&n.remove()}))}displayTasks(t){this.currentProjectIndex=t;const e=this.toDoList.getProjects()[t],n=0===t?this.toDoList.getAllTasks():1===t?this.toDoList.getAllTasks().filter((t=>function(t){return i(1,arguments),function(t,e){i(2,arguments);var n=s(t),r=s(e);return n.getTime()===r.getTime()}(t,Date.now())}(new Date(t.dueDate)))):2===t?this.toDoList.getAllTasks().filter((t=>function(t,e){return i(1,arguments),function(t,e,n){i(2,arguments);var r=l(t,n),a=l(e,n);return r.getTime()===a.getTime()}(t,Date.now(),e)}(new Date(t.dueDate)))):e.getTasks();this.taskList.innerHTML="";for(let t=0;t<n.length;t++){const e=document.createElement("div");e.classList.add("task"),e.classList.add(`${n[t].priority}-priority`),e.classList.add(`${n[t].status}`);const r=document.createElement("input");r.setAttribute("type","checkbox"),r.classList.add("task-checkbox"),r.checked="completed"===n[t].status;const a=document.createElement("span");a.classList.add("task-name");const i=document.createTextNode(`${n[t].title}`);a.appendChild(i);const o=document.createElement("img");o.setAttribute("src",V),o.classList.add("task-edit");const s=document.createElement("button");s.classList.add("task-delete");const u=document.createTextNode("X");if(s.appendChild(u),e.appendChild(r),e.appendChild(a),e.appendChild(o),e.appendChild(s),n[t].dueDate){const e=document.createElement("span");e.classList.add("due-date");const r=_(new Date(n[t].dueDate),"d MMM");e.innerHTML=r,a.insertAdjacentElement("afterend",e)}this.taskList.appendChild(e),this.addTaskEventListeners(e,n[t])}1===this.currentProjectIndex|2===this.currentProjectIndex?this.addTaskBtn.classList.add("hidden"):this.addTaskBtn.classList.remove("hidden")}createTask(){const t=this.taskList.querySelector(".task-input");if(t)return void t.focus();const e=document.createElement("input");e.setAttribute("type","text"),e.setAttribute("placeholder","Task title"),e.classList.add("task-input");const n=document.createElement("div");n.appendChild(e),this.taskList.appendChild(n),e.focus(),e.addEventListener("keydown",(t=>{const r=e.value.trim();r&&"Enter"===t.key?(this.toDoList.getProjects()[this.currentProjectIndex].addTask(r),this.displayTasks(this.currentProjectIndex),n.remove(),this.saveToDoList(this.toDoList)):"Escape"===t.key&&n.remove()}))}handleLeftPaneAnimation(t){document.querySelectorAll(".basic-items li, .project-list li").forEach(((e,n)=>{if(n===t){e.classList.add("active");const t=e.querySelector("button");t&&t.classList.remove("hidden")}else{e.classList.remove("active");const t=e.querySelector("button");t&&t.classList.add("hidden")}}))}showForm(t,e){const n=t.querySelector(".task-name"),r=t.querySelector(".due-date"),a=document.createElement("form"),i=document.createElement("input"),o=document.createElement("input"),s=document.createElement("button"),u=document.createElement("div");a.setAttribute("action","#"),i.setAttribute("type","text"),i.classList.add("task-edit-input"),o.setAttribute("type","date"),o.classList.add("task-date"),s.setAttribute("type","button"),s.innerHTML="Save",u.classList.add("priority-area"),u.innerHTML="<div class= 'low-priority-btn'><input type='radio' id='low' name='priority'><label for='low'>Low</label></div><div class='medium-priority-btn'><input type='radio' id='medium' name='priority'><label for='medium'>Medium</label></div><div class='high-priority-btn'><input type='radio' id='high' name='priority'><label for='high'>High</label></div>",i.value=e.title,o.value=e.dueDate,n&&t.replaceChild(i,n),r?t.replaceChild(o,r):i.insertAdjacentElement("afterend",o),o.insertAdjacentElement("afterend",s),o.insertAdjacentElement("beforebegin",u),t.querySelector(`input[id="${e.priority}"]`).checked=!0,s.addEventListener("click",(()=>{e.title=i.value,e.dueDate=o.value;const n=t.querySelectorAll("input[type='radio']");let r=null;n.forEach((t=>{t.checked&&(r=t.id)})),e.priority=r,this.displayTasks(this.currentProjectIndex),this.saveToDoList(this.toDoList)}))}saveToDoList(t){localStorage.setItem("toDoList",JSON.stringify(t))}loadToDoList(){if(localStorage.getItem("toDoList")){const t=JSON.parse(localStorage.getItem("toDoList")),a=new r;return a.projects=t.projects.map((t=>{const r=new n(t.title);return r.tasks=t.tasks.map((t=>new e(t.title,t.dueDate,t.priority,t.status))),r})),a}return new r}addTaskEventListeners(t,e){const n=t.querySelector("input"),r=t.querySelector("img"),a=t.querySelector(".task-delete");n.addEventListener("change",(()=>{n.checked?(t.classList.add("completed"),e.markComplete()):(t.classList.remove("completed"),e.markIncomplete()),this.saveToDoList(this.toDoList)})),r.addEventListener("click",(()=>{this.showForm(t,e)})),a.addEventListener("click",(()=>{this.toDoList.getProjects()[this.currentProjectIndex].deleteTask(e),t.remove(),this.saveToDoList(this.toDoList)}))}addPageEventListeners(){this.addProjectBtn.addEventListener("click",this.createProject.bind(this)),this.basicItems.addEventListener("click",(t=>{const e=t.target.innerHTML;"Home"===e?(this.displayTasks(0),this.handleLeftPaneAnimation(0)):"Today"===e?(this.displayTasks(1),this.handleLeftPaneAnimation(1)):"This week"===e&&(this.displayTasks(2),this.handleLeftPaneAnimation(2))})),this.projectList.addEventListener("click",(t=>{if("LI"===t.target.tagName){const e=Number(t.target.dataset.index);this.displayTasks(e),this.handleLeftPaneAnimation(e)}else if("BUTTON"===t.target.tagName){const e=Number(t.target.parentNode.dataset.index);this.toDoList.deleteProject(e),this.displayProjects(),this.toDoList.getProjects()[e]?(this.handleLeftPaneAnimation(e),this.displayTasks(e)):(this.handleLeftPaneAnimation(e-1),this.displayTasks(e-1)),this.saveToDoList(this.toDoList)}})),this.addTaskBtn.addEventListener("click",this.createTask.bind(this))}}).loadHomePage()})();