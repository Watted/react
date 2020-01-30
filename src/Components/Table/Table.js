import React, {Component} from "react";


class Table extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoaded: false,
            isSorted:false
        }
    }

    componentWillMount() {
        fetch("http://localhost:4000/")
            .then(res => res.json())
            .then(res => {
                console.log(res)
                this.setState({data: res, isLoaded: true});
            })
    }

    renderTableData() {
        return this.state.data.map((user, index) => {
            const {id, name, email, password} = user;
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{password}</td>
                </tr>
            )

        })
    }

    sortTable = () => {
        let {data,isSorted} = this.state;
        if (isSorted === false) {
            for (let j = 0; j < data.length; j++) {
                for (let i = j + 1; i < data.length; i++) {
                    if (this.compare(data[i].id, data[j].id) === 1) {
                        this.swap(data, i, j);
                    }
                }
            }
        }else {
            data.reverse();
        }
        this.setState({data: data,isSorted:true});
    };

    swap(data,i,j) {
        let tmp = data[i];
        data[i]=data[j];
        data[j]= tmp;
    }

    compare(id1, id2) {
        if (id1 > id2) {
            return 1;
        }
        return -1;

    }

    render() {
        return (
            this.state.isLoaded ?
                <div className="ma5">
                    <table className="table table-bordered table-striped">
                        <tbody>
                        {this.renderTableData()}
                        </tbody>
                    </table>
                    <button onClick={this.sortTable}>sort</button>
                </div>
                :
                <div></div>
        )
    }

}

export default Table;
