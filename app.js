var express 	= require('express'),
  	routes  	= require('./routes'),
  	http 			= require('http'),
  	rack 			= require('asset-rack'),
  	bootstrap = require('bootstrap-stylus'),
  	path 			= require('path');

var assets = new rack.Rack([
  new rack.JadeAsset({
    url: '/templates.js',
    dirname: __dirname + "/assets/templates"
  }),
  new rack.StylusAsset({
    url: '/style.css',
    filename: __dirname + '/assets/css/style.styl',
    config: function(stylus) {
    	stylus.use(bootstrap())
    }
  }),
  new rack.SnocketsAsset({
    url: '/app.js',
    filename: __dirname + '/assets/js/app.js',
    compress: false
  })
]);

var app = express();

// all environments
app.set('port',	process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(assets);
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
