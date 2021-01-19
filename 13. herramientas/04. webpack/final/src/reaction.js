
export function Reaction(){
    this.likes = 0;

    this.newLike = function(){
        this.likes++;
        return this.likes;
    }
}