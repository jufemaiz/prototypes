var fart_player, fart_old_player = false;

var farts = {
    toot: 'fart1',
    ripper: 'fart2',
    plop: 'fart3',
    squit: 'fart4',
    raspberry: 'fart5',
    squat: 'fart6',
    tuppence: 'fart7',
    liftoff: 'fart8',
    trumpet: 'fart9',
    fizzler: 'fart10'
};

var fart = {
    default_sound: farts.raspberry,
    init: function(options) {
        var options = options | {};
        if (options.default_sound) {
            this.default_sound = options.default_sound;
        }
        fart_player = document.createElement("audio");
        if (typeof(fart_player.canPlayType) == 'undefined') {
            console.log('old player');
            this.load_old_player();
        }
        this.preload();
    },
    play: function(sound, callback) {
        var fart = (sound) ? farts[sound] : this.default_sound;
        if (!fart_old_player) {
            var ext = (fart_player.canPlayType('audio/mp3')) ? '.mp3' : '.wav';
            fart_player.setAttribute('src', "http://74656c.com/phone/remote/farts/" + fart + ext);
            fart_player.play();
            $(fart_player).bind("ended", function() {
                if (callback) {
                    callback();
                    $(fart_player).unbind("ended");
                }
            });
        } else {
            fart_player.URL = "/farts/" + fart + '.mp3';
        }

    },
    load_old_player: function() {
        $('body').append('<div style="display:none"><object id="contentPlayer" classid="CLSID:6BF52A52-394A-11d3-B153-00C04F79FAA6" width="0" height="0"><param name="volume" value="100%" /><param name="windowlessVideo" value="true"><param name="AnimationatStart" value="0" /><param name="autostart" value="1" /></object></div>');
        fart_player = document.getElementById('contentPlayer');
        fart_old_player = true;
    },
    preload: function() {
        if (!fart_old_player) {
            $.each(farts, function(index, fart) {
                console.log(fart);
                var ext = (fart_player.canPlayType('audio/mp3')) ? '.mp3' : '.wav';
                fart_player.setAttribute('src', "http://74656c.com/phone/remote/farts/" + fart + ext);
            });
        }
    }
};