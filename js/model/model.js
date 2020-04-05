class Model {
    constructor(id){
        this.id = id;
        if(JSON.parse(localStorage.getItem(`users_${this.id}`)) != null) this.users = JSON.parse(localStorage.getItem(`users_${this.id}`));
        else this.users = [];
    };

    getUser(id) {
        return this.users.find(user => user.id == id)
    }

    addUser(user) {
        user.id = `${user.name}-${user.address}`;
        this.users.push(user);
        console.log(this.users);
        localStorage.setItem(`users_${this.id}`, JSON.stringify(this.users))
    }

    editUser(id, updatedUser) {
        this.users = this.users.map(user =>
            user.id === id ? { name: updatedUser.name, address: updatedUser.address, phone: updatedUser.phone, email: updatedUser.email, id: `${updatedUser.name}-${updatedUser.address}` } : user
        )
        localStorage.setItem(`users_${this.id}`, JSON.stringify(this.users))    
    }

    deleteUser(id) {
        console.log(id);
        this.users = this.users.filter(user => user.id !== id)
        console.log(this.users)
        localStorage.setItem(`users_${this.id}`, JSON.stringify(this.users))
    }

    searchUser(name){
        return this.users.filter(user => user.name.indexOf(name) > -1)
    }
    
}