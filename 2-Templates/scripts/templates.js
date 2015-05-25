(function(){
    var data = [
        {name: 'Garry Finch', jobTitle: 'Front End Technical Lead', website: 'http://website.com'},
        {name: 'Bob McFlay', jobTitle: 'Photographer', website: 'http://goo.gle'},
        {name: 'Jenny O\'Sullivan', jobTitle: 'LEGO Geek', website: 'http://stackoverflow.com'}
    ];

    var source = $('#template').html();
    var template = Handlebars.compile(source);
    $('#wrapper').append(template(data));
}());