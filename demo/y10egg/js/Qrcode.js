const component={
	template:`<div class="page qrcode">
		<img src="images/qrcode.png" alt="">
		<table>
			<tr>
				<td>有效二维码<span>&nbsp</span></td>
				<td>共<span v-text="total"></span>个</td>
			</tr>
			<tr>
				<td>已使用<span v-text="used"></span>个</td>
				<td>剩余<span v-text="remain"></span>个</td>
			</tr>
		</table>
	</div>`,
	data(){
		return {
			total:'',
			used:'',
			remain:''
		}
	},
	mounted(){
	},
	methods:{
	}
};
export default component;