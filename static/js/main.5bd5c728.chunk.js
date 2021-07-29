(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__2eXML",image:"ImageGalleryItem_image__1SmDv"}},12:function(e,t,a){e.exports={Overlay:"Modal_Overlay__thuOl",Modal:"Modal_Modal__vrHu2"}},15:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__gm4PA"}},16:function(e,t,a){e.exports={Button:"Button_Button__TkaYE"}},17:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(3),c=a.n(o),s=a(13),i=a(4),l=a(5),u=a(7),h=a(6),m=a(9),d=a(14),b=a.n(d),j=a(8),p=a.n(j),g=a(1),f=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchQuery:""},e.handleNameChange=function(t){e.setState({searchQuery:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.searchQuery.trim()?(e.props.onSubmit(e.state.searchQuery),e.setState({searchQuery:""})):m.b.error("No value for request!")},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(g.jsx)("header",{className:p.a.Searchbar,children:Object(g.jsxs)("form",{onSubmit:this.handleSubmit,className:p.a.SearchForm,children:[Object(g.jsx)("button",{type:"submit",className:p.a.button,children:Object(g.jsx)("span",{className:p.a.label,children:"Search"})}),Object(g.jsx)("input",{className:p.a.input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.name,onChange:this.handleNameChange})]})})}}]),a}(r.a.Component),O=a(11),y=a.n(O),v=function(e){var t=e.webformatURL,a=e.tags,n=e.onOpen;return Object(g.jsx)("li",{className:y.a.ImageGalleryItem,onClick:n,children:Object(g.jsx)("img",{src:t,alt:a,className:y.a.image})})},S=a(15),x=a.n(S),_=function(e){var t=e.hits,a=e.onOpen;return Object(g.jsx)("ul",{className:x.a.ImageGallery,children:t.map((function(e){var t=e.id,n=e.webformatURL,r=e.tags,o=e.largeImageURL;return Object(g.jsx)(v,{webformatURL:n,tags:r,onOpen:function(){return a(o,r)}},t)}))})},w=a(16),k=a.n(w),I=function(e){var t=e.onClick;return Object(g.jsx)("button",{type:"button",className:k.a.Button,onClick:t,children:"Load more"})},C=a(12),F=a.n(C),M=document.querySelector("#modal-root"),N=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeydown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleOverlayClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeydown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeydown)}},{key:"render",value:function(){var e=this.props.image;return Object(o.createPortal)(Object(g.jsx)("div",{className:F.a.Overlay,onClick:this.handleOverlayClick,children:Object(g.jsx)("div",{className:F.a.Modal,children:Object(g.jsx)("img",{src:e.src,alt:e.alt})})}),M)}}]),a}(r.a.Component);var Q={fetchImg:function(e,t){return fetch("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=21789669-964dbbf22655e629fd0e73135&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"))})).then((function(e){return e.hits}))}},G=(a(43),a(44),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchQuery:"",page:1,hits:[],error:null,status:"idle",showModal:!1,selectedImage:null},e.handleFormSubmit=function(t){e.resetState(),e.setState({searchQuery:t})},e.resetState=function(){e.setState({page:1,hits:[],error:null})},e.handleClickButton=function(){var t=e.state,a=t.searchQuery,n=t.page;Q.fetchImg(a,n).then((function(t){return e.setState((function(e){return{hits:[].concat(Object(s.a)(e.hits),Object(s.a)(t)),page:e.page+1,status:"resolved"}}))})).then((function(){return window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}))},e.openModal=function(t,a){e.setState({showModal:!0,selectedImage:{src:t,alt:a}})},e.closeModal=function(){return e.setState({showModal:!1})},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,n=this.state,r=n.searchQuery,o=n.page;t.searchQuery!==r&&(this.setState({status:"pending"}),Q.fetchImg(r,o).then((function(e){return a.setState({hits:e,page:a.state.page+1,status:"resolved"})})).catch((function(e){return a.setState({error:e,status:"rejected"})})).finally((function(){return a.setState({loading:!1})})))}},{key:"render",value:function(){var e=this.state,t=e.hits,a=e.error,n=e.status,r=e.showModal,o=e.selectedImage;return"idle"===n?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(f,{onSubmit:this.handleFormSubmit}),";",Object(g.jsx)(m.a,{position:"top-center",autoClose:3e3})]}):"pending"===n?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(f,{onSubmit:this.handleFormSubmit}),Object(g.jsx)(b.a,{type:"ThreeDots",color:"#00BFFF",height:80,width:80})]}):"rejected"===n?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("h1",{children:a.message}),";"]}):"resolved"===n?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(f,{onSubmit:this.handleFormSubmit}),Object(g.jsx)(_,{hits:t,onOpen:this.openModal}),r&&Object(g.jsx)(N,{image:o,onClose:this.closeModal}),this.state.hits.length>0&&Object(g.jsx)(I,{onClick:this.handleClickButton})]}):void 0}}]),a}(r.a.Component)),L=a(17),B=a.n(L);a(45);c.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(G,{className:B.a.App})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__-U58e",SearchForm:"Searchbar_SearchForm__3O6D8",button:"Searchbar_button__3Fijj",label:"Searchbar_label__q5Ixi",input:"Searchbar_input__3NjDk"}}},[[46,1,2]]]);
//# sourceMappingURL=main.5bd5c728.chunk.js.map