$(document).ready(function(){
	function validName(str){
		return /^[\w-]{5,30}$/.test(str);
	}

	function validPwd(str){
		return /^.{5,30}$/.test(str);
	}

	$('#content').delegate('.text','keydown',function(ev){
		if(ev.keyCode == 13) {
			ev.preventDefault();
			$('#login').click();
		}
	}).delegate('#login','click',function(){
		if(!validName($('#username').val())){
			$('#nm-tip').html('5-30 characters:a-z,A-Z,0-9!').css('color','red');
			$('#pwd-tip').css('opacity','0');
		} else if(!validPwd($('#password').val())){
			$('#nm-tip').html('Valid name!').css('color','green');
			$('#pwd-tip').html('5-30 characters!').css('opacity','1');
		} else {
			location.href = 'index.html';
		}
	}).delegate('#username','change',function(){
		if(!validName($('#username').val())){
			$('#nm-tip').html('5-30 characters:a-z,A-Z,0-9!').css('color','red');
			$('#pwd-tip').css('opacity','0');
		} else {
			$('#nm-tip').html('Valid name!').css('color','green');
			$('#pwd-tip').css('opacity','1');
		}
	}).delegate('#password','change',function(){
		if(!validPwd($('#password').val())){
			$('#pwd-tip').html('5-30 characters!').css({
				color:'red',
				opacity : '1'
			});
		} else {
			$('#pwd-tip').css('opacity','0');
		}
	})
})