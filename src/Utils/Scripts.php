<?php


namespace At3l\Sms\Utils;


class Scripts{
    
    static function register_admin_scripts(){
        /**
         * Moment.js for calendar
         */
        wp_register_script( 'moment', 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.20.1/moment.min.js' );
        /**
         * Script and style for calendars
         */
        wp_register_script( 'at3l-calendar', 'https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.8.2/fullcalendar.min.js', array( 'jquery', 'moment' ) );
        wp_register_style( 'at3l-calendar', 'https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.8.2/fullcalendar.min.css' );
        
        /*
         * Script and style for jquery timepicker 
         */
        wp_register_style('at3l-timepicker', '//cdnjs.cloudflare.com/ajax/libs/timepicker/1.3.5/jquery.timepicker.min.css');
        wp_register_script('at3l-timepicker', '//cdnjs.cloudflare.com/ajax/libs/timepicker/1.3.5/jquery.timepicker.min.js', array( 'jquery' ) );
        
        /**
         * Page specific js initialize for manage-schedule page
         */
        wp_register_script( 'at3l-calendar-schedule',  Config::PLUGIN_ROOT_URL.'assets/js/at3l-calendar-schedule.js', array('at3l-calendar') );
        //wp_localize_script( 'at3l-init-manage-schedule', 'adminAjaxUrl', admin_url( 'admin-ajax.php' ) );
        
    }
    
    static function setup(){
        add_action( 'admin_enqueue_scripts', array(self::class, 'register_admin_scripts') );
    }
}