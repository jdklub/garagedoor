/*
 * jQuery GarageDoor Plugin
 *
 * portions influenced by: http://www.learningjquery.com/2007/10/a-plugin-development-pattern
 */
 
(function($) {
	$.fn.GarageDoor = function(options) {
		var opts = $.extend({}, $.fn.GarageDoor.defaults, options);
		return this.each(function() {
			$this = $(this);
			
			// manipulate
			$this.css('position', 'relative');
			wrapElement($this);
			createClone($this, opts);
			
			// create animations
			bindRaise($this, opts);
			bindLower($this, opts);
			
			// bind custom events
			if(opts.onRaise) $('#' + $this.attr("id") + "_wrap").bind("mouseenter", opts.onRaise);
			if(opts.onLower) $('#' + $this.attr("id") + "_wrap").bind("mouseleave", opts.onLower);
		});
	};
	
	function wrapElement(elem) {
		var wrap = document.createElement("div");
		wrap = $(wrap);
		wrap.attr("id", elem.attr("id") + "_wrap")
		wrap.css("width", elem.width());
		wrap.css("height", elem.height());
		wrap.css('overflow', 'hidden');		
		elem.wrap(wrap);
	};
	
	function createClone(elem, opts) {
		var clone = elem.clone();
		elem.after(clone.attr("id", elem.attr("id") + "_clone").css("position", "relative")).after("<br/>");
		
		if(opts.alterClone) {
			opts.alterClone.call(this, clone);
		} else {
			$.fn.GarageDoor.alterClone(clone);
		}
	};
	
	function bindRaise(elem, opts) {
		$('#' + elem.attr("id") + "_wrap").bind("mouseenter", function(){
			if(opts.raiseDelegate) {
				opts.raiseDelegate.call(this, function(){open(elem, opts)});
			} else {
				open(elem, opts);
			}
		});
	};
	
	function bindLower(elem, opts) {
		$('#' + elem.attr("id") + "_wrap").bind("mouseleave", function(){
			if(opts.lowerDelegate) {
				opts.lowerDelegate.call(this, function(){close(elem, opts)});
			} else {
				close(elem, opts);
			}
		});
	};
	
	function open(elem, opts) {
		elem.animate({ 
			top: (- elem.height())
		}, opts.raiseSpeed);
		$('#' + elem.attr("id") + "_clone").animate({ 
			top: (- elem.height())
		}, opts.lowerSpeed);
	}
	
	function close(elem, opts) {
		elem.animate({ 
			top: (0)
		}, opts.raiseSpeed);
		$('#' + elem.attr("id") + "_clone").animate({ 
			top: (0)
		}, opts.lowerSpeed);
	}
	
	$.fn.GarageDoor.alterClone = function(elem) {
		
	};
	
	$.fn.GarageDoor.defaults = {
		raiseSpeed: 200,
		lowerSpeed: 200
	};
})(jQuery);




