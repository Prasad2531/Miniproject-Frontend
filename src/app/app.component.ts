import { Component } from '@angular/core';
import { Login } from './Model/Login';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';

  bLogin = true;

  errorMessage = 'Invalid Credentials';
  successMessage!: string;
  invalidLogin = false;
  loginSuccess = false;

  constructor(private router: Router) { }

  loginUser = [
    new Login('nikhil123@gmail.com', 'admin', 'admin')
  ];
  loginUsername = new FormControl('');
  loginPassword = new FormControl('');

  loginDone() {
   
    let obj: any = this.loginUser.find(o => o.username === this.loginUsername.value);

    if (obj != null && this.loginPassword.value === obj.password) {
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Logged in Successfuly';
      this.bLogin = false;
      // alert(this.successMessage); 
      this.router.navigate(['/dashboard']);
    }
    else {
      this.invalidLogin = true;
      this.loginSuccess = false;
    }
    
    // if(this.loginSuccess == true){
    //   setTimeout(() => {
    //     this.router.navigate(['/dashboard']);
    //   }, 1000);
    // }
  }
}
