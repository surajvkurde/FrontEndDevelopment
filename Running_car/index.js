pos=0;

var y;

function start(){
    y=setInterval(run,100);
    function run(){
        if(pos==1400){
            // uncomment following line to stop car at end of the screen
             // clearInterval(y);
            pos=0;
        }
        else{
        pos+=5;
        var x=document.getElementById("img");
        x.style.marginLeft=pos+'px';
        }
    }

}

function stop(){
    clearInterval(y);
}