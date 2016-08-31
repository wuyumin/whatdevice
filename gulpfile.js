// 引入gulp
var gulp = require('gulp'),

// 引入组件
    pkg = require('./package.json'), // 读取package.json文件信息
    header = require('gulp-header'),
    banner = ['/*!',
              '* 上网设备检测及处理',
              '* 版本：v<%= pkg.version %>',
              '* 原创：吴育民',
              '* 网站：www.089858.com',
              '* 使用说明：https://github.com/wuyumin/whatdevice',
              '*/',
              ''].join('\n'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');

// 定义一个scripts任务(可以自定义任务名称)
gulp.task('scripts', function() {
    console.log('压缩JS...');
    return gulp.src('whatdevice.js')
           .pipe(uglify())
           .pipe(header(banner, { pkg : pkg } ))
           .pipe(rename({suffix:'.min'}))
           .pipe(gulp.dest('./'));
});

// 定义默认任务
gulp.task('default',['scripts']);



// gulp.task(name[, deps], fn) 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数
// gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组) 
// gulp.dest(path[, options]) 处理完后文件生成路径