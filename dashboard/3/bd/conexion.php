<?php
 class Conexion{
     public static function Conectar(){
         define('servidor','localhost');
         define('nombre_bd','id17856854_macroi');
         define('usuario','id17856854_macro');
         define('password','f->3=*khs8IRJF2[');         
         $opciones = array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8');
         
         try{
            $conexion = new PDO("mysql:host=".servidor.";dbname=".nombre_bd, usuario, password, $opciones);             
            return $conexion; 
         }catch (Exception $e){
             die("El error de Conexión es :".$e->getMessage());
         }         
     }
     
 }
?>