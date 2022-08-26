// 95ab56f9291740489bd595a443ec6b92
//initialise the news api containers
let source = 'bbc-news';
let apiKey = '95ab56f9291740489bd595a443ec6b92'
//grab the news container
let newsAccordion = document.getElementById('newsAccordionn')
//create a get request
const xhr = new XMLHttpRequest()
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true)

xhr.onload = function(){
    if(this.status=== 200){
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        // console.log(json);
        console.log(articles);
        let newsHtml2 ="";
        
        articles.forEach(function(element,index) {
        
            let news1 =`<div class="card">
                            <div class="card-header" id="heading${index}">
                            <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                aria-expanded="true" aria-controls="collapse${index}">
                               <b> Breaking News ${index}</b> ${element["title"]}
                                </button>
                            </h2>
                            </div>
                            
                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordionn">
                            <div class="card-body">
                                ${element.content}.<a href= "${element['url']}" target ="_blank"> Read more here </a> 
                            </div>
                            </div>
                            </div>`
            newsHtml2 += news1;
        })
        newsAccordion.innerHTML = newsHtml2;
    }
    
    else{
        console.log('Some error occured');
    }
}

xhr.send()


