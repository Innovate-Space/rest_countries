import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NetworkHelperService } from 'src/app/services/network-helper.service';
import { Country } from 'src/app/models/country';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit {

  isLoading:boolean = true;
  country?: Country = undefined

  

  constructor(private route: ActivatedRoute,private router: Router, private networkService: NetworkHelperService) { }

  ngOnInit(): void {
    //this.isLoading = true
    const countryName = this.route.snapshot.paramMap.get('id');
    
    this.networkService.getRequest<Country[]>(`name/${countryName}`).subscribe(
      {
        next: (d) =>{
         
          this.country = d[0]
        },
        error: (e) => alert(JSON.stringify(e)),
        complete: () => this.isLoading = false
      }
    )
  }

}
