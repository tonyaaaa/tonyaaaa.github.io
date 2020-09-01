$(function () {
$("#myModal_login").modal({
    show:false,
    backdrop:'static',

});
});

$(function () {
 $("#myModal_reg").modal({
     show: false,
     backdrop: 'static'
 });
});


$(function () {
 document.getElementById('signup').onclick=Regist_Action;
 document.getElementById('regist').onclick=Login_Action;
 function Regist_Action() {

     $("#myModal_login").modal('toggle','hiden')
     $("#myModal_reg").modal({
         show: true,
         backdrop: 'static'
     });

 }

function Login_Action() {
    $("#myModal_reg").modal('toggle','hiden')
    $("#myModal_login").modal({
        show:true,
        backdrop:'static'
    });

}

})
