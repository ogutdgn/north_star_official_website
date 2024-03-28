import { blogs_data } from "./blogs_data.js";
  
document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const blogId = params.get('id'); // URL'den blog ID'sini al
    console.log(blogId);
    displaySingleBlog(blogId);
});

function displaySingleBlog(blogId) {
    const blog = blogs_data.find(blog => blog.id === parseInt(blogId)); // ID'ye göre blogu bul

    if (blog) {
        const header_title = document.querySelector(".header-container")
        const current_title = document.createElement("h1")
        const popular_blogs = document.querySelector(".list-unstyled")
        const blogs_div = document.querySelector(".blogs-page-info-div")
        const each_blog = document.createElement("div")
        current_title.innerHTML = `
            <h1>${blog.title}</h1>
        `
        each_blog.innerHTML = `
            <div>
                <div class="blog-wrap-modern single-entry">
                  <div class="img">
                      <img src="assets/images/blog/blog_large_img_1.jpeg" alt="">
                  </div>
                  <div class="content">
                      <h3 class="title">
                          ${blog.title}
                      </h3>
                      <div class="bottom-content">
                          <div class="date">${blog.date}</div>
                      </div>
                  </div>
                </div>

                <div class="entry-text-gap">
                  ${blog.longDescription}
                </div>
            </div>
        `;
        blogs_div.appendChild(each_blog);
        header_title.appendChild(current_title);

        for (let index = 1; index < 6; index++) {
          const popular_each_blog = document.createElement("li")
          const blog_index = blogs_data.find(blog => blog.id === index);

          popular_each_blog.innerHTML = `
            <li>
                <div>
                    <a href="blog-single.html?id=${blog_index.id}" class="title">${blog_index.title}</a>
                    <small>${blog_index.date}</small>
                </div>
            </li>
          `
          popular_blogs.appendChild(popular_each_blog)
        }
        
        // İsteğe bağlı olarak diğer alanları da doldurabilirsiniz.
    } else {
        console.log('Blog bulunamadı!');
    }
}
