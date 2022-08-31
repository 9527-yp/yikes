<template>
	<view class="userDetails">
		<view class="top-bar">
			<view class="top-bar-left" @tap="toBack">
				<view class="back"></view>
			</view>
			<view class="top-bar-center">
				详情
			</view>
			<view class="top-bar-right" @tap="">
				
			</view>
		</view>
		<view class="main ">
			<view class="header information">
				<view class="header-list portrait">
					<view class="header-left">
						<view class="text">头像</view>
						<view class="head-img" @click="selectImg">
							<image-cropper 
								id="image-cropper" 
								:zoom="1" 
								:angle="0"
								canvasBackground="red" 
								@cropped="cropped" 
								@afterDraw="afterDraw" 
								@beforeDraw="beforeDraw" 
								:src="imgDataUrl" 
								alt=""
							/>
						</view>
					</view>
					<view class="header-right"></view>
				</view>
				<view class="header-list signature" @tap="getValue('签名')">
					<view class="header-left">
						<view class="text">签名</view>
						<view class="signature-text">{{ dataArr.signature }}</view>
					</view>
					<view class="header-right"></view>
				</view>
				<view class="header-list registered">
					<view class="header-left">
						<view class="text">注册</view>
						<view class="signature-text">{{ dataArr.registered }}</view>
					</view>
				</view>
			</view>
			<view class="conent information">
				<view class="header-list registered" @tap="getValue('昵称')">
					<view class="header-left">
						<view class="text">昵称</view>
						<view class="signature-text">{{ dataArr.nickname }}</view>
					</view>
					<view class="header-right"></view>
				</view>
				<view class="header-list registered">
					<view class="header-left">
						<view class="text">性别</view>
						<view class="signature-text">
							<picker @change="bindPickerChange" :value="index" :range="sexArr">
								<view class="uni-input">{{sexArr[index]}}</view>
							</picker>
						</view>
					</view>
					<view class="header-right"></view>
				</view>
				<view class="header-list registered">
					<view class="header-left">
						<view class="text">生日</view>
						<view class="signature-text">
							<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
								<view class="uni-input">{{date}}</view>
							</picker>
						</view>
					</view>
					<view class="header-right"></view>
				</view>
				<view class="header-list registered" @tap="getValue('电话')">
					<view class="header-left">
						<view class="text">电话</view>
						<view class="signature-text">{{ dataArr.phone }}</view>
					</view>
					<view class="header-right"></view>
				</view>
				<view class="header-list registered" @tap="getValue('邮箱')">
					<view class="header-left">
						<view class="text">邮箱</view>
						<view class="signature-text">{{ dataArr.email }}</view>
					</view>
					<view class="header-right"></view>
				</view>
			</view>
			<view class="foot information">
				<view class="header-list registered">
					<view class="header-left">
						<view class="text">密码</view>
						<view class="password-text">········</view>
					</view>
					<view class="header-right"></view>
				</view>
			</view>
		</view>
		<view class="exit">
			<view>退出应用</view>
		</view>
		<view class="modify" :animation="animationData">
			<view class="modify-header">
				<view class="close" @tap="modifyAnimation">取消</view>
				<view class="title">{{ title }}</view>
				<view class="define" @tap="confirm">确认</view>
			</view>
			<view class="modify-content">
				<input type="text" class="modify-input" v-model="psw" placeholder="请输入原密码"/>
				<textarea v-model="value" class="modfy-textarea" name="" placeholder="请输入需要填写的信息"></textarea>
			</view>
		</view>
	</view>
</template>

<script>
	import ImageCropper from '@/components/uniapp-nice-cropper/cropper.vue'
	export default {
		components: {
			ImageCropper
		},
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				sexArr:['男','女','未知'],
				index:0,
				date: currentDate,
				imgDataUrl: "../../static/img/baby01.jpg",
				value:'', // 修改的值
				psw:'', // 修改的密码
				animationData:{},   // 动画
				isAnimat:false, // 弹框的显示隐藏判断
				dataArr:{
					signature:'结束了一天的喧嚣后安静了下来', // 签名
					registered:'2022-12-23 14:12:28', // 注册时间
					nickname:'左左左表妹', // 昵称
					phone:'12345678912', // 电话
					email:'1234567891@qq.com', // 邮箱
					password:'123456' // 密码
				},
				title:'',
			}
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		methods: {
			toBack: function(){
				uni.navigateBack({
					delta: 1
				});
			},
			// 性别选择
			bindPickerChange: function(e) {
				// console.log('picker发送选择改变，携带值为', e.detail.value)
				this.index = e.detail.value
			},
			// 出生日期选择
			bindDateChange: function(e) {
				this.date = e.detail.value
			},
			
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
				
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			// 修改调用方法
			getValue: function(e) {
				this.title = e
				if(this.title == '签名'){
					this.value = this.dataArr.signature
				}else if(this.title == '昵称'){
					this.value = this.dataArr.nickname
				}else if(this.title == '电话'){
					this.value = this.dataArr.phone
				}else if(this.title == '邮箱'){
					this.value = this.dataArr.email
				}
				this.modifyAnimation()
			},
			// 确认修改
			confirm: function() {
				if(this.title == '签名'){
					this.dataArr.signature = this.value
				}else if(this.title == '昵称'){
					this.dataArr.nickname = this.value
				}else if(this.title == '电话'){
					this.dataArr.phone = this.value
				}else if(this.title == '邮箱'){
					this.dataArr.email = this.value
				}
				this.modifyAnimation()
			},
			// 修改项动画
			modifyAnimation: function() {
				this.isAnimat = !this.isAnimat
				var animation = uni.createAnimation({
					duration: 400,
					timingFunction: 'ease',
				})
				
				if(this.isAnimat){
					animation.top('0').step()
				}else{
					animation.top("100%").step()
				}
				this.animationData = animation.export()
			},
			selectImg() {
				uni.chooseImage({
					count: 1,
					sizeType: ['original','compressed'],
					sourceType: ['album', 'camera'],
					success: res => {
					  var tempFilePaths = res.tempFilePaths
					  this.src = tempFilePaths[0]
					}
				})
			},
			beforeDraw(context, transform) {
				context.setFillStyle('yellow')
				transform.zoom = 2
			},
			afterDraw(ctx, info) {
				ctx.fillText('我是一行文字水印', 20, 20)
				console.log(`当前画布大小：${info.width}*${info.height}`)
			},
			cropped(imagePath, imageInfo) {
				console.log(imagePath, imageInfo)
			},
			
		}
	}
</script>

<style lang="scss">
	@import '@/commons/css/mycss.scss';
	.userDetails{
		width:100%;
		height:100%;
		overflow: hidden;
		padding-top: var(--status-bar-height);
	}
	.top-bar{
		background:#fff;
		border-bottom:1px solid #e1e1e1;
	}
	.top-bar-center{
		line-height:88rpx;
		font-size: 40rpx;
		color: #272832;
	}
	.main{
		width: 100%;
		height:100%;
		box-sizing:border-box;
		padding-top: 88rpx;
		.header{
			padding: 42rpx 32rpx 0;
			border-bottom:1px solid #e1e1e1;
		}
		.conent{
			padding: 10rpx 32rpx 0;
			border-bottom:1px solid #e1e1e1;
		}
		.foot{
			padding: 10rpx 32rpx 0;
			border-bottom:1px solid #e1e1e1;
		}
		.information{
			.header-list{
				width:100%;
				display:flex;
				align-items:center;
				justify-content: space-between;
				.head-img{
					width:108rpx;
					height:108rpx;
					border-radius:20rpx;
					overflow: hidden;
					img{
						width:100%;
						height:100%;
					}
				}
				.header-left{
					display:flex;
					align-items:center;
					width:90%;
					.text{
						margin-right:32rpx;
						font-size:32rpx;
					}
				}
				.header-right{
					width:28rpx;
					height:28rpx;
					background:red;
					img{
						width:100%;
						height:100%;
					}
				}
				.signature-text{
					width:80%;
					color: rgba(39,40,50,0.60);
					display:-webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp:1;
					overflow: hidden;
				}
				.password-text{
					font-size:32rpx;
					font-weight:700;
				}
			}
			.portrait{
				height:148rpx;
			}
			.signature{
				height:124rpx;
			}
			.registered{
				height:112rpx;
			}
		}
	}
	.exit{
		height:100rpx;
		margin: 0 auto;
		color: #FF5D5B;
		font-size:32rpx;
		line-height:80rpx;
		text-align:center;
		margin-top:160rpx;
		padding-bottom:var(--status-bar-height);
	}
	.modify{
		width:100%;
		height:100%;
		position:fixed;
		top:100%;
		left:0;
		background:#fff;
		z-index: 1000;
		.modify-header{
			width:100%;
			padding: 0 32rpx;
			box-sizing:border-box;
			height:88rpx;
			font-size:32rpx;
			color: #272832;
			box-shadow: 0px 1px 0px 0px rgba(0,0,0,0.1);
			display: flex;
			align-items:center;
			justify-content: space-between;
			.title{
				font-size: 40rpx;
			}
			.define{
				color: #4AAAFF;
			}
		}
		.modify-content{
			.modfy-textarea{
				width: 85%;
				height: 386rpx;
				background: #F3F4F6;
				border-radius: 20rpx;
				font-size:32rpx;
				color: #272832;
				margin: 0 auto;
				margin-top:34rpx;
				padding: 16rpx 22rpx;
			}
			.modify-input{
				width: 85%;
				height:88rpx;
				background: #F3F4F6;
				border-radius: 20rpx;
				font-size:32rpx;
				color: #272832;
				margin: 0 auto;
				margin-top:34rpx;
				padding: 0 22rpx;
			}
		}
	}

</style>
