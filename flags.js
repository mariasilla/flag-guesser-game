$("document").ready(function() {
//HTTP Get request to http://www.geognos.com/geo/en/world-countries-API.html
 let flagsArr = [];

 $.ajax({
   dataType: "json",
   method: 'GET',
   url: "http://www.geognos.com/api/en/countries/info/all.json",
   success: function(response){
     flagsArr.push(response);
     flagsGame();
   }
  });
  let modalbody = $("modal-body");
  let playButton = $("#playButton");
  let flagModal = $("#flagModal");
  let flagImg = $(".flag");
  let radioBtnOneName = $(".radioBtnOne");
  let radioBtnTwoName = $(".radioBtnTwo");
  let radioBtnThreeName = $(".radioBtnThree");
  let radioBtnFourName = $(".radioBtnFour");
  let nextBtn = $(".next");
  let answerButton = $(".answer");
  let answerButtonOne = $(".one");
  let answerButtonTwo = $(".two");
  let answerButtonThree = $(".three");
  let answerButtonFour = $(".four");
  let popover = $('[data-toggle="popover"]');
  let score = 0;

  let countriesNames = [];
  function flagsGame() {

    //  //Loop through json object and get countries names
    //        flagsArr.forEach(function(i){
    //               //  console.log(flagsArr[0].Results);
     //
    //              for (let key in flagsArr[0].Results) {
    //                 //  console.log(flagsArr[0].Results[key].Name);
    //                  countriesNames.push(flagsArr[0].Results[key].Name);
    //                 }
    //              })
    //             // console.log(flagsArr[0].Results);
    //    // Ordered Array of all the countries in alphabetical order
    //   let countriesNamesOrdered = countriesNames.sort();
    //      console.log(countriesNamesOrdered);
    //   var randomCountry = countriesNamesOrdered[Math.floor(Math.random() * countriesNamesOrdered.length)];


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


      function showRadioBtnOne() {
        $(".one").show();
        $(".two").hide();
        $(".three").hide();
        $(".four").hide();
      }

      function showRadioBtnTwo() {
        $(".two").show();
        $(".one").hide();
        $(".three").hide();
        $(".four").hide();
      }

      function showRadioBtnThree() {
        $(".three").show();
        $(".one").hide();
        $(".two").hide();
        $(".four").hide();
      }

      function showRadioBtnFour() {
        $(".four").show();
        $(".one").hide();
        $(".two").hide();
        $(".three").hide();
      }

      function showAllBtns() {
        $(".one").show();
        $(".two").show();
        $(".three").show();
        $(".four").show();
      }

      function hideAllBtns() {
        $(".one").hide();
        $(".two").hide();
        $(".three").hide();
        $(".four").hide();
      }

      //FLAG MODALS START HERE
      function japanModal() {
        //change attributes of flagModal according to country flag
          flagImg.attr("src", "http://www.geognos.com/api/en/countries/flag/JP.png")
          radioBtnOneName.text(flagsArr[0].Results.JP.Name);
          radioBtnTwoName.text(flagsArr[0].Results.UA.Name);
          radioBtnThreeName.text(flagsArr[0].Results.JM.Name);
          radioBtnFourName.text(flagsArr[0].Results.US.Name);
          $(".closeBtn").hide();
          answerButtonOne.click(function(){
             score+=1;
             showRadioBtnOne();
            })

            answerButtonTwo.click(function(){
              score-=1;
              showRadioBtnTwo();
            })

            answerButtonThree.click(function(){
                 score-=1;
                showRadioBtnThree();
            })

           answerButtonFour.click(function(){
               score-=1;
              showRadioBtnFour();
            })

      }; // japanModal() ends here

      function canadaModal() {
          answerButton.off();
          $(".closeBtn").hide();
          showAllBtns();
          answerButton.prop('checked', false);
          flagImg.attr("src", "http://www.geognos.com/api/en/countries/flag/CA.png");
          radioBtnOneName.text(flagsArr[0].Results.RU.Name);
          radioBtnTwoName.text(flagsArr[0].Results.JP.Name);
          radioBtnThreeName.text(flagsArr[0].Results.CA.Name);
          radioBtnFourName.text(flagsArr[0].Results.US.Name);

          answerButtonOne.click(function(){
              score-=1;
             showRadioBtnOne();
          })
         answerButtonTwo.click(function(){
               score-=1;
               showRadioBtnTwo();
         })
         answerButtonThree.click(function(){
              score+=1;
              showRadioBtnThree();
         })
         answerButtonFour.click(function(){
                score-=1;
                showRadioBtnFour();
         })

      }; // canadaModal() ends here

      function usaModal(){
          answerButton.off();
          $(".closeBtn").hide();
          showAllBtns();
          answerButton.prop('checked', false);
          flagImg.attr("src", "http://www.geognos.com/api/en/countries/flag/US.png");
          radioBtnOneName.text(flagsArr[0].Results.IT.Name);
          radioBtnTwoName.text(flagsArr[0].Results.US.Name);
          radioBtnThreeName.text(flagsArr[0].Results.CA.Name);
          radioBtnFourName.text(flagsArr[0].Results.JP.Name);

        answerButtonOne.click(function(){
           score-=1;
            showRadioBtnOne();

        })
       answerButtonTwo.click(function(){
             score+=1;
             showRadioBtnTwo();

       })
       answerButtonThree.click(function(){
          score-=1;
          showRadioBtnThree();

       })
       answerButtonFour.click(function(){
          score-=1;
          showRadioBtnFour();

       })

      }; //usaModal() ends here

      function chinaModal(){
          answerButton.off();
          $(".closeBtn").hide();
          showAllBtns();
          answerButton.prop('checked', false);
          flagImg.attr("src", "http://www.geognos.com/api/en/countries/flag/CN.png");
          radioBtnOneName.text(flagsArr[0].Results.GR.Name);
          radioBtnTwoName.text(flagsArr[0].Results.US.Name);
          radioBtnThreeName.text(flagsArr[0].Results.CN.Name);
          radioBtnFourName.text(flagsArr[0].Results.CL.Name);

        answerButtonOne.click(function(){
           score-=1;
           showRadioBtnOne();

        })
       answerButtonTwo.click(function(){
              score-=1;
             showRadioBtnTwo();

       })
       answerButtonThree.click(function(){
          score+=1;
          showRadioBtnThree();

       })
       answerButtonFour.click(function(){
          score-=1;
          showRadioBtnFour();

       })

     }; //ChinaModal() ends here

     function italyModal(){
         answerButton.off();
         $(".closeBtn").hide();
         showAllBtns();
         answerButton.prop('checked', false);
         flagImg.attr("src", "http://www.geognos.com/api/en/countries/flag/IT.png");
         radioBtnOneName.text(flagsArr[0].Results.GR.Name);
         radioBtnTwoName.text(flagsArr[0].Results.US.Name);
         radioBtnThreeName.text(flagsArr[0].Results.CA.Name);
         radioBtnFourName.text(flagsArr[0].Results.IT.Name);

       answerButtonOne.click(function(){
          score-=1;
          showRadioBtnOne();
       })
      answerButtonTwo.click(function(){
           score-=1;
           showRadioBtnTwo();
      })
      answerButtonThree.click(function(){
           score-=1;
           showRadioBtnThree();
      })
      answerButtonFour.click(function(){
           score+=1;
           showRadioBtnFour();
      })

    }; //italyModal() ends here

    function russiaModal(){
        answerButton.off();
        $(".closeBtn").hide();
        showAllBtns();
        answerButton.prop('checked', false);
        flagImg.attr("src", "http://www.geognos.com/api/en/countries/flag/RU.png");
        radioBtnOneName.text(flagsArr[0].Results.JP.Name);
        radioBtnTwoName.text(flagsArr[0].Results.RU.Name);
        radioBtnThreeName.text(flagsArr[0].Results.CA.Name);
        radioBtnFourName.text(flagsArr[0].Results.IT.Name);

      answerButtonOne.click(function(){
         score-=1;
         showRadioBtnOne();
      })
      answerButtonTwo.click(function(){
         score+=1;
          showRadioBtnTwo();
      })
      answerButtonThree.click(function(){
         score-=1;
          showRadioBtnThree();
      })
      answerButtonFour.click(function(){
         score-=1;
         showRadioBtnFour();
      })

    }; //russiaModal() ends here

    function  chileModal(){
        answerButton.off();
        $(".closeBtn").hide();
        showAllBtns();
        answerButton.prop('checked', false);
        flagImg.attr("src", "http://www.geognos.com/api/en/countries/flag/CL.png");
        radioBtnOneName.text(flagsArr[0].Results.CA.Name);
        radioBtnTwoName.text(flagsArr[0].Results.US.Name);
        radioBtnThreeName.text(flagsArr[0].Results.CL.Name);
        radioBtnFourName.text(flagsArr[0].Results.JM.Name);

      answerButtonOne.click(function(){
         score-=1;
         showRadioBtnOne();
      })
      answerButtonTwo.click(function(){
         score-=1;
         showRadioBtnTwo();
      })
      answerButtonThree.click(function(){
         score+=1;
          showRadioBtnThree();
      })
      answerButtonFour.click(function(){
         score-=1;
         showRadioBtnFour();
      })

    }; //chileModal() ends here


    function jamaicaModal(){
        answerButton.off();
        $(".closeBtn").hide();
        showAllBtns();
        answerButton.prop('checked', false);
        flagImg.attr("src", "http://www.geognos.com/api/en/countries/flag/JM.png");
        radioBtnOneName.text(flagsArr[0].Results.JM.Name);
        radioBtnTwoName.text(flagsArr[0].Results.CA.Name);
        radioBtnThreeName.text(flagsArr[0].Results.RU.Name);
        radioBtnFourName.text(flagsArr[0].Results.JP.Name);

      answerButtonOne.click(function(){
         score+=1;
         showRadioBtnOne();
      })
      answerButtonTwo.click(function(){
         score-=1;
         showRadioBtnTwo();
      })
      answerButtonThree.click(function(){
         score-=1;
         showRadioBtnThree();
      })
      answerButtonFour.click(function(){
         score-=1;
         showRadioBtnFour();
      })
    }; //jamaicaModal() ends here


    function ukraineModal(){
        answerButton.off();
        $(".closeBtn").hide();
        showAllBtns();
        answerButton.prop('checked', false);
        flagImg.attr("src", "http://www.geognos.com/api/en/countries/flag/UA.png");
        radioBtnOneName.text(flagsArr[0].Results.JM.Name);
        radioBtnTwoName.text(flagsArr[0].Results.JP.Name);
        radioBtnThreeName.text(flagsArr[0].Results.UA.Name);
        radioBtnFourName.text(flagsArr[0].Results.CA.Name);

      answerButtonOne.click(function(){
         score-=1;
         showRadioBtnOne();
      })
      answerButtonTwo.click(function(){
          score-=1;
          showRadioBtnTwo();
      })
      answerButtonThree.click(function(){
          score+=1;
          showRadioBtnThree();
      })
      answerButtonFour.click(function(){
          score-=1;
          showRadioBtnFour();
      })
    }; //ukraineModal() ends here

    function ethiopiaModal(){
        answerButton.off();
        $(".closeBtn").hide();
        showAllBtns();
        answerButton.prop('checked', false);
        flagImg.attr("src", "http://www.geognos.com/api/en/countries/flag/ET.png");
        radioBtnOneName.text(flagsArr[0].Results.UA.Name);
        radioBtnTwoName.text(flagsArr[0].Results.IT.Name);
        radioBtnThreeName.text(flagsArr[0].Results.JM.Name);
        radioBtnFourName.text(flagsArr[0].Results.ET.Name);

      answerButtonOne.click(function(){
         score-=1;
         showRadioBtnOne();
      })
      answerButtonTwo.click(function(){
          score-=1;
          showRadioBtnTwo();
      })
      answerButtonThree.click(function(){
          score-=1;
          showRadioBtnThree();
      })
      answerButtonFour.click(function(){
           score+=1;
           showRadioBtnFour();
      })
    }; //ethiopiaModal() ends here


      //when start button is clicked, modal is triggered
        playButton.on("click", function (event) {
          event.preventDefault();
          countDownTimer();
          flagModal.modal('show');
          //loop through flagArr and change attributes of flagModal
          japanModal();

        });
        //each time next button is clicked, the following modal is triggered
         let counter = 1;
         nextBtn.on("click", function (event) {
           if(counter === 1) {
           flagModal.modal('show');
           canadaModal();
           counter = 2;
           } else if (counter === 2){
             flagModal.modal('show');
             usaModal();
             counter = 3;
           } else if (counter === 3) {
             flagModal.modal('show');
             chinaModal();
             counter = 4;
           } else if (counter === 4) {
             italyModal();
             counter = 5;
           } else if (counter === 5) {
             russiaModal();
             counter = 6;
           } else if (counter === 6) {
             chileModal();
             counter = 7;
           } else if (counter === 7) {
             jamaicaModal();
             counter = 8;
           } else if (counter === 8) {
             ukraineModal();
             counter = 9;
           } else if (counter === 9) {
             ethiopiaModal();
             counter = 10;
           } else {
               gameResult();
              //  console.log(counter);
           }
         });

         // functions to display winner or looser message
         function showWinnerModal() {
           $("#winnerOrLooserModal").modal("show");
           $(".winner").text("You won!!! Congrats!!!");
           $(".winnerMessage").text("You can now check out these awesome TRAVEL DEALS!")
           $(".winnerGif").attr("src", "https://media.giphy.com/media/1eAG5O47bHjpK/giphy.gif");
           flagModal.modal('hide');
           $(".reloadBtn").text("Play again");
           $(".reloadBtn").click(function(){
              location.reload();
           })
         }; //showWinner() ends here

         function showLooserModal() {
             $("#winnerOrLooserModal").modal("show");
             $(".looser").text("Sorry! Try again!!!");
             $(".looserGif").attr("src", "https://media.giphy.com/media/auxWjSpDJ8544/giphy.gif");
             flagModal.modal('hide');
             $("#skyWidget").hide();
             $(".reloadBtn").text("Play again");
             $(".reloadBtn").click(function(){
                location.reload();
             })

         }; //showLooser() ends here

         //function check if winner or looser
         function gameResult() {
           if(score > 5) {
           showWinnerModal();
           console.log("winner score is " + score);
         } else if (score < 5){
           showLooserModal();
           console.log("looser score is " + score);
           }
         }

         //15 seconds timer
         //followed this tutorial http://www.smarttutorials.net/javascript-countdown-timer/
             let timer = $("#timer");
             let countDownTime = 50;
             let timeout;
             let x;
             function countDownTimer() {
             countDownTime-=1;
             timer.text(countDownTime);
             x = setTimeout(function(){ countDownTimer() }, 1000);
               if (countDownTime === 0) {
                 stopIntervalFunc();
                 gameResult();
                //  $(".looser").text("TIME'S UP! Try again!!!");
               }
             }

             function stopIntervalFunc() {
               clearInterval(x);
               hideAllBtns();
             }


  }; // flagsGame() ends here

//Activate Bootstrap tooltip
$('.rules').tooltip("hover focus");



});  //document ready function ends here
