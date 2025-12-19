import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {  FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsernameValidators } from '../../core/validators/username.validator';

@Component({
  selector: 'app-registro-usuario',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registro-usuario.html',
  styleUrl: './registro-usuario.css',
})
export class RegistroUsuario {

  // authService

  private formBuilder = inject(FormBuilder);

  formNovoUser = this.formBuilder.group({
    username: ['', [Validators.required, UsernameValidators.palavraProibida('Abacate')]  ],
    nome: ['', Validators.required],
    password: ['', Validators.required]
  })


  cadastrar() {

    const formValues = this.formNovoUser.getRawValue();

    const { username, nome, password } = formValues;

    // chama a função de registro do authService: username, nome, password


  }
  

}
