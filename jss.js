var cuisine = $(this).attr("cuisine");
var queryURL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=10&tags=french"
var BaseURL = "https://spoonacular.com/recipeImages/"
$.ajax({
    url: queryURL,
    method: "GET",
    headers: {
        "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "X-RapidAPI-Key": "a116ebaf59msh44d46898d8f1b2ap1ffb3cjsn1d13ec828c85"
    }
}).then(function(response) {
        console.log(response.recipes)
        $("#container").empty()
        
        var recipe = response.recipes;
        for (var i=0; i < recipe.length; i++) {
            for (b = 0; b < recipe.length; b++){
                var container = $("<container>")
                var row;
                if (b % 3 === 0){
                    row = $("<row>").addClass('row')
                }
                row.append(b)
                container.append(row)

            }
             var search = $("#container");
             var recipeTitle = $('<p>' + recipe[i].title + '</p>');
             var image = $('<img>');
             image.addClass('pics')
             image.attr('src', recipe[i].image);
             image.width(286)
             image.height(160)
             search.append(image)
             search.append(recipeTitle)
             search.append(container)
             $('#container').append(search);
        }
}) 