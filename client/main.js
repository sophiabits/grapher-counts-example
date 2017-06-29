import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

const createQuery = Package['cultofcoders:grapher'];
const adhocQuery = MySecondCollection.createQuery({
    $filters: { isPublic: true },
    _id: 1,
    isPublic: 1,
});

Template.hello.onCreated(function helloOnCreated() {
    // counter starts at 0
    this.adhocCounter = new ReactiveVar(0);
    this.namedCounter = new ReactiveVar(0);

    const namedHandle = Query.subscribeCount();
    this.autorun(() => {
        if (namedHandle.ready()) {
            const count = Query.getCount();
            console.log('got count:', count);
            this.namedCounter.set(count);
        }
    });

    const adhocHandle = adhocQuery.subscribeCount();
    this.autorun(() => {
        if (adhocHandle.ready()) {
            const count = adhocQuery.getCount();
            this.adhocCounter.set(count);
        }
    });
});

Template.hello.helpers({
    adhocCount() {
        return Template.instance().adhocCounter.get();
    },

    namedCount() {
        return Template.instance().namedCounter.get();
    },
});

Template.hello.events({
    'click button'(event, instance) {
        // increment the counter when button is clicked
        instance.counter.set(instance.counter.get() + 1);
    },
});
