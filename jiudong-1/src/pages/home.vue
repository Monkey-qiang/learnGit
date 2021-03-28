<template>
	<div id='home'>
		<div id='advertise'></div>
		<!--<router-view></router-view>
		<router-link :to="{path:'produck',query:{id:1}}">产品1</router-link>
		<router-link :to="{path:'produck',query:{id:2}}">产品2</router-link>-->
		<div id='hot'>
			<router-link v-for='(item,index) in hot' :key="index" v-bind:to='{path:item.url,query:{c:item.id}}'>
				<img alt="" v-bind:src="item.icon">					
				<span> {{item.name}}</span>
			</router-link>
	
		</div>
		<div class='luck'>
			<p>幸运币专区</p>
			<img src="../assets/1.png">	
		</div>
		<div class='faddish'>
			<p>九东爆款鞋</p>
			<img src="../assets/4.png">	
			
		</div>
		
		<div id='product'>
			<p>九东热卖</p>
			<router-link v-for='(item,index) in product' :key="index" v-bind:to="{path: 'datail',query:{id:index}}" >
				<img alt="" v-bind:src="item.icon">
				<span>{{item.name}}</span>
				<span>{{item.price}}</span>
			</router-link>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
	data(){
		return{			
			hot:[{
				'name':'',
				'url':'',
				'icon':''
						
			}],
			product:{
				'p':{
				'name':'',
				'price':'',
				'icon':''	
				}
				
			}
					
					
		}
	},
	
		methods:{
			products:function(){
				this.$http.get('static/product.json').then(function(response){					
					this.product=response.data
					console.log(this.product)
					
					
					
	/*for(var i = 0;i < this.product.length;i++){		
		this.product[i].icon=require('../assets/' + response.data.product[i].icon)
		}*/
	
				}).catch(function(){})
				
				
			},
			getHot:function(){
				this.$http.get('../static/hot.json').then(function(response){
					this.hot=response.data.hot
					
				for(var i = 0;i < this.hot.length;i++){
					
					this.hot[i].icon=require('../assets/' + response.data.hot[i].icon)
					
				}
				}).catch(function(){})
			
				
			},
			init:function (){			
			var _adv=document.getElementById('advertise')
			var _container=document.createElement('div')
			var _img=null
			var _span=null
			var _dots=document.createElement('div')
			_dots.id='dots'
			for(var i=0; i < 3; i++){
				_img=document.createElement('img')
				_img.src=require('../assets/img0' + (i+1) + '.jpg')
				_container.appendChild(_img)
				_span=document.createElement('span')			
				_dots.appendChild(_span)
				
			}
				_img=document.createElement('img')
				_img.src=require('../assets/img0' + 1 + '.jpg')
				_container.appendChild(_img)
				_adv.appendChild(_container)
				_adv.appendChild(_dots)

			},
				player:function(){
				var timer=0			
				var _container=document.getElementById('advertise').children[0]
				var step=_container.parentNode.offsetWidth/10
				var times=0
				var index=1
			
			function start(){
				window.clearTimeout(timer)
				_container.style.left=(_container.offsetLeft - step) + 'px'
				times++			
				if(times===10){
					times=0
					_container.style.left=- index * _container.parentNode.offsetWidth +'px'
					index++
				timer=window.setTimeout(function(){
					
				if(_container.offsetLeft <= -_container.parentNode.offsetWidth*3){
					index=1
					_container.style.left='0px'
						
				}
					
					start()
				},2000)					
				}else{
					timer=window.setTimeout(start,20)
				}			
			}
				timer=window.setTimeout(start,2000)
		
			}
			
		},
		
		mounted(){
			
			this.init()
			this.player()
			this.getHot()
			this.products()
		
		}
		
	}
</script>
<style type="text/css">
	#home{
		width: 12.8rem;
		overflow: hidden;
		float: left;
	}
	#advertise{
		width: 12.8rem;
		height: 7rem;
		position: relative;
	}
	#advertise div{
		width: 51.2rem;
		height: 7rem;
		overflow: hidden;
		position: absolute;
		left: 0;
		top: 0;
		
	}
	#advertise img{
		width: 12.8rem;
		
	}
	#advertise #dots{
		width: 1.8rem;
		height: 0.7rem;
		position: absolute;
		left:45%;
		top:6.2rem;
		
	}
	#dots span{
		display: block;
		float: left;
		width: 0.5rem;
		height:0.5rem ;  
	    background: #fff;
	   margin-left: 0.1rem;
	   border-radius: 50%;
	    
	}
	#dots span:nth-child(1){
		background: red;
		
	}
	
	#hot{
		width: 12.8rem;
		height: 3rem;
		margin-top: 0.39rem;
	
	}
	#hot a{
		display: block;
		float: left;
		width: 20%;
		height: 2.8rem;
		text-align: center;
		
	}
	#hot a img{
		width: 1.8rem;
		height: 1.8rem;
		text-align: center;
	}
	#hot span{
		display: block;	
		font-size:0.5rem;
		color: #555;
		
	}
	#product{
		float: left;
		width: 12.8rem;
		padding-bottom:1.72rem
		
	}
	#product p{
		font-size: 0.6rem;
		text-align: center;
		color: #555555;
		position: relative;
	}
	#product p:after{
		content: '';
		width: 4rem;
		height: 1rem;		
		border-top: 1px solid red;
		position: absolute;
		top:0.4rem;
		left: 0;
	}
	#product p:before{
		content: '';
		width: 4rem;
		height: 1rem;		
		border-top: 1px solid red;
		position: absolute;
		top:0.4rem;
		right: 0;
	}
	
	#product a{
		display: block;
		width: 50%;
		float: left;
		text-align: center;
	}
	#product span{
		display: block;
		font-size: 0.5rem;
	}
	#product span:nth-of-type(2){
		color: red;
	}
	
	#product a img{
	
		width: 5rem;
		height: 5rem;
		
	}
	.luck p,.faddish p{
		font-size: 0.6rem;
		text-align: center;
		color: #555555;
		position: relative;
	}
	
	.luck p:after{
		content: '';
		width: 4rem;
		height: 1rem;		
		border-top: 1px solid #F3F3F3;
		position: absolute;
		top:0.3rem;
		left: 0;
		
	}
	.luck p:before{
		content: '';
		width: 4rem;
		height: 1rem;		
		border-top: 1px solid #F3F3F3;
		position: absolute;
		top:0.3rem;
		right: 0;		
	}
	.luck img,.faddish p{
		width: 12.8rem;
	}
	.faddish p:after{
		content: '';
		width: 4rem;
		height: 1rem;		
		border-top: 1px solid #F3F3F3;
		position: absolute;
		top:0.4rem;
		left: 0;
		
	}
	.faddish p:before{
		content: '';
		width: 4rem;
		height: 1rem;		
		border-top: 1px solid #F3F3F3;
		position: absolute;
		top:0.4rem;
		right: 0;
		
	}
</style>