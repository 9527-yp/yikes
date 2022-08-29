<template>
	<view class="search">
		<view class="top-bar">
			<view class="search-div">
				<img class="searchImg" src="../../static/images/index/search.png" alt="">
				<input type="search" placeholder="搜索用户/群" @input="getSearch" class="search" placeholder-style="color:#999;font-weight:400">
			</view>
			<view class="top-bar-right" @tap="toBack">取消</view>
		</view>
		<view class="clea"></view>
		<view class="main">
			<view class="search-user " v-if="userarr.length > 0">
				<view class="title">用户</view>
				<view class="list" v-for="(item,index) in userarr" :key="item.id">
					<view class="list-left">
						<img class="list-img" :src="item.imgUrl" alt="">
						<view class="user-name" v-html="item.name"></view>
					</view>
					<view class="list-right" :class="item.tip == 1 ? 'message' : 'friend'">{{ item.tip == 1 ? '发消息':'加好友'}}</view>
				</view>
			</view>
			<view class="search-group search-user">
				<view class="title">群组</view>
				<view class="list">
					<view class="list-left">
						<img class="list-img" src="../../static/img/baby01.jpg" alt="">
						<view class="user-name">开发的实力</view>
					</view>
					<view class="list-right friend">加好友</view>
				</view>
				<view class="list">
					<view class="list-left">
						<img class="list-img" src="../../static/img/baby01.jpg" alt="">
						<view class="user-name">确实丽莉就这</view>
					</view>
					<view class="list-right message">发消息</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import datas from "../../commons/js/datas.js"
	export default {
		data() {
			return {
				searchValue:'',
				userarr:[],
			};
		},
		methods:{
			// 搜索关键字
			getSearch: function(v) {
				this.userarr = []
				this.searchValue = v.detail.value
				if(this.searchValue.length > 0){
					this.searchUser(this.searchValue)
				}
			},
			// 寻找关键字匹配的好友
			searchUser: function(e){
				let arr = datas.friends();
				let exp = eval('/'+e+'/g');
				for( let i = 0 ; i < arr.length; i++){
					if(arr[i].name.search(e) != -1){
						this.isFriends(arr[i])
						arr[i].imgUrl = '../../static/img/' + arr[i].imgUrl
						arr[i].name = arr[i].name.replace(exp,"<span style='color:#4AAAFF'>"+ e + "</span>")
						this.userarr.push(arr[i])
					}
				}
			},
			isFriends: function(e) {
				let tip = 0;
				let arr = datas.isFriend();
				for(let i = 0 ; i < arr.length;i++){
					if(arr[i].friendId == e.id){
						tip = 1;
					}
				}
				e.tip = tip;
				
			},
			toBack: function() {
				uni.navigateBack({
					delta: 1
				});
			}
		}
	}
</script>

<style lang="scss">
	@import "@/commons/css/mycss.scss";
	.search{
		height:100%;
		padding-top: var(--status-bar-height);
	}
	.top-bar{
		box-shadow: 0px 1px 0px 0px rgba(0,0,0,0.11);
		padding-left:32rpx;
		display:flex;
		align-items:center;
		.search-div{
			width:600rpx;
			box-sizing: border-box;
			position:relative;
			input{
				padding:0 60rpx 0 20rpx;
			}
			.searchImg{
				position:absolute;
				top:10rpx;;
				right:10rpx;
				width:40rpx;
				height:40rpx;
			}
		}
		.search{
			height:60rpx;
			background: #F3F4F6;
			border-radius: 10px;
		}
		.top-bar-right{
			padding-left:30rpx;
		}
	}
	.clea{
		height:88rpx;
	}
	.main{
		width:100%;
		height:300rpx;
		padding: 34rpx 32rpx;
		box-sizing: border-box;
		.search-user{
			width:100%;
			.title{
				font-size: 22px;
				color: #272832;
				letter-spacing: -0.75px;
				font-weight: 600;
				margin-bottom:20rpx;
			}
			.list{
				height:80rpx;
				display:flex;
				align-items:center;
				justify-content: space-between;
				margin-bottom:40rpx;
				.list-left{
					display:flex;
					align-items:center;
					.list-img{
						width:80rpx;
						height:80rpx;
						border-radius: 20px;
					}
					.user-name{
						padding-left:32rpx;
						font-size:34rpx;
					}
				}
				.list-right{
					width:120rpx;
					height:48rpx;
					font-size:24rpx;
					line-height:48rpx;
					text-align:center;
					border-radius:48rpx;
					// background: #FFE431;
					// color: #272832;
				}
				.message{
					color: #272832;
					background: #FFE431;
				}
				.friend{
					color: #4AAAFF;
					background: rgba(74,170,255,0.10);
				}
			}
		}
	}
</style>
