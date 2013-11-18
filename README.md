jQuery.rangeLimit.js
====================

A textarea countdown plugin for those that require a range (more than x, less than y).
--------------------------------------------------------------------------------------

> When first initialized, shows how many more characters are required.
> 
> Once required number is reached, shows how many more characters are available to type.
>
> Automatically removes excess characters after maximum is reached without the use of maxlength attribute (although maxlength attr is recommended).

[Example Here](http://www.bricebentler.com/rangelimit/ "Example Here").

### Usage Example:
HTML:

`<textarea id="txtCampaignDetails" class="span5 form-control"`
` rows="5" placeholder="Details here"></textarea>`

`	<p id="charsToGo"></p>`

JavaScript:

`$(document).ready(function() {

	$("#txtCampaignDetails").rangeLimit({

		at_least: 140,

		no_more_than: 1000,

		id_result: "charsToGo",

		alertClass: "text-danger"

	});

});`
