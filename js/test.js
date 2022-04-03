$(document).ready(function(){
    var $arr_01 = [
        ["img_01.jpg", "마이펫 삼총사"],
        ["img_02.jpg", "마이펫 나들이"],
        ["img_03.jpg", "마이펫 휴식"],
        ["img_04.jpg", "마이펫 엔딩 스토리"],
        ["img_05.jpg", "마이펫 베이비?"],
        ["img_06.jpg", "마이펫 히어로 등장"],
        ["img_07.jpg", "마이펫 작은 협상"],
        ["img_08.jpg", "마이펫 변신"]
    ];
    
    var $box_01=`
        <div class="box">
            <div class="img_box"></div>
            <h4>title</h4>
        </div>
    `;

    for(i=0;i<$arr_01.length;i++){
        $("#ex_01 .cover").append($box_01);
    };

    $("#ex_01 .cover .box").each(function(index){
        $(this).find(".img_box").css("background-image", "url(img/"+$arr_01[index][0]+")");
        $(this).find("h4").text($arr_01[index][1]);
    });

    $("#ex_01 .cover .box:gt(3)").hide();

    $("#ex_01 button").click(function(){
        $(this).hide();
        $("#ex_01 .cover .box").show();
    });
});