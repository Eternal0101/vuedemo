<template>
	<div class="login">
		<header>
			<div class="content_box">
				<div class='logo fl'>
					<img src="../assets/logo.png"/>
					<span>欢迎登录纵运服务平台</span>
				</div>
				<div class="fr">
					<a href='javascript:;'>返回首页</a>
				</div>
				<div class="clear"></div>
			</div>
		</header>
		<div class='loginContent clear'>
	  	<div class="login_warp fr">
				<div class="loginbox fl">
					<div class="login_header">
					<span @click="cur=0" :class="{active:cur==0}">司机</span>
					<span @click="cur=1" :class="{active:cur==1}">合作商家</span>
					<span @click="cur=2" :class="{active:cur==2}">区域代理</span>
					</div>
					<div class="login_content">
						<div class='tabItem' v-show="cur==0" >
							<div class="Cbody_item">
								<div class="form_item">
									<span>账号:</span>
									<input type="text" name="fname" placeholder="请输入账号">
								</div>
								<div class="form_item">
									<span>密码:</span>
									<input type="password" name="fpassword" placeholder="请输入密码">
								</div>
							</div>
							<div class="form_item changeWay">
								<div class="fl pl10">切换验证码登录</div>
								<div class="fr pr10"><a href="javascript:;">忘记密码</a></div>
							</div>
							<div class="clear"></div>
							<div class="form_item">
								<input type="submit" name="" value="登录">
							</div>
							<div class="tips">用户注册下载app申请</div>
						</div>
						<div class='tabItem' v-show="cur==1" >
							<div class="Cbody_item">
								<div class="form_item">
									<span>账号:</span>
									<input type="text" name="fname" placeholder="请输入账号">
								</div>
								<div class="form_item">
									<span>密码:</span>
									<input type="password" name="fpassword" placeholder="请输入密码">
								</div>
							</div>
							<div class="form_item changeWay">
								<div class="fl pl10">切换验证码登录</div>
								<div class="fr pr10"><a href="javascript:;">忘记密码</a></div>
							</div>
							<div class="clear"></div>
							<div class="form_item">
								<input type="submit" name="" value="登录">
							</div>
							<div class="tips">用户注册下载app申请</div>
						</div>
						<div class='tabItem' v-show="cur==2" >
							<div class="Cbody_item">
								<div class="form_item">
									<span>账号:</span>
									<input type="text" name="fname" placeholder="请输入账号">
								</div>
								<div class="form_item">
									<span>密码:</span>
									<input type="password" name="fpassword" placeholder="请输入密码">
								</div>
							</div>
							<div class="form_item changeWay">
								<div class="fl pl10">切换验证码登录</div>
								<div class="fr pr10"><a href="javascript:;">忘记密码</a></div>
							</div>
							<div class="clear"></div>
							<div class="form_item">
								<input type="submit" name="" value="登录">
							</div>
							<div class="tips">用户注册下载app申请</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import data from '../data/data.js';
	import getData from '../data/return_data.js'
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      cur:0
      
    }
  },
  methods:{
  	getNowFormatDate:function() {
	    var date = new Date();
	    var seperator = "-";
	    var month = date.getMonth() + 1;
	    var strDate = date.getDate();
	    if (month >= 1 && month <= 9) {
	        month = "0" + month;
	    }
	    if (strDate >= 0 && strDate <= 9) {
	        strDate = "0" + strDate;
	    }
	    var currentdate = date.getFullYear() + seperator + month + seperator + strDate;
	    return currentdate;
		}
  },
  mounted(){
		getData.postRequest(data.API.URL_POST_SETTOKEN,'post',{ version: '2.0.1', author: '丶Lee',email: '1144318071@qq.com', date: this.getNowFormatDate,}).then(function(res){
			console.log(res)
		})

  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.logo span{
		margin-left: 70px;
	}
	header{
		height: 90px;
    line-height: 90px;
    background-color: #fff;
	}
	.content_box{
		width: 1200px;
		margin: 0 auto;
	}
	.loginContent{
    width: 100%;
		height: 666px;
		background-image: url(../assets/loginBg.png);
		background-repeat: no-repeat;
	}
.pl10{
	padding-left: 10px;
}
.pr10{
	padding-right: 10px;
}
.fl{
	float: left;
}
.fr{
	float: right;
}
.clear{
	clear: both;
}
a{
	text-decoration: none;
	color: #333;
	transition: ease all 0.5s;
}
.login_header{
	margin-bottom: 40px;
	height: 70px;
	line-height: 70px;
	font-size: 20px;
	padding-left: 18px;
	border-bottom: 1px solid #999;
}
.login_header span{
	margin-right: 56px;
	cursor: pointer;
	min-width: 65px;
	padding: 0 15px 22px;
}
.loginbox{
	width: 450px;
	overflow: hidden;
}
.Cbody_item{
	border: 0px solid #999;
	overflow: hidden;
}
.form_item{
	font-size: 16px;
}
.form_item input[type="text"],.form_item input[type="password"]{
	display: inline-block;
	width: 298px;
	height: 36px;
	margin:0 auto; 
	padding-left: 16px;
	outline: none;
	border: 1px solid #999;
	transition: ease all 0.5s;
	margin-bottom: 20px;
	border-radius:4px ;
}
.form_item input[type="text"]:focus,.form_item input[type="password"]:focus{
	border: 1px solid #1c65ff
}
.form_item input[type="submit"]{
	display: inline-block;
	width: 352px;
	height: 38px;
	line-height: 38px;
	text-align: center;
	margin-left: 46px; 
	outline: none;
	border: 1px solid #f57619;
	transition: ease all 0.5s;
	margin-top: 30px;
	margin-bottom: 30px;
	background-color: #fff;
	color: #f57619;
	cursor: pointer;
	border-radius: 4px;
}
.active{
	color: #f57619;
	border-bottom: 3px solid #f57619;
}
.loginrslider{
	width: 160px;
	height: 322px;
	background-color: #1c65ff;
}
.login_warp{
	width: 450px;
	box-shadow: 0 0px 0px #ccc;
	overflow: hidden;
	transition: ease all 0.5s;
	position: relative;
	top: 0px;
	cursor: pointer;
	background-color: #fff;
	margin-top: 122px;
	margin-right: 204px;
}
/*.login_warp:hover{
	top: -30px;
	box-shadow: 0 15px 21px #ccc;
}*/
.loginrslider{
	color: #fff;

}
.qcode{
	width: 160px;
	height: 160px;
	background-color: #ccc;
	margin: 0 auto;
	margin-top: 2px;
}
.beizhu{
	text-align: center;
	font-size: 16px;
	margin-top: 10px;
	color: #999
}
.Cbody_item{
	padding-left: 46px;
}
.tips{
    width: 450px;
    height: 26px;
    line-height: 26px;
    text-align: center;
    color: #fff;
    background-color: #f57619;
}
</style>
