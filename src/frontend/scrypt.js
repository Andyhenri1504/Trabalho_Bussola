import { response } from 'express';
import { error } from 'console';


fetch('https://gateway.marvel.com:443/v1/public/characters?apikey=86fbe7fc1b6fc0c60e098bf7805aafd5&ts=1&hash=841b39ce92a466c719d0ebe9ac7659c5')
.then(response =>
  response.json())
  .then(data =>{
    console.log(data);
  })
  .catch(error => 
    console.error('Erro: ',error));
  

    const marvelData = [];

    const filtredData = marvelData.map(character =>{
        if(character.name.toLowerCase().includes('iron')){
            return{
                name:character.name,
                descripion: character.descripion
            };
        } else{
            return null;
        }
    });