<?php
/**
 * bulma date picker
 * User: holic
 * Date: 2024-05-29
 */

if (!defined('_KOI_')) exit; // 개별 페이지 접근 불가

?>

<link rel="stylesheet" href="https://unpkg.com/bulma-calendar/dist/css/bulma-calendar.min.css">
<script src="https://unpkg.com/bulma-calendar/dist/js/bulma-calendar.min.js"></script>


<script>
    document.addEventListener('DOMContentLoaded', function () {
        let calendars_datetime = bulmaCalendar.attach('[type="datetime"]', {
            dateFormat   : 'yyyy-MM-dd',
            showButtons  : true,
            startDate    : new Date(),
            lang         : 'ko',
            validateLabel: '확인',
            todayLabel   : '오늘',
            clearLabel   : '초기화',
            cancelLabel  : '취소'
        });

        let calendars_datetime1 = bulmaCalendar.attach('[type="datetime_init"]', {
            dateFormat   : 'yyyy-MM-dd',
            showButtons  : true,
            lang         : 'ko',
            validateLabel: '확인',
            todayLabel   : '오늘',
            clearLabel   : '초기화',
            cancelLabel  : '취소'
        });

        let calendars_date = bulmaCalendar.attach('[type="date"]', {
            dateFormat   : 'yyyy-MM-dd',
            type         : 'date',
            enableTime   : false,
            showButtons  : true,
            startDate    : new Date(),
            lang         : 'ko',
            validateLabel: '확인',
            todayLabel   : '오늘',
            clearLabel   : '초기화',
            cancelLabel  : '취소'
        });

        let calendars_date1 = bulmaCalendar.attach('[type="date_init"]', {
            dateFormat   : 'yyyy-MM-dd',
            type         : 'date',
            enableTime   : false,
            time         : false,
            showButtons  : true,
            lang         : 'ko',
            validateLabel: '확인',
            todayLabel   : '오늘',
            clearLabel   : '초기화',
            cancelLabel  : '취소'
        });
    });

</script>