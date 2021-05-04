let cont=0;

document.getElementById('container_nav').addEventListener('click',function () {
    document.querySelector('#nav').classList.toggle('menu_conten');
    if(cont==0){  
        cont=1;
        document.querySelector('#icon_menu').classList.replace('fa-bars','fa-times');
        document.querySelector('.menu').style.background='#fbfbfb';
    }else{
        cont=0; 
        document.querySelector('#icon_menu').classList.replace('fa-times','fa-bars');
        document.querySelector('.menu').style.background='transparent';
       
    }
    
  
});
document.getElementById('item1').addEventListener('mouseover',function () {
    document.getElementById("img").src="0.jpg";
});
document.getElementById('item2').addEventListener('mouseover',function () {
    document.getElementById("img").src="1.jpg";
});
document.getElementById('item3').addEventListener('mouseover',function () {
    document.getElementById("img").src="img.png";
});
