import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private spinner: NgxSpinnerService) { }

  showSpinner() {
    this.spinner.show(undefined, { fullScreen: true });
    setTimeout(() => {
      this.spinner.hide();
    }, 5000);
  }

  changeOptions() {
    this.spinner.show(undefined,
      {
        type: 'square-spin',
        size: 'medium',
        bdColor: 'rgba(100,149,237, .8)',
        color: 'white',
        fullScreen: false
      }
    );
    setTimeout(() => this.spinner.hide(), 5000);
  }
}