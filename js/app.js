
// do not use .html() here because
// When .html() is used to set an element's content, any content that was in that element is completely replaced by the new content. Additionally, jQuery removes other constructs such as data and event handlers from child elements before replacing those elements with the new content.
// $('.images').html('<img id="gamePic" src="https://i.imgur.com/COUC6oe.png" />');

// .attr()-Get the value of an attribute for the first element in the set of matched elements or set one or more attributes for every matched element.
// To change multiple attributes at the same time, pass both sets of names and values into the method at once using a plain JavaScript object. Each key-value pair in the object adds or modifies an attribute.  
// An example...
// $( "#greatphoto" ).attr({
//   alt: "Beijing Brush Seller",
//   title: "photo by Kelly Clark"
// });
// $('.images').attr('src','https://i.imgur.com/COUC6oe.png');


//let numAvgPics = 5;//I should not need this anymore
//create a blank array within the game object to populate with images
// this will give me access to the temporary arrays

// let showImageClickCount = 0;//used for testing
let catIndex = 0;// this will help me locate stuff in the catLeaders array
let playerName = '';
let correctCount = 0;
let attemptCount = 0;
let guessPercentage = 0;

let catLeaders = [];
let category = null;
let value = null;
let imageArray = [];
let currentImage = null;

const game = {
	avgLeaders: [
		{
			rank: 1,
			firstName: 'Ty',
			lastName: 'Cobb',
			avg: 0.366,
			clue1: '12 Batting Titles',
			clue2: '1 Triple Crown and 1 MVP win',
			clue3: 'Nicknamed the Georgia Peach',
			image: "https://i.imgur.com/COUC6oe.png"
		 }, {
		 	rank: 2,
		 	firstName: 'Rogers',
		 	lastName: 'Hornsby',
		 	avg: 0.358,
		 	clue1: '7 Batting Titles',
		 	clue2: '2 Triple Crown and 7 MVP wins',
		 	clue3: 'Nicknamed Rajah',
		 	image: "https://i.imgur.com/99dWUcv.jpg"
		 }, {
		 	rank: 3,
		 	firstName: 'Shoeless Joe',
		 	lastName: 'Jackson',
		 	avg: 0.356,
		 	clue1: '13 year career',
		 	clue2: 'Played for PHA, CLE, and CWS',
		 	clue3: '3 time AL Triples leader',
		 	image: "https://i.imgur.com/pDcYqA4.jpg"
		 }, {
		 	rank: 4,
		 	firstName: 'Lefty',
		 	lastName: "O'Doul",
		 	avg: 0.349,
		 	clue1: '2 Batting Titles',
		 	clue2: '11 year career',
		 	clue3: 'Born on March 4, 1897',
		 	image: "https://i.imgur.com/QPYhL0t.jpg"
		 }, {
		 	rank: 5,
		 	firstName: 'Ed',
		 	lastName: "Delahanty",
		 	avg: 0.346,
		 	clue1: '2 Batting Titles',
		 	clue2: '16 year career',
		 	clue3: 'Played for PHI, WSH, and CLE',
		 	image: "https://i.imgur.com/XYmo9jm.jpg"
		 }
	],
	hrLeaders: [
		{
			rank: 1,
			firstName: 'Barry',
			lastName: 'Bonds',
			hr: 762,
			clue1: '7 NL MVP wins and 12 Silver Slugger Awards',
			clue2: '14-time All-Star and 8 Gold Glove awards',
			clue3: 'All-time BB leader',
			image: "https://i.imgur.com/cc11xLb.jpg"
		 }, {
		 	rank: 2,
		 	firstName: 'Hank',
		 	lastName: 'Aaron',
		 	hr: 755,
		 	clue1: 'Last Negro league player on an MLB roster',
		 	clue2: '21-time All-Star, held HR record for 33 years',
		 	clue3: 'All-time RBI and TB leader',
		 	image: "https://i.imgur.com/969A7Un.jpg"
		 }, {
		 	rank: 3,
		 	firstName: 'Babe',
		 	lastName: 'Ruth',
		 	hr: 714,
		 	clue1: '7-time World Series champion',
		 	clue2: '1-time AL batting champ and 1-time AL ERA champion',
		 	clue3: 'All-time SLG leader',
		 	image: "https://i.imgur.com/gt8pE3w.jpg"
		 }, {
		 	rank: 4,
		 	firstName: 'Alex',
		 	lastName: 'Rodriguez',
		 	hr: 696,
		 	clue1: '3 AL MVP wins',
		 	clue2: '14-time All-Star and 10 Silver Slugger awards',
		 	clue3: '1st pick of 1993 draft',
		 	image: "https://i.imgur.com/2QKuiaX.jpg"
		 }, {
		 	rank: 5,
		 	firstName: 'Willie',
		 	lastName: 'Mays',
		 	hr: 660,
		 	clue1: 'ROY in 1951, 24-time All-Star',
		 	clue2: '2-time NL MVP and 12 Gold Glove awards',
		 	clue3: 'Nicknamed The Say Hey Kid',
		 	image: "https://i.imgur.com/2h3OR5O.jpg"
		 }
	],
	rbiLeaders: [
		{
			rank: 1,
			firstName: 'Hank',
		 	lastName: 'Aaron',
			rbi: '2,297',
			clue1: 'Last Negro league player on an MLB roster',
		 	clue2: '21-time All-Star, held HR record for 33 years',
		 	clue3: 'All-time RBI and TB leader',
		 	image: "https://i.imgur.com/969A7Un.jpg"
		 }, {
		 	rank: 2,
		 	firstName: 'Babe',
		 	lastName: 'Ruth',
		 	rbi: '2,214',
		 	clue1: '7-time World Series champion',
		 	clue2: '1-time AL batting champ and 1-time AL ERA champion',
		 	clue3: 'All-time SLG leader',
		 	image: "https://i.imgur.com/gt8pE3w.jpg"
		 }, {
		 	rank: 3,
		 	firstName: 'Alex',
		 	lastName: 'Rodriguez',
		 	rbi: '2,086',
		 	clue1: '3 AL MVP wins',
		 	clue2: '14-time All-Star and 10 Silver Slugger awards',
		 	clue3: '1st pick of 1993 draft',
		 	image: "https://i.imgur.com/2QKuiaX.jpg"
		 }, {
		 	rank: 'tie-4',
		 	firstName: 'Cap',
		 	lastName: 'Anson',
		 	rbi: '2,075',
		 	clue1: 'played for 27 seasons',
		 	clue2: 'possibly the first player with 3,000 hits',
		 	clue3: '4-time batting champion',
		 	image: "https://i.imgur.com/SqOe12M.jpg"
		 }, {
		 	rank: 'tie-4',
		 	firstName: 'Albert',
		 	lastName: 'Pujols',
		 	rbi: '2,075',
		 	clue1: '13th round pick in 1999',
		 	clue2: '3-time MVP and 6-time Silver Slugger',
		 	clue3: 'Career GDP leader',
		 	image: "https://i.imgur.com/aFWqYhf.jpg"
		 }
	],
	leadersImages: [], //this holds a random array of leaders images
	displayImage: [], //this is the picture under the cover
	createImageArray(leaders){//create an array of images from the game object
		// console.log(leaders);
		this.catLeaders = leaders;
		let array = [];
		for(let i=0; i<leaders.length; i++){
			let index = i;
			
			array.push(leaders[index].image);
		}
		this.leadersImages = array;	
	},
	pickImage(){//pick random image and remove it from the leadersImages array
		// console.log(this.leadersImages);
		if(this.leadersImages.length > 0){
			let array = [];
			let index = Math.floor(Math.random() * this.leadersImages.length);
			array.push(this.leadersImages[index]);
			this.displayImage = array;
			currentImage = this.displayImage[0];
			this.leadersImages.splice(index, 1);
		} else {
			// return true;
			alert(`You completed guessing through the top 5 
				${category} Leaders of all time. Try another 
				category or try the ${category} category again.`);
			location.reload();
		}
			$('.insideImage').css('background', `url(${currentImage}) no-repeat center`);
			$('.insideImage').css('background-size', 'cover');
			
	},
	newCover(){
		$('#clue1').css('opacity', 1);
		$('#clue2').css('opacity', 1);
		$('#clue3').css('opacity', 1);	
	},
	setClueOrderedList(){
		// console.log(this.catLeaders);
		for(let i=0; i<this.catLeaders.length; i++){
			// console.log(this.catLeaders[i].image);
			if(this.displayImage[0] === this.catLeaders[i].image){
			// console.log(i);
			// console.log(this.catLeaders[i].clue1);
			// add an ordered list here...
			const $ol = $('<ol id="clueList"></ol>');
			$('.clues').append($ol);
			catIndex = i;
			break;
			}
		}
	},
	pickClue1(){
		$('#clueList').append(`<li id="clueList1">${this.catLeaders[catIndex].clue1}</li>`);
	},
	pickClue2(){
		$('#clueList').append(`<li id="clueList2">${this.catLeaders[catIndex].clue2}</li>`);
	},
	pickClue3(){
		$('#clueList').append(`<li id="clueList3">${this.catLeaders[catIndex].clue3}</li>`);
	},
	checkForRightAnswer(){
		if(playerName.toUpperCase() === this.catLeaders[catIndex].lastName.toUpperCase()){
			alert('You are correct');
			correctCount++;
			//reveal the entire picture and only show the clues that were clicked
			removeClue1();
			removeClue2();
			removeClue3();
		} else {
			alert('Incorrect');
			//reveal the entire picture and only show the clues that were clicked
			removeClue1();
			removeClue2();
			removeClue3();
		}
	},
	addToScoreboard(){
		if(category==='AVG'){
			value = this.catLeaders[catIndex].avg;
		} else if(category==='HR'){
			value = this.catLeaders[catIndex].hr;
		} else {
			value = this.catLeaders[catIndex].rbi;
		}
		const $ol = $('<ol id="plyrListRank"></ol>');
		$('.scoreboardTop').append($ol);
		$('#plyrListRank').append(`<li id="player">The player is ${this.catLeaders[catIndex].firstName} ${this.catLeaders[catIndex].lastName}.  His ${category} is ${value}.  His rank is ${this.catLeaders[catIndex].rank}.</li>`);
		// when you add HR and RBI categories, make sure you empty the scoreboard
	},
	addToStats(){
		let guessPercentage = correctCount / attemptCount;
		let num = guessPercentage.toFixed(3);
		// $('.stats').css({"background-color": "grey", "opacity": "1"});
		$('#participantStats').text(`You are ${correctCount} for ${attemptCount}, ${num}`);
		// .css({"font-size": "20px", "color": "black"});
	},
	// addToStats(){//This way made the screen extend beyond 1 page
	// 	const $ul = $('<ul id="participantStats"></ul>');
	// 	$('.stats').append($ul);
	// 	$('#participantStats').append(`<li id="participant">You are ${correctCount} for ${attemptCount}.</li>`);
	// },
	launch(){
		$('#next').prop('disabled', true);
		$('#disable-submit').prop('disabled', true);
	}
}
	

game.launch();	

// game.createALIArray();
// game.pickImage();
// game.pickClue();

const $onAVGClick = $('#avg');
$onAVGClick.on('click', () => {
	// console.log('button worked');
	$('#jewel').text('AVG Clues');
	$('#avg').prop('disabled', true);
	$('#hr').prop('disabled', true)
	$('#rbi').prop('disabled', true)
	$('#disable-submit').prop('disabled', false);
	category = 'AVG';
	game.createImageArray(game.avgLeaders);
	game.pickImage();
	game.newCover();
	game.setClueOrderedList();
});

const $onHRClick = $('#hr');
$onHRClick.on('click', () => {
	// console.log('button worked');
	$('#jewel').text('HR Clues');
	$('#hr').prop('disabled', true);
	$('#avg').prop('disabled', true);
	$('#rbi').prop('disabled', true);
	$('#disable-submit').prop('disabled', false);
	category = 'HR';
	game.createImageArray(game.hrLeaders);
	game.pickImage();
	game.newCover();
	game.setClueOrderedList();
});

const $onRBIClick = $('#rbi');
$onRBIClick.on('click', () => {
	// console.log('button worked');
	$('#jewel').text('RBI Clues');
	$('#rbi').prop('disabled', true);
	$('#avg').prop('disabled', true);
	$('#hr').prop('disabled', true);
	$('#disable-submit').prop('disabled', false);
	category = 'RBI';
	game.createImageArray(game.rbiLeaders);
	game.pickImage();
	game.newCover();
	game.setClueOrderedList();
});

//move on to the next player
const $next = $('#next');
$next.on('click', () => {
	// console.log('button worked');
	// location.reload();
	$('#next').prop('disabled', true);
	$('#disable-submit').prop('disabled', false);
	$('#clueList').empty();
	game.pickImage();
	game.newCover();
	game.setClueOrderedList();
});


const removeClue1 = () => {
	$('#clue1').css('opacity', 0);
}

const $clue1 = $('#clue1');
$clue1.on('click', () => {
	removeClue1();
	game.pickClue1();
});

const removeClue2 = () => {
	$('#clue2').css('opacity', 0);
}

const $clue2 = $('#clue2');
$clue2.on('click', () => {
	removeClue2();
	game.pickClue2();
});

const removeClue3 = () => {
	$('#clue3').css('opacity', 0);
}

const $clue3 = $('#clue3');
$clue3.on('click', () => {
	removeClue3();
	game.pickClue3();
});


$('form').on('submit', (e) => {
    // console.log('clicked');  
    // console.log($('#input-box').val());
    $('#disable-submit').prop('disabled', true)
    playerName = $('#input-box').val();
    $('#next').prop('disabled', false);
    attemptCount++;
    game.checkForRightAnswer();
	// $('#clueList').empty();
    game.addToScoreboard();
 	game.addToStats();

    event.preventDefault();
    $('#input-box').val('');   
  });


//======================================================
//Overthinking way to get an random array of any length...Solve this by declaring a "global" variable within the object
// let numAvgPics = 5;
// displayAvgPics(){
// 		let orderArray = [];
// 		for(let i=0; i<numAvgPics; i++){
// 			let orderNum = i;
// 			orderArray.push(orderNum);	
// 		}
// 			console.log(orderArray);
// 			let spliceArray = []; //use this to hold the splice			
// 			let randomIndexArray = [];
// 			let j = 0;
// 			while(j < orderArray.length){
// 				let index = Math.floor(Math.random() * orderArray.length);				
// 				spliceArray = orderArray.splice(index, 1);
// 				// console.log(spliceArray);
// 				randomIndexArray.push(spliceArray[0]);	
// 			}
// 				console.log(randomIndexArray);
// 	}
// game.displayAvgPics();

//======================================================
// This way produced a temporary array...Solve this by declaring a "global" variable within the object
// avgLeadersImages(){ //create array of images
// 		let aLIArray = [];
// 		for(let i=0; i<this.avgLeaders.length; i++){
// 			let images = this.avgLeaders[i].image;
// 			aLIArray.push(images);
// 			console.log(aLIArray);
// 		}
// 	}
// game.avgLeadersImages();

//======================================================
//simple break example...
// let array = [1, 2, 3, 4]
// for(let i=0; i<array.length; i++){
//   console.log(array[i]);
//   if(array[i] === 2){
//     break;
//   }
// }

//======================================================
// Last name check help...
// Note: a == b compares the strings in a and b for being equal in the usual case-sensitive way. If you wish to compare without regard to upper or lower case characters, use a function similar to this:

// function isEqual(str1, str2)
//     {
//     return str1.toUpperCase()===str2.toUpperCase();
//     } // isEqual

// Upper case is used instead of lower case in this function due to problems with certain UTF-8 character conversions.

//======================================================
// This was a testing function...
// const newCover = () => {
// 	$('#clue1').css('opacity', 1);
// 	$('#clue2').css('opacity', 1);
// 	$('#clue3').css('opacity', 1);	
// }

// const $showCover = $('#showCover');
// $showCover.on('click', () => {
// 	// console.log('button worked');
// 	newCover();
// });

//======================================================
// This was a testing function...
// const newImage = () => {
// 	game.pickImage();
// 	$('#gameImage').attr('src',game.displayImage);	
// 	showImageClickCount++;
// }
// // newImage();

// const $showImage = $('#showImage');
// $showImage.on('click', () => {
// 	// console.log('button worked');
// 	newImage();
	
// });

//======================================================
// This is an example of an inline break...not using this anymore, trying ordered list
// $('.clues').append("<br>",this.avgLeaders[i].clue1);
// $('.scoreboard').append("<br>", "The player is " + this.avgLeaders[avgIndex].firstName + " " + this.avgLeaders[avgIndex].lastName + ".  His rank is " + this.avgLeaders[avgIndex].rank + ".");