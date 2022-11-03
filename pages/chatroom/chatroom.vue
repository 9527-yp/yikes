<template>
	<view class="chatroom">
		<view class="top-bar">
			<view class="top-bar-left" @tap="">
				<view class="back"></view>
			</view>
			<view class="top-bar-center">
				开心就好
			</view>
			<view class="top-bar-right" @tap="">
				<img class="more" src="../../static/img/baby01.jpg" alt="">
			</view>
		</view>
		<scroll-view class="chat" scroll-y="true" scroll-with-animation="true" :scroll-into-view="scrollToView">
			<view class="chat-main" :style="{paddingBottom:bottom + 'px'}">
				<view class="chat-ls" v-for="(item,index) in msgs" :key="index" :id="'msg' + item.tip">
					<view class="chat-time" v-if="item.time != ''">{{ changeTime(item.time) }}</view>
					<view class="msg-m msg-left" v-if="item.id != 'b'">
						<img class="user-img" :src="item.imgUrl" alt="">
						<view class="massage" v-if="item.types == 0">
							<view class="msg-text">{{ item.message}}</view>
						</view>
						<view class="massage" v-if="item.types == 1">
							<img class="msg-img" :src="item.message" mode="widthFix" @tap="getLookImg(item.message)" alt="">
						</view>
					</view>
					<view class="msg-m msg-right"  v-if="item.id != 'a'">
						<img class="user-img" :src="item.imgUrl" alt="">
						<view class="massage" v-if="item.types == 0">
							<view class="msg-text">{{ item.message}}</view>
						</view>
						<view class="massage" v-if="item.types == 1">
							<img class="msg-img" :src="item.message" mode="widthFix" @tap="getLookImg(item.message)" alt="">
						</view>
					</view>
				</view>
				<!-- <view class="chat-ls" v-for="(item,index) in msgs" :key="index">
					<view class="chat-time" v-if="item.id != 'b'">{{ item.time }}</view>
					<view class="msg-m msg-right">
						<img class="user-img" :src="item.imgUrl" alt="">
						<view class="massage">
							<view class="msg-text">{{ item.message }}</view>
						</view>
					</view>
				</view> -->
			</view>
			<view class="pabbt"></view>
		</scroll-view>
		<submit @inputs="inputs" @heights="heights"></submit>
	</view>
</template>

<script>
	import datas from "../../commons/js/datas.js"
	import myfun from "../../commons/js/myfun.js"
	import submit from '@/components/submit/submit.vue'
	export default {
		data() {
			return {
				msgs:[],
				imgMsg:[],
				scrollToView:'',
				oldTime:new Date(),
				bottom:'60',
			}
		},
		components:{
			submit
		},
		onLoad(){
			this.getmsgs()
		},
		methods: {
			// 获取数据
			getmsgs: function() {
				let msg = datas.message()
				for(let i = 0 ; i < msg.length; i++){
					msg[i].imgUrl = '../../static/img/' + msg[i].imgUrl
					// 时间间隔
					if(i < msg.length - 1){
						let t = myfun.spaceTime(this.oldTime,msg[i].time)
						if(t){
							this.oldTime = t;
						}
						msg[i].time = t
					}
					
					// 补充图片地址
					if(msg[i].types == 1){
						msg[i].message = '../../static/img/' + msg[i].message
						this.imgMsg.unshift(msg[i].message)
					}
					this.msgs.unshift(msg[i])
				}
				this.$nextTick(() => {
					this.scrollToView = 'msg' + this.msgs[this.msgs.length-1].tip
				})
				// console.log(msg)
			},
			// 时间转换
			changeTime: function(date) {
				return myfun.chatTime(date)
			},
			// 预览图片
			getLookImg: function(e){
				uni.previewImage({
					current:e,
					urls: this.imgMsg,
					longPressActions: {
						itemList: ['发送给朋友', '保存图片', '收藏'],
						success: function(data) {
							console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
						},
						fail: function(err) {
							console.log(err.errMsg);
						}
					}
				});
			},
			// 接受收聊天数据
			inputs: function(value){
				var len = this.msgs.length
				let data = {
					id:'b', // 用户id
					imgUrl:'../../static/img/baby01.jpg',
					message:value,
					types:'0', // 图片类型 （0 文字 1 图片链接 2 音频链接
					time: new Date()-1000*120*55,  // 发送时间
					tip:len,
				};
				this.msgs.push(data)
				this.$nextTick(() => {
					this.scrollToView = 'msg' + this.msgs[this.msgs.length-1].tip
				})
			},
			// 获取输入框高度
			heights: function(value){
				console.log('高度'+value)
				this.bottom = value
				this.goBottom()
			},
			// 滚动到底部
			goBottom: function(){
				this.scrollToView = '';
				this.$nextTick(() => {
					this.scrollToView = 'msg' + this.msgs[this.msgs.length-1].tip
				})
			}
		}
	}
</script>

<style lang="scss">
	@import '@/commons/css/mycss.scss';
	page{
		height:100%;
	}
	.chatroom{
		height:100%;
		background: #F4F4F4;
		padding-top: var(--status-bar-height);
		.top-bar{
			box-shadow: 0px 1px 0px 0px rgba(0,0,0,0.1);
			background: #F4F4F4;
			.top-bar-right{
				.more{
					width:68rpx;
					height:68rpx;
					border-radius:16rpx;
					padding-right:32rpx;
				}
			}
		}
	}
	.chat{
		height:100%;
		.chat-main{
			padding-left:32rpx;
			padding-right:32rpx;
			padding-top:100rpx;
			// padding-bottom:120rpx;
			display:flex;
			flex-direction: column;
		}
		.chat-ls{
			.chat-time{
				font-size: 24rpx;
				color: rgba(39,40,50,0.30);
				line-height:34rpx;
				padding:20rpx 0;
				text-align:center;
			}
			.msg-m{
				display:flex;
				padding:20rpx 0;
				.user-img{
					width:80rpx;
					height:80rpx;
					border-radius:20rpx;
				}
				.massage{
					.msg-text{
						max-width: 460rpx;
						padding:16rpx 24rpx;
						font-size: 32rpx;
						color: #272832;
						line-height:44rpx;
					}
				}
				.msg-img{
					width:284rpx;
					height:320rpx;
					border-radius:20rpx;
				}
			}
			.msg-left{
				flex-direction: row;
				.massage{
					.msg-text{
						margin-left:20rpx;
						background: rgba(255,255,255,.8);
						border-radius: 20rpx 0rpx 20rpx 20rpx;
					}
				}
				.msg-img{
					margin-left:20rpx;
				}
			}
			.msg-right{
				flex-direction: row-reverse;
				.massage{
					.msg-text{
						margin-right:20rpx;
						background: rgba(255,228,49,.8);
						border-radius: 20rpx 0rpx 20rpx 20rpx;
					}
				}
				.msg-img{
					margin-right:20rpx;
				}
			}
		}
		.pabbt{
			height:var(--status-bar-height);
			width:100%;
		}
	}
</style>
