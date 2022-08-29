<template>
	<view class="login">
		<view class="top-bar">
			<view class="top-bar-left" @tap="tologin">
				<view class="back"></view>
			</view>
		</view>
		<view class="logo" style="padding-top:88rpx">
			<img src="../../static/images/logo01.png" alt="">
		</view>
		<view class="main">
			<view class="title">注册</view>
			<view class="inputs">
				<view class="inputs-div">
					<input v-model="user" type="text" placeholder="请取个名字" @input="blurUser" class="user" placeholder-style="color:#999;font-weight:400"/>
					<view v-if="useremploy" class="employ">已占用</view>
					<img v-if="isUser" src="../../static/images/ok.png" class="ok" alt="">
				</view>
				<view class="inputs-div">
					<input v-model="email" type="text" placeholder="请输入邮箱" @input="blurEmail" class="email" placeholder-style="color:#999;font-weight:400"/>
					<view v-if="emailemploy" class="employ">已占用</view>
					<view class="invalid" v-if="invalid">邮箱无效</view>
					<img v-if="isEmail" src="../../static/images/ok.png" class="ok" alt="">
				</view>
				<view class="inputs-div">
					<input :type="type" placeholder="请输入密码" @input="blurPassword" class="psw" placeholder-style="color:#999;font-weight:400"/>
					<img v-if="look" src="../../static/images/look.png" class="look" @tap="isLook" alt="">
					<img v-if="!look" src="../../static/images/look.png" class="look" @tap="isLook" alt="">
				</view>
			</view>
		</view>
		<view :class="[{submit:isOk},{submit1:!isOk}]">注册</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type:'password',
				user:'',
				email:'',
				password:'',
				isUser:false, // 用户名是否占有
				isEmail:false,  // 邮箱是否占有
				look:false,  // 密码是否可查看
				invalid:false, // 邮箱是否符合
				useremploy:false,
				emailemploy:false,
				isOkShow:false
			}
		},
		methods: {
			isLook: function(){
				this.look = !this.look
				if(this.look){
					this.type = 'password'
				}else{
					this.type = 'text'
				}
			},
			blurEmail: function(e){
				console.log(e.detail.value)
				console.log(this.email)
				let reg = /^[a-zA-Z0-9]+([-_.][A-Za-zd]+)*@([a-zA-Z0-9]+[-.])+[A-Za-zd]{2,5}$/
				if(this.email.length > 0){
					if(reg.test(this.email)){
						console.log('邮箱正确')
						this.invalid = false
						this.isOk()
					}else{
						console.log('邮箱不正确')
						this.invalid = true
					}
				}
			},
			blurUser: function(e) {
				this.user = e.detail.value
				this.isOk()
			},
			// 获取密码value
			blurPassword: function(e) {
				this.password = e.detail.value
				this.isOk()
			},
			isOk: function(){
				if(this.isUser && this.isEmail && this.password.length > 5){
					this.isOkShow = true
				}else{
					this.isOkShow = false
				}
			},
			// 返回登录页
			tologin: function() {
				uni.navigateBack({
					delta: 1
				});
			}
		}
	}
</script>

<style lang="scss">
	@import "@/commons/css/mycss.scss";
	.login{
		flex-direction: column;
		align-items: center;
		justify-content: center;
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
		.inputs-div{
			position:relative;
		}
		.employ,.invalid{
			position:absolute;
			top:5rpx;
			right:0;
			font-size:$uni-font-size-base;
			font-weight:500;
			color:$uni-color-warning;
			line-height:88rpx;
		}
		.ok,.look{
			width:38rpx;
			height:30rpx;
			position:absolute;
			right:0;
			top:35rpx;
		}
		.look{
			width:55rpx;
			height:36rpx;
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
		margin: 0 auto;
	}
	.submit1{
		width:520rpx;
		height:96rpx;
		background:$uni-bg-color-hover;
		border-radius:$uni-border-radius-lg;
		font-size:$uni-font-size-lg;
		color:$uni-text-color-inverse;
		line-height:96rpx;
		text-align:center;
		margin: 0 auto;
	}
</style>
