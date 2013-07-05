//  Magic Tags jQuery Plugin
//  by Justin Allen
//  https://github.com/justinallen/magic-tags
//  Place link to this script at bottom of HTML file

(function(){

// HERE GOES:
// get all the stuff into one big string

var entries = $("ul#magic-tags-list li .magic-words");
// var stuff = entries.innerHTML;
var longString = "";

console.log(entries);

$(entries).each( function( index ) {

    // for each entry, pull text out and add to a long string
    longString += $(this).text() + ", ";
	return longString;

});

// slice last comma and space off the end - 'slice' is nice
var strLen = longString.length;
var longStringCut = longString.slice(0,strLen-2);

// convert comma separated string to array
var stuffArray = $.map( longStringCut.split(','), $.trim ); 

// console.log("This is stuffArray");
// console.log(stuffArray);

// clean array of duplicates
var cleanList = stuffArray.reduce(function(a,b){
    if (a.indexOf(b) < 0 ) a.push(b);
    return a;
  },[]);

// console.log("This is cleanList:");
// console.log(cleanList);

var linkList = $('<p id="tags-output"></p>');

$.each( cleanList, function( index, value ) {
    // console.log( index + ": " + value );
    //  alert(index + ': ' + value);
	var text = value;
	var text = text.trim();
	var link = '<a class="magic-link" href="#' + text + '">' + text + '</a>' + '<i> </i>'; 
    // console.log(link);
	$(link).appendTo(linkList);
});

// wrap words in span tags
$('.magic-words').each( function(){

	var text = $(this).html().split(",");
	// console.log(text);
	var len = text.length;
	// console.log(len);
	var result = [];

	for( var i = 0; i < len; i++ ) {
		result[i] = '<span>' + text[i] + '</span>';
	}

	$(this).html(result.join(', '));

});


// var output = document.querySelectorAll("p.tags-output");

$(document).ready( function(){

	$("#magic-tags-output").html(linkList);
	
	$(" ").insertAfter("a.magic-link");

	$('<a class="magic-link-show-all" href="#">Show All</a>').appendTo("#magic-tags-output");

	// ok, now I need a filter by click function

	$("a.magic-link").click( function(e) {

		$('a').removeAttr('id', 'magic-pressed');
		$(this).attr('id', 'magic-pressed');

		var word = $(this).html();
		var wordHash = "#" + word;

		// for loop here to iterate over list
		// hide if does not contain word
		// if contains word and is currently hidden, show


		$("ul#magic-tags-list li .magic-words").each( function( index ) {

			// var myItem = $(this).html();
			// console.log(myItem);

			// Add selected class if it contains the magic word
			$(".magic-words span").each( function( index ) {

				if ( $(this).text().indexOf(word) >=0 ) {
					var testThis = $(this).text();
					console.log('What is this:' + testThis);
					$(this).addClass("magic-word-active");
				} else {
					$(this).removeClass("magic-word-active");
				}

			});


			// Show and hide list item if it contains the magic word
			if ( $(this).text().indexOf(word) >= 0 ) {
				// show if hidden
				// var whatIsThis = $(this);
				// console.log(whatIsThis + " has a " + word);
				
				if ( $(this).parent().is(":hidden") ) {
					$(this).parent().slideDown();
				} 

			} else {
				// hide if shown
				// var whatIsThis = $(this);
				// console.log(whatIsThis + " does NOT have a " + word);

				if ( $(this).parent().is(":visible") ) {
					$(this).parent().slideUp();
				} 

			}

		});

		e.preventDefault();

	// end click handler
	});


	$("a.magic-link-show-all").click( function(e) {

		e.preventDefault();

		$('a').removeAttr('id', 'magic-pressed');
		$(this).attr('id', 'magic-pressed');

		$("ul#magic-tags-list li").each( function( index ) {

			$(this).slideDown();

		});

		$(".magic-words span").removeClass("magic-word-active");

	// end click handler
	});

});

})();


