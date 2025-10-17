import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validators,
  ValidationErrors
} from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss'
})

export class RegistroComponent {

  error: boolean = false;
  form: FormGroup;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group(
      {
        name: ['', [Validators.required, Validators.minLength(2)]],
        email: ['', [Validators.required, Validators.email]],
        age: [null, [Validators.required, Validators.min(18)]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', [Validators.required]],
        terms: [false, Validators.requiredTrue],
        validators: [this.matchPasswords]
      },{
        validators: [this.matchPasswords]
      });
  }


  matchPasswords(formGroup: FormGroup): ValidationErrors | null {
  const passCtrl = formGroup.controls['password'];
  const confirmCtrl = formGroup.controls['confirmPassword'];


  const pass = passCtrl.value;
  const confirm = confirmCtrl.value;


  if (pass !== confirm) {
    confirmCtrl.setErrors({ ...(confirmCtrl.errors || {}), notMatching: true });
    return { notMatching: true };
  }


  if (confirmCtrl.hasError('notMatching')) {
    const { notMatching, ...rest } = confirmCtrl.errors || {};
    confirmCtrl.setErrors(Object.keys(rest).length ? rest : null);
  }

  return null;
  }



  doOnSubmit() {
    if (this.form.valid) {
      const values = this.form.getRawValue();
      console.log('Datos del formulario:', values);
      alert(`Formulario válido. Usuario: ${values.name}`);
    } else {
      this.form.markAllAsTouched();
      this.error = true;
    }
  }


  isInvalid(controlName: string): boolean {
    const control = this.form.get(controlName);
    return !!(control && control.invalid && (control.touched || control.dirty));
  }
}
