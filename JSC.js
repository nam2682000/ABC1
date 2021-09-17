// function User(ten,tuoi)
// {
//     this.ten=ten;
//     this.tuoi=tuoi;
// }
// User.prototype.date='2000';

// var user1= new User('Nam',21);
// var user2= new User('Lam',22);
// user1.que='TN';
// user2.que='HN';
// console.log(user1.date);
// console.log(user2);



// var test = {
//     nam : 'nam',
//     tuoi : '19'
// }

// for(var key in test)
// {
//     console.log(test[key]);
// }
// console.log('aaaaaaaa')

// var test1 = ['nam','19']

var formValues= [
    { field: 'name', value: 'Sơn Đặng' },
    { field: 'age', value: 18 },
    { field: 'address', value: 'Hà Nội' },
]
for(var item of formValues){
    console.log(Object.values(item))
}
// function getRequestBodyFromValues(formValues) {

//     var object={}
//     for(var item of formValues){
//         var key=Object.values(item)[0];
//         var value=Object.values(item)[1];
//         object[key]=value
//     }
//     return object
// }
// console.log(getRequestBodyFromValues(formValues));

var monsters=[
    {
        name: 'Cá heo',
        attack: 50,
        speed: 100,
        hitpoint: 100,
    },
    {
        name: 'Khủng long',
        attack: 150,
        speed: 80,
        hitpoint: 180,
    },
    // ...
]
function findAMonsterByAttack(monsters) {
    return monsters.attack===150;
}
var a= monsters.find(findAMonsterByAttack);
console.log(a);
// for(a);
var courses= [
    { name: 'Javascript', vnd: 1000000 },
    { name: 'PHP', vnd: 990000 },
    { name: 'HTML, CSS', vnd: 0 }
    // ...
]
function hasFreeCourses(courses) {

    return courses.vnd ===0;
}
var a = courses.some(hasFreeCourses);
console.log(a);