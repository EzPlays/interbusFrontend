"use strict";(self["webpackChunkinterbus"]=self["webpackChunkinterbus"]||[]).push([[486],{2486:function(t,s,e){e.r(s),e.d(s,{default:function(){return b}});var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"about"},[e("HeaderComponent"),e("link",{attrs:{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css",integrity:"sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==",crossorigin:"anonymous",referrerpolicy:"no-referrer"}}),e("link",{attrs:{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"}}),e("link",{attrs:{rel:"stylesheet",href:"https://unpkg.com/boxicons@latest/css/boxicons.min.css"}}),e("div",{staticClass:"container vh-100"},[e("router-link",{staticClass:"btn btn-outline-primary mt-4",attrs:{"aria-current":"page",href:"#",to:"/NuevoBusView"}},[e("i",{staticClass:"bx bxs-plus-circle bx-md"})]),e("table",{staticClass:"table table-bordered table-striped text-center mt-4"},[t._m(0),e("tbody",t._l(t.buses,(function(s){return e("tr",{key:s.id},[e("td",[t._v(t._s(s.id))]),e("td",[t._v(t._s(s.num_bus))]),e("td",[t._v(t._s(s.placa))]),e("td",[t._v(t._s(s.tipo_bus))]),e("td",[e("router-link",{staticClass:"btn btn-outline-info",attrs:{to:{path:"/EditBusView/{{id}}",params:{id:s.id}}}},[e("i",{staticClass:"fa-solid fa-pen-to-square"})]),e("a",{staticClass:"btn btn-outline-danger",attrs:{href:""},on:{click:function(e){return t.Eliminar(s.id)}}},[e("i",{staticClass:"fa-solid fa-trash"})])],1)])})),0)])],1),e("FooterComponent")],1)},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("thead",[e("tr",{staticClass:"bg-primary text-white"},[e("th",{staticClass:"col-1"},[t._v("id")]),e("th",{staticClass:"col-2"},[t._v("num_bus")]),e("th",{staticClass:"col-2"},[t._v("placa")]),e("th",{staticClass:"col-2"},[t._v("tipo_bus")]),e("th",{staticClass:"col-4"},[t._v("Opciones")])])])}],a=e(9669),o=e.n(a),r=e(5370),l=e(9671),c={name:"BusesView",components:{HeaderComponent:r.Z,FooterComponent:l.Z},data:function(){return{buses:""}},mounted:function(){this.verBuses(),this.Eliminar()},methods:{verBuses:function(){var t=this;o().get("http://localhost:3000/buses").then((function(s){t.buses=s.data,console.log(t.buses)})).catch((function(t){console.log(t)}))},Eliminar:function(t){o()["delete"]("http://localhost:3000/buses/"+t).then((function(t){console.log(t)})),this.verBuses()},refre:function(){this.verBuses()}}},u=c,h=e(1001),d=(0,h.Z)(u,n,i,!1,null,"3ebbc7d6",null),b=d.exports}}]);
//# sourceMappingURL=486-legacy.e06f3b70.js.map