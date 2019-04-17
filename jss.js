$(document).ready(function (){

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
            var currentRow = $("<div class='row'>");
            var newCol = $("<div class=col-sm>")

            for (var i = 0; i < recipe.length; i++) {
                
                var recipeTitle = recipe[i].title
                var image = recipe[i].image

              if (i !== 0 && i % 3 === 0) {
                // end the current row
                $("#container").append(currentRow);
                // start a new row
                currentRow = $("<div class='row'>");
              }
              var newCol = $("<div class='col-sm'>");
              newCol.append("<div class=card bg-transparent style=width: 18rem; id=recipe" , "<img src=" + image + " class=card-img-top alt=...>",  "<div class=card-body bg-transparent><h5 class=card-title>" + recipeTitle + "</h5><p class=card-text>Description&nbsp;of Dish</p><a href=# class=btn btn-secondary>Select Dish</a></div></div>")
              currentRow.append(newCol);

            }
          
            if (recipe.length % 3 !== 0) {
              $("#container").append(currentRow);
            }
          
            
//  
//             for (var i=0; i < recipe.length; i++) {
//                 for (b = 0; b < recipe.length; b++){
//                     var container = $("<container>")
//                     var row;
//                     if (b % 3 === 0){
//                         row = $("<row>").addClass('row')
//                     }
//                     row.append(b)
//                     container.append(row)

//                 }
            //     var search = $("#container");
            //     var recipeTitle = recipe[i].title
            //     var image = recipe[i].image
            //     image.addClass('pics')
            //     image.attr('src', recipe[i].image);
            //     image.width(286)
            //     image.height(160)
            //     search.append(image)
            //     search.append(recipeTitle)
            //     $("#container").append(search)
            //     $(".card-title").html(recipeTitle)
            //     $(".card-img-top").attr('src', image)
            //     $("#container").append("<div class=row><div class=col-sm><div class=card bg-transparent style=width: 18rem; id=recipe1>" + image + " class=card-img-top alt=...><div class=card-body bg-transparent><h5 class=card-title>" + recipeTitle + "</h5><p class=card-text>Description&nbsp;of Dish</p><a href=# class=btn btn-secondary>Select Dish</a></div></div></div>")
            // }
    }) 

})