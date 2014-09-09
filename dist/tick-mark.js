define(['snap'],
function(Snap) {
	return Snap.plugin(function(Snap, Element, Paper) {

		var HORIZONTAL_PADDING = 10;
		var VERTICAL_PADDING = 10;

		var FONT_FAMILY = "'Lato', sans-serif";
		var FONT_WEIGHT = 300;
		var FONT_SIZE = 12;

		Paper.prototype.tickMark = function(x, y, orientation, size, value) {
			var paper = this;
			if (orientation === 'horizontal') {
				var text = this.text(x - HORIZONTAL_PADDING, y, NumberUtils.renderValue(value))
					.attr({
						'font-family': FONT_FAMILY,
						'font-weight': FONT_WEIGHT,
						'font-size': FONT_SIZE,
						'text-anchor': 'end',
						'transform': 't0 ' + FONT_SIZE / 3.3
					});
				var tickMark = this.g(text)
					.addClass('fm-tick-mark');
			} else if (orientation === 'vertical') {
				var line = this.line(x, y, x, y + size);
				var text = this.text(x, y + VERTICAL_PADDING + FONT_SIZE / 2, NumberUtils.renderValue(value))
					.attr({
						'font-family': FONT_FAMILY,
						'font-weight': FONT_WEIGHT,
						'font-size': FONT_SIZE,
						'text-anchor': 'middle'
					});
				var tickMark = this.g(text, line)
					.addClass('fm-tick-mark');
			} else {
				console.err('Incorrect orientation specified');
			}

			return tickMark;
		};

	});
});