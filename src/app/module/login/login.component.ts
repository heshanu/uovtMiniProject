import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
    standalone: false
})
export class LoginComponent implements OnInit{

  loginForm!:FormGroup;

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,private router: Router,
    private http: HttpClient,private authService:AuthService
  ){}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });

  }

  get name():any{
    return this.loginForm.get('name');
  }

  get paswrd():any {
    return this.loginForm.get('password');
  }

  onSubmit() {
    console.log(this.loginForm.value);
    console.log(this.loginForm.valid);
  
    if (this.loginForm.valid) {
      const username = this.loginForm.get('name')?.value;  
      const password = this.loginForm.get('password')?.value;
  
      if (username === "test" && password === "123456") {
        console.log("Login Successful");
        this.router.navigate(['/home']);
      } else {
        console.log("Invalid Credentials");
        alert("Invalid username or password");
        this.router.navigate(['/login']);
      }
    }
  }
}
