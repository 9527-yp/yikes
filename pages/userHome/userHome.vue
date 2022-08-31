<template>
	<view class="userHome">
		<view class="top-bar">
			<view class="top-bar-left" @tap="toBack">
				<view class="back"></view>
			</view>
			<view class="top-bar-right" @tap="toUserDetail">
				<img class="more" src="../../static/images/more.png" alt="">
			</view>
		</view>
		<view class="bg">
			<view class="bg-bai" :animation="animationData3"></view>
			<img class="bg-img" src="../../static/img/baby01.jpg" mode="aspectFill" alt="">
		</view>
		<view class="main">
			<view class="user-img" :animation="animationData1">
				<img class="img" src="../../static/img/baby01.jpg" mode="aspectFill" alt="">
				<view :animation="animationData2" class="sexbg" :style="{background:sexbg}"><img class="sex-img" src="../../static/images/girl.png" alt=""></view>
			</view>
			<view class="title">左左左表妹</view>
			<view class="nickname">昵称：很好搭档</view>
			<view class="introduce">夜，借结束了一天的喧嚣后安静了下来，伴随着远处路灯那微弱的光。风，毫无预兆的席卷整片的旷野，撩动人的思绪万千。</view>
			<view class="addFriend" @tap="addFriendAnimat">加为好友</view>
		</view>
		<view class="add-friend" :animation="animationData" :style="{height:addHeight + 'px',bottom:-addHeight + 'px'}">
			<view class="name">左左左表妹</view>
			<textarea :value="myname + '，请求加为好友~'" maxlength="120" class="add-main"></textarea>
		</view>
		<view class="add-btn" :animation="animationDataBtn">
			<view class="close" @tap="addFriendAnimat">取消</view>
			<view class="send">发送</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				sexbg:'#FF5D5B',
				addHeight:'',  // 节点高度
				animationData:{},   // 动画
				animationDataBtn:{}, // 发送 取消动画
				animationData1:{},   // 动画
				animationData2:{},   // 动画
				animationData3:{},   // 动画
				isAnimat:false, // 弹框的显示隐藏判断
				myname:'春雨借结束了一天的喧嚣后安静了下来，伴随着远处路灯那微弱的光。风，毫无预兆的席卷整片的旷野，撩动人的思绪万千',
			}
		},
		onReady(){
			this.getElementStyle()
		},
		methods: {
			toBack: function(){
				uni.navigateBack({
					delta: 1
				});
			},
			toUserDetail: function() {
				uni.navigateTo({
					url: '/pages/userDetails/userDetails'
				});
			},
			// 获取节点信息
			getElementStyle: function() {
				const query = uni.createSelectorQuery().in(this);
				query.select('.bg').boundingClientRect(data => {
				  // console.log("得到布局位置信息" + JSON.stringify(data));
				  // console.log("节点离页面顶部的距离为" + data.top);
				  this.addHeight = data.height - 186;
				}).exec();
			},
			// 添加好友动画
			addFriendAnimat: function(){
				this.isAnimat = !this.isAnimat
				var animation = uni.createAnimation({
					duration: 400,
					timingFunction: 'ease',
				})
				
				var animationBtn = uni.createAnimation({
					duration: 400,
					timingFunction: 'ease',
				})
				var animation1 = uni.createAnimation({
					duration: 400,
					timingFunction: 'ease',
				})
				var animation2 = uni.createAnimation({
					duration: 400,
					timingFunction: 'ease',
				})
				var animation3 = uni.createAnimation({
					duration: 400,
					timingFunction: 'ease',
				})
				if(this.isAnimat){
					animation.bottom(0).step()
					animationBtn.bottom(10).step()
					animation1.width(120).height(120).top(40).step()
					animation2.opacity(0).step()
					animation3.backgroundColor('rgba(255,228,49,0.6)').step()
				}else{
					animation.bottom(-this.addHeight).step()
					animationBtn.bottom(-100).step()
					animation1.width(200).height(200).top(0).step()
					animation2.opacity(1).step()
					animation3.backgroundColor('rgba(255,228,49,0)').step()
				}
				this.animationData = animation.export()
				this.animationDataBtn = animationBtn.export()
				this.animationData1 = animation1.export()
				this.animationData2 = animation2.export()
				this.animationData3 = animation3.export()
			}
		}
	}
</script>

<style lang="scss">
	@import '@/commons/css/mycss.scss';
	.userHome{
		box-sizing: border-box;
		width:100%;
		height:100%;
		overflow: hidden;
		padding-top: var(--status-bar-height);
		.more{
			width:52rpx;
			height:12rpx !important;
		}
		.top-bar-right{
			padding-right:32rpx;
		}
		.bg{
			position:fixed;
			top:0;
			left:0;
			width:100%;
			height:100%;
			z-index: -2;
			.bg-bai{
				width:100%;
				height:100%;
				
			}
			.bg-img{
				position:absolute;
				top:-10rpx;
				left:-10rpx;
				width:110%;
				height:110%;
				filter:blur(8px);
				z-index: -1;
				opacity: .4;
			}
		}
		.main{
			margin-top:148rpx;
			width:100%;
			display: flex;
			flex-direction:column;
			align-items:center;
			.user-img{
				position:relative;
				width:400rpx;
				height:400rpx;
				top:0;
				border-radius:48rpx;
				border: 6rpx solid #FFFFFF;
				z-index: 13;
				.img{
					width:100%;
					height:100%;
					border-radius:48rpx;
					
				}
				.sexbg{
					width:64rpx;
					height:64rpx;
					border-radius:50%;
					position:absolute;
					bottom:16rpx;
					right:16rpx;
					display:flex;
					align-items:center;
					justify-content: center;
					.sex-img{
						width:32rpx;
						height:32rpx;
					}
				}
			}
			.title{
				margin-top:42rpx;
				font-size: 52rpx;
				color: #272832;
			}
			.nickname{
				font-size: 28rpx;
				color: #272832;
			}
			.introduce{
				margin-top:20rpx;
				width:552rpx;
				font-size: 28rpx;
				color: #272832;
			}
			.addFriend{
				position:fixed;
				bottom:10rpx;
				width:90%;
				height:80rpx;
				background: #FFE431;
				border-radius:10px;
				margin: 0 auto;
				text-align:center;
				line-height:80rpx;
				padding-bottom:var(--status-bar-height);
			}
		}
		.add-friend{
			width:100%;
			// height: 952rpx;
			background: #FFFFFF;
			box-sizing:border-box;
			padding: 0 56rpx;
			position:fixed;
			// bottom:0;
			left:0;
			.name{
				color: #272832;
				padding-top:168rpx;
				font-size: 52rpx;
			}
			.add-main{
				// width: 100%;
				margin-top:40rpx;
				height: 320rpx;
				background: #F3F4F6;
				border-radius: 20px;
				padding: 18rpx 20rpx;
				font-size:32rpx;
				color: #272832;
			}
		}
		.add-btn{
			position:fixed;
			bottom:-100rpx;
			width:100%;
			box-sizing:border-box;
			height:80rpx;
			font-size: 32rpx;
			padding: 0 34rpx;
			padding-bottom:var(--status-bar-height);
			.close{
				width:172rpx;
				height:80rpx;
				float:left;
				text-align:center;
				line-height:80rpx;
				background: rgba(39,40,50,0.10);
				border-radius: 10px;
			}
			.send{
				width:480rpx;
				height:80rpx;
				float:right;
				text-align:center;
				line-height:80rpx;
				background: #FFE431;
				border-radius: 10px;
			}
		}
	}
</style>
