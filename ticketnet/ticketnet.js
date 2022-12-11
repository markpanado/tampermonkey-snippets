
// www.ticketnet.com.ph Ticket Availability Checker

console.log('Tampering...');

window.addEventListener('load', event => {
    // EMERGENCY STOPPER
    // return true

    const tickets = document.querySelector('#section');

    // check if there are available tickets
    if (!!tickets?.childElementCount) {
        console.log('Tickets found!');

        // Alarm Sound
        window.open('spotify:track:75FT1IPlCYCs5DAYbR9mjE');
    } else {
        console.log('reloading...');
        location.reload();
    }
});
