webpackJsonp([1],{"52Qt":function(t,e){},LxEu:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("main",{staticClass:"app",attrs:{id:"app"}},[e("div",{staticClass:"app__inner"},[this._m(0),this._v(" "),e("router-view")],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{staticClass:"heading-01"},[e("span",{staticClass:"heading-01__inner"},[this._v("Youtube Caption Downloader")])])}]};var i=n("VU/8")({name:"App"},o,!1,function(t){n("LxEu")},null,null).exports,r=n("/ocq"),s=new DOMParser,l={name:"Downloader",data:function(){return{apiUrl:"https://video.google.com/timedtext?",url:"",videoId:"",langs:[],selectedLang:{},selectedLangCode:"",caption:""}},computed:{noCapture:function(){return!!(this.url&&this.langs.length<=0)},hasCapture:function(){return this.langs.length>0},endpointLang:function(){return this.apiUrl+"type=list&v="+this.videoId},endpointCaption:function(){return this.apiUrl+"name="+this.selectedLang.name+"&hl="+this.selectedLang.code+"&lang="+this.selectedLang.code+"&v="+this.videoId},downloadUrl:function(){return"data:application/octet-stream,"+encodeURIComponent(this.caption)}},watch:{url:function(){this.getCaptionByUrl(this.url)},selectedLangCode:function(){for(var t=0,e=this.langs.length,n={};t<e;t++)if((n=this.langs[t]).code===this.selectedLangCode)return this.selectedLang=n,void this.updateCaption()}},methods:{getCaptionByUrl:function(t){var e=this;this.videoId=this.getVideoIdByUrl(this.url),this.videoId?(localStorage.setItem("url",this.url),fetch(this.endpointLang).then(function(t){return t.text()}).then(function(t){var n=s.parseFromString(t,"application/xml").getElementsByTagName("track");if(n.length<=0)throw new Error("NO track");e.langs=e.getLangByTrack(n)}).catch(function(t){e.clearCaption()})):this.clearCaption()},clearCaption:function(){this.videoId="",this.langs=[]},getVideoIdByUrl:function(t){var e=t.match(/v=(.*?)(&|$)/);return!e||e.length<=0||t.indexOf("https://www.youtube.com")<0?"":e[1]},getLangByTrack:function(t){for(var e=0,n=t.length,a=[];e<n;e++){var o=t[e],i="true"===o.getAttribute("lang_default"),r={name:o.getAttribute("name")||"",label:o.getAttribute("lang_original")||"",code:o.getAttribute("lang_code")||"",default:i};i&&(this.selectedLangCode=r.code,this.selectedLang=r),a.push(r)}return this.updateCaption(),a},updateCaption:function(){var t=this;fetch(this.endpointCaption).then(function(t){return t.text()}).then(function(e){for(var n=s.parseFromString(e,"application/xml").getElementsByTagName("text"),a=0,o=n.length,i="";a<o;a++)i+=n[a].textContent+"\n";t.caption=i}).catch(function(t){this.caption=""})}},created:function(){this.url=localStorage.getItem("url")}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"downloader"},[n("section",{staticClass:"downloader__section"},[t._m(0),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.url,expression:"url"}],staticClass:"downloader__input",attrs:{type:"text",id:"form-url",placeholder:"https://www.youtube.com/watch?v=XXXXXXXXXXX"},domProps:{value:t.url},on:{input:function(e){e.target.composing||(t.url=e.target.value)}}})]),t._v(" "),n("transition",{attrs:{name:"downloader__animation--slide"}},[t.videoId?n("div",{staticClass:"downloader__section"},[n("div",{staticClass:"downloader__media"},[n("iframe",{staticClass:"downloader__media-iframe",attrs:{width:"600",height:"240",src:"https://www.youtube.com/embed/"+t.videoId}})])]):t._e()]),t._v(" "),n("transition",{attrs:{name:"downloader__animation--slide"}},[t.hasCapture?n("section",{staticClass:"downloader__section"},[n("h2",{staticClass:"downloader__heading"},[n("label",{staticClass:"downloader__heading-inner",attrs:{for:"form-lang"}},[t._v("Language")])]),t._v(" "),n("div",{staticClass:"downloader__lang"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedLangCode,expression:"selectedLangCode"}],staticClass:"downloader__lang-select",attrs:{id:"form-lang"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.selectedLangCode=e.target.multiple?n:n[0]}}},t._l(t.langs,function(e){return n("option",{key:e.code,domProps:{value:e.code}},[t._v(t._s(e.label))])}))]),t._v(" "),n("textarea",{staticClass:"downloader__textarea",domProps:{innerHTML:t._s(t.caption)}}),t._v(" "),n("p",{staticClass:"downloader__button"},[n("a",{staticClass:"downloader__button-anchor",attrs:{href:t.downloadUrl,download:t.videoId+".txt"}},[t._v("Download")])])]):t._e()]),t._v(" "),n("transition",{attrs:{name:"downloader__animation--slide"}},[t.noCapture?n("div",{staticClass:"downloader__section"},[n("p",[n("small",[t._v("No caption.")])])]):t._e()])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{staticClass:"downloader__heading"},[e("label",{staticClass:"downloader__heading-inner",attrs:{for:"form-url"}},[this._v("URL")])])}]};var c=n("VU/8")(l,d,!1,function(t){n("52Qt")},"data-v-19d78c98",null).exports;a.a.use(r.a);var u=new r.a({routes:[{path:"/",name:"Downloader",component:c}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:u,components:{App:i},template:"<App/>"})}},["NHnr"]);