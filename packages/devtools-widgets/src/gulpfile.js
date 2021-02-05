const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const ts = require('gulp-typescript');
const merge = require('merge2');
const { join } = require('path');

process.env.BABEL_ENV = 'production';

module.exports = (importModules = []) => {
  const babelPlugins = importModules.length > 0 ? [['import', importModules]] : [];

  const plugins = ['transform-es2015-modules-commonjs'];
  if (babelPlugins.length > 0) {
    plugins.push(...babelPlugins);
  }

  gulp.task('ts', () => {
    const cwd = process.cwd();
    const tsProject = ts.createProject(join(cwd, 'tsconfig.json'));
    const tsResult = gulp.src(['src/widgets/**/*.ts', 'src/widgets/**/*.tsx']).pipe(tsProject()).on('error', (error) => {
      console.error('TS编译存在错误');
    });

    return merge([
      tsResult.dts.pipe(gulp.dest('dist')),
      tsResult.js
      .pipe(
        babel({
          presets: ['react-app'],
          plugins,
        })
      )
      .pipe(uglify())
      .pipe(gulp.dest('dist')),
    ]);
  });
  gulp.task('js', () => {
    return gulp
    .src(['src/widgets/**/*.js'])
    .pipe(
      babel({
        presets: ['react-app'],
        plugins,
      })
    )
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
  });
  gulp.task('css', () => {
    return gulp.src('src/widgets/**/*.css').pipe(gulp.dest('dist'));
  });
  gulp.task('meta', () => {
    return gulp.src('src/widgets/**/*.json').pipe(gulp.dest('dist'));
  });
  gulp.task('font', () => {
    return gulp
    .src([
      'src/widgets/**/*.ttf',
      'src/widgets/**/*.eot',
      'src/widgets/**/*.svg',
      'src/widgets/**/*.png',
      'src/widgets/**/*.jpg',
      'src/widgets/**/*.woff',
      'src/widgets/**/*.woff2',
    ])
    .pipe(gulp.dest('dist'));
  });
  gulp.task('interface', () => {
    return gulp.src(['src/interface/*.js', 'src/interface/*.json']).pipe(gulp.dest('interface'));
  });
  return gulp.series('js', 'ts', 'css', 'font', 'interface', 'meta');
};
