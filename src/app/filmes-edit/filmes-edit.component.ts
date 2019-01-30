import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Filme } from '../shared/Filme';

@Component({
  selector: 'app-filmes-edit',
  templateUrl: './filmes-edit.component.html',
  styleUrls: ['./filmes-edit.component.sass']
})
export class FilmesEditComponent implements OnInit {
  @Input() filme: any;

  constructor(private api: ApiService,
    private router: Router,
    private route: ActivatedRoute) { }

  updateFilme() {
    this.api.updateFilme(this.route.snapshot.params['id'], this.filme).subscribe((filme) => {
      this.router.navigate(['/filmes-details/' + filme.id]);
    }, (err) => {
      console.log(err);
    });
  }



  ngOnInit() {
    this.api.getFilmePorId(this.route.snapshot.params['id']).subscribe((filme: {}) => {
      console.log(filme);
      this.filme = filme;
    });
  }

}
