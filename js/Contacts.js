class Contacts {

    get fullName() {return this._fullName;}
    set fullName(fullName) {
        let fullNamePattern = RegExp('^([a-zA-Z0-9]+|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{1,}|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{3,}\s{1}[a-zA-Z0-9]{1,})$');
        if (fullNamePattern.test(fullName)) {
            this._fullName = fullName;
        }
        else
            throw 'Invalid Full Name';
    }

    get phonenumber() {return this._phonenumber;}
    set phonenumber(phonenumber) {
        let phonenumberPattern = RegExp('^((\\+)?(\\d{2}[-]))?(\\d{10}){1}?$');
        if (phonenumberPattern.test(phonenumber)) {
            this._phonenumber = phonenumber;
        }
        else
            throw 'Invalid Phone Number';
    }

    get address() { return this._address; }
    set address(address) {
        let words = address.split(" ");
        let addressPattern = RegExp('([A-Z a-z 0-9]{3,})+');
        for (const word of words) {
            if (!addressPattern.test(word))
                throw 'Invalid Address';
        }
        this._address = address;
    }

    get city() {return this._city;}
    set city(city) {this._city = city;}

    get state() {return this._state;}
    set state(state) {this._state = state;}

    get zip() {return this._zip;}
    set zip(zip) {this._zip = zip;}

    
    toString() {
        return '[ FullName : ' + this.fullName + ' Address : '+ this.address + ' City : ' + this.city + ' State : ' + this.state + ' Zip : ' + this.zip +' Phone Number : ' + this.phoneNumber + ' ]';
    }
}