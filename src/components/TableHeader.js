import React from 'react';

const TableHeader = () => { 
    return (
        <thead className="thead-dark">
        <tr>
            <th>User</th>
            <th>Email</th>
            <th>Password</th>
            <th>Full Name</th>
            <th>Age</th>
            <th>DOB</th>
            <th>Division</th>
            <th>Gender</th>
            <th>Skills</th>
        </tr>
    </thead>
    );
}

export default TableHeader;