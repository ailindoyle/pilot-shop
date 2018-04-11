$.get('demo.hbs', function (data) {
    var source = data
    var template = Handlebars.compile(source)

    var data = {
        item [
            {name: "name", desc: "description", price: 45, image: "https://cdn.shopify.com/s/files/1/1634/8185/products/akg_aviation_av100_anr_headset_01_270x335_crop_top.png?v=1480672940"}

        ]
    }

    var html = template(data)
    $('main').append(html)

})