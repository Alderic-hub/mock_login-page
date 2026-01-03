<?php
    $DB_HOST = 'localhost'
    $DB_NAME = 'emaillist'
    $DB_USER = 'root'
    $DB_CHARSET = 'utf8mb4'

    $dsn = "mysql:host=$DB_HOST;dbname=$DB_NAME;charset=$DB_CHARSET"
    try {
        $PDO new PDO($dsn)
    } catch (PDOException $e) {
        echo `cant  locate the database`
    }
    try{
        

    }catch(ERRMODE_EXCEPTION){
        echo `cant write to the database`
    }