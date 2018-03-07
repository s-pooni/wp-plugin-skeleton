<?php


namespace At3l\Sms\Utils;

class View{
    
    static function render( $tpl_file, $data =NULL){
        $data = (array) $data;
        $d = &$data;
        $tpl_file_path = Config::PLUGIN_VIEWS_DIR.'/'.$tpl_file;
        
        include $tpl_file_path;
    }
    
}
