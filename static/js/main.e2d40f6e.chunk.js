(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,n){e.exports=n.p+"static/media/user.1321699a.png"},35:function(e){e.exports={status:"ok",name:"Market Price (USD)",unit:"USD",period:"day",description:"Average USD market price across major bitcoin exchanges.",values:[{x:1552262400,y:3896.718333333333},{x:1552348800,y:3880.7675},{x:1552435200,y:3881.3792307692306},{x:1552521600,y:3883.9892857142854},{x:1552608e3,y:3918.0866666666666},{x:1552694400,y:4011.092500000001},{x:1552780800,y:3994.3483333333334},{x:1552867200,y:3998.4975},{x:1552953600,y:4008.6583333333333},{x:155304e4,y:4025.0258333333327},{x:1553126400,y:4026.6358333333333},{x:1553212800,y:4000.3350000000005},{x:1553299200,y:4006.1158333333333},{x:1553385600,y:3995.3233333333333},{x:1553472e3,y:3977.4541666666664},{x:1553558400,y:3933.9541666666664},{x:1553644800,y:4011.3658333333333},{x:1553731200,y:4034.056666666666},{x:1553817600,y:4075.5264285714293},{x:1553904e3,y:4107.340833333334},{x:1553990400,y:4109.316666666667},{x:1554076800,y:4145.108461538462},{x:1554163200,y:4675.1125},{x:1554249600,y:5018.498333333334},{x:1554336e3,y:4970.849166666668},{x:1554422400,y:4980.8983333333335},{x:1554508800,y:5042.517692307692},{x:1554595200,y:5126.8341666666665},{x:1554681600,y:5214.276666666666}]}},36:function(e){e.exports={status:"ok",name:"Confirmed Transactions Per Day",unit:"Transactions",period:"day",description:"The number of daily confirmed Bitcoin transactions.",values:[{x:1552262400,y:294741},{x:1552348800,y:285653},{x:1552435200,y:285957},{x:1552521600,y:299929},{x:1552608e3,y:296970},{x:1552694400,y:262267},{x:1552780800,y:227290},{x:1552867200,y:291505},{x:1552953600,y:304744},{x:155304e4,y:304960},{x:1553126400,y:300712},{x:1553212800,y:298524},{x:1553299200,y:251573},{x:1553385600,y:226166},{x:1553472e3,y:322191},{x:1553558400,y:366415},{x:1553644800,y:383186},{x:1553731200,y:393698},{x:1553817600,y:369817},{x:1553904e3,y:377783},{x:1553990400,y:381652},{x:1554076800,y:368904},{x:1554163200,y:401507},{x:1554249600,y:360250},{x:1554336e3,y:354660},{x:1554422400,y:387090},{x:1554508800,y:359569},{x:1554595200,y:350631},{x:1554681600,y:372417}]}},37:function(e,t,n){e.exports=n(73)},42:function(e,t,n){},43:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(30),r=n.n(o),i=(n(42),n(1)),l=n(2),s=n(4),u=n(3),m=n(5),h=(n(43),n(8)),p=n(14),d=n(7),f=n.n(d),v=n(13),y=n(31),b=n.n(y),E=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(h.b,{to:"/contact/".concat(this.props.contact._id)},c.a.createElement("li",null,c.a.createElement("img",{height:"40",src:b.a,alt:""}),this.props.contact.name,c.a.createElement("button",{onClick:function(t){t.preventDefault(),e.props.history.push("/contact/edit/".concat(e.props.contact._id))}},"EDIT"),c.a.createElement("button",{onClick:function(t){t.preventDefault(),e.props.onEmitRemove(e.props.contact._id)}},"DELETE CONTACT")))}}]),t}(a.Component),x=Object(p.e)(E),C=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).emitRemoveContact=function(e){console.log("send to remove - Contact Page",e),n.props.onRemove(e)},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.contacts.map(function(t){return c.a.createElement(x,{contact:t,onEmitRemove:e.emitRemoveContact,key:t._id})});return c.a.createElement("section",null,c.a.createElement("h3",null,"Contact List"),c.a.createElement(h.b,{to:"/contact/edit"},c.a.createElement("button",null,"Add new contact")),c.a.createElement("ul",null,t))}}]),t}(a.Component);C.defaultProps={contacts:[]};var g=function(e){var t=e.onFilter;return c.a.createElement("section",null,c.a.createElement("h2",null,"Im a Filter"),c.a.createElement("input",{onChange:function(e){return t(e.target.value)},type:"text",placeholder:"Search"}))},O=[{_id:"5a56640269f443a5d64b32ca",name:"Ochoa Hyde",email:"ochoahyde@renovize.com",phone:"+1 (968) 593-3824"},{_id:"5a5664025f6ae9aa24a99fde",name:"Hallie Mclean",email:"halliemclean@renovize.com",phone:"+1 (948) 464-2888"},{_id:"5a56640252d6acddd183d319",name:"Parsons Norris",email:"parsonsnorris@renovize.com",phone:"+1 (958) 502-3495"},{_id:"5a566402ed1cf349f0b47b4d",name:"Rachel Lowe",email:"rachellowe@renovize.com",phone:"+1 (911) 475-2312"},{_id:"5a566402abce24c6bfe4699d",name:"Dominique Soto",email:"dominiquesoto@renovize.com",phone:"+1 (807) 551-3258"},{_id:"5a566402a6499c1d4da9220a",name:"Shana Pope",email:"shanapope@renovize.com",phone:"+1 (970) 527-3082"},{_id:"5a566402f90ae30e97f990db",name:"Faulkner Flores",email:"faulknerflores@renovize.com",phone:"+1 (952) 501-2678"},{_id:"5a5664027bae84ef280ffbdf",name:"Holder Bean",email:"holderbean@renovize.com",phone:"+1 (989) 503-2663"},{_id:"5a566402e3b846c5f6aec652",name:"Rosanne Shelton",email:"rosanneshelton@renovize.com",phone:"+1 (968) 454-3851"},{_id:"5a56640272c7dcdf59c3d411",name:"Pamela Nolan",email:"pamelanolan@renovize.com",phone:"+1 (986) 545-2166"},{_id:"5a5664029a8dd82a6178b15f",name:"Roy Cantu",email:"roycantu@renovize.com",phone:"+1 (929) 571-2295"},{_id:"5a5664028c096d08eeb13a8a",name:"Ollie Christian",email:"olliechristian@renovize.com",phone:"+1 (977) 419-3550"},{_id:"5a5664026c53582bb9ebe9d1",name:"Nguyen Walls",email:"nguyenwalls@renovize.com",phone:"+1 (963) 471-3181"},{_id:"5a56640298ab77236845b82b",name:"Glenna Santana",email:"glennasantana@renovize.com",phone:"+1 (860) 467-2376"},{_id:"5a56640208fba3e8ecb97305",name:"Malone Clark",email:"maloneclark@renovize.com",phone:"+1 (818) 565-2557"},{_id:"5a566402abb3146207bc4ec5",name:"Floyd Rutledge",email:"floydrutledge@renovize.com",phone:"+1 (807) 597-3629"},{_id:"5a56640298500fead8cb1ee5",name:"Grace James",email:"gracejames@renovize.com",phone:"+1 (959) 525-2529"},{_id:"5a56640243427b8f8445231e",name:"Tanner Gates",email:"tannergates@renovize.com",phone:"+1 (978) 591-2291"},{_id:"5a5664025c3abdad6f5e098c",name:"Lilly Conner",email:"lillyconner@renovize.com",phone:"+1 (842) 587-3812"}];function j(e){return new Promise(function(t,n){e._id=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=0;a<e;a++)t+=n.charAt(Math.floor(Math.random()*n.length));return t}(),O.push(e),t(e)})}var w={getContacts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return new Promise(function(t,n){var a,c=O;e&&e.term&&(a=(a=e.term).toLocaleLowerCase(),c=O.filter(function(e){return e.name.toLocaleLowerCase().includes(a)||e.phone.toLocaleLowerCase().includes(a)||e.email.toLocaleLowerCase().includes(a)})),t(c.sort(function(e,t){return e.name.toLocaleLowerCase()<t.name.toLocaleLowerCase()?-1:e.name.toLocaleLowerCase()>t.name.toLocaleLowerCase()?1:0}))})},getContactById:function(e){return new Promise(function(t,n){var a=O.find(function(t){return t._id===e});a?t(a):n("Contact id ".concat(e," not found!"))})},deleteContact:function(e){return new Promise(function(t,n){var a=O.findIndex(function(t){return t._id===e});-1!==a&&O.splice(a,1),t(O)})},saveContact:function(e){return e._id?function(e){return new Promise(function(t,n){var a=O.findIndex(function(t){return e._id===t._id});-1!==a&&(O[a]=e),t(e)})}(e):j(e)},getEmptyContact:function(){return{name:"",email:"",phone:""}}};var k=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={contacts:null,contactsToShow:null,saveFilter:""},n.filterContacts=function(e){var t=n.state.contacts.filter(function(t){return t.name.toLowerCase().includes(e.toLowerCase())});n.setState({contactsToShow:t,saveFilter:e})},n.removeContact=function(e){console.log("Remove conatact id:",e),w.deleteContact(e).then(function(e){n.setState({contacts:e}),n.filterContacts(n.state.saveFilter)})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=this,e.next=3,w.getContacts();case 3:e.t1=e.sent,e.t2={contacts:e.t1},e.t0.setState.call(e.t0,e.t2),this.filterContacts(this.state.saveFilter);case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return c.a.createElement("section",null,c.a.createElement("h1",null,"Contact Page"),c.a.createElement(g,{onFilter:this.filterContacts}),this.state.contactsToShow&&c.a.createElement(C,{contacts:this.state.contactsToShow,onRemove:this.removeContact}))}}]),t}(a.Component),N=[{name:"user1",coins:100,moves:[]},{name:"user2",coins:200,moves:[]},{name:"user3",coins:300,moves:[]},{name:"user4",coins:400,moves:[]}];var S={getUser:function(){return Promise.resolve(N[0])},signup:function(e){},addMove:function(e,t){}},_=n(34),P=n.n(_),A=n(35),L=n(36);function D(){return(D=Object(v.a)(f.a.mark(function e(t){var n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get("https://blockchain.info/tobtc?currency=USD&value=".concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}var T={getRate:function(e){return D.apply(this,arguments)},getMarketPrice:function(){return Promise.resolve(A)},getConfirmedTransactions:function(){return Promise.resolve(L)}},R=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={user:null,bitcoinRate:null},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=this,e.next=3,S.getUser();case 3:return e.t1=e.sent,e.next=6,T.getRate(100);case 6:e.t2=e.sent,e.t3={user:e.t1,bitcoinRate:e.t2},e.t0.setState.call(e.t0,e.t3);case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return c.a.createElement("section",null,c.a.createElement("h1",null,"Home Page"),this.state.user&&c.a.createElement("div",null,this.state.user.name),this.state.bitcoinRate&&c.a.createElement("div",null,this.state.bitcoinRate))}}]),t}(a.Component),z=n(20),M=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("section",null,c.a.createElement("h1",null,"Chart"),c.a.createElement("div",null,this.props.chart.title),c.a.createElement(z.Sparklines,{data:this.props.chart.data},c.a.createElement(z.SparklinesBars,{color:this.props.chart.color})))}}]),t}(a.Component),B=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={chart1:null,chart2:null},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark(function e(){var t,n,a,c;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=T.getMarketPrice(),n=T.getConfirmedTransactions(),e.next=4,t;case 4:return a=e.sent,e.next=7,n;case 7:c=e.sent,this.setState({chart1:{data:a.values.map(function(e){return e.y}),title:a.name,description:a.description,color:"#feb236"}}),this.setState({chart2:{data:c.values.map(function(e){return e.y}),title:c.name,description:c.description,color:"#6b5b95"}});case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return c.a.createElement("section",null,c.a.createElement("h1",null,"Statistic Page"),this.state.chart1&&c.a.createElement(M,{chart:this.state.chart1}),this.state.chart2&&c.a.createElement(M,{chart:this.state.chart2}))}}]),t}(a.Component),I=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={contact:null},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark(function e(){var t;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.t0=this,e.next=4,w.getContactById(t);case 4:e.t1=e.sent,e.t2={contact:e.t1},e.t0.setState.call(e.t0,e.t2);case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("h4",null,"Contact Details Page"),c.a.createElement("button",{onClick:function(t){t.preventDefault(),e.props.history.go(-1)}},"BACK TO LAST PAGE"),c.a.createElement("button",{onClick:function(t){t.preventDefault(),e.props.history.push("/contact")}},"BACK TO LIST"),this.state.contact&&c.a.createElement(h.b,{to:"/contact/edit/".concat(this.state.contact._id)},c.a.createElement("button",null,"EDIT")),c.a.createElement("img",{height:"40",src:"https://res.cloudinary.com/dwlinsb9c/image/upload/v1554719488/rzwlwcxenvujyo2gzbju.png",alt:""}),this.state.contact&&c.a.createElement("div",null,c.a.createElement("div",null,this.state.contact.name),c.a.createElement("div",null,this.state.contact.phone),c.a.createElement("div",null,this.state.contact.email)))}}]),t}(a.Component),F=Object(p.e)(I),U=n(16),G=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={contact:null,isAddNew:!0,isNameValid:!0},n.setName=function(e){var t=Object(U.a)({},n.state.contact);t.name=e.target.value,n.setState({contact:t,isNameValid:!0})},n.setEmail=function(e){var t=Object(U.a)({},n.state.contact);t.email=e.target.value,n.setState({contact:t})},n.setPhone=function(e){var t=Object(U.a)({},n.state.contact);t.phone=e.target.value,n.setState({contact:t})},n.handleSubmit=function(e){e.preventDefault(),""===n.state.contact.name?(n.setState({isNameValid:!1}),console.log("wrongggg")):(n.setState({isNameValid:!0}),console.log("okkkkk"),w.saveContact(n.state.contact).then(function(){return n.props.history.push("/contact")}))},n.removeContact=function(e){console.log("Remove conatact id:",e),w.deleteContact(e).then(function(){return n.props.history.push("/contact")})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;t?w.getContactById(t).then(function(t){return e.setState({contact:t,isAddNew:!1})}):this.setState({contact:w.getEmptyContact()})}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e,t=this;return this.state.isNameValid||(e=c.a.createElement("div",null,"Name is Mandatory")),c.a.createElement("div",null,c.a.createElement("h4",null,"Contact Edit/Add Page"),c.a.createElement("div",{className:"contact-container"},this.state.isAddNew?c.a.createElement("div",null,c.a.createElement("p",null,"Add New"),c.a.createElement("button",{onClick:function(e){e.preventDefault(),t.props.history.go(-1)}},"BACK TO LAST PAGE")):c.a.createElement("div",null,c.a.createElement("p",null,"Edit Contact"),c.a.createElement(h.b,{to:"/contact/".concat(this.state.contact._id)},c.a.createElement("button",null,"BACK TO DETAILS")),c.a.createElement("button",{onClick:function(e){e.preventDefault(),t.removeContact(t.state.contact._id)}},"DELETE USER")),this.state.isAddNew&&c.a.createElement("form",{onSubmit:this.handleSubmit,className:"contact-form flex flex-col"},"Name: ",c.a.createElement("input",{onChange:this.setName,type:"text",placeholder:"Contact Name"}),"Email: ",c.a.createElement("input",{onChange:this.setEmail,type:"email",placeholder:"Email"}),"Phone: ",c.a.createElement("input",{onChange:this.setPhone,type:"tel",placeholder:"Phone Number"}),c.a.createElement("input",{type:"submit",value:"Create!"})),!this.state.isAddNew&&c.a.createElement("form",{onSubmit:this.handleSubmit,className:"contact-form flex flex-col"},"Name: ",c.a.createElement("input",{onChange:this.setName,value:this.state.contact.name,type:"text",placeholder:"Contact Name"}),"Email: ",c.a.createElement("input",{onChange:this.setEmail,value:this.state.contact.email,type:"email",placeholder:"Email"}),"Phone: ",c.a.createElement("input",{onChange:this.setPhone,value:this.state.contact.phone,type:"tel",placeholder:"Phone Number"}),c.a.createElement("input",{type:"submit",value:"Update!"})),e))}}]),t}(a.Component),H=Object(p.e)(G),V=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(h.a,null,c.a.createElement("nav",{className:"Nav_menu"},c.a.createElement("ul",null,c.a.createElement(h.c,{className:"Nav_link",to:"/",activeClassName:"activeRoute"},"Home"),c.a.createElement(h.c,{className:"Nav_link",to:"/contact",activeClassName:"activeRoute"},"Contacts"),c.a.createElement(h.c,{className:"Nav_link",to:"/statistic",activeClassName:"activeRoute"},"Statistic"))),c.a.createElement(p.c,null,c.a.createElement(p.a,{exact:!0,path:"/",component:R}),c.a.createElement(p.a,{exact:!0,path:"/contact",component:k}),c.a.createElement(p.a,{path:"/contact/edit/:id?",component:H}),c.a.createElement(p.a,{path:"/contact/:id",component:F}),c.a.createElement(p.a,{path:"/statistic",component:B}))))}}]),t}(a.Component),K=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(V,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[37,1,2]]]);
//# sourceMappingURL=main.e2d40f6e.chunk.js.map