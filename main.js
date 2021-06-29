var canvas = new fabric.Canvas('myCanvas');
var block_width=30;
var player_x=10;
var player_y=10;
var player_object="";
var block_object="";
function playerUpdate(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top:player_y, 
            left:player_x
        });
        window.addEventListener("keydown", aFunction);
        function aFunction(e){
            var key_pressed=e.keyCode;
            if(e.shiftKey==true && key_pressed=='80'){
                console.log("shift and p are pressed together");
                block_height=block_height+10;
                block_width=block_width+10;
                document.getElementById("current_width").innerHTML=block_width;
                document.getElementById("current_height").innerHTML=block_height;
            }
            if(e.shiftKey==true && key_pressed=='77'){
                console.log("shift and m are pressed together");
                block_height=block_height-10;
                block_width=block_width-10;
                document.getElementById("current_width").innerHTML=block_width;
                document.getElementById("current_height").innerHTML=block_height;
            }
            window.addEventListener("keydown", aFunction);
function aFunction(e){
    var key_pressed=e.keyCode;
    if(e.shiftKey==true && key_pressed=='70'){
        console.log("shift and f are pressed together");
        
    }
    if(key_pressed == '67') { 
        blockUpdate('hulk_face.png'); 
        console.log("c"); 
    }
    if(key_pressed == '68') { 
        blockUpdate('ironman_face.png'); 
        console.log("d"); 
    }
    if(key_pressed == '69') { 
        blockUpdate('spiderman_face.png'); 
        console.log("e"); 
    }
    if(key_pressed == '71') { 
        blockUpdate('thor_face.png'); 
        console.log("g"); 
    }
        if(key_pressed == '72') { 
            blockUpdate('spiderman_body.png'); 
            console.log("h"); 
        }
        if(key_pressed == '73') { 
            blockUpdate('hulkd_body.png'); 
            console.log("i"); 
        }
        if(key_pressed == '73') { 
            blockUpdate('ironman_body.png'); 
            console.log("j"); 
        }
        if(key_pressed == '74') { 
            blockUpdate('hulk_left_hand.png'); 
            console.log("l"); 
        }
        if(key_pressed == '75') { 
            blockUpdate('thor_left_hand.png'); 
            console.log("m"); 
        }
        if(key_pressed == '76') { 
            blockUpdate('spiderman_left_hand.png'); 
            console.log("n"); 
        }
        if(key_pressed == '77') { 
            blockUpdate('thor_right_hand.png'); 
            console.log("o"); 
        }
        if(key_pressed == '78') { 
            blockUpdate('spiderman_right_hand.png'); 
            console.log("p"); 
        }
        if(key_pressed == '79') { 
            blockUpdate('hulk_right_hand.png'); 
            console.log("p"); 
        }
        if(key_pressed == '80') { 
            blockUpdate('ironman_right_hand.png'); 
            console.log("p"); 
        }
        if(key_pressed == '81') { 
            blockUpdate('thor_legs.png'); 
            console.log("q"); 
        }
        if(key_pressed == '82') { 
            blockUpdate('spiderman_legs.png'); 
            console.log("r"); 
        }
        if(key_pressed == '83') { 
            blockUpdate('hulk_legs.png'); 
            console.log("s"); 
        }
        if(key_pressed == '84') { 
            blockUpdate('ironman_legs.png'); 
            console.log("t"); 
        }
        function up(){
            player_y=player_y-block_height;
            console.log("block height="+block_height);
            console.log("when up arrow key pressed, X"+player_x+"Y,"+player_y);
            canvas.remove(player_object);
            playerUpdate();
        }
        function down(){
            player_y=player_y+block_height;
            console.log("block height="+block_height);
            console.log("when up arrow key pressed, X"+player_x+"Y,"+player_y);
            canvas.remove(player_object);
            playerUpdate();
        }
        function right(){
            player_x=player_x+block_height;
            console.log("block width="+block_width);
            console.log("when up arrow key pressed, X"+player_x+"Y,"+player_y);
            canvas.remove(player_object);
            playerUpdate();
        }
        function left(){
            player_x=player_x-block_height;
            console.log("block width="+block_width);
            console.log("when up arrow key pressed, X"+player_x+"Y,"+player_y);
            canvas.remove(player_object);
            playerUpdate();
        }