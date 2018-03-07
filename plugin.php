<?php
/*
 Plugin Name: Salon Management System
 Description: An appointments booking management system for Salons and Barber shops.
 Plugin URI: http://www.at3labs.ca/wordpress-plugin/
 Version: 1.0
 Author: AT3 Labs
 Author URI: http://www.at3labs.ca/
 Textdomain: at3l
 
 */


use PluginKernel;

global $composer;
$composer = require 'vendor/autoload.php';



define( 'AT3L_ROOT_DIR', dirname(__FILE__));
define ( 'AT3L_ROOT_URL', plugin_dir_url( __FILE__ ));
define( 'AT3L_VIEWS_DIR', AT3L_ROOT_DIR.'/views');

PluginKernel::bootStrap();

?>