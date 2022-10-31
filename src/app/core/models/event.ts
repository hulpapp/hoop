export class EventBase {
  id: number;
  name: string;
  detail: string;
  date: string;
  startDate: string;
  endDate: string;
  city: string;
  user_id: number;

  constructor() {
    this.id = 0;
    this.name = '';
    this.detail = '';
    this.date = '';
    this.startDate = '';
    this.endDate = '';
    this.city = '';
    this.user_id = 0;
  }
}


// Path: src\app\core\models\volunteer.ts
