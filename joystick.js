var actualState=null;
var timer;

var boxDown = $("#jb-bottom");
var boxUp = $("#jb-top");
var boxLeft = $("#jb-left");
var boxRight = $("#jb-right");
var boxCenter = $("#jb-center");

function startJoystick(){
    let sampleTimeMsec = 30;
	timer = setInterval(ajaxJSON, sampleTimeMsec);
}

function ajaxJSON() {
    $.get("api/joystick.php",function(data)
		{
            var obj = JSON.parse(data);
            Update(obj);
		}
	)
}
function Update(js)
        {
            if (actualState != null && js.direction != actualState.direction)
            {
                switch (actualState.direction)
                {
                    case "down":
                        boxDown.addClass("joybutton-released");
                        boxDown.removeClass("joybutton-clicked");
                        boxDown.removeClass("joybutton-pressed");
                        break;
                    case "up":
                        boxUp.addClass("joybutton-released");
                        boxUp.removeClass("joybutton-clicked");
                        boxUp.removeClass("joybutton-pressed");
                        break;
                    case "right":
                        boxRight.addClass("joybutton-released");
                        boxRight.removeClass("joybutton-clicked");
                        boxRight.removeClass("joybutton-pressed");
                        break;
                    case "left":
                        boxLeft.addClass("joybutton-released");
                        boxLeft.removeClass("joybutton-clicked");
                        boxLeft.removeClass("joybutton-pressed");
                        break;
                    case "middle":
                        boxCenter.addClass("joybutton-released");
                        boxCenter.removeClass("joybutton-clicked");
                        boxCenter.removeClass("joybutton-pressed");
                        break;
                }
            }
            switch (js.direction)
            {
                case "down":
                    switch (js.action)
                    {
                        case "pressed":
                            boxDown.removeClass("joybutton-released");
                            boxDown.addClass("joybutton-clicked");
                            boxDown.removeClass("joybutton-pressed");
                            break;
                        case "held":
                            boxDown.removeClass("joybutton-released");
                            boxDown.removeClass("joybutton-clicked");
                            boxDown.addClass("joybutton-pressed");
                            break;
                        case "released":
                            boxDown.addClass("joybutton-released");
                            boxDown.removeClass("joybutton-clicked");
                            boxDown.removeClass("joybutton-pressed");
                            break;
                    }
                    break;
                case "up":
                    switch (js.action)
                    {
                        case "pressed":
                            boxUp.removeClass("joybutton-released");
                            boxUp.addClass("joybutton-clicked");
                            boxUp.removeClass("joybutton-pressed");
                            break;
                        case "held":
                            boxUp.removeClass("joybutton-released");
                            boxUp.removeClass("joybutton-clicked");
                            boxUp.addClass("joybutton-pressed");
                            break;
                        case "released":
                            boxUp.addClass("joybutton-released");
                            boxUp.removeClass("joybutton-clicked");
                            boxUp.removeClass("joybutton-pressed");
                            break;
                    }
                    break;
                case "right":
                    switch (js.action)
                    {
                        case "pressed":
                            boxRight.removeClass("joybutton-released");
                            boxRight.addClass("joybutton-clicked");
                            boxRight.removeClass("joybutton-pressed");
                            break;
                        case "held":
                            boxRight.removeClass("joybutton-released");
                            boxRight.removeClass("joybutton-clicked");
                            boxRight.addClass("joybutton-pressed");
                            break;
                        case "released":
                            boxRight.addClass("joybutton-released");
                            boxRight.removeClass("joybutton-clicked");
                            boxRight.removeClass("joybutton-pressed");
                            break;
                    }
                    break;
                case "left":
                    switch (js.action)
                    {
                        case "pressed":
                            boxLeft.removeClass("joybutton-released");
                            boxLeft.addClass("joybutton-clicked");
                            boxLeft.removeClass("joybutton-pressed");
                            break;
                        case "held":
                            boxLeft.removeClass("joybutton-released");
                            boxLeft.removeClass("joybutton-clicked");
                            boxLeft.addClass("joybutton-pressed");
                            break;
                        case "released":
                            boxLeft.addClass("joybutton-released");
                            boxLeft.removeClass("joybutton-clicked");
                            boxLeft.removeClass("joybutton-pressed");
                            break;
                    }
                    break;
                case "middle":
                    switch (js.action)
                    {
                        case "pressed":
                            boxCenter.removeClass("joybutton-released");
                            boxCenter.addClass("joybutton-clicked");
                            boxCenter.removeClass("joybutton-pressed");
                            break;
                        case "held":
                            boxCenter.removeClass("joybutton-released");
                            boxCenter.removeClass("joybutton-clicked");
                            boxCenter.addClass("joybutton-pressed");
                            break;
                        case "released":
                            boxCenter.addClass("joybutton-released");
                            boxCenter.removeClass("joybutton-clicked");
                            boxCenter.removeClass("joybutton-pressed");
                            break;
                    }
                    break;
            }
            actualState = js;
}
$(document).ready(function(){
    startJoystick();
});
