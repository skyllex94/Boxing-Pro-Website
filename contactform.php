<?php 

        $name = $_POST['name'];
        $mailFrom = $_POST['email'];
        $subject = $_POST['subject'];
        $message = $_POST['message'];

        $mailTo  = "skyllex@mail.bg";
        $headers = "From: " . $mailFrom;
        $txt = "You have received an email from ". $name .".\n\n" .$message;


        mail($mailTo, $subject,$txt,$headers);
        header("Location: index.html?mailsend");
        
?>


    