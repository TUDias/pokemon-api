import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../../pokemon.service';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-listapokemons',
  templateUrl: './listapokemons.component.html',
  styleUrls: ['./listapokemons.component.css']
})
export class ListapokemonsComponent implements OnInit {

  pokemons: any[] = [];
  page = 1;
  totalPokemons: number = 0;

  constructor(private pokemonService: PokemonService,
     private router: Router, private route: ActivatedRoute) { 

     }

     
  ngOnInit(): void {
    this.listaPokemons();
}

listaPokemons(){
  this.pokemonService.listAllPokemons(12, this.page + 0)
      .subscribe((response: any) => {
        this.totalPokemons = response.count;
        response.results.forEach((result: { name: string; }) => {
          this.pokemonService.getPokemonByNome(result.name)
            .subscribe((uniqResponse: any) => {
              this.pokemons.push(uniqResponse);
              console.log(this.pokemons);
              
            });
        });
      });
  }
  
  pokemondetalhe(): void{
    this.router.navigate(['/listaPokemons']);
  }



}