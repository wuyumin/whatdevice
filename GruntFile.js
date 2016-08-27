module.exports = function(grunt) {

  // 项目配置信息
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),  // grunt读取package.json文件信息
     uglify: {  // uglify插件的配置信息
       all : {  // 名称而已~
          options: {
            banner: "/*!\n" +
 "* 上网设备检测及处理\n" +
 "* 版本：v<%= pkg.version %>\n" +
 "* 原创：吴育民\n" +
 "* 网站：www.089858.com\n" +
 "* 使用说明：https://github.com/wuyumin/whatdevice\n" +
 "*/\n",  // 版权信息
            sourceMap: false // 允许自动生成source map文件
          },
         files : {  // 将whatdevice.js压缩成whatdevice.min.js
           'whatdevice.min.js' : 'whatdevice.js'
         }
       }
     }
  });

  // 加载插件
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // 执行任务，任务名称是default
  grunt.registerTask('default', ['uglify']);

};
