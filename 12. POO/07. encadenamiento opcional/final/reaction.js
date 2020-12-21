class Reaction{

    #likes;

    constructor(){
        this.#likes = 0;
    }

    newLike(){
        this.#likes++;
        return this.likes();
    }

    get likes(){
        return this.#likes;
    }
}