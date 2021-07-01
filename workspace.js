


const changing=[

{
id:"1",
mainImage:"ChangeDog.jpg",
minH:"Chang Chew",
pika:"Black Pug",
para:"Hi! My name is Chang Chew and according to my owner I am the cutest dog in the world . So tell me your views about this statement.I am not sure about my breed beacuse my owner never told me anything about it. Ok bye! Nice to meet you.",

},

    {
        id:"2",
        mainImage :"panda.jpeg",
        minH :"oreo",
        pika :"Panda",
        para :"Hi! My name is oreo and I am a cute little panda.My name is oreo beacuse I am black and white just like oreo but you are not allowed to eat me. If you are talking about cuteness then let me tell you that I'm overloaded with it.Bye Bye!!",

    },


{
id:"3",
mainImage:"sqNinja.jpeg",
minH:"Sushi",
pika:"Fox Squirrel",
para:"Hello! My name is Sushi and I am a ninja squirrel do you want to know why? Beacuse when I land on the ground I look like a ninja.People think I am a rat with a cuter outfit.",

},


{
id:"4",
mainImage:"billuCat.jpg",
minH:"Simba",
pika:"Singapura Cat",
para:"Bonjour! My name is Simba but I am not a tiger. My breed is not singapura but I love that breed so I just asked my owner to consider me as a singapura cat.Bye Bye!!"
}
];


const p=document.getElementById("mainImage");
const q=document.getElementById("miniH");
const r=document.getElementById("pika");
const w=document.getElementById("para");


let e=0;

window.addEventListener("DOMContentLoaded",function(){

p.src=changing[e].mainImage;
q.innerHTML=changing[e].minH;
r.innerHTML=changing[e].pika;
w.innerHTML=changing[e].para;
});


document.querySelector(".lefty").addEventListener("click",function(){

e=e+1;
if(e==4){
    e=0;
    p.src=changing[e].mainImage;
q.innerHTML=changing[e].minH;
r.innerHTML=changing[e].pika;
w.innerHTML=changing[e].para;

}
else{
p.src=changing[e].mainImage;
q.innerHTML=changing[e].minH;
r.innerHTML=changing[e].pika;
w.innerHTML=changing[e].para;
}

});
document.querySelector(".left").addEventListener("click",function(){

    e=e-1;
    if(e==-1){
        e=3;
        p.src=changing[e].mainImage;
    q.innerHTML=changing[e].minH;
    r.innerHTML=changing[e].pika;
    w.innerHTML=changing[e].para;
    
    }
    else{
    p.src=changing[e].mainImage;
    q.innerHTML=changing[e].minH;
    r.innerHTML=changing[e].pika;
    w.innerHTML=changing[e].para;
    }
    
    })
    


document.querySelector(".io").addEventListener("click",function(){
 
e=Math.random()*changing.length;
e=Math.floor(e);

p.src=changing[e].mainImage;
 q.innerHTML=changing[e].minH;
 r.innerHTML=changing[e].pika;
 w.innerHTML=changing[e].para;

});


