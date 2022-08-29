<template>
	<view class="userHome">
		<view class="top-bar">
			<view class="top-bar-left" @tap="tologin">
				<view class="back"></view>
			</view>
			<view class="top-bar-right" @tap="toBack">
				<img class="more" src="../../static/images/more.png" alt="">
			</view>
		</view>
		<view class="bg">
			<view class="bg-bai"></view>
			<img class="bg-img" src="../../static/img/baby01.jpg" mode="aspectFill" alt="">
		</view>
		<view class="main">
			<view class="user-img">
				<img class="img" src="../../static/img/baby01.jpg" mode="aspectFill" alt="">
			</view>
			<view class="title">左左左表妹</view>
			<view class="nickname">昵称：很好搭档</view>
			<view class="introduce">夜，借结束了一天的喧嚣后安静了下来，伴随着远处路灯那微弱的光。风，毫无预兆的席卷整片的旷野，撩动人的思绪万千。</view>
			<view class="add-friend">加为好友</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
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
				width:400rpx;
				height:400rpx;
				border-radius:48rpx;
				border: 6px solid #FFFFFF;
				img{
					width:100%;
					height:100%;
					border-radius:48rpx;
					
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
			.add-friend{
				position:fixed;
				bottom:50rpx;
				width:90%;
				height:80rpx;
				background: #FFE431;
				border-radius:10px;
				margin: 0 auto;
				text-align:center;
				line-height:80rpx;
			}
		}
	}
</style>
