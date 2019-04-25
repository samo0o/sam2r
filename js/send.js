$(document).ready(function () {
    $('.button').click(function (event) {
        console.log('clicked button');

        var name = $('.name').val();
        var email = $('.email').val();
        var message = $('.message').val();
        var stateNam = $('.status-nam');
        var stateEmi = $('.status-emi');
        var stateMsg = $('.status-msg')
        stateNam.empty();
        stateEmi.empty();
        stateMsg.empty();


        if (name.length >= 2) {
            stateNam.append();
        } else {
            event.preventDefault();
            stateNam.append('<div><h4> Name is not valid </h4></div>');
        };

        if (email.length >= 5 && email.includes('@') && email.includes('.')) {
            stateEmi.append();
        } else {
            event.preventDefault();
            stateEmi.append('<div><h4> Email is not valid </h4></div>');
        };
        if (message.length >= 10) {
            stateMsg.append();
        } else {
            event.preventDefault();
            stateMsg.append('<div><h4> Masseg is not valid </h4></div>');
        };


    })
})
