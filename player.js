
function playersinit(){
    for(var i = 0; i<MEASURES ; i++){
        p = new MyPlayer();
        players[p.uniqueref] = p;
        }
    }

function MyPlayer(){

    returnvalue = generatePlayerHtml();
    this.html   = returnvalue[0];
    this.uniqueref = returnvalue[1];

    this.player = new Howl();
    }

MyPlayer.prototype.play = undefined;
MyPlayer.prototype.pause = undefined;
MyPlayer.prototype.updateVol = undefined;
MyPlayer.prototype.selectSound = undefined;


function generatePlayerHtml(){

    uniqueref = makeid();
    html      =
        "<div class='miniplayer'>\n" +
            "<select onchange='players[uniqueref].updateSound();'>\n" +
                generateSoundOptions() +
            "</select>\n" +
            "<input type='range' name='vol " +
              uniqueref +
              "' min='0' max='1' value='0.8'" +
              "onchange='players[uniqueref].updateVol();'/>\n" +
            "<button name'play" + uniqueref + "' onclick='players[uniqueref].play()'>\n" +
            "<button name'pause" + uniqueref + "' onclick='players[uniqueref].pause()'>\n" +
        "</div>"
    return [html, uniqueref];
   }

function generateSoundOptions(){
    string = "";
    for path in SOUNDPATHS{
        string = string + "<option value='" + path + "'>" + path + "</option>\n"
        }
    return string;
    }

function makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

