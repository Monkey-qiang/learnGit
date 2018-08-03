<template>
	<div id="app">
		<div id='top' class="top">
			<img alt="" src="./assets/logo.png" class="log" />
			<input type="text" id='inp' value="请输入商品名称" v-on:focus='focus' v-on:blur='blur' />
			<img src="./assets/search.png" class="search" />
		</div>
		<router-view/>
		<div id='router'>
			<router-link v-for='(item,index) in nav' v-bind:to='item.path' v-on:click.native="active(index)">
				<img alt="" v-bind:src="item.selected ? item.active : item.icon">
				<span v-bind:class="{nav_color: item.selected}">{{item.name}}</span>
			</router-link>
		</div>
	</div>
</template>

<script>
	import Home from '@/pages/home.vue'
	export default {
		name: 'app',
		data() {
			return {

				nav: [{
					name: '',
					path: '',
					selected: '',
					icon: '',
					active: ''
				}]
			}
		},
		mounted() {
			this.$http.get('../static/nav.json').then(function(response) {
				this.nav = response.data.nav
				for(var i = 0; i < this.nav.length; i++) {

					this.nav[i].icon = require('' + this.nav[i].icon)
					this.nav[i].active = require('' + this.nav[i].active)
				}

			}).catch(function() {});
			this.$router.push('/home')

		},
		methods: {

			focus(e) {
				if(e.target.value = "请输入商品名称") {
					e.target.value = ""
				}

			},
			blur: function(e) {
				if(e.target.value == '') {
					e.target.value = '请输入商品名称'
				}

			},
			active: function(index) {
				for(var i = 0; i < this.nav.length; i++) {
					this.nav[i].selected = false
				}
				this.nav[index].selected = true
			}

		},
		components: {
			home: Home
		}
	}
</script>

<style>
	#app {
		padding-bottom: 1.55rem;
	}
</style>