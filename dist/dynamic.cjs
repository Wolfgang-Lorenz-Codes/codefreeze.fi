"use strict";const e=require("./hooks.module-ig6AVjbC.cjs"),i=()=>{const[n,s]=e.p([]);return e._(()=>{fetch("/status.json").then(t=>t.json()).then(t=>{const l=t.map(({media:a,content:o})=>(a??[]).map(c=>({filename:c,content:o}))).flat().filter(a=>!a.filename.endsWith("mp4")).sort(()=>Math.random()>.5?1:-1).slice(0,10);s(l)}).catch(console.error)},[]),e.u("div",{class:"gallery",children:n.map(t=>e.u(r,{filename:t.filename,content:t.content}))})},r=({filename:n,content:s})=>e.u("div",{style:{backgroundImage:`url(/images/status/thumb-500-${n})`},children:e.u("div",{class:"content",dangerouslySetInnerHTML:{__html:s}})});e.B(e.u(i,{}),document.getElementById("status"));
