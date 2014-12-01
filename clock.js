
// CONSTANTS AND CONFIGURATIONS

var BREAK;
var BPM, UPBEAT, DOWNBEAT = 80;
var TIMEQUEUE = [];
var MEASURES  = 16
var timeout0, timeout1;

//


function clockinit(){
    for(var i = 0; i<MEASURES ; i++){
        TIMEQUEUE.push(Date.now());
    }
}


function soundloop(){
   console.log(UPBEAT);
   console.log(DOWNBEAT);
   if (BREAK == true) {return;}
   sound.play('jingle');
   timeout0 = setTimeout(function(){sound.play('slightjingle')}, UPBEAT);
   timeout1 = setTimeout(soundloop, DOWNBEAT);
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
