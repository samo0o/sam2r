$(document).ready(function () {
    $('.button').click(function (event) {
        console.log('clicked button');

        var name = $('.name').val();
        var email = $('.email').val();
        var message = $('.message').val();
        var stateElm = $('.status');
        stateElm.empty()

        if (name.length >= 2) {
            stateElm.append('<div>name is  valid</div>')
        } else {
            event.preventDefault();
            stateElm.append('<div>name is not valid</div>')
        };

        if (email.length >= 5 && email.includes('@') && email.includes('.')) {
            stateElm.append('<div>Email is valid</div>')
        } else {
            event.preventDefault();
            stateElm.append('<div>Email is not valid</div>')
        };
        if (message.length >= 10) {
            stateElm.append('<div>masseg is valid</div>')
        } else {
            event.preventDefault();
            stateElm.append('<div>masseg is not valid</div>')
        };


    })
})