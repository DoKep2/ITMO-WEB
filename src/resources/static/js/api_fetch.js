class Review {
    constructor(postId, id, name, email, body) {
        this.postId = postId;
        this.id = id;
        this.name = name;
        this.email = email;
        this.body = body;
    }
}

let url = "https://jsonplaceholder.typicode.com/comments/"

const fetchData = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`);
    return await res.json();
}

const getReviews = async (id) => {
    // reviewsHeader.insertAdjacentElement('beforeend', preloaderRender());
    await new Promise(r => setTimeout(r, 10000));
    const reviews = await Promise.all(
        await fetchData(id)
            .catch(function () {
                alert("Oops, something went wrong :(")
            })
            .then(data => [data].map(async (data) => {
                return new Review(
                    data.postId,
                    data.id,
                    data.name,
                    data.email,
                    data.body
                )
            }))
            .catch((e) => console.log(e)));
    let body = document.getElementById('reviewsBody')
    for (let i = 0; i < reviews.length; i++) {
        body.insertAdjacentElement("beforeend", reviewRender(reviews[i]));
    }
    const preloader = document.querySelector('.preloader');
    preloader.remove();
}

function preloaderRender() {
    let preloader = document.createElement('div');
    preloader.className = 'preloader'
    preloader.innerHTML =
        `
        <img width="100px" height="100px" id ='preloader' src="https://user-images.githubusercontent.com/86494191/173123124-313f55cc-640d-43f3-bac3-9ac57bfdfa28.gif" alt="">
        <h3>Loading...</h3>
    `
    return preloader;
}

function tableRender() {
    let table = document.createElement('table');
    table.innerHTML =
        `
        <thead>
            <tr>
                <th data-type="text-short">Post ID<span class="resize-handle"></span></th>
                <th data-type="text-short">ID<span class="resize-handle"></span></th>
                <th data-type="text-short">Name<span class="resize-handle"></span></th>
                <th data-type="text-short">Email<span class="resize-handle"></span></th>
                <th data-type="text-short">Review<span class="resize-handle"></span></th>
            </tr>
        </thead>
        <tbody id="reviewsBody">
        
        </tbody>
        `
    table.id = "reviewsTable";
    return table;
}

function reviewRender(review) {
    let reviewElement = document.createElement("tr");
    reviewElement.innerHTML = reviewHtml(review);
    return reviewElement
}

function reviewHtml(review) {
    return `
        <td data-type="text-short">${review.postId}<span class="resize-handle"></span></td>
        <td data-type="text-short">${review.id}<span class="resize-handle"></span></td>
        <td data-type="text-short">${review.email}<span class="resize-handle"></span></td>
        <td data-type="text-short">${review.name}<span class="resize-handle"></span></td>
        <td data-type="text-short">${review.body}<span class="resize-handle"></span></td>
    `
}


let el = document.getElementById("reviews");
el.insertAdjacentElement('afterend', preloaderRender());
el.parentNode.insertBefore(tableRender(), el.nextSibling);

for (let i = 1; i < 4; i++) {
    getReviews(i);
}



