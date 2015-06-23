var test = require('tape'),
    gulp = require('gulp'),
    through = require('through2'),
    fs = require('fs'),
    template = require('../');


function process (filename, options, st) {
  var input = 'test/fixtures/' + filename,
      output = 'test/expected/' + filename;

  gulp.src(input).pipe(template(options)).pipe(through.obj(function (file, enc) {
    var actual = file.contents.toString(enc);

    fs.readFile(output, function (err, data) {
      st.equal(actual, data.toString(enc), 'processed content should match expected');
      st.end();
    });
  }));
}


test('template process', function (t) {

  t.test('process file with no includes', function (st) {
    process('no-includes.html', {}, st);
  });

  t.test('process file with no path resolutions', function (st) {
    process('no-resolve.html', {}, st);
  });

  t.test('process file with includes', function (st) {
    process('includes.html', 'test/fixtures/includes', st);
  });

  t.test('process file with includes without .md', function (st) {
    process('no-md.html', 'test/fixtures/includes', st);
  });

  t.test('process file with relative includes', function (st) {
    process('relative.html', {}, st);
  });

});
