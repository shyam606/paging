import React from 'react';

const Data=(props)=>{
    if(props.loading){
        return <h2>loaidng...</h2>
    }

    return(<>
        <div className="main_div">
        <h1>Users List</h1>
             <table className="table">
                    <tr className="heading">
                        <th>id</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                    </tr>
                        {props.users.map((user)=>{
                            return(<>
                            <tr className="data">
                                <td>{user.id}</td>
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                            </tr> </>)
                        })}
                      
                </table>
        </div>
    </>)
}

export default Data;