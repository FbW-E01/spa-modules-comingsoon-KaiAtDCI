// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
import moment from 'moment';

class event {
    constructor(date, heading, description) {
        this.date = date;
        this.heading = heading;
        this.description = description;
    }

    getDate() {
        return this.date;
    }

    getHeading() {
        return this.heading;
    }

    getDescription() {
        return this.description;
    }

    getRemaining() {
        const date = moment(this.date);
        return date.subtract(moment());
    }

    getRemainingDays() {
        const date = moment(this.date);
        return date.diff(moment(), 'days');
    }

    getRemainingHours() {
        const date = moment(this.date);
        return this.getRemaining().format('HH');
    }

    getRemainingMinutes() {
        const date = moment(this.date);
        return this.getRemaining().format('mm');
    }

    getRemainingSeconds() {
        const date = moment(this.date);
        return this.getRemaining().format('ss');
    }

}

function inject(event) {
    document.getElementById('days').innerHTML = event.getRemainingDays();
    document.getElementById('hours').innerHTML = event.getRemainingHours();
    document.getElementById('minutes').innerHTML = event.getRemainingMinutes();
    document.getElementById('seconds').innerHTML = event.getRemainingSeconds();
    document.getElementById('event-heading').innerHTML = event.getHeading();
    document.getElementById('event-description').innerHTML = `${event.getDate().format('MM/DD/YY hh:mm A')}: ${event.getDescription()}`;
}

const events = [
    new event(moment('2021-06-27 08:30 PM', 'YYYY-MM-DD hh:mm A'), `Beeblebrox' Symphony Orchestra`, `Lorem ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum`),
    new event(moment('2021-07-01 07:00 PM', 'YYYY-MM-DD hh:mm A'), `The Flying Robots`, `Lorem ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum`),
    new event(moment('2021-08-26 21:00 PM', 'YYYY-MM-DD hh:mm A'), `Cheech & Chong`, `Lorem ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum`),
];

let eventIndex = 0;
setInterval(() => {
    eventIndex  = ++eventIndex !== events.length ? eventIndex++ : eventIndex = 0;
}, 6000)

setInterval(() => {
    inject(events[eventIndex]);
}, 100)

