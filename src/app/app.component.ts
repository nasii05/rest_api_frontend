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


  data:any;

  constructor(private apiService: UsercreateService) { }

  submitForm() {
    this.apiService.postData(this.formData).subscribe(
      (res) => {
        console.log('data posted succesfully', res);
        alert('user added succesfully')
      },
      (err) => {
        console.log('Error posting data', err)
      }
    );

    this.formData = '';
  }

  getUserData() {
    this.apiService.getUserData().subscribe(
      (res) => {
        this.data = res
        console.log('data fetched succesfully', res);
      },
      (err) => {
        console.log('Error fetching data', err)
      }
    );
  }

  ngOnInit() {
    this.getUserData();
  }
}
