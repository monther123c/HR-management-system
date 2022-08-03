function salaryCounting (Level) {
   if (this.Level =="Senior"){
    return (Math.floor(Math.random() * (2000 - 	1500)) + 1500)*0.075;
   }
   else if ( this.Level =="Mid-Senior"){
    return (Math.floor(Math.random() * (1500 - 	1000)) + 1000)*0.075;
   }

   else if ( this.Level =="Junior"){
    return (Math.floor(Math.random() * (1000 - 	500)) + 500) *0.075;
   }
    
  }















































































  
  function idMaker (){
    val = Math.floor(1000 + Math.random() * 9000);
    return val;

  }
  function EmployeeConst (fullName, Department, salary ) {
   this.fullName=fullName;
   this.Department=this.Department;
   this.salary= salary;
  
 }
 const Ghazi=new EmployeeConst("Ghazi Samer", "Administration",salaryCounting("Senior") );
 const Lana=new EmployeeConst("Lana Samer ", "Finance ",salaryCounting("Senior") );
 const Tamara =new EmployeeConst("Tamara Ayoub ", "Marketing",salaryCounting("Senior") );
 const Safi =new EmployeeConst("Safi Walid ", "Administration",salaryCounting("Mid-Senior") );
 const Omar =new EmployeeConst("Omar Zaid ", "Development",salaryCounting("Senior") );
 const Rana  =new EmployeeConst("Rana Saleh ", "Development",salaryCounting("Junior") );
 const Hadi  =new EmployeeConst("Hadi Ahmad ", "Finance",salaryCounting("Mid-Senior") );

 EmployeeConst.prototype.name = function() {
  
   document.write('<p> ${this.fullName}</p> <p> ${ this.Department}</p> <p> ${ this.salary}</p> <br>');
 };