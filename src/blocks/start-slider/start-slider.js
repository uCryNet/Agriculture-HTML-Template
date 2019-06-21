(function(){
	//define a slider object
	function slider(element) {
		this.element = element;
		this.slides = this.element.querySelector('.slides').getElementsByTagName('li');
		this.slidesNumber = this.slides.length;
		this.arrowsNavigation = this.element.querySelector('.slider-navigation');
		this.dotsNavigation = this.element.querySelector('.slider-dots-navigation');
		this.dots = this.dotsNavigation.getElementsByTagName('a');

		this.selectedSlide = 0;
		this.prevSelectedSlide = 0;
		//check if mouse is over the slide element
		this.hovered = false;

		this.bindEvents();
	}

	slider.prototype.bindEvents = function() {
		var self = this;
		//detect click on dots navigation
		this.dotsNavigation.addEventListener('click', function(event){
			if( event.target.tagName.toLowerCase() == 'a' ) {
				event.preventDefault();
				//determine new slide index
				var newSlideIndex = elementIndex(event.target.parentElement);
				self.showNewSlide(newSlideIndex);
			}
		});
	}

	slider.prototype.showNewSlide = function(index) {
		if( index < 0 ) index = this.slidesNumber - 1;
		if( index > this.slidesNumber - 1 ) index = 0;
		this.prevSelectedSlide = this.selectedSlide;
		this.selectedSlide = index;

		for( var i = 0; i < this.slidesNumber; i++) {
			if( i < this.selectedSlide ) {
				this.slides[i].classList.add('move-left');
				this.slides[i].classList.remove('selected', 'visible');
				this.dots[i].classList.remove('selected');
			} else if( i == this.selectedSlide ) {
				this.slides[i].classList.add('selected');
				this.slides[i].classList.remove('move-left');
				this.dots[i].classList.add('selected');
			} else {
				this.slides[i].classList.remove('selected', 'move-left', 'visible');
				this.dots[i].classList.remove('selected');
			}
		}

		this.slides[this.prevSelectedSlide].classList.add('visible');
	}

	function elementIndex(element) {
		var siblings = element.parentElement.children;
		for ( var i = 0; i < siblings.length; i++ ) {
			if( siblings[i] == element ) return i;
		}
		return -1;
	}

	var sliders = document.getElementsByClassName('full-width-slider');
	for( var i = 0; i < sliders.length; i++) {
		(function(i){
			new slider(sliders[i]);
		}(i));
	}
})();
// Play video in slider
(function() {
	var play = document.getElementById('play');

	play.onclick = function(e){
		document.body.insertAdjacentHTML('afterbegin', `<div id="video" class="video">
		<div class="video-box">
			<iframe src="https://player.vimeo.com/video/44309170?autoplay=1&color=ffffff&title=0&byline=0&portrait=0" width="1525" height="858" frameborder="0" allow="autoplay; fullscreen" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>      
		</div>
	</div>`);
		removeVideo();
	}
	function removeVideo(e) {
		document.onclick = function(e) {
			if(e.target.id === 'video') {
				document.getElementById("video").remove();
			}
		}
	}
})();