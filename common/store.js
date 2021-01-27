import {observable,action} from "mobx";

class Store {
    @observable store_hello = 'asdf';
    @observable storedWishMoney = '0';

    @action
    setWishMoney(wishMoney){
        this.storedWishMoney = wishMoney;
    }
}

export default (new Store);