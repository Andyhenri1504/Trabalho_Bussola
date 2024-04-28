import { response } from 'express';
import { error } from 'console';


fetch('https://gateway.marvel.com:443/v1/public/events?name=absolue%20carnage&apikey={publickey}&ts=1&hash={md5(ts+publickey+privatekey')
.then(response =>
  response.json())
  .then(data =>{
    console.log(data);
  })
  .catch(error => 
    console.error('Erro: ',error));
  

  