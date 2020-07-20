class restaurant{
    constructor(name,address,city){
        this.name = name;
        this.address = address;
        this.city = city;
    }
}
class restaurantManager{
    constructor(resobjarr){
        this.restaurantList = resobjarr;
    }
    printAllRestaurantName(){
        for(var i=0;i<this.restaurantList.length;i++){
            console.log(this.restaurantList[i].name);
        }
    }
    filterRestaurantByCity(cityname){
        for(var i=0;i<this.restaurantList.length;i++){
            if(this.restaurantList[i].city==cityname){
                console.log("name:"+this.restaurantList[i].name+" address:"+this.restaurantList[i].address+" city:"+this.restaurantList[i].city);
            }
        }
    }
}
var res1 = new restaurant("the Black Pearl","koramanga","Banglore");
var res2 = new restaurant("Brahma's","Ramesh Nagar","Delhi");
var res3 = new restaurant("nagarjuna","brigade road","banglore");
var arr = [res1,res2,res3];
var obj = new restaurantManager(arr);
//obj.printAllRestaurantName();
obj.filterRestaurantByCity("banglore");