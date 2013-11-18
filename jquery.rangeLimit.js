(function($){
	$.fn.rangeLimit  = function(options) {
		var defaults = {
			at_least: 200,
			no_more_than: 500,
			id_result: false,
			alertClass: false
		}
		var options = $.extend(defaults,  options);
		return this.each(function() {
			var characters = options.at_least;
			var max_chars = options.no_more_than;
			var initialRemaining = characters - $(this).val().length;
			var characterString;
			(initialRemaining == 1) ? characterString = "character" : characterString = "characters";
			if(options.id_result != false) {
				$("#"+options.id_result).append("Please type at least <strong>"+  initialRemaining+"</strong> more " + characterString + ".");
			}
			$(this).keyup(function(){
				if($(this).val().length >= characters){
					var remaining = max_chars - $(this).val().length;
					(remaining == 1) ? characterString = "character" : characterString = "characters";
					if(options.id_result != false) {
						$("#"+options.id_result).html("You may type <strong>"+remaining+"</strong> more " + characterString + ".");
						if(remaining <= 10) {
							$("#"+options.id_result).addClass(options.alertClass);
						} else {
							$("#"+options.id_result).removeClass(options.alertClass);
						}
					}
					if($(this).val().length > max_chars) {
						$(this).val($(this).val().substr(0, max_chars - 1));
					}
				} else {
					if(options.id_result != false) {
						var remaining =  characters - $(this).val().length;
						(remaining == 1) ? characterString = "character" : characterString = "characters";
						$("#"+options.id_result).html("Please type at least <strong>"+  remaining+"</strong> more " + characterString + ".");
						if($("#"+options.id_result).hasClass(options.alertClass)) {
							$("#"+options.id_result).removeClass(options.alertClass);
						}
					}
				}
			});
		});
	};
})(jQuery);