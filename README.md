###上网设备检测及处理  
一个JS文件，支持自动检测并跳转到手机网站或电脑网站，是否手机或电脑访问，是否微信访问等功能。  
  
whatdevice.min.js是压缩后的代码  
  
whatdevice.js是源代码  
  
示例：  
```javascript
//加载JS文件
<script src="whatdevice.min.js"></script>

<script>

//跳转到手机网站(在电脑网页里使用)
//特殊情况：当前访问的URL传递参数itsme=1就不跳转了
whatdevice.go2mob('手机网站网址');

//跳转到电脑网站(在手机网页里使用)
//特殊情况：当前访问的URL传递参数itsme=1就不跳转了
whatdevice.go2web('电脑网站网址');

//识别手机或电脑
if(whatdevice.isMobile()){
	//手机
}else{
	//电脑
}

//识别微信访问
if(whatdevice.isWechat()){
	//微信
}

//识别手机
if(whatdevice.isMobile()){
	alert('你是手机访问的');
}

//识别电脑
if(!whatdevice.isMobile()){
	alert('你是电脑访问的');
}

</script>
```