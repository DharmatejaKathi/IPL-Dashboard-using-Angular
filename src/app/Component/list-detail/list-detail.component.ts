import { Component, OnInit } from '@angular/core';
import { ListDetailsService } from '../../Services/list-details.service';
import { HttpClientJsonpModule } from '@angular/common/http';
import { TeamList } from '../team-list-interface';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-detail',
  imports: [RouterModule, CommonModule],
  providers: [ListDetailsService],
  templateUrl: './list-detail.component.html',
  styleUrl: './list-detail.component.css',
})
export class ListDetailComponent implements OnInit {
  constructor(
    private service: ListDetailsService,
    private route: ActivatedRoute
  ) {}

  teamId: any = '';
  teamDetails: any;
  matchDetail: any;
  ngOnInit() {
    this.teamId = this.route.snapshot.paramMap.get('id');
    this.getDetail();
  }
  getDetail() {
    this.service.getListData(this.teamId).subscribe((data: any) => {
      this.teamDetails = data;
      this.matchDetail = this.teamDetails.latest_match_details;

      console.log(data);
      console.log(this.teamDetails);
    });
  }
}
