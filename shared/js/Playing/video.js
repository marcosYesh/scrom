/**
 * 
 */
var player;
var count = 0;
var countWindowOpen = 0;
$(function() {
	try {
		escoderNext();
	} catch (e) {
		parent.escoderNext();
	}
	player = new Video("video");
	player.addSource(new SourceVideo("/Scrom/shared/video/Playing/Scorm_OLED_part02.mp4"));
	player.addEvento(new ActionMove("1.5626666", "exibirBotao"));
	player.addEvento(new ActionMove("1.5626666", "exibirBotao"));
	player.addEvento(new ActionMove("1.5626666", "exibirBotao"));
	player.addListener(new ListenerVideo("btn1"));
	player.addListener(new ListenerVideo("btn2"));
	player.addListener(new ListenerVideo("btn3"));
	player.addActionListener("btn1", "exibe1");
	player.addActionListener("btn2", "exibe2");
	player.addActionListener("btn3", "exibe3");
	player.intiVideo();
});

function acopanhaVideo(currentTime, duration) {
	player.onTrackedVideoFrame(currentTime, duration);
	$('#duracao').val(duration);
	$('#time').val(currentTime);
}
function encerraVideo() {
	alert("fim");
	try {
		exibiNext();
	} catch (e) {
		parent.exibiNext();
	}
	player.intiVideo();
}
function exibirBotao() {
	count++;
	var nameID = "#btn" + count;
	$(nameID).show();
}

