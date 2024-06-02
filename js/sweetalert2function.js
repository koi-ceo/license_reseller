// sweetalert
function sweet_alert(msg, type, icon = "success", msg2 = '', url, confirmButtonText = '네', cancelButtonText = '아니오') {
    if (type === 1) { // 확인버튼 창
        Swal.fire({
            html              : msg,
            confirmButtonColor: '#1C6EE8',
            confirmButtonText : '확인'
        });
    } else if (type === 2) { // 아이콘 + 네, 아니요 창 => url
        Swal.fire({
            html              : msg,
            icon              : icon,
            showCancelButton  : true,
            confirmButtonColor: '#1C6EE8',
            cancelButtonColor : '#F45E5E',
            confirmButtonText : confirmButtonText,
            cancelButtonText  : cancelButtonText
        }).then((result) => {
            if (result.isConfirmed && msg2) {
                Swal.fire({
                    html             : msg2,
                    icon             : icon,
                    showConfirmButton: false,
                    timer            : 1000
                });
            }
            if (result.isDismissed && url) {
                document.location.replace(url);
            } else {
                return false;
            }
        });
    } else if (type === 3) { // 아이콘 창
        Swal.fire({
            html             : msg,
            icon             : icon,
            showConfirmButton: false,
            timer            : 1200
        });
    } else if (type === 4) { // 에러 + 확인버튼 창
        Swal.fire({
            html              : msg,
            icon              : 'error',
            confirmButtonColor: '#1C6EE8',
            confirmButtonText : '확인'
        });
    } else if (type === 5) { // 아이콘 + 확인버튼 창
        Swal.fire({
            html              : msg,
            icon              : icon,
            confirmButtonColor: '#1C6EE8',
            confirmButtonText : '확인'
        });
    } else if (type === 6) { // 확인버튼 창 + url 이동
        Swal.fire({
            html              : msg,
            icon              : icon,
            confirmButtonColor: '#1C6EE8',
            confirmButtonText : '확인'
        }).then((result) => {
            if (result.isConfirmed) {
                document.location.replace(url);
            }
        });
    } else if (type === 7) { // 닫기버튼 + swiper
        Swal.fire({
            html              : msg,
            confirmButtonColor: '#979797',
            confirmButtonText : '닫기',
            customClass       : "swiper_popup_box",
            showCloseButton   : true,
        }).then((result) => {
            if (result.isConfirmed) {

            }
        });
    } else if (type === 8) { // 확인버튼 창 ( 가운데 정렬 )
        Swal.fire({
            html              : msg,
            confirmButtonColor: '#1C6EE8',
            confirmButtonText : '확인',
            customClass       : "center"
        });
    } else if (type === 9) { // 닫기버튼 + swiper + 총판점관리자 팝업
        Swal.fire({
            html              : msg,
            confirmButtonColor: '#939FD4',
            confirmButtonText : '닫기',
            customClass       : "seller_popup_box",
            showCloseButton   : true,
        }).then((result) => {
            if (result.isConfirmed) {

            }
        });
    } else {
        Swal.fire({
            html             : "잘못된 접근입니다",
            icon             : "warning",
            showConfirmButton: false,
            timer            : 1200
        });
    }
}

function sweetConfirm(msg, url, param = null) {
    return new Promise(function () {
        Swal.fire({
            html              : msg,
            icon              : 'question',
            showCancelButton  : true,
            confirmButtonColor: '#1C6EE8',
            cancelButtonColor : '#F45E5E',
            confirmButtonText : '확인',
            cancelButtonText  : '취소'
        }).then((result) => {
            if (result.isConfirmed) {
                let form = document.createElement('form');
                form.method = 'POST';
                form.action = url;

                // 파라미터를 form에 추가
                for (let key in param) {
                    if (param.hasOwnProperty(key)) {
                        let hiddenField = document.createElement('input');
                        hiddenField.type = 'hidden';
                        hiddenField.name = key;
                        hiddenField.value = param[key];
                        form.appendChild(hiddenField);
                    }
                }

                document.body.appendChild(form);
                form.submit();
            } else if (result.isDismissed) {
                return false;
            } else {
                return false;
            }
        });
    });
}

function sweetConfirmNoIcon(msg, url = null, url2 = null, btn_msg = null, btn_msg2 = null, btn_color = null, btn_color2 = null) {
    var btn1 = '확인';
    var btn2 = '취소';
    var btn1_clr = '#1C6EE8';
    var btn2_clr = '#575757';
    if (btn_msg) btn1 = btn_msg;
    if (btn_msg2) btn2 = btn_msg2;
    if (btn_color) btn1_clr = btn_color;
    if (btn_color2) btn2_clr = btn_color2;
    return new Promise(function () {
        Swal.fire({
            html              : msg,
            showCancelButton  : true,
            confirmButtonColor: btn1_clr,
            cancelButtonColor : "#575757",
            confirmButtonText : btn1,
            cancelButtonText  : btn2,
            customClass       : "transfer_popup",
        }).then((result) => {
            if (result.isConfirmed) {
                if (url) {
                    location.href = url
                } else {
                    return false;
                }
            } else if (result.isDismissed) {
                if (url2) {
                    location.href = url2
                } else {
                    return false;
                }
            } else {
                return false;
            }
        });
    });
}
