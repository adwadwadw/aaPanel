import{_ as e,a}from"./index.vue_vue_type_script_setup_true_lang6.js?v=1721298337096";import{_ as t}from"./index.vue_vue_type_script_setup_true_lang12.js?v=1721298337096";import{K as r,ee as s}from"./index.js?v=1721298337096";import{l as p,ad as l,r as o,f as i,S as u,Z as n,P as _,V as d,_ as m,W as c,t as v}from"./vue.js?v=1721298337096";import"./index.vue_vue_type_script_setup_true_lang8.js?v=1721298337096";import"./InputGroupLabel.js?v=1721298337096";import"./InputGroup.js?v=1721298337096";import"./pinia.js?v=1721298337096";const f={class:"px-20px pt-24px pb-8px"},x={class:"w-240px"},h=p({__name:"index",setup(p,{expose:h}){const{t:g}=l(),j=r(),y=o(null),b=i({path:""}),k={path:{trigger:["blur","change"],validator:()=>""!==b.path.trim()||new Error(g("Docker.LocalImage.index_23"))}};return h({onConfirm:async()=>{var e;await(null==(e=y.value)?void 0:e.validate()),await s({...v(b)}),j.setRefresh(!0)}}),(r,s)=>{const p=t,l=e,o=a;return u(),n("div",f,[_(o,{ref_key:"formRef",ref:y,model:c(b),rules:k},{default:d((()=>[_(l,{label:r.$t("Docker.LocalImage.index_22"),path:"path"},{default:d((()=>[m("div",x,[_(p,{value:c(b).path,"onUpdate:value":s[0]||(s[0]=e=>c(b).path=e),"checked-type":["file"],placeholder:r.$t("Docker.LocalImage.index_23")},null,8,["value","placeholder"])])])),_:1},8,["label"])])),_:1},8,["model"])])}}});export{h as default};