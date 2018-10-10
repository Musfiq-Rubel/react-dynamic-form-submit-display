import React from 'react';

const TableHeader = () => { 
    return (
        <thead class="thead-dark">
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Destination</th>
            <th>Total ticket</th>
            <th>Date</th>
        </tr>
    </thead>
    );
}

export default TableHeader;