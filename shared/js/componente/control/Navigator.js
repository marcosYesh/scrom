/**
 * 
 */
var Navigator = function(idPrev, idNext, funcaoPrev, funcaoNext) {
	if (typeof idPrev == "undefined")this.idPrev = "btnPrev";
	else this.idPrev = idPrev;
	if (typeof idNext == "undefined") this.idNext = "btnNext";
	else this.idNext = idNext;
	if (typeof funcaoNext == "undefined") this.funcaoNext = "funcaoNext";
	else this.funcaoNext = "parent." + funcaoNext;
	if (typeof funcaoPrev == "undefined") this.funcaoPrev = "funcaoPrev";
	else this.funcaoPrev = "parent." + funcaoPrev;
	
	
	this.exibirPrev = function()
	{
		$("#" + idPrev).show();
	}
	this.escondePrev = function()
	{
		$("#" + idPrev).hide();
	}
	this.exibirNext = function()
	{
		$("#" + idNext).show();
	}
	this.escondeNext = function()
	{
		$("#" + idNext).hide();
	}
	
	
	var funcaoNext = this.funcaoNext;
	var funcaoPrev = this.funcaoPrev;
	var idNext = this.idNext;
	var idPrev = this.idPrev;
	$('#' + this.idNext).click(function(e) {
		exec(funcaoNext);
	}).trigger('change');
	$('#' + this.idPrev).click(function(e) {
		exec(funcaoPrev);
	}).trigger('change');
	function exec(funcao){
		funcao = "parent."+ funcao;
		eval(funcao + "()");
	}
	
}
