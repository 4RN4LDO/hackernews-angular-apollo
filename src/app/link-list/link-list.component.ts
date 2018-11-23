import { Component, OnInit } from '@angular/core';
import {Apollo} from 'apollo-angular';
import {Link} from '../types';

import {ALL_LINKS_QUERY, AllLinkQueryResponse} from '../graphql';

@Component({
  selector: 'hn-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css']
})
export class LinkListComponent implements OnInit {
  allLinks: Link[] = [];
  loading: boolean = true;

  constructor(private apollo: Apollo) {
  }

  ngOnInit() {
    this.apollo.watchQuery({
      query: ALL_LINKS_QUERY
    }).valueChanges.subscribe((response) => {
      // this.allLinks = response.data.allLinks; //Revisar error, comentar línea para levantar servidor.
      this.loading = response.loading;
      console.log(response)
    })
  }

}
