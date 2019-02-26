import React from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css';
import './Table.scss';

const Table = ( { usersList, removeFromState } ) => { 
       
    const columns = [
        {
            Header: 'id',
            Cell: props => <span className='number'>{props.index+1}</span>
        },
        {
            Header: 'First name',
            accessor: 'firstName'
        }, 
        {
            Header: 'Last name',
            accessor: 'lastName' 
        }, 
        {
            Header: 'Telephone',
            accessor: 'telephone' 
        },
        {
            Header: 'Age',
            accessor: 'age'
        },
        {
            Header: 'button',
            Cell: props => <button className='tableSection__button' onClick={()=>removeFromState(props.index)}>remove</button>
        }
    ]
    
    return (
        <ReactTable
        className="tableSection__table"
        data={usersList}
        columns={columns}
        defaultPageSize={20}
        />
    )

};

export default Table;