import{b as s,j as n,f as c,u,o as p,q as i}from"./entry.24743f66.js";const l=["src"],d=s({__name:"TheVideo",props:{code:{},autoplay:{type:Boolean}},setup(r){const o=r,a=n(()=>o.autoplay),e=n(()=>o.code);return(t,y)=>(p(),c("iframe",{style:{width:"100%","aspect-ratio":"9/6"},src:`https://www.youtube.com/embed/${u(e)}?${u(a)?"autoplay=1":""}`,title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,8,l))}});function f(){const r=i();return{getIntQueryParameter:e=>{const t=r.query[e];if(typeof t!="string"||isNaN(parseInt(t)))throw new TypeError(`Could not get parameter: ${e}`);return parseInt(t)},getStringQueryParameter:e=>{const t=r.query[e];if(typeof t!="string")throw new TypeError(`Could not get parameter: ${e}`);return t}}}export{d as _,f as u};
