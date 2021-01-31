import {Reaction} from './reaction.js';

export function Post(texto){
    this.texto = texto;
    if(this.texto) this.reaction = new Reaction();

    this.getJSON = function(){
        return (this.texto === undefined)? null : {texto: this.texto};
    }

}