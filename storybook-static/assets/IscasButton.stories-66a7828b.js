import{d as x,e as l,o as z,f as B,t as C,n as S,g as h}from"./vue.esm-bundler-bf4feb63.js";const _=x({__name:"index",props:{label:{},primary:{type:Boolean,default:!1},size:{},backgroundColor:{}},emits:["click"],setup(r,{emit:s}){const e=r,n=l(()=>({"storybook-button":!0,"storybook-button--primary":e.primary,"storybook-button--secondary":!e.primary,[`storybook-button--${e.size||"medium"}`]:!0})),c=l(()=>({backgroundColor:e.backgroundColor})),k=()=>{s("click",1)};return(v,E)=>(z(),B("button",{type:"button",class:S(n.value),onClick:k,style:h(c.value)},C(v.label),7))}});const q=(r,s)=>{const e=r.__vccOpts||r;for(const[n,c]of s)e[n]=c;return e},I=q(_,[["__scopeId","data-v-1455974e"]]);_.__docgenInfo={exportName:"default",displayName:"button",description:"",tags:{},props:[{name:"label",description:"The label of the button",required:!0,type:{name:"string"}},{name:"primary",description:"primary or secondary button",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",description:"size of the button",required:!1,type:{name:"union",elements:[{name:'"small"'},{name:'"medium"'},{name:'"large"'}]}},{name:"backgroundColor",description:"background color of the button",required:!1,type:{name:"string"}}],events:[{name:"click",type:{names:["number"]}}],sourceFiles:["/Users/donghang/Documents/中科院北京workSpace/iscas-storybook-vue/src/components/button/index.vue"]};const L={title:"Example/IscasButton",component:I,tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium","large"]},label:{control:"text"},backgroundColor:{control:"color"},onClick:{action:"clicked"}},args:{primary:!1}},o={args:{primary:!0,label:"iscas primary"}},a={args:{primary:!1,label:"Button"}},t={args:{label:"Button",size:"large"}};var i,m,u;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'iscas primary'
  }
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,d,y;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    primary: false,
    label: 'Button'
  }
}`,...(y=(d=a.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var b,g,f;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    size: 'large'
  }
}`,...(f=(g=t.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const N=["Primary","Secondary","Large"];export{t as Large,o as Primary,a as Secondary,N as __namedExportsOrder,L as default};
//# sourceMappingURL=IscasButton.stories-66a7828b.js.map
