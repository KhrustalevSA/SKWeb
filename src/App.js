import React from "react";
import Header from "./components/Header";
import Users from "./components/Users";
import AddUser from "./components/AddUser";
import axios from "axios";

const baseUrl = "http://localhost:8080/user/get/all"

class App extends React.Component {

    constructor(props) {
        super(props);

        axios.get(baseUrl).then((response) => {
            console.log(response.data);
            this.setState({users: response.data.userList});
        })

        this.state = {
            users: []
        };
        this.addUser = this.addUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.editUser = this.editUser.bind(this);
    }

    render() {
        return (
          <div className="name">
            <Header title="Список пользователей" />
            <main>
                <Users users={this.state.users}
                       onDelete={this.deleteUser}
                       onEdit={this.editUser}
                />
            </main>
            <aside>
                <AddUser onAdd={this.addUser}/>
            </aside>
          </div>
        )
    }

    deleteUser(id) {
        this.setState({
            users: this.state.users.filter((el) => el.id !== id)
        })
    }

    editUser(user) {
        let allUsers = this.state.users;
        allUsers[user.id - 1] = user;

        this.setState({users: []}, () => {
            this.setState({users: [...allUsers] })
        })
    }

    addUser(user) {
        const id = this.state.users.length + 1;
        this.setState({users: [...this.state.users, {id, ...user}] });
    }
}
export default App;
