import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/service/heores.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  heroes: any[] = [];
  constructor(
    private _searchService: HeroesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params): any => {
      this.heroes = this._searchService.searchHeroe(params['term']);
    });
  }
}
