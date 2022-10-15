let arrOfTeachers=JSON.parse(localStorage.getItem('arrOfTeachers__LS')) || []
let arrOfClasses__name=JSON.parse(localStorage.getItem('arrOfClasses__name__LS')) || []
let arrOfClasses__lesson=JSON.parse(localStorage.getItem('arrOfClasses__lesson__LS')) || []
arrOfClasses__name.push('')
arrOfClasses__lesson.push('')
setInterval(function(){
localStorage.setItem('arrOfTeachers__LS',JSON.stringify(arrOfTeachers))
localStorage.setItem('arrOfClasses__lesson__LS',JSON.stringify(arrOfClasses__lesson))
localStorage.setItem('arrOfClasses__name__LS',JSON.stringify(arrOfClasses__name))
},500)

let countOfClass=1
let genID
$('.box__enter__class__btn').click(function(){
    
    if(box__enter__class__nameOfClass.value.length>0 && box__enter__class__nameOfLesson.value.length>0){
        
$('#page__main__middlle__your__classess'+countOfClass).css('display','flex')
$('#page__main__middlle__your__classess__class__name'+countOfClass).html('Class: '+box__enter__class__nameOfClass.value)
$('#page__main__middlle__your__classess__class__lesson'+countOfClass).html('Class: '+box__enter__class__nameOfLesson.value)

$('.box__enter__class').slideUp(100)
$('.wrap').css('filter','blur(0px)')
arrOfClasses__name.push(box__enter__class__nameOfClass.value+genID)
arrOfClasses__lesson.push(box__enter__class__nameOfLesson.value+genID)
console.log(arrOfClasses__name)
console.log(arrOfClasses__lesson)
// localStorage.setItem('arrOfClasses__lesson__LS',JSON.stringify(arrOfClasses__lesson))
// localStorage.setItem('arrOfClasses__name__LS',JSON.stringify(arrOfClasses__name))
box__enter__class__nameOfClass.value=''
box__enter__class__nameOfLesson.value=''
countOfClass++

    }
})
$('.page__main__pages__addNewClass__img').click(function(){
    if(countOfClass<=20){
        setTimeout(function(){
            $('.box__enter__class').slideDown(100)
            $('.wrap').css('filter','blur(5px)')
        },200)

    }else{
        alert('You are full of Classes')
    }
})
// let arr ={
//     'techer1':[

//     ]
// }
// let app='teacher3'
// arr.techer =[]
// arr.app =[]
// arr.techer1.push('sdfdsf')
//    console.log(arr)

console.log(arrOfTeachers)
console.log(arrOfClasses__name)
console.log(arrOfClasses__lesson)

// console.log(arrOfTeachers[0].length)
let lengthOfId=(Math.round(window.performance.timeOrigin)+(Math.round(Math.random()*9)).toString()).length



$('.page__login__card__btn2').click(function(){

if(page__login__card__inp__username2.value.length>0 && page__login__card__inp__password2.value.length>0){
    let isTeacher =0;
$('.page__main__header__user').html('Teacher: '+page__login__card__inp__username2.value)
for(let i=0;i<=arrOfTeachers.length-1;i++){
 
    let currentTeacher=arrOfTeachers[i].length+1

    console.log(arrOfTeachers[i].substring(0,currentTeacher-lengthOfId))

if(arrOfTeachers[i].substring(0,currentTeacher-lengthOfId) == page__login__card__inp__username2.value+page__login__card__inp__password2.value){

    isTeacher=1
    genID=arrOfTeachers[i].substring(currentTeacher-lengthOfId+1)
    console.log(genID)
    for(let i=arrOfClasses__name.length-1;i>=0;i--){
        let a=0
let currentClassName=arrOfClasses__name[i].length
console.log(arrOfClasses__name[i].substring(currentClassName-lengthOfId+1))
        if(arrOfClasses__name[i].substring(currentClassName-lengthOfId+1)==genID){
            if(arrOfClasses__name[i].length>0){
                a++
                $('#page__main__middlle__your__classess'+a).css('display','flex')
                $('#page__main__middlle__your__classess__class__name'+a).html('Class: '+box__enter__class__nameOfClass.value)
$('#page__main__middlle__your__classess__class__lesson'+a).html('Class: '+box__enter__class__nameOfLesson.value)
            }
        }

    }
}
}
if(isTeacher==0){
    genID=Math.round(window.performance.timeOrigin)+Math.round(Math.random()*9)
    arrOfTeachers.push(page__login__card__inp__username2.value+page__login__card__inp__password2.value+genID )
}

localStorage.setItem('arrOfTeachers__LS',JSON.stringify(arrOfTeachers))
    // arrOfTeachers.push(page__login__card__inp__username2.value+page__login__card__inp__password2.value)

    console.log(arrOfTeachers)
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
tippy('#page__main__pages__addNewClass__img', {
    // default
    content: "Add New class",
    placement: 'top',
    followCursor: true,
    theme: 'material',
  });

  $('.box__enter__class').slideUp(0)

for(let i=1;i<=20;i++){
    $('#page__main__middlle__your__classess'+i).css('display','none')
    $('.page__main__middlle').append('<div class="page__main__middlle__your__classess" id="page__main__middlle__your__classess'+i+'"><div class="page__main__middlle__your__classess__class__name" id="page__main__middlle__your__classess__class__name'+i+'">Class: 9-V</div><div class="page__main__middlle__your__classess__class__lesson" id="page__main__middlle__your__classess__class__lesson'+i+'">Lesson: English</div><div class="page__main__middlle__your__classess__class__students" id="page__main__middlle__your__classess__class__lesson'+i+'">Students: 18</div></div>')
}
$('#page__main__middlle__your__classess1').click(function(){

  

})
$('.wrap').click(function(){
    $('.box__enter__class').slideUp(100)
$('.wrap').css('filter','blur(0px)')
})