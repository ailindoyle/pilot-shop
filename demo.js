$.get('demo.hbs', function (data) {
    var source = data
    var template = Handlebars.compile(source)

    var dataToUse = {
        $.get('products.json', function(data) {
            dataToUse = data
        })
    }

    var html = template(dataToUse)
    $('.products').append(html)

})