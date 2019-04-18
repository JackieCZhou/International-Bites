// $(document).ready(function (){


    $(".country").on("click", function(firstpage) {
      var selection =  $(this).attr("data")
      localStorage.setItem("data", selection)
      window.location.href  = "Project1page2.html";
    })

      var selection = localStorage.getItem("data")
      console.log(selection)

  var cuisine = $(this).attr("cuisine");
  var queryURL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=12&tags="+selection
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
                var instructions = recipe[i].insctructions

              if (i !== 0 && i % 3 === 0) {
                // end the current row
                $("#container").append(currentRow);
                // start a new row
                currentRow = $("<div class='row'>");
              }
              var newCol = $("<div class='col-sm'>");
              newCol.append("<div class=card bg-transparent style=width: 18rem; id=recipe" , "<img src=" + image + " class=card-img-top alt=...>",  "<a href=# class=btn btn-secondary>" + recipeTitle + "</a></div></div>")
              currentRow.append(newCol);

            }
          
            if (recipe.length % 3 !== 0) {
              $("#container").append(currentRow);

              localStorage.empty()

              localStorage.setItem(recipeTitle)
              localStorage.setItem(image)
              localStorage.setItem(instructions)
            }

            $(".btn").on("click", function(){

              $("#container").empty()

              imageselected = $("<img>")
              imageselected.attr($(this).text())
              imageselected.attr('src', image)
              

              $("#container").append($(this).text(), recipeTitle);
              $("#container").append(imageselected);
              $("#container").append($(this).text(), instructions);

              console.log(instructions)

  
              // window.location.href  = "Page3-1.html";
            })


          
            
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
  // })


        // // Client ID and API key from the Developer Console
        // var CLIENT_ID = "49691023767-7kj4645ramt75e9gmadalju4hcc00g2u.apps.googleusercontent.com"
        // var API_KEY = 'AIzaSyC3US1n-R6d11e6ee6YaXaJzD1tivzERbY'
    
        // // Array of API discovery doc URLs for APIs used by the quickstart
        // var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
    
        // // Authorization scopes required by the API; multiple scopes can be
        // // included, separated by spaces.
        // var SCOPES = "https://www.googleapis.com/auth/calendar";
    
        // var authorizeButton = document.getElementById('authorize_button');
        // var signoutButton = document.getElementById('signout_button');
    
        // /**
        //  *  On load, called to load the auth2 library and API client library.
        //  */
        // function handleClientLoad() {
        //   gapi.load('client:auth2', initClient);
        // }
    
        // /**
        //  *  Initializes the API client library and sets up sign-in state
        //  *  listeners.
        //  */
        // function initClient() {
        //   gapi.client.init({
        //     apiKey: API_KEY,
        //     clientId: CLIENT_ID,
        //     discoveryDocs: DISCOVERY_DOCS,
        //     scope: SCOPES
        //   }).then(function () {
        //     // Listen for sign-in state changes.
        //     gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
    
        //     // Handle the initial sign-in state.
        //     updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        //     authorizeButton.onclick = handleAuthClick;
        //     signoutButton.onclick = handleSignoutClick;
        //   }, function (error) {
        //     appendPre(JSON.stringify(error, null, 2));
        //   });
        // }
        //   /**
        //    *  Called when the signed in status changes, to update the UI
        //    *  appropriately. After a sign-in, the API is called.
        //    */
        //   function updateSigninStatus(isSignedIn) {
        //     if (isSignedIn) {
        //       authorizeButton.style.display = 'none';
        //       signoutButton.style.display = 'block';
        //       // listUpcomingEvents();
        //     } else {
        //       authorizeButton.style.display = 'block';
        //       signoutButton.style.display = 'none';
        //     }
        //   }
    
        //   /**
        //    *  Sign in the user upon button click.
        //    */
        //   function handleAuthClick(event) {
        //     gapi.auth2.getAuthInstance().signIn();
        //   }
    
        //   /**
        //    *  Sign out the user upon button click.
        //    */
        //   function handleSignoutClick(event) {
        //     gapi.auth2.getAuthInstance().signOut();
        //   }
    
        //   /**
        //    * Append a pre element to the body containing the given message
        //    * as its text node. Used to display the results of the API call.
        //    *
        //    * @param {string} message Text to be placed in pre element.
        //    */
        //   function appendPre(message) {
        //     var pre = document.getElementById('content');
        //     var textContent = document.createTextNode(message + '\n');
        //     pre.appendChild(textContent);
        //   }
    
        //   /**
        //    * Print the summary and start datetime/date of the next ten events in
        //    * the authorized user's calendar. If no events are found an
        //    * appropriate message is printed.
        //    */
        //   // function listUpcomingEvents() {
        //   //   gapi.client.calendar.events.list({
        //   //     'calendarId': 'primary',
        //   //     'timeMin': (new Date()).toISOString(),
        //   //     'showDeleted': false,
        //   //     'singleEvents': true,
        //   //     'maxResults': 10,
        //   //     'orderBy': 'startTime'
        //   //   }).then(function (response) {
        //   //     var events = response.result.items;
        //   //     appendPre('Upcoming events:');
    
        //   //     if (events.length > 0) {
        //   //       for (i = 0; i < events.length; i++) {
        //   //         var event = events[i];
        //   //         var when = event.start.dateTime;
        //   //         if (!when) {
        //   //           when = event.start.date;
        //   //         }
        //   //         appendPre(event.summary + ' (' + when + ')')
        //   //       }
        //   //     } else {
        //   //       appendPre('No upcoming events found.');
        //   //     }
        //   //   });
        //   // }
    
        //   // Refer to the JavaScript quickstart on how to setup the environment:
        //   // https://developers.google.com/calendar/quickstart/js
        //   // Change the scope to 'https://www.googleapis.com/auth/calendar' and delete any
        //   // stored credentials.
    
        //   $("#event_button").on("click", function () {
        //     var event = {
        //       'summary': 'Google I/O 2015',
        //       'location': '800 Howard St., San Francisco, CA 94103',
        //       'description': 'A chance to hear more about Google\'s developer products.',
        //       'start': {
        //         'dateTime': '2020-05-28T09:00:00-07:00',
        //         'timeZone': 'America/Los_Angeles'
        //       },
        //       'end': {
        //         'dateTime': '2020-05-28T17:00:00-07:00',
        //         'timeZone': 'America/Los_Angeles'
        //       },
        //       'recurrence': [
        //         'RRULE:FREQ=DAILY;COUNT=2'
        //       ],
        //       'attendees': [
        //         { 'email': 'lpage@example.com' },
        //         { 'email': 'sbrin@example.com' }
        //       ],
        //       'reminders': {
        //         'useDefault': false,
        //         'overrides': [
        //           { 'method': 'email', 'minutes': 24 * 60 },
        //           { 'method': 'popup', 'minutes': 10 }
        //         ]
        //       }
        //     };
    
        //     var request = gapi.client.calendar.events.insert({
        //       'calendarId': 'primary',
        //       'resource': event
        //     });
    
        //     request.execute(function (event) {
        //       // appendPre('Event created: ' + event.htmlLink);
        //       window.location.href = event.htmlLink
        //       // alert(event.htmlLink);
        //     });
    
        //   })