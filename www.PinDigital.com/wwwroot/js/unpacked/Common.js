/* site wide JS functions */

/* ==============================================================
/* modal dialog functions and library
/* ============================================================== */
function modalDialog(src, width, height) { $(".modalDialog").remove(); $("body").append("<div id=\"modal\" style=\"display: block;\"></div>"); $.ajax({ url: src, cache: false, dataType: "html", success: function (data) { $("#modal").html(data).modalDialog({ css: { width: width + "px", height: height + "px" } }); $(document).ready(function () { $("#modalContent iframe").focus() }); } }); }
function modalFrame(title, url, width, height, data) { $(".modalDialog").remove(); var widthUnit = "px", heightUnit = "px"; if (typeof (width) != "number") { if (width.indexOf("%") > -1) widthUnit = "%"; width = parseInt(width.replace(/[^0-9]+/g, "")); } if (typeof (height) != "number") { if (height.indexOf("%") > -1) heightUnit = "%"; height = parseInt(height.replace(/[^0-9]+/g, "")); } $("body").append("<div id=\"modal\" style=\"display: block;\"><div id=\"modalCont\"><div id=\"modalHdr\"><div class=\"title\">" + title + "</div><a class=\"close\" href=\"javascript:;\" onclick=\"return false;\">X</a></div><div id=\"modalContent\"></div></div>"); $("#modal").modalDialog({ css: { width: width + widthUnit, height: height + heightUnit } }); $("<input type=\"hidden\" id=\"hfData\" value=\"" + data + "\"><iframe frameborder=\"0\" width=\"100%\" height=\"" + height  + heightUnit + "\" scrolling=\"auto\" src=\"" + url + "\"></iframe>").appendTo("#modalContent"); }
function modalClose() { $((parent) ? $(".modalDialog", parent.document) : $(".modalDialog")).fadeOut(300, function () { $(this).remove(); }); }

/* ==============================================================
/* common message box for alerts and confirmations - inserted into DOM after H1 element
/* ============================================================== */
function msgBox(type, title, messages, clear)		// type = conf (confirmation) /alert
{
	if (clear == null) clear = true;		// default to always clear previous messages
	var $msgBox = $("#msgBox").length ? $("#msgBox") : null;
	if (!$msgBox)
	{
		$msgBox = $("<div id=\"msgBox\"></div>");
		$("h1").after($msgBox);
	}
	if (clear) $msgBox.html("");
	var $msg = $("<div><span class=\"hdr\">" + title + "</span>" + (messages != null ? "<br><ul></ul>" : "") + "</div></div>").addClass(type + "Bx");
	if (messages != null) for (var i = 0; i < messages.length; i++) $("ul", $msg).append("<li>" + messages[i] + "</li>");
	$msg.appendTo($msgBox);
	$msgBox.slideDown('fast');
	$("body, html").animate({ scrollTop: $msgBox.offset().top - 10 }, 250);
}


/* ==============================================================
/* external libraries
/* ============================================================== */

/*
/* jquery.modalDialog.js - modal dialog plugin for jQuery
/* Colin Jaggs (c) 2010 Pin Digital Ltd
*/
(function ($) { $.fn.modalDialog = function (opts) { opts = $.extend({}, $.fn.modalDialog.defaults, opts || {}); opts.overlayCSS = $.extend({}, $.fn.modalDialog.defaults.overlayCSS, opts.overlayCSS || {}); var css = $.extend({}, $.fn.modalDialog.defaults.css, opts.css || {}); var msg = $(this); var z = opts.zIndex; var lyr1 = $('<div class="modalDialog modalOvl" style="z-index:' + (z++) + ';display:none;border:none;margin:0;padding:0;position:fixed;width:100%;height:100%;top:0;left:0"></div>'); var lyr2 = $('<div class="modalDialog modalMsg" style="z-index:' + z + ';display:none;position:fixed"></div>'); lyr1.css(opts.overlayCSS); lyr2.css(css); $(msg).show().appendTo($(lyr2)); var layers = [lyr1, lyr2]; $.each(layers, function () { if (this != "") this.appendTo($('body')) }); lyr2.css({ left: '50%', marginLeft: (lyr2.outerWidth() / 2) * -1, top: '50%', marginTop: (lyr2.outerHeight() / 2) * -1 }); if (opts.fadeIn) { lyr1.fadeIn(opts.fadeIn); lyr2.fadeIn(opts.fadeIn, function () { if (opts.onLoad) opts.onLoad() }) } else { lyr1.show(); lyr2.show(); if (opts.onLoad) opts.onLoad() } if (opts.overlayClickToClose) lyr1.click(function () { $.fn.modalDialogHide(opts) }); $("#modal " + opts.closeSel).click(function () { $.fn.modalDialogHide(opts) }) }; $.fn.modalDialogHide = function (opts) { opts = $.extend({}, $.fn.modalDialog.defaults, opts || {}); var els = $('body').children().filter('.modalDialog').add('body > .modalDialog'); if (opts.fadeOut) els.fadeOut(opts.fadeOut).remove(); else els.hide().remove() }; $.fn.modalDialog.defaults = { overlayCSS: { backgroundColor: '#000', opacity: 0.6 }, iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank', zIndex: 1000, fadeIn: 300, fadeOut: 300, closeSel: ".close", overlayClickToClose: true, onLoad: null } })(jQuery);

/**
*
*  Base64 encode / decode
*  http://www.webtoolkit.info/
*
**/
var Base64 = { _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", encode: function (input) { var output = ""; var chr1, chr2, chr3, enc1, enc2, enc3, enc4; var i = 0; input = Base64._utf8_encode(input); while (i < input.length) { chr1 = input.charCodeAt(i++); chr2 = input.charCodeAt(i++); chr3 = input.charCodeAt(i++); enc1 = chr1 >> 2; enc2 = ((chr1 & 3) << 4) | (chr2 >> 4); enc3 = ((chr2 & 15) << 2) | (chr3 >> 6); enc4 = chr3 & 63; if (isNaN(chr2)) { enc3 = enc4 = 64 } else if (isNaN(chr3)) { enc4 = 64 } output = output + this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) + this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4) } return output }, decode: function (input) { var output = ""; var chr1, chr2, chr3; var enc1, enc2, enc3, enc4; var i = 0; input = input.replace(/[^A-Za-z0-9\+\/\=]/g, ""); while (i < input.length) { enc1 = this._keyStr.indexOf(input.charAt(i++)); enc2 = this._keyStr.indexOf(input.charAt(i++)); enc3 = this._keyStr.indexOf(input.charAt(i++)); enc4 = this._keyStr.indexOf(input.charAt(i++)); chr1 = (enc1 << 2) | (enc2 >> 4); chr2 = ((enc2 & 15) << 4) | (enc3 >> 2); chr3 = ((enc3 & 3) << 6) | enc4; output = output + String.fromCharCode(chr1); if (enc3 != 64) { output = output + String.fromCharCode(chr2) } if (enc4 != 64) { output = output + String.fromCharCode(chr3) } } output = Base64._utf8_decode(output); return output }, _utf8_encode: function (string) { string = string.replace(/\r\n/g, "\n"); var utftext = ""; for (var n = 0; n < string.length; n++) { var c = string.charCodeAt(n); if (c < 128) { utftext += String.fromCharCode(c) } else if ((c > 127) && (c < 2048)) { utftext += String.fromCharCode((c >> 6) | 192); utftext += String.fromCharCode((c & 63) | 128) } else { utftext += String.fromCharCode((c >> 12) | 224); utftext += String.fromCharCode(((c >> 6) & 63) | 128); utftext += String.fromCharCode((c & 63) | 128) } } return utftext }, _utf8_decode: function (utftext) { var string = ""; var i = 0; var c = c1 = c2 = 0; while (i < utftext.length) { c = utftext.charCodeAt(i); if (c < 128) { string += String.fromCharCode(c); i++ } else if ((c > 191) && (c < 224)) { c2 = utftext.charCodeAt(i + 1); string += String.fromCharCode(((c & 31) << 6) | (c2 & 63)); i += 2 } else { c2 = utftext.charCodeAt(i + 1); c3 = utftext.charCodeAt(i + 2); string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63)); i += 3 } } return string } };


/**
* hoverIntent r5 // 2007.03.27 // jQuery 1.1.2+
* <http://cherne.net/brian/resources/jquery.hoverIntent.html>
* 
* @param  f  onMouseOver function || An object with configuration options
* @param  g  onMouseOut function  || Nothing (use configuration options object)
* @author    Brian Cherne <brian@cherne.net>
*/
(function ($) { $.fn.hoverIntent = function (f, g) { var cfg = { sensitivity: 7, interval: 100, timeout: 0 }; cfg = $.extend(cfg, g ? { over: f, out: g} : f); var cX, cY, pX, pY; var track = function (ev) { cX = ev.pageX; cY = ev.pageY; }; var compare = function (ev, ob) { ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t); if ((Math.abs(pX - cX) + Math.abs(pY - cY)) < cfg.sensitivity) { $(ob).unbind("mousemove", track); ob.hoverIntent_s = 1; return cfg.over.apply(ob, [ev]); } else { pX = cX; pY = cY; ob.hoverIntent_t = setTimeout(function () { compare(ev, ob); }, cfg.interval); } }; var delay = function (ev, ob) { ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t); ob.hoverIntent_s = 0; return cfg.out.apply(ob, [ev]); }; var handleHover = function (e) { var p = (e.type == "mouseover" ? e.fromElement : e.toElement) || e.relatedTarget; while (p && p != this) { try { p = p.parentNode; } catch (e) { p = this; } } if (p == this) { return false; } var ev = jQuery.extend({}, e); var ob = this; if (ob.hoverIntent_t) { ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t); } if (e.type == "mouseover") { pX = ev.pageX; pY = ev.pageY; $(ob).bind("mousemove", track); if (ob.hoverIntent_s != 1) { ob.hoverIntent_t = setTimeout(function () { compare(ev, ob); }, cfg.interval); } } else { $(ob).unbind("mousemove", track); if (ob.hoverIntent_s == 1) { ob.hoverIntent_t = setTimeout(function () { delay(ev, ob); }, cfg.timeout); } } }; return this.mouseover(handleHover).mouseout(handleHover); }; })(jQuery);


/*
 ### jQuery Multiple File Upload Plugin v1.48 - 2013-02-19 ###
 * Home: http://www.fyneworks.com/jquery/multiple-file-upload/
 * Code: http://code.google.com/p/jquery-multifile-plugin/
 *
	* Licensed under http://en.wikipedia.org/wiki/MIT_License
 ###
*/
eval(function (p, a, c, k, e, r) { e = function (c) { return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36)) }; if (!''.replace(/^/, String)) { while (c--) r[e(c)] = k[c] || e(c); k = [function (e) { return r[e] }]; e = function () { return '\\w+' }; c = 1 }; while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]); return p }('3(L.1y)(6(a){a.7.2=6(b){3(5.N==0)8 5;3(R Q[0]=="14"){3(5.N>1){l c=Q;8 5.K(6(){a.7.2.Y(a(5),c)})}a.7.2[Q[0]].Y(5,a.2b(Q).2a(1)||[]);8 5}l b=a.G({},a.7.2.v,b||{});a("29").1m("2-M").P("2-M").1u(a.7.2.T);3(a.7.2.v.X){a.7.2.1i(a.7.2.v.X);a.7.2.v.X=V}5.1m(".2-17").P("2-17").K(6(){L.2=(L.2||0)+1;l c=L.2;l d={e:5,E:a(5),I:a(5).I()};3(R b=="28")b={k:b};l e=a.G({},a.7.2.v,b||{},(a.1e?d.E.1e():a.27?d.E.12():V)||{},{});3(!(e.k>0)){e.k=d.E.B("1I")}3(!(e.k>0)){e.k=(r(d.e.1n.u(/\\b(k|24)\\-([0-9]+)\\b/o)||[""]).u(/[0-9]+/o)||[""])[0];3(!(e.k>0))e.k=-1;23 e.k=r(e.k).u(/[0-9]+/o)[0]}e.k=18 22(e.k);e.j=e.j||d.E.B("j")||"";3(!e.j){e.j=d.e.1n.u(/\\b(j\\-[\\w\\|]+)\\b/o)||"";e.j=(18 r(e.j)).p(/^(j|1a)\\-/i,"")}a.G(d,e||{});d.s=a.G({},a.7.2.v.s,d.s);a.G(d,{n:0,C:[],1Y:[],1b:d.e.A||"2"+r(c),1s:6(a){8 d.1b+(a>0?"1W"+r(a):"")},z:6(b,c){l e=d[b],f=a(c).B("t");3(e){l g=e(c,f,d);3(g!=V)8 g}8 13}});3(r(d.j).N>1){d.j=d.j.p(/\\W+/g,"|").p(/^\\W|\\W$/g,"");d.1f=18 1U("\\\\.("+(d.j?d.j:"")+")$","o")}d.H=d.1b+"1T";d.E.1H(\'<J O="2-1H" A="\'+d.H+\'"></J>\');d.1k=a("#"+d.H+"");d.e.y=d.e.y||"m"+c+"[]";3(!d.F){d.1k.16(\'<J O="2-F" A="\'+d.H+\'1p"></J>\');d.F=a("#"+d.H+"1p")}d.F=a(d.F);d.Z=6(b,e){d.n++;b.2=d;3(e>0)b.A=b.y="";3(e>0)b.A=d.1s(e);b.y=r(d.1r.p(/\\$y/o,a(d.I).B("y")).p(/\\$A/o,a(d.I).B("A")).p(/\\$g/o,c).p(/\\$i/o,e));3(d.k>0&&d.n-1>d.k)b.10=13;d.11=d.C[e]=b;b=a(b);b.19("").B("t","")[0].t="";b.P("2-17");b.1S(6(){a(5).1O();3(!d.z("1L",5,d))8 q;l c="",f=r(5.t||"");3(d.j&&f&&!f.u(d.1f))c=d.s.1z.p("$1a",r(f.u(/\\.\\w{1,4}$/o)));1B(l g 26 d.C)3(d.C[g]&&d.C[g]!=5)3(d.C[g].t==f)c=d.s.1D.p("$m",f.u(/[^\\/\\\\]+$/o));l h=a(d.I).I();h.P("2");3(c!=""){d.1F(c);d.n--;d.Z(h[0],e);b.1G().1J(h);b.D();8 q}a(5).1C({1A:"1K",1x:"-1M"});b.1N(h);d.1w(5,e);d.Z(h[0],e+1);3(!d.z("1P",5,d))8 q});a(b).12("2",d)};d.1w=6(b,c){3(!d.z("1Q",b,d))8 q;l e=a(\'<J O="2-1R"></J>\'),f=r(b.t||""),g=a(\'<1v O="2-1h" 1h="\'+d.s.U.p("$m",f)+\'">\'+d.s.m.p("$m",f.u(/[^\\/\\\\]+$/o)[0])+"</1v>"),h=a(\'<a O="2-D" 1V="#\'+d.H+\'">\'+d.s.D+"</a>");d.F.16(e.16(h," ",g));h.1t(6(){3(!d.z("1X",b,d))8 q;d.n--;d.11.10=q;d.C[c]=V;a(b).D();a(5).1G().D();a(d.11).1C({1A:"",1x:""});a(d.11).S().19("").B("t","")[0].t="";3(!d.z("1Z",b,d))8 q;8 q});3(!d.z("20",b,d))8 q};3(!d.2)d.Z(d.e,0);d.n++;d.E.12("2",d)})};a.G(a.7.2,{S:6(){l b=a(5).12("2");3(b)b.F.21("a.2-D").1t();8 a(5)},T:6(b){b=(R b=="14"?b:"")||"1d";l c=[];a("15:m.2").K(6(){3(a(5).19()=="")c[c.N]=5});8 a(c).K(6(){5.10=13}).P(b)},1c:6(b){b=(R b=="14"?b:"")||"1d";8 a("15:m."+b).25(b).K(6(){5.10=q})},M:{},1i:6(b,c,d){l e,f;d=d||[];3(d.1l.1g().1E("1j")<0)d=[d];3(R b=="6"){a.7.2.T();f=b.Y(c||L,d);1q(6(){a.7.2.1c()},1o);8 f}3(b.1l.1g().1E("1j")<0)b=[b];1B(l g=0;g<b.N;g++){e=b[g]+"";3(e)(6(b){a.7.2.M[b]=a.7[b]||6(){};a.7[b]=6(){a.7.2.T();f=a.7.2.M[b].Y(5,Q);1q(6(){a.7.2.1c()},1o);8 f}})(e)}}});a.7.2.v={j:"",k:-1,1r:"$y",s:{D:"x",1z:"2c 2d 2e a $1a m.\\2f 2g...",m:"$m",U:"2h U: $m",1D:"2i m 2j 2k 2l U:\\n$m"},X:["1u","2m","2n","2o","2p"],1F:6(a){2q(a)}};a.7.S=6(){8 5.K(6(){2r{5.S()}2s(a){}})};a(6(){a("15[2t=m].2u").2()})})(1y)', 62, 155, '||MultiFile|if||this|function|fn|return|||||||||||accept|max|var|file||gi|replace|false|String|STRING|value|match|options|||name|trigger|id|attr|slaves|remove||list|extend|wrapID|clone|div|each|window|intercepted|length|class|addClass|arguments|typeof|reset|disableEmpty|selected|null||autoIntercept|apply|addSlave|disabled|current|data|true|string|input|append|applied|new|val|ext|instanceKey|reEnableEmpty|mfD|metadata|rxAccept|toString|title|intercept|Array|wrapper|constructor|not|className|1e3|_list|setTimeout|namePattern|generateID|click|submit|span|addToList|top|jQuery|denied|position|for|css|duplicate|indexOf|error|parent|wrap|maxlength|prepend|absolute|onFileSelect|3000px|after|blur|afterFileSelect|onFileAppend|label|change|_wrap|RegExp|href|_F|onFileRemove|files|afterFileRemove|afterFileAppend|find|Number|else|limit|removeClass|in|meta|number|form|slice|makeArray|You|cannot|select|nTry|again|File|This|has|already|been|ajaxSubmit|ajaxForm|validate|valid|alert|try|catch|type|multi'.split('|'), 0, {}));


/*
 * jquery.autoComplete.js - offer autocomplete functionality to any input box
/* Colin Jaggs (c) 2014 Pin Digital Ltd
 */
(function ($)
{
	$.fn.extend(
	{
		autoComplete: function(url, opts)
		{
			opts = $.extend({}, $.autoCompleter.defaults, opts || {});
			return this.each(function () { new $.autoCompleter(this, url, opts); })
		}
	});
	$.autoCompleter = function(input, url, opts)
	{
		var KEY = { UP: 38, DOWN: 40, DEL: 46, TAB: 9, SHIFTTAB: 16, RETURN: 13, ESC: 27, COMMA: 188, PAGEUP: 33, PAGEDOWN: 34, BACKSPACE: 8 };
		var container = $("<div/>").hide().addClass(opts.className).css({ position: "absolute", 'z-index': opts.zIndex, background: opts.background, width: $(input).outerWidth() });
		var results = $("<ul/>").appendTo(container);
		var $input = $(input).attr("autocomplete", "off").keydown(keyDown).keyup(keyUp).after(container).dblclick(function () { if (!$input.val()) resultsBind(); });
		$(window).resize(function () { container.css({ width: $input.outerWidth() }) });
		$(document).mouseup(function (e) { if (!container.is(e.target) && container.has(e.target).length === 0) resultsHide(); });

		// add scrolling if required
		if (opts.scroll) results.css({ 'max-height': opts.maxHeight.replace(/[^0-9]+/g, "") + "px", overflow: "auto" });

		function keyDown(e)
		{
			var keyCode = (window.event) ? window.event.keyCode : (e) ? e.which : 0;
			switch (keyCode)
			{
				case KEY.RETURN:
					if ($("li a.hl", results).length)
					{
						$input.val($("li a.hl", results).first().html());
						resultsHide();
					}
					return false;
				case KEY.TAB:
				case KEY.SHIFTTAB:
					if ($("li a.hl", results).length)
					{
						$input.val($("li a.hl", results).first().html());
						resultsHide();
					}
					return true;
				case KEY.UP:
					if (container.is(":visible")) resultsNavigate(-1);
					else resultsBind();
					return false;
				case KEY.DOWN:
					if (container.is(":visible")) resultsNavigate(1);
					else resultsBind();
					return false;
				default:
					return true;
			}
		}
		function keyUp(e)
		{
			var keyCode = (window.event) ? window.event.keyCode : (e) ? e.which : 0;
			switch (keyCode)
			{
				case KEY.RETURN:
					resultsHide();
					return false;
				case KEY.ESC:
					resultsHide();
					return false;
				case KEY.TAB:
				case KEY.SHIFTTAB:
					return true;
				case KEY.UP:
				case KEY.DOWN:
					return false;
				default:
					if ($input.val()) resultsBind($input.val());
					else resultsHide();
					return true;
			}
		}
		function resultsBind(text)
		{
			$.ajax({
				url: url,
				data: { q: text, limit: opts.limit },
				cache: true,
				dataType: "json"
			}).done(function (o)
			{
				switch (parseInt(o.Error.Code))
				{
					case -1:
						$("li", results).remove();
						if (o.Results.length > 0)
						{
							for (var i = 0; i < o.Results.length; i++) results.append('<li><a href="javascript:;">' + o.Results[i] + '</a></li>');
							$("li a", results).click(function () { $input.val($(this).html()); resultsHide(); $input.focus(); });
							resultsShow();
						}
						else resultsHide();
						break;
					default:
						resultsHide();
						break;
				}
			});
		}
		function resultsShow() { container.fadeIn("fast"); }
		function resultsHide() { $("li a.hl", results).removeClass("hl"); container.fadeOut("fast"); }
		function resultsNavigate(step)
		{
			if ($("li a.hl", results).length)
			{
				var idx = $("li a", results).index($("li a.hl", results).first().removeClass("hl")) + step;
				if (idx > $("li a", results).length - 1) idx = 0;
				else if (idx < 0) idx = $("li a", results).length - 1;
				$("li a", results).eq(idx).addClass("hl");
			}
			else
			{
				if (step < 0) $("li a:last", results).addClass("hl");
				else $("li a:first", results).addClass("hl");
				idx = $("li a", results).index($("li a.hl", results));
			}

			// check if the selected item is outside the viewing area, and if so scroll to it
			var offset = 0;
			$("li", results).slice(0, idx).each(function () { offset += $(this).outerHeight(); });
			if ((offset + $($("li", results)[idx]).outerHeight() - results.scrollTop()) > results[0].clientHeight) results.scrollTop(offset + $($("li", results)[idx]).outerHeight() - results.innerHeight())
			else if (offset < results.scrollTop()) results.scrollTop(offset);
		}
	}
	$.autoCompleter.defaults =
	{
		limit: 10,
		className: "autoComplete",
		scroll: false,
		maxHeight: 0,
		zIndex: 999,
		background: "#fff"
	};
})(jQuery);
