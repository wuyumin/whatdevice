# 上网设备检测及处理
[![NPM version][npm-image]][npm-url]  
一个JS文件，支持自动检测并跳转到手机网站或电脑网站，是否手机或电脑访问，是否微信访问，是否微信小程序访问等功能。  
  
whatdevice.min.js 是压缩后的代码（正式环境建议使用，省一点带宽）  
whatdevice.js 是源代码  
  
  
### 参与开发
注册并登录 GitHub 帐号，fork 本项目进行参与开发。  
更多细节请参考《[GitHub 上如何参与开源](https://github.com/wuyumin/tutorial/blob/master/zh-cn/Git/pullrequest.md)》这篇文章。  

### 演示
访问网址：<https://wuyumin.github.io/whatdevice/docs/example.html>  
扫描二维码  
![二维码](https://wuyumin.github.io/whatdevice/docs/assets/img/qrcode.png "二维码")  

### 如何使用
`建议将代码放在网页代码的 head 区`  
  

第1步：加载 JS 文件(注：GitHub 链接不稳定，请使用你的 whatdevice.min.js 资源路径)
```javascript
<script src="https://wuyumin.github.io/whatdevice/whatdevice.min.js"></script>
```
第2步：使用对应的方法
```javascript
<script>

//跳转到手机网站(在电脑网页里使用)
//特殊情况：当前访问的URL传递参数itsme=1就不跳转了
whatdevice.go2mob('手机网站网址');

//跳转到电脑网站(在手机网页里使用)
//特殊情况：当前访问的URL传递参数itsme=1就不跳转了
whatdevice.go2web('电脑网站网址');

//识别手机或电脑
if(whatdevice.isMobile){
    //手机
}else{
    //电脑
}

//识别微信访问
if(whatdevice.isWechat){
    //微信
}

//识别微信小程序
if(whatdevice.isMiniProgram){
    //微信小程序
}

//识别手机
if(whatdevice.isMobile){
    alert('你是手机访问的');
}

//识别苹果手机
if(whatdevice.isiOS){
    alert('你是苹果手机');
}

//识别安卓手机
if(whatdevice.isAndroid){
    alert('你是安卓手机');
}

//识别电脑
if(!whatdevice.isMobile){
    alert('你是电脑访问的');
}

</script>
```

[npm-url]: https://www.npmjs.com/package/whatdevice
[npm-image]: https://img.shields.io/npm/v/whatdevice.svg
