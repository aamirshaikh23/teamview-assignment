import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search_results = [];
  filter = {
    'q': '',
    'sort': 'activity',
    'accepted': '',
    'answers': '',
    'body': '',
    'closed': '',
    'migrated': '',
    'notice': '',
    'nottagged': '',
    'tagged': '',
    'title': '',
    'user': '',
    'url': '',
    'views': '',
    'wiki': ''
  }

  constructor(private dataservice: DataService, private spinner: NgxSpinnerService) { }

  ngOnInit() {

  }

  search = () => {
    let filtered_data = this.generateFilterUrl();
    this.spinner.show();
    this.dataservice.search(filtered_data).subscribe(
      (res) => {
        if (res) {
          this.search_results = res.items;
          this.spinner.hide();
        }
      },
      (error) => {
          this.spinner.hide();
          alert("Error Occured. Please try again");
      }
    )
  }

  generateFilterUrl = () => {
    let url = '';
    for (let propName in this.filter) {
      if (this.filter[propName] !== '' && this.filter[propName] !== null) {
        url = url.concat('&', propName, '=', this.filter[propName]);
      }
    }
    return url;
  }


}
