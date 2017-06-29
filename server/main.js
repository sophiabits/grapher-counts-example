import { Meteor } from 'meteor/meteor';

MySecondCollection.expose();

Meteor.startup(() => {
    if (MyCollection.find().count() === 0) {
        MyCollection.insert({
            _id: 'id1',
            isPublic: true,
        });
        MyCollection.insert({
            _id: 'id2',
            isPublic: true,
        });
        MyCollection.insert({
            _id: 'id3',
            isPublic: true,
        });
    }

    MySecondCollection.remove();
    if (MySecondCollection.find().count() === 0) {
        MySecondCollection.insert({
            _id: 'id4',
            isPublic: true,
        });
        MySecondCollection.insert({
            _id: 'id5',
            isPublic: true,
        });
        MySecondCollection.insert({
            _id: 'id6',
            isPublic: true,
        });
    }
});
