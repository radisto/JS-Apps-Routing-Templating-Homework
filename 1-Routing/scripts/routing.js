var app = Sammy(function(){
    var container = $('#wrapper');
    this.get('#/', function(){
        container.html('<h1>Home page</h1>');
    });
    this.get('#/Bob', function(){
        container.html('<h2>Hello, Bob</h2>');
    });
    this.get('#/William', function(){
        container.html('<h2>Hello, William</h2>');
    });
    this.get('#/Stephen', function(){
        container.html('<h2>Hello, Stephen</h2>');
    });
    this.get('#/John', function(){
        container.html('<h2>Hello, John</h2>');
    });
    this.get('#/Robert', function(){
        container.html('<h2>Hello, Robert</h2>');
    });
});

app.run('#/');