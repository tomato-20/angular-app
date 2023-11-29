import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@app/core/auth/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  error: String = '';
  success: Boolean = false;
  private EMAIL_REGEXP =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  private authService = inject(AuthService);
  private router = inject(Router);
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);

  // constructor(private authService: AuthService, private router: Router) {
  // }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      if(params['error']) {
        this.error = params['error']
      }
    })

    if (this.authService.userValue) {
      this.router.navigate(['/home']);
    }

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(this.EMAIL_REGEXP)]],
      password: ['', [Validators.required]],
    });
  }

  public get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    let formValue = this.loginForm.value;
    if (this.loginForm.valid) {
      this.login(formValue.email, formValue.password);
    }
  }

  login(email: string, password: string) {
    console.log('email, password');
    this.authService.login(email, password).subscribe({
      next : (user) => console.log(user),
      error: (error) => console.log(error)
    });
  }

  logout() {
    this.authService.logout();
  }
}
