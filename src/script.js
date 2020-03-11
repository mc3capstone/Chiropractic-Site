(function () {
    //---------------------------------------------------------------

    // team/about module
    var team = {
        init: function () { // main method
            this.cacheDOM();
            this.bindEvents();
        },
        cacheDOM: function () { // grab DOM elements
            this.$expand = $(".read-more");
            this.$hiddenText = $(".hidden-text");
            this.$less = $(".less");
            this.$profile = $(".profile-pic");
        },
        bindEvents: function () {
            this.$expand.on("click", this.reveal);
            this.$less.on("click", this.condense);
        },
        reveal: function () {
            var thisParent = $(this).parent(); // parent element of current clicked $expand button
            thisParent.find(".hidden-text").slideDown("fast");
            thisParent.find(".read-more").hide();
        },
        condense: function () {
            var thisParent = $(this).parent(); // parent element of current clicked $expand button
            thisParent.slideUp("fast");

            if (window.matchMedia("(min-width: 768px)").matches) {
                $(".read-more").not("#special-expand").show();
            } else {
                $(".read-more").show();
            }
        }
    };
    team.init();

    // appointment module
    var calendar = {
        init: function () { // main method
            this.cacheDOM();
            this.render();
        },
        cacheDOM: function () { // grab DOM elements
            this.$calendar = $("#calendar");
        },
        render: function () { // only touches the html
            this.$calendar.flatpickr({
                inline: true
            });
        }
    };
    calendar.init();

    // testimonials module
    var testimonials = {
        init: function () { // main method
            this.cacheDOM();
            this.render();
        },
        cacheDOM: function () { // grab DOM elements
            this.$slideshow = $(".slideshow-container");
        },
        render: function () { // only touches the html
            this.$slideshow.slick({
                dots: true,
                autoplay: true,
                pauseOnFocus: false,
                pauseOnHover: false
            });
        }
    };
    testimonials.init();

    //Contact Us Validation
    $(function () {
        $("form[name='contactform']").validate({
            rules: {
                firstName: "required",
                subject: "required",
                email: {
                    required: true,
                    email: true
                },
                message: "required"
            },
            messages: {
                firstName: "Please enter your full name",
                subject: "Please enter a subject",
                email: "Please enter a valid email address",
                message: "Please type your message here"
            },
            submitHandler: function (form) {
                form.submit();
            }
        });
    });

    // map 
    var map = {
        init: function () {
            this.cacheDOM();
            this.render();
        },
        cacheDOM: function () {
            this.map = L.map("mapid");
        },
        render: function () {
            this.map.setView([40.061320, -75.084350], 13);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(this.map);

            L.marker([40.061320, -75.084350]).addTo(this.map)
                .bindPopup('7256 Rising Sun Ave')
                .openPopup();
        }
    };
    map.init();

    //Appointment Validation
    $(function () {
        $("form[name='appointmentform']").validate({
            rules: {
                name: "required",
                email: {
                    required: true,
                    email: true
                },
                phone: "required",
            },
            messages: {
                name: "Please enter your full name",
                email: "Please enter a valid email address",
                phone: "Please enter your phone numer"
            },
            submitHandler: function (form) {
                form.submit();
            }
        });
    });


    //---------------------------------------------------------------
})();
