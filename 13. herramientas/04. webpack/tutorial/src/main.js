import {Post} from './post.js';

const post = new Post('Hola a todos');

//post.reaction.newLike();

if(post.reaction){
    console.log(post.reaction.newLike());
}else{
    console.log('No existe el método reaction');
}

console.log(post.reaction?.newLike());
console.log(post.reaction?.newLike() ?? 'No existe el método reaction');