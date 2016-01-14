/*!
 * 上网设备检测及处理
 * 版本：v2.2
 * 原创：吴育民
 * 网站：www.089858.com
 * 使用说明：https://github.com/wuyumin/whatdevice
 */
;(function(){
	var whatdevice={};
	var myUA=navigator.userAgent;
	var myReg=/(?:micromessenger|mobile|ipod|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|win ce)/i;

	/*
	* 是否移动设备：返回Boolean。
	*/
	whatdevice.isMobile=function(){
		return myReg.test(myUA);
	};

	/*
	* 跳转到手机网站：参数1是手机网站网址。
	* 使用方法：whatdevice.go2mob('手机网站网址') 若不想跳转，当前访问的URL传递参数itsme=1，如www.089858.com/?itsme=1
	*/
	whatdevice.go2mob=function(){
		var mobUrl=arguments[0];//参数1
		var myArg=[];
		myArg=window.location.search.substr(1).match(/(^|&)itsme=([^&]*)(&|$)/i);//获取URL参数itsme
		var itsme=(myArg!=null && myArg[2]!=null)?myArg[2]:0;
		if(itsme!=1 && mobUrl!=null && whatdevice.isMobile()){
			window.location.href=mobUrl;
		}
	};

	/*
	* 跳转到电脑网站：参数1是电脑网站网址。
	* 使用方法：whatdevice.go2web('电脑网站网址') 若不想跳转，当前访问的URL传递参数itsme=1，如m.089858.com/?itsme=1
	*/
	whatdevice.go2web=function(){
		var webUrl=arguments[0];//参数1
		var myArg=[];
		myArg=window.location.search.substr(1).match(/(^|&)itsme=([^&]*)(&|$)/i);//获取URL参数itsme
		var itsme=(myArg!=null && myArg[2]!=null)?myArg[2]:0;
		if(itsme!=1 && webUrl!=null && !whatdevice.isMobile()){
			window.location.href=webUrl;
		}
	};

	/*
	* 是否微信浏览器：返回Boolean。
	*/
	whatdevice.isWechat=function(){
		return /(?:micromessenger)/i.test(myUA);
	};
	
	/*注册全局变量*/
	window.whatdevice=whatdevice;
})();