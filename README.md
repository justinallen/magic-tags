magic-tags
==========

Magic Tags jQuery Plugin
by Justin Allen
May, 2013

(in progress)

[View demo.](http://justinallen.us/lab/magic-tags/demo.html)

A minimalist plugin that takes a list of elements and makes them into a sortable list based on the words they contain. "Magic Tags" automagically creates a tag cloud with links that sort the list. 

###Instructions

Magic Tags requires two markup elements on your HTML page, one for input (a list to sort) and one for output (a place to put the magic tags). The input must be a ul element with an id of "magic-tags-list" with li children (ol will not work), and the output must be a div with the id of "magic-tags-output." 

(more coming)



*Notes*

Magic Tags is not, by the strictest definition, a jQuery Plugin, in that it doesn't add methods to the jQuery object. While I may add this at some point, I don't see the added value. It seems simplest for the purposes of this "plugin" (which is jQuery reliant) to just require a few simple class names to markup elements.

There are spaces inside of "i" tags between the magic tags. This is inelegant, but the easiest way to get the script to respect the blank spaces needed between the links.