<template>
	<block>
		<view class="padding bg-white">
			<view class="padding flex justify-around flex-direction" style="height: 400upx;">
				<view>1. 你现在的可支配收入为多少（￥）?</view>
				<input type="number" v-model="form.money" class="input" />
				<view>2. 你一天不吃土的情况下最低消费多少（￥）?</view>
				<input type="number" v-model="form.minmoney" class="input" />
			</view>
			<view class="padding justify-center flex">
				<button class="cu-btn bg-green " @click="setMoney">提交</button>
			</view>
		</view>
	</block>
</template>

<script>
	export default {
		data() {
			return {
				"form": {
					money: 0,
					minmoney: 0
				}
			}
		},
		async onShow() {

		},
		async onLoad(options) {

		},
		filters: {

		},
		computed: {

		},
		methods: {
			setMoney() {
				if(this.form.minmoney < 10){
					uni.showModal({
						title:"吃土警告",
						content: "你每日最低消费为" + this.form.minmoney + "，我觉得你很大可能要吃土了。 本软件拒绝为你服务!^-^!"
					})
					return 
				}else if( (this.$helper.getLastDays() * this.form.minmoney ) > this.form.money ){
					uni.showModal({
						title:"吃土警告",
						content: "悄悄告诉你一个秘密，如果你借不到钱的话，本月吃土无疑了。本软件也无能为力了~~"
					})
					return 
				}else {
					uni.setStorageSync("money",this.form.money)
					uni.setStorageSync("minMoney",this.form.minmoney)
					uni.showToast({
						icon:'none',
						title:"计划设立成功，本软件将持续为你服务！"
					})
				}
			}
		}
	}
</script>

<style>
	.input {
		background-color: #eee;
	}
</style>
