'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Job Schema
 */
var JobSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	company{
		type: String,
		default: '',
		trim: true,
		required: 'Company cannot be blank'
	},
	title: {
		type: String,
		default: '',
		trim: true,
		required: 'Title cannot be blank'
	},
	description: {
		type: String,
		default: '',
		trim: true
	},
	requirements: {
		type: String,
		default: '',
		trim: true
	},
	hourly_wage: {
		type: Number,
		default: '',
		trim: true
	},
	state: {
		type: String,
		default: ''
	},
	contact_email: {
		type: String,
		default: ''
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User',
		trim: true
	}
});

mongoose.model('Job', JobSchema);
