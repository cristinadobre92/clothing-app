(this["webpackJsonpclothing-app"]=this["webpackJsonpclothing-app"]||[]).push([[0],{35:function(e,t,a){e.exports=a(66)},40:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(22),c=a.n(i),l=(a(40),a(3)),s=a.n(l),o=a(11),m=a(12),u=a(5),p=a(6),d=a(7),g=a(8),h=a(14),b=a(19),f=a.n(b),v=(a(42),a(45),function(){var e=Object(m.a)(s.a.mark((function e(t,a){var n,r,i,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return n=y.doc("users/".concat(t.uid)),e.next=5,n.get();case 5:if(e.sent.exists){e.next=17;break}return r=t.displayName,i=t.email,c=new Date,e.prev=9,e.next=12,n.set(Object(o.a)({displayName:r,email:i,createdAt:c},a));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",n);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,a){return e.apply(this,arguments)}}());f.a.initializeApp({apiKey:"AIzaSyCUQexn87d9aZ4Z23z8-BTIlP_zPUzI1cE",authDomain:"clothing-db-66fc4.firebaseapp.com",databaseURL:"https://clothing-db-66fc4.firebaseio.com",projectId:"clothing-db-66fc4",storageBucket:"clothing-db-66fc4.appspot.com",messagingSenderId:"538121001082",appId:"1:538121001082:web:e00f0a1e4272c6b1ffc3c3",measurementId:"G-GBZ5PFP7YH"});var E=f.a.auth(),y=f.a.firestore(),w=new f.a.auth.GoogleAuthProvider;w.setCustomParameters({prompt:"select_account"});var k=function(){return E.signInWithPopup(w)},O=(f.a,a(13)),N=(a(51),a(52),a(9)),U=(a(53),Object(h.g)((function(e){var t=e.title,a=e.imageUrl,n=e.size,i=e.history,c=e.linkUrl,l=e.match;return r.a.createElement("div",{className:"".concat(n," menu-item"),onClick:function(){return i.push("".concat(l.url).concat(c))}},r.a.createElement("div",{className:"background-image",style:{backgroundImage:"url(".concat(a,")")}}),r.a.createElement("div",{className:"content"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("span",{className:"subtitle"},"SHOP NOW")))}))),j=(a(55),function(e){Object(g.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).state={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},e}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"directory-menu"},this.state.sections.map((function(e){var t=e.id,a=Object(N.a)(e,["id"]);return r.a.createElement(U,Object.assign({key:t},a))})))}}]),a}(r.a.Component)),C=function(){return r.a.createElement("div",{className:"homepage"},r.a.createElement(j,null))},S=[{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}],x=(a(56),function(e){e.id;var t=e.name,a=e.price,n=e.imageUrl;return r.a.createElement("div",{className:"collection-item"},r.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(n,")")}}),r.a.createElement("div",{className:"collection-footer"},r.a.createElement("span",{className:"name"},t),r.a.createElement("span",{className:"price"},a)))}),B=(a(57),function(e){var t=e.title,a=e.items;return r.a.createElement("div",{className:"collection-preview"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("div",{className:"preview"},a.filter((function(e,t){return t<4})).map((function(e){var t=e.id,a=Object(N.a)(e,["id"]);return r.a.createElement(x,Object.assign({key:t},a))}))))}),T=function(e){Object(g.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={collections:S},n}return Object(p.a)(a,[{key:"render",value:function(){var e=this.state.collections;return r.a.createElement("div",{className:"shop-page"},e.map((function(e){var t=e.id,a=Object(N.a)(e,["id"]);return r.a.createElement(B,Object.assign({key:t},a))})))}}]),a}(r.a.Component),P=a(10);function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function R(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var G=r.a.createElement("title",null,"Group"),A=r.a.createElement("desc",null,"Created with Sketch."),D=r.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),H=function(e){var t=e.svgRef,a=e.title,n=R(e,["svgRef","title"]);return r.a.createElement("svg",I({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t},n),void 0===a?G:a?r.a.createElement("title",null,a):null,A,D)},W=r.a.forwardRef((function(e,t){return r.a.createElement(H,I({svgRef:t},e))}));a.p,a(58),a(59);function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function J(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var M=r.a.createElement("g",null),_=r.a.createElement("g",null),L=r.a.createElement("g",null),V=r.a.createElement("g",null),F=r.a.createElement("g",null),q=r.a.createElement("g",null),K=r.a.createElement("g",null),Q=r.a.createElement("g",null),Y=r.a.createElement("g",null),Z=r.a.createElement("g",null),X=r.a.createElement("g",null),$=r.a.createElement("g",null),ee=r.a.createElement("g",null),te=r.a.createElement("g",null),ae=r.a.createElement("g",null),ne=function(e){var t=e.svgRef,a=e.title,n=J(e,["svgRef","title"]);return r.a.createElement("svg",z({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t},n),a?r.a.createElement("title",null,a):null,r.a.createElement("g",null,r.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),M,_,L,V,F,q,K,Q,Y,Z,X,$,ee,te,ae)},re=r.a.forwardRef((function(e,t){return r.a.createElement(ne,z({svgRef:t},e))})),ie=(a.p,{TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN"}),ce=Object(O.b)(null,(function(e){return{toggleCartHidden:function(){return e({type:ie.TOGGLE_CART_HIDDEN})}}}))((function(e){var t=e.toggleCartHidden;return r.a.createElement("div",{className:"cart-icon",onClick:t},r.a.createElement(re,{className:"shopping-icon"}),r.a.createElement("span",{className:"item-count"},"0"))})),le=(a(60),a(61),function(e){var t=e.children,a=e.isGooogleSignIn,n=Object(N.a)(e,["children","isGooogleSignIn"]);return r.a.createElement("button",Object.assign({className:"".concat(a?"google-sign-in":""," custom-button")},n),t)}),se=function(){return r.a.createElement("div",{className:"cart-dropdown"},r.a.createElement("div",{className:"cart-items"}),r.a.createElement(le,null,"GO TO CHECKOUT"))},oe=Object(O.b)((function(e){return{currentUser:e.user.currentUser,hidden:e.cart.hidden}}))((function(e){var t=e.currentUser,a=e.hidden;return r.a.createElement("div",{className:"header"},r.a.createElement(P.b,{className:"logo-container",to:"/clothing-app/"},r.a.createElement(W,{className:"logo"})),r.a.createElement("div",{className:"options"},r.a.createElement(P.b,{className:"option",to:"/clothing-app/shop"},"SHOP"),r.a.createElement(P.b,{className:"option",to:"/clothing-app/contact"},"CONTACT"),t?r.a.createElement("div",{className:"option",onClick:function(){return E.signOut()}},"SIGN OUT"):r.a.createElement(P.b,{className:"option",to:"/clothing-app/signin"},"SIGN IN"),r.a.createElement(ce,null)),a?null:r.a.createElement(se,null))})),me=(a(62),a(18)),ue=(a(63),a(64),function(e){var t=e.handleChange,a=e.label,n=Object(N.a)(e,["handleChange","label"]);return r.a.createElement("div",{className:"group"},r.a.createElement("input",Object.assign({className:"form-input",onChange:t},n)),a?r.a.createElement("label",{className:"".concat(n.value.length?"shrink ":""," form-input-label")},a):null)}),pe=function(e){Object(g.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleSubmit=function(){var e=Object(m.a)(s.a.mark((function e(t){var a,r,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=n.state,r=a.email,i=a.password,e.prev=2,e.next=5,E.signInWithEmailAndPassword(r,i);case 5:n.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),n.handleChange=function(e){var t=e.target,a=t.value,r=t.name;n.setState(Object(me.a)({},r,a))},n.state={email:"",password:""},n}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"sign-in"},r.a.createElement("h2",null,"I already have an account"),r.a.createElement("span",null,"Sign in with email and password"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(ue,{name:"email",type:"email",handleChange:this.handleChange,value:this.state.email,label:"email",required:!0}),r.a.createElement(ue,{name:"password",type:"password",value:this.state.password,handleChange:this.handleChange,label:"password",required:!0}),r.a.createElement("div",{className:"buttons"},r.a.createElement(le,{type:"submit"},"Sign In"),r.a.createElement(le,{onClick:k,isGooogleSignIn:!0}," ","Sign in with Google"," "))))}}]),a}(r.a.Component),de=(a(65),function(e){Object(g.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).handleSubmit=function(){var t=Object(m.a)(s.a.mark((function t(a){var n,r,i,c,l,o,m;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),n=e.state,r=n.displayName,i=n.email,c=n.password,l=n.confirmPassword,c!==!l){t.next=5;break}return alert("Passwords don't match"),t.abrupt("return");case 5:return t.prev=5,t.next=8,E.createUserWithEmailAndPassword(i,c);case 8:return o=t.sent,m=o.user,t.next=12,v(m,{displayName:r});case 12:t.next=17;break;case 14:t.prev=14,t.t0=t.catch(5),console.error(t.t0);case 17:case"end":return t.stop()}}),t,null,[[5,14]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(me.a)({},n,r))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(p.a)(a,[{key:"render",value:function(){var e=this.state,t=e.displayName,a=e.email,n=e.password,i=e.confirmPassword;return r.a.createElement("div",{className:"sign-up"},r.a.createElement("h2",{className:"title"},"I do not have an account"),r.a.createElement("span",null,"Sign up with your email and password"),r.a.createElement("form",{className:"sign-up-form",onSubmit:this.handleSubmit},r.a.createElement(ue,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display Name",required:!0}),r.a.createElement(ue,{type:"email",name:"email",value:a,onChange:this.handleChange,label:"Email",required:!0}),r.a.createElement(ue,{type:"password",name:"password",value:n,onChange:this.handleChange,label:"Password",required:!0}),r.a.createElement(ue,{type:"password",name:"confirmPassword",value:i,onChange:this.handleChange,label:"Confirm Password",required:!0}),r.a.createElement(le,{type:"submit"},"SIGN UP")))}}]),a}(r.a.Component)),ge=function(){return r.a.createElement("div",{className:"sign-in-and-sign-up"},r.a.createElement(pe,null),r.a.createElement(de,null))},he=function(e){Object(g.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).unsubscribeFromAuth=null,e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unsubscribeFromAuth=E.onAuthStateChanged(function(){var t=Object(m.a)(s.a.mark((function t(a){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=5;break}return t.next=3,v(a);case 3:t.sent.onSnapshot((function(t){e(Object(o.a)({id:t.id},t.data()))}));case 5:e(a);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(oe,null),r.a.createElement(h.d,null,r.a.createElement(h.b,{exact:!0,path:"/clothing-app/",component:C}),r.a.createElement(h.b,{path:"/clothing-app/shop",component:T}),r.a.createElement(h.b,{exact:!0,path:"/clothing-app/signIn",render:function(){return e.props.currentUser?r.a.createElement(h.a,{to:"/clothing-app/"}):r.a.createElement(ge,null)}})))}}]),a}(r.a.Component),be=Object(O.b)((function(e){return{currentUser:e.user.currentUser}}),(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:"SET_CURRENT_USER",payload:e}}(t))}}}))(he),fe=a(15),ve=a(34),Ee=a.n(ve),ye={currentUser:null},we=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return Object(o.a)({},e,{currentUser:t.payload});default:return e}},ke={hidden:!0},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ie.TOGGLE_CART_HIDDEN:return Object(o.a)({},e,{hidden:!e.hidden});default:return e}},Ne=Object(fe.c)({user:we,cart:Oe}),Ue=[Ee.a],je=Object(fe.d)(Ne,fe.a.apply(void 0,Ue));c.a.render(r.a.createElement(O.a,{store:je},r.a.createElement(P.a,null,r.a.createElement(be,null))),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.8acd0513.chunk.js.map