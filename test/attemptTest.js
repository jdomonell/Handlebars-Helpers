require('../src/attempt');

var chai = require('chai')
,	h = require('handlebars');
chai.should();

var c = function (template, data) {
	data = data || {};
	return h.compile(template)(data);
};

describe('Is', function () {
	describe('with single argument', function () {
		it('passes a single truthy value', function(){
			c('{{#is cat}}Yep{{/is}}', {cat:true}).should.equal('Yep');
			c('{{#is cat}}Yep{{/is}}', {cat:'x'}).should.equal('Yep');
		});
		it('fails a single falsey value', function(){
			c('{{#is cat}}Yep{{/is}}', {cat:false}).should.equal('');
			c('{{#is cat}}Yep{{/is}}', {cat:''}).should.equal('');
		});
	});

	// #is foo 				foo == true
	// #is foo bar 			foo == bar
	// #is foo == bar 		foo == bar
	// #is foo === bar 		foo === bar
	// #is foo != bar 		foo != bar
	// #is foo !== bar 		foo !== bar
	// #is foo not bar 		foo != bar

	// #is foo > bar 		foo > bar
	// #is foo >= bar
	// #is foo < bar
	// #is foo <= bar
});
