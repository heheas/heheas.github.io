
	import Splide from '@splidejs/splide';
		
	function init() {
		var splide = new Splide( '.splide', {
		  type    : 'loop',
		  perPage : 3,
		  autoplay: true,
		} );
		
		splide.mount();
	}
