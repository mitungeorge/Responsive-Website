<?php
    ob_start();


    if(isset($_GET["param1"])){
            header('Content-Type: application/json');
            $url="https://graph.facebook.com/v2.8/search?q=".$_GET["param1"]."&type=user&fields=id,name,picture.width(700).height(700)&access_token=EAAZAbRExoQZCwBAE7Fn7c8fDvehvZB1YDDNul15VcHwwFTnxZBocs2S54MkDuVM82mKqYQokwZClLQrzrGuZBTjwxeIyuPtSTwzZBdjX4LwdFZAYygbIaaG2w9rGYGhoqMJz4QM9zxdehzBaaZCvHbWbKNQmsDHNrldAZD";
            $url=preg_replace( '~\s~', '%20', $url);
            $fresponse = file_get_contents($url,false);
            echo $fresponse;
           }


    if(isset($_GET["key"]) && isset($_GET["etype"]) ){
    		if($_GET["etype"]!='place'){
            header('Content-Type: application/json');
            $url="https://graph.facebook.com/v2.8/search?q=".$_GET["key"]."&type=".$_GET["etype"]."&fields=id,name,picture.width(700).height(700)&access_token=EAAZAbRExoQZCwBAE7Fn7c8fDvehvZB1YDDNul15VcHwwFTnxZBocs2S54MkDuVM82mKqYQokwZClLQrzrGuZBTjwxeIyuPtSTwzZBdjX4LwdFZAYygbIaaG2w9rGYGhoqMJz4QM9zxdehzBaaZCvHbWbKNQmsDHNrldAZD";
            $url=preg_replace( '~\s~', '%20', $url);
            $fresponse = file_get_contents($url,false);
            echo $fresponse;
        }
        else{
        	header('Content-Type: application/json'); 
            $url="https://graph.facebook.com/v2.8/search?q=".$_GET["key"]."&type=place&fields=
                id,name,picture.width(700).height(700)&center=34.0216,-118.283&access_token=EAAZAbRExoQZCwBAE7Fn7c8fDvehvZB1YDDNul15VcHwwFTnxZBocs2S54MkDuVM82mKqYQokwZClLQrzrGuZBTjwxeIyuPtSTwzZBdjX4LwdFZAYygbIaaG2w9rGYGhoqMJz4QM9zxdehzBaaZCvHbWbKNQmsDHNrldAZD";
            $url=preg_replace( '~\s~', '%20', $url);
            $fresponse = file_get_contents($url,false);
            echo $fresponse;

           }
        }


   if(isset($_GET["placekw"]) && isset($_GET["ptype"]) && isset($_GET["lat"]) && isset($_GET["lng"]) ){
            header('Content-Type: application/json'); 
            $url="https://graph.facebook.com/v2.8/search?q=".$_GET["placekw"]."&type=place&fields=
                id,name,picture.width(700).height(700)&center=".isset($_GET["lat"]).",".isset($_GET["lng"])."&access_token=EAAZAbRExoQZCwBAE7Fn7c8fDvehvZB1YDDNul15VcHwwFTnxZBocs2S54MkDuVM82mKqYQokwZClLQrzrGuZBTjwxeIyuPtSTwzZBdjX4LwdFZAYygbIaaG2w9rGYGhoqMJz4QM9zxdehzBaaZCvHbWbKNQmsDHNrldAZD";
            $url=preg_replace( '~\s~', '%20', $url);
            $fresponse = file_get_contents($url,false);
            echo $fresponse;
           }  


    if(isset($_GET["npage"])){
        header('Content-Type: application/json');
        $url=$_GET["npage"];
        $url=preg_replace( '~\s~', '%20', $url);
        $fresponse = file_get_contents($url,false);
        echo $fresponse;

    }    

     if(isset($_GET["ppage"])){
        header('Content-Type: application/json');
        $url=$_GET["ppage"];
        $url=preg_replace( '~\s~', '%20', $url);
        $fresponse = file_get_contents($url,false);
        echo $fresponse;

    }   

     if(isset($_GET["uid"])){
        header('Content-Type: application/json');
        $url="https://graph.facebook.com/v2.8/".$_GET["uid"]."? fields= name,albums.limit(5){name,photos.limit(2){name,
            picture}},posts.limit(5){message,created_time}&access_token=EAAZAbRExoQZCwBAE7Fn7c8fDvehvZB1YDDNul15VcHwwFTnxZBocs2S54MkDuVM82mKqYQokwZClLQrzrGuZBTjwxeIyuPtSTwzZBdjX4LwdFZAYygbIaaG2w9rGYGhoqMJz4QM9zxdehzBaaZCvHbWbKNQmsDHNrldAZD";
        $url=preg_replace( '~\s~', '%20', $url);
        $fresponse = file_get_contents($url,false);
        echo $fresponse;

    }

    if(isset($_GET["detailid"])){
        header('Content-Type: application/json');
        $url="https://graph.facebook.com/v2.8/".$_GET["detailid"]."? fields= name,picture.width(700).height(700)&access_token=EAAZAbRExoQZCwBAE7Fn7c8fDvehvZB1YDDNul15VcHwwFTnxZBocs2S54MkDuVM82mKqYQokwZClLQrzrGuZBTjwxeIyuPtSTwzZBdjX4LwdFZAYygbIaaG2w9rGYGhoqMJz4QM9zxdehzBaaZCvHbWbKNQmsDHNrldAZD";
        $url=preg_replace( '~\s~', '%20', $url);
        $dresponse = file_get_contents($url,false);
        echo $dresponse;

    }





     if(isset($_GET["shareid"])){
        header('Content-Type: application/json');
        $url="https://graph.facebook.com/".$_GET["shareid"]."?fields=picture.width(500).height(500)&access_token=EAAZAbRExoQZCwBAE7Fn7c8fDvehvZB1YDDNul15VcHwwFTnxZBocs2S54MkDuVM82mKqYQokwZClLQrzrGuZBTjwxeIyuPtSTwzZBdjX4LwdFZAYygbIaaG2w9rGYGhoqMJz4QM9zxdehzBaaZCvHbWbKNQmsDHNrldAZD";
        $url=preg_replace( '~\s~', '%20', $url);
        $fresponse = file_get_contents($url,false);
        echo $fresponse;

    } 

    
 ?>   