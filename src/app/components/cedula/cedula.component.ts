import { Component, OnInit } from '@angular/core';
import { FormControl, Validators  } from '@angular/forms';

@Component({
  selector: 'app-cedula',
  templateUrl: './cedula.component.html',
  styleUrls: ['./cedula.component.css']
})
export class CedulaComponent implements OnInit {
  cedula = new FormControl('', [Validators.required, Validators.minLength(2)]);

  constructor() { }

  ngOnInit(): void {
  }
  

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

}
