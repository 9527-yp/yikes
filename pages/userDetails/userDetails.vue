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
							<image
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
				<view class="header-list signature">
					<view class="header-left">
						<view class="text">签名</view>
						<view class="signature-text">春雨借结束了一天的喧嚣后安静了下来，伴随着远处路灯那微弱的光。风</view>
					</view>
					<view class="header-right"></view>
				</view>
				<view class="header-list registered">
					<view class="header-left">
						<view class="text">注册</view>
						<view class="signature-text">2022-12-23 14:23:56</view>
					</view>
				</view>
			</view>
			<view class="conent information">
				<view class="header-list registered">
					<view class="header-left">
						<view class="text">昵称</view>
						<view class="signature-text">左左左表妹</view>
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
				<view class="header-list registered">
					<view class="header-left">
						<view class="text">电话</view>
						<view class="signature-text">12345678912</view>
					</view>
					<view class="header-right"></view>
				</view>
				<view class="header-list registered">
					<view class="header-left">
						<view class="text">邮箱</view>
						<view class="signature-text">1234567891@qq.com</view>
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
			}
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
</style>
