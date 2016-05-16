import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

BlogPost = new Mongo.Collection("Bposts");


Template.displayBox.helpers({
    blog:BlogPost.find({}, {sort:{createdOn:-1 }})
});


Template.blogs.events({
    'submit .js-add-blog':function(event){
        var fName, lName, bPost;
        fName = event.target.firstName.value;
        lName = event.target.lastName.value;
        bPost = event.target.blogPost.value;
        BlogPost.insert({
            fName:fName,
            lName:lName,
            bPost:bPost,
            createdOn:new Date(),
        });
        var form = document.getElementById("myform");
        form.reset();
        $("div:hidden").show(3000);
        console.log("First Name : "+fName+"\nLast Name : "+lName+"\nBlog : "+bPost);
        return false;
    }
});
