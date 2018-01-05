var chessBoard=[];
var me=true;
var over=false;

for(var i=0;i<15;i++){ chessboard[i]="[];" for(var="" j="0;j<15;j++){" chessboard[i][j]="0;" }="" 赢="" var="" wins="[];" count="0;" 玩家="" mywin="[];" computerwin="[];" 15行15列="" i="0;i<15;i++){" wins[i]="[];" wins[i][j]="[];" 赢法统计横-="" k="0;k<5;k++){" wins[i][j+k][count]="true;" count++;="" 竖|="" wins[i+k][j][count]="true;" 斜\斜="" wins[i+k][j+k][count]="true;" 左斜="" wins[i-k][j+k][count]="true;" console.log(count);="" mywin[k]="0;" computerwin[k]="0;" chess="document.getElementById('chess');" context="chess.getContext('2d');" context.strokestyle="#bfbfbf" ;="" logo="new" image();="" logo.src="images/4.png" logo.onload="function(){" context.drawimage(logo,0,0,450,450);="" drawchessboard();="" };="" drawchessboard="function(){" context.moveto(15+i*30,15);="" context.lineto(15+i*30,435);="" context.stroke();="" context.moveto(15,15+i*30);="" context.lineto(435,15+i*30);="" onestep="function(i,j,me){" context.beginpath();="" context.arc(15+i*30,15+j*30,13,0,2*math.pi);="" context.closepath();="" gradient="context.createRadialGradient(15+i*30+2,15+j*30-2,13,15+i*30+2,15+j*30-2,0);" if(me){="" gradient.addcolorstop(0,"#0a0a0a");="" gradient.addcolorstop(1,"#636766");="" }else{="" gradient.addcolorstop(0,"#d1d1d1");="" gradient.addcolorstop(1,"#f9f9f9");="" context.fillstyle="gradient;" context.fill();="" chess.onclick="function(e){" if(over){="" return;="" if(!me){="" x="e.offsetX;" y="e.offsetY;" if(chessboard[i][j]="=0){" onestep(i,j,me);="" if(wins[i][j][k]){="" mywin[k]++;="" if(mywin[k]="=5){" window.alert("你赢了!");="" over="true;" if(!over){="" me="!me;" computerai();="" computerai="function(){" myscore="[];" computerscore="[];" max="0;" u="0,v=0;" myscore[i]="[];" computerscore[i]="[];" myscore[i][j]="0;" computerscore[i][j]="0;" myscore[i][j]+="200;" }else="" if(computerwin[k]="=1){" computerscore[i][j]+="220;" if(myscore[i][j]="">max){
					max=myScore[i][j];
					u=i;
					v=j;
				}else if(myScore[i][j]==max){
					if(computerScore[i][j]>computerScore[u][v]){
						u=i;
						v=j;
					}
				}
				if(computerScore[i][j]>max){
					max=computerScore[i][j];
					u=i;
					v=j;
				}else if(computerScore[i][j]==max){
					if(myScore[i][j]>myScore[u][v]){
						u=i;
						v=j;
					}
				}
			}
		}
	}
	oneStep(u,v,false);
	chessBoard[u][v]=2;
	for(var k=0;k</15;i++){>