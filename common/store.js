import {observable,action} from "mobx";

class Store {

    @observable storedFetchData = {} ;

    @observable storedWishMoney = '0';
    @observable storedWishYear = '0';

    @observable storedFlag;

    @action
    setData(storedFetchData){
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

    @action
    setFlag(storedFlag){
        this.storedFlag = storedFlag;
    }


}
export default (new Store);