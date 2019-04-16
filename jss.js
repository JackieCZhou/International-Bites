
var cuisine = $(this).attr("cuisine");
var queryURL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query="  +cuisine
$.ajax({
    url: queryURL,
    method: "GET",
    headers: {
        "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "X-RapidAPI-Key": "a116ebaf59msh44d46898d8f1b2ap1ffb3cjsn1d13ec828c85"
    }
}).then(function (response) {
    console.log(response);
})



