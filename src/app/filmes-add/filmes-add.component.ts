import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Filme } from '../shared/Filme';

@Component({
  selector: 'app-filmes-add',
  templateUrl: './filmes-add.component.html',
  styleUrls: ['./filmes-add.component.sass']
})
export class FilmesAddComponent implements OnInit {
  //Melhoria trazendo o Objeto
  @Input() filme = new Filme(); //{id: '', nome: '', descricao: ''};

  constructor(private api: ApiService, 
              private router: Router) { }
  
  addFilme() {
    this.api.addFilme(this.filme).subscribe((resultado) => {
      this.router.navigate['/filmes'];
    }, (err) => {
        console.log(err);
    });
  }
  ngOnInit() {
  }

}
