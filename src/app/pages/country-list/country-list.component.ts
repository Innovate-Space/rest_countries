import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/models/country';
import { NetworkHelperService } from 'src/app/services/network-helper.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {

  countryList : Country[] = [];

  isLoading: boolean = false;

  constructor(private networkHelper: NetworkHelperService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.networkHelper.getRequest<Country[]>('all').subscribe({
      next: (data) => this.countryList = data,
      error: (e) => console.log("An error occurred" + e),
      complete: () => this.isLoading = false
      
    })
  }

}
