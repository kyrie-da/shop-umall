webpackJsonp([6],{"1cHr":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=t("ZPXN"),r={data:function(){return{user:{phone:"",nickname:"",password:""}}},methods:{onSubmit:function(){var e=this;Object(s.i)(this.user).then(function(n){e.$toast.success(n.data.msg),e.$router.push("/mine")})}}},a={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("van-nav-bar",{attrs:{"right-text":"登录",title:"注册"},on:{"click-right":function(n){return e.$router.push("/login")}}}),e._v(" "),t("van-form",{on:{submit:e.onSubmit}},[t("van-field",{attrs:{name:"手机号",label:"手机号",placeholder:"手机号",rules:[{required:!0,message:"请填写手机号"}]},model:{value:e.user.phone,callback:function(n){e.$set(e.user,"phone",n)},expression:"user.phone"}}),e._v(" "),t("van-field",{attrs:{label:"昵称",name:"昵称",placeholder:"请输入昵称",rules:[{required:!0,message:"请填写昵称"}]},model:{value:e.user.nickname,callback:function(n){e.$set(e.user,"nickname",n)},expression:"user.nickname"}}),e._v(" "),t("van-field",{attrs:{type:"password",name:"密码",label:"密码",placeholder:"密码",rules:[{required:!0,message:"请填写密码"}]},model:{value:e.user.password,callback:function(n){e.$set(e.user,"password",n)},expression:"user.password"}}),e._v(" "),t("div",{staticStyle:{margin:"16px"}},[t("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[e._v("注册")])],1)],1)],1)},staticRenderFns:[]};var u=t("VU/8")(r,a,!1,function(e){t("cMy5")},null,null);n.default=u.exports},cMy5:function(e,n){}});
//# sourceMappingURL=6.a56949c7bc0c2e547a06.js.map