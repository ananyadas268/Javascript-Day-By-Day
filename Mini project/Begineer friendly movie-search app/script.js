const button=document.getElementById('searchBtn');
const input=document.getElementById('movieInput');
const container=document.getElementById('movieContainer');
button.addEventListener('click',async()=>{
    if(input.value.trim()==="")
    {
        console.log("Enter movie name")
    }
    else{
        const api_key="your_api_key";
        const movie_name=input.value;
        const response=await fetch(`https://www.omdbapi.com/?s=${movie_name}&apikey=${api_key}`);
        const data=await response.json();
        container.innerHTML = "";
        data.Search.forEach(item => {
            console.log(item);
            //container.innerText=item.Title;
            const card=document.createElement('li');
            const title=document.createElement('h2');
            const year=document.createElement('h2');
            const img=document.createElement('img');

            title.innerText=item.Title;
            year.innerText=item.Year;
            img.src= item.Poster
            card.appendChild(title);
            card.appendChild(year);
            card.appendChild(img);
            container.appendChild(card);
        });
        
        
    }

    })
