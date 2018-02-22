var propertys = {
	play: document.getElementById('play'),
	fordward: document.getElementById('fordward'),
	backward: document.getElementById('backward'),
	type: "play",
	playlist: new Array('ACDC-1.mp3', 'ACDC-2.mp3', 'ACDC-3.mp3'),
	music: document.querySelectorAll("ol li a"),
	num: 0,
	audio: document.getElementById('audio'),
	img: document.querySelector("#play i"),
	logo: document.getElementsByClassName('logo')
};

var method = {
	
	startMusicPlayer: function () {
		propertys.play.addEventListener('click', this.playOrStopMusic);
		propertys.fordward.addEventListener('click', this.fordwardMusic);
		propertys.backward.addEventListener('click', this.backwardMusic);
		propertys.audio.addEventListener('ended', this.fordwardMusic);
	},

	playOrStopMusic: function(){
		if(propertys.type == "play")
			method.playMusic();
		else
			method.pauseMusic();
	},

	playMusic: function(){
		propertys.img.className = "fa fa-play";
		propertys.audio.src = "music/"+(propertys.playlist[propertys.num]);	
		propertys.audio.play();
		propertys.type = "pause";
		for (var i = 0; i < propertys.logo.length; i++) {
			propertys.logo[i].className = "logo";
			if(propertys.num == i){
				propertys.logo[i].className = "logo fa fa-play";
			}
		}
		
	},

	pauseMusic: function(){
		propertys.img.className = "fa fa-pause";
		propertys.audio.pause();
		propertys.type = "play";
	},
	
	fordwardMusic: function(){
		propertys.audio.pause();
		propertys.num++;
		if(propertys.num > propertys.playlist.length-1){
			propertys.num = 0;
		}
		method.playMusic();
	},

	backwardMusic: function(){
		propertys.audio.pause();
		propertys.num--;
		if(propertys.num < 0){
			propertys.num = propertys.playlist.length-1;
		}
		method.playMusic();
	},	

};
method.startMusicPlayer();