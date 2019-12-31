alert("Please enter the number of players.");

// button status
var btn = [];
var cal = [];
var p = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

row0 = [true, true, true, true, true,
	true, true, true, true]
row1 = [true, true, true, true, true,
	true, true, true, true]
row2 = [true, true, true, true, true,
	true, true, true, true]
row3 = [true, true, true, true, true,
	true, true, true, true]
row4 = [true, true, true, true, true,
	true, true, true, true]
row5 = [true, true, true, true, true,
	true, true, true, true]
row6 = [true, true, true, true, true,
	true, true, true, true]
row7 = [true, true, true, true, true,
	true, true, true, true]
row8 = [true, true, true, true, true,
	true, true, true, true]
row9 = [true, true, true, true, true,
	true, true, true, true]
row10 = [true, true, true, true, true,
	true, true, true, true]
row11 = [true, true, true, true, true,
	true, true, true, true]
row12 = [true, true, true, true, true,
	true, true, true, true]
row13 = [true, true, true, true, true,
	true, true, true, true]
row14 = [true, true, true, true, true,
	true, true, true, true]
row15 = [true, true, true, true, true,
	true, true, true, true]
row16 = [true, true, true, true, true,
	true, true, true, true]
row17 = [true, true, true, true, true,
	true, true, true, true]
row18 = [true, true, true, true, true,
	true, true, true, true]
row19 = [true, true, true, true, true,
	true, true, true, true]


// append arrays

btn.push(row0);
btn.push(row1);
btn.push(row2);
btn.push(row3);
btn.push(row4);
btn.push(row5);
btn.push(row6);
btn.push(row7);
btn.push(row8);
btn.push(row9);

cal.push(row10);
cal.push(row11);
cal.push(row12);
cal.push(row13);
cal.push(row14);
cal.push(row15);
cal.push(row16);
cal.push(row17);
cal.push(row18);
cal.push(row19);

var player = 2;
function processFormData() {
  const formElement = document.getElementById("form");
  player = formElement[0].value;
  var ind = player - 1
  for(i = 0; i < 10; i++){
  	for(j = ind; j < 9; j++){
  		btn[i][j] = false;
  	}
  }
  if(player >= 2 && player <=10){
  	alert(player + " players.")
  }else{
  	alert("Out of range(2 - 10).");
  } 
  return player;
}



function add_line1(){
	if (btn[0][0] == true){
		$(this).css('background-color', 'red');
		cal[0][0] = false;
		btn[0][0] = false;
		//btn[0][1] = false;		
	}
}
function add_line2(){
	if (btn[0][1] == true){
		$(this).css('background-color', 'red');
		cal[0][1] = false;
		btn[0][1] = false;
		btn[0][0] = false;
		btn[0][2] = false;		
	}
}
function add_line3(){
	if (btn[0][2] == true){
		$(this).css('background-color', 'red');
		cal[0][2] = false;
		btn[0][2] = false;
		btn[0][1] = false;
		btn[0][3] = false;		
	}
}
function add_line4(){
	if (btn[0][3] == true){
		$(this).css('background-color', 'red');
		cal[0][3] = false;
		btn[0][3] = false;
		btn[0][2] = false;
		btn[0][4] = false;		
	}
}
function add_line5(){
	if (btn[0][4] == true){
		$(this).css('background-color', 'red');
		cal[0][4] = false;
		btn[0][4] = false;
		btn[0][3] = false;
		btn[0][5] = false;		
	}
}
function add_line6(){
	if (btn[0][5] == true){
		$(this).css('background-color', 'red');
		cal[0][5] = false;
		btn[0][5] = false;
		btn[0][4] = false;
		btn[0][6] = false;		
	}
}
function add_line7(){
	if (btn[0][6] == true){
		$(this).css('background-color', 'red');
		cal[0][6] = false;
		btn[0][6] = false;
		btn[0][5] = false;
		btn[0][7] = false;		
	}
}
function add_line8(){
	if (btn[0][7] == true){
		$(this).css('background-color', 'red');
		cal[0][7] = false;
		btn[0][7] = false;
		btn[0][6] = false;
		btn[0][8] = false;		
	}
}
function add_line9(){
	if (btn[0][8] == true){
		$(this).css('background-color', 'red');
		cal[0][8] = false;
		btn[0][8] = false;
		btn[0][7] = false;		
	}
}
function add_line11(){
	if (btn[1][0] == true){
		$(this).css('background-color', 'red');
		cal[1][0] = false;
		btn[1][0] = false;
		btn[1][1] = false;		
	}
}
function add_line12(){
	if (btn[1][1] == true){
		$(this).css('background-color', 'red');
		cal[1][1] = false;
		btn[1][1] = false;
		btn[1][0] = false;
		btn[1][2] = false;		
	}
}
function add_line13(){
	if (btn[1][2] == true){
		$(this).css('background-color', 'red');
		cal[1][2] = false;
		btn[1][2] = false;
		btn[1][1] = false;
		btn[1][3] = false;		
	}
}
function add_line14(){
	if (btn[1][3] == true){
		$(this).css('background-color', 'red');
		cal[1][3] = false;
		btn[1][3] = false;
		btn[1][2] = false;
		btn[1][4] = false;		
	}
}
function add_line15(){
	if (btn[1][4] == true){
		$(this).css('background-color', 'red');
		cal[1][4] = false;
		btn[1][4] = false;
		btn[1][3] = false;
		btn[1][5] = false;		
	}
}
function add_line16(){
	if (btn[1][5] == true){
		$(this).css('background-color', 'red');
		cal[1][5] = false;
		btn[1][5] = false;
		btn[1][4] = false;
		btn[1][6] = false;		
	}
}
function add_line17(){
	if (btn[1][6] == true){
		$(this).css('background-color', 'red');
		cal[1][6] = false;
		btn[1][6] = false;
		btn[1][5] = false;
		btn[1][7] = false;		
	}
}
function add_line18(){
	if (btn[1][7] == true){
		$(this).css('background-color', 'red');
		cal[1][7] = false;
		btn[1][7] = false;
		btn[1][6] = false;
		btn[1][8] = false;		
	}
}
function add_line19(){
	if (btn[1][8] == true){
		$(this).css('background-color', 'red');
		cal[1][8] = false;
		btn[1][8] = false;
		btn[1][7] = false;		
	}
}
function add_line21(){
	if (btn[2][0] == true){
		$(this).css('background-color', 'red');
		cal[2][0] = false;
		btn[2][0] = false;
		btn[2][1] = false;		
	}
}
function add_line22(){
	if (btn[2][1] == true){
		$(this).css('background-color', 'red');
		cal[2][1] = false;
		btn[2][1] = false;
		btn[2][0] = false;
		btn[2][2] = false;		
	}
}
function add_line23(){
	if (btn[2][2] == true){
		$(this).css('background-color', 'red');
		cal[2][2] = false;
		btn[2][2] = false;
		btn[2][1] = false;
		btn[2][3] = false;		
	}
}
function add_line24(){
	if (btn[2][3] == true){
		$(this).css('background-color', 'red');
		cal[2][3] = false;
		btn[2][3] = false;
		btn[2][2] = false;
		btn[2][4] = false;		
	}
}
function add_line25(){
	if (btn[2][4] == true){
		$(this).css('background-color', 'red');
		cal[2][4] = false;
		btn[2][4] = false;
		btn[2][3] = false;
		btn[2][5] = false;		
	}
}
function add_line26(){
	if (btn[2][5] == true){
		$(this).css('background-color', 'red');
		cal[2][5] = false;
		btn[2][5] = false;
		btn[2][4] = false;
		btn[2][6] = false;		
	}
}
function add_line27(){
	if (btn[2][6] == true){
		$(this).css('background-color', 'red');
		cal[2][6] = false;
		btn[2][6] = false;
		btn[2][5] = false;
		btn[2][7] = false;		
	}
}
function add_line28(){
	if (btn[2][7] == true){
		$(this).css('background-color', 'red');
		cal[2][7] = false;
		btn[2][7] = false;
		btn[2][6] = false;
		btn[2][8] = false;		
	}
}
function add_line29(){
	if (btn[2][8] == true){
		$(this).css('background-color', 'red');
		cal[2][8] = false;
		btn[2][8] = false;
		btn[2][7] = false;		
	}
}
function add_line31(){
	if (btn[3][0] == true){
		$(this).css('background-color', 'red');
		cal[3][0] = false;
		btn[3][0] = false;
		btn[3][1] = false;		
	}
}
function add_line32(){
	if (btn[3][1] == true){
		$(this).css('background-color', 'red');
		cal[3][1] = false;
		btn[3][1] = false;
		btn[3][0] = false;
		btn[3][2] = false;		
	}
}
function add_line33(){
	if (btn[3][2] == true){
		$(this).css('background-color', 'red');
		cal[3][2] = false;
		btn[3][2] = false;
		btn[3][1] = false;
		btn[3][3] = false;		
	}
}
function add_line34(){
	if (btn[3][3] == true){
		$(this).css('background-color', 'red');
		cal[3][3] = false;
		btn[3][3] = false;
		btn[3][2] = false;
		btn[3][4] = false;		
	}
}
function add_line35(){
	if (btn[3][4] == true){
		$(this).css('background-color', 'red');
		cal[3][4] = false;
		btn[3][4] = false;
		btn[3][3] = false;
		btn[3][5] = false;		
	}
}
function add_line36(){
	if (btn[3][5] == true){
		$(this).css('background-color', 'red');
		cal[3][5] = false;
		btn[3][5] = false;
		btn[3][4] = false;
		btn[3][6] = false;		
	}
}
function add_line37(){
	if (btn[3][6] == true){
		$(this).css('background-color', 'red');
		cal[3][6] = false;
		btn[3][6] = false;
		btn[3][5] = false;
		btn[3][7] = false;		
	}
}
function add_line38(){
	if (btn[3][7] == true){
		$(this).css('background-color', 'red');
		cal[3][7] = false;
		btn[3][7] = false;
		btn[3][6] = false;
		btn[3][8] = false;		
	}
}
function add_line39(){
	if (btn[3][8] == true){
		$(this).css('background-color', 'red');
		cal[3][8] = false;
		btn[3][8] = false;
		btn[3][7] = false;		
	}
}
function add_line41(){
	if (btn[4][0] == true){
		$(this).css('background-color', 'red');
		cal[4][0] = false;
		btn[4][0] = false;
		btn[4][1] = false;		
	}
}
function add_line42(){
	if (btn[4][1] == true){
		$(this).css('background-color', 'red');
		cal[4][1] = false;
		btn[4][1] = false;
		btn[4][0] = false;
		btn[4][2] = false;		
	}
}
function add_line43(){
	if (btn[4][2] == true){
		$(this).css('background-color', 'red');
		cal[4][2] = false;
		btn[4][2] = false;
		btn[4][1] = false;
		btn[4][3] = false;		
	}
}
function add_line44(){
	if (btn[4][3] == true){
		$(this).css('background-color', 'red');
		cal[4][3] = false;
		btn[4][3] = false;
		btn[4][2] = false;
		btn[4][4] = false;		
	}
}
function add_line45(){
	if (btn[4][4] == true){
		$(this).css('background-color', 'red');
		cal[4][4] = false;
		btn[4][4] = false;
		btn[4][3] = false;
		btn[4][5] = false;		
	}
}
function add_line46(){
	if (btn[4][5] == true){
		$(this).css('background-color', 'red');
		cal[4][5] = false;
		btn[4][5] = false;
		btn[4][4] = false;
		btn[4][6] = false;		
	}
}
function add_line47(){
	if (btn[4][6] == true){
		$(this).css('background-color', 'red');
		cal[4][6] = false;
		btn[4][6] = false;
		btn[4][5] = false;
		btn[4][7] = false;		
	}
}
function add_line48(){
	if (btn[4][7] == true){
		$(this).css('background-color', 'red');
		cal[4][7] = false;
		btn[4][7] = false;
		btn[4][6] = false;
		btn[4][8] = false;		
	}
}
function add_line49(){
	if (btn[4][8] == true){
		$(this).css('background-color', 'red');
		cal[4][8] = false;
		btn[4][8] = false;
		btn[4][7] = false;		
	}
}
function add_line51(){
	if (btn[5][0] == true){
		$(this).css('background-color', 'red');
		cal[5][0] = false;
		btn[5][0] = false;
		btn[5][1] = false;		
	}
}
function add_line52(){
	if (btn[5][1] == true){
		$(this).css('background-color', 'red');
		cal[5][1] = false;
		btn[5][1] = false;
		btn[5][0] = false;
		btn[5][2] = false;		
	}
}
function add_line53(){
	if (btn[5][2] == true){
		$(this).css('background-color', 'red');
		cal[5][2] = false;
		btn[5][2] = false;
		btn[5][1] = false;
		btn[5][3] = false;		
	}
}
function add_line54(){
	if (btn[5][3] == true){
		$(this).css('background-color', 'red');
		cal[5][3] = false;
		btn[5][3] = false;
		btn[5][2] = false;
		btn[5][4] = false;		
	}
}
function add_line55(){
	if (btn[5][4] == true){
		$(this).css('background-color', 'red');
		cal[5][4] = false;
		btn[5][4] = false;
		btn[5][3] = false;
		btn[5][5] = false;		
	}
}
function add_line56(){
	if (btn[5][5] == true){
		$(this).css('background-color', 'red');
		cal[5][5] = false;
		btn[5][5] = false;
		btn[5][4] = false;
		btn[5][6] = false;		
	}
}
function add_line57(){
	if (btn[5][6] == true){
		$(this).css('background-color', 'red');
		cal[5][6] = false;
		btn[5][6] = false;
		btn[5][5] = false;
		btn[5][7] = false;		
	}
}
function add_line58(){
	if (btn[5][7] == true){
		$(this).css('background-color', 'red');
		cal[5][7] = false;
		btn[5][7] = false;
		btn[5][6] = false;
		btn[5][8] = false;		
	}
}
function add_line59(){
	if (btn[5][8] == true){
		$(this).css('background-color', 'red');
		cal[5][8] = false;
		btn[5][8] = false;
		btn[5][7] = false;		
	}
}
function add_line61(){
	if (btn[6][0] == true){
		$(this).css('background-color', 'red');
		cal[6][0] = false;
		btn[6][0] = false;
		btn[6][1] = false;		
	}
}
function add_line62(){
	if (btn[6][1] == true){
		$(this).css('background-color', 'red');
		cal[6][1] = false;
		btn[6][1] = false;
		btn[6][0] = false;
		btn[6][2] = false;		
	}
}
function add_line63(){
	if (btn[6][2] == true){
		$(this).css('background-color', 'red');
		cal[6][2] = false;
		btn[6][2] = false;
		btn[6][1] = false;
		btn[6][3] = false;		
	}
}
function add_line64(){
	if (btn[6][3] == true){
		$(this).css('background-color', 'red');
		cal[6][3] = false;
		btn[6][3] = false;
		btn[6][2] = false;
		btn[6][4] = false;		
	}
}
function add_line65(){
	if (btn[6][4] == true){
		$(this).css('background-color', 'red');
		cal[6][4] = false;
		btn[6][4] = false;
		btn[6][3] = false;
		btn[6][5] = false;		
	}
}
function add_line66(){
	if (btn[6][5] == true){
		$(this).css('background-color', 'red');
		cal[6][5] = false;
		btn[6][5] = false;
		btn[6][4] = false;
		btn[6][6] = false;		
	}
}
function add_line67(){
	if (btn[6][6] == true){
		$(this).css('background-color', 'red');
		cal[6][6] = false;
		btn[6][6] = false;
		btn[6][5] = false;
		btn[6][7] = false;		
	}
}
function add_line68(){
	if (btn[6][7] == true){
		$(this).css('background-color', 'red');
		cal[6][7] = false;
		btn[6][7] = false;
		btn[6][6] = false;
		btn[6][8] = false;		
	}
}
function add_line69(){
	if (btn[6][8] == true){
		$(this).css('background-color', 'red');
		cal[6][8] = false;
		btn[6][8] = false;
		btn[6][7] = false;		
	}
}
function add_line71(){
	if (btn[7][0] == true){
		$(this).css('background-color', 'red');
		cal[7][0] = false;
		btn[7][0] = false;
		btn[7][1] = false;		
	}
}
function add_line72(){
	if (btn[7][1] == true){
		$(this).css('background-color', 'red');
		cal[7][1] = false;
		btn[7][1] = false;
		btn[7][0] = false;
		btn[7][2] = false;		
	}
}
function add_line73(){
	if (btn[7][2] == true){
		$(this).css('background-color', 'red');
		cal[7][2] = false;
		btn[7][2] = false;
		btn[7][1] = false;
		btn[7][3] = false;		
	}
}
function add_line74(){
	if (btn[7][3] == true){
		$(this).css('background-color', 'red');
		cal[7][3] = false;
		btn[7][3] = false;
		btn[7][2] = false;
		btn[7][4] = false;		
	}
}
function add_line75(){
	if (btn[7][4] == true){
		$(this).css('background-color', 'red');
		cal[7][4] = false;
		btn[7][4] = false;
		btn[7][3] = false;
		btn[7][5] = false;		
	}
}
function add_line76(){
	if (btn[7][5] == true){
		$(this).css('background-color', 'red');
		cal[7][5] = false;
		btn[7][5] = false;
		btn[7][4] = false;
		btn[7][6] = false;		
	}
}
function add_line77(){
	if (btn[7][6] == true){
		$(this).css('background-color', 'red');
		cal[7][6] = false;
		btn[7][6] = false;
		btn[7][5] = false;
		btn[7][7] = false;		
	}
}
function add_line78(){
	if (btn[7][7] == true){
		$(this).css('background-color', 'red');
		cal[7][7] = false;
		btn[7][7] = false;
		btn[7][6] = false;
		btn[7][8] = false;		
	}
}
function add_line79(){
	if (btn[7][8] == true){
		$(this).css('background-color', 'red');
		cal[7][8] = false;
		btn[7][8] = false;
		btn[7][7] = false;		
	}
}
function add_line81(){
	if (btn[8][0] == true){
		$(this).css('background-color', 'red');
		cal[8][0] = false;
		btn[8][0] = false;
		btn[8][1] = false;		
	}
}
function add_line82(){
	if (btn[8][1] == true){
		$(this).css('background-color', 'red');
		cal[8][1] = false;
		btn[8][1] = false;
		btn[8][0] = false;
		btn[8][2] = false;		
	}
}
function add_line83(){
	if (btn[8][2] == true){
		$(this).css('background-color', 'red');
		cal[8][2] = false;
		btn[8][2] = false;
		btn[8][1] = false;
		btn[8][3] = false;		
	}
}
function add_line84(){
	if (btn[8][3] == true){
		$(this).css('background-color', 'red');
		cal[8][3] = false;
		btn[8][3] = false;
		btn[8][2] = false;
		btn[8][4] = false;		
	}
}
function add_line85(){
	if (btn[8][4] == true){
		$(this).css('background-color', 'red');
		cal[8][4] = false;
		btn[8][4] = false;
		btn[8][3] = false;
		btn[8][5] = false;		
	}
}
function add_line86(){
	if (btn[8][5] == true){
		$(this).css('background-color', 'red');
		cal[8][5] = false;
		btn[8][5] = false;
		btn[8][4] = false;
		btn[8][6] = false;		
	}
}
function add_line87(){
	if (btn[8][6] == true){
		$(this).css('background-color', 'red');
		cal[8][6] = false;
		btn[8][6] = false;
		btn[8][5] = false;
		btn[8][7] = false;		
	}
}
function add_line88(){
	if (btn[8][7] == true){
		$(this).css('background-color', 'red');
		cal[8][7] = false;
		btn[8][7] = false;
		btn[8][6] = false;
		btn[8][8] = false;		
	}
}
function add_line89(){
	if (btn[8][8] == true){
		$(this).css('background-color', 'red');
		cal[8][8] = false;
		btn[8][8] = false;
		btn[8][7] = false;		
	}
}
function add_line91(){
	if (btn[9][0] == true){
		$(this).css('background-color', 'red');
		cal[9][0] = false;
		btn[9][0] = false;
		btn[9][1] = false;		
	}
}
function add_line92(){
	if (btn[9][1] == true){
		$(this).css('background-color', 'red');
		cal[9][1] = false;
		btn[9][1] = false;
		btn[9][0] = false;
		btn[9][2] = false;		
	}
}
function add_line93(){
	if (btn[9][2] == true){
		$(this).css('background-color', 'red');
		cal[9][2] = false;
		btn[9][2] = false;
		btn[9][1] = false;
		btn[9][3] = false;		
	}
}
function add_line94(){
	if (btn[9][3] == true){
		$(this).css('background-color', 'red');
		cal[9][3] = false;
		btn[9][3] = false;
		btn[9][2] = false;
		btn[9][4] = false;		
	}
}
function add_line95(){
	if (btn[9][4] == true){
		$(this).css('background-color', 'red');
		cal[9][4] = false;
		btn[9][4] = false;
		btn[9][3] = false;
		btn[9][5] = false;		
	}
}
function add_line96(){
	if (btn[9][5] == true){
		$(this).css('background-color', 'red');
		cal[9][5] = false;
		btn[9][5] = false;
		btn[9][4] = false;
		btn[9][6] = false;		
	}
}
function add_line97(){
	if (btn[9][6] == true){
		$(this).css('background-color', 'red');
		cal[9][6] = false;
		btn[9][6] = false;
		btn[9][5] = false;
		btn[9][7] = false;		
	}
}
function add_line98(){
	if (btn[9][7] == true){
		$(this).css('background-color', 'red');
		cal[9][7] = false;
		btn[9][7] = false;
		btn[9][6] = false;
		btn[9][8] = false;		
	}
}
function add_line99(){
	if (btn[9][8] == true){
		$(this).css('background-color', 'red');
		cal[9][8] = false;
		btn[9][8] = false;
		btn[9][7] = false;		
	}
}

function title1(){
	$('img#sub2').css('height', '32%');
	$('img#sub2').css('width', '7%');
	$('img#sub2').css('top', '70%');
	$('img#sub3').css('height', '32%');
	$('img#sub3').css('width', '6%');
	$('img#sub3').css('top', '70%');
	$(this).css('height', '40%');
	$(this).css('width', '9.4%');
	$(this).css('top', '62%');
}

function title2(){
	$('img#sub1').css('height', '32%');
	$('img#sub1').css('width', '8.2%');
	$('img#sub1').css('top', '70%');
	$('img#sub3').css('height', '32%');
	$('img#sub3').css('width', '6%');
	$('img#sub3').css('top', '70%');
	$(this).css('height', '40%');
	$(this).css('width', '9%');
	$(this).css('top', '62%');	
}

function title3(){
	$('img#sub1').css('height', '32%');
	$('img#sub1').css('width', '8.2%');
	$('img#sub1').css('top', '70%');
	$('img#sub2').css('height', '32%');
	$('img#sub2').css('width', '7%');
	$('img#sub2').css('top', '70%');
	$(this).css('height', '40%');
	$(this).css('width', '8.4%');
	$(this).css('top', '62%');
}


function get_result(){
	for(i = 0; i < player; i++){ //i: player
		for(j = 0; j < 10; j++){ //j: round
			var R = p[i]
			var indL = R - 1; //indL: for check move Left
			if(R > 0 && cal[j][indL] == false){
				R--;
				console.log(R);
			}
			else if(R < 9 && cal[j][R] == false){
				R++;
				console.log(R);
			}
			p[i] = R;
		}
	}
	for(i = 0; i < 10; i++){
		p[i] = p[i] + 1;
	}
	alert("Player1: " + p[0] +
		"\nPlayer2: " + p[1] +
		"\nPlayer3: " + p[2] +
		"\nPlayer4: " + p[3] +
		"\nPlayer5: " + p[4] +
		"\nPlayer6: " + p[5] +
		"\nPlayer7: " + p[6] +
		"\nPlayer8: " + p[7] +
		"\nPlayer9: " + p[8] +
		"\nPlayer10: " + p[9])
}





$(document).ready(function() {
	$('img#sub1').click(title1);
	$('img#sub2').click(title2);
	$('img#sub3').click(title3);
	$('div#1').click(add_line1);
	$('div#2').click(add_line2);
	$('div#3').click(add_line3);
	$('div#4').click(add_line4);
	$('div#5').click(add_line5);
	$('div#6').click(add_line6);
	$('div#7').click(add_line7);
	$('div#8').click(add_line8);
	$('div#9').click(add_line9);
	$('div#11').click(add_line11);
	$('div#12').click(add_line12);
	$('div#13').click(add_line13);
	$('div#14').click(add_line14);
	$('div#15').click(add_line15);
	$('div#16').click(add_line16);
	$('div#17').click(add_line17);
	$('div#18').click(add_line18);
	$('div#19').click(add_line19);
	$('div#21').click(add_line21);
	$('div#22').click(add_line22);
	$('div#23').click(add_line23);
	$('div#24').click(add_line24);
	$('div#25').click(add_line25);
	$('div#26').click(add_line26);
	$('div#27').click(add_line27);
	$('div#28').click(add_line28);
	$('div#29').click(add_line29);
	$('div#31').click(add_line31);
	$('div#32').click(add_line32);
	$('div#33').click(add_line33);
	$('div#34').click(add_line34);
	$('div#35').click(add_line35);
	$('div#36').click(add_line36);
	$('div#37').click(add_line37);
	$('div#38').click(add_line38);
	$('div#39').click(add_line39);
	$('div#41').click(add_line41);
	$('div#42').click(add_line42);
	$('div#43').click(add_line43);
	$('div#44').click(add_line44);
	$('div#45').click(add_line45);
	$('div#46').click(add_line46);
	$('div#47').click(add_line47);
	$('div#48').click(add_line48);
	$('div#49').click(add_line49);
	$('div#51').click(add_line51);
	$('div#52').click(add_line52);
	$('div#53').click(add_line53);
	$('div#54').click(add_line54);
	$('div#55').click(add_line55);
	$('div#56').click(add_line56);
	$('div#57').click(add_line57);
	$('div#58').click(add_line58);
	$('div#59').click(add_line59);
	$('div#61').click(add_line61);
	$('div#62').click(add_line62);
	$('div#63').click(add_line63);
	$('div#64').click(add_line64);
	$('div#65').click(add_line65);
	$('div#66').click(add_line66);
	$('div#67').click(add_line67);
	$('div#68').click(add_line68);
	$('div#69').click(add_line69);
	$('div#71').click(add_line71);
	$('div#72').click(add_line72);
	$('div#73').click(add_line73);
	$('div#74').click(add_line74);
	$('div#75').click(add_line75);
	$('div#76').click(add_line76);
	$('div#77').click(add_line77);
	$('div#78').click(add_line78);
	$('div#79').click(add_line79);
	$('div#81').click(add_line81);
	$('div#82').click(add_line82);
	$('div#83').click(add_line83);
	$('div#84').click(add_line84);
	$('div#85').click(add_line85);
	$('div#86').click(add_line86);
	$('div#87').click(add_line87);
	$('div#88').click(add_line88);
	$('div#89').click(add_line89);
	$('div#91').click(add_line91);
	$('div#92').click(add_line92);
	$('div#93').click(add_line93);
	$('div#94').click(add_line94);
	$('div#95').click(add_line95);
	$('div#96').click(add_line96);
	$('div#97').click(add_line97);
	$('div#98').click(add_line98);
	$('div#99').click(add_line99);
	$('#fin').click(get_result);
})
