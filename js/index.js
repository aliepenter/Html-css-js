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
},'S??? ??i???n tho???i kh??ng ????ng');
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
			required: "Vui l??ng nh???p s??? ??i???n tho???i ! ",
			phoneregex: "S??? ??i???n tho???i kh??ng ????ng ?????nh d???ng !"
		},
		_password:{
			required: "Vui l??ng nh???p m???t kh???u !",
			minlength: "M???t kh???u ph???i t???i thi???u 8 k?? t??? !"
		},
		_repassword:{
			required: "Vui l??ng nh???p l???i m???t kh???u !",
			equalTo: "M???t kh???u kh??ng tr??ng kh???p !"
		},
		_fname:{
			required: "Vui l??ng nh???p h??? !"
		},
		_lname:{
			required:"Vui l??ng nh???p t??n !",
		},
		_email:{
			required: "Vui l??ng nh???p Email !",
			email: "Email ph???i ????ng ?????nh dang !"
		},
		_quan:{
			required: "Qu???n c???a b???n !",
		},
		_city:{
			required: "Th??nh ph??? c???a b???n !",
		},
		_date:{
			required: "B???n c?? th??? ?????n h??m n??o !",
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
			required: "Vui l??ng nh???p s??? ??i???n tho???i ! ",
			phoneregex: "S??? ??i???n tho???i kh??ng ????ng ?????nh d???ng !"
		},
		_password:{
			required: "Vui l??ng nh???p m???t kh???u !",
			minlength: "M???t kh???u ph???i t???i thi???u 8 k?? t???"
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
			required: "Vui l??ng nh???p s??? ??i???n tho???i ! ",
			phoneregex: "S??? ??i???n tho???i kh??ng ????ng ?????nh d???ng !"
		},
	}
});