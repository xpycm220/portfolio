<?php
if (!empty($_POST['name']) && !empty($_POST['phone'])) {
	/*Адрес отправки*/
	// $emailTo = 'cdkiev@yandex.ru';
	$emailTo = 'compmaster_spb@mail.ru';
	$mailuser = 'mail@gmail.com';
	
	if($_POST['type'] == "callback"){
		/*Тема письма*/
    	$theme = $_POST['theme'];
		/*Переменные из формы*/
		$name = $_POST['name'];
		$tel = $_POST['phone'];
		// $email = $_POST['email'];
		/*формирование сообщения*/
		$message = '<html>
			<head>
				<title>'.$theme.'</title>
			</head>
			<body>
				<p>Имя: '.$name.'</p>
				<p>Телефон: '.$tel.'</p>
				// <p>Почта: '.$email.'</p>
				<p><hr></p>
				<p>Заявка отправленна с сайта: http://nrs.srocontact.ru</p>
	      	</body>
	    </html>';
	} /* else if($_POST['type'] == "bid"){
		
    	$subject = 'Заявка на расчет стоимости';
		
		$name = $_POST['contactname'];
		$tel = $_POST['contactphone'];
		$text = $_POST['contacttext'];
		
		$message = '<html>
			<head>
				<title>'.$subject.'</title>
			</head>
			<body>
				<p>Имя: '.$name.'</p> 
				<p>Телефон: '.$tel.'</p>
				<p>Сообщение: '.$text.'</p>
				<p><hr></p>
				<p>Заявка отправленна с сайта: http://nrs.srocontact.ru</p>
	      	</body>
	    </html>';
	}
	*/
	   
    /*Шапка письма*/
	$header = "Content-type: text/html; charset=\"utf-8\"\r\n";
	$header .= "From: Лендинг NRC <nrs@srocontact.ru>\r\n";
	mail($emailTo, $subject, $message, $header);
}