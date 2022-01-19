
class PizzaClass {
    constructor(ingredientInput) {
        [this.numberOfClient, this.arrayInput] = this.convertInput(ingredientInput)
        
    }   
    likeInput = [];
    dislikeInput = [];
    fullIngredient = [];

    convertInput(funcInput){
        const arrayInput = funcInput.split('\n')
        arrayInput.shift() 
        arrayInput.pop();
        
        return [Number(arrayInput[0]), arrayInput.shift() && arrayInput];
    }

    dislikeLikeIngredient(ingredient, client){
        let likesDislike = -1;
        let i = 0;
        const _likes = [];
        const _dislikes = [];

        while(i < client) {
            let likesIngredient = ingredient[likesDislike + 1].split(' ') 
            let dislikeIngredient = ingredient[likesDislike + 2].split(' ') 
            
            let numberOfLikesIngredient = +likesIngredient[0]
            this.addIngredient(numberOfLikesIngredient, likesIngredient, _likes);

            let numberOfDislikeIngredient = +dislikeIngredient[0];
            this.addIngredient(numberOfDislikeIngredient, dislikeIngredient, _dislikes);

            likesDislike += 2;
            i++;
        }

        return [_likes, _dislikes]
    }

    addIngredient(number, totalIngredient, likeOrDislike) {
            if(number > 0) {
                let k = 1;
                while(k < totalIngredient.length) {
                    if(!likeOrDislike.includes(totalIngredient[k])) 
                        likeOrDislike.push(totalIngredient[k])
                    k++;
                }
            }
        }

    createNewIngredient(likes, dislike) {
            for(let each of dislike) {
                 if(likes.includes(each)){
                        likes.splice(likes.indexOf(each), 1)
                 }
            }
                
            return `${likes.length} ${likes.join(' ')}`;
        }
}

export default function preparePizza (newInput){
    //get the input and turn in array
    const prac = new PizzaClass(newInput);

    //assign array to a variable
    const newArray = prac.arrayInput;

    //get number of Clent
    const noOfClient = prac.numberOfClient;

    //get number likes and dislikes
    const [_likes, _dislikes] = prac.dislikeLikeIngredient(newArray, noOfClient);

    //get new ingredient
    return prac.createNewIngredient(_likes, _dislikes);

}

