const coding=["js","python","java","c++"];

// for each loop

//coding.forEach(function (item){
//   console.log(item);
//})

coding.forEach((item)=>{
    //console.log(item);
})
coding.forEach((item,index,arr)=>{
    //console.log(item,index,arr);
})
const myCoding=[
    {
        LanguageName: "javascript",
        languagefileName:"js"
    },
    {
        LanguageName: "java",
        languagefileName:"java"
    },
    {
        LanguageName: "python",
        languagefileName:"py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.LanguageName,item.languagefileName);
})