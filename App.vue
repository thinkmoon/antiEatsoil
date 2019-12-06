<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
			if(uni.getStorageSync("money") && uni.getStorageSync("minmoney")){
				
			}
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import "./static/colorui/main.css";
	page {
		background-color: #eee;
	}
</style>
