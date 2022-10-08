let arrOfTeachers=JSON.parse(localStorage.getItem('arrOfTeachers__LS')) || []

setTimeout(function(){
localStorage.setItem('arrOfTeachers__LS',JSON.stringify(arrOfTeachers))
},1000)












$('.page__login__card__btn2').click(function(){

if(page__login__card__inp__username2.value.length>0 && page__login__card__inp__password2.value.length>0){
    console.log('gdfg')
    $('.page__login').css('display','none')
    $('.page__main__header').css('display','flex')
    $('.page__main').css('display','flex')
}
})

$('.page__login__card1').mouseenter(function(){
    $('.page__login__card__btn1').css('backgroundColor','white')
    $('.page__login__card__btn1').css('color','rgb(63, 63, 249)')
})
$('.page__login__card2').mouseenter(function(){
    $('.page__login__card__btn2').css('backgroundColor','white')
    $('.page__login__card__btn2').css('color','rgb(63, 63, 249)')
})
$('.page__login__card').mouseleave(function(){
    $('.page__login__card__btn').css('backgroundColor','rgb(63, 63, 249)')
    $('.page__login__card__btn').css('color','white')
})