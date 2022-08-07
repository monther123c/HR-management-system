var id =999;
var endUser =[];
var lvl= "Senior";
var netS;
const  divs= document.getElementsByTagName('div');
function addId (){
    id =id+1;
    return id;

};
function salaryCounting (lvl) {
    if (this.lvl =="Senior"){
      netS=  (Math.floor(Math.random() * (2000 - 	1500)) + 1500)*0.075;
        return netS;
    }
    else if ( this.lvl =="Mid-Senior"){
   netS= (Math.floor(Math.random() * (1500 - 	1000)) + 1000)*0.075;
    return netS;
    }
 
    else if ( this.lvl =="Junior"){
     netS= (Math.floor(Math.random() * (1000 - 	500)) + 500) *0.075;
    return netS;
    }
     
   };
   function EmployeeConst(FullName,Department,Level,imgURL,salary,id){
    this.name= FullName;
    this.department= Department;
    this.level= Level;
    this.img=imgURL;
    this. Sal =salary;
    this.EmpId=id;
    this.addId=function(id){
        this.EmpId=id;
    };
    this.salaryCounting=function(level){
        this.salary =netS;
    };
endUser.push(this);
   }
   EmployeeConst.prototype.render=function(){
    // document.write(
    //     `Employee name: ${this.name}`,
    //     `Deparment: ${this.department}`,
    //     `Employee salary :${this.salary}`,
    // );
    // document.write(`<br>`);
    const pEL =document.createElement('p');
    pEL.textContent=  `Employee name: ${this.name}`+ `<br>`
    `Deparment: ${this.department}`+ `<br>`
    `id : ${this.EmpId}--` +`level : ${this.level}`;
    
    divs[0].appendChild(pEL);
    const imgElm= document.createElement('img');
    imgElm.src =this.img;
    imgElm.alt =this.name;
    divs[0]=appendChild(imgElm);


   };

   const emp1= new EmployeeConst( "Ghazi Samer", "Administration","Senior","https://pixabay.com/vectors/avatar-people-person-business-user-3637425/",salaryCounting("Senior"),addId());
   const emp2= new EmployeeConst( "Lana Samer", "Finance","Senior","https://pixabay.com/vectors/avatar-people-person-business-user-3637425/",salaryCounting("Senior"),addId());
   const emp3= new EmployeeConst( "Tamara Ayoub ", "Marketing","Senior","https://pixabay.com/vectors/avatar-people-person-business-user-3637425/",salaryCounting("Senior"),addId());
   const emp4= new EmployeeConst( "Safi Walid ", "Administration","Mid-Senior","https://pixabay.com/vectors/avatar-people-person-business-user-3637425/",salaryCounting("Mid-Senior"),addId());
   const emp5= new EmployeeConst( "Omar Zaid ", "Development","Senior","https://pixabay.com/vectors/avatar-people-person-business-user-3637425/",salaryCounting("Senior"),addId());
   const emp6= new EmployeeConst( "Rana Saleh ", "Development","Junior","https://pixabay.com/vectors/avatar-people-person-business-user-3637425/",salaryCounting("Junior"),addId());
   const emp7= new EmployeeConst( "Hadi Ahmad ", "Finance","Mid-Senior","https://pixabay.com/vectors/avatar-people-person-business-user-3637425/",salaryCounting("Mid-Senior"),addId());
   console.log(endUser);

   for (i=0;i<endUser.length; i++){
    endUser[i].render();
   }