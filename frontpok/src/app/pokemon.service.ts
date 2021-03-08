import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  

var httpOptions = {headers: new HttpHeaders({"Content-Type": "application/json"})};

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  url = 'https://pokeapi.co/api/v2/pokemon/';  

  constructor(private http: HttpClient) { }

  listAllPokemons(limit: number, offset: number) {  
    //return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
    //return this.http.get(`https://pokeapi.co/api/v2/pokemon`);

  } 

  listAllPokemon() {  
    return this.http.get(`https://pokeapi.co/api/v2/pokemon`);

  } 

  getPokemonByNome(nome: string){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${nome}`);
  }

  getPokemonById(id: any){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }



  getByUrl(url: string){
    return this.http.get(`${url}`);
  }

 
  //getAllTypes(){
  //  return this.http.get(`https://pokeapi.co/api/v2/type`);
  //}

  //getAllHabilidade(){
  //  return this.http.get(`https://pokeapi.co/api/v2/type`);
  //}

  
}
