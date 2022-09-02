export default {
	friends : function() {
		let friendarr = [
			{
				id:1,
				imgUrl:'baby01.jpg',
				tip:2,
				name:'大海',
				time:new Date(),
				news:'上点击返回的数据发送到'
			},
			{
				id:2,
				imgUrl:'baby02.jpg',
				tip:2,
				name:'小明',
				time:new Date(),
				news:'士大夫大师傅但是'
			},
			{
				id:3,
				imgUrl:'baby03.jpg',
				tip:2,
				name:'小红',
				time:new Date(),
				news:'sdfsdfs'
			},
			{
				id:4,
				imgUrl:'baby04.jpg',
				tip:2,
				name:'二狗子',
				time:new Date(),
				news:'上官丹凤人特特特的规定翻跟斗特瑞特瑞特让他的豆腐干豆腐干'
			},
			{
				id:5,
				imgUrl:'baby05.jpg',
				tip:2,
				name:'狗蛋',
				time:new Date(),
				news:'是否底色是的发涩我'
			},
			{
				id:6,
				imgUrl:'baby06.jpg',
				tip:2,
				name:'小李子',
				time:new Date(),
				news:'黄金股原图太大'
			},
			{
				id:7,
				imgUrl:'baby07.jpg',
				tip:2,
				name:'胡汉三',
				time:new Date(),
				news:'对方天热提到过的法国人'
			},
			{
				id:8,
				imgUrl:'baby06.jpg',
				tip:2,
				name:'小李子',
				time:new Date(),
				news:'黄金股原图太大'
			},
			{
				id:9,
				imgUrl:'baby07.jpg',
				tip:2,
				name:'胡汉三',
				time:new Date(),
				news:'对方天热提到过的法国人'
			},
			{
				id:10,
				imgUrl:'baby06.jpg',
				tip:0,
				name:'小李子',
				time:new Date(),
				news:'黄金股原图太大'
			},
			{
				id:11,
				imgUrl:'baby07.jpg',
				tip:0,
				name:'胡汉三',
				time:new Date(),
				news:'对方天热提到过的法国人'
			},
		]
		return friendarr
	},
	// 好友表
	isFriend: function() {
		let friends = [
			{
				userId:1,
				friendId:2,
			},
			{
				userId:1,
				friendId:10,
			},
			{
				userId:1,
				friendId:11,
			},
			{
				userId:1,
				friendId:6,
			},
		]
		return friends
	},
	
	// 聊天信息
	message: function() {
		let msgs = [
			{
				id:'a', // 用户id
				imgUrl:'baby01.jpg',
				message:'对方天热提到过的法国人黄金股原图太大',
				types:'0', // 图片类型 （0 文字 1 图片链接 2 音频链接
				time: new Date()-1000,  // 发送时间
				tip:0,
			},
			{
				id:'a', // 用户id
				imgUrl:'baby01.jpg',
				message:'对方天热提到过的法国人黄金股原图太大',
				types:'0', // 图片类型 （0 文字 1 图片链接 2 音频链接
				time: new Date()-1000*16,  // 发送时间
				tip:1,
			},
			{
				id:'b', // 用户id
				imgUrl:'baby02.jpg',
				message:'对方天热提到过的法国人黄金股原图太大',
				types:'0', // 图片类型 （0 文字 1 图片链接 2 音频链接
				time: new Date()-1000*60,  // 发送时间
				tip:2,
			},
			{
				id:'a', // 用户id
				imgUrl:'baby01.jpg',
				message:'对方天热提到过的法国人黄金股原图太大',
				types:'0', // 图片类型 （0 文字 1 图片链接 2 音频链接
				time: new Date()-1000*60*35,  // 发送时间
				tip:3,
			},
			{
				id:'b', // 用户id
				imgUrl:'baby02.jpg',
				message:'baby03.jpg',
				types:'1', // 图片类型 （0 文字 1 图片链接 2 音频链接
				time: new Date()-1000*60*45,  // 发送时间
				tip:4,
			},
			{
				id:'a', // 用户id
				imgUrl:'baby01.jpg',
				message:'baby05.jpg',
				types:'1', // 图片类型 （0 文字 1 图片链接 2 音频链接
				time: new Date()-1000*60*55,  // 发送时间
				tip:5,
			},
			{
				id:'b', // 用户id
				imgUrl:'baby02.jpg',
				message:'对方天热提到过的',
				types:'0', // 图片类型 （0 文字 1 图片链接 2 音频链接
				time: new Date()-1000*60*35*24,  // 发送时间
				tip:6,
			},
			{
				id:'a', // 用户id
				imgUrl:'baby02.jpg',
				message:'对方天热提',
				types:'0', // 图片类型 （0 文字 1 图片链接 2 音频链接
				time: new Date()-1000*60*38*24,  // 发送时间
				tip:7,
			},
			{
				id:'a', // 用户id
				imgUrl:'baby02.jpg',
				message:'对方天热提到过的法国人黄金股原图太大',
				types:'0', // 图片类型 （0 文字 1 图片链接 2 音频链接
				time: new Date()-1000*60*55*24,  // 发送时间
				tip:8,
			},
		]
		return msgs
	}
}