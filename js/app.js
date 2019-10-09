
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

// setting the game picture dimensions
$('#gamePic').width(200);
$('#gamePic').height(300);

let numAvgPics = 5;//I should not need this anymore
//create a blank array within the game object to populate with images
// this will give me access to the temporary arrays

let showImageClickCount = 0;

const game = {
	avgLeaders: [
		{
			firstName: 'Ty',
			lastName: 'Cobb',
			avg: 0.366,
			clue1: '12 Batting Titles',
			clue2: '1 Triple Crown and 1 MVP win',
			clue3: 'Nicknamed the Georgia Peach',
			image: "https://i.imgur.com/COUC6oe.png"
		 }, {
		 	firstName: 'Rogers',
		 	lastName: 'Hornsby',
		 	avg: 0.358,
		 	clue1: '7 Batting Titles',
		 	clue2: '2 Triple Crown and 7 MVP wins',
		 	clue3: 'Nicknamed Rajah',
		 	image: "https://i.imgur.com/99dWUcv.jpg"
		 }, {
		 	firstName: 'Shoeless Joe',
		 	lastName: 'Jackson',
		 	avg: 0.356,
		 	clue1: '13 year career',
		 	clue2: 'Played for PHA, CLE, and CWS',
		 	clue3: '3 time AL Triples leader',
		 	image: "https://i.imgur.com/pDcYqA4.jpg"
		 }, {
		 	firstName: 'Lefty',
		 	lastName: "O'Doul",
		 	avg: 0.349,
		 	clue1: '2 Batting Titles',
		 	clue2: '11 year career',
		 	clue3: 'Born on March 4, 1897',
		 	image: "https://i.imgur.com/QPYhL0t.jpg"
		 }, {
		 	firstName: 'Ed',
		 	lastName: "Delahanty",
		 	avg: 0.346,
		 	clue1: '2 Batting Titles',
		 	clue2: '16 year career',
		 	clue3: 'Played for PHI, WSH, and CLE',
		 	image: "https://i.imgur.com/XYmo9jm.jpg"
		 }
	],
	avgLeadersImages: [],
	createALIArray(){//create an array of images from the starting point data
		let array = [];
		for(let i=0; i<this.avgLeaders.length; i++){
			let index = i;
			array.push(this.avgLeaders[index].image);
		}
		this.avgLeadersImages = array;
	},	
	pickImage(){//pick random image and remove it from the images array

	}

	// pickRandomImage(){
	// 	let index = Math.floor(Math.random() * game.avgLeaders.length);
	// }	
}
game.createALIArray();


const newImage = () => {

	$('#gameImage').attr('src','https://i.imgur.com/COUC6oe.png');	
	showImageClickCount++;
}
// newImage();

const $showImage = $('#showImage');
$showImage.on('click', () => {
	// console.log('button worked');
	newImage();
	
});


const newCover = () => {
	$('#clue1').css('opacity', 1);
	$('#clue2').css('opacity', 1);
	$('#clue3').css('opacity', 1);	
}

const $showCover = $('#showCover');
$showCover.on('click', () => {
	// console.log('button worked');
	newCover();
});

const removeClue1 = () => {
	$('#clue1').css('opacity', 0);
}

const $clue1 = $('#clue1');
$clue1.on('click', () => {
	removeClue1();
});

const removeClue2 = () => {
	$('#clue2').css('opacity', 0);
}

const $clue2 = $('#clue2');
$clue2.on('click', () => {
	removeClue2();
});

const removeClue3 = () => {
	$('#clue3').css('opacity', 0);
}

const $clue3 = $('#clue3');
$clue3.on('click', () => {
	removeClue3();
});



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