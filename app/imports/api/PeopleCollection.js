import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import 'meteor/aldeed:collection2/static';

const peopleSchema = new SimpleSchema(
  {
    first: String,
    last: String,
    age: SimpleSchema.Integer,
    city: String
  }
);

export const PeopleCollection = new Mongo.Collection('People');

PeopleCollection.attachSchema(peopleSchema);