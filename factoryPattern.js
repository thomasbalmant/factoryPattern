/*
  Design Patterns -> Factory Pattern

        EXAMPLE
*/

function Developer( name )
  {
    this.name = name
    this.type = "Developer"
  }

function Tester( name )
  {
    this.name = name
    this.type = "Tester"
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

employees.push( employeeFactory.create( "Guy" , 1 ) )
employees.push( employeeFactory.create( "Other Guy" , 2 ) )

employees.forEach( emp => 
  {
    Say.call( emp )
  }
)
