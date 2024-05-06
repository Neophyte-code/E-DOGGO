<?php

if($_SERVER["REQUEST_METHOD"] == "POST"){

    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    if(empty($name)){
        header("Location: index.php");
        exit();
    }else if(empty($email)){
        header("Location: index.php");
        exit();
    }else if(empty($message)){
        header("Location: index.php");
        exit();
    }

    echo '<div style="margin-left:500px; margin-top: 200px;">';
    echo '<h1>Thank you for contacting us!</h1>';
    echo '<br>';
    echo '<div style=" font-size: 17px; font-family: arial; 
    width: 400px; line-height: 30px;">';
    echo "<b>Name :</b> &nbsp; $name<br>";
    echo "<b>Email :</b>  &nbsp; $email<br>";
    echo "<b>Message :</b>  &nbsp; $message<br>";
    echo '</div>';
    echo '<button style="margin-top:30px; padding: 4px 35px; margin-left: 120px; 
    background-color: blue; color: white; border-radius: 5px; cursor: pointer;
    font-family: arial; font-size: 17px;" 
    onclick="goToMainPage()">BACK</button>';
    echo '</div>';
    echo '<script>function goToMainPage() { window.location.href = "index.php"; }</script>';
 }