import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/service/heores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private _searchService: HeroesService, private router: Router) {}

  ngOnInit(): void {}
  searchHeroe(term: string): void {
    this.router.navigate(['/search', term]);
  }
}
