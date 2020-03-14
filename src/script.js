(function () {
    //---------------------------------------------------------------
    // global variables
    var submitMessage1 = $(".submit-message1");
    var submitMessage2 = $(".submit-message2");

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
    var submit = $("#formItem3");

    submit.on("click", function(e) {
        e.preventDefault();

        var firstName = $("#firstName");
        var subject = $("#subject");
        var email = $("#email2");
        var message = $("#message");

        postData("contact.php", {
            name: firstName.val(),
            subject: subject.val(),
            email: email.val(),
            message: message.val()
        }, submitMessage2);
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
                .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
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
    var btn = $("#appointment-btn");
    btn.on("click", function(e) {
        e.preventDefault();

        var name = $("#name");
        var appEmail = $("#email");
        var phone = $("#phone");
        var calendar = $("#calendar");
        var timeRadio = $("input[name='time']:checked");
        var time = $("#time");
        var postedDate = currentDate();
        
        time.val(timeRadio.val());

        postData("post.php", {
            name: name.val(),
            email: appEmail.val(),
            phone: phone.val(),
            request_date: calendar.val(),
            request_time: time.val(),
            posted: postedDate
        }, submitMessage1);
    });

// global functions
    function postData(url, dataObj, message) {
        var fields = $(".field");

        $.ajax({
            method: "POST",
            url: url,
            data: dataObj,
            success: function(data) {
                if (data === "incomplete") {
                    message.addClass("warning").text("Please fill in all fields");
                } else if (data === "pass") {
                    message.addClass("success").text("Thank you! Sent successful");
                    fields.each(function(i, val) {
                        $(this).val("");
                    });
                } else {
                    message.addClass("warning").text("Error: Something went wrong");
                }
            }
        });
    }

    function currentDate() {
        var d = new Date();
        var month = d.getMonth() + 1;
        var day = d.getDate();
        var output = d.getFullYear() + "-" + (month < 10 ? '0' : '') + month + "-" + (day < 10 ? '0' : '') + day + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.setSeconds();
        
        return output;
    }

    //---------------------------------------------------------------
})();
