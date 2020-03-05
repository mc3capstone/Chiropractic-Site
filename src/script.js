(function() {
//---------------------------------------------------------------

// team/about module
var team = {
    init: function() { // main method
        this.cacheDOM();
        this.bindEvents();
    },
    cacheDOM: function() { // grab DOM elements
        this.$expand = $(".read-more");
        this.$hiddenText = $(".hidden-text");
        this.$less = $(".less");
        this.$profile = $(".profile-pic");
    },
    bindEvents: function() {
        this.$expand.on("click", this.reveal);
        this.$less.on("click", this.condense.bind(this));
    },
    reveal: function() {
        var thisParent = $(this).parent(); // parent element of current clicked $expand button
        thisParent.find(".hidden-text").slideDown();
        thisParent.find(".read-more").hide();
        
        console.log($(".team-wrap").siblings());
        $(".team-wrap").next("team-wrap").hide();
    },
    condense: function() {
        this.$hiddenText.slideUp();
        this.$expand.show();
    }
};
team.init();

// appointment module
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

// testimonials module
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