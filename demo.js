$.get('demo.hbs', function (data) {
    var template = Handlebars.compile(data)

    $.get('products.json', function(data) {
        var html = template(data)
        $('.products').append(html)
    })

})