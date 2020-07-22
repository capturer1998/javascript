class User {
    constructor(name, age,email) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.luCoins = 0;
      this.courses = [];
    }

    static greet(){
        console.log("Hey!");
    }

    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }
    
    getDetails(){
        console.log(`Name is ${this.name}, email is ${this.email} , lucoins are ${this.luCoins} , Courses = ${this.courses}`);
        return this;
    }

}

class Moderator extends User{
    constructor(name,age,email,role){
        super(name,age,email);
        this.role = role;
    }

    deleteUser(user){
        users = users.filter(u =>{
            return u.email != user.email; 
        })
    }
    addCoins(user){
        user.luCoins++;
        console.log(`${user.name} has ${user.luCoins} coins`);
        return this;
    }
    removeCoins(user){
        if(user.luCoins>0){
        user.luCoins--;
        console.log(`${user.name}  lucoins as decremented and he has ${user.luCoins} coins left`);}
        else{
            console.log(`${user.name} has 0 lucoins.`);
        }
        return this;
    }

}

class Admin extends Moderator{
   addCourse(user,course){
       user.courses.push(course);
       console.log(user);
   }
   removeCourse(user,course){
    let index=user.courses.indexOf(course);
    user.courses.splice(index,1);
    console.log(`${user.name}, ${course} course is removed.`);
    console.log(user);
}
}

let userXyz = new User('Xyz',20,'xyz@gmail.com')
let userAbc = new User('Abc',22,'abc@gmai.com')
let modAnjali = new Moderator('Anjali',17,'a@gmail.com','Moderator');
let adminVinaya = new Admin('Vinaya',11,'v@gmail.com');
let users = [userXyz,userAbc,modAnjali,adminVinaya];

userXyz.login();
User.greet();

modAnjali.addCoins(userXyz);
modAnjali.addCoins(userXyz);
adminVinaya.addCourse(userXyz,"Python")
adminVinaya.addCourse(userXyz,"JavaScript")
adminVinaya.addCourse(userXyz,"R-Programming")
modAnjali.removeCoins(userXyz);
adminVinaya.removeCourse(userXyz,"JavaScript");

userXyz.getDetails();
userXyz.logout();

userAbc.login();
User.greet();

modAnjali.addCoins(userAbc);
modAnjali.addCoins(userAbc);
modAnjali.addCoins(userAbc);
adminVinaya.addCourse(userAbc,"C")
adminVinaya.addCourse(userAbc,"C++")
adminVinaya.addCourse(userAbc,"R-Programming")
adminVinaya.addCourse(userAbc,"Python")
modAnjali.removeCoins(userAbc);
adminVinaya.removeCourse(userAbc,"Python");

userAbc.getDetails();
userAbc.logout();
modAnjali.deleteUser(userAbc);

