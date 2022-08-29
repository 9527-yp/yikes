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
	}
}