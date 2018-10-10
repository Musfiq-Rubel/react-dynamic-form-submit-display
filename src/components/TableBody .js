import React from 'react';

const TableBody = (props)=>{
    
    const rows = props.bookingData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.email}</td>
                <td>{row.password}</td>
                <td>{row.destination}</td>
                <td>{row.ticket}</td>
                <td>{row.date}</td>
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