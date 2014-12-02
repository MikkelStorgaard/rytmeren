function MyPlayer(measure,track){
    returnvalue = generatePlayerHtml(i,j);
    this.html   = returnvalue[0];
    this.uniqueref = returnvalue[1];
    this.player = new Howl({ autoplay: false,
                             volume  : 0.8 });
    this.muted  = false;
}

function MyPlayerController(){
    this.playersArray = new Array(MEASURES);
    for(var measure = 0; measure < MEASURES; measure++){
        var playerArray = new Array(TRACKS);
        for(var track = 0; track < TRACKS; track++){
            p = new MyPlayer(measure, track);
            playerArray[track] = p;
            }
        this.playersArray[measure] = playerArray;
        }
}


MyPlayer.prototype.play = function(){this.player.play()};
MyPlayer.prototype.mute = function(){if (this.muted == false){
                                            this.muted = true;
                                            this.player.mute();
                                            }
                                     else{
                                         this.muted = false;
                                         this.player.unmute();
                                     }
                                    }

MyPlayer.prototype.updateVol = function(a){this.player.volume(a);}
MyPlayer.prototype.selectSound = function(a){this.player.urls([a]);}

MyPlayerController.prototype = updateSound() = undefined;



function generatePlayerHtml(measure, track){
    html      =
        "<div class='miniplayer' id='m" +measure+ "t"+track+">\n" +
            "<select onchange='playercontroller.updateSound();'>\n" +
                generateSoundOptions() +
            "</select>\n" +
            "<input type='range' name='vol " +
              uniqueref +
              "' min='0' max='1' value='0.8'" +
              "onchange='players[uniqueref].updateVol();'/>\n" +
            "<button name'play" + uniqueref + "' onclick='players[uniqueref].play()'>\n" +
            "<button name'mute" + uniqueref + "' onclick='players[uniqueref].mute()'>\n" +
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
