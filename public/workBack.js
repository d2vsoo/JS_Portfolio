// 이전, 다음 버튼
$('.before').on('click', function () {
    $('.container').css('transform', 'translateX(-100vw)');
})
$('.after').on('click', function () {
    $('.container').css('transform', 'translateX(-100vw)');
})

$('.prev').on('click', function () {
    $('.container').css('transform', 'translateX(0vw)');
})
$('.next').on('click', function () {
    $('.container').css('transform', 'translateX(0vw)');
})

// ==================================================================================

// 작품 모달창 열고 닫기
// $('.ai01').on('click', function(){
//     $('#work01').css('display', 'block');
// })

// $('.ai02').on('click', function(){
//     $('#work02').css('display', 'block');
// })

// $('.ai03').on('click', function(){
//     $('#work03').css('display', 'block');
// })

// $('.ai04').on('click', function(){
//     $('#work04').css('display', 'block');
// })

// ==================================================================================

// 반복문으로 모달창 열기
for (let i=1; i<=4; i++) {
    $('.ai0' + i).on('click', function(){
        $('#work0' + i).css('display', 'block');
});

// 작품 하나를 클릭했을 때
$('#work0'+i).on('click', function(event){
    // 클릭한 요소가 작품 모달창 바깥 영역인지 확인하기
    if ($(event.target).is('#work0'+i)) {
        // 바깥영역 클릭 시 모달창 닫기
        $(this).css('display', 'none');
    }
});
}

// ==================================================================================

// 반복문으로 모달창 열기
for (let j=1; j<=5; j++) {
    $('.web0' + j).on('click', function(){
        $('#webwork0' + j).css('display', 'block');
});

// 작품 하나를 클릭했을 때
$('#webwork0'+j).on('click', function(event){
    // 클릭한 요소가 작품 모달창 바깥 영역인지 확인하기
    if ($(event.target).is('#webwork0'+j)) {
        // 바깥영역 클릭 시 모달창 닫기
        $(this).css('display', 'none');
    }
});
}