magic-tags
==========

Magic Tags jQuery Plugin
by Justin Allen
May, 2013

![magic tags thumbnail](http://justinallen.us/lab/magic-tags-thumb.jpg "Magic Tags Thumbnail")

[View demo.](http://justinallen.us/lab/magic-tags/demo.html)

A minimalist plugin that takes a list of elements and makes them sortable based on the words they contain. "Magic Tags" automagically creates a tag cloud with links that sort the list. 

###Instructions

Magic Tags requires two markup elements on your HTML page, one for input (a list to sort) and one for output (a place to put the magic tags). 

The input must be a `ul` element with an id of `magic-tags-list` with `li` items that are to be sorted placed in an element with a class of `magic-words`. Separate the 'magic words' by comma. 

```html
<ul id="magic-tags-list">
    <li>Don't sort me. <div class="magic-words">words, to, sort</div></li>
    <li>Ignore this. <div class="magic-words">make, into, tags</div></li>
    <li>Irrelevant to sorting. <div class="magic-words">simple, as, pie</div></li>
</ul>
```

The output must be a page element with the id of `magic-tags-output`. 

```html
<div id="magic-tags-output">
    <!-- You can leave this empty! It's for the magic tags. -->
</div>
```

That's all there is to it! Put comma separated words, or have your CMS output them, into the sortable area of the list items, and the plugin creates the magic tags that you can sort your list by. 

Apply CSS styling as you like. Magic Tags wraps your words in `span` tags, and the currently active tag will have a `magic-word-active` class placed on the words in your list, so you can make them eye-catching. There's also a `magic-pressed` id placed on the tag that has just been pressed.

---

####Notes

+ Magic Tags is not, by the strictest definition, a jQuery Plugin, in that it doesn't add methods to the jQuery object. While I may add this at some point, I don't see the added value. It seems simplest for the purposes of this "plugin" (which is jQuery reliant) to just require a few simple class names to markup elements.
+ There are spaces inside of `i` tags between the magic tags. This is inelegant, but the easiest way to get the script to respect the blank spaces needed between the links.
