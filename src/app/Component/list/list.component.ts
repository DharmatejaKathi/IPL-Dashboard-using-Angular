import { Component, OnInit } from '@angular/core';
import { ListDetailsService } from '../../Services/list-details.service';
import { TeamList } from '../team-list-interface';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-list',

  standalone: true,
  imports: [RouterModule],
  providers: [ListDetailsService],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit {
  teamDetails: TeamList[] = [];

  constructor(private service: ListDetailsService, private router: Router) {}
  ngOnInit(): void {
    this.service.getListDataFromAPI().subscribe((data: any) => {
      this.teamDetails = data.teams;
      console.log(this.teamDetails);
    });
  }

  showDetails(id: string) {
    this.router.navigate(['/details', id]);
  }
}
