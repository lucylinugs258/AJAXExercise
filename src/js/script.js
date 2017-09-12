
var nowIndex = 0;
var isLoading = false;

function getData(callback){
	const clientId = '';
	const game = 'Overwatch';
	const limit = 15;
	isLoading = true;
	var apiUrl = 'https://api.twitch.tv/kraken/streams?client_id=' + clientId + '&game=' + game + '&limit=' + limit + '&offset=' + nowIndex ;

	//撰寫XHR請求(使用get)

	//{接收請求的回應並應用(完成)}

}

function getColumn(data){
	return `
		<div class="col">
			<div class="preview">
				<img src="${data.preview.medium}" onload="this.style.opacity=1" alt="">
			</div>
			<div class="bottom">
				<div class="avatar">
					<img src="${data.channel.logo}" onload="this.style.opacity=1" alt="">
				</div>
				<div class="intro">
					<div class="channel_name">${data.channel.status}</div>
					<div class="owner_name">${data.channel.display_name}</div>
				</div>
			</div>
		</div>
	`;
}

document.addEventListener("DOMContentLoaded", function(){

	document.querySelector('.lang-tw').addEventListener("click", function(){
		getData();
	}, false);


	window.onscroll = function(){
		var body = document.body,
	    html = document.documentElement;
		var dHeight = Math.max( body.scrollHeight, body.offsetHeight, 
		                       html.clientHeight, html.scrollHeight, html.offsetHeight );

		if(document.body.scrollTop + window.innerHeight >= dHeight - 150){
			if(!isLoading){
				console.log('bottom');
				getData();
			}
		}
	}
})