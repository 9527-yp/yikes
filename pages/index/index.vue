<template>
	<view class="content">
		<!-- 头部 -->
		<view class="top-bar">
			<view class="top-bar-left">
				<img src="../../static/img/baby01.jpg" alt="">
			</view>
			<view class="top-bar-center">
				<img src="../../static/images/index/logo.png" class="logo" alt="">
			</view>
			<view class="top-bar-right">
				<view class="search" @tap="toSearch">
					<img src="../../static/images/index/search.png" alt="">
				</view>
				<view class="addgroup">
					<img src="../../static/images/index/addgroup.png" alt="">
				</view>
			</view>
		</view>
		<!-- 列表 -->
		<view class="main">
			<view class="friends">
				<view class="friend-list">
					<view class="friend-list-l">
						<text class="tip">1</text>
						<img src="../../static/img/baby02.jpg" alt="">
					</view>
					<view class="friend-list-r">
						<view class="top">
							<view class="name">好友申请</view>
							<view class="time">13:14</view>
						</view>
						<view class="news">茫茫人海，相聚便是缘分</view>
					</view>
				</view>
			</view>
			<view class="friends" v-for="(item,index) in friendList" :key="item.id">
				<view class="friend-list">
					<view class="friend-list-l">
						<text v-if="item.tip > 0" class="tip">{{item.tip}}</text>
						<img :src="item.imgUrl" alt="">
					</view>
					<view class="friend-list-r">
						<view class="top">
							<view class="name">{{item.name}}</view>
							<view class="time">{{cheackTime(item.time)}}</view>
						</view>
						<view class="news">{{ item.news }}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import datas from '../../commons/js/datas.js'
	import myfun from '../../commons/js/myfun.js'
	export default {
		data() {
			return {
				friendList:[],
			}
		},
		onLoad() {
			this.getFriend()
		},
		methods: {
			cheackTime: function(date){
				return myfun.dateTime(date)
			},
			getFriend: function() {
				this.friendList = datas.friends()
				this.friendList.forEach((item,index) => {
					item.imgUrl = '../../static/img/' + item.imgUrl
				})
			},
			// 跳转到搜索页面
			toSearch: function() {
				uni.navigateTo({
					url: '/pages/search/search'
				});
				console.log('搜索')
			},
		}
	}
</script>

<style lang="scss">
	@import "@/commons/css/mycss.scss";
	.content {
		// display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding-top: var(--status-bar-height);
		padding-bottom:$uni-spacing-col-base;
	}
	.top-bar{
		background:rgba(255,255,255,.9);
		border-bottom:1px solid $uni-border-color;
	}
	.main{
		padding-top: 104rpx;
	}
	.friends{
		.friend-list{
			height:96rpx;
			padding:16rpx $uni-spacing-col-base;
			&:active{
				background:$uni-bg-color-grey;
			}
			.friend-list-l{
				position:relative;
				float:left;
				img{
					width:96rpx;
					height:96rpx;
					border-radius:$uni-border-radius-base;
				}
				.tip{
					position:absolute;
					top:-6rpx;
					left:68rpx;
					min-width:20rpx;
					height:36rpx;
					padding: 0 6rpx;
					background:$uni-color-warning;
					border-radius: 18rpx;
					font-size:$uni-font-size-sm;
					color:$uni-text-color-inverse;
					line-height:36rpx;
					text-align:center;
				}
			}
			.friend-list-r{
				padding-left:128rpx;
				.top{
					height:50rpx;
					.name{
						float: left;
						font-size:36rpx;
						color:$uni-text-color;
						line-height:50rpx;
					}
					.time{
						float:right;
						font-size:$uni-font-size-sm;
						color:$uni-text-color-disable;
						line-height:50rpx;
					}
				}
				.news{
					font-size:$uni-font-size-base;
					color:$uni-text-color-grey;
					line-height:40rpx;
					display:-webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp:1;
					overflow: hidden;
				}
			}
		}
	}
</style>
