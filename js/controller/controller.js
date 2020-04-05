class Controller {
    constructor(model, view, id) {
        this.model = model;
        this.view = view;
        this.id = id;
        this.bindAddUser();
        this.bindActionUser();
        this.bindSearchUser();
        this.onDisplayChanged(this.model.users);
    };

    onDisplayChanged = (users) => {
        this.view.displayUserTable(users);
    }

    bindAddUser() {
        this.view.buttonAddUser.addEventListener('click', event => {
            this.view.formUser.style.display = "block";
            this.view.buttonOke.addEventListener('click', event => {
                let a = this.view.inputName.value;
                let b = this.view.inputAddress.value;
                let c = this.view.inputPhone.value;
                let d = this.view.inputEmail.value;
                this.model.addUser({name: a, address: b, phone: c, email: d});
            })
        })
    }

    bindActionUser() {
        this.view.tableMytable.addEventListener('click', event => {
            if (event.target.className === 'delete') {
                const id = event.target.parentElement.parentElement.id;
                this.model.deleteUser(id);
                console.log(this.model.users)
                this.onDisplayChanged(this.model.users);
            }     
            if (event.target.className === 'edit') {
                const id = event.target.parentElement.parentElement.id;
                this.view.displayCurrentForm(this.model.getUser(id))
                this.view.buttonOke.addEventListener('click', event => {
                    let a = this.view.inputName.value;
                    let b = this.view.inputAddress.value;
                    let c = this.view.inputPhone.value;
                    let d = this.view.inputEmail.value;
                    this.model.editUser(id, {name: a, address: b, phone: c, email: d});
                })
                console.log(this.model.users)
            }            
        })
    }

    bindSearchUser(){
        this.view.buttonSearch.addEventListener('click', event => {
            console.log(this.view.inputSearch.value);
            let searchUser = this.model.searchUser(this.view.inputSearch.value);
            this.onDisplayChanged(searchUser);
        })
    }


}
