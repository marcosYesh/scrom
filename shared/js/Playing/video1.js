/**
 * 
 */
var player;
var count = 0;
var countWindowOpen = 0;

$(function() {
	$("#btn1").hide();
	$("#btn2").hide();
	$("#btn3").hide();
	$("#texto1").hide();
	$("#texto2").hide();
	$("#texto3").hide();
	testeProssiguir();
	player = new Video("video");
	player.addSource(new SourceVideo(
			"/Scrom/shared/video/Playing/Scorm_OLED_part02.mp4"));
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
	player.intiVideo();
}
function exibirBotao() {
	count++;
	var nameID = "#btn" + count;
	$(nameID).show();
}

function exibe1() {
	if ($("#btn1").attr("src") == "/Scrom/shared/image/Playing/plus.png") {
		$("#btn1").attr("src", "/Scrom/shared/image/Playing/minus.png");
		$("#texto1").show();
		countWindowOpen++;
	} else {
		$("#btn1").attr("src", "/Scrom/shared/image/Playing/plus.png");
		$("#texto1").hide();
	}
	testeProssiguir();
}

function exibe2() {
	if ($("#btn2").attr("src") == "/Scrom/shared/image/Playing/plus.png") {
		$("#btn2").attr("src", "/Scrom/shared/image/Playing/minus.png");
		$("#texto2").show();
		countWindowOpen++;
	} else {
		$("#btn2").attr("src", "/Scrom/shared/image/Playing/plus.png");
		$("#texto2").hide();
	}
	testeProssiguir();
}

function exibe3() {
	if ($("#btn3").attr("src") == "/Scrom/shared/image/Playing/plus.png") {
		$("#btn3").attr("src", "/Scrom/shared/image/Playing/minus.png");
		$("#texto3").show();
		countWindowOpen++;
	} else {
		$("#btn3").attr("src", "/Scrom/shared/image/Playing/plus.png");
		$("#texto3").hide();
	}
	testeProssiguir();
}

function testeProssiguir() {
	if (countWindowOpen == 3) {
		try {
			exibiNext();
		} catch (e) {
			parent.exibiNext();
		}
	} else {
		try {
			escoderNext();
		} catch (e) {
			parent.escoderNext();
		}
	}
}
