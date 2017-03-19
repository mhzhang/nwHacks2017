function Dog(name, intro, decisions, adoptionChance, critic) {
	this.name = name;
	this.intro = intro;
	// this.decisions = decisions;
	// this.adoptionChance = adoptionChance;
  //   this.critic = critic;
}

// var lose = "Despite her good behavior and loving demeanor, Cooper was not adopted by any of her visitors, and she’s not the only one." + "<b> Each year, animal shelters in the U.S. take in 7.6 million pets, and only about a third of them get adopted. </b>" +  "The remainder are either put down, or left in overcrowded shelters and receive insufficient care and attention due to lack of human resources. Many people looking to become dog owners look to pet shops for younger, supposedly better-behaved dogs. These pet stores, however, often purchase their pets from puppy mills, where dogs are raised in cramped, filthy conditions and shipped across the country without adequate food, water, ventilation, or shelter - far from the ideal conditions for raising a well-behaved, happy puppy. Also, every sheltered dog does not fulfill the stereotype of the stubborn ill-behaved animal. According to a study in 2016 (Wallis, Veranyi, etc.), older dogs can still learn, albeit at a slower pace than younger dogs. Many adopters can also testify to the loyalty and love that sheltered pets have offered them throughout the years. Adopting a sheltered pet could easily be one of the most satisfying decisions one could make.";
// var win = "Cooper has been adopted! Unfortunately, Cooper is one of the lucky ones. <b> Each year, animal shelters in the U.S. take in 7.6 million pets, and only about a third of them get adopted. </b> The remainder are either put down, or left in overcrowded shelters and receive insufficient care and attention due to lack of human resources. Many people looking to become dog owners look to pet shops for younger, supposedly better-behaved dogs. These pet stores, however, often purchase their pets from puppy mills, where dogs are raised in cramped, filthy conditions and shipped across the country without adequate food, water, ventilation, or shelter - far from the ideal conditions for raising a well-behaved, happy puppy. Furthermore, every sheltered dog does not fulfill the stereotype of the stubborn ill-behaved animal. According to a study in 2016 (Wallis, Veranyi, etc.), older dogs can still learn, albeit at a slower pace than younger dogs. Many adopters can also testify to the loyalty and love that sheltered pets have offered them throughout the years.";
// var moreInfo = "Adopt sheltered pets instead of supporting puppy mills. Donate. Foster.";
// var positiveResponses = ["Awww",  "So cute!", "Wow!", "That's great!", "Good dog!", "Amazing.", "Adorable!"];
// var negativeResponses = ["Bad dog!", "Ow!", "I knew sheltered dogs would be like this!", "I wouldn't want to be this dog's friend.", "It'd be hard to take care of this dog."];
// var criticNames = ["Olivia", "Vanessa", "Heidi", "Daniel"];
var criticIcons = ["images/olivia.png", "images/vanessa.png", "images/heidi.png", "images/daniel.png"];
//var instructions = [" is visiting the shelter today. Try to impress! Choose an action to the left."];
 var dogChances = [0.0, .6, 1.0, .3];
// var totalCritics = 4;
// var criticIndex = 0;
// var actionOk = true;
// var result = false;
var dogs = [];
var myDog;
/*
* 0: Title page
* 1: Dog Intro
* 2: Complex page.
* 3: Win page.
* 4: Lose page.
* 5: More information page.
*/

/*
* 0: Title page
* 1: Profile
* 2: Edit
* 2: Suggestions
* 3: More information page.
*/

function initializeDogs() {
	dogs[0]  = new Dog("cooper", "This is Andy Anderson. He was born on 1996-05-27. He speaks English and French. He is allergic to egg and cat. In detail, he is allergic to eggyolk. He has hearing disability, who needs extra assistance in class to help with hearing. For 16 personal characteristics test, he is a warm and sensitive person who really needs his own privacy. ", dogChances[0]);
	//, criticIndex);
	dogs[1] = new Dog("luna",  "intro", ["Olivia", "Vanessa", "Heidi", "Daniel"])//, dogChances[1], criticIndex);
	// dogs[2] = new Dog("loki",  "intro", ["Olivia", "Vanessa", "Heidi", "Daniel"], dogChances[2], criticIndex);
	// dogs[3] = new Dog("ace",  "intro", ["Olivia", "Vanessa", "Heidi", "Daniel"], dogChances[3], criticIndex);
} 

$(document).ready(function () {
  initializeDogs();
	initializeTitle(); //Initialize title.
    document.getElementsById("form").innerHTML;
});

function findDogGivenName(name) {
	for (var i = 0; i < dogs.length; i++) {
		if (dogs[i].name == name) {
			return dogs[i];
		}
	}
}

function initializeTitle() {
	//Title image is already set, intro text is already set, and play button is showing.
	$('#complexscene').hide();
    $('#take-action').hide();
	$('#continue-button').hide();
    $('#visitors').hide();
		$('#login-id').hide();
		$('#home-button').hide();
	$('#dog').hide();
	$('#dog-pic').hide();
	$('#cooper').click(function(){
	   	myDog = findDogGivenName($(this).attr('id'));
		$('#continue-button').prop('disabled',true);
    	setTimeout(function(){
       		$('#continue-button').prop('disabled',false);
    	},1000); //Delaying click by one second because clicks carry through methods.
		initializeDogIntro();
	});
}



function initializeDogIntro() {
	$('#dog-selection-panel').hide();
  $("#pick-a-pupper").hide();
	$('#login-id').show();
	$('#continue-button').show();
		$('#home-button').hide();
	//$('#dog-pic img').attr('src', "images/still-pup.gif"); //Set dog image.
	//$('#dog-pic').show();
	//$('#text p').text(myDog.intro); //Set dog intro text.
	//Play button is already showing.
	$('#continue-button').unbind(); //We need to unbind previous handlers, or else all handlers will be called.
	$('#continue-button').click(function(){
		initializeComplex();
	});
	$('#create-form').click(function(){
		initializeComplex();
	});


}

// function generatePositiveComment() {
//     //If adopted.
//     if (myDog.critic + 1 == totalCritics && result) {
//         $('#comments p').html("<br><b>" + "<q>" + positiveResponses[parseInt((Math.random() * positiveResponses.length), 10)] + "</q>" + "</b>" + "<br><br>" + "<span style='font-size: 12px;'>" + myDog.decisions[myDog.critic + 1] + "</span>");
//     } else {
//         $('#comments p').html("<br><b><q>" + positiveResponses[parseInt((Math.random() * positiveResponses.length), 10)] + "</q></b>"
// 			 + "<br><br>" + "<span style='font-size: 12px;'>" + myDog.decisions[myDog.critic] + "</span>");
//     }
//     updateDogOptions();
// }
//
// function generateNegativeComment() {
//     if (myDog.critic + 1 == totalCritics && result) {
//         $('#comments p').html("<br><b><q>" + negativeResponses[parseInt((Math.random() * negativeResponses.length), 10)] + "</q></b>"
// 			 + "<br><br>" + "<span style='font-size: 12px;'>" + myDog.decisions[myDog.critic + 1] + "</span>");
//     } else {
//         $('#comments p').html("<br><b><q>" + negativeResponses[parseInt((Math.random() * negativeResponses.length), 10)] + "</q></b>"
// 			 + "<br><br>" + "<span style='font-size: 12px;'>" + myDog.decisions[myDog.critic] + "</span>");
//     }
//     updateDogOptions();
// }


function initializeComplex() {
	$('#dog-selection-panel').hide();
  $("#pick-a-pupper").hide();
	$('#login-id').hide();
	$('#continue-button').hide();
	$('#home-button').hide();
	$('#dog-pic img').attr('src', "images/still-pup.gif"); //Set dog image.
	$('#dog-pic').show();
	$('#text p').text(myDog.intro); //Set dog intro text.
	//Play button is already showing.
	$('#continue-button').show();
	$('#continue-button').unbind(); //We need to unbind previous handlers, or else all handlers will be called.
	$('#continue-button').click(function(){
		initializeResults();
	});
}


function initializeResults() {
	// PUT WEB FORM HERE
	 $('#dog-pic').hide();
   $('#title').hide();
	 $('#text').hide(); // make them wait for it
	 $('#continue-button').hide();
	// $('#dog').show(); //Show dog interface now.
    $('#visitors').show(); //show suggestions
    $('#next-button').hide();
		//$('#comments p').html("<br><b>" + "<q>" + positiveResponses[parseInt((Math.random() * positiveResponses.length), 10)] + "</q>" + "</b>" + "<br><br>" + "<span style='font-size: 12px;'>" + myDog.decisions[myDog.critic + 1] + "</span>");
    $('#comments p').html("From our training model, Andy scored 1 for both verbal and material rewards, which means doing verbal and material rewards would help Andy perform better. We came up to conclusion that teachers and parents should use both material and verbal rewards to have a positive impact on Andy.");
		$('#home-button').show();
		$('#home-button').click(function(){
			location.reload();//Initialize title.
		});
		// 	initializeMoreInfo();
		// });
 		//$("#criticIcon").attr('src', criticIcons[myDog.critic]);

	//
  //   updateDots();
  //   var timeOutID = window.setTimeout(function() {
  //           $('#pupper img').attr('src', "images/still-pup.gif");
  //       },1000);
  //   $('#instructions p').html("<br>" + criticNames[myDog.critic] + instructions);
	// $('#picture').text(myDog.critic);
	// $('#fetch').click(function() {
  //       generatePositiveComment();
  //       clearTimeout(timeOutID);
  //       $('#pupper img').attr('src', "images/pup-fetch.gif");
	// });
	// $('#roll-over').click(function() {
	// 	generatePositiveComment();
  //       timeOutID = window.setTimeout(function() {
  //           $('#pupper img').attr('src', "images/still-pup.gif");
  //       },1000);
  //       $('#pupper img').attr('src', "images/roll-pup.gif");
	//
	// });
	// $('#wag').click(function() {
	// 	generatePositiveComment();
  //       clearTimeout(timeOutID);
  //       $('#pupper img').attr('src', "images/wag-pup.gif");
	// });
	// $('#bite').click(function() {
	// 	generateNegativeComment();
  //       clearTimeout(timeOutID);
  //       $('#pupper img').attr('src', "images/pup-bite.gif");
	// });
  //   $('#next-button').click(function() {
  //       //update text
  //       myDog.critic++;
  //       updateDots();
  //       if (myDog.critic >= totalCritics) {
  //           prepareResultPages();
  //       } else {
  //           $("#criticIcon").attr('src', criticIcons[myDog.critic]);
  //           $('#comments').hide();
  //           actionOk = true;
  //           $('#next-button').hide();
  //           $('#instructions p').html("<br>" + criticNames[myDog.critic] + instructions);
  //       }
  //   });
}

// function updateDots() {
//     switch (myDog.critic) {
//         case 0:
//             $('#dot1').css('background', '#5b5b5b');
//             break;
//         case 1:
//             $('#dot2').css('background', '#5b5b5b');
//             break;
//         case 2:
//             $('#dot3').css('background', '#5b5b5b');
//             break;
//         case 3:
//             $('#dot4').css('background', '#5b5b5b');
//             break;
//         default:
//             break; //hey
//     }
// }
//
// function updateDogOptions() {
//     $('#next-button').show();
//     $('#comments').show();
// 	if (actionOk) {
//         if (myDog.critic + 1 == totalCritics) {
//             if (Math.random() <= myDog.adoptionChance) {
//                 result = true;
//             } else {
//                 result = false;
//             }
//         }
//         $('#picture').text(myDog.critic);
//     }
//     actionOk = false;
// }
// function prepareResultPages() {
// 	  $('#dog').hide();
//     $('#visitors').hide();
//     $('#title').show();
// 	$('#continue-button').show();
// 	$('#continue-button').text("Take action");
// 	$('#continue-button').unbind();
// 	$('#continue-button').click(function(){
// 		initializeMoreInfo();
// 	});
// 	if (Math.random() <= myDog.adoptionChance)
// 		initializeWinPage();
// 	else
// 		initializeLosePage();
// }
//
// function initializeWinPage() {
// 	//Icon isn't shown.
//   $('#title').html("<span style='font-size: 40px;'>Congratulations! </span>");// + "<br>" + myDog.name + " has been adopted!" + "</br>"
// 	$('#text p').html(win); //Change text to win text.
// 	$('#text').show();
// }
//
// function initializeLosePage() {
// 	//Icon isn't shown.
//     $('#title').html("<span style='font-size: 40px;'>Oh no!</span>");// + "<br>" + myDog.name + " has not been adopted!" + "</br>"
// 	$('#text p').html(lose); //Change text to lose text.
// 	$('#text').show();
// }

function initializeMoreInfo() {
    $('#title').html("<span style='font-size: 40px;'>Ways to make a difference</span>");
    $('#take-action').hide();
    $('#text').hide();
	$('#continue-button').text("Back to home");
	$('#continue-button').click(function() {
		location.reload();
	});


}
