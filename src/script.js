(function() {
//---------------------------------------------------------------

var calendar = {
    init: function() { // main method
        this.cacheDOM();
        this.render();
    },
    cacheDOM: function() { // grab DOM elements
        this.$calendar = $("#calendar");
    },
    render: function() { // only touches the html
        this.$calendar.flatpickr({
            inline: true
        });
    }
};
calendar.init();


var testimonials = {
    init: function() { // main method
        this.cacheDOM();
        this.render();
    },
    cacheDOM: function() { // grab DOM elements
        this.$slideshow = $(".slideshow-container");
    },
    render: function() { // only touches the html
        this.$slideshow.slick({
            dots: true,
            autoplay: true,
            pauseOnFocus: false,
            pauseOnHover: false
        });
    }
};
testimonials.init();

//---------------------------------------------------------------
})();