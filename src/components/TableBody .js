import React from 'react';

const TableBody = (props)=>{
    
    const rows = props.bookingData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.user}</td>
                <td>{row.email}</td>
                <td>{row.password}</td>
                <td>{row.fullName}</td>
                <td>{row.age}</td>
                <td>{row.dob}</td>
                <td>{row.division}</td>
                <td>{row.gender}</td>
                <td>{row.Skills}</td>
            </tr>
        );
    });
    
    return(
        <tbody>
       {rows}
       </tbody>
    );
}

export default TableBody;