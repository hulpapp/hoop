import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {SignUpService} from "../../../core/sign-up.service";
import Swal from 'sweetalert2';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SignUpComponent implements OnInit {



  constructor(private fb: FormBuilder,private signUpService: SignUpService,  private router: Router) { }
  hide = true;
  disabled = false;
  userForm = this.fb.group({
    name: [null, Validators.required],
    telephone: [null, Validators.required],
    cpf: [null, Validators.required],
    identity: [null, Validators.required],
    }
  );
  passForm = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, Validators.required],
    password_confirmation: [null, Validators.required],
    usage: [false, Validators.required],
    imageUsage: [false, Validators.required],

  });

  addressForm = this.fb.group({
    cep: [null, Validators.required],
    street: [null, Validators.required],
    number: [null, Validators.required],
    city: [null, Validators.required],
    state: [null, Validators.required],
  });
  reqBool: boolean= true;



  ngOnInit(): void {

  }


  submit() {
    let submitForm: {};
    submitForm = this.jsonToFormData({...this.userForm.value, ...this.passForm.value, ...this.addressForm.value});
    if(this.userForm.valid && this.passForm.valid && this.addressForm.valid){
      this.signUp(submitForm);
    }

  }

  signUp(formData: any) {
    this.setFormOnlyRead();
    this.reqBool = false;
    this.signUpService.signUp(formData).subscribe(
      (data: any) => {
        if(data){
          this.alertSwal();
          this.setFormReadAndWrite();
          this.reqBool = true;
        }


      },
    );
  }

  jsonToFormData(json: any): FormData {
    const formData = new FormData();
    Object.keys(json).forEach(key => formData.append(key, json[key]));
    return formData;
  }

  checkUsage(){
    return  this.passForm.value.usage && this.passForm.value.imageUsage
  }

  alertSwal(){
    Swal.fire({
      title: 'Cadastro realizado com sucesso!',
      icon: 'success',
      text: 'Seja bem vindo ao sistema de Voluntariado !',
      confirmButtonText: 'OK',
    }).then((result) => {if (result){
      this.router.navigate(['../autenticacao']);
    }}  );
  }
 setFormOnlyRead(){
    this.userForm.disable();
    this.passForm.disable();
    this.addressForm.disable();
    this.disabled = true;
 }

 setFormReadAndWrite(){
    this.userForm.enable();
    this.passForm.enable();
    this.addressForm.enable();
    this.disabled = false;
 }



}
