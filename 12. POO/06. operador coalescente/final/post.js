class Post{

    #texto;
    constructor(texto){
        this.#texto = texto;
    }

    get text(){
        return this.#texto;
    }

    getJSON(){
        if(this.#texto === undefined){
            return null;
        }else{
            return {texto: this.#texto};
        }
        
    }
}