// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

function onYouTubeIframeAPIReady() { // 라이브러리에서 이 함수를 찾기 때문에 이름변경 X

  new YT.Player('player', { // html 내부에서 player 라는 id 값을 자동으로 찾음
    videoId: 'An6LvWQuj_8', // 최초 재생할 유튜브 영상 ID
    playerVars : {
      autoplay : true, // 자동재생 유무
      loop : true, // 반복재생 유무
      playlist : 'An6LvWQuj_8' // 반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      onReady : function(event) {
        event.target.mute() // 영상 음소거
      }
    }
  });
}