import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {SignInService} from "../../../core/sign-in.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder,private signIn: SignInService,private router: Router) {

  }
  loading = false;
  error = false;
  loginForm = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, Validators.required],
  });

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.loginForm.valid) {
      this.loading = true;
      this.onSubmitAnimation();
      this.signIn.signIn(this.loginForm.value).subscribe((res: any) => {
        if(res === '401') {

          this.addClassError()
        }else{
          this.router.navigate(['../../hoop']);
        }


      })

    }

  }

  onSubmitAnimation() {
    const divLogin = document.querySelector('.login');
    const state = document.querySelector('.state');
    if(divLogin && state){
      divLogin.classList.add('loading');
      state.innerHTML = 'Autenticando';
      this.loading = true;
    }


  }


  jsonToFormData(json: any): FormData {
    const formData = new FormData();
    Object.keys(json).forEach(key => formData.append(key, json[key]));
    return formData;
  }

  addClassError() {
    const divLogin = document.querySelector('.login');
    const state = document.querySelector('.state');
    if(divLogin && state){
      state.innerHTML = 'Usuário ou Senha Incorreta!!';
      divLogin.classList.add('error');
      this.error = true;
      setTimeout(() => {
        divLogin.classList.remove('loading','error');
        state.innerHTML = 'Entrar';
        this.loading = false;
      } , 4000);
    }
  }

  getEmailInvalid() {
    return this.loginForm.get('email')?.invalid && this.loginForm.get('email')?.touched;
  }

  getPasswordInvalid() {
    return this.loginForm.get('password')?.invalid && this.loginForm.get('password')?.touched;
  }

  get emailReq() {
    return this.loginForm.get('email')?.hasError('required') && this.loginForm.get('email')?.touched;
  }
  get passwordReq() {
    return this.loginForm.get('password')?.hasError('required');
  }



}
