
function playersinit(){
    for(var i = 0; i<MEASURES ; i++){
    players.push(new MyPlayer());
    }
    }

function MyPlayer(){

    returnvalue = generatePlayerHtml();
    this.html   = returnvalue[0];
    this.uniqueref = returnvalue[1];
    }


function generatePlayerHtml(){

    uniqueref = makeid();
    html      =
        "<div>\n" +
            "<select>\n" +
                generateSoundOptions() +
            "</select>\n" +
            "<input type='range' name='vol " + uniqueref + "' min='0' max='1' onchange='players[uniqueref].updateSound();'/>\n" +
            "<button name'play" + uniqueref + "' onclick='players[uniqueref].play()'>\n" +
            "<button name'pause" + uniqueref + "' onclick='players[uniqueref].pause()'>\n" +
        "</div>"
    return [html, uniqueref];
   }

function makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function input(keynum){
    switch(keynum) {

      case 32: // space for tap!
        time = Date.now();
        TIMEQUEUE.push(time);
        TIMEQUEUE.shift();
        calculateBPM();
        break;

      case 38: // pil op
        sound.volume(sound.volume() + 0.05);
        break;

      case 40: // pil ned
        sound.volume(sound.volume() - 0.05);
        break;
      case 16: // BREAK-ned
        BREAK = true;
        break;
      case 82: // BREAK-ned
        BREAK = true;
        break;
      default: {}
    }
  }

function calculateBPM(){
    var deltas = 0;
    for(var i = 0; i < TIMEQUEUE.length - 1; i++){
        deltas += TIMEQUEUE[i+1] - TIMEQUEUE[i]
        }
    deltas = deltas / 1000;
    newBPM = (60.0 / deltas) * 7;
    BPM = newBPM.toFixed(1);
    DOWNBEAT = (60000 / BPM).toFixed(1);
    UPBEAT = (60000 / BPM).toFixed(1);
    $('#bpm').val(BPM.toString());
    clearTimeout(timeout0);
    clearTimeout(timeout1);
    soundloop();
}

window.onload = init;

function setBPM(string){
    switch(string) {

    case "double":
        BPM = (BPM * 2).toFixed(1);
        break;
    case "half":
        BPM = (BPM / 2).toFixed(1);
        break;

    default:
        BPM = parseFloat($('#bpm').val()).toFixed(1);

    }
    DOWNBEAT = (60000 / BPM).toFixed(1);
    UPBEAT = (60000 / BPM).toFixed(1);
    $('#bpm').val(BPM.toString());
    }
