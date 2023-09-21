import { Component } from '@angular/core';
import { UsercreateService } from './services/usercreate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  
  formData: any = {
    name: '',
    email: '',
    password: ''
  };

  constructor(private apiService: UsercreateService) {}

  submitForm() {
    this.apiService.postData(this.formData).subscribe(
      (res)=>{
        console.log('data posted succesfully', res);
      },
      (err)=>{
        console.log('Error posting data', err)
      }
    );
  }
}
