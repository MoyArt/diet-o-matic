import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms'
import { AuthService } from '../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UIService } from '../../shared/ui.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  isLoading = false;
  private loadingSub: Subscription;
  constructor(private authService: AuthService, private uiService: UIService) { }

  ngOnInit() {
    this.loadingSub = this.uiService.loadingStateChanged.subscribe(isLoading => {
      this.isLoading = isLoading;
    })
    this.loginForm = new FormGroup({
      email: new FormControl('', { 
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl('', {
        validators: [Validators.required]
      })
    })
  }
  onSubmit(form:NgForm){
    debugger
    this.authService.loginUser({
      email: form.value.loginEmail,
      password: form.value.loginPassword
    });
  }
  ngOnDestroy(){
    if(this.loadingSub){
      this.loadingSub.unsubscribe()
    }
    
  }
}
