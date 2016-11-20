/*
/* jquery.modalDialog.js - modal dialog plugin for jQuery
/* Colin Jaggs (c) 2010 Pin Digital Ltd
*/

(function ($)
{
	// global $ methods for showing/hiding the modal dialog
	$.fn.modalDialog = function(opts)
	{
		opts = $.extend({}, $.fn.modalDialog.defaults, opts || {});
		opts.overlayCSS = $.extend({}, $.fn.modalDialog.defaults.overlayCSS, opts.overlayCSS || {});
		var css = $.extend({}, $.fn.modalDialog.defaults.css, opts.css || {});
		var msg = $(this);

		// create layers: 1 = overlay, 2 = modal dialog
		var z = opts.zIndex;
		var lyr1 = $('<div class="modalDialog modalOvl" style="z-index:' + (z++) + ';display:none;border:none;margin:0;padding:0;position:fixed;width:100%;height:100%;top:0;left:0"></div>');
		var lyr2 = $('<div class="modalDialog modalMsg" style="z-index:' + z + ';display:none;position:fixed"></div>');

		// add specific css to layers including making the iframe layer transparent
		lyr1.css(opts.overlayCSS);
		lyr2.css(css);

		// add the dialog to the top layer
		$(msg).show().appendTo($(lyr2));

		// add the layers to the body
		var layers = [lyr1, lyr2];
		$.each(layers, function () { if (this != "") this.appendTo($('body')); });

		// position the dialog in the center of the viewable area
		lyr2.css({ left: '50%', marginLeft: (lyr2.outerWidth() / 2) * -1, top: '50%', marginTop: (lyr2.outerHeight() / 2) * -1 });

		// show the overlay and dialog
		if (opts.fadeIn)
		{
			lyr1.fadeIn(opts.fadeIn);
			lyr2.fadeIn(opts.fadeIn, function () { if (opts.onLoad) opts.onLoad(); });
		}
		else
		{
			lyr1.show();
			lyr2.show();
			if (opts.onLoad) opts.onLoad();
		}

		// add event to the overlay to close the dialog when clicked
		if (opts.overlayClickToClose) lyr1.click(function () { $.fn.modalDialogHide(opts); });

		// add click event to all close elements matching the set selector
		$("#modal " + opts.closeSel).click(function () { $.fn.modalDialogHide(opts); });
	};
	$.fn.modalDialogHide = function(opts)
	{
		opts = $.extend({}, $.fn.modalDialog.defaults, opts || {});
		var els = $('body').children().filter('.modalDialog').add('body > .modalDialog');
		if (opts.fadeOut) els.fadeOut(opts.fadeOut).remove();
		else els.hide().remove();
	};

	// override these in your code to change the default behavior and style
	$.fn.modalDialog.defaults =
	{
		//css: { background: "#fff" }, 	// default styles for the dialog
		overlayCSS: { backgroundColor: '#000', opacity: 0.6 }, 			// styles for the overlay
		iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank',		// for ie6 set the correct iframe source ('about:blank' fails on HTTPS and javascript:false is very slow)
		zIndex: 1000,																				// z-index for the overlay
		fadeIn: 300, 																					// fadeIn time (or 0 to disable fadeIn)
		fadeOut: 300, 																				// fadeOut time (or 0 to disable fadeOut)
		closeSel: ".close",																			// jquery selector to attach close event to
		overlayClickToClose: true,															// close the dialog when the overlay is clicked
		onLoad: null																					// callback method invoked when fadeIn has completed modal dialog is visible
	};

})(jQuery);
