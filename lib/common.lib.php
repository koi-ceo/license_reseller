<?php

function add_stylesheet($stylesheet, $order = 0)
{
    global $html_process;

    if (trim($stylesheet) && method_exists($html_process, 'merge_stylesheet'))
        $html_process->merge_stylesheet($stylesheet, $order);
}

function add_javascript($javascript, $order = 0)
{
    global $html_process;

    if (trim($javascript) && method_exists($html_process, 'merge_javascript'))
        $html_process->merge_javascript($javascript, $order);
}

?>