import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-inscripption',
  standalone: false,
  templateUrl: './inscripption.component.html',
  styleUrl: './inscripption.component.css'
})
export class INSCRIPPTIONComponent implements OnInit, AfterViewInit {
  @ViewChild('passwordInput') passwordInput!: ElementRef;
  @ViewChild('confirmPasswordInput') confirmPasswordInput!: ElementRef;
  @ViewChild('passwordStrength') passwordStrength!: ElementRef;
  @ViewChild('passwordStrengthText') passwordStrengthText!: ElementRef;

  registerForm: FormGroup;
  passwordVisible = false;
  confirmPasswordVisible = false;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      terms: [false, Validators.requiredTrue]
    }, { validator: this.passwordMatchValidator });
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.setupPasswordInputListener();
  }

  private setupPasswordInputListener(): void {
    if (this.passwordInput && this.passwordStrength && this.passwordStrengthText) {
      this.passwordInput.nativeElement.addEventListener('input', (event: Event) => {
        const password = (event.target as HTMLInputElement).value;
        this.updatePasswordStrength(password);
      });
    }
  }

  private updatePasswordStrength(password: string): void {
    const strength = this.checkPasswordStrength(password);
    const strengthPercent = (strength / 4) * 100;
    
    this.passwordStrength.nativeElement.style.width = strengthPercent + '%';
    
    if (strengthPercent < 25) {
      this.passwordStrength.nativeElement.style.backgroundColor = '#E74C3C';
      this.passwordStrengthText.nativeElement.textContent = 'Faible';
      this.passwordStrengthText.nativeElement.style.color = '#E74C3C';
    } else if (strengthPercent < 50) {
      this.passwordStrength.nativeElement.style.backgroundColor = '#F39C12';
      this.passwordStrengthText.nativeElement.textContent = 'Moyen';
      this.passwordStrengthText.nativeElement.style.color = '#F39C12';
    } else if (strengthPercent < 75) {
      this.passwordStrength.nativeElement.style.backgroundColor = '#3498DB';
      this.passwordStrengthText.nativeElement.textContent = 'Bon';
      this.passwordStrengthText.nativeElement.style.color = '#3498DB';
    } else {
      this.passwordStrength.nativeElement.style.backgroundColor = '#2ECC71';
      this.passwordStrengthText.nativeElement.textContent = 'Fort';
      this.passwordStrengthText.nativeElement.style.color = '#2ECC71';
    }
  }

  private checkPasswordStrength(password: string): number {
    let strength = 0;
    
    if (password.length >= 8) strength += 1;
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) strength += 1;
    if (password.match(/([0-9])/)) strength += 1;
    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1;
    
    return strength;
  }

  private passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    }
    return null;
  }

  togglePasswordVisibility(field: 'password' | 'confirmPassword'): void {
    if (field === 'password') {
      this.passwordVisible = !this.passwordVisible;
      const inputType = this.passwordVisible ? 'text' : 'password';
      this.passwordInput.nativeElement.type = inputType;
    } else {
      this.confirmPasswordVisible = !this.confirmPasswordVisible;
      const inputType = this.confirmPasswordVisible ? 'text' : 'password';
      this.confirmPasswordInput.nativeElement.type = inputType;
    }
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      // Soumission du formulaire
      console.log('Formulaire valide', this.registerForm.value);
      // this.authService.register(this.registerForm.value).subscribe(...);
    } else {
      this.registerForm.markAllAsTouched();
    }
  }

  get f() {
    return this.registerForm.controls;
  }
}

