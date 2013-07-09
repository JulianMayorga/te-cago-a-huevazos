var eggGun = $('#egg-gun');
var egg = $('#egg');
var troll = $('#troll');

eggGun.click(function () {
    egg.removeClass('notransition').addClass('fired');
    eggGun.addClass('fired');

    setTimeout(function () {
        troll.addClass('dodging');
    }, 1000);

    setTimeout(function () {
        troll.removeClass('dodging');
        egg.addClass('notransition').removeClass('fired');
        eggGun.removeClass('fired');
    }, 2100);
});
