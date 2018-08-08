import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms'
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';
import { UIService } from '../../shared/ui.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {
  minDate;
  maxDate;
  isLoading = false;
  private loadingSubs: Subscription;
  constructor(private authService: AuthService, private uiService: UIService) {}

  ngOnInit() {
    this.loadingSubs = this.uiService.loadingStateChanged.subscribe(isLoading => {
      this.isLoading = isLoading;
    });
    this.minDate = new Date();
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear())
    this.minDate.setFullYear(this.minDate.getFullYear() - 90);
  }

  onSubmit(form: NgForm){
    this.authService.registerUser({
      email: form.value.emailField,
      password: form.value.passwordField
    });
  }

  ngOnDestroy(){
    if(this.loadingSubs){
      this.loadingSubs.unsubscribe();
    }
    
  }
}
