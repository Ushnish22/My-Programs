class user{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
    }
    countUsers()
    {
        console.log('There are 50 users');
    }
    register(){
        console.log(this.username+" "+'is now registered');
    }
}
class member extends user{
    constructor(username,email,password,memberpackage){
        super(username,email,password);
        this.package=memberpackage;
        let todaysdate=new Date();
        const membershipActiveTillYear=todaysdate.getFullYear();
        const membershipActiveTillMonth=todaysdate.getMonth();
        const membershipActiveTillDay=todaysdate.getDay();
        this.membershipActiveDate=new Date(
            membershipActiveTillYear,
            membershipActiveTillMonth+1,
            membershipActiveTillDay,
        )
    }
    renewMembership(){
        const membershipActiveTillYear=this.membershipActiveTillYear.getFullYear();
        const membershipActiveTillMonth=this.membershipActiveTillMonth.getMonth();
        const membershipActiveTillDay=this.membershipActiveTillDay.getDay();
        if(this.package==='Standard')
        {
            this.membershipNewDate=new Date(
            membershipActiveTillYear,
            membershipActiveTillMonth+1,
            membershipActiveTillDay,)
        }
        else if(this.package==='Yearly')
        {
            this.membershipNewDate=new Date(
            membershipActiveTillYear+1,
            membershipActiveTillMonth,
            membershipActiveTillDay,)
        }
               
    }
    validtill(){
        console.log(this.username+' is subscribed to '+this.memberpackage+' and is valid till '+'this.membershipNewDate');
    }
    getSubscribed(){
        console.log(this.username+" "+'is subscribed to '+this.package+' package');
    }
}
    let member1=new member('Ushnish','abc@gmail.com','12345','Yearly');
    member1.getSubscribed();
    member1.renewMembership();
    member1.validtill();
    