import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

const numericRegex = ('[0-9]*');

@Component({
  selector: 'app-cedula',
  templateUrl: './cedula.component.html',
  styleUrls: ['./cedula.component.css']
})
export class CedulaComponent implements OnInit {
  datos:any = {};
  cedula: string;

  constructor(private formBuilder: FormBuilder) { 
    this.datos = formBuilder.group({
      cedula: new FormControl('', [Validators.pattern(numericRegex)])
    }, {updateOn: 'change'});

    this.datos.get('cedula').valueChanges.subscribe((cedNumber) => {
          this.cedula = cedNumber;
  });
  }

  ngOnInit(): void {
  }

}
