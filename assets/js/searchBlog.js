const blog = 
[
    {
        id: 0,
        image: 'assets/images/laptop/macbookpro2021.webp',
        title: 'Compare Macbook Pro 2022 vs Macbook Pro 2023',
        date: 'Dec 22, 2023 | 2 Comments',
        topic: 'in Laptop',
        content:'lifestyle shopping',
        link: 'single-blog.html'
    },

    {
        id: 1,
        image: 'assets/images/samsung/samsungfold5post.webp',
        title: 'What new Samsung Galaxy Z Fold 5 ?',
        date: 'Nov 21, 2023 | 12 Comments',
        topic: 'in Smartphone',
        content: 'life style',
        link: 'single-blog.html'
    },

    {
        id: 2,
        image: 'assets/images/samsung/71xbuszbeal.webp',
        title: 'What new in Samsung Galaxy Z Fold 5 2023',
        date: 'Jan 21, 2023 | 24 Comments',
        topic: 'in Trending',
        content:'lifestyle fashion',
        link: 'single-blog.html'
    },

    {
        id: 3,
        image: 'assets/images/samsung/s23-ultra-xanh.webp',
        title: 'Is it worthwhile to experience the S23 Ultra ?',
        date: 'Oct 12, 2023 | 34 Comments',
        topic: 'in Smartphone',
        content:'travel',
        link: 'single-blog.html'
    },

    {
        id: 4,
        image: 'assets/images/smartwatch/apple-watch-ultra-2-49mm-4g_1_.jpg',
        title: 'New features of Apple Watch Ultra 2.',
        date: 'Nov 11, 2023 | 23 Comments',
        topic: 'in Trending',
        content:'travel',
        link: 'single-blog.html'
    },

    {
        id: 5,
        image: 'assets/images/smartwatch/1_568.webp',
        title: 'Samsung Galaxy Watch SE and what I dont like',
        date: 'Nov 21, 2022 | 12 Comments',
        topic: 'in Trending',
        content:'travel',
        link: 'single-blog.html'
    },

    {
        id: 6,
        image: 'assets/images/laptop/dellXPS13_12.jpg',
        title: 'Dell XPS 13 borderless 4K screen, 8th generation Intel Core',
        date: 'Dec 12, 2023 | 232 Comments',
        topic: 'in Laptop',
        content:'lifestyle shopping',
        link: 'single-blog.html'
    },

    {
        id: 7,
        image: 'assets/images/laptop/dellXPS13_11.jpg',
        title: 'Laptop Dell XPS 13 and new features',
        date: 'Apl 22, 2023 | 2 Comments',
        topic: 'in Laptop',
        content:'lifestyle shopping',
        link: 'single-blog.html'
    },

    {
        id: 8,
        image: 'assets/images/iPhone/iPhone15RV1.jpg',
        title: 'iPhone 15 Pro: Key specifications',
        date: 'Dec 22, 2023 | 2 Comments',
        topic: 'in Laptop',
        content:'lifestyle fashion',
        link: 'single-blog.html'
    },

    {
        id: 9,
        image: 'assets/images/iPhone/iPhone15RV2.jpg',
        title: 'Apple iPhone 15 and iPhone 15 Plus',
        date: 'Dec 22, 2023 | 2 Comments',
        topic: 'in Laptop',
        content:'travel',
        link: 'single-blog.html'
    },

    {
        id: 10,
        image: 'assets/images/iPhone/iPhone15RV3.webp',
        title: 'What are the iPhone 15s  best features?',
        date: 'Dec 22, 2023 | 2 Comments',
        topic: 'in Laptop',
        content:'travel',
        link: 'single-blog.html'
    },

    {
        id: 11,
        image: 'assets/images/samsung/samsungzflipRV1.jpg',
        title: 'What is the new with this model ',
        date: 'Dec 22, 2023 | 2 Comments',
        topic: 'in Laptop',
        content:'lifestyle fashion',
        link: 'single-blog.html'
    },

    {
        id: 12,
        image: 'assets/images/samsung/RVs24s22.webp',
        title: 'Samsung Galaxy S24 vs Galaxy S22: Should you upgrade?',
        date: 'Dec 22, 2023 | 2 Comments',
        topic: 'in Smartphone',
        content: 'lifestyle fashion',
        link: 'single-blog.html'
    },

    {
        id: 13,
        image: 'assets/images/samsung/applewatchultraRV.webp',
        title: 'Apple Watch Ultra 2 vs. Watch Ultra: Is it time to upgrade?',
        date: 'Dec 22, 2023 | 2 Comments',
        topic: 'in Smartwatch',
        content: 'travel',
        link: '#'
    },

    {
        id: 14,
        image: 'assets/images/laptop/Macbook2021RV.jpg.webp',
        title: 'What are the best features of MacBook Pro (M3 Max)?',
        date: 'Dec 22, 2023 | 2 Comments',
        topic: 'in Laptop',
        link: '#'
    },
]

const searchBlog = [...new Set(blog.map((item)=> {return item}))]

document.getElementById('q').addEventListener('keyup', (e)=> {
    const searchDataBlog = e.target.value.toLowerCase();
    const filterBlog = searchBlog.filter((item)=> {
        return item.title.toLowerCase().includes(searchDataBlog)
    })
    displayItem(filterBlog)
});

const displayItem = (item)=> {
    document.getElementById('rootBlog').innerHTML = item.map((item)=> {
        var {image, title, date, topic, link, content} = item;
        return(
            `
                <div class="entry-item ${content} col-sm-6 col-lg-4">
                    <article class="entry entry-mask">
                        <figure class="entry-media">
                            <a href=${link}>
                                <img src=${image} alt="image desc">
                            </a>
                        </figure>

                        <div class="entry-body">
                            <div class="entry-meta">
                                <a href=${link}>
                                    ${date}
                                </a>
                            </div>

                            <h2 class="entry-title">
                                <a href=${link}>${title}</a>
                            </h2>

                            <div class="entry-cats">
                                <a href=${link}>${topic}</a>
                            </div>
                        </div>
                    </article>
                </div>
            `
        )

    }).join('')
};

displayItem(blog);