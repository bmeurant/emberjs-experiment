Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("<div class=\"app container\">\r\n    <span class=\"sources pull-right\"><a href=\"https://github.com/bmeurant/emberjs-experiment\"><i class=\"fa fa-github\"></i> View sources on github</a></span>\r\n    <h1>Comic Books Library</h1>\r\n    <div class=\"row\">\r\n        ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n    </div>\r\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["components/validated-form"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("<form>\r\n    ");
  stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n</form>");
  return buffer;
  
});

Ember.TEMPLATES["partials/albumItem"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<li class=\"row\">\r\n    <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("coverUrl")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" alt=\"Album cover\" class=\"col-xs-2 cover img-responsive img-thumbnail\"/>\r\n\r\n    <div class=\"col-xs-10\">\r\n        <h4>");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\r\n        <dl class=\"album-desc dl-horizontal\">\r\n            <dt>volume</dt><dd>");
  stack1 = helpers._triageMustache.call(depth0, "number", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</dd>\r\n            <dt>date</dt><dd>");
  data.buffer.push(escapeExpression((helper = helpers['format-date'] || (depth0 && depth0['format-date']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "MMMM YYYY", "publicationDate", options) : helperMissing.call(depth0, "format-date", "MMMM YYYY", "publicationDate", options))));
  data.buffer.push("</dd>\r\n        </dl>\r\n    </div>\r\n</li>");
  return buffer;
  
});

Ember.TEMPLATES["series"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n            <li class=\"series-item\">\r\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'title': ("series.title")
  },hashTypes:{'title': "ID"},hashContexts:{'title': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "seriesItem", "series", options) : helperMissing.call(depth0, "link-to", "seriesItem", "series", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </li>\r\n        ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                    ");
  stack1 = helpers._triageMustache.call(depth0, "series.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                ");
  return buffer;
  }

function program4(depth0,data) {
  
  
  data.buffer.push("\r\n                <i class=\"fa fa-2x fa-plus-square\"></i>\r\n            ");
  }

  data.buffer.push("<div class=\"col-xs-12 col-md-3\">\r\n    <h2>Comics series</h2>\r\n\r\n    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("filter"),
    'class': ("filter form-control")
  },hashTypes:{'type': "ID",'value': "ID",'class': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n    <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sort", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"sort btn btn-icon btn-default\">\r\n        <i ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":fa sortAscending:fa-caret-down:fa-caret-up")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></i>\r\n    </button>\r\n\r\n    <ul class=\"series-listing\">\r\n        ");
  stack1 = helpers.each.call(depth0, "series", "in", "filteredContent", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        <li class=\"series-item\">\r\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'title': ("add series"),
    'class': ("add")
  },hashTypes:{'title': "STRING",'class': "STRING"},hashContexts:{'title': depth0,'class': depth0},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "series.create", options) : helperMissing.call(depth0, "link-to", "series.create", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        </li>\r\n    </ul>\r\n\r\n    <span>Number of series: ");
  stack1 = helpers._triageMustache.call(depth0, "filteredContent.length", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\r\n</div>\r\n\r\n");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});

Ember.TEMPLATES["seriesItem"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n            ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "partials/albumItem", options) : helperMissing.call(depth0, "partial", "partials/albumItem", options))));
  data.buffer.push("\r\n        ");
  return buffer;
  }

  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n<div class=\"col-xs-12 col-md-4 series-albums\">\r\n    <ul>\r\n        ");
  stack1 = helpers.each.call(depth0, "albums", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n    </ul>\r\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["seriesItem/edit"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n        <button type=\"submit\" class=\"btn btn-success btn-icon submit\">\r\n            <i class=\"fa fa-check\"></i>\r\n        </button>\r\n        <button type=\"cancel\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-danger btn-icon cancel\">\r\n            <i class=\"fa fa-times\"></i>\r\n        </button>\r\n        <div class=\"form-group title\">\r\n            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'id': ("title"),
    'type': ("text"),
    'value': ("title"),
    'class': ("form-control")
  },hashTypes:{'id': "STRING",'type': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'id': depth0,'type': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n            <span class=\"help-block\"></span>\r\n        </div>\r\n        <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("coverUrl")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" alt=\"Series's first album cover\" class=\"cover img-responsive img-thumbnail\"/>\r\n\r\n        <div class=\"series-desc\">\r\n            <div class=\"form-group\">\r\n                <label for=\"scriptwriter\" class=\"col-sm-3 control-label\">Scriptwriter</label>\r\n                <div class=\"col-sm-9\">\r\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'id': ("scriptwriter"),
    'type': ("text"),
    'value': ("scriptwriter"),
    'class': ("form-control"),
    'required': ("required")
  },hashTypes:{'id': "STRING",'type': "STRING",'value': "ID",'class': "STRING",'required': "STRING"},hashContexts:{'id': depth0,'type': depth0,'value': depth0,'class': depth0,'required': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                    <span class=\"help-block\"></span>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"illustrator\" class=\"col-sm-3 control-label\">Illustrator</label>\r\n                <div class=\"col-sm-9\">\r\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'id': ("illustrator"),
    'type': ("text"),
    'value': ("illustrator"),
    'class': ("form-control")
  },hashTypes:{'id': "STRING",'type': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'id': depth0,'type': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                    <span class=\"help-block\"></span>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"publisher\" class=\"col-sm-3 control-label\">Publisher</label>\r\n                <div class=\"col-sm-9\">\r\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'id': ("publisher"),
    'type': ("text"),
    'value': ("publisher"),
    'class': ("form-control")
  },hashTypes:{'id': "STRING",'type': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'id': depth0,'type': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                    <span class=\"help-block\"></span>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"albums\" class=\"col-sm-3 control-label\">Volumes</label>\r\n                <span class=\"col-sm-9\">\r\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'id': ("albums"),
    'type': ("text"),
    'value': ("albums.length"),
    'class': ("form-control"),
    'disabled': ("disabled")
  },hashTypes:{'id': "STRING",'type': "STRING",'value': "ID",'class': "STRING",'disabled': "STRING"},hashContexts:{'id': depth0,'type': depth0,'value': depth0,'class': depth0,'disabled': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                </span>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"series-desc\">\r\n            ");
  data.buffer.push(escapeExpression((helper = helpers.textarea || (depth0 && depth0.textarea),options={hash:{
    'value': ("summary"),
    'class': ("form-control"),
    'rows': ("10")
  },hashTypes:{'value': "ID",'class': "STRING",'rows': "STRING"},hashContexts:{'value': depth0,'class': depth0,'rows': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\r\n        </div>\r\n    ");
  return buffer;
  }

  data.buffer.push("<div class=\"col-xs-12 col-md-5 series-details\">\r\n    ");
  stack1 = (helper = helpers['validated-form'] || (depth0 && depth0['validated-form']),options={hash:{
    'class': ("form-horizontal"),
    'model': ("model"),
    'action': ("submit")
  },hashTypes:{'class': "STRING",'model': "ID",'action': "STRING"},hashContexts:{'class': depth0,'model': depth0,'action': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "validated-form", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["seriesItem/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"col-xs-12 col-md-5 series-details\">\r\n    <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "edit", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-default btn-icon edit\"><i class=\"fa fa-pencil\"></i></button>\r\n    <h3>");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h3>\r\n    <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("coverUrl")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" alt=\"Series's first album cover\" class=\"cover img-responsive img-thumbnail\"/>\r\n    <dl class=\"series-desc dl-horizontal\">\r\n        <dt>Scriptwriter</dt>\r\n        <dd>");
  stack1 = helpers._triageMustache.call(depth0, "scriptwriter", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" </dd>\r\n        <dt>Illustrator</dt>\r\n        <dd>");
  stack1 = helpers._triageMustache.call(depth0, "illustrator", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</dd>\r\n        <dt>Publisher</dt>\r\n        <dd>");
  stack1 = helpers._triageMustache.call(depth0, "publisher", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</dd>\r\n        <dt>Volumes</dt>\r\n        <dd>");
  stack1 = helpers._triageMustache.call(depth0, "albums.length", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</dd>\r\n    </dl>\r\n    <p class=\"series-desc\">\r\n        ");
  stack1 = helpers._triageMustache.call(depth0, "summary", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n    </p>\r\n</div>");
  return buffer;
  
});