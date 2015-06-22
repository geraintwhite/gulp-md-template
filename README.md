# gulp-md-template
Gulp plugin uses [markdown-templator](https://github.com/grit96/markdown-templator) to include markdown files in an HTML template

## Installation
```sh
$ npm install gulp-md-template
```

## Gulpfile

```javascript
var gulp = require('gulp'),
    template = require('gulp-md-template');

gulp.task('default', function () {
    return gulp.src('./*.html')
      .pipe(template('./partials'))
      .pipe(gulp.dest('./dist'));
});
```


## Example Usage

You can include markdown files into an HTML template so that this:

```html
<!-- ./index.html -->

<head>
  <title>Example</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>
  {{header}}
  <div class="container">
    {{article.md}}
  </div>
</body>
```

```markdown
<!-- ./partials/header.md -->

![Logo](logo.png)
## TITLE
```

```markdown
<!-- ./partials/article.md -->

This is an article about this stuff:

- Item of intereset
- Another item of interest
- An item of non-interest
```

Transforms to this:

```html
<!-- ./dist/index.html -->

<head>
  <title>Example</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <p><img src="logo.png" alt="Logo"></p>
<h2 id="title">TITLE</h2>

  <div class="container">
    <p>This is an article about this stuff:</p>
<ul>
<li>Item of intereset</li>
<li>Another item of interest</li>
<li>An item of non-interest</li>
</ul>

  </div>
</body>
```


## How to contribute

1. File an issue in the repository, using the bug tracker, describing the
   contribution you'd like to make. This will help us to get you started on the
   right foot.
2. Fork the project in your account and create a new branch:
   `your-great-feature`.
3. Commit your changes in that branch.
4. Open a pull request, and reference the initial issue in the pull request
   message.

## License
See the [LICENSE](./LICENSE) file.
