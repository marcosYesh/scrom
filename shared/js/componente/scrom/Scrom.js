/**
 * 
 */
var Scrom = function() {
	this.nFindAPITries = 0;
	this.API = null;
	this.maxTries = 500;
	this.SCORM_TRUE = "true";
	this.SCORM_FALSE = "false";
	this.SCORM_NO_ERROR = "0";
	this.terminateCalled = false;
	this.initialized = false;
	this.startTime = "";
	
	
   
	this.setStartTime = function(startTime){
		this.startTime = startTime;
	}
	
	this.getStartTime = function(startTime){
		return this.startTime;
	}
	
	this.ScanForAPI = function(win) {
		while ((win.API_1484_11 == null) && (win.parent != null)
				&& (win.parent != win)) {
			nFindAPITries++;
			if (nFindAPITries > maxTries) {
				return null;
			}
			win = win.parent;
		}
		return win.API_1484_11;
	};

	this.GetAPI = function(win) {
		if ((win.parent != null) && (win.parent != win)) {
			this.API = this.ScanForAPI(win.parent);
		}
		if ((API == null) && (win.opener != null)) {
			this.API = this.ScanForAPI(win.opener);
		}
	};
	this.processInitialize = function() {
		var result;
		GetAPI(window);
		if (this.API == null) {
			alert("ERROR - Could not establish a connection with the LMS.\n\nYour results may not be recorded.");
			return;
		}
		result = this.API.Initialize("");
		if (result == this.SCORM_FALSE) {
			var errorNumber = this.API.GetLastError();
			var errorString = this.API.GetErrorString(errorNumber);
			var diagnostic = this.API.GetDiagnostic(errorNumber);
			var errorDescription = "Number: " + errorNumber + "\nDescription: "
					+ errorString + "\nDiagnostic: " + diagnostic;
			alert("Error - Could not initialize communication with the LMS.\n\nYour results may not be recorded.\n\n"
					+ errorDescription);
			return;
		}
		this.initialized = true;
	};
	this.processTerminate = function() {
		var result;
		// Don't terminate if we haven't initialized or if we've already
		// terminated
		if (this.initialized == false || this.terminateCalled == true) {
			return;
		}
		result = API.Terminate("");
		this.terminateCalled = true;
		if (result == this.SCORM_FALSE) {
			var errorNumber = this.API.GetLastError();
			var errorString = this.API.GetErrorString(errorNumber);
			var diagnostic = this.API.GetDiagnostic(errorNumber);
			var errorDescription = "Number: " + errorNumber + "\nDescription: "
					+ errorString + "\nDiagnostic: " + diagnostic;
			alert("Error - Could not terminate communication with the LMS.\n\nYour results may not be recorded.\n\n"
					+ errorDescription);
			return;
		}
	};
	this.processGetValue = function(element, checkError) {
		var result;
		if (this.initialized == false || this.terminateCalled == true) {
			return;
		}
		result = this.API.GetValue(element);
		if (checkError == true && result == "") {
			var errorNumber = this.API.GetLastError();
			if (errorNumber != this.SCORM_NO_ERROR) {
				var errorString = this.API.GetErrorString(errorNumber);
				var diagnostic = this.API.GetDiagnostic(errorNumber);
				var errorDescription = "Number: " + errorNumber
						+ "\nDescription: " + errorString + "\nDiagnostic: "
						+ diagnostic;
				alert("Error - Could not retrieve a value from the LMS.\n\n"
						+ errorDescription);
				return "";
			}
		}
		return result;
	};
	this.processSetValue = function(element, value) {
		var result;
		if (this.initialized == false || this.terminateCalled == true) {
			return;
		}
		result = this.API.SetValue(element, value);
		if (result == this.SCORM_FALSE) {
			var errorNumber = this.API.GetLastError();
			var errorString = this.API.GetErrorString(errorNumber);
			var diagnostic = this.API.GetDiagnostic(errorNumber);
			var errorDescription = "Number: " + errorNumber + "\nDescription: "
					+ errorString + "\nDiagnostic: " + diagnostic;
			alert("Error - Could not store a value in the LMS.\n\nYour results may not be recorded.\n\n"
					+ errorDescription);
			return;
		}
	};
	

};
