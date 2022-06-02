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
   

// For
// for(let i = 0;i< name1.students.length;i++){
// console.log(name1.students[i].Name);
// console.log(name1.students[i].address);
// console.log(name1.students[i].mark)
// console.log(name1["students"][i].mark[0]+name1["students"][i].mark[1]+name1["students"][i].mark[2])
// }

// //Foreach
// name1.students.forEach(element => {
//     console.log(element.Name)
//     console.log(element.address)
//     console.log(element.mark)
//     console.log(Number(element.mark[0])+Number(element.mark[1])+Number(element.mark[2]))
// });

//For IN

// for(let i in name1.students){
//     console.log(name1.students[i].Name);
//     console.log(name1.students[i].address);
//     console.log(name1.students[i].mark)
//     console.log(name1["students"][i].mark[0]+name1["students"][i].mark[1]+name1["students"][i].mark[2])
// }

//For of

for (let i of name1.students){

    console.log(i.Name);
    console.log(i.address);
    console.log(i.mark)
    console.log(i.mark[0]+i.mark[1]+i.mark[2])

}