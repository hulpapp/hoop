import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {EventBase} from "../../../../core/models/event";
import {FormBuilder, Validators} from "@angular/forms";
import {SuperMarket} from "../../../../core/models/supermarket";
import {Volunteer} from "../../../../core/models/volunteer";
import {GambisService} from "../../../../core/services/gambis/gambis.service";
import Swal from 'sweetalert2';




@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  superMarkets: SuperMarket[] = [
    {local: 'BH : União - Center Minas', endereco: 'Avenida Dois Mil Trezentos eTrinta e Dois, 1495 - União. Belo Horizonte/MG'},
    {local: 'BH : Dona Clara', endereco: 'Avenida Sebastião de Brito, 1415 - Dona Clara. Belo Horizonte/MG'},
    {local: 'BH : Padre Eustáquio', endereco: 'Rua Padre Eustáquio, 2763 - Padre Eustáquio. Belo Horizonte/MG'},
    {local: 'BH : Barreiro', endereco: 'Avenida Afonso Vaz de Melo, 465 - Barreiro. Belo Horizonte/MG'},
    {local: 'BH : Itapoã (antigo Via Brasil)', endereco: 'Avenida Dom Pedro I, 402 - Itapoã. Belo Horizonte/MG'},
    {local: 'BH : Parque Riachuelo', endereco: 'Avenida Americo Vespucio, 1271 - Parque Riachuelo. Belo Horizonte/MG'},
    {local: 'BH : Guarani', endereco: 'Avenida Waldomiro Lobo, 591 - Guarani. Belo Horizonte/MG'},
    {local: 'BH : Pompéia ', endereco: 'Avenida dos Andradas, 3760 - Pompeia. Belo Horizonte/MG'},
    {local: 'BH : Nova Suiça - Silva Lobo', endereco: 'Avenida Silva Lobo, 760 - Nova Suiça. Belo Horizonte/MG'},
    {local: 'BH : Cachoerinha', endereco: 'Avenida Presidente Antônio Carlos, 1880 - Cachoerinha. Belo Horizonte/MG'},
    {local: 'BH : BIG Shopping', endereco: 'Avenida João Cesar de Olivera, 1275 - Eldorado. Contagem/MG'},
    {local: 'BH : São João Batista', endereco: 'Rua São Sebastião, 85 - Sao João Batista. Santa Luzia/MG'},
  ]

  superMercado: SuperMarket = {local: '', endereco: ''};

  constructor(private activatedRouter: ActivatedRoute,private fb: FormBuilder, private gambiService: GambisService) {
    this.activatedRouter.data.subscribe(data => {
      this.volunteer = data['volunteer'];
      this.event = data['events'][0];
    })
    this.checkVolunteerHasInscricao();


  }
  hasInscricao: boolean = false;
  participate: boolean = false;
  volunteer: Volunteer = new Volunteer();
  inscricaoForm = this.fb.group({
    volunteer_id: [0],
    event_id: [0],
    supermercado: ['',Validators.required],
    horaEntrada: ['',Validators.required],
    horaSaida: ['',Validators.required],
  })

  event: EventBase = new EventBase();
  ngOnInit(): void {



  }



  participateInEvent() {
    this.participate =! this.participate;

  }

  setEndereco(event: any) {
    this.superMercado = event.value

  }

  inscrever() {

    if(this.inscricaoForm.valid) {
      const inscricao = this.inscricaoForm.getRawValue();
      inscricao.volunteer_id = this.volunteer.id;
      inscricao.event_id = this.event.id;
      inscricao.supermercado = this.superMercado.local;
      inscricao.horaEntrada = this.horaToDate(inscricao.horaEntrada,this.event.date);
      inscricao.horaSaida = this.horaToDate(inscricao.horaSaida,this.event.date);


      this.gambiService.inscrever(inscricao).subscribe(() => {
        this.showSuccess();
        this.participate = false;
        this.hasInscricao = true;
      })





    }



  }

  showSuccess() {
    Swal.fire({
      title: 'Sucesso!',
      text: 'Inscrição realizada com sucesso',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
  }
  jsonToFormData(json: any): FormData {
    const formData = new FormData();
    Object.keys(json).forEach(key => formData.append(key, json[key]));
    return formData;
  }

  horaToDate(hora: any,eventDate: any) {
    let data = new Date(eventDate);
    let horaArray = hora.split(':');
    data.setHours(Number(horaArray[0])-3)
    data.setMinutes(Number(horaArray[1]))
    return data.toISOString();
  }

  checkVolunteerHasInscricao() {
    this.gambiService.getVolHasINscricao(this.volunteer.id).subscribe(data => {
      if(data) {
        this.hasInscricao = true;
      }
    })

  }



}


