function sposta2(caller,a,b){
	act=document.getElementById(caller).value;
	if(document.getElementById(a).value=="-")
		{ document.getElementById(a).value=act; document.getElementById(a).style.background="white"; document.getElementById(caller).value="-"; document.getElementById(caller).style.background="black";gamestate();return;}
	if(document.getElementById(b).value=="-")
		{ document.getElementById(b).value=act;document.getElementById(b).style.background="white"; document.getElementById(caller).value="-"; document.getElementById(caller).style.background="black";gamestate();return;}  
}

function sposta3(caller,a,b,c){
	act=document.getElementById(caller).value;
	if(document.getElementById(a).value=="-")
		{ document.getElementById(a).value=act; document.getElementById(a).style.background="white"; document.getElementById(caller).value="-"; document.getElementById(caller).style.background="black";gamestate();return;}
	if(document.getElementById(b).value=="-")
		{ document.getElementById(b).value=act;document.getElementById(b).style.background="white"; document.getElementById(caller).value="-"; document.getElementById(caller).style.background="black";gamestate();return;}  
	if(document.getElementById(c).value=="-")
		{ document.getElementById(c).value=act; document.getElementById(c).style.background="white";document.getElementById(caller).value="-";document.getElementById(caller).style.background="black";gamestate();return;}   
}

function sposta4(caller,a,b,c,d){
	act=document.getElementById(caller).value;
	if(document.getElementById(a).value=="-")
		{ document.getElementById(a).value=act; document.getElementById(a).style.background="white"; document.getElementById(caller).value="-"; document.getElementById(caller).style.background="black"; gamestate();return;}
	if(document.getElementById(b).value=="-")
		{ document.getElementById(b).value=act;document.getElementById(b).style.background="white"; document.getElementById(caller).value="-"; document.getElementById(caller).style.background="black";gamestate();return;}  
	if(document.getElementById(c).value=="-")
		{ document.getElementById(c).value=act; document.getElementById(c).style.background="white";document.getElementById(caller).value="-";document.getElementById(caller).style.background="black";gamestate();return;}   
	if(document.getElementById(d).value=="-")
		{ document.getElementById(d).value=act; document.getElementById(d).style.background="white"; document.getElementById(caller).value="-"; document.getElementById(caller).style.background="black";gamestate(); return;} 
}

function gamestate(){
	if(document.getElementById("1").value=="1")
		if(document.getElementById("2").value=="2")
			if(document.getElementById("3").value=="3")
				if(document.getElementById("4").value=="4")
					if(document.getElementById("5").value=="5")
						if(document.getElementById("6").value=="6")
							if(document.getElementById("7").value=="7")
								if(document.getElementById("8").value=="8")
									if(document.getElementById("9").value=="9")
										if(document.getElementById("10").value=="10")
											if(document.getElementById("11").value=="11")
												if(document.getElementById("12").value=="12")
													if(document.getElementById("13").value=="13")
														if(document.getElementById("14").value=="14")
															if(document.getElementById("15").value=="15")
																{ 
                                                                	clearInterval(timerId);
                                                                    tempo=parseInt(document.getElementById("timer").value);
                                                                    alert("Hai finito! Il tuo tempo e' di "+tempo+" secondi!");                                                                      
                                                                }

}

function randomFunct() {  
        return 0.5 - Math.round(Math.random());  
}

function start() {
	var arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "-"];
	arr.sort(randomFunct);
	var i=0;
	
	document.getElementById("1").value=arr[i]; if(arr[i++]=="-") document.getElementById("1").style.background="black"; else document.getElementById("1").style.background="white";
	document.getElementById("2").value=arr[i]; if(arr[i++]=="-") document.getElementById("2").style.background="black"; else document.getElementById("2").style.background="white";
	document.getElementById("3").value=arr[i]; if(arr[i++]=="-") document.getElementById("3").style.background="black"; else document.getElementById("3").style.background="white";
	document.getElementById("4").value=arr[i]; if(arr[i++]=="-") document.getElementById("4").style.background="black"; else document.getElementById("4").style.background="white";
	document.getElementById("5").value=arr[i]; if(arr[i++]=="-") document.getElementById("5").style.background="black"; else document.getElementById("5").style.background="white";
	document.getElementById("6").value=arr[i]; if(arr[i++]=="-") document.getElementById("6").style.background="black"; else document.getElementById("6").style.background="white";
	document.getElementById("7").value=arr[i]; if(arr[i++]=="-") document.getElementById("7").style.background="black"; else document.getElementById("7").style.background="white";
	document.getElementById("8").value=arr[i]; if(arr[i++]=="-") document.getElementById("8").style.background="black"; else document.getElementById("8").style.background="white";
	document.getElementById("9").value=arr[i]; if(arr[i++]=="-") document.getElementById("9").style.background="black"; else document.getElementById("9").style.background="white";
	document.getElementById("10").value=arr[i]; if(arr[i++]=="-") document.getElementById("10").style.background="black"; else document.getElementById("10").style.background="white";
	document.getElementById("11").value=arr[i]; if(arr[i++]=="-") document.getElementById("11").style.background="black"; else document.getElementById("11").style.background="white";
	document.getElementById("12").value=arr[i]; if(arr[i++]=="-") document.getElementById("12").style.background="black"; else document.getElementById("12").style.background="white";
	document.getElementById("13").value=arr[i]; if(arr[i++]=="-") document.getElementById("13").style.background="black"; else document.getElementById("13").style.background="white";
	document.getElementById("14").value=arr[i]; if(arr[i++]=="-") document.getElementById("14").style.background="black"; else document.getElementById("14").style.background="white";
	document.getElementById("15").value=arr[i]; if(arr[i++]=="-") document.getElementById("15").style.background="black"; else document.getElementById("15").style.background="white";
	document.getElementById("16").value=arr[i]; if(arr[i++]=="-") document.getElementById("16").style.background="black"; else document.getElementById("16").style.background="white";
	
	document.getElementById("timer").value=0;
	if (typeof timerId != 'undefined')
	clearInterval(timerId);
	timerId=setInterval(function () {document.getElementById("timer").value++;},1000)
	
}








