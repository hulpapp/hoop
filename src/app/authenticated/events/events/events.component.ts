import { Component, OnInit } from '@angular/core';
import {EventsService} from "../../../core/services/events/events.service";
import {ActivatedRoute} from "@angular/router";
import {Event} from "../../../core/models/event";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor(private eventService: EventsService,private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(data => { this.events = data['events']; });
  }

  events: Event[]=[];



  ngOnInit(): void {
    this.getEvents();
  }


  getEvents() {
    this.eventService.getEvents().subscribe((res: any) => {
      console.log(res);
    })
  }



}
