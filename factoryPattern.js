/*
  Design Patterns -> Factory Pattern

        EXAMPLE
*/

function Developer( name )
  {
    this.name = name
    this.type = "DEV"
  }

function Tester( name )
  {
    this.name = name
    this.type = "QA"
  }

function Say()
  {
    console.log( "Hi i'm " + this.name + " and i'm a " + this.type )
  }
  
function EmployeeFactory()
  {
  
    this.create = ( name, type ) => {
      switch(type)
      
        {
          case 1:
          
            return new Developer( name )
          
          case 2:
          
            return new Tester( name )
          
          }
      }
  }

const employeeFactory = new EmployeeFactory()
const employees = []

employees.push( employeeFactory.create( "Guy" , 10 ) )
employees.push( employeeFactory.create( "Other Guy" , 20 ) )

employees.forEach( emp => 
  {
    Say.call( emp )
  }
)
