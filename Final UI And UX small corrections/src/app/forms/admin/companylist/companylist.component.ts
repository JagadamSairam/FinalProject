import { Component, OnInit } from '@angular/core';
import { AddcompanyService } from 'src/app/services/addcompany.service';
import { Company } from 'src/modals/addcompany';

@Component({
  selector: 'app-companylist',
  templateUrl: './companylist.component.html',
  styleUrls: ['./companylist.component.css']
})
export class CompanylistComponent implements OnInit {
companies : Company[];
  constructor(private companyService : AddcompanyService,) { }

  ngOnInit() {
    this.companyService.getAllCompanies().subscribe(data => {
      this.companies=data;
    });
  }

}
