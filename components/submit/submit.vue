<template>
	<view>
		<view class="submit">
			<view class="submit-chat">
				<view class="bt-img" @tap="records">
					<img v-show="isrecord" src="../../static/images/yy.png">
					<img v-show="!isrecord" src="../../static/images/jp.png">
				</view>
				<textarea auto-height="true" v-model="msg" class="chat-send btn" v-show="isrecord" @input="inputs"></textarea>
				<view class="record btn" v-show="!isrecord">按住说话</view>
				<view class="bt-img" @tap="emoji">
					<img src="../../static/images/bq.png">
				</view>
				<view class="bt-img">
					<img src="../../static/images/tj.png">
				</view>
			</view>
			<view class="emoji" v-show="isemoji">
				<emoji @emotion="emotion" :height="200"></emoji>
				<view class="emoji-send">
					<view class="emoji-send-btn">发送</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import emoji from '../submit/emojn/emojn.vue'
	export default {
		data() {
			return {
				isrecord: true,
				isemoji:false,
				msg:'',
			}
		},
		components:{emoji},
		methods: {
			// 点击切换语音
			records: function(){
				this.isrecord = !this.isrecord
			},
			// 表情按钮操作
			emoji: function(){
				this.isemoji = !this.isemoji
				setTimeout(() => {
					this.getsubmitHeight()
				},0)
			},
			// 聊天输入框
			inputs: function(e){
				var chatm = e.detail.value;
				var pos = chatm.indexOf('\n')
				if(pos != -1 && chatm.length > 1){
					this.$emit('inputs',this.msg)
					setTimeout(() => {
						this.msg = ''
					},0)
				}
			},
			// 获取模块高度
			getsubmitHeight: function(){
				const query = uni.createSelectorQuery().in(this);
				query.select('.submit').boundingClientRect(data => {
				  // console.log("得到布局位置信息" + JSON.stringify(data));
				  // console.log("节点离页面顶部的距离为" + data.top);
				  this.$emit('heights',data.height)
				}).exec();
			},
			emotion: function(item){
				console.log('表情',item)
			}
			
		}
	}
</script>

<style lang="scss">
	.submit{
		width:100%;
		// height:100rpx;
		position:fixed;
		bottom:0;
		background: #F4F4F4;
		padding-bottom:var(--status-bar-height);
		box-shadow: inset 0px 0.5px 0px 0px rgba(0,0,0,0.1);
	}
	.submit-chat{
		width:100%;
		display:flex;
		align-items:flex-end;
		box-sizing: border-box;
		padding: 14rpx 10rpx;
		.bt-img{
			img{
				width:56rpx;
				height:56rpx;
				margin: 0 10rpx;
				flex:auto;
			}
		}
		.btn{
			flex:auto;
			background:#fff;
			border-radius:10rpx;
			padding:15rpx;
			max-height:160rpx;
			margin: 0 10rpx;
		}
		.record{
			text-align:center;
			font-size:32rpx;
			color:$uni-text-color-grey;
		}
		.displayone{
			display:none;
		}
	}
	.emoji{
		width:100%;
		height:436rpx;
		background:rgba(236,237,238,1);
		box-shadow: 0px -1px 0px 0px rgba(0,0,0,.1);
	}
</style>
