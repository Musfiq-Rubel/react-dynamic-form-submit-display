import React, {Component} from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody ';

class Table extends Component {
    render() {
        return (
            <table class="table table-hover table-primary mx-3" style={{width:'50%'}}>
               <TableHeader/>
               <TableBody bookingData={this.props.bookingData}/>
              
            </table>
        );
    }
}

export default Table;