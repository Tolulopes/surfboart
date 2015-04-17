
// load jQuery DONE
// load main.js DONE
// set up document.ready function
// event listener for clicking on an element with class='box'
// add sound files to our app
// download soundmanager2.js
// link soundmanager2.js to our index.html
// play a sound when that box is clicked
// customise and make it awesome!!!
$(document).ready(function(){
  soundManager.setup({

    url: '/Mysoundtest/audiofiles/',
    onready: function() {

      //////

      $('#one').click(function(){
        var mySound = soundManager.createSound({
          url: 'Mysoundtest/audiofiles/Surfboard.m4a'
        });

        mySound.play();
      })
      $('#two').click(function(){
        var mySound = soundManager.createSound({
          url: 'Mysoundtest/audiofiles/Single ladies.m4a'
        });

        mySound.play();
      })
      $('#three').click(function(){
        var mySound = soundManager.createSound({
          url: 'Mysoundtest/audiofiles/Xo.m4a'
        });

        mySound.play();
      })//////
      $('#three').click(function(){
        var mySound = soundManager.createSound({
          url: 'Mysoundtest/audiofiles/Surfboard.m4a'
        });

        mySound.play();
      })
      $('#four').click(function(){
        var mySound = soundManager.createSound({
          url: 'Mysoundtest/audiofiles/We be all night.m4a'
        });

        mySound.play();
      })
      $('#five').click(function(){
        var mySound = soundManager.createSound({
          url: 'Mysoundtest/audiofiles/Yonce.m4a'
        });

        mySound.play();
      })
    $('#six').click(function(){
      var mySound = soundManager.createSound({
        url: 'Mysoundtest/audiofiles/Woke up.m4a'
      });

      mySound.play();
    })
    $('#seven').click(function(){
      var mySound = soundManager.createSound({
        url: 'Mysoundtest/audiofiles/Gimmie.m4a'
      });

      mySound.play();
    })
    $('#eight').click(function(){
      var mySound = soundManager.createSound({
        url: 'Mysoundtest/audiofiles/Flawless.m4a'
      });

      mySound.play();
    })
    }
  });

});