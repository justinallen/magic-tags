//  Magic Tags jQuery Plugin
//  by Justin Allen
//  https://github.com/justinallen/magic-tags
//  Place link to this script at bottom of HTML file

// get all the stuff into one big string

var entry = $("li.entry");
var stuff = entry.innerHTML;

// console.log("This is entry:");
// console.log(entry);

var longstring = "";

$(entry).each( function( index ) {

  // console.log( "Hello Ben" + index );
  // console.log( index + ": " + $(this).text() );
    longstring += $(this).text() + ", ";
	return longstring;

});

 // console.log("Hello ben");
 // console.log(longstring);

// got it all in a long string! 

// convert comma separated string to array

var stuffArray = longstring.split(',');

// console.log("This is stuffArray:");
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
	var link = '<a class="magic-link" href="#' + text + '">' + text + '</a>'; 
	// console.log(link);
	$(link).appendTo(linkList);
});


var output = document.querySelectorAll("p.tags-output");

$(document).ready( function(){

	$("#magic-tags-box").html(linkList);
	
	$("<span> * </span>").insertAfter("a.magic-link");

	$('<a class="magic-link-show-all" href="#">Show All</a>').appendTo("#magic-tags-box");

	// ok, now I need a filter by click function

	$("a.magic-link").click( function() {

		$('a').removeAttr('id', 'magic-pressed');
		$(this).attr('id', 'magic-pressed');

		var word = $(this).html();
		// console.log(word);

		// for loop here to iterate over list
		// hide if does not contain word
		// if contains word and is currently hidden, show


		$("li.entry").each( function( index ) {

			// var myItem = $(this).html();
			// console.log(myItem);

			if ( $(this).text().indexOf(word) >= 0 ) {
				// show if hidden
				var whatIsThis = $(this);
				console.log(whatIsThis + " has a " + word);

				if ( $(this).is(":hidden") ) {
					$(this).slideDown();
				} 

			} else {
				// hide if shown
				var whatIsThis = $(this);
				console.log(whatIsThis + " does NOT have a " + word);

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

		$("li.entry").each( function( index ) {

			$(this).slideDown();

		});

	// end click handler
	});

});

