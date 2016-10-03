
_.mixin({templateFromUrl: function(url){
    var templateHtml = "";
    this.cache = this.cache || {};

    if (this.cache[url]) {
        templateHtml = this.cache[url];
    } else {
        $.ajax({
            url: url,
            method: "GET",
            async: false,
            success: function(data){
                templateHtml = data;
            }
        });

        this.cache[url] = templateHtml;
    }

    return _.template(templateHtml)
}});