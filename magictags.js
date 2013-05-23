//  Magic Tags jQuery Plugin
//  by Justin Allen
//  https://github.com/justinallen/magic-tags
//  Place link to this script at bottom of HTML file

// HERE GOES:
// get all the stuff into one big string

var entries = $("ul#magic-tags-list li");
var stuff = entries.innerHTML;
var longString = "";

$(entries).each( function( index ) {

    // for each entry, pull text out and add to a long string
    longString += $(this).text() + ", ";
	return longString;

});

// slice last comma and space off the end - 'slice' is nice
var strLen = longString.length;
var longStringCut = longString.slice(0,strLen-2);

// convert comma separated string to array
var stuffArray = longStringCut.split(',');

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


var output = document.querySelectorAll("p.tags-output");

$(document).ready( function(){

	$("#magic-tags-output").html(linkList);
	
	$(" ").insertAfter("a.magic-link");

	$('<a class="magic-link-show-all" href="#">Show All</a>').appendTo("#magic-tags-output");

	// ok, now I need a filter by click function

	$("a.magic-link").click( function() {

		$('a').removeAttr('id', 'magic-pressed');
		$(this).attr('id', 'magic-pressed');

		var word = $(this).html();
		// console.log(word);

		// for loop here to iterate over list
		// hide if does not contain word
		// if contains word and is currently hidden, show


		$("ul#magic-tags-list li").each( function( index ) {

			// var myItem = $(this).html();
			// console.log(myItem);

			if ( $(this).text().indexOf(word) >= 0 ) {
				// show if hidden
				// var whatIsThis = $(this);
				// console.log(whatIsThis + " has a " + word);

				if ( $(this).is(":hidden") ) {
					$(this).slideDown();
				} 

			} else {
				// hide if shown
				// var whatIsThis = $(this);
				// console.log(whatIsThis + " does NOT have a " + word);

				if ( $(this).is(":visible") ) {
					$(this).slideUp();
				} 

			}


		});

	// end click handler
	});


	$("a.magic-link-show-all").click( function() {

		$('a').removeAttr('id', 'magic-pressed');
		$(this).attr('id', 'magic-pressed');

		$("ul#magic-tags-list li").each( function( index ) {

			$(this).slideDown();

		});

	// end click handler
	});

});

