// Task1
// var numbers=[1,4,6,7,9]

// function EvenNumbers(numbers)
// {
//     let sum=0;
//     for (let i = 0; i < numbers.length; i++)
//     {
//        if(numbers[i]%2==0) 
//        {
//            sum+=numbers[i]
//        }
//     }
//     return sum;
// }

// function OddNumbers(numbers)
// {
//     let sum=0;
//     for (let i = 0; i < numbers.length; i++)
//     {
//        if(!numbers[i]%2==0) 
//        {
//            sum+=numbers[i];
//        }
//     }
//     return sum;
// }

// console.log(OddNumbers(numbers))
// console.log(EvenNumbers(numbers))

// Task2
// class Student{
//     constructor(name,surname,point)
//     {
//         this.Name=name;
//         this.Surname=surname;
//         this.Point=point;
//     }
// }

// let std1=new Student()
// std1.Name="Mesud";
// std1.Surname="Abbasov";
// std1.Point=45;

// let std2=new Student()
// std2.Name="Ramin";
// std2.Surname="Ehmedov";
// std2.Point=57;

// let std3=new Student()
// std3.Name="Amin";
// std3.Surname="Zeynalov";
// std3.Point=65;

// let students=[std1,std2,std3]

// function PointChecker(students)
// {
//     let students2=[]
//     for (let i = 0; i < students.length; i++)
//     {
//         if(students[i].Point>50)
//         students2[students2.length]=students[i]
//     }
//     return students2
// }
// console.log(PointChecker(students))

// Task3
// function Repeat(word,count=1)
// {
//     let str="";
//     for (let i = 0; i < count; i++) {
//         str+=word;
//     }
//     return str;
// }
// console.log(Repeat("Hi!",3))

// Task4

var arr=[1,2,3,"tireddd",true,false,null]
function EvenTotal(arr)
{
    let count=0
    for (let i = 0; i < arr.length; i++) {
        if(typeof(arr[i]=="number")){
            if(arr[i]%2==0)
            count+=i
        }
    }
    return count;
}

console.log(EvenTotal(arr));