$(document).ready(function() {
	CopyPageURL();
	BackToTop();
	HeadingBookmarks("h1,h2,h3");
	$("div.title-bar-container").after($(".toolbar-container"));
	$("div.toolbar-container, div.sidenav-container").show();
	$("div.search-bar-icon").prependTo("._Skins_Toolbar_Right ");
	$("div.search-wrapper").prependTo("._Skins_Toolbar_Right ");
});

/********* Back to Top Button **********/
function BackToTop() {
	if ($(".body-container").length === 1) {
		var bodyContainer = $('.body-container')[0];
		var mybutton = document.createElement("button");
		var textnode = document.createTextNode("");
		mybutton.appendChild(textnode);
		mybutton.setAttribute("id", "myBtn");
		mybutton.addEventListener("click", topFunction);

		bodyContainer.appendChild(mybutton);

		// Both functions are used based on the responsive portion of the output
		bodyContainer.onscroll = function() {
			scrollFunction();
		};
		window.onscroll = function() {
			scrollFunctionx();
		};

		function scrollFunction() {
			if (bodyContainer.scrollTop > 20 || document.documentElement.scrollTop > 20) {
				mybutton.style.display = "block";
			} else {
				mybutton.style.display = "none";
			}
		}

		function scrollFunctionx() {
			if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
				mybutton.style.display = "block";
			} else {
				mybutton.style.display = "none";
			}
		}

		function topFunction() {
			$('html, body').animate({
				scrollTop: 0
			}, "smooth");
			$('html, documentElement').animate({
				scrollTop: 0
			}, "smooth");
			$('.body-container').animate({
				scrollTop: 0
			}, "smooth");
		}
	}
}

/********* Heading Bookmarks **********/
function HeadingBookmarks(selectors) {
	// Allow `selectors` to be a string, array, or jQuery object
	var elements = $(selectors);

	elements.each(function(i) {
		var heading = $(this);
		heading.addClass("bookmark-hotspot");
		var b = heading.attr("id");
		var bookmarked = heading.find("a[name]");
		var bookmarkID = bookmarked.attr("name");

		if (bookmarked.length) {
			heading.attr("id", bookmarkID);
			var anchor_url = window.location.href + "#" + bookmarkID;
			heading.prepend("<a class='heading-link' id='" + bookmarkID + "'  onClick='copyLink(id, event)' href='#' title='Copy link'><div id='anchor-icon' >&#160;&#160;</div></a>");
			var magellan = heading.attr("data-magellan-target");
			bookmarked.remove();
			if (bookmarkID !== magellan) {
				$("ul.menu li a[href='#" + magellan + "']").attr("href", "#" + bookmarkID);
			}
		} else if (b !== undefined) {
			var anchor_url = window.location.href + "#" + b;
			heading.prepend("<a class='heading-link' id='" + b + "'  onClick='copyLink(id, event)' href='#'><div id='anchor-icon' title='Copy link'>&#160;&#160;</div></a>");
			if (b !== magellan) {
				$("ul.menu li a[href='#" + magellan + "']").attr("href", "#" + b);
			}
		} else {
			b = heading.text()
				.toLowerCase()
				.trim()
				.replace(/\s+/g, "-")
				.replace(/&/g, "-and-")
				.replace(/[^\w\-]+/g, "")
				.replace(/\-\-+/g, "-");
			heading.attr("id", b);
			var anchor_url = window.location.href + "#" + b;
			heading.prepend("<a class='heading-link' id='" + b + "'  onClick='copyLink(id, event)' href='#'><div id='anchor-icon' title='Copy link'>&#160;&#160;</div></a>");
		}

		heading.find(".heading-link").click(function() {
			window.location.href = anchor_url;
			heading.addClass("active");
			setTimeout(function() {
				heading.removeClass("active");
			}, 700);
		});

		setTimeout(function() {
			var url = window.location.href;
			var hash = url.substring(url.indexOf("#") + 1);
			if (url.indexOf("#") > -1) {
				// Uncomment if smooth scroll is needed
				$("html, body,.body-container").animate({
					scrollTop: $("#" + hash).offset().top - 120
				}, 200);
			}
		}, 200);
	});
}

// Function to copy the link to the clipboard
function copyLink(evt, event) {
	event.preventDefault();
	var noHash = location.href.replace(location.hash, "");
	navigator.clipboard.writeText(noHash + "#" + evt).then(() => {
		console.log("Copied to clipboard!");
	}, () => {
		console.error("Failed to copy link.");
	});
}

/******** Copy Page URL *********/
function CopyPageURL() {
	$(".copy-link-button").click(function() {
		// Create a temporary input element to hold the current URL
		var $tempInput = $("<input>");
		$("body").append($tempInput);

		// Set the value of the input to the current URL
		$tempInput.val(window.location.href).select();

		// Copy the selected text to the clipboard
		document.execCommand("copy");

		// Remove the temporary input element
		$tempInput.remove();

		$(this).attr("title", "Copied");
	});
}

/********* Clear Search **********/
function ClearSearch() {
	$(".search-filter-wrapper").before("<span class='clear-icon' title='Clear search'>x</span>");
	var search_button = setInterval(function() {
		if ($(".search-field").val().length > 0) {
			$(".clear-icon").show();
			$("ul#searchResultsDropdown").show();
		}
		clearInterval(search_button);
	}, 100);
	$(".search-field").keyup(function() {
		if ($(this).val().length == 0) {
			$(".clear-icon").hide();
			$("ul#searchResultsDropdown").hide();
		} else {
			$(".clear-icon").show();
			$("ul#searchResultsDropdown").show();
		}
	}).keyup();
	$(".clear-icon").click(function() {
		$(this).prev('input').val('').trigger('change').focus();
		$(".clear-icon").hide();
		$("ul#searchResultsDropdown").hide();
	});
};