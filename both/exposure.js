const { createNamedQuery } = Package['cultofcoders:grapher'];


Query = createNamedQuery('my_query', {
    my_collection: {
        $filters: { isPublic: true },

        _id: 1,
        name: 1,
        isPublic: true,
    },
});

if (Meteor.isServer) {
    Query.expose();
}
