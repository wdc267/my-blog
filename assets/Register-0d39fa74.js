import{r as v,a as _,b as d,o as y,c as b,d as p,e,w as t,u as a,f as x}from"./index-eec5cf94.js";const h={class:"register-body"},k={class:"register-panel"},U=p("div",{class:"register-title"},"注册账号",-1),q=p("a",{class:"to-register"},"去登录账号",-1),D={__name:"Register",setup(E){const u=v(null),o=_({username:"",email:"",nickname:"",sex:"",telephone:"",address:"",password:"",confirmPassword:""}),f=_({username:[{required:!0,message:"Please input username"}],password:[{validator:(i,l,s)=>{if(l==="")s(new Error("Please input the password"));else{if(o.confirmPassword!==""){if(!u.value)return;u.value.validateField("confirmPassword",()=>null)}s()}},trigger:"blur"}],email:[{required:!0,message:"Please input your email"}],confirmPassword:[{validator:(i,l,s)=>{l===""?s(new Error("Please input the password again")):l!==o.password?s(new Error("Two inputs don't match!")):s()},trigger:"blur"}]}),w=()=>{u.value.validate(i=>{})};return(i,l)=>{const s=d("el-input"),n=d("el-form-item"),m=d("el-radio"),V=d("el-radio-group"),c=d("el-form"),g=d("el-button"),P=d("router-link");return y(),b("div",h,[p("div",k,[U,e(c,{"label-position":"right","label-width":"80px",model:a(o),rules:a(f),ref_key:"registerDataRef",ref:u},{default:t(()=>[e(n,{prop:"username",label:"用户名",required:""},{default:t(()=>[e(s,{placeholder:"Please input your user name",modelValue:a(o).username,"onUpdate:modelValue":l[0]||(l[0]=r=>a(o).username=r)},null,8,["modelValue"])]),_:1}),e(n,{prop:"email",label:"电子邮件",required:""},{default:t(()=>[e(s,{placeholder:"Please input your email",modelValue:a(o).email,"onUpdate:modelValue":l[1]||(l[1]=r=>a(o).email=r)},null,8,["modelValue"])]),_:1}),e(n,{prop:"nickname",label:"昵称"},{default:t(()=>[e(s,{placeholder:"Please input your nick name",modelValue:a(o).nickname,"onUpdate:modelValue":l[2]||(l[2]=r=>a(o).nickname=r)},null,8,["modelValue"])]),_:1}),e(n,{label:"性别",prop:"sex"},{default:t(()=>[e(V,{modelValue:a(o).sex,"onUpdate:modelValue":l[3]||(l[3]=r=>a(o).sex=r)},{default:t(()=>[e(m,{label:"男"}),e(m,{label:"女"})]),_:1},8,["modelValue"])]),_:1}),e(n,{prop:"telephone",label:"手机号"},{default:t(()=>[e(s,{placeholder:"Please input your telephone number",modelValue:a(o).telephone,"onUpdate:modelValue":l[4]||(l[4]=r=>a(o).telephone=r)},null,8,["modelValue"])]),_:1}),e(n,{prop:"address",label:"地址"},{default:t(()=>[e(s,{placeholder:"Please input your address",modelValue:a(o).address,"onUpdate:modelValue":l[5]||(l[5]=r=>a(o).address=r)},null,8,["modelValue"])]),_:1}),e(n,{prop:"password",label:"密码",required:""},{default:t(()=>[e(s,{type:"password",placeholder:"Please input your password",modelValue:a(o).password,"onUpdate:modelValue":l[6]||(l[6]=r=>a(o).password=r)},null,8,["modelValue"])]),_:1}),e(n,{prop:"confirmPassword",label:"确认密码",required:""},{default:t(()=>[e(s,{type:"password",placeholder:"Please input your password again",modelValue:a(o).confirmPassword,"onUpdate:modelValue":l[7]||(l[7]=r=>a(o).confirmPassword=r)},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"]),e(n,null,{default:t(()=>[e(g,{type:"primary",style:{width:"100%"},onClick:w},{default:t(()=>[x("注册")]),_:1})]),_:1}),e(P,{to:"/login"},{default:t(()=>[q]),_:1})])])}}};export{D as default};
