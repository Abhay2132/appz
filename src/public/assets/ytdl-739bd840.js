import{j as d,a as e,r as o}from"./index-c362d4ea.js";import{I as E,B as f,O as u}from"./views-cd619f33.js";function V({children:i}){return d("div",{className:"error-panel",children:[e("center",{animate:"jiggle",children:"Error Occured "}),i]})}function $(){return d("div",{className:"loading-panel",children:[e("div",{className:"loading-spinner"}),e("center",{animate:"blinking",children:" LOADING "})]})}const N={audio:"",video:"",type:"video",iframeSRC:""};function w(i){const l=location.origin||"http://localhost:3000",[s,b]=o.useState(["144p","240p","360p","480p","720p","1080p"]),[g,S]=o.useState(["48 kbps","64 kbps","128 kbps","160 kbps"]),[k,p]=o.useState("empty"),[h,D]=o.useState(""),[t,c]=o.useState(N),[n,O]=o.useState({thumbnail:"",iframeUrl:"",title:"Video Name".repeat(10),dur:10,aqs:{},vqs:{}}),[x,v]=o.useState("Select a Quality First");o.useEffect(()=>{document.title="YouTube Video Downloader",document.querySelector("#logo").textContent="YouTube DownLoader"},[]);const m=o.useRef();function C(a){a.preventDefault();let r=m.current.value;D(m.current.value),Boolean(r.length)&&(c(N),p("loading"),fetch(l+"/ytdl",{method:"POST",body:JSON.stringify({url:r}),headers:{"Content-Type":"application/json"}}).then(q=>q.json()).then(I).catch(L))}function I(a){O(a),p("data"),b(Object.keys(a.vqs)),S(Object.keys(a.aqs)),console.log(a)}function L(a){p("error"),console.error({error:a})}function T(){if(console.log(h),!Boolean(h.length))return alert("URL IS EMPTY");window.open(`${l}/ytdl/dl?url=${h}&q=${t.type=="video"?n.vqs[t.video].height:t.audio}&a=${t.type=="audio"?"1":""}`)}const y=a=>a?"~ "+(parseInt(a)/(1024*1024)).toFixed(1)+" MB":"Select a Quality First";return o.useEffect(()=>{n&&(t.type=="video"?Boolean(t.video)&&n.vqs.hasOwnProperty(t.video)&&v(y(n.vqs[t.video].size||0)):t.type=="audio"&&Boolean(t.audio)&&n.aqs.hasOwnProperty(t.audio)&&v(y(n.aqs[t.audio])))},[t]),d("div",{id:"ytdl-box",className:"app","data-state":k,children:[d("form",{className:"ytdl-form",onSubmit:C,autoComplete:"off",children:[e("h2",{className:"form-h2",children:" YouTube DL "}),e(E,{refhook:m,placeholder:"Paste Video Link",style:{margin:"20px 0 5px 0"}}),e(f,{bg:"rgba(0,0,0,0.4)",children:"Submit"})]}),e(V,{children:e("center",{children:"Try Resubmit the Link"})}),e($,{}),d("div",{className:"data-panel",id:"ytdl-data",children:[e("h3",{className:"panel-title",children:"Video Details"}),e("div",{id:"videoThumbnail",style:{background:Boolean(n.thumbnail)?`url("${n.thumbnail}")`:"#000"}}),d("div",{id:"ytdl-data-grid",children:[e("div",{className:"ytdl-data-col1",children:"Name"}),e("div",{className:"ytdl-data-col2 center-V",children:n.title}),e("div",{className:"ytdl-data-col1",children:"Duration"}),e("div",{className:"ytdl-data-col2 center-V",children:j(n.dur)}),e("div",{className:"ytdl-data-col1",children:"TYPE"}),d("div",{className:"ytdl-data-col2",children:[e(u,{state:t.type=="video"?"active":"",onClick:()=>c({...t,type:"video"}),children:"VIDEO"}),e(u,{state:t.type=="audio"?"active":"",onClick:()=>c({...t,type:"audio"}),children:"AUDIO"})]}),e("div",{className:"ytdl-data-col1",children:"Quality"}),d("div",{className:"ytdl-data-col2","data-type":t.type,children:[e("div",{className:"video-qualities",children:s.map((a,r)=>e(u,{state:t.video==a?"active":"",onClick:()=>c({...t,video:a}),text:a},r))}),e("div",{className:"audio-qualities",children:g.map((a,r)=>e(u,{state:t.audio==a?"active":"",text:a,onClick:()=>c({...t,audio:a})},r))})]}),e("div",{className:"ytdl-data-col1",children:"Size"}),e("div",{className:"ytdl-data-col2 center-V",children:x})]}),e("center",{children:e(f,{onClick:T,cursor:"pointer",bg:"var(--ytdl-bg)",padding:"10px 20px",size:"1.1rem",children:"DOWNLOAD"})})]})]})}const j=i=>{if(i<60)return i+" Seconds";if(i<60*60){let l=parseInt(i/60),s=i-l*60;return`${l} Minutes ${s>0?s+"seconds":""}`}if(i<60*60*60){let l=parseInt(i/3600),s=parseInt((i-l*3600)/60);return`${l} Hours ${s>0?s+" Minutes":""}`}};export{w as default};
