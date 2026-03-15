// DIfference between var, let and const
//1. Scope
/*
//2 types- Functional Scole(var)

function varScope()
{
    if(true)
    {
        var msg="Hello";
    }
    console.log(msg);
    
}
varScope();
*//*
// Block Scope (let and const)

function blockScope()
{
    if(true)
    {
        let msg="Hello";
        const greet="Hel";
    }
    console.log(msg); //not accessibleoutside the block
    console.log(greet); //not accessibleoutside the block
}
    */

//2. Declaration/Value assignment 