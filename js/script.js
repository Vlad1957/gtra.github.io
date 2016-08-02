$(document).ready(function() {
	$(".phoneform").inputmask("+7(999)999-99-99", 
		{"onincomplete": function(){ alert('Некорректно введен номер телефона');},
		"clearIncomplete": true
	});//маска
});

$(document).ready(function(){

    $("#form1").validate({
        
       rules:{ 
        
            name:{
                required: true,
                minlength: 3,
                maxlength: 10,
            },
            
            phone:{
                required: true,
                minlength: 10,
            },
       },
       
       messages:{
        
            name:{
                required: "Обязательно для заполнения",
                minlength: "Слишком короткое имя",
                maxlength: "Слишком длинное имя",
            },
            
            phone:{
                required: "Обязательно для заполнения",
                minlength: "Слишком короткий номер",
            },
        
       }
        
    });

    $("#form2").validate({
        
       rules:{ 
        
            name:{
                required: true,
                minlength: 3,
                maxlength: 10,
            },
            
            phone:{
                required: true,
                minlength: 10,
            },
       },
       
       messages:{
        
            name:{
                required: "Обязательно для заполнения",
                minlength: "Слишком короткое имя",
                maxlength: "Слишком длинное имя",
            },
            
            phone:{
                required: "Обязательно для заполнения",
                minlength: "Слишком короткий номер",
            },
        
       }
        
    });

    $("#form3").validate({
        
       rules:{ 
        
            name:{
                required: true,
                minlength: 3,
                maxlength: 10,
            },
            
            phone:{
                required: true,
                minlength: 10,
            },
       },
       
       messages:{
        
            name:{
                required: "Обязательно для заполнения",
                minlength: "Слишком короткое имя",
                maxlength: "Слишком длинное имя",
            },
            
            phone:{
                required: "Обязательно для заполнения",
                minlength: "Слишком короткий номер",
            },
        
       }
        
    });

    $("#form4").validate({
        
       rules:{ 
        
            name:{
                required: true,
                minlength: 3,
                maxlength: 10,
            },
            
            phone:{
                required: true,
                minlength: 10,
            },
       },
       
       messages:{
        
            name:{
                required: "Обязательно для заполнения",
                minlength: "Слишком короткое имя",
                maxlength: "Слишком длинное имя",
            },
            
            phone:{
                required: "Обязательно для заполнения",
                minlength: "Слишком короткий номер",
            },
        
       }
        
    });

    $("#form5").validate({
        
       rules:{ 
        
            name:{
                required: true,
                minlength: 3,
                maxlength: 10,
            },
            
            phone:{
                required: true,
                minlength: 10,
            },
       },
       
       messages:{
        
            name:{
                required: "Обязательно для заполнения",
                minlength: "Слишком короткое имя",
                maxlength: "Слишком длинное имя",
            },
            
            phone:{
                required: "Обязательно для заполнения",
                minlength: "Слишком короткий номер",
            },
        
       }
        
    });

    $("#form6").validate({
        
       rules:{ 
        
            name:{
                required: true,
                minlength: 3,
                maxlength: 10,
            },
            
            phone:{
                required: true,
                minlength: 10,
            },
       },
       
       messages:{
        
            name:{
                required: "Обязательно для заполнения",
                minlength: "Слишком короткое имя",
                maxlength: "Слишком длинное имя",
            },
            
            phone:{
                required: "Обязательно для заполнения",
                minlength: "Слишком короткий номер",
            },
        
       }
        
    });


}); //end of ready