import{r as i,j as s,a as e,F as f,O as v,L as b}from"./index-c362d4ea.js";const x="/assets/home-775db90e.svg",N="/assets/about-3e597755.svg",A="/assets/setting-f8a88629.svg";const k="/assets/user-bffa1379.svg",C="/assets/profile-84b3098d.svg",L="/assets/logout-fa17f7cd.svg";function S(){const[t,n]=i.useState({open:!1});return s("div",{id:"user",mode:t.open?"options":"normal",children:[e("img",{src:k,onClick:()=>n({...t,open:!t.open})}),e("div",{id:"user-options",children:s("div",{style:{borderRadius:"10px",overflow:"hidden"},children:[s("div",{className:"user-option",children:[e("img",{src:C}),"Profile"]}),s("div",{className:"user-option",children:[e("img",{src:L}),"Logout"]})]})})]})}function w(){let t=0;u.forEach((a,o)=>{location.pathname.startsWith(a[0])&&(t=o)});const[n,r]=i.useState(!1),[c,d]=i.useState(t),l=i.useRef(a=>{r(!1);let{target:o}=a;o.tagName.toLowerCase()!=="a"&&(o=o.parentNode),d(o.getAttribute("data-index"))}),m=u.map(([a,o,g,h],p)=>e(j,{href:a,icon:o,text:g,cn:h,onClick:l.current,active:c==p,index:p},p));return s(f,{children:[s("nav",{children:[s("div",{className:n?"hmbgr-x":"hmbgr",onClick:()=>r(!n),id:"hmbgr",children:[e("hr",{}),e("hr",{}),e("hr",{})]}),e("div",{id:"logo",children:"Apps"}),e(S,{})]}),e("div",{className:n?"side-panel":"side-panel-x",id:"side-panel",children:m}),s("main",{id:"outlet",children:[e(v,{})," "]})]})}const j=i.memo(function({icon:t,href:n,text:r,cn:c,onClick:d,active:l,index:m}){return s(b,{to:n,className:c,onClick:d,active:""+l,"data-index":m,children:[e("img",{src:t})," ",e("span",{children:r})]})}),u=[["/",x,"Home","side-panel-item"],["/about",N,"About","side-panel-item"],["/settings",A,"Settings","side-panel-item"]];export{w as default};