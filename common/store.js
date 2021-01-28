import {observable,action} from "mobx";

class Store {

    @observable storedFetchData = {} ;

    @observable storedWishMoney = '0';
    @observable storedWishYear = '0';

    @action
    setData(stored_fetch_data){
        console.log(stored_fetch_data);
        this.storedFetchData = storedFetchData;
    }


    @action
    setWishMoney(wishMoney){
        this.storedWishMoney = wishMoney;
    }

    @action
    setWishYear(wishYear){
        this.storedWishYear = wishYear;
    }


}

export default (new Store);