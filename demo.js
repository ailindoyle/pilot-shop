$.get('demo.hbs', function (data) {
    var source = data
    var template = Handlebars.compile(source)

    var data = {
        title: "All about <p> Tags",
        body: "This is a <p> post about &lt;p&gt; tags</p>"
        name: "",
        desc: "",
        price: ,
        originalPrice: ,
        discount: ,
        image: ,
    }

    var html = template(data)
    $('body').append(html)

})