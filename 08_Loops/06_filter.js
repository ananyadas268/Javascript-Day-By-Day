//filter
//Keeps only elements that satisfy condition.
//1.Check condition →
//2.keep matching items →
//3.remove others
const nums=[1,2,3,4,5,6,7,8,9,10];
//const ans=nums.filter((num)=>num>2);
//console.log(ans);

const  evenNumber=nums.filter((item)=> {
    return item%2===0;
    }
);
//console.log(evenNumber)

//using foreach
nums.forEach((item)=>{
    if(item%2===0)
    console.log(item);
})

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  //let search for genre 'History
const historyBooks=books.filter((item)=>{
    if(item.genre==="History")
    return item;
})
//console.log(historyBooks);
books.forEach((item)=>{
    if(item.publish>=1995 && item.genre==="History")
        console.log(item);
})