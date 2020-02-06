import { Component, OnInit } from '@angular/core';
import { IpoService } from 'src/app/services/ipo.service';
import { IPO } from 'src/modals/ipo';

@Component({
  selector: 'app-ipodetails',
  templateUrl: './ipodetails.component.html',
  styleUrls: ['./ipodetails.component.css']
})
export class IpodetailsComponent implements OnInit {
 addIpo : IPO[];
  constructor(private ipoService : IpoService) { }

  ngOnInit() {
  }
  // addIPODetails(){
  //   this.ipoService.saveIPO(this.addIpo.value).subscribe(data => {
  //     console.log("IPO inserted successfully"+data);
  //   });
  }

