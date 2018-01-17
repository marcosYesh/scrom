/**
 * 
 */
var conteudo = new Content();
var navigator = new Navigator();
var tela = new Tela("contentFrame");
SetupIFrame();
conteudo.addModulo("Playing");
conteudo.addPage("src/Playing/video.html");
conteudo.addPage("src/Playing/video1.html");
conteudo.addPage("src/Playing/video2.html");
conteudo.addPage("src/Playing/video3.html");
conteudo.addPage("src/Playing/question.html");
$(function() {
	// navigator.escondePrev();
	init();
});

function init() {
	escoderPrev();
	escoderNext();
	var url = conteudo.getUrlAtual()
	tela.setSRC(url);

	// scorn.setStartTime = (new Date());
	// scorn.processInitialize();
	/*
	 * if (scorm.processGetValue("cmi.core.lesson_status") == "not
	 * attempted") { scorm.ScormProcessSetValue("cmi.core.lesson_status",
	 * "incomplete"); } var bookmark =
	 * scorm.ScormProcessGetValue("cmi.core.lesson_location"); if (bookmark ==
	 * "") { bookmark = 0 } else { // if there is a stored bookmark, prompt the
	 * user to resume from the // previous locati on if (confirm("Would you like
	 * to resume from where you previously left off?")) { bookmark =
	 * parseInt(bookmark, 10); } else { bookmark = 0; } }
	 * scorm.setPageAtual(bookmark); tela.setSRC(scorn.getUrlAtual());
	 */
}

function doUnload(pressedExit) {
	/*
	 * if (processedUnload == true) { return; } processedUnload = true; var
	 * endTimeStamp = new Date(); var totalMilliseconds =
	 * (endTimeStamp.getTime() - startTimeStamp.getTime()); var scormTime =
	 * ConvertMilliSecondsToSCORMTime(totalMilliseconds, false);
	 * scorn.setStartTime = (scormTime);
	 * scorn.ScormProcessSetValue("cmi.core.session_time", scormTime); if
	 * (pressedExit == false && reachedEnd == false) {
	 * scorn.ScormProcessSetValue("cmi.core.exit", "suspend"); }
	 * scorn.ScormProcessFinish();
	 */
}

function doExit() {
	/*
	 * if (reachedEnd == false && confirm("Would you like to save your progress
	 * to resume later?")) { scorn.ScormProcessSetValue("cmi.core.exit",
	 * "suspend"); } else { scorn.ScormProcessSetValue("cmi.core.exit", ""); }
	 * doUnload(true);
	 */
}

function funcaoNext() {
	$("#btnPrev").show();
	conteudo.nextPage();
	tela.setSRC(conteudo.getUrlAtual());
	teste = conteudo.isUltimaPagina();
	if (teste == true) {
		$("#btnNext").hide();
	} else {
		$("#btnNext").show();
	}
};

function funcaoPrev() {
	$("#btnNext").show();
	conteudo.prevPage();
	tela.setSRC(conteudo.getUrlAtual());
	teste = conteudo.isPrimeiraPagina();
	if (teste == true) {
		$("#btnPrev").hide();
	} else {
		$("#btnPrev").show();
	}
};
function RecordTest(score) {
	/*
	 * ScormProcessSetValue("cmi.core.score.raw", score);
	 * ScormProcessSetValue("cmi.core.score.min", "0");
	 * ScormProcessSetValue("cmi.core.score.max", "100"); // if we get a test
	 * result, set the lesson status to passed/failed instead // of completed //
	 * consider 70% to be passing if (score >= 70) {
	 * ScormProcessSetValue("cmi.core.lesson_status", "passed"); } else {
	 * ScormProcessSetValue("cmi.core.lesson_status", "failed"); }
	 */
}

// SCORM requires time to be formatted in a specific way
function ConvertMilliSecondsToSCORMTime(intTotalMilliseconds,
		blnIncludeFraction) {

	var intHours;
	var intintMinutes;
	var intSeconds;
	var intMilliseconds;
	var intHundredths;
	var strCMITimeSpan;

	if (blnIncludeFraction == null || blnIncludeFraction == undefined) {
		blnIncludeFraction = true;
	}

	// extract time parts
	intMilliseconds = intTotalMilliseconds % 1000;
	intSeconds = ((intTotalMilliseconds - intMilliseconds) / 1000) % 60;
	intMinutes = ((intTotalMilliseconds - intMilliseconds - (intSeconds * 1000)) / 60000) % 60;
	intHours = (intTotalMilliseconds - intMilliseconds - (intSeconds * 1000) - (intMinutes * 60000)) / 3600000;
	/*
	 * deal with exceptional case when content used a huge amount of time and
	 * interpreted CMITimstamp to allow a number of intMinutes and seconds
	 * greater than 60 i.e. 9999:99:99.99 instead of 9999:60:60:99 note - this
	 * case is permissable under SCORM, but will be exceptionally rare
	 */
	if (intHours == 10000) {
		intHours = 9999;
		intMinutes = (intTotalMilliseconds - (intHours * 3600000)) / 60000;
		if (intMinutes == 100) {
			intMinutes = 99;
		}
		intMinutes = Math.floor(intMinutes);
		intSeconds = (intTotalMilliseconds - (intHours * 3600000) - (intMinutes * 60000)) / 1000;
		if (intSeconds == 100) {
			intSeconds = 99;
		}
		intSeconds = Math.floor(intSeconds);
		intMilliseconds = (intTotalMilliseconds - (intHours * 3600000)
				- (intMinutes * 60000) - (intSeconds * 1000));
	}
	// drop the extra precision from the milliseconds
	intHundredths = Math.floor(intMilliseconds / 10);
	// put in padding 0's and concatinate to get the proper format
	strCMITimeSpan = ZeroPad(intHours, 4) + ":" + ZeroPad(intMinutes, 2) + ":"
			+ ZeroPad(intSeconds, 2);
	if (blnIncludeFraction) {
		strCMITimeSpan += "." + intHundredths;
	}
	// check for case where total milliseconds is greater than max supported by
	// strCMITimeSpan
	if (intHours > 9999) {
		strCMITimeSpan = "9999:99:99";
		if (blnIncludeFraction) {
			strCMITimeSpan += ".99";
		}
	}
	return strCMITimeSpan;
}

function ZeroPad(intNum, intNumDigits) {
	var strTemp;
	var intLen;
	var i;
	strTemp = new String(intNum);
	intLen = strTemp.length;
	if (intLen > intNumDigits) {
		strTemp = strTemp.substr(0, intNumDigits);
	} else {
		for (i = intLen; i < intNumDigits; i++) {
			strTemp = "0" + strTemp;
		}
	}
}

function setIframeHeight(id, navWidth) {
	if (document.getElementById) {
		var theIframe = $("#" + id);
		if (theIframe) {
			var height = getWindowHeight();
			var heightValue = Math.round(height) - navWidth;
			var heightText = heightValue + "px"
			var marginTop = Math.round(((height - navWidth) - parseInt(heightValue)) / 2)+ "px";
			$("#" + id).height( heightValue  );
			$("#" + id).css("margin-top", marginTop);
		}
	}
}

function getWindowHeight() {
	var height = 0;
	if (window.innerHeight) {
		height = window.innerHeight - 18;
	} else if (document.documentElement
			&& document.documentElement.clientHeight) {
		height = document.documentElement.clientHeight;
	} else if (document.body && document.body.clientHeight) {
		height = document.body.clientHeight;
	}
	return height;
}

function SetupIFrame() {
	// set our iFrame for the content to take up the full screen except for our
	// navigation
	var navWidth = 40;
	setIframeHeight("contentFrame", navWidth);
	// need this in a setTimeout to avoid a timing error in IE6
	window.setTimeout(
			'window.onresize = function() { setIframeHeight("contentFrame", '
					+ navWidth + '); }', 1000);
}

function escoderPrev(){
	$("#btnPrev").hide();	
}

function escoderNext(){
	$("#btnNext").hide();	
}

function exibiPrev(){
	$("#btnPrev").show();	
}

function exibiNext(){
	$("#btnNext").show();	
}

