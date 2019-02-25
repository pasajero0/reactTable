import React, { Component } from 'react';
import './Table.scss';

class Table extends Component {

    render() {

        const {usersList} = this.props;

        return(
            <section className="tableSection">
                <table className="tableSection__table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First name</th>
                            <th>Second name</th>
                            <th>Telephone</th>
                            <th>Age</th>
                            <th>---</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usersList.map((value, i) => {
                            return (
                                <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{value.firstName}</td>
                                    <td>{value.lastName}</td>
                                    <td>{value.telephone}</td>
                                    <td>{value.age}</td>
                                    <td>
                                        <button onClick={()=>this.props.removeFromState(i)}>remove</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </section>

        )
    }
};

export default Table;