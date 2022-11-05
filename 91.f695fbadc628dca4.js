"use strict";(self.webpackChunkhulp_app_web=self.webpackChunkhulp_app_web||[]).push([[91],{5091:(M,f,o)=>{o.r(f),o.d(f,{AuthenticationModule:()=>O});var v=o(6895),d=o(3060),i=o(4006),p=o(5226),m=o.n(p),t=o(4650),C=o(2588),c=o(9549),l=o(4144),g=o(4859),a=o(3546),r=o(7392);const P=[{path:"",redirectTo:"login",pathMatch:"full"},{path:"cadastrar",loadChildren:()=>Promise.all([o.e(80),o.e(435)]).then(o.bind(o,1435)).then(n=>n.SignUpModule)},{path:"login",loadChildren:()=>Promise.all([o.e(589),o.e(675)]).then(o.bind(o,6675)).then(n=>n.LoginModule)},{path:"esqueci-senha",component:(()=>{class n{constructor(s,e,h){this.fb=s,this.signService=e,this.router=h,this.forgotForm=this.fb.group({email:[null,[i.kI.required,i.kI.email]],cpf:[null,i.kI.required],password:[null,i.kI.required],password_confirmation:[null,i.kI.required]}),this.hide=!1}ngOnInit(){}onSubmit(){this.forgotForm.valid&&this.signService.fotgotPassword(this.forgotForm.getRawValue()).subscribe(()=>{this.alertSwal()})}alertSwal(){m().fire({title:"Senha alterada com sucesso!",icon:"success",confirmButtonText:"OK"}).then(s=>{s&&this.router.navigate(["../autenticacao"])})}}return n.\u0275fac=function(s){return new(s||n)(t.Y36(i.qu),t.Y36(C.y),t.Y36(d.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-forgot"]],decls:31,vars:10,consts:[[1,"pg-forgot"],[1,"card"],[1,"flex-column",3,"formGroup","ngSubmit"],["appearance","outline"],["matInput","","placeholder","Email","formControlName","email"],["matInput","","placeholder","CPF","formControlName","cpf"],["matInput","","formControlName","password",3,"type"],["mat-icon-button","","matSuffix","",3,"click"],["matInput","","formControlName","password_confirmation",3,"type"],["mat-raised-button","","color","primary","type","submit",3,"disabled"]],template:function(s,e){1&s&&(t.TgZ(0,"div",0)(1,"mat-card",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4,"Esqueci minha Senha"),t.qZA()(),t.TgZ(5,"mat-card-content")(6,"form",2),t.NdJ("ngSubmit",function(){return e.onSubmit()}),t.TgZ(7,"mat-form-field",3)(8,"mat-label"),t._uU(9,"E-mail"),t.qZA(),t._UZ(10,"input",4),t.qZA(),t.TgZ(11,"mat-form-field",3)(12,"mat-label"),t._uU(13,"CPF "),t.qZA(),t._UZ(14,"input",5),t.qZA(),t.TgZ(15,"mat-form-field",3)(16,"mat-label"),t._uU(17,"Crie sua nova senha "),t.qZA(),t._UZ(18,"input",6),t.TgZ(19,"button",7),t.NdJ("click",function(){return e.hide=!e.hide}),t.TgZ(20,"mat-icon"),t._uU(21),t.qZA()()(),t.TgZ(22,"mat-form-field",3)(23,"mat-label"),t._uU(24,"Repita sua senha "),t.qZA(),t._UZ(25,"input",8),t.TgZ(26,"button",7),t.NdJ("click",function(){return e.hide=!e.hide}),t.TgZ(27,"mat-icon"),t._uU(28),t.qZA()()(),t.TgZ(29,"button",9),t._uU(30,"Alterar"),t.qZA()()()()()),2&s&&(t.xp6(6),t.Q6J("formGroup",e.forgotForm),t.xp6(12),t.Q6J("type",e.hide?"password":"text"),t.xp6(1),t.uIk("aria-label","Hide password")("aria-pressed",e.hide),t.xp6(2),t.Oqu(e.hide?"visibility_off":"visibility"),t.xp6(4),t.Q6J("type",e.hide?"password":"text"),t.xp6(1),t.uIk("aria-label","Hide password")("aria-pressed",e.hide),t.xp6(2),t.Oqu(e.hide?"visibility_off":"visibility"),t.xp6(1),t.Q6J("disabled",!e.forgotForm.valid))},dependencies:[c.KE,c.hX,c.R9,l.Nt,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,g.lW,a.a8,a.dk,a.dn,a.n5,r.Hw],styles:[".pg-forgot[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:#3f51b5;height:100vh}.pg-forgot[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{width:80%}@media (min-width: 768px){.pg-forgot[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{width:30%}}.pg-forgot[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%]{font-family:Mitr,sans-serif;border-bottom:1px solid #3f51b5}"]}),n})()}];let A=(()=>{class n{}return n.\u0275fac=function(s){return new(s||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[d.Bz.forChild(P),d.Bz]}),n})(),O=(()=>{class n{}return n.\u0275fac=function(s){return new(s||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[v.ez,A,l.c,i.UX,g.ot,a.QW,r.Ps]}),n})()},2588:(M,f,o)=>{o.d(f,{y:()=>c});var v=o(2340),d=o(4004),i=o(262),p=o(9646),m=o(4650),t=o(529),C=o(6894);let c=(()=>{class l{constructor(a,r){this.http=a,this.sessionStorage=r,this.apiBaseUrl=v.N.apiBaseUrl}signIn(a){return this.http.post(this.apiBaseUrl+"/login",a).pipe((0,d.U)(r=>(this.sessionStorage.saveObject(r),r)),(0,i.K)(r=>(0,p.of)(`${r.status}`)))}fotgotPassword(a){return this.http.post(this.apiBaseUrl+"/forgot_password",a).pipe((0,d.U)(r=>r),(0,i.K)(r=>(0,p.of)(`${r.status}`)))}}return l.\u0275fac=function(a){return new(a||l)(m.LFG(t.eN),m.LFG(C.u))},l.\u0275prov=m.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()}}]);