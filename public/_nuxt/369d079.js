(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{437:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n(26),n(47);var r={props:{size:{type:Number,required:!1,default:8}},data:function(){return{pageNumber:0}},computed:{pageCount:function(){if(this.items){var t=this.items.length,s=this.size;return Math.ceil(t/s)}return 0},paginatedData:function(){var t=this.pageNumber*this.size,e=t+this.size;return this.items?this.items.slice(t,e):[]}},methods:{nextPage:function(){this.pageNumber++},prevPage:function(){this.pageNumber--}}}},439:function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},677:function(t,e,n){var map={"./af":464,"./af.js":464,"./ar":465,"./ar-dz":466,"./ar-dz.js":466,"./ar-kw":467,"./ar-kw.js":467,"./ar-ly":468,"./ar-ly.js":468,"./ar-ma":469,"./ar-ma.js":469,"./ar-sa":470,"./ar-sa.js":470,"./ar-tn":471,"./ar-tn.js":471,"./ar.js":465,"./az":472,"./az.js":472,"./be":473,"./be.js":473,"./bg":474,"./bg.js":474,"./bm":475,"./bm.js":475,"./bn":476,"./bn-bd":477,"./bn-bd.js":477,"./bn.js":476,"./bo":478,"./bo.js":478,"./br":479,"./br.js":479,"./bs":480,"./bs.js":480,"./ca":481,"./ca.js":481,"./cs":482,"./cs.js":482,"./cv":483,"./cv.js":483,"./cy":484,"./cy.js":484,"./da":485,"./da.js":485,"./de":486,"./de-at":487,"./de-at.js":487,"./de-ch":488,"./de-ch.js":488,"./de.js":486,"./dv":489,"./dv.js":489,"./el":490,"./el.js":490,"./en-au":491,"./en-au.js":491,"./en-ca":492,"./en-ca.js":492,"./en-gb":493,"./en-gb.js":493,"./en-ie":494,"./en-ie.js":494,"./en-il":495,"./en-il.js":495,"./en-in":496,"./en-in.js":496,"./en-nz":497,"./en-nz.js":497,"./en-sg":498,"./en-sg.js":498,"./eo":499,"./eo.js":499,"./es":500,"./es-do":501,"./es-do.js":501,"./es-mx":502,"./es-mx.js":502,"./es-us":503,"./es-us.js":503,"./es.js":500,"./et":504,"./et.js":504,"./eu":505,"./eu.js":505,"./fa":506,"./fa.js":506,"./fi":507,"./fi.js":507,"./fil":508,"./fil.js":508,"./fo":509,"./fo.js":509,"./fr":510,"./fr-ca":511,"./fr-ca.js":511,"./fr-ch":512,"./fr-ch.js":512,"./fr.js":510,"./fy":513,"./fy.js":513,"./ga":514,"./ga.js":514,"./gd":515,"./gd.js":515,"./gl":516,"./gl.js":516,"./gom-deva":517,"./gom-deva.js":517,"./gom-latn":518,"./gom-latn.js":518,"./gu":519,"./gu.js":519,"./he":520,"./he.js":520,"./hi":521,"./hi.js":521,"./hr":522,"./hr.js":522,"./hu":523,"./hu.js":523,"./hy-am":524,"./hy-am.js":524,"./id":525,"./id.js":525,"./is":526,"./is.js":526,"./it":527,"./it-ch":528,"./it-ch.js":528,"./it.js":527,"./ja":529,"./ja.js":529,"./jv":530,"./jv.js":530,"./ka":531,"./ka.js":531,"./kk":532,"./kk.js":532,"./km":533,"./km.js":533,"./kn":534,"./kn.js":534,"./ko":535,"./ko.js":535,"./ku":536,"./ku.js":536,"./ky":537,"./ky.js":537,"./lb":538,"./lb.js":538,"./lo":539,"./lo.js":539,"./lt":540,"./lt.js":540,"./lv":541,"./lv.js":541,"./me":542,"./me.js":542,"./mi":543,"./mi.js":543,"./mk":544,"./mk.js":544,"./ml":545,"./ml.js":545,"./mn":546,"./mn.js":546,"./mr":547,"./mr.js":547,"./ms":548,"./ms-my":549,"./ms-my.js":549,"./ms.js":548,"./mt":550,"./mt.js":550,"./my":551,"./my.js":551,"./nb":552,"./nb.js":552,"./ne":553,"./ne.js":553,"./nl":554,"./nl-be":555,"./nl-be.js":555,"./nl.js":554,"./nn":556,"./nn.js":556,"./oc-lnc":557,"./oc-lnc.js":557,"./pa-in":558,"./pa-in.js":558,"./pl":559,"./pl.js":559,"./pt":560,"./pt-br":561,"./pt-br.js":561,"./pt.js":560,"./ro":562,"./ro.js":562,"./ru":563,"./ru.js":563,"./sd":564,"./sd.js":564,"./se":565,"./se.js":565,"./si":566,"./si.js":566,"./sk":567,"./sk.js":567,"./sl":568,"./sl.js":568,"./sq":569,"./sq.js":569,"./sr":570,"./sr-cyrl":571,"./sr-cyrl.js":571,"./sr.js":570,"./ss":572,"./ss.js":572,"./sv":573,"./sv.js":573,"./sw":574,"./sw.js":574,"./ta":575,"./ta.js":575,"./te":576,"./te.js":576,"./tet":577,"./tet.js":577,"./tg":578,"./tg.js":578,"./th":579,"./th.js":579,"./tk":580,"./tk.js":580,"./tl-ph":581,"./tl-ph.js":581,"./tlh":582,"./tlh.js":582,"./tr":583,"./tr.js":583,"./tzl":584,"./tzl.js":584,"./tzm":585,"./tzm-latn":586,"./tzm-latn.js":586,"./tzm.js":585,"./ug-cn":587,"./ug-cn.js":587,"./uk":588,"./uk.js":588,"./ur":589,"./ur.js":589,"./uz":590,"./uz-latn":591,"./uz-latn.js":591,"./uz.js":590,"./vi":592,"./vi.js":592,"./x-pseudo":593,"./x-pseudo.js":593,"./yo":594,"./yo.js":594,"./zh-cn":595,"./zh-cn.js":595,"./zh-hk":596,"./zh-hk.js":596,"./zh-mo":597,"./zh-mo.js":597,"./zh-tw":598,"./zh-tw.js":598};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=677},737:function(t,e,n){"use strict";n.r(e);n(47);var r=n(425),o=n.n(r),filter={filters:{formatDate:function(t){if(!t)return"-";var e=t;return o()(e).format("Do MMM YYYY")},fullDate:function(t){if(!t)return"-";var e=t;return o()(e).format("dddd Do, MMMM YYYY")},formatCreation:function(t){if(!t)return"-";var e=t.toDate();return o()(e).fromNow()}}},j=n(437),l=n(686),c=n.n(l),d={mixins:[filter,j.a],props:{posts:{type:Array,default:function(){return[]}},edit:{type:Boolean,default:!1},delete:{type:Boolean,default:!1}},computed:{pageCount:function(){var t=this.posts.length,s=this.size;return Math.ceil(t/s)},paginatedData:function(){var t=this.pageNumber*this.size,e=t+this.size;return this.posts.slice(t,e)}},methods:{editPost:function(t){var e=c.a.cloneDeep(t);this.$emit("update:edit",!0),this.$emit("update:post",e)},deletePost:function(t){this.$emit("update:delete",!0),this.$emit("update:post",t)}}},m=n(59),f=n(60),h=n.n(f),v=n(407),k=n(419),y=n(424),_=n(186),z=n(421),w=n(791),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"p-0 pt-5",attrs:{fluid:""}},[n("v-row",[n("v-col",[n("v-simple-table",{staticClass:"table"},[n("thead",{staticClass:"black text-white"},[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("Title")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("Created")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("Updated")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("Action")])])]),t._v(" "),n("tbody",t._l(t.paginatedData,(function(e,r){return n("tr",{key:r},[n("th",{attrs:{scope:"row"}},[t._v("\n              "+t._s(e.carousel.content.title)+"\n            ")]),t._v(" "),n("td",[t._v(t._s(t._f("formatCreation")(e.createdOn)))]),t._v(" "),null!=e.lastUpdateOn?n("td",[t._v("\n              "+t._s(t._f("formatCreation")(e.lastUpdateOn))+"\n            ")]):n("td",[t._v("-- -- --")]),t._v(" "),n("td",[n("v-btn",{staticClass:"mx-1 primary",nativeOn:{click:function(n){return t.editPost(e)}}},[n("v-icon",[t._v("mdi-circle-edit-outline")])],1),t._v(" "),n("v-btn",{staticClass:"mx-1 error",nativeOn:{click:function(n){return t.deletePost(e)}}},[n("v-icon",[t._v("mdi-delete-circle-outline")])],1)],1)])})),0)])],1),t._v(" "),n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[n("v-btn",{staticClass:"primary",class:{"d-none":0==t.pageNumber},nativeOn:{click:function(e){return t.prevPage(e)}}},[n("v-icon",[t._v(" mdi-chevron-double-left")])],1),t._v("\n      "+t._s(t.pageNumber+1)+" of "+t._s(t.pageCount)+"\n      "),n("v-btn",{staticClass:"primary",class:{"d-none":t.pageNumber>=t.pageCount-1},nativeOn:{click:function(e){return t.nextPage(e)}}},[n("v-icon",[t._v(" mdi-chevron-double-right")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VBtn:v.a,VCol:k.a,VContainer:y.a,VIcon:_.a,VRow:z.a,VSimpleTable:w.a})}}]);