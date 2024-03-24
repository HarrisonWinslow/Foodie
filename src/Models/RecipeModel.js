
//each item has a list of headers, ingredients, and instructions
class RecipeModel {
    
    constructor(name, date, description, cookTime, ingredients, instructions, tags, comments, rating) {
        this.name = name;
        this.date = date;
        this.description = description;
        this.cookTime = cookTime;
        this.ingredients = ingredients;
        this.instructions = instructions;
        this.tags = tags;
        this.comments = comments;
        this.rating = rating; // this would be "Gross, Meh, Need to Try, Good, and Favorite"
    }
}

export default RecipeModel;