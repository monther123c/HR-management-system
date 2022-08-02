function getRnsalaryCountingdInteger(Level) {
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




const Ghazi = {
    firstName: "Ghazi Samer",
  
    Department: "Administration",
    Level: "Senior",
    imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Eh76NsLjHcIFA4uD1-FSdxJdpoxxZ8uwp9TyxpkZ9TS6-L2TOcpr8_QyVEQ5R_h8eXc&usqp=CAU",
    salary:function(){   
        salary.salaryCounting(this.Level);
     },
     EmployeeID:function(){   
        this.EmployeeID. idMaker ();
     },
   print :function(){
    console.log("Employee name:" + this.firstName);
    console.log("Employee salary:" + this.salary);
   }
  };
  const Lana= {
    fullName: "Lana Samer",
   
    Department: "Finance",
    Level: "Senior",
    imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Eh76NsLjHcIFA4uD1-FSdxJdpoxxZ8uwp9TyxpkZ9TS6-L2TOcpr8_QyVEQ5R_h8eXc&usqp=CAU",
    salary:function(){   
        salary.salaryCounting(this.Level)
     },
     EmployeeID:function(){   
        this.EmployeeID. idMaker ();
     },
   print :function(){
    console.log("Employee name:" + this.firstName);
    console.log("Employee salary:" + this.salary);
   }
  };
  const  Tamara = {
    firstName: "Tamara Ayoub",
    
    Department: "Marketing",
    Level: "Senior",
    imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Eh76NsLjHcIFA4uD1-FSdxJdpoxxZ8uwp9TyxpkZ9TS6-L2TOcpr8_QyVEQ5R_h8eXc&usqp=CAU",
    salary:function(){   
        salary.salaryCounting(this.Level)
     },
     EmployeeID:function(){   
        this.EmployeeID. idMaker ();
     },
   print :function(){
    console.log("Employee name:" + this.firstName);
    console.log("Employee salary:" + this.salary);
   }
  };
  const Safi = {
    firstName: "Safi Walid",
   
    Department:"Administration",
    Level: "Mid-Senior",
    imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Eh76NsLjHcIFA4uD1-FSdxJdpoxxZ8uwp9TyxpkZ9TS6-L2TOcpr8_QyVEQ5R_h8eXc&usqp=CAU",
    salary:function(){   
        salary.salaryCounting(this.Level)
     },
     EmployeeID:function(){   
        this.EmployeeID.idMaker ();
     },
   print :function(){
    console.log("Employee name:" + this.firstName);
    console.log("Employee salary:" + this.salary);
   }
  };
  const Omar= {
    firstName: "Omar Zaid",
    
    Department: "Development",
    Level: "Senior",
    imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Eh76NsLjHcIFA4uD1-FSdxJdpoxxZ8uwp9TyxpkZ9TS6-L2TOcpr8_QyVEQ5R_h8eXc&usqp=CAU",
    salary:function(){   
        salary.salaryCounting(this.Level)
     },
     EmployeeID:function(){   
        this.EmployeeID.idMaker ();
     },
   print :function(){
    console.log("Employee name:" + this.firstName);
    console.log("Employee salary:" + this.salary);
   }
  };
  const Rana  = {
    firstName: "Rana Saleh ",
   
    Department: "Development",
    Level: "Junior",
    imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Eh76NsLjHcIFA4uD1-FSdxJdpoxxZ8uwp9TyxpkZ9TS6-L2TOcpr8_QyVEQ5R_h8eXc&usqp=CAU",
    salary:function(){   
        salary.salaryCounting(this.Level)
     },
     EmployeeID:function(){   
        this.EmployeeID. idMaker ();
     },
   print :function(){
    console.log("Employee name:" + this.firstName);
    console.log("Employee salary:" + this.salary);
   }
  };
  const Hadi  = {
    firstName: "Hadi Ahmad",
   
    Department: "Finance",
    Level: "Mid-Senior",
    imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Eh76NsLjHcIFA4uD1-FSdxJdpoxxZ8uwp9TyxpkZ9TS6-L2TOcpr8_QyVEQ5R_h8eXc&usqp=CAU",
    salary:function(){   
        salary.salaryCounting(this.Level)
     },
     EmployeeID:function(){   
        this.EmployeeID. idMaker ();
     },
   print :function(){
    console.log("Employee name:" + this.firstName);
    console.log("Employee salary:" + this.salary);
   }
  };