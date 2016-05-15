import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

BlogPost = new Mongo.Collection("Bposts");

Template.blog.helpers({

})