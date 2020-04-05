class View {
    constructor() {
        this.main = this.getElement('.main');
        this.top = this.createElement('div', 'top');
            this.inputSearch = this.createElement('input', 'inputSearch');
                this.inputSearch.type = 'text';
                this.inputSearch.placeholder = 'Search by name';
                this.inputSearch.id = 'inputSearch'
            this.buttonSearch = this.createElement('button', 'btn-search');
                this.buttonSearch.textContent = "Search";
            this.buttonAddUser = this.createElement('button', 'btn-addUser');
                this.buttonAddUser.textContent = "Add User";
            this.top.append(this.inputSearch, this.buttonSearch, this.buttonAddUser);
        this.addUser = this.createElement('div', 'addUser');
            this.formUser = this.createElement('div', 'formUser');
            this.formUser.id = 'form-user'
                this.form = this.createElement('form');
                    this.inputId = this.createElement('input', 'id');
                        this.inputId.id = 'id';
                        this.inputId.hidden = true;
                        this.inputId.type = 'text';
                    this.pOne = this.createElement('p');
                        this.lableName = this.createElement('label');
                            this.lableName.textContent = "Họ tên";
                        this.inputName = this.createElement('input', 'name');
                            this.inputName.type = 'text';
                            this.inputName.name = 'name';
                            this.inputName.textContent = 'Tên';
                            this.inputName.id = 'name';
                        this.pOne.append(this.lableName, this.inputName);
                    this.pTwo = this.createElement('p');
                        this.lableAddress = this.createElement('label');
                            this.lableAddress.textContent = "Địa chỉ";
                        this.inputAddress = this.createElement('input', 'name');
                            this.inputAddress.type = 'text';
                            this.inputAddress.name = 'address';
                            this.inputAddress.textContent = 'Địa chỉ';
                            this.inputAddress.id = 'address';
                        this.pTwo.append(this.lableAddress, this.inputAddress);
                    this.pThree = this.createElement('p');
                        this.lablePhone = this.createElement('label');
                            this.lablePhone.textContent = "Số điện thoại";
                        this.inputPhone = this.createElement('input', 'phone');
                            this.inputPhone.type = 'text';
                            this.inputPhone.name = 'phone';
                            this.inputPhone.textContent = 'Số điện thoại';
                            this.inputPhone.id = 'phone';
                        this.pThree.append(this.lablePhone, this.inputPhone);
                    this.pFour = this.createElement('p');
                        this.lableEmail = this.createElement('label');
                            this.lableEmail.textContent = "Email"
                        this.inputEmail = this.createElement('input', 'email');
                            this.inputEmail.type = 'email';
                            this.inputEmail.name = 'email';
                            this.inputEmail.textContent = 'Email';
                            this.inputEmail.id = 'email';
                        this.pFour.append(this.lableEmail, this.inputEmail);
                    this.pFive = this.createElement('p');
                        this.buttonOke = this.createElement('button', 'oke');
                            this.buttonOke.textContent = "Oke";
                            this.buttonOke.id = 'Oke';
                        this.buttonCancel = this.createElement('button', 'cancel');
                            this.buttonCancel.textContent = "Cancel";
                            this.buttonCancel.id = 'Cancel';
                        
                        this.pFive.append(this.buttonOke, this.buttonCancel);
                    
                    this.form.append(this.inputId, this.pOne, this.pTwo, this.pThree, this.pFour, this.pFive); 
                
                this.formUser.append(this.form);
            this.addUser.append(this.formUser);
        this.divMyTable = this.createElement('div', 'table');
            this.divMyTable.id = 'table';
            this.tableMytable = this.createElement('table', 'myTable');
                this.tableMytable.id = 'myTable';

        this.divMyTable.append(this.tableMytable);

        this.main.append(this.top, this.addUser, this.divMyTable);
    }

    createElement(tag, className) {
        const element = document.createElement(tag)
        if (className) element.classList.add(className)
        return element
    }

    getElement(selector) {
        const element = document.querySelector(selector)
        return element
    }

    displayCurrentForm(user){
        this.formUser.style.display = "block";
        this.inputName.value = user.name;
        this.inputAddress.value = user.address;
        this.inputPhone.value = user.phone;
        this.inputEmail.value = user.email;
        console.log(typeof user.name);
    }

    displayUserTable(users) {
        console.log(users);
        while (this.tableMytable.firstChild) {
            this.tableMytable.removeChild(this.tableMytable.firstChild)
        }
        this.trOne = this.createElement('tr');
        this.trOne.id = "th";
        this.thTwo = this.createElement('th');
            this.thTwo.textContent = 'Tên';
            this.thThree = this.createElement('th');
                this.thThree.textContent = 'Địa chỉ';
            this.thFour = this.createElement('th');
                this.thFour.textContent = 'Điện thoại';
            this.thFive = this.createElement('th');
                this.thFive.textContent = 'Email';
            this.thSix = this.createElement('th');
                this.thSix.textContent = 'Action';
            this.trOne.append(this.thTwo, this.thThree, this.thFour, this.thFive, this.thSix);
        this.tableMytable.append(this.trOne);
        
        users.map( (user, index) => {
            const tr = this.createElement('tr')
            tr.id = `${user.name}-${user.address}`;
            for (const key in user) {
                if(key == 'id') break;
                let td = this.createElement('td');
                td.textContent = user[key];
                tr.append(td);
            }
            let td = this.createElement('td');
            let btnEdit = this.createElement('button', `edit`);
            btnEdit.id = 'edit';
            btnEdit.textContent = 'Edit';
            let btnDelete = this.createElement('button', `delete`);
            btnDelete.id = 'delete';
            btnDelete.textContent = 'Delete';
            td.textContent = user[index];
            td.append(btnEdit, btnDelete);
            tr.append(td)
            this.tableMytable.append(tr);
          })
    }
}