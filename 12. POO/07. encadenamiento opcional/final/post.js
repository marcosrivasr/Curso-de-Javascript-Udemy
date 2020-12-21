class Post{

    #texto;
    #reaction;

    constructor(texto){
        this.#texto = texto;
        if(this.#texto) this.#reaction = new Reaction();
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

    get reaction(){
        return this.#reaction;
    }


}