var flags = true;
 function check () {
  	if (flags==true) {
		document.getElementById('menuHeader').classList.add('menuActive');
		document.getElementById('opAll').classList.add('opacityAll');
		flags = false;
}}
function back () { 
		document.getElementById('menuHeader').classList.remove('menuActive');
		document.getElementById('opAll').classList.remove('opacityAll');
		document.getElementById('pAll').style.display = 'none';
		flags = true;
		flag2 = true;
}
window.onscroll = function () {changeAtr()};
function changeAtr () {
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById('menuHeader').classList.add('menufix');
  } else {
    document.getElementById("menuHeader").classList.remove('menufix');
  }
  	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById('scrFixMenu').classList.add('menufix');
  } else {
    document.getElementById("scrFixMenu").classList.remove('menufix');
  }
}
var flag2 = true
function call () {
	if (flag2 == true) {
		document.getElementById('pAll').style.display = 'block';
		document.getElementById('opAll').classList.add('opacityAll');
		flag2 = false;
	}
}
var flag3 = true;
function call2 () {
	document.getElementById('pAll').style.display = 'block';
	document.getElementById('opAll2').classList.add('opacityAll2');
	document.getElementById('menuHeader').classList.remove('menuActive');
	flag3 = false;
}
function back2 () {
	document.getElementById('pAll').style.display = 'none';
	document.getElementById('opAll2').classList.remove('opacityAll2');
	document.getElementById('opAll').classList.remove('opacityAll');
	flag3 = true;
	flags = true;
}
function iteminfo () {
	document.getElementById('iteminfo').style.display = 'block';
	document.getElementById('iteminfo').classList.add('animate-pop')
	document.getElementById('opAll3').classList.add('opacityAll3');
}
function back3 () {
	document.getElementById('iteminfo').style.display = 'none';
	document.getElementById('opAll3').classList.remove('opacityAll3');
}
function closeitem () {
	document.getElementById('iteminfo').style.display = 'none';
	document.getElementById('opAll3').classList.remove('opacityAll3');
}
// function back () {
// 	if (flag2 == false) {
// 		document.getElementById('pAll').style.display = 'none';
// 		document.getElementById('opAll').classList.remove('opacityAll');
// 		flag2 = true;
// 	}
// }
// var mybutton = document.getElementById("myBtn");
// window.onscroll = function() {scrollFunction()};
// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }
// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }
// function scrFix() {
// 	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     document.getElementById("menuHeader").classList.add('fixed');
//   } else {
//     document.getElementById("menuHeader").classList.remove('fixed');
//   }
// }
$.validator.addMethod('phoneregex',function(value,element,reg){
	return reg.test(value);
},'Số điện thoại không đúng');
$('#signUpform').validate({
	rules:{
		_phone:{
			required: true,
			phoneregex:/^[0][3|8|9][0-9]{8}$/
		},
		_password:{
			required: true,
			minlength: 8
		},
		_fname:{
			required:true,
		},
		_lname:{
			required:true,
		},
		_email:{
			required: true,
			email: true
		},
		_repassword:{
			required: true,
			equalTo: "#password"
		},
		_quan:{
			required:true,
		},
		_city:{
			required:true,
		},
		_date:{
			required: true,
		}
	},
	messages:{
		_phone:{
			required: "Vui lòng nhập số điện thoại ! ",
			phoneregex: "Số điện thoại không đúng định dạng !"
		},
		_password:{
			required: "Vui lòng nhập mật khẩu !",
			minlength: "Mật khẩu phải tối thiểu 8 kí tự !"
		},
		_repassword:{
			required: "Vui lòng nhập lại mật khẩu !",
			equalTo: "Mật khẩu không trùng khớp !"
		},
		_fname:{
			required: "Vui lòng nhập họ !"
		},
		_lname:{
			required:"Vui lòng nhập tên !",
		},
		_email:{
			required: "Vui lòng nhập Email !",
			email: "Email phải đúng định dang !"
		},
		_quan:{
			required: "Quận của bạn !",
		},
		_city:{
			required: "Thành phố của bạn !",
		},
		_date:{
			required: "Bạn có thể đến hôm nào !",
		}
	}
});
$('#signInform').validate({
	rules:{
		_phone:{
			required: true,
			phoneregex:/^[0][3|8|9][0-9]{8}$/
		},
		_password:{
			required: true,
			minlength: 8
		}
	},
	messages:{
		_phone:{
			required: "Vui lòng nhập số điện thoại ! ",
			phoneregex: "Số điện thoại không đúng định dạng !"
		},
		_password:{
			required: "Vui lòng nhập mật khẩu !",
			minlength: "Mật khẩu phải tối thiểu 8 kí tự"
		},
	}
});
$('#callphonenum').validate({
	rules:{
		_phone:{
			required: true,
			phoneregex:/^[0][3|8|9][0-9]{8}$/
		},
	},
	messages:{
		_phone:{
			required: "Vui lòng nhập số điện thoại ! ",
			phoneregex: "Số điện thoại không đúng định dạng !"
		},
	}
});