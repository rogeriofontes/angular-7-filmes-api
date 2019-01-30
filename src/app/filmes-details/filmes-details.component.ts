import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-filmes-details',
  templateUrl: './filmes-details.component.html',
  styleUrls: ['./filmes-details.component.sass']
})
export class FilmesDetailsComponent implements OnInit {

  filme:any;

  constructor(private api: ApiService, 
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.api.getFilmePorId(id).subscribe((filme: {}) => {
      console.log(filme);
      this.filme = filme;
    });
  }

}
