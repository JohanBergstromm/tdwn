(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['selects'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "            <option value=\""
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</option>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"news-select\">\n    <span class=\"arrow\"></span>\n    <select name=\"selected\" form=\"selected-news\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.data : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n    <form action=\"\" id=\"selected-news\">\n      <button type=\"submit\" id=\"go\">Go!</button>\n    </form>\n</div>";
},"useData":true});
templates['top-news'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "<a href=\""
    + alias2(alias1((depth0 != null ? depth0.url : depth0), depth0))
    + "\" target=\"_blank\" class=\"news-item\">\n    <div class=\"img\" style=\"background-image: url('"
    + alias2(alias1((depth0 != null ? depth0.urlToImage : depth0), depth0))
    + "')\"></div>\n    <div class=\"content\">\n        <h3>"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "</h3>\n        <h6><time class=\"timeago\" datetime=\""
    + alias2(alias1((depth0 != null ? depth0.publishedAt : depth0), depth0))
    + "\"></time></h6>\n        <p>"
    + alias2(alias1((depth0 != null ? depth0.description : depth0), depth0))
    + "</p>\n    </div>\n</a>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<h2 class=\"news-title\">"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h2>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.data : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();