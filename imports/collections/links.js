import { Mongo } from 'meteor/mongo';
import * as validUrl from 'valid-url';
import {check, Match} from 'meteor/check';

Meteor.methods({
    'links.insert' : function (url) {
        console.log("Attempting to save ", url);
        check(url, Match.Where(url => validUrl.isUri(url)));

        //now we can go ono to generate a random token
        var token = Math.random().toString(36).slice(-5);
        console.log(token);
    }
});

export const Links = new Mongo.Collection('links');
