(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{565:function(e,t,o){var content=o(610);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(19).default)("611d514e",content,!0,{sourceMap:!1})},609:function(e,t,o){"use strict";o(565)},610:function(e,t,o){var n=o(18)((function(i){return i[1]}));n.push([e.i,".qrcode canvas{border:15px solid #fff}.v-window-item .v-image__image.v-image__image--cover{background-size:contain}",""]),n.locals={},e.exports=n},631:function(e,t,o){"use strict";o.r(t);var n=o(621),r=o(271),l=o(256),c=o(158),d=o(633),m=o(634),_=o(550),v=o(627),f=o(260),h=o(530),w=o(548),x=o(149),G=o(257),k=o(544),$=o(620),y=o(632),L=o(617),R=(o(22),o(198),o(25),o(35),o(45),o(52),o(3),o(72),o(6),o(46),o(21)),S=(o(77),o(66),{components:{QrcodeVue:o(564).a},asyncData:function(){return new Promise((function(e){setTimeout((function(){e({})}),500)}))},data:function(){return{search:"",games:null,headers:null,selectGame:null,dialogGame:!1,dialogVideo:!1,downloadLinks:[],tabGame:null,QRCodeURL:void 0,QRsize:void 0}},fetch:function(){var e=this;return Object(R.a)(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.$get("https://ghosteshop.com/dbapi.php");case 2:o=t.sent,e.games=o,e.games.storeContent=e.games.storeContent.reverse(),e.headers=[{text:e.$t("games.icon"),align:"start",value:"info.icon_url",sortable:!1},{text:e.$t("games.title"),value:"info.title"},{text:e.$t("games.description"),value:"info.description",sortable:!1},{text:e.$t("games.version"),value:"info.version",sortable:!1},{text:e.$t("games.author"),value:"info.author"},{text:e.$t("games.category"),value:"info.category"},{text:e.$t("games.console"),value:"info.console"}];case 6:case"end":return t.stop()}}),t)})))()},head:function(){return{title:this.$t("titles.games")}},watch:{tabGame:function(e,t){this.downloadLinks[e]?(this.QRCodeURL=this.downloadLinks[e].downloadLink,this.QRsize=this.downloadLinks[e].downloadSize):(this.QRCodeURL=this.downloadLinks[0].downloadLink,this.QRsize=this.downloadLinks[0].downloadSize)}},methods:{selectGameBtn:function(e){for(var i in this.downloadLinks=[],this.QRsize=void 0,this.QRCodeURL=void 0,this.videosURL=void 0,e)"info"!==i&&this.downloadLinks.push({name:i,downloadLink:e[i].script[0].file,downloadSize:e[i].size});this.QRCodeURL=this.downloadLinks[0].downloadLink,this.QRsize=this.downloadLinks[0].downloadSize,this.videosURL=e,this.selectGame=e,this.dialogGame=!0,this.dialogVideo=!1},displayVideos:function(){this.dialogVideo=!0}}}),Q=(o(609),o(55)),component=Object(Q.a)(S,(function(){var e=this,t=e._self._c;return t("div",[t("br"),e._v(" "),t("h1",{staticStyle:{"margin-top":"62px","text-align":"center",padding:"0px 50px 0px 50px"}},[e._v("\n    "+e._s(e.$t("games.list"))+"\n  ")]),e._v(" "),t("h3",{staticStyle:{"text-align":"center",padding:"0px 50px 0px 50px"}},[e._v("\n    "+e._s(e.$t("games.subtitle"))+"\n  ")]),e._v(" "),t(_.a,[t(l.a,[t(c.c,[e._v(e._s(e.$t("games.search"))+"\n        "),t(k.a),e._v(" "),t(L.a,{attrs:{"append-icon":"mdi-magnify",label:e.$t("games.inputhere"),"single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),e._v(" "),e.$fetchState.pending?t(G.a,{attrs:{indeterminate:"",color:"primary"}}):e._e(),e._v(" "),e.$fetchState.pending?e._e():t(v.a,{staticClass:"elevation-1",staticStyle:{cursor:"pointer"},attrs:{headers:e.headers,items:e.games.storeContent,search:e.search,"items-per-page":15,"loading-text":"Loading... Please wait","footer-props":{"items-per-page-options":[15,30,50,100,-1],sortBy:"item.info.title"}},on:{"click:row":e.selectGameBtn},scopedSlots:e._u([{key:"item.info.icon_url",fn:function(e){var o=e.item;return[t("img",{attrs:{src:o.info.icon_url?o.info.icon_url:"noicon.png"}})]}}],null,!1,4291880806)})],1),e._v(" "),e.selectGame?t(f.a,{attrs:{scrollable:"",width:"800"},model:{value:e.dialogGame,callback:function(t){e.dialogGame=t},expression:"dialogGame"}},[t(l.a,{attrs:{outlined:""}},[e.selectGame.info.screenshots?t(d.a,{attrs:{continuous:!0,"show-arrows":!1,cycle:"","show-arrows-on-hover":"","delimiter-icon":"mdi-minus",height:"300"}},e._l(e.selectGame.info.screenshots,(function(e,i){return t(m.a,{key:i,attrs:{src:e.url}})})),1):e._e(),e._v(" "),e.downloadLinks[1]?t(y.a,{attrs:{"next-icon":"mdi-arrow-right-bold-box-outline","prev-icon":"mdi-arrow-left-bold-box-outline","show-arrows":""},model:{value:e.tabGame,callback:function(t){e.tabGame=t},expression:"tabGame"}},e._l(e.downloadLinks,(function(o){return t($.a,{key:o.name},[e._v("\n            "+e._s(o.name)+"\n          ")])})),1):e._e(),e._v(" "),t(c.c,[e._v("\n          "+e._s(e.selectGame.info.title)+"\n          "),e.selectGame.info.videos?t(r.a,{attrs:{icon:""},on:{click:function(t){e.dialogVideo=!0,e.dialogGame=!1}}},[t(x.a,[e._v("mdi-movie")])],1):e._e()],1),e._v(" "),e.selectGame.info.console.toString().replace(",",", ").includes("NEW3DS")?t(n.a,{staticStyle:{margin:"12px"},attrs:{dense:"",text:"",icon:"mdi-alert-circle",border:"left",type:"error"}},[e._v(e._s(e.$t("games.requirement_needed")))]):e._e(),e.selectGame.info.console.toString().replace(",",", ").includes("DSi")?t(n.a,{staticStyle:{margin:"12px"},attrs:{dense:"",text:"",icon:"mdi-alert-circle",border:"left",type:"error"}},[e._v(e._s(e.$t("games.nand_storage"))+"\n        ")]):e._e(),e._v(" "),t(c.b,[t("b",[e._v("Description :")]),e._v("\n          "+e._s(e.selectGame.info.description?e.selectGame.info.description:e.$t("games.notspecified"))+"\n          "),t("br"),e._v(" "),t("b",[e._v("Version :")]),e._v("\n          "+e._s(e.selectGame.info.version?e.selectGame.info.version:e.$t("games.notspecified"))+"\n          "),t("br"),e._v(" "),t("b",[e._v(e._s(e.$t("games.author"))+" :")]),e._v("\n          "+e._s(e.selectGame.info.author?e.selectGame.info.author:e.$t("games.notspecified"))+"\n          "),t("br"),e._v(" "),t("b",[e._v(e._s(e.$t("games.category"))+" :")]),e._v("\n          "+e._s(e.selectGame.info.category.toString().replace(",",", ")?e.selectGame.info.category.toString().replace(",",", "):e.$t("games.notspecified"))+"\n          "),t("br"),e._v(" "),t("b",[e._v("Console :")]),e._v("\n          "+e._s(e.selectGame.info.console.toString().replace(",",", ")?e.selectGame.info.console.toString().replace(",",", "):e.$t("games.notspecified"))+"\n          "),t("br"),e._v(" "),t("b",[e._v(e._s(e.$t("games.last_updated"))+" :")]),e._v("\n          "+e._s(e.selectGame.info.last_updated?e.selectGame.info.last_updated:e.$t("games.notspecified"))+"\n          "),t("br"),e._v(" "),t(l.a,{attrs:{flat:""}},[e.QRCodeURL?t("qrcode-vue",{staticClass:"qrcode text-center",attrs:{value:e.QRCodeURL,size:200}}):e._e()],1)],1),e._v(" "),t(w.a,[t(k.a),e._v(" "),t("div",{attrs:{"v-if":e.QRsize}},[e._v(e._s(e.$t("games.size"))+" : "+e._s(e.QRsize))]),e._v(" "),t(r.a,{attrs:{icon:"",href:e.QRCodeURL.replace("http://","https://")}},[t(x.a,[e._v("mdi-download")])],1),e._v(" "),t(r.a,{attrs:{color:"primary",text:""},on:{click:function(t){e.dialogGame=!1}}},[e._v("\n            "+e._s(e.$t("close"))+"\n          ")])],1)],1)],1):e._e(),e._v(" "),e.selectGame?t(f.a,{attrs:{scrollable:"",width:"800"},model:{value:e.dialogVideo,callback:function(t){e.dialogVideo=t},expression:"dialogVideo"}},[t(l.a,{attrs:{outlined:""}},[e._l(e.selectGame.info.videos,(function(o,i){return t("div",{key:i},[t("h3",{staticStyle:{margin:"5px"},attrs:{align:"center"}},[e._v(e._s(o.description)+" :")]),e._v(" "),t("video",{staticClass:"elevation-10",staticStyle:{"margin-left":"5%","margin-right":"5%","margin-bottom":"12px","border-radius":"10px"},attrs:{controls:"",src:o.url,height:"auto",width:"90%"}}),e._v(" "),i!=e.selectGame.info.videos.length-1?t(h.a,{staticStyle:{"margin-top":"5px"}}):e._e()],1)})),e._v(" "),t(w.a,[t(k.a),e._v(" "),t(r.a,{attrs:{color:"primary",text:""},on:{click:function(t){e.dialogVideo=!1,e.dialogGame=!0}}},[e._v("\n            "+e._s(e.$t("close"))+"\n          ")])],1)],2)],1):e._e()],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);