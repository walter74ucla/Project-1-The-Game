
// do not use .html() here because
// When .html() is used to set an element's content, any content that was in that element is completely replaced by the new content. Additionally, jQuery removes other constructs such as data and event handlers from child elements before replacing those elements with the new content.
// $('.images').html('<img id="gamePic" src="https://i.imgur.com/COUC6oe.png" />');

// .attr()-Get the value of an attribute for the first element in the set of matched elements or set one or more attributes for every matched element.
// To change multiple attributes at the same time, pass both sets of names and values into the method at once using a plain JavaScript object. Each key-value pair in the object adds or modifies an attribute
// $('.images').attr('src','https://i.imgur.com/COUC6oe.png');

// setting the game picture dimensions
$('#gamePic').width(200);
$('#gamePic').height(300);

const newImage = () => {
	$('#gameImage').attr('src','https://i.imgur.com/COUC6oe.png');	
}
// newImage();

const $showImage = $('#showImage');
$showImage.on('click', () => {
	// console.log('button worked');
	newImage();
});


