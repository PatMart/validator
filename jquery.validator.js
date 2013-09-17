/*! nice Validator 0.3.0
 * (c) 2012-2013 Jony Zhang <zj86@live.cn>, MIT Licensed
 * http://niceue.com/validator/
 */
!function(e,t){"use strict";function i(a,s){var l,u,o=this;return!o instanceof i?new i(a,s):(H(s)&&(s={valid:s}),s=s||{},o.isPreventDefault=!!s.valid,u=L(a,"data-"+m+"-option"),u=u&&"{"===u.charAt(0)?Function("return "+u)():{},l=J[s.theme||u.theme||B.theme],o.options=e.extend({},B,l,u,s),o.$el=e(a),o.rules=new n(o.options.rules,!0),o.messages=new r(o.options.messages,!0),o.elements={},o.fields={},o.isValid=!0,o.deferred={},o._init(),t)}function n(e,t){var i=t?t===!0?this:t:n.prototype;if(N(e))for(var r in e)i[r]=a(e[r])}function r(e,t){var i=t?t===!0?this:t:r.prototype;if(N(e))for(var n in e){if(!e[n])return;i[n]=e[n]}}function a(t){switch(e.type(t)){case"function":return t;case"array":return function(e){return t[0].test(e.value)||t[1]||!1};case"regexp":return function(e){return t.test(e.value)}}}function s(t){var i="";return e.map(t.split(" "),function(e){i+=","+("#"===e.charAt(0)?e:'[name="'+e+'"]')}),i.substring(1)}function l(t){if(t&&t.tagName){var i=t;switch(t.tagName){case"INPUT":case"SELECT":case"TEXTAREA":i=t.form||e(t).closest(".n-"+m);break;default:i=e(t).closest(".n-"+m)}return e(i).data(m)||e(i)[m]().data(m)}}function u(i,n){var r=e.trim(L(i,x+"-"+n));if(r)return r=Function("return "+r)(),r?a(r):t}function o(e,t,i){var n=t.msg;return N(n)&&i&&(n=n[i]),P(n)||(n=L(e,"data-msg-"+i)||L(e,"data-msg")||""),n}function d(e){if(!e)return"";var t=C.exec(e);return t?t[1]:""}function c(e){return(e||B.msgTemplate).replace("{#msg}",V)}function f(t,i,n){var r,a,s,l,u=e(t);if(u.is(":input")?(l=i.target||L(t,O),l&&(l=e(l,n),l.length&&(l.is(":input")?t=l.get(0):r=l)),a=t.name||"#"+t.id,r=r||e("."+w+'[data-for="'+a+'"]',n)):r=u,!r.length)if(u=e(l||t,n),s=c(i.tpl),r=e(s).addClass(w).attr({style:i.style||"","data-for":a}),i.cls&&r.addClass(i.cls),u.is(":checkbox,:radio")){var o=u.parent();r.appendTo(o.is("label")?o.parent():o)}else r[i.pos&&"right"!==i.pos?"insertBefore":"insertAfter"](u);return r}function g(t,i,n){var r,a,s;r={error:v,ok:h,tip:y,loading:b}[i.type||(i.type="error")],a=f(t,i,n),s=a.find("span.msg-wrap"),s.length||(s=e(V).appendTo(a)),I&&-1!==a[0].className.indexOf("bottom")&&(a[0].style.marginTop=e(t).outerHeight()+"px"),s[0].innerHTML=(i.arrow||"")+(i.icon||"")+'<span class="n-msg">'+i.msg+"</span>",s[0].className="msg-wrap "+r,a[0].style.display="",H(i.show)&&i.show.call(n,s,i.type)}function p(e,t,i){t=t||{};var n=f(e,t,i);n.length&&(H(t.hide)?(n[0].style.display="",t.hide.call(i,n.find("span.msg-wrap"),t.type)):n[0].style.display="none")}var m="validator",h="n-ok",v="n-error",y="n-tip",b="n-loading",k="n-invalid",w="msg-box",_="aria-invalid",x="data-rule",O="data-target",M="data-tip",$="data-inputstatus",A=":input:not(:button,:submit,:reset,:disabled)",V='<span class="msg-wrap" role="alert"></span>',T=/(\w+)(?:\[(.*)\]$|\((.*)\)$)?/,F=/(?:([^:]*):)?(.*)/,R=/[^\x00-\xff]/g,C=/^.*(top|right|bottom|left).*$/,j=/(?:(post|get):)?(.+)/i,E=/<|>/g,q=e.noop,D=e.proxy,H=e.isFunction,S=e.isArray,P=function(e){return"string"==typeof e},N=function(e){return e&&"[object Object]"===Object.prototype.toString.call(e)},I=!window.XMLHttpRequest,L=function(e,i,n){return n===t?e.getAttribute(i):(null===n?e.removeAttribute(i):e.setAttribute(i,""+n),t)},X=window.console||{log:q,info:q,warn:q},B={debug:0,timely:1,theme:"default",stopOnError:!0,ignore:"",valid:q,invalid:q,msgTemplate:"<span>{#msg}</span>",msgIcon:'<span class="n-icon"></span>',msgArrow:"",msgClass:"",defaultMsg:"{0} is not valid.",loadingMsg:"Validating..."},J={"default":{formClass:"n-default",msgClass:"n-right",showOk:""}};e.fn[m]=function(t){var n=this,r=arguments;return n.is(":input")?n:(!n.is("form")&&(n=this.find("form")),!n.length&&(n=this),n.each(function(){if(P(t)){if("_"===t.charAt(0))return;var n=e(this).data(m);n&&n[t].apply(n,Array.prototype.slice.call(r,1))}else new i(this,t)}),this)},e.fn.isValid=function(e,i){var n,r=l(this[0]);return r?(i===t&&(i=!0),r.checkOnly=i,n=this.is(":input")?this:this.find(A),r._multiValidate(n,function(t){H(e)&&e.call(null,t),r.checkOnly=!1},!0)):!0},i.prototype={_init:function(){var i=this,n=i.options,r=i.fields;S(n.groups)&&e.map(n.groups,function(t){if(!P(t.fields)||!H(t.callback))return null;var n=e(s(t.fields),i.$el),a=function(){return t.callback.call(i,n)};e.extend(a,t),e.map(t.fields.split(" "),function(e){r[e]=r[e]||{},r[e].group=a})}),N(n.fields)&&e.each(n.fields,function(e,t){t&&(r[e]=P(t)?{rule:t}:t)}),e(A,i.$el).each(function(){var e,a=this,s=a.name;return(a.id&&"#"+a.id in r||!a.name)&&(s="#"+a.id),s?(e=r[s]||{},e.rule||(e.rule=L(a,x)||""),e.rules=[],L(a,x,null),e.rule&&(e.name=e.name||a.name,e.key=s,e.required=-1!==e.rule.indexOf("required"),e.must=-1!==e.rule.indexOf("match")||-1!==e.rule.indexOf("checked"),e.required&&L(a,"aria-required",!0),("timely"in e&&!e.timely||!n.timely)&&L(a,"notimely",!0),P(e.target)&&L(a,O,e.target),P(e.tip)&&L(a,M,e.tip),r[s]=i._parseField(e)),t):L(a,x,null)}),i.msgOpt={type:"error",tpl:c(n.msgTemplate),pos:d(n.msgClass),cls:n.msgClass,icon:n.msgIcon,arrow:n.msgArrow,style:n.msgStyle,show:n.msgShow,hide:n.msgHide},i.$el.data(m)||(i.$el.on("submit validate",D(i,"_submit")).on("reset",D(i,"_reset")).on("validated.field",A,D(i,"_validatedField")).on("validated.rule",A,D(i,"_validatedRule")).on("focusout validate",A,D(i,"_blur")).on("click",":radio,:checkbox",D(i,"_click")),n.msgHandler||i.$el.on("focusin",A,D(i,"_focus")),n.timely>=2&&i.$el.on("keyup",A,D(i,"_blur")).on("change","select",D(i,"_click")),i.$el.data(m,i).addClass("n-"+m+" "+n.formClass),L(i.$el[0],"novalidate",!0))},_multiValidate:function(i,n,r){var a=this,s=a.options;return s.ignore&&(i=i.not(s.ignore)),a.isValid=!0,a.deferred={},i.each(function(e,i){var n;if(!L(i,"novalidate")&&(n=a.getField(i)))return a._validate(i,n,r),!a.isValid&&s.stopOnError?!1:t}),e.when.apply(e.Deferred().promise(),e.map(a.deferred,function(e){return e})).done(function(){if(n.call(a,a.isValid),H(s.msgHandler)){var t=[];e.map(a.fields,function(e){e.errorMsg&&t.push(e.errorMsg)}),s.msgHandler.call(a,t)}}),e.isEmptyObject(a.deferred)?a.isValid:t},_submit:function(t,i){var n=this;if(!(n.submiting||"only"===i||"validate"===t.type&&e(t.target).is(":not(form)"))){var r,a=n.options,s=t.target,l="focus.field",u=e(A,n.$el);if(n._reset(),n.submiting=!0,n.isAjaxSubmit=!0,null===L(s,"action")&&(n.isPreventDefault=!0),!n.isPreventDefault){var o=n.$el.data("events").valid;o&&e.map(o,function(e){return"form"===e.namespace?1:null}).length?n.isPreventDefault=!0:n.isAjaxSubmit=!1}return n._multiValidate(u,function(t){if(t)n.isAjaxSubmit||e(s).trigger("submit",["only"]);else{var i=n.$el.find(":input."+k+":first");i.trigger(l),I&&i.trigger(l)}r=t||2===a.debug?"valid":"invalid",a[r].call(n,s),n.$el.trigger(r+".form",[s]),n.submiting=!1},!0),(n.isPreventDefault||!e.isEmptyObject(n.deferred))&&t.preventDefault(),n.isValid}},_reset:function(){var t=this;t.options.msgHandler||(e("[data-for]."+w,t.$el).each(function(){this.style.display="none"}),e(A,t.$el).each(function(){L(this,$,null),L(this,_,null),e(this).removeClass(k)})),t.isValid=!0},_focus:function(e){var t=e.target;this.submiting||""!==t.value&&("false"===L(t,_)||"tip"===L(t,$))||this.showMsg(t,{msg:L(t,M),type:"tip"})},_blur:function(t,i){var n,r,a=this,s=a.options,l=t.target,u=100;if(!i){if("validate"===t.type)r=!0;else{if(L(l,"notimely"))return;if(s.timely>=2&&"keyup"!==t.type)return}if(s.ignore&&e(l).is(s.ignore))return;if("keyup"===t.type){var o=t.keyCode,d={8:1,9:1,16:1,32:1,46:1};if(9===o&&!l.value)return;if(48>o&&!d[o])return;u=s.timely>=100?s.timely:500}}n=a.getField(l),n&&(n.timeout&&clearTimeout(n.timeout),n.timeout=setTimeout(function(){a._validate(l,n,r)},u))},_click:function(e){this._blur(e,!0)},_parseField:function(i){var n,r=F.exec(i.rule);if(r)return i.display=r[1],n=(r[2]||"").split(";"),e.map(n,function(n){var r=T.exec(n);return r?(r[3]&&(r[2]=r[3]),i.rules.push({method:r[1],params:r[2]?e.trim(r[2]).split(", "):t}),t):null}),i.vid=0,i.rid=i.rules[0].method,i},_validatedField:function(t,i,n){var r=this,a=r.options,s=t.target,l=i.isValid=!!n.valid;l&&(n.type="ok"),e(s)[l?"removeClass":"addClass"](k).trigger((l?"valid":"invalid")+".field",[i,n]).attr(_,!l),i.old.ret=n,r.elements[i.key]=s,a.msgHandler?i.errorMsg=l?"":n.msg:r.checkOnly||(!n.showOk&&n.msg||n.showOk&&a.showOk!==!1?r.showMsg(s,n):r.hideMsg(s,n))},_validatedRule:function(i,n,r,a){r=r||s.getField(u);var s=this,l=s.options,u=i.target,d="",c=r.rid,f=!1,g=!1;if(a=a||{},n===!0||n===t?f=!0:(d=o(u,r,c),d||(P(n)?(d=n,n={error:d}):N(n)&&(n.error?d=n.error:(f=!0,n.ok&&P(n.ok)&&(g=!0),d=n.ok))),a.msg=(f?d:d||s.messages[c]||B.defaultMsg).replace("{0}",r.display||"")),f){if(a.valid=!0,!g){var p=r.ok||L(u,"data-ok");p?(g=!0,a.msg=p):P(l.showOk)&&(g=!0,a.msg=l.showOk)}a.showOk=g,e(u).trigger("valid.rule",[c])}else s.isValid=!1,e(u).trigger("invalid.rule",[c]);l.debug&&X[f?"info":"warn"](r.vid+": "+c+" -> "+(a.msg||!0)),f&&r.old.value!==t&&r.old.value!==u.value?(r.vid=0,s._checkRule(u,r)):f&&r.vid<r.rules.length-1?(r.vid++,s._checkRule(u,r)):(r.vid=0,e(u).trigger("validated.field",[r,a]))},_checkRule:function(i,n){var r,a=this,s=n.key,l=n.rules[n.vid],o=l.method,d=l.params;if(!a.submiting||!a.deferred[s])if(n.rid=o,n.old.value=i.value,r=(u(i,o)||a.rules[o]||function(){return!0}).call(a,i,d,n),N(r)&&H(r.then)){var c=function(e){return P(e)||N(e)&&("error"in e||"ok"in e)?e:t};a.deferred[s]=r,!a.checkOnly&&a.showMsg(i,{type:"loading",msg:a.options.loadingMsg}),r.then(function(r,a,s){var l,u=s.responseText;""===u?u=!0:"{"===u.charAt(0)&&(u=e.parseJSON(u)||{},l=c(u),l===t&&(l=c(u.data)),u=l||!0),e(i).trigger("validated.rule",[u,n])},function(t,r){e(i).trigger("validated.rule",[r,n])}),n.isValid=t}else e(i).trigger("validated.rule",[r,n])},_checkField:function(e,t){return(t=t||this.getField(e))?(this._validate(e,t,!0),t.isValid):!0},_validate:function(i,n,r){var a,s,l=this,u=l.options,o=e(i),d={},c=n.group,f=L(i,$),g=n.isValid=!0;if(n&&n.rules&&!i.disabled&&!L(i,"novalidate")){if(a=n.old=n.old||{},r=r||n.must,c&&(e.extend(d,c),s=c.call(l),s!==!0?(P(s)&&(s={error:s}),n.vid=0,n.rid="group",g=!1):(s=t,l.hideMsg(i,d))),g&&!n.required&&""===i.value){if("tip"===f)return;if(l._focus({target:i}),a.value="",!o.is(":checkbox,:radio"))return o.trigger("validated.field",[n,{valid:!0}]),t}else if(!r&&a&&a.ret!==t&&a.value===i.value){if("tip"===f)return;if(""!==i.value)return d=a.ret,o.trigger("validated.field",[n,d]),t}u.debug&&X.log(i),s!==t?o.trigger("validated.rule",[s,n,d]):n.rule&&l._checkRule(i,n)}},_getMsgOpt:function(t){return e.extend({},this.msgOpt,P(t)?{msg:t}:t)},getField:function(e){var t,i=this;return t=e.id&&"#"+e.id in i.fields||!e.name?"#"+e.id:e.name,i.fields[t]},test:function(i,n){var r,a,s,l=this,u=T.exec(n);return u?(u[3]&&(u[2]=u[3]),a=u[1],s=u[2]?e.trim(u[2]).split(", "):t,a in l.rules&&(r=l.rules[a].call(l,i,s)),r===!0||r===t||r):!0},getRangeMsg:function(e,t,i,n){if(t){var r=this,a=r.messages[i]||"",s=t[0].split("~"),l=s[0],u=s[1],o="rg",d=[""],c=+e===+e;if(2===s.length){if(l&&u){if(c&&e>=+l&&+u>=e)return!0;d=d.concat(s)}else if(l&&!u){if(c&&e>=+l)return!0;d.push(l),o="gt"}else if(!l&&u){if(c&&+u>=e)return!0;d.push(u),o="lt"}}else{if(e===+l)return!0;d.push(l),o="eq"}return a&&(n&&n+o in a&&(o=n+o),d[0]=a[o]),r.renderMsg.apply(null,d)}},renderMsg:function(){var e=arguments,t=e[0],i=e.length;if(t){for(;--i;)t=t.replace("{"+i+"}",e[i]);return t}},showMsg:function(t,i){i=this._getMsgOpt(i),(i.msg||i.showOk)&&(t=e(t).get(0),L(t,$,i.type),g(t,i,this.$el))},hideMsg:function(t,i){i=this._getMsgOpt(i),p(e(t).get(0),i,this.$el)},mapMsg:function(t){var i=this;e.each(t,function(t,n){var r=i.elements[t]||e(':input[name="'+t+'"]',i.$el)[0];i.showMsg(r,n)})},setMsg:function(e){new r(e,this.messages)},setRule:function(t){new n(t,this.rules),e.map(this.fields,function(e){e.old={}})},setField:function(i,n){var r=this,a={};if(P(i)){if(null===n)return e.map(i.split(" "),function(e){e&&r.fields[e]&&(r.fields[e]=null)}),t;n&&(a[i]=n)}else N(i)&&(a=i);r.options.fields?e.extend(r.options.fields,a):r.options.fields=a,r._init()},destroy:function(){this._reset(),this.$el.off().removeData(m)}},e(function(){e("body").on("focusin",":input["+x+"]",function(){l(this)?e(this).trigger("focusin"):e(this).removeAttr(x)}).on("click submit","form:not([novalidate=true])",function(t){var i,n=e(this);n.data(m)||(i=n[m]().data(m),e.isEmptyObject(i.fields)?(L(this,"novalidate",!0),n.removeData(m)):"submit"===t.type&&i._submit(t))})}),new n({required:function(t){return!!e.trim(t.value)},integer:function(e,t){var i,n="0|",r="[1-9]\\d*",a=t?t[0]:"*";switch(a){case"+":i=r;break;case"-":i="-"+r;break;case"+0":i=n+r;break;case"-0":i=n+"-"+r;break;default:i=n+"-?"+r}return i="^(?:"+i+")$",RegExp(i).test(e.value)||this.messages.integer[a]},match:function(t,i,n){var r,a,s,l,u,o=t.value,d="eq";if(i&&(1===i.length?a=i[0]:(d=i[0],a=i[1]),l=e("#"===a.charAt(0)?a:':input[name="'+a+'"]',this.$el)[0]))switch(n.init_match||(this.$el.on("valid.field",'[name="'+a+'"]',function(){t.value&&e(t).trigger("validate")}),n.init_match=!0),u=this.getField(l),s=this.messages.match[d].replace("{1}",u.display||a),r=l.value,d){case"lt":return+r>+o||s;case"lte":return+r>=+o||s;case"gte":return+o>=+r||s;case"gt":return+o>+r||s;default:return o===r||s}},range:function(e,t){return this.getRangeMsg(+e.value,t,"range")},checked:function(t,i){if(!e(t).is(":radio,:checkbox"))return!0;var n=e('input[name="'+t.name+'"]',this.$el).filter(function(){return!this.disabled&&this.checked&&e(this).is(":visible")}).length;return i?this.getRangeMsg(n,i,"checked"):!!n||this.messages.required},length:function(e,t){var i=e.value,n=(t[1]?i.replace(R,"xx"):i).length;return t&&"~"===t[0].charAt(0)&&(t[0]="0"+t[0]),this.getRangeMsg(n,t,"length",t[1]?"2_":"")},remote:function(t,i){var n,r=this,a={};return i?(n=j.exec(i[0]),a[t.name]=t.value,i[1]&&e.map(i.slice(1),function(t){a[t]=e(':input[name="'+t+'"]',r.$el).val()}),e.ajax({url:n[2],async:!0,type:n[1]||"POST",data:a,cache:!1})):!0},filter:function(e,t){var i=t?RegExp("["+t[0]+"]","g"):E;return e.value=e.value.replace(i,""),!0}}),i.setTheme=function(t,i){N(t)?e.each(t,function(e,t){J[e]=t}):P(t)&&N(i)&&(J[t]=i)},i.config=function(t){e.each(t,function(e,t){"rules"===e?new n(t):"messages"===e?new r(t):B[e]=t})},e[m]=i}(jQuery);
