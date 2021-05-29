import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  startDate = new Date(1990, 0, 1);
  value = 'Clear me';
  patientForm = new FormGroup({

    fName: new FormControl(''),
    lName: new FormControl(''),
    address: new FormControl(''),
      job: new FormControl(''),
     phone: new FormControl(''),
     email: new FormControl(''),
     dateBirth: new FormControl(''),


  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm()
  }


  initForm(): void{
    this.patientForm = this.formBuilder.group({

      fName: [''],
      lName: [''],
      job: [''],
      dateBirth: [''],
      phone: [''],
      address: [''],
      email: [''],


  });
  // form operations
  }
  disablePatientForm(){
    this.patientForm.disable()
  }
  enablePatientForm(){
    this.patientForm.enable()
  }
  resetPatientForm(){
    this.patientForm.reset();
  }

  // form evenents validation
  onSubmitPatient(){
    this.disablePatientForm();
  console.log(this.patientForm.value)

  }
  onCancelPatient(){
  this.enablePatientForm();
  }

 // form evenents crud op
  onAddPatient(){
    this.resetPatientForm();
    this.enablePatientForm();
  }
  onUpdatePatient(){

    this.enablePatientForm();
    console.log(this.patientForm.value)
  }
  onDeletePatient(){

  }


  // navigation

  onFirstPatient(){

  }
  onPreviousPatient(){

  }
  onNextPatient(){

  }
  onLastPatient(){

  }
}
