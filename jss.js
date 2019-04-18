$(document).ready(function () {


  $(".country").on("click", function (firstpage) {
    var selection = $(this).attr("data")
    localStorage.setItem("data", selection)
    window.location.href = 'Project1page2.html'
  })

  var selection = localStorage.getItem("data")
  var queryURL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=12&tags=" + selection
  $.ajax({
    url: queryURL,
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "X-RapidAPI-Key": "a116ebaf59msh44d46898d8f1b2ap1ffb3cjsn1d13ec828c85"
    }
  }).then(function (response) {
    console.log(response.recipes)
    $("#container").empty()

    var recipe = response.recipes;
    var currentRow = $("<div class='row'>");
    var newCol = $("<div class=col-sm>")

    for (var i = 0; i < recipe.length; i++) {

      var recipeTitle = recipe[i].title
      var image = recipe[i].image
      var instructions = recipe[i].instructions

      if (i !== 0 && i % 3 === 0) {
        // end the current row
        $("#container").append(currentRow);
        // start a new row
        currentRow = $("<div class='row'>");
      }
      var newCol = $("<div class='col-sm'>");
      newCol.append("<div class=card bg-transparent style=width: 18rem; id=recipe",
        "<img src=" + image + " class=card-img-top alt=...>",
        "<a href='#' class='btn btn-secondary btnExtra' data-recipe-title='" + recipeTitle + "' data-image='" + image + "' data-instructions='" + instructions + "' >" + recipeTitle + "</a></div></div>")
      currentRow.append(newCol);

    }

    if (recipe.length % 3 !== 0) {
      $("#container").append(currentRow);
    }

    $(".btnExtra").on("click", function () {

      $("#container").empty()

      var titleSelect = $(this).attr('data-recipe-title')
      localStorage.setItem("txt", titleSelect)

      var imgSelect = $(this).attr('data-image')
      localStorage.setItem('src', imgSelect)

      var instructionsSelect = $(this).attr('data-instructions')
      localStorage.setItem('text', instructionsSelect)

      window.location.href = "Page3-1.html";
    })

    var gettitle = localStorage.getItem('txt')
    var getfoodImg = localStorage.getItem('src')
    var getfoodInctructions = localStorage.getItem('text')

    var foodIntrucstions = getfoodInctructions.split(".")

    var ol = $("<ol>")
    for (i = 0; i < foodIntrucstions.length; i++) {
      var li = $("<li>")
      li.text(foodIntrucstions[i])
      ol.append(li)
    }

    var title = $("<h1>")
    title.text(gettitle)

    var foodImg = $("<img>")
    foodImg.attr('src', getfoodImg)


    $(".buttoncontainer").append(title)
    $(".buttoncontainer").append(foodImg)
    $(".buttoncontainer").append(ol)

  })
})