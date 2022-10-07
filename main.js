const rawIngredients = [ "beef patty", "egg", "potato", "egg", "potato", "beef patty", "beef patty", "potato" ]
const finishedFood = []

for (let i = 0; i < rawIngredients.length; i++) {
    if(rawIngredients[i] === "egg"){
        finishedFood.push("biscuit")
    }else if(rawIngredients[i] === "beef patty"){
        finishedFood.push("burger")
    }else{
        finishedFood.push("fries")
    }
	/*
		Write your if/else code here. In each block use .push() to insert
		the correct string into the finishedFood array.
	*/
}

console.log(finishedFood)