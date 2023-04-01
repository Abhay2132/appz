import{r as l,j as i,a as r}from"./index-c362d4ea.js";import{I as N,B as g}from"./views-cd619f33.js";function j(n){let o=new Set(n),a=[];return o.forEach(u=>a.push(u)),a}function T(){var[n,o]=l.useState([""]);l.useState();var[a,u]=l.useState({imgs:0,pages:0,cn:"d-no"}),[h,d]=l.useState("empty");const c=l.useRef(),s=l.useRef();l.useEffect(()=>{document.title="Image Downloader",document.querySelector("#logo").textContent="Image Downloader"},[]);function f(e){e.preventDefault()}async function p(){if(n.length<2&&n[0].length<1)return m();let e=j(n).filter(Boolean);o(e),D(e)}function b(){if(s.current.scrollTo(0,s.current.scrollHeight),n.at(-1).length<6){m();return}o(e=>[...e,""]),c.current.style.visibility="visible",setTimeout(()=>s.current.scrollTo(0,s.current.scrollHeight),10)}function D(e){if(!e||!Array.isArray(e)||e.length<1)return new Error("invalid 'urls' data !");d("loading"),fetch("/imgD",{method:"POST",body:JSON.stringify({urls:e}),headers:{"Content-Type":"application/json"}}).then(t=>t.json()).then(v).catch(t=>{d("err")})}function v(e){if(e.error)return console.error(e);let{imgs:t,token:w,pages:x}=e;d("data"),u({imgs:t,token:w,pages:x,cn:""})}function y(e,t){n[t]=e}function m(){c.current.setAttribute("animate","jiggle"),setTimeout(()=>c.current.setAttribute("animate",""),500)}function S(e,t){if(!t)return n[e]="";if(n.length==1)return o([""]);o([...n.slice(0,e),...n.slice(e+1)])}function k(){console.log({urls:n})}return i("div",{className:"app imgD-box",imgd:h,children:[i("form",{onSubmit:f,className:"imgD-form",autoComplete:"off",children:[r("h2",{onClick:k,className:"imgD-h2",children:" Enter URLs "}),i("div",{id:"urls-box",ref:s,children:[n.map((e,t)=>r(N,{placeholder:"Paste Website Link",mode:"light",remove:S,index:t,url:e,inputHandler:y},t)),r("label",{ref:c,className:"urls-box-footer",children:"* Paste new url"})]}),r(g,{bg:"rgba(0,0,0,0.8)",onClick:b,children:"Add More"}),r(g,{bg:"Green",onClick:p,children:"Submit "})]}),r(C,{}),r(A,{data:a}),r(I,{})]})}function A({data:n}){function o(a){window.open("/imgD/dl?token="+a)}return i("div",{id:"result-panel",children:[r("div",{id:"ir-head",children:"Result"}),i("div",{className:"ir-info",children:[r("img",{src:"/icons/img.svg",height:"30px"}),i("span",{children:[" ",n.imgs," Images"]})]}),i("div",{className:"ir-info",children:[r("img",{src:"/icons/page.svg",height:"30px"}),i("span",{children:[" ",n.pages," Webpages"]})]}),r("center",{children:r("button",{onClick:()=>o(n.token),children:"Download Zip"})})]})}function C(){return i("div",{className:"loader-box",children:[r("div",{className:"loader-spinner"}),r("center",{animate:"blinking",children:" LOADING "})]})}function I({err:n}){return i("div",{className:"err",children:[r("center",{animate:"jiggle",children:"Error Occured "}),r("center",{animate:"jiggle1",children:"Try Submiting Again ! "})]})}export{T as default};