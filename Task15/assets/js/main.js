$(function(){
    $left=$(".left-box");
    $left.onclick(function(){
        $imgId=parseInt($(".contain"),attr("id"));
        $imgId--;
        if ($imgId == 0) {
            $imgId = 10;
        }
        $images = $("#list li img");
        $images.each(function () {
            if ($(this).attr("data-id") == $imgId) {
                $(".contain").attr("src", $(this).attr("src")).attr("id", $imgId)
            }
    })
  })


$right = $(".right-box");
    $right.onclick(function () {

        $imgId = parseInt($(".contain").attr("id"));
        $imgId++;
        if ($imgId == 11) {
            $imgId = 1;
        }
        $images = $("#list li img");
        $images.each(function () {
            if ($(this).attr("data-id") == $imgId) {
                $(".contain").attr("src", $(this).attr("src")).attr("id", $imgId)
            }
        })
    })


    $images = $("#list li img");
    $images.each(function () {
        
        $(this).click(function () {

            $dataId = $(this).attr("data-id");
            $imgSrc = $(this).attr("src");
            $(".contain").attr("src", $imgSrc).attr("id", $dataId)
        })
    })


    
    setInterval(() => {
        $id = $(".contain").attr("id");
        $images = $("#list li img");
        $images.each(function () {
            $(this).removeClass("active");
            if ($(this).attr("data-id") == $id) {
                $(this).addClass("active");
            }
        })
    }, 500);

})

