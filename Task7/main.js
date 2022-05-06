class Human
{
    constructor(name,surname,age)
    {
        this.Name=name,
        this.Surname=surname,
        this.Age=age
    }

    ShowInfo()
    {
        return`Name:${this.Name} Surname: ${this.Surname} Age: ${this.Age}`
    }
}


class Student extends Human
{
    constructor(name,surname,age,groupNo)
    {
        super(name,surname,age)
        this.GroupNo=groupNo
    }
}

let Students=[]

class Users
{
    constructor(id,name)
    {
        this.Name=name,
        this.Id=id
    }

    Add(student)
    {
        this.Students.push(student)
    }

    SearchStudentyName(search)
    {
        let newArr=[];
        for (let i = 0; i < Students.length; i++)
        {
            if(Students[i].Name.includes(search))
              newArr[newArr.length]=Students[i]
        }
        return newArr;
    }

    FindAllStudentsByName(value)
    {
        var result = Students.FindAll(x => x.Name.ToLower() == value.ToLower());
        if (result.name == null)
        {
            Console.log("Bele bir adda telebe yoxdur");
        }
        for (const item of result) 
        {
            return`Name:${this.Name} Surname: ${this.Surname} Age: ${this.Age} GroupNo:${this.GroupNo}`
        }
    }
}