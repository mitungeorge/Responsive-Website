//var app = angular.module('Facebook', ['angularUtils.directives.dirPagination', 'ngAnimate', 'ngSanitize', 'ui.bootstrap']);
var app = angular.module('Facebook', ['ngAnimate']);
app.controller('headercontroller', function($scope,$http) {
var flag=0;    
$scope.clearData=function(){

    $("#clear").hide();
    $("#ftable").hide();
    $("#inputkw").val('');
    $scope.keyword="";
     $("#myCarousel").carousel(0);
     //$scope.myVar= $scope.myVar;
     $('.nav.navbar-nav > li').removeClass('active');
     $('#user').addClass('active');
     flag=0;
}

$scope.placeClear=function(){
   $("#clear").hide();
   $("#myCarousel").carousel(0); 
   $scope.myVar= $scope.myVar;
}


    $scope.postData=function(){
        if(!$scope.keyword)
        {
            
            alert("Keyword cannot be empty");
            return;
        }
        else{
            flag=1;
            $("#myCarousel").carousel(0);
            //$scope.myVar= $scope.myVar;
            $("#clear").show();   
        $scope.kw=$scope.keyword;    
        if($('.nav-tabs .active').text()=='Pages')
            {
                $scope.loadData('page');
                $("#ftable").hide();
                $("#favtable").hide();
                $("#utable").show();
                $("#maintable").hide();
                $("#pbar").show();
                $("#pbar").delay(2000).fadeOut(100, function() {
                $("#maintable").show();
                });
            }
        if($('.nav-tabs .active').text()=='Events')
            {
                $scope.loadData('event');
                $("#ftable").hide();
                $("#favtable").hide();
                $("#utable").show();
                $("#maintable").hide();
                $("#pbar").show();
                $("#pbar").delay(2000).fadeOut(100, function() {
                $("#maintable").show();
                });
            }
        if($('.nav-tabs .active').text()=='Places')
            {
                $scope.placeData('place');
                $("#ftable").hide();
                $("#favtable").hide();
                $("#utable").show();
                $("#maintable").hide();
                $("#pbar").show();
                $("#pbar").delay(2000).fadeOut(100, function() {
                $("#maintable").show();
                });
            }  
        if($('.nav-tabs .active').text()=='Groups')
            {
                $scope.loadData('group');
                $("#ftable").hide();
                $("#favtable").hide();
                $("#utable").show();
                $("#maintable").hide();
                $("#pbar").show();
                $("#pbar").delay(2000).fadeOut(100, function() {
                $("#maintable").show();
                });
            }
        if($('.nav-tabs .active').text()=='Users')
            {
                $scope.loadData('user');
                $("#ftable").hide();
                $("#favtable").hide();
                $("#utable").show();
                $("#maintable").hide();
                $("#pbar").show();
                $("#pbar").delay(2000).fadeOut(100, function() {
                $("#maintable").show();
                });
            } 
        if($('.nav-tabs .active').text()=='Favorites')
            {
                
            } 
            }        
    
    }

    $scope.loadData=function(type){

        $("#myCarousel").carousel(0);
        $scope.myVar=false;
         //$scope.kw=$scope.keyword;
         if(flag==1){
        $http.get("fb.php", {params:{"key" : $scope.kw , "etype" : type}})
    .then(function(response) {
        //alert(response.data.data[0].id);
        $scope.users = response.data.data;
        if(response.data.hasOwnProperty('paging')){
        $scope.nextp=response.data.paging.next;
        $scope.prevp=response.data.paging.previous;
        }
        //$("#utable").show();
        
        $("#ftable").hide();
        $("#favtable").hide();
        
        if($scope.keyword == "" || typeof $scope.keyword == 'undefined' ){
           $("#clear").hide();  
          $("#utable").hide();  
        }      
         else if($scope.keyword!=""){
        $("#clear").show();    
        $("#utable").show();
        $("#maintable").hide();
        $("#pbar").show();
        $("#pbar").delay(500).fadeOut(100, function() {
        $("#maintable").show();
        });

        }
        else 
        if (typeof $scope.prevp == 'undefined')
        {
            $("#previd").hide();
        }
        if (typeof $scope.nextp == 'undefined' || response.data.hasOwnProperty('paging')===false)
        {
            $(".next").hide();
        }
        if (typeof $scope.nextp != 'undefined' && response.data.hasOwnProperty('paging')===true)
        {
            $("#nextid").show();
        }
        //alert($scope.nextp);
    });
    }
    else{
       $("#ftable").hide();
        $("#favtable").hide(); 
        $("#clear").hide(); 
    }
    }

    $scope.placeData=function(type){
            $("#myCarousel").carousel(0);
            //$scope.myVar= $scope.myVar;
             $scope.myVar=false;
            if($scope.crd){
                if(flag==1){
            var lat = $scope.crd.latitude;
            var lng = $scope.crd.longitude;
        $http.get("fb.php", {params:{"placekw" : $scope.kw , "ptype" : type , "lat" : lat , "lng" : lng}})
        .then(function(response) {
            $scope.users = response.data.data;
            if(response.data.hasOwnProperty('paging')){
            $scope.nextp=response.data.paging.next;
            $scope.prevp=response.data.paging.previous;
            }
        $("#ftable").hide();
        $("#favtable").hide();
        if($scope.keyword == "" || typeof $scope.keyword == 'undefined' ){
           $("#clear").hide();  
          $("#utable").hide();  
        } 
        else if($scope.keyword!=""){
        $("#clear").show();    
        $("#utable").show();
        $("#maintable").hide();
        $("#pbar").show();
        $("#pbar").delay(500).fadeOut(100, function() {
        $("#maintable").show();
        });
        }
        
            if (typeof $scope.prevp == 'undefined')
            {
                $("#previd").hide();
            }
            if (typeof $scope.nextp == 'undefined' || response.data.hasOwnProperty('paging')===false)
            {
                $(".next").hide();
            }
            if (typeof $scope.nextp != 'undefined' && response.data.hasOwnProperty('paging')===true)
            {
                $("#nextid").show();
            }

        });
    }
    else{
         $("#ftable").hide();
        $("#favtable").hide(); 
        $("#clear").hide(); 

    }
    }
    else{
        $scope.placeClear(); alert("Please enable location services. If it is already enabled, please wait/refresh the browser.");
        return;
        
    }
    


    }

$scope.addFavorite=function(data){

        var type = $('.nav-tabs .active').text();
        data["type"]=type;
        if (localStorage.getItem(data.id) === null) {
        localStorage.setItem(data.id, JSON.stringify(data));
    }
    else{
        localStorage.removeItem(data.id);
    }


}

$scope.delFavorite=function(delid){

  
        localStorage.removeItem(delid);
        $scope.loadFavorites();


}

$scope.addFavoriteDetail=function(detailid){

    var type = $('.nav-tabs .active').text();

    $http.get("fb.php", {params:{"detailid":detailid}})
        .then(function(response) {

            ddata=response.data;
            ddata["type"]=type;
            if (localStorage.getItem(ddata.id) === null) {
        localStorage.setItem(ddata.id, JSON.stringify(ddata));
                }
             else{
        localStorage.removeItem(ddata.id);
                }
             });
}



$scope.loadFavorites=function(){
    $("#myCarousel").carousel(0);
     $scope.myVar=false;
    //$scope.myVar= $scope.myVar;
     $("#clear").show();
    $("#utable").hide();
    $("#ftable").show();
    $("#favtable").show();
    $scope.length=localStorage.length;
    //for ( var i = 0, len = localStorage.length; i < len; ++i ) {
   // $scope.favorites=JSON.parse( localStorage.getItem( localStorage.key(  ) ) );
    //}
    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push(JSON.parse(localStorage.getItem(keys[i]) ));
    }

    $scope.favorites= values;

}

$scope.isFavorite=function(id){
    if (localStorage.getItem(id) === null) {
  return false;
}
else{
    return true;
}
}




    $scope.nextPage=function(nurl){
        //alert(nurl);
        $http.get("fb.php", {params:{"npage":nurl}})
        .then(function(response) {
        $scope.users = response.data.data;
        if(response.data.hasOwnProperty('paging')){
        $scope.nextp=response.data.paging.next;
        $scope.prevp=response.data.paging.previous;
        }
         if (typeof $scope.nextp == 'undefined' || response.data.hasOwnProperty('paging')===false || response.data.hasOwnProperty('error')===true)
        {
            $(".next").hide();
        }
        if (typeof $scope.nextp != 'undefined' && response.data.hasOwnProperty('paging')===true)
        {
            $("#nextid").show();
        }
        if (typeof $scope.prevp == 'undefined')
        {
            $("#previd").hide();
        }
        if (typeof $scope.prevp != 'undefined')
        {
            $("#previd").show();
        }

        //alert(response.data.data[0].id);
        });
    }

    $scope.prevPage=function(purl){
        //alert(purl);
        $http.get("fb.php", {params:{"ppage":purl}})
        .then(function(response) {
        $scope.users = response.data.data;
        if(response.data.hasOwnProperty('paging')){
        $scope.prevp=response.data.paging.previous;
        $scope.nextp=response.data.paging.next;
            }
        if (typeof $scope.prevp == 'undefined')
        {
            $("#previd").hide();
        }
         if (typeof $scope.nextp == 'undefined' || response.data.hasOwnProperty('paging')===false)
        {
            $("#nextid").hide();
        }
        if (typeof $scope.nextp != 'undefined' && response.data.hasOwnProperty('paging')===true)
        {
            $("#nextid").show();
        }
        //alert(response.data.data[0].id);
        });
        
    }


     $scope.viewDetails=function(id){
         var type = $('.nav-tabs .active').text();
         $('#collapse0').collapse("show");

         if(type!="Events"){

        $http.get("fb.php", {params:{"uid":id}})
        .then(function(response) {
         $scope.details=response.data;
         if(response.data.hasOwnProperty('albums')){
         $scope.albums=response.data.albums.data;
         $scope.alength=response.data.hasOwnProperty('albums');
            }
         else{
        $scope.alength=response.data.hasOwnProperty('albums');
         } 

         if(response.data.hasOwnProperty('posts')){  
         $scope.posts=response.data.posts.data; // array
         $scope.plength=response.data.hasOwnProperty('posts');
                for(var h= 0; h < $scope.posts.length;h++){
                    if(!$scope.posts[h].message){
                        if($scope.posts[h].story){
                            $scope.posts[h].message = $scope.posts[h].story;
                        }
                    }
                }
            }
           else{
            $scope.plength=response.data.hasOwnProperty('posts'); 
           } 
          $scope.pname=response.data.name; 
         }); 
         }
         else{
            $scope.alength=false;
            $scope.plength=false;
         }  


        $scope.postid=id;
        $("#myCarousel").carousel("prev");
        $(".alpopanel").hide();
        $(".albpos").show();
        $(".albpos").delay(2000).fadeOut(100, function() {
        $(".alpopanel").show();
        });  
         
       


     }  


    
     $scope.fbPost=function(){

               $http.get("fb.php", {params:{"shareid" : $scope.postid}})
                .then(function(response) {
        //alert(response.data.data[0].id);
                $scope.shareurl = response.data.picture.data.url;
                //alert($scope.shareurl);
                var fburl=$scope.shareurl;
                var fbname=$scope.pname;
                FB.init({
            appId      : '1789198758069244',
            status     : true,
            xfbml      : true,
            version    : 'v2.8' // or v2.6, v2.5, v2.4, v2.3
          });



        FB.ui({

            app_id: '1789198758069244',
            method: 'feed',
            display: 'popup',
            link: window.location.href,
            picture: fburl,
            name: fbname,
            caption: 'FB SEARCH FROM USC CSCI571',
            }, function(response){
            if (response && !response.error_message)
            alert("Posted Successfully");
            else
            alert("Not Posted");
            });

                 });
                

              }

              $(document).ready(function(){
    
                    var options = {
                      enableHighAccuracy: true,
                      timeout: 5000,
                      maximumAge: 0
                    };

                    function success(pos) {
                      $scope.crd = pos.coords;
                    };

                    function error(err) {
                      console.warn(`ERROR(${err.code}): ${err.message}`);
                    };

                    navigator.geolocation.getCurrentPosition(success, error, options);



                    });


         $scope.showTable= function()
        {
            //$("#myCarousel").carousel();
            var type = $('.nav-tabs .active').text();
            if(type=="Favorites")
            {
                $scope.loadFavorites();
                 $("#myCarousel").carousel("prev");
                 $scope.myVar= !$scope.myVar;

            }
            else{
            $("#myCarousel").carousel("prev");
            }

            //return false;
        }

        $scope.toggle= function()
        {
           $scope.myVar= !$scope.myVar;
        }




});


 







