let name1 = {
    students :[{
        Name: "Nowfal",
        Dept: "CSC",
        Mobile:1234542,
        email: "qwer.@aasv.com",
        address:{
            street: "umar",
            district: "nagai",
            pincode:65166161
        },mark: [847, 45, 65]
    }, 
    {
        Name: "umar",
        Dept: "CSC",
        Mobile:1234542,
        email: "qwer.@aasv.com",
        address:{
            street: "umar",
            district: "nagai",
            pincode:65166161},mark: [654, 45, 65]}, 
    
            {
                Name: "noor",
            Dept: "CSC",
            Mobile:1234542,
            email: "qwer.@aasv.com",
            address:{
            street: "umar",
            district: "nagai",
            pincode:65166161},mark: [648, 45, 65]}, 
            
            {Name: "faiz",
            Dept: "CSC",
            Mobile:1234542,
            email: "qwer.@aasv.com",
            address:{
                street: "basith",
                district: "nagai",
                pincode:65166161},mark: [6554, 45, 65]},
                
                {Name: "safi",
                Dept: "CSC",
                Mobile:1234542,
                email: "qwer.@aasv.com",
                address:{
                    street: "umar",
                    district: "nagai",
                    pincode:65166161},mark: [3218, 45, 65]}]
    
}
   
for(let i = 0;i< name1.students.length;i++){
console.log(name1.students[i].Name);
console.log(name1.students[i].address);
console.log(name1.students[i].mark)
console.log(name1["students"][i].mark[0]+name1["students"][i].mark[1]+name1["students"][i].mark[2])
}
// JSON.stringify(name1)
// console.log(name1)