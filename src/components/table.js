const person = [{
    name:"asi",
    age:20
},
{
    name:"sil",
    age:22
}]

return(
    <>
        <table>
            <tr>
            <th>name</th>
            <th>age</th>


            </tr>
            {person.map((item) =>(
            <tr>
            <td> 
                {item.name}
            </td>
            </tr>
            
            ))}
            <h1>tables</h1>

           
           

            <th>age</th>
            <td> {person.map((item) =>{
                {item.age}
            })}</td>
        </table>
    </>
)