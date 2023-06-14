let $select={
    body:$('body'),
    overlay:$('#blackout'),
    modal:$('trailModal'),
    showButton:$('#showTrailer'),
    hideButton:$('#hideTrailer')
}

let play={
    obj:null,
    query:{
        //사이트 지원되는 매개변수에서 복붙
        autoplay:1,
        controls:0,
        iv_load_policy:3,

    }
}

//객체불러올 때 . 으로!
/* $select.showButton.click(function(){
    showPlayer()
});   --> ✔ 아래로 줄여서 사용가능 */

$select.showButton.click(showPlayer); //()안에 function 포함되어 있음
$select.hideButton.click(hidePlayer);


// 유튜브API사이트 - 시작하기 복붙 (https://developers.google.com/youtube/iframe_api_reference?hl=ko)
function setPlayer (id){
    play.obj = new YT.Player('trailer', { // #trailer를 불러서 사용
        height: '360',
        width: '640',
        videoId: id, // -> setPlayer (매개변수) 값 여기서 받음
        playerVars:play.query
    });
}
function showPlayer (){
    //console.log($select.showButton.data('youtube'))
    setPlayer($select.showButton.data('youtube'))
    $select.overlay.show();
}

function hidePlayer (){
    
}