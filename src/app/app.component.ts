import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ListDetailsService } from './Services/list-details.service';
import { HttpClientJsonpModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'assignment';

  constructor(){}
  ngOnInit() {

  }
}
