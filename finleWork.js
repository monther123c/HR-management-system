'use strict';
let allEmployee=[];
let uniqueId=[]
for (let i = 1000; i < 1007; i++) {
    uniqueId.push(i)
}

function salary(min,max) {
    return (
        Math.floor(Math.random() * (max - min)) +
        min -
        (Math.floor(Math.random() * (max - min)) + min) * 0.075
        );
}

function Employee (employeeId,fullName, department, level,image, salary) {
    this.employeeId=employeeId
    this.fullName=fullName;
    this.department=department;
    this.level=level;
    this.image=image
    this.salary=salary;
    
    allEmployee.push(this)
}
const employee_01 = new Employee(uniqueId[0],'Ghazi Samer','Administration', 'Senior','./assets/Ghazi.jpg',salary(1500,2000));
const employee_02 = new Employee(uniqueId[1],'Lana Ali','Finance', 'Senior','./assets/Lana.jpg' ,salary(1500,2000));
const employee_03 = new Employee(uniqueId[2],'Tamara Ayoub','Marketing', 'Senior','./assets/Tamara.jpg', salary(1500,2000));
const employee_04 = new Employee(uniqueId[3],'Safi Walid','Administration', 'Mid-Senior','./assets/Safi.jpg',salary(1000,1500));
const employee_05 = new Employee(uniqueId[4],'Omar Zaid','Development', 'Senior','./assets/Omar.jpg',salary(1500,2000));
const employee_06 = new Employee(uniqueId[5],'Rana Saleh','Development', 'Junior','./assets/Rana.jpg', salary(500,1000));
const employee_07 = new Employee(uniqueId[6],'Hadi Ahmad','Finance', 'Mid-Senior','./assets/Hadi.jpg',salary(1000,1500));

let main= document.getElementsByTagName('main')
    let container= document.createElement('div');
    container.className='container';
    main[0].appendChild(container)
    console.log(container)

    let numOfEmp =7;
    let numOfEmpInEachRow=3;
    let numOfRows=Math.ceil(numOfEmp/numOfEmpInEachRow)


    let counter=0

    for (let i = 0; i < numOfRows; i++) {
        let row=document.createElement('div');
        row.className='row'
        container.appendChild(row);


        for (let j = 0; j < numOfEmpInEachRow; j++) {
            let employee=document.createElement('div')
            employee.className='employee'
            row.appendChild(employee)

            let card =document.createElement('div')
            card.className='card'
            employee.appendChild(card)

            
            let employeeNum=allEmployee[counter]

            let picture =document.createElement('img')
            picture.src=employeeNum['image']

            let paragraph_01 =document.createElement('p1')
            paragraph_01.textContent=`Name: ${employeeNum['fullName']} - ID: ${employeeNum['employeeId']}`
            
            let paragraph_02 =document.createElement('p2')
            paragraph_02.textContent=`Department: ${employeeNum['department']} - Level: ${employeeNum['level']}`
            
            let paragraph_03 =document.createElement('p3')
            paragraph_03.textContent=employeeNum['salary']

            card.append(picture,paragraph_01,paragraph_02,paragraph_03)
            counter++

            if (i==numOfRows-1){
                break;
            }
  
        }
    }




