import React, {Component} from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody ';

class Table extends Component {
    render() {
        return (
            <table className="table table-hover table-primary mx-3" >
               <TableHeader/>
               <TableBody bookingData={this.props.bookingData}/>
              
            </table>
        );
    }
}

export default Table;