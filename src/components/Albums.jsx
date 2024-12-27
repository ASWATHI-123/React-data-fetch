import React from "react";
const Albums = ({albums}) =>{
    return(
        <table>
            <thread>
                <tr>
                    <th>
                        userId
                    </th>
                    <th>
                        id
                    </th>
                    <th>
                        title
                    </th>
                </tr>
                <tbody>
                    {albums && albums.map((albums,i)=>(
                       <tr key={i}>
                            <td>
                                {albums?.userId?? ''}
                            </td>
                            <td>
                                {albums?.id?? ''}
                            </td>
                            <td>
                                {albums?.title??''}
                            </td>
                       </tr> 
                    ))}
                </tbody>
            </thread>
        </table>
    )
}
export default Albums;