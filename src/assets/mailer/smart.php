<?php 


$yourPhone = $_POST['phone'];
$title = $_POST['title'];

$types = $_POST['types']; // Выберите тип Вашего объекта 1

$what = $_POST['what']; // Что Вам необходимо: 
$soc = $_POST['soc']; 



$qw1 = $_POST['qw1'];
$qw2_1 = $_POST['qw2-1'];
$qw2_2 = $_POST['qw2-2'];
$qw2_3 = $_POST['qw2-3'];
$qw2_4 = $_POST['qw2-4'];
$qw2_5 = $_POST['qw2-5'];
$qw2_6 = $_POST['qw2-6'];
$qw3 = $_POST['qw3'];
$qw4 = $_POST['qw4'];
$qw5 = "Список ".$_POST['t5-1'] . ' - '. $_POST['my_range5'] . ' km';
$emails = $_POST['email'];
$qw8 = $_POST['qw8'];

$qw2_1_1 =  "Площадь : " . $_POST['qw2-1-1'];
$qw2_1_2 =  "Площадь : " . $_POST['qw2-1-2'];
$qw2_1_3 =  "Площадь : " . $_POST['qw2-1-3'];
$qw2_1_4 =  "Площадь : " . $_POST['qw2-1-4'];
$qw2_1_5 =  "Площадь : " . $_POST['qw2-1-5'];
$qw2_1_6 =  "Площадь : " . $_POST['qw2-1-6'];

$t2_2_1 =  "Толщина : " . $_POST['t2-2-1'];
$t2_2_2 =  "Толщина : " . $_POST['t2-2-2'];
$t2_2_3 =  "Толщина : " . $_POST['t2-2-3'];
$t2_2_4 =  "Толщина : " . $_POST['t2-2-4'];
$t2_2_5 =  "Толщина : " . $_POST['t2-2-5'];
$t2_2_6 =  "Толщина : " . $_POST['t2-2-6'];

if($_POST['qw2-1']){
	$qwe_1 = $qw2_1 . ' _ '. $qw2_1_1 . ' ' . $t2_2_1 . '<br>' ;
}else{
	$qwe_1 = ' ';
}
if($_POST['qw2-2']){
	$qwe_2 = $qw2_2. ' _ '. $qw2_1_2 . ' ' . $t2_2_2 . '<br>' ;

}else{
	$qwe_2 = ' ';
}
if($_POST['qw2-3']){
	$qwe_3 = $qw2_3. ' _ '. $qw2_1_3 . ' ' . $t2_2_3 . '<br>' ;

}else{
	$qwe_3 = ' ';
}
if($_POST['qw2-4']){
	$qwe_4 = $qw2_4. ' _ '. $qw2_1_4 . ' ' . $t2_2_4 . '<br>' ;

}else{
	$qwe_4 = ' ';
}
if($_POST['qw2-5']){
	$qwe_5 = $qw2_5. ' _ '. $qw2_1_5 . ' ' . $t2_2_5 . '<br>' ;

}else{
	$qwe_5 = ' ';
}
if($_POST['qw2-6']){
	$qwe_6 = $qw2_6. ' _ '. $qw2_1_6 . ' ' . $t2_2_6 . '<br>' ;

}else{
	$qwe_6 = ' ';
}
$qw2 = $qwe_1 .
		$qwe_2 .
		$qwe_3 .
		$qwe_4 .
		$qwe_5 .
		$qwe_6 .'';

$soc = " <br> Куда отправить - ".$_POST['qw8'];
$why = " <br> Что нужно утеплить - ".$_POST['why'];
$my_range = " <br> Площадь утепления - ".$_POST['my_range'];
$types = " <br> Толщина утепления - ".$_POST['types'];
$name = " <br> Имя - ".$_POST['name'];



$q1 =  ( $_POST['qw8'] ? $soc : ' ' );
$q2 = ( $_POST['why'] ? $why : ' ');
$q3 = ( $_POST['my_range'] ? $my_range : ' ');
$q4 = ( $_POST['types'] ? $types : ' ');
$q5 = ( $_POST['name'] ?  $name : ' ');


require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'formsajt987@gmail.com';                 // Наш логин
$mail->Password = '473-Ghd-%sasd12';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('formsajt987@gmail.com', 'Форма с сайта');   // От кого письмо 
//$mail->addAddress('ag@premiumt.ru');     // Add a recipient
$mail->addAddress('diman.b95@mail.ru');     // Add a recipient
// $mail->addAddress('kirill.droznik@gmail.com');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Форма с сайта «Эковата»';
 if($_POST['formname'] == 'test'){
		$mail->Body    = '
			Пользователь прошёл тест: <br>
			1. Какой Вы строите дом?: ' . $qw1 . ' <br> 
			2. Какие части дома будем утеплять?: ' . $qw2 . ' <br> 
			3. Какой Вы строите дом?: ' . $qw3 . ' <br> 
			4. Когда планируете Этап утепления?: ' . $qw4 . ' <br> 
			5. В каком районе находится: ' . $qw5 . ' <br> 
			Куда отправить : ' . $qw8 . ' <br> 
			Почта : ' . $emails . 
			$name . ' <br> 
			Телефон: ' . $yourPhone . '';
	}
	else{

		
		$mail->Body    = 
			$title . ' <br> 
			' . $q1. 
				$q2 .
			   $q3 .
			   $q4 .
			   $q5
			. ' <br> 
			Телефон: ' . $yourPhone . '';
			
		
	}




$mail->AltBody = '';

if(!$mail->send()) {
    return false;
} else {
    return true; 
}




?>