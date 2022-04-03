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

    var $arr_02 = [
        ["호텔을 예약하는 방법", "트리바고는 광범위한 호텔 검색을 기반으로 하는 호텔 요금 비교 사이트입니다. 호텔 요금은 전 세계 호텔과 호텔 예약 사이트로부터 전달되는데요, 트리바고에서 검색 조건에 가장 잘 맞는 호텔을 선택하시면 예약은 각 호텔 예약 사이트(트리바고와 링크로 연결된 웹사이트)에서 하시게 됩니다. “선택” 버튼을 클릭하시면 해당 예약 사이트로 바로 이동되며, 해당 사이트에서 트리바고에서 찾은 호텔을 예약하실 수 있어요."],
        ["트리바고(trivago)에서 저렴한 호텔 찾기", "트리바고에서 여러 웹사이트를 한눈에 비교하고 원하는 호텔을 쉽고 저렴하게 찾으실 수 있습니다. 가고 싶은 여행지와 날짜를 선택하시면 스마트한 트리바고 검색 엔진이 자동으로 호텔 요금을 비교해 드립니다. 좀 더 자세한 검색 결과를 원하신다면 요금, 거리(예: 도심에서 거리), 호텔 등급, 고객 평점 등을 기준으로 결과를 보실 수도 있습니다."],
        ["원하는 호텔을 찾는 데 도움이 되는 후기", "1억 7천5백만 개가 넘는 트리바고의 통합 호텔 후기와 1천9백만 장 이상의 사진이 여행지에 대해 더욱 풍부한 정보를 제공해 드립니다. 또한, 호텔에 대한 객관적인 정보를 드리기 위해 트리바고는 익스피디아(Expedia), 호텔스닷컴(Hotels.com) 등 다른 호텔 예약 사이트의 다양한 후기와 평점을 함께 보여드립니다."],
        ["트리바고(trivago) - 호텔 요금 비교 사이트", "트리바고는 단 몇 번의 클릭만으로 전 세계 400개 이상의 호텔 예약 사이트, 190여 개국의 300만여 개 호텔을 검색해 비교 결과를 보여드립니다. 연간 14억 명이 방문하는 저희 트리바고 사이트에서 호텔 비교 기능을 이용하여 같은 도시의 특가 상품을 간편하게 비교하실 수 있습니다."]
    ];
    
    var $box_02=`
        <div class="box">
            <div class="top">
                <h4>호텔을 예약하는 방법</h4>
                <span>+</span>
            </div>
            <div class="bottom">
                <p>트리바고는 광범위한 호텔 검색을 기반으로 하는 호텔 요금 비교 사이트입니다. 호텔 요금은 

                전 세계 호텔과 호텔 예약 사이트로부터 전달되는데요, 트리바고에서 검색 조건에 가장 잘 맞는 호텔을

                선택하시면 예약은 각 호텔 예약 사이트(트리바고와 링크로 연결된 웹사이트)에서 하시게 됩니다. 

                “선택” 버튼을 클릭하시면 해당 예약 사이트로 바로 이동되며, 해당 사이트에서 트리바고에서 찾은 호텔을 예약하실 수 있어요.</p>
            </div>
        </div>
    `;

    for(i=0;i<$arr_02.length;i++){
        $("#ex_02 article").append($box_02);
    }

    $("#ex_02 article .box").each(function(index){
        $(this).find(".top h4").text($arr_02[index][0]);
        $(this).find(".bottom p").text($arr_02[index][1]);
    });

    $("#ex_02 article .box .top span").click(function(){
        var $active=$(this).hasClass("active");
        if($active==false){
            $("#ex_02 article .box .top span").removeClass("active").text("+");
            $(this).addClass("active").text("－");
            // $("#ex_02 article .box .top span").removeClass("active");
            // $(this).addClass("active");
            // $("#ex_02 article .box .top span").text("+");
            // $(this).text("－");
            $("#ex_02 article .box .bottom").stop().slideUp();
            $(this).closest(".top").siblings(".bottom").stop().slideDown();
        }else{
            $(this).removeClass("active").text("+");
            // $(this).removeClass("active");
            // $(this).text("+");
            $(this).closest(".top").siblings(".bottom").stop().slideUp();
        }
    });

    var $arr_03 = [
		["pop-01.jpg", "독일 호수 체험"],
		["pop-02.jpg", "파리 자유 여행"],
		["pop-03.jpg", "런던 도심지 여행"],
		["pop-04.jpg", "그리스 지중해 체험"]
    ];
    
    var $box_03=`
        <div class="box">
            <div class="img_box"></div>
            <h4>여행지</h4>
        </div>
    `;

    for(i=0;i<$arr_02.length;i++){
        $("#ex_03 .cover_03").append($box_03);
    }

    $("#ex_03 .cover_03 .box").each(function(index){
        $(this).find(".img_box").css("background-image", "url(img/"+$arr_03[index][0]+")");
        $(this).find("h4").text($arr_03[index][1]);
    });

    $("#ex_03 .cover_03 .box").click(function(){
        var $index=$(this).index();
        $("#ex_03 .dark, #ex_03 .popup").addClass("active");
        $("#ex_03 .popup").find(".popup_img").css("background-image", "url(img/"+$arr_03[$index][0]+")")
        $("#ex_03 .popup").find("h3").text($arr_03[$index][1]);
        $("body").addClass("fix");
    });
    
    $("#ex_03 .dark, #ex_03 .popup .close").click(function(){
        $("#ex_03 .dark, #ex_03 .popup").removeClass("active");
        $("body").removeClass("fix");
    });

    setInterval(function(){
        var $pause=$("#ex_04 .slider_cover").hasClass(".pause");
        if($pause==true){
            
        }else{
            var $f_child=$("#ex_04 .slider_cover ul li").first();
            $("#ex_04 .slider_cover ul").stop().animate({"margin-left":"-100%"},500,function(){
                $("#ex_04 .slider_cover ul").append($f_child).css("margin-left", "0");
                var $rel=$("#ex_04 .slider_cover ul li").eq(0).attr("rel");
                /* 콜백 함수 내에 선언하면, eq(0) : append로 첫번째 자식을 뒤로 보내버렸기 때문에 좌측으로 슬라이드가 존재하지 않는다*/
                $("#ex_04 ol li").removeClass("active");
                $("#ex_04 ol li").eq($rel).addClass("active");
            });
            /* 콜백 함수 밖에 선언하면, eq(1) : animate와 동시 진행되어 좌측으로 하나의 슬라이드가 존재한다 현재 콜백 함수는 진행되지 않은 상태! */
            // var $rel=$("#ex_04 .slider_cover ul li").eq(1).attr("rel");
            // $("#ex_04 ol li").removeClass("active");
            // $("#ex_04 ol li").eq($rel).addClass("active");
        }
    },2500);

    $("#ex_04 .slider_cover").hover(function(){
        $(this).addClass(".pause")
    }, function(){
        $(this).removeClass(".pause")
    });
});