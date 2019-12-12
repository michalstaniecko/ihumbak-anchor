(function ($) {

	if ($('.ihumbak-anchor-menu-wrapper').length) {

		var $anchors = $('.ihumbak-anchor');

		var $menu = $('<ul class="ihumbak-anchor-menu"></ul>');
		$.each($anchors, function (index, elem) {
			var anchor=$(this).text();
			anchor = $(this).text().replace(/\s/g,'-');
			anchor = anchor.replace(/[^a-zA-Z0-9\-]/g, '');
			$(this).attr('id', anchor);
			var $a = $('<a class="ihumbak-anchor-link"></a>')
				.text($(this).text())
				.attr('href', '#'+anchor);
			var $li = $('<li></li>').append($a);
			$menu.append($li);
		});

		$('.ihumbak-anchor-menu-wrapper').append($menu);


		$(document).on('click', '.ihumbak-anchor-link', function (e) {
			var href = $(e.target).attr('href');
			var scrollTop = $(href).offset().top;
			$('html, body').animate({
				scrollTop: scrollTop - 50
			}, 300);
		});
		var $hide = $('.ihumbak-anchor-menu-hide');

		$hide.on('click', function(e) {
			e.preventDefault();
			$('.ihumbak-anchor-menu-wrapper ul').hide(200);
			$(this).addClass('ihumbak-anchor-d-none');
			$('.ihumbak-anchor-menu-show').removeClass('ihumbak-anchor-d-none');
		});
		var $show = $('.ihumbak-anchor-menu-show');

		$show.on('click', function(e) {
			e.preventDefault();
			$('.ihumbak-anchor-menu-wrapper ul').show(200);
			$(this).addClass('ihumbak-anchor-d-none');
			$('.ihumbak-anchor-menu-hide').removeClass('ihumbak-anchor-d-none');
		});
	}
})(jQuery)
