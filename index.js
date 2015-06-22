var through = require('through2'),
    gutil = require('gulp-util'),
    Templator = require('markdown-templator'),
    PluginError = gutil.PluginError;


const PLUGIN_NAME = 'gulp-md-template';

function gulpTemplator (options) {

  var templator = new Templator(options);

  function process (file, enc, cb) {
    if (file.isStream()) {
      this.emit('error', new PluginError(PLUGIN_NAME, 'Streams aren\'t supported'));
    }

    if (file.isBuffer()) {
      content = templator.processFile(file.path);
      file.contents = new Buffer(content, enc);
    }

    cb(null, file);
  }

  return through.obj(process);
}

module.exports = gulpTemplator;
