let $select={
    body:$('body'),
    overlay:$('#blackout'),
    modal:$('#trailModal'),
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
    },
}

//객체불러올 때 . 으로!
/* $select.showButton.click(function(){
    showPlayer()
});   --> ✔ 아래로 줄여서 사용가능 */

$select.showButton.click(showPlayer); //()안에 function 포함되어 있음
$select.hideButton.click(hidePlayer);


// 유튜브API사이트 - 시작하기 복붙 (https://developers.google.com/youtube/iframe_api_reference?hl=ko)

/* https://developers.google.com/youtube/iframe_api_reference?hl=ko#Loading_a_Video_Player */
function setPlayer(id){
    play.obj = new YT.Player('trailer', {
        videoId: id, // -> setPlayer (매개변수) 값 여기서 받음
        playerVars:play.query,
    });

    resizePlayer();
     //리사이즈, 화면이 회전되거나 화면의 사이즈를 바꿀 때 다시 설정
    $(window).on("resize orientationchange",function(){
        resizePlayer();
    })
}
function resizePlayer(){
    let viewport_w=$(window).width(); // 현재화면의 넓이
    let viewport_h=$(window).height(); // 현재화면의 높이

    let frame_w=viewport_w;       //16
    let frame_h=viewport_w / 1.6; //10, 유튜브 화면비율 16:10

    //화면줄여도 Y축 기준 중앙으로 오게하기
    let modal_t = ((viewport_h - frame_h)/2) + "px";
    let modal_l = 0;

    $select.modal.css({top:modal_t, left:modal_l});
    play.obj.setSize(frame_w, frame_h);

}


function showPlayer(){
    //console.log($select.showButton.data('youtube'))
    if(!play.obj)
    setPlayer($select.showButton.data('youtube'));
    $select.overlay.show();
}

function hidePlayer (){
    play.obj.stopVideo();
    $select.overlay.hide();
}