$("document").ready(function() {
//HTTP Get request to http://www.geognos.com/geo/en/world-countries-API.html
 let flagsArr = [];
 let imageFlagsArr = [];
 $.ajax({
   dataType: "json",
   method: 'GET',
   url: "http://www.geognos.com/api/en/countries/info/all.json",
   success: function(response){
     flagsArr.push(response);
     flagsGame();
   }
  });


  let playButton = $("#playButton");
  let myModal = $("#myModal");
  let flagImg = $(".flag");
  let radioBtnOneName = $(".radioBtnOne");
  let radioBtnTwoName = $(".radioBtnTwo");
  let radioBtnThreeName = $(".radioBtnThree");
  let radioBtnFourName = $(".radioBtnFour");
  let nextBtn = $(".next");
  // let answerButton = $(".answer");
  let answerButtonOne = $(".one");
  let answerButtonTwo = $(".two");
  let answerButtonThree = $(".three");
  let answerButtonFour = $(".four");
  let popover = $('[data-toggle="popover"]');
  let winner = 0;



  // flagsArr.forEach(function(index){
      // console.log(flagsArr[0].Results.i.Name);
  //
  // })
  let countriesNames = [];
  function flagsGame() {

     //Loop through json object and get countries names
           flagsArr.forEach(function(i){
                  //  console.log(flagsArr[0].Results);

                 for (let key in flagsArr[0].Results) {
                    //  console.log(flagsArr[0].Results[key].Name);
                     countriesNames.push(flagsArr[0].Results[key].Name);
                  }

           })

       // Ordered Array of all the countries in alphabetical order
      // let countriesNamesOrdered = countriesNames.sort();
      //    console.log(countriesNamesOrdered);

     console.log(flagsArr[0].Results);

      //  //MODAL
      //  //flags image chnage every 80px on sprite
      //
      //  //   flagImg.css("background-position", "-1px -1px"); // 1st flag in sprite
      //  function createModal() {
      //  for (let i = 0; i < countriesNamesOrdered.length; i++) {
      //     var randomCountry = countriesNamesOrdered[Math.floor(Math.random() * countriesNamesOrdered.length)];
      //     // console.log(countriesNamesOrdered[i]);
      //     radioBtnOneName.text(randomCountry);
      //     // radioBtnTwoName.text(randomCountry);
      //     // radioBtnThreeName.text(randomCountry);
      //     // radioBtnFourName.text(randomCountry);
      //  }
      //    flagImg.css("background-position", "-1px -1px"); // 1st flag in sprite
      // }
      //


      //FLAG MODALS START HERE
      function japanModal() {
        //change attributes of myModal according to country flag
          // flagImg.css("background-position", "-1px -8480px");
          flagImg.attr("src", "http://www.geognos.com/api/en/countries/flag/JP.png")
          radioBtnOneName.text(flagsArr[0].Results.JP.Name);
          radioBtnTwoName.text(flagsArr[0].Results.FR.Name);
          radioBtnThreeName.text(flagsArr[0].Results.BD.Name);
          radioBtnFourName.text(flagsArr[0].Results.US.Name);

          answerButtonOne.click(function(){

             answerButtonOne.addClass("correct");
            //  popover.attr("data-content", "Correct!:) Click next!");
             alert("That's correct! Click Next!")
             winner+=1;
            //  answerButtonTwo.hide();
            //  answerButtonThree.hide();
            //  answerButtonFour.hide();
          })
        answerButtonTwo.click(function(){
             answerButtonTwo.addClass("wrong");
                // alert("Wrong! Click next!");
                // answerButtonOne.hide();
                // answerButtonThree.hide();
                // answerButtonFour.hide();
         })
         answerButtonThree.click(function(){
              answerButtonThree.addClass("wrong");
                //  alert("Wrong! Click next!");
                //  answerButtonOne.hide();
                //  answerButtonTwo.hide();
                //  answerButtonFour.hide();
         })
         answerButtonFour.click(function(){
              answerButtonFour.addClass("wrong");
                //  alert("Wrong! Click next!");
                //  answerButtonOne.hide();
                //  answerButtonTwo.hide();
                //  answerButtonThree.hide();
         })
        showWinner();
      }; // japanModal() ends here
      function canadaModal() {
          flagImg.attr("src", "http://www.geognos.com/api/en/countries/flag/CA.png");
          radioBtnOneName.text(flagsArr[0].Results.RU.Name);
          radioBtnTwoName.text(flagsArr[0].Results.JP.Name);
          radioBtnThreeName.text(flagsArr[0].Results.CA.Name);
          radioBtnFourName.text(flagsArr[0].Results.US.Name);

          answerButtonOne.click(function(){
             answerButtonOne.addClass("wrong");
          })
        answerButtonTwo.click(function(){
             answerButtonTwo.addClass("wrong");
         })
         answerButtonThree.click(function(){
              answerButtonThree.addClass("correct");
              alert("That's correct! Click Next!")
              winner+=1;
              // popover.attr("data-content", "Correct!:) Click next!");
         })
         answerButtonFour.click(function(){
              answerButtonFour.addClass("wrong");
         })
         showWinner();
      }; // canadaModal() ends here

      function usaModal(){
          flagImg.attr("src", "http://www.geognos.com/api/en/countries/flag/US.png");
          radioBtnOneName.text(flagsArr[0].Results.RU.Name);
          radioBtnTwoName.text(flagsArr[0].Results.US.Name);
          radioBtnThreeName.text(flagsArr[0].Results.CA.Name);
          radioBtnFourName.text(flagsArr[0].Results.JP.Name);

        answerButtonOne.click(function(){
           answerButtonOne.addClass("wrong");
           alert("Wrong! Click next!");
        })
       answerButtonTwo.click(function(){
           answerButtonTwo.addClass("correct");
             // popover.attr("data-content", "Correct!:) Click next!");
             alert("That's correct! Click Next!")
             winner+=1;
       })
       answerButtonThree.click(function(){
            answerButtonThree.addClass("wrong");
            alert("Wrong! Click next!");
       })
       answerButtonFour.click(function(){
            answerButtonFour.addClass("wrong");
            alert("Wrong! Click next!");
       })
       showWinner();
      }; //usaModal() ends here

      //when start button is clicked, modal is triggered
        playButton.on("click", function (event) {
          myModal.modal('show');
          //loop through flagArr and change attributes of myModal
          japanModal();

        });
        //each time next button is clicked, the following modal is triggered
         let counter = 1;
         nextBtn.on("click", function (event) {
           if(counter === 1) {
           myModal.modal('show');
           canadaModal();
           counter = 2;
           // nextBtn.removeClass("next").addClass("nextOne");
           } else {
             myModal.modal('show');
             usaModal();
             counter = 3;
           }
         });

         // function to check if winner
         function showWinner() {
          //  myModal.modal('show');
           if(winner === 3) {
           alert("Congrats! You won!")
           }
         };

  }; // flagsGame() ends here




  // answerButton.click(function(){
  //    alert("a");
  //  })

//Activate Bootstrap popover on click
// $(function () {
  popover.popover().click(function(){
    $(this).popover('toggle')
  })
// })



// //FLAG MODALS START HERE
//   function japanModal() {
//     //loop through flagArr and change attributes of myModal to those of japan
//       flagArr.forEach(function(index){
//       flagImg.attr("src", flagArr[0][4].url);
//       radioBtnOneName.text(flagArr[0][0].answerOneCorrect);
//       radioBtnTwoName.text(flagArr[0][1].answerTwo);
//       radioBtnThreeName.text(flagArr[0][2].answerThree);
//       radioBtnFourName.text(flagArr[0][3].answerFour);
//     })
//     answerButtonOne.click(function(){
//        answerButtonOne.addClass("correct");
//        popover.attr("data-content", "Correct!:) Click next!");
//
//      })
//     answerButtonTwo.click(function(){
//         answerButtonTwo.addClass("wrong");
//     })
//     answerButtonThree.click(function(){
//          answerButtonThree.addClass("wrong");
//     })
//     answerButtonFour.click(function(){
//           answerButtonFour.addClass("wrong");
//      })
//   };

  // function canadaModal() {
  //   flagArr.forEach(function(index){
  //     flagImg.attr("src", flagArr[1][4].url);
  //     radioBtnOneName.text(flagArr[1][0].answerOne);
  //     radioBtnTwoName.text(flagArr[1][1].answerTwo);
  //     radioBtnThreeName.text(flagArr[1][2].answerThree);
  //     radioBtnFourName.text(flagArr[1][3].answerFourCorrect);
  //   })
  // }

  // function usaModal(){
  //   flagArr.forEach(function(index){
  //     flagImg.attr("src", flagArr[2][4].url);
  //     radioBtnOneName.text(flagArr[2][0].answerOne);
  //     radioBtnTwoName.text(flagArr[2][1].answerTwoCorrect);
  //     radioBtnThreeName.text(flagArr[2][2].answerThree);
  //     radioBtnFourName.text(flagArr[2][3].answerFour);
  //   })
  // }

//FLAG MODALS END HERE

// //when start button is clicked, modal is triggered
//   playButton.on("click", function (event) {
//     myModal.modal('show');
//     //loop through flagArr and change attributes of myModal
//     japanModal();
//   })

 // let action = 1;
 //
 //  nextBtn.on("click", function (event) {
 //    if(action === 1) {
 //    myModal.modal('show');
 //    canadaModal();
 //    action = 2;
 //    // nextBtn.removeClass("next").addClass("nextOne");
 //    } else {
 //      myModal.modal('show');
 //      usaModal();
 //      action = 3;
 //    }
 //
 //   })


  // $(".nextOne").on("click", function (event) {
  //   myModal.modal('show');
  //   usaModal();

    // $(".nextOne").removeClass("nextOne").addClass("nextTwo");
    //loop through flagArr and change attributes of myModal
    // flagArr.forEach(function(index){
    //   flagImg.attr("src", flagArr[2][4].url);
    //   radioButtonOne.text(flagArr[2][0].answerOne);
    //   radioButtonTwo.text(flagArr[2][1].answerTwoCorrect);
    //   radioButtonThree.text(flagArr[2][2].answerThree);
    //   radioButtonFour.text(flagArr[2][3].answerFour);
    //   $(".nextOne").removeClass("nextOne").addClass("nextTwo");
    // })

  // })



});
