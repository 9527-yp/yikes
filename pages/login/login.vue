<template>
	<view class="login">
		<view class="top-bar">
			<view class="top-bar-right" @tap="toSignup">
				<view class="text">
					注册
				</view>
			</view>
		</view>
		<view class="logo" style="padding-top:88rpx">
			<img src="../../static/images/logo01.png" alt="">
		</view>
		<view class="main">
			<view class="title">登录</view>
			<view class="slogan">您好，欢迎来到yike！</view>
			<view class="inputs">
				<input type="text" placeholder="用户名/邮箱" @blur="getUser" placeholder-style="color:#999;font-weight:400"/>
				<input type="password" placeholder="密码" @blur="getPassword" placeholder-style="color:#999;font-weight:400"/>
			</view>
			<view class="tips">输入用户或密码错误!</view>
		</view>
		<view class="submit" @tap="testFun">登录</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user:'',
				password:''
			}
		},
		methods: {
			// 后台链接测试
			testFun: function() {
				uni.requert({
					url:'http://192.168.0.3:3000/test',
					data:{},
					method:'GET',
					success:(data) => {
						console.log(data)
					}
				})
			},
			getUser: function(e) {
				this.user = e.datail.value
			},
			getPassword: function(e) {
				this.password = e.datail.value
			},
			// 跳转到注册页面
			toSignup: function() {
				uni.navigateTo({
					url: '/pages/signup/signup'
				});
			},
			login: function() {
				if(this.user && this.password){
					
				}
			}
		}
	}
</script>

<style lang="scss">
	@import "@/commons/css/mycss.scss";
	.login{
		// flex-direction: column;
		// align-items: center;
		// justify-content: center;
		padding-top: var(--status-bar-height);
	}
	.logo{
		padding-top:256rpx;
		width:194rpx;
		height:92rpx;
		margin: 0 auto;
		img{
			width:100%;
			height:100%;
		}
	}
	.main{
		padding: 54rpx $uni-spacing-row-lg 120rpx;
		.title{
			font-size:56rpx;
			color:$uni-text-color;
			line-height:80rpx;
		}
		.slogan{
			font-size:40rpx;
			color:$uni-text-color-grey;
			line-height:56rpx;
		}
		.inputs{
			padding-top:48rpx;
			input{
				height:88rpx;
				font-size:$uni-font-size-lg;
				font-weight:500;
				color:$uni-text-color;
				line-height:88rpx;
				border-bottom:1px solid $uni-border-color;
			}
		}
		.tips{
			float:left;
			font-size:$uni-font-size-lg;
			color:$uni-color-warning;
			line-height:56rpx;
		}
	}
	.submit{
		width:520rpx;
		height:96rpx;
		background:$uni-color-primary;
		box-shadow:0rpx 50rpx 32rpx -36rpx rgba(255,228,49,.4);
		border-radius:$uni-border-radius-lg;
		font-size:$uni-font-size-lg;
		color:$uni-text-color;
		line-height:96rpx;
		text-align:center;
		font-weight:500;
		margin: 0 auto;
	}
</style>
