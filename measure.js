function ajaxJSON() {
    $.get("api/measure.php",function(data)
		{
            var obj = JSON.parse(data);
            addData(obj)
		}
	)
	.fail(function() {
		alert( "error" );
    });
}
function addData(obj){
        for(let item of obj)
            $('#measure-tab tr:last').after(`<tr><th>${item.Name}</th><th>${item.Value}</th><th>${item.Unit}</th></tr>`);
}
$(document).ready(function(){
        ajaxJSON();
});