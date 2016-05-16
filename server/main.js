import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
    // code to run on server at startup
    BlogPost = new Mongo.Collection("Bposts");
});
