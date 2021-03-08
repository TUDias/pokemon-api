import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from 'src/app/pokemon.service';

@Component({
  selector: 'app-pokemoninfo',
  templateUrl: './pokemoninfo.component.html',
  styleUrls: ['./pokemoninfo.component.css']
})
export class PokemoninfoComponent implements OnInit {

  pokemon: any = '';
  
  types: any[] = [];
  type: any[] = [];
  urlType: string = '';
  
  moves: any[] = [];
  move: any[] = [];
  urlMove: string = '';
  
  abilities: any[] = [];
  ability: any[] = [];
  urlAbility: string = '';

  local: any = '';
  constructor(private pokemonService: PokemonService,
    private router: Router, private route: ActivatedRoute) {

    this.route.params.subscribe(
      params => {
        this.getPokemon(params['id']);
      }
    );
  }


  ngOnInit(): void {

  }


  getPokemon(id: any) {
    this.pokemonService.getPokemonById(id)
    .subscribe(
      res => {
        this.pokemon = res;
        this.types = this.pokemon.types;
        this.moves = this.pokemon.moves;
        this.abilities = this.pokemon.abilities;
        console.log(res);
        
        //PEGAR TIPOS
        for (let indice = 0; indice < this.types.length; indice++) {
         this.urlType = this.types[indice].type.url;
          console.log(this.urlType);
          this.pokemonService.getByUrl(this.urlType)
          .subscribe((uniqResponse: any) => {
            this.type.push(uniqResponse);
          });
        }

        //PEGAR MOVIMENTOS
        for (let indice = 0; indice < this.moves.length; indice++) {
          this.urlMove = this.moves[indice].move.url;
           console.log(this.urlMove);
           this.pokemonService.getByUrl(this.urlMove)
           .subscribe((uniqResponse: any) => {
             this.move.push(uniqResponse);
           });
         }

        //PEGAR HABILIDADES
        for (let indice = 0; indice < this.abilities.length; indice++) {
          this.urlAbility = this.abilities[indice].ability.url;
           console.log(this.urlAbility);
           this.pokemonService.getByUrl(this.urlAbility)
           .subscribe((uniqResponse: any) => {
             this.ability.push(uniqResponse);
           });
         }

      },
      err => {

      }
    );
  }

//funciona mas nao é isso que eu quero
 //listaPokemons(){
 //  this.pokemonService.getAllTypes()
 //  .subscribe((response: any) => {
 //    response.results.forEach((result: { url: string; }) => {
 //      this.pokemonService.getTypesByUrl(result.url)
 //        .subscribe((uniqResponse: any) => {
 //          this.types.push(uniqResponse);
 //          console.log(this.types);
 //        });
 //    });
 //  });
 //  }


  voltar(): void {
    this.router.navigate(['/listaPokemons']);
  }

}
