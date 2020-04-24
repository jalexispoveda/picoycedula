import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  @Input() cedula: string;
  genero: string;
  constructor() { }

  ngOnInit(): void {
    this.genero = this.getGenre();
  }

  getGenre(){
    if (this.getNumberOfWeek() % 2 === 0) {
      return 'Masculino';
    } else {
      return 'Femenino';
    }
  }

  getNumberOfWeek() {
    const today = new Date();
    const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
    const pastDaysOfYear = (+today - +firstDayOfYear) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
  }

}
