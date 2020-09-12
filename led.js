var hexDigits = new Array("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"); 

$(document).ready(function () {
    LoadLeds()
    $(".btnLED").click(function (e) {
        if (e.shiftKey) {
            $(this).addClass("btnLED_choosen");
            $("#led_color").val("#"+rgb2hex($(this).css("background-color")));
        }
        else{
            $(".btnLED").each(function() {
                $(this).removeClass("btnLED_choosen"); 
            });
            $(this).addClass("btnLED_choosen");
            $("#led_color").val("#"+rgb2hex($(this).css("background-color")));
        } 
    });
    $("#button_set_color").click(function(){
        
        $(".btnLED_choosen").each(function(){$(this).css("background-color",$("#led_color").val());});
        var arr=[];
        $(".btnLED").each(function() {
            let color =  parseInt(rgb2hex($(this).css("background-color")),16); 
            arr.push(color);
        });
        console.log(JSON.stringify(arr));
        $(".btnLED").each(function() {
            $(this).removeClass("btnLED_choosen"); 
        });
        sendLeds(arr);

    });
    
})

function LoadLeds() {
    $.get("api/led.php",function(data)
		{
			var obj = JSON.parse(data);
            for(let i=0;i<64;i++)
            {
                $("#led"+i).css("background-color","#"+obj[i].toString(16).padStart(6, '0'));
            }
		}
	)
	.fail(function() {
		alert( "error" );
	});
}

function sendLeds(arr)
{
    $.post("api/led.php", { leds: arr }, function (data) {
        if (data.success == false) {
            alert("error sending data");
        }
    });
}

function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function hex(x) {
    return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
}
