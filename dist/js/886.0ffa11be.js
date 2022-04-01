"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[886],{9070:function(t,s,a){a.d(s,{Z:function(){return S}});var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"dashmain"},[a("div",{staticClass:"sidebar"},[a("SideBarComponent")],1),a("div",{staticClass:"content-right"},[a("div",{staticClass:"navbar"},[a("NavBarComponent")],1),a("div",{staticClass:"content-pages"},[t._t("slot-pages")],2)])])},o=[],n=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"navbarTop"},[t._m(0),a("a",{staticClass:"logout",attrs:{href:""},on:{click:function(s){return s.preventDefault(),t.logout.apply(null,arguments)}}},[a("i",{staticClass:"fa-solid fa-right-from-bracket"}),t._v(" Sair")])])},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticStyle:{"line-height":"6px","padding-top":"12px"}},[a("p",{staticStyle:{"font-size":"25px","font-family":"caviar dreams","font-weight":"bold"}},[t._v("ANDRÉ SECCO")]),a("p",{staticStyle:{"font-size":"10px","font-weight":"bold","font-family":"caviar dreams"}},[t._v("MAIS, MELHOR E EM MENOS TEMPO")])])}],r={name:"NavBarComponent",methods:{logout(){this.$router.push({name:"login"})}}},l=r,c=a(1001),d=(0,c.Z)(l,n,i,!1,null,"28b24207",null),p=d.exports,u=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"sidebar"},[t._m(0),a("div",{staticClass:"menu"},[a("p",{}),a("hr"),a("ul",[a("router-link",{attrs:{to:{name:"home"}}},[a("li",[a("i",{staticClass:"fa fa-home icon"}),t._v(" Início")])]),a("router-link",{attrs:{to:{name:"sobre"}}},[a("li",[a("i",{staticClass:"fa-solid fa-address-card icon"}),t._v(" Sobre")])]),a("router-link",{attrs:{to:{name:"produtos"}}},[a("li",[a("i",{staticClass:"fa-solid fa-box-archive icon"}),t._v(" Produtos ")])]),a("router-link",{attrs:{to:{name:"clientes"}}},[a("li",[a("i",{staticClass:"fa-solid fa-user icon"}),t._v(" Clientes")])])],1)])])},C=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"top"},[a("div",{staticClass:"avatar"},[a("span",[a("i",{staticClass:"fa fa-user"})])]),a("div",{staticClass:"info"},[a("p",{staticClass:"name"},[t._v("André Secco")]),a("p",{staticClass:"status"},[t._v("Online")])])])}],m={name:"SideBarComponent"},v=m,f=(0,c.Z)(v,u,C,!1,null,null,null),_=f.exports,h={name:"DashBoardComponent",components:{NavBarComponent:p,SideBarComponent:_}},g=h,b=(0,c.Z)(g,e,o,!1,null,"3c37c826",null),S=b.exports},7886:function(t,s,a){a.r(s),a.d(s,{default:function(){return y}});var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("DashBoardComponent",[a("div",{staticClass:"main",attrs:{slot:"slot-pages"},slot:"slot-pages"},[a("div",{staticClass:"pages"},[a("header",[a("h1",[t._v("DashBoard")])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("CardComponent",{attrs:{type:"Clientes",iconeCard:"fa-users",qtd:t.clients.length}})],1),a("div",{staticClass:"col"},[a("CardComponent",{attrs:{type:"Produtos",iconeCard:"fa-box",qtd:t.produtos.length}})],1),a("div",{staticClass:"col"},[a("CardComponent",{attrs:{type:"Relatórios",percentagem:"25%",iconeCard:"fa-chart-bar",qtd:"30"}})],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"container mt-3"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col col-md-6"},[a("ListsComponent",{attrs:{data:t.clients,description:"Clientes",columns:["Nome","E-mail"]}})],1),a("div",{staticClass:"col col-md-6"},[a("ListsComponent",{attrs:{data:t.produtos,description:"Produtos",columns:["Nome","Descrição"]}})],1)])])])])])])],1)},o=[],n=a(9070),i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"my_card"},[a("div",{staticClass:"top content"},[a("h3",[t._v(t._s(t.type))]),a("p",{staticClass:"percentagem"},[t._v(" "+t._s(t.percentagem))])]),a("div",{staticClass:"footer content"},[a("i",{class:["fa ico iconeCard",t.iconeCard]}),a("p",{staticClass:"qtd"},[t._v(t._s(t.qtd))])])])},r=[],l={name:"CardComponent",props:{type:String,percentagem:String,iconeCard:String,qtd:String}},c=l,d=a(1001),p=(0,d.Z)(c,i,r,!1,null,"47d7333c",null),u=p.exports,C=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"lists"},[a("div",{staticClass:"top top-title"},[a("p",[t._v(t._s(t.description)+" "),a("span",{staticClass:"badge badge-info"},[t._v(t._s(t.data.length)+" ")])])]),a("div",{staticClass:"content top"},[a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("Id")]),a("th",{attrs:{scope:"col"}},[t._v(t._s(t.columns[0]))]),a("th",{attrs:{scope:"col"}},[t._v(t._s(t.columns[1]))])])]),a("tbody",t._l(t.data,(function(s){return a("tr",{key:s.id},[a("th",{attrs:{scope:"row"}},[t._v(t._s(s.id))]),a("td",[t._v(t._s(s.nomeProd))]),a("td",[t._v(t._s("Clientes"==t.descritpion?s.email:s.descricao))])])})),0)])])])},m=[],v={name:"ListsComponents",props:{data:Array,description:String,columns:{}}},f=v,_=(0,d.Z)(f,C,m,!1,null,"5b2e8797",null),h=_.exports;a(9669)["default"];a(9669)["default"]=a(9669);a(9669)["default"];var g={name:"HomeComponent",data(){return{clients:[],produtos:[]}},mounted(){this.getProdutos()},methods:{async getProdutos(){const t=await fetch("http://localhost:3000/produtos"),s=await t.json();this.produtos=s,console.log(this.produtos)}},components:{DashBoardComponent:n.Z,CardComponent:u,ListsComponent:h}},b=g,S=(0,d.Z)(b,e,o,!1,null,null,null),y=S.exports}}]);
//# sourceMappingURL=886.0ffa11be.js.map