import{p as a,n as e,h as s,r as o,o as t,c as l,b as n,j as r,v as i,L as d,u,e as c,q as m,M as p,t as g,O as f,P as v,I as h,m as y}from"./vendor.a43a2890.js";import{_}from"./index.52eca232.js";const b={name:"CommonLayout",components:{PageFooter:_},setup:()=>({linkList:s("https://github.com/changan-kxl/changanAdmin"),copyright:s("2021 常安出品")})},k=i();a("data-v-199a218c");const w={class:"common-layout"},I={class:"content"};e();const L=k(((a,e,s,i,d,u)=>{const c=o("page-footer");return t(),l("div",w,[n("div",I,[r(a.$slots,"default",{},void 0,!0)]),n(c,{"link-list":i.linkList,copyright:i.copyright},null,8,["link-list","copyright"])])}));b.render=L,b.__scopeId="data-v-199a218c";const x=d.useForm,C={components:{CommonLayout:b},setup(){const a=u(),e=c(),o=s(!1),t=m({user:"",password:""}),{validate:l,validateInfos:n}=x(t,m({user:[{required:!0,message:"Please input name"}],password:[{required:!0,message:"Please input sub name"}]})),r=s("Vue Antd Admin"),i=m({labelCol:{span:0},wrapperCol:{span:24}});return{systemName:r,modelRef:t,onSubmit:function(){l().then((()=>{o.value=!0;!async function(s){const t=await a.dispatch("user/login",s);o.value=!1,1===t.result?(h.success("登录成功"),e.push("/home")):h.warning("用户名或密码错误")}(p(t))})).catch((a=>{o.value=!1}))},validateInfos:n,formItemLayout:i,logging:o}}},R=i();a("data-v-9072e106");const z={class:"top"},A={class:"header"},P=n("img",{alt:"logo",class:"logo",src:"./assets/logo.d2b1f1b8.png"},null,-1),j={class:"title"},q=n("div",{class:"desc"},null,-1),O={class:"login"},U=y("自动登录"),F=n("a",{style:{float:"right"}},"忘记密码",-1),N=y("登录");e();const S=R(((a,e,s,r,i,d)=>{const u=o("UserOutlined"),c=o("a-input"),m=o("a-form-item"),p=o("LockOutlined"),h=o("a-checkbox"),y=o("a-button"),_=o("a-form"),b=o("common-layout");return t(),l(b,null,{default:R((()=>[n("div",z,[n("div",A,[P,n("span",j,g(r.systemName),1)]),q]),n("div",O,[n(_,f(r.formItemLayout,{layout:"horizontal",model:r.modelRef}),{default:R((()=>[n(m,r.validateInfos.user,{default:R((()=>[n(c,{value:r.modelRef.user,"onUpdate:value":e[1]||(e[1]=a=>r.modelRef.user=a),placeholder:"superAdmin",size:"large"},{prefix:R((()=>[n(u,{style:{color:"rgba(0, 0, 0, 0.25)"}})])),_:1},8,["value"])])),_:1},16),n(m,r.validateInfos.password,{default:R((()=>[n(c,{value:r.modelRef.password,"onUpdate:value":e[2]||(e[2]=a=>r.modelRef.password=a),type:"password",placeholder:"888888",size:"large"},{prefix:R((()=>[n(p,{style:{color:"rgba(0, 0, 0, 0.25)"}})])),_:1},8,["value"])])),_:1},16),n("div",null,[n(h,{checked:!0},{default:R((()=>[U])),_:1}),F]),n(m,null,{default:R((()=>[n(y,{loading:r.logging,style:{width:"100%","margin-top":"24px"},size:"large",type:"primary",onClick:v(r.onSubmit,["prevent"])},{default:R((()=>[N])),_:1},8,["loading","onClick"])])),_:1})])),_:1},16,["model"])])])),_:1})}));C.render=S,C.__scopeId="data-v-9072e106";var M=C;export{M as default};