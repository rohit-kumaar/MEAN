import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ConfigService } from './config/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'frontend';
  allUsers: any = [];

  constructor(private config: ConfigService) {}
  form = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit(): void {
    this.config.getAllUser().subscribe((res: any) => {
      console.log(res);
      this.allUsers = res;
    });
  }

  ngSubmit() {
    this.config.postUser(this.form.value).subscribe((res: any) => {
      console.log(res);
    });
    // console.log(this.form.value);
  }
}
