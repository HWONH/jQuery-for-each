$(document).ready(function(){
    // #1 구조를 완성한다
    // #2 완성된 구조에 (순차적)접근한다

    // 이차배열의 패턴=["이미지 파일", "타이틀"];
    var $arr_cont=[
        ["img-01.jpg", "Landscape_01"],
        ["img-02.jpg", "Landscape_02"],
        ["img-03.jpg", "Landscape_03"],
        ["img-04.jpg", "Landscape_04"]
    ];

    var $cont=`
        <div class="cont">
            <div class="cont_img"></div>
            <h3>타이틀</h3>
        </div>
    `;

    for(i=0;i<$arr_cont.length;i++){
        $(".frame").append($cont);
    }

    $(".frame .cont").each(function(index){
        $(this).find(".cont_img").css("background-image", "url(img/"+$arr_cont[index][0]+")");
        $(this).find("h3").text($arr_cont[index][1]);
    });
});