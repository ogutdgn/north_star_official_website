import { blogs_data } from "./blogs_data.js";

document.addEventListener('DOMContentLoaded', function() {
    displayBlogs();
    setupSearch();
    const params = new URLSearchParams(window.location.search);
    const blogId = params.get('id'); // URL'den blog ID'sini al
    displaySingleBlog(blogId);
});

const blogsPerPage = 9;
let currentPage = 1;

function displayBlogs(page = 1, blogsToUse = blogs_data) {
    const startIndex = (page - 1) * blogsPerPage;
    const endIndex = page * blogsPerPage;
    const blogsToDisplay = blogsToUse.slice(startIndex, endIndex);

    const blogsContainer = document.querySelector('.row.row-cols-1.row-cols-md-3.row-cols-lg-3.row-cols-sm-1');
    blogsContainer.innerHTML = '';

    blogsToDisplay.forEach(blog => {
        const colDiv = document.createElement('div');
        colDiv.className = 'col mb-5';
        colDiv.innerHTML = `
            <div class="blog-wrap-modern">
                <div class="img">
                    <a href="blog-single.html?id=${blog.id}"><img src="assets/images/blog/blog_img.jpg" alt=""></a>
                </div>
                <div class="content">
                    <h3 class="title">
                        <a href="blog-single.html?id=${blog.id}">${blog.title}</a>
                    </h3>
                    <div class="description">
                        <p>${blog.shortDescription}</p>
                    </div>
                    <div class="bottom-content">
                        <div class="date">${blog.date}</div>
                    </div>
                </div>
            </div>
        `;
        blogsContainer.appendChild(colDiv);
    });

    updatePagination(blogsToUse.length, page);
}

function updatePagination(totalBlogs, activePage) {
    const totalPages = Math.ceil(totalBlogs / blogsPerPage);
    const paginationContainer = document.querySelector('.theme-pagination nav .pagination');
    paginationContainer.innerHTML = '';

    createPageItem('«', activePage > 1, activePage - 1, paginationContainer);

    for (let i = 1; i <= totalPages; i++) {
        createPageItem(i, true, i, paginationContainer, i === activePage);
    }

    createPageItem('»', activePage < totalPages, activePage + 1, paginationContainer);
}

function createPageItem(text, clickable, page, container, isActive = false) {
    const pageItem = document.createElement('li');
    pageItem.className = `page-item ${!clickable ? 'disabled' : ''} ${isActive ? 'active' : ''}`;
    pageItem.innerHTML = `<a class="page-link" href="#">${text}</a>`;
    if (clickable) {
        pageItem.querySelector('a').addEventListener('click', (e) => {
            e.preventDefault();
            currentPage = page;
            displayBlogs(page);
        });
    }
    container.appendChild(pageItem);
}

function setupSearch() {
    const searchInput = document.querySelector('.sidebar-search input[type="text"]');
    const clearButton = document.querySelector('.sidebar-search button');

    // Anlık arama için 'input' olay dinleyicisi
    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();
        if (searchTerm) {
            const filteredBlogs = blogs_data.filter(blog => blog.title.toLowerCase().includes(searchTerm));
            displayBlogs(1, filteredBlogs);
            currentPage = 1;
        } else {
            displayBlogs(); // Arama çubuğu boşsa tüm blogları tekrar listele
        }
    });

    // "X" butonuna tıklanınca işlevsellik
    clearButton.addEventListener('click', function(e) {
        e.preventDefault();
        searchInput.value = ''; // Arama çubuğunu temizle
        displayBlogs(); // Tüm blogları tekrar listele
        currentPage = 1;
    });
}