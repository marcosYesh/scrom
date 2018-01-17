/**
 * 
 */
var player;
var count = 0;
var countWindowOpen = 0;
$(function() {
	player = new Video("video");
	player.addSource(new SourceVideo("/Scrom/shared/video/Playing/Scorm_OLED_part04.mp4"));
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

