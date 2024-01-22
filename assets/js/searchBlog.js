const blog = 
[
    {
        id: 0,
        image: 'assets/images/laptop/macbookpro2021.webp',
        title: 'Compare Macbook Pro 2022 vs Macbook Air 2023',
        date: 'Dec 22, 2023 | 2 Comments',
        topic: 'in Laptop',
        link: '#'
    },

    {
        id: 1,
        image: 'assets/images/samsung/samsungfold5post.webp',
        title: 'What new Samsung Galaxy Z Fold 5 ?',
        date: 'Nov 21, 2023 | 12 Comments',
        topic: 'in Smartphone',
        link: '#'
    },

    {
        id: 2,
        image: 'assets/images/samsung/71xbuszbeal.webp',
        title: 'What new in Samsung Galaxy Z Fold 5 2023',
        date: 'Dec 21, 2023 | 24 Comments',
        topic: 'in Trending',
        link: '#'
    },

    {
        id: 3,
        image: 'assets/images/samsung/s23-ultra-xanh.webp',
        title: 'Is it worthwhile to experience the S23 Ultra ?',
        date: 'Dec 22, 2023 | 3 Comments',
        topic: 'in Smartphone',
        link: '#'
    },

    {
        id: 4,
        image: 'assets/images/laptop/macbookpro2021.webp',
        title: 'Compare Macbook Pro 2022 vs Macbook Air 2023',
        date: 'Dec 22, 2023 | 2 Comments',
        topic: 'in Laptop',
        link: '#'
    },

    {
        id: 5,
        image: 'assets/images/laptop/macbookpro2021.webp',
        title: 'Compare Macbook Pro 2022 vs Macbook Air 2023',
        date: 'Dec 22, 2023 | 2 Comments',
        topic: 'in Laptop',
        link: '#'
    },

    {
        id: 6,
        image: 'assets/images/laptop/macbookpro2021.webp',
        title: 'Compare Macbook Pro 2022 vs Macbook Air 2023',
        date: 'Dec 22, 2023 | 2 Comments',
        topic: 'in Laptop',
        link: '#'
    },

    {
        id: 7,
        image: 'assets/images/laptop/macbookpro2021.webp',
        title: 'Compare Macbook Pro 2022 vs Macbook Air 2023',
        date: 'Dec 22, 2023 | 2 Comments',
        topic: 'in Laptop',
        link: '#'
    },

    {
        id: 8,
        image: 'assets/images/laptop/macbookpro2021.webp',
        title: 'Compare Macbook Pro 2022 vs Macbook Air 2023',
        date: 'Dec 22, 2023 | 2 Comments',
        topic: 'in Laptop',
        link: '#'
    },

    {
        id: 9,
        image: 'assets/images/laptop/macbookpro2021.webp',
        title: 'Compare Macbook Pro 2022 vs Macbook Air 2023',
        date: 'Dec 22, 2023 | 2 Comments',
        topic: 'in Laptop',
        link: '#'
    },

    {
        id: 10,
        image: 'assets/images/laptop/macbookpro2021.webp',
        title: 'Compare Macbook Pro 2022 vs Macbook Air 2023',
        date: 'Dec 22, 2023 | 2 Comments',
        topic: 'in Laptop',
        link: '#'
    },

    {
        id: 11,
        image: 'assets/images/laptop/macbookpro2021.webp',
        title: 'Compare Macbook Pro 2022 vs Macbook Air 2023',
        date: 'Dec 22, 2023 | 2 Comments',
        topic: 'in Laptop',
        link: '#'
    },

    {
        id: 12,
        image: 'assets/images/laptop/macbookpro2021.webp',
        title: 'Compare Macbook Pro 2022 vs Macbook Air 2023',
        date: 'Dec 22, 2023 | 2 Comments',
        topic: 'in Laptop',
        link: '#'
    },

    {
        id: 13,
        image: 'assets/images/laptop/macbookpro2021.webp',
        title: 'Compare Macbook Pro 2022 vs Macbook Air 2023',
        date: 'Dec 22, 2023 | 2 Comments',
        topic: 'in Laptop',
        link: '#'
    },

    {
        id: 14,
        image: 'assets/images/laptop/macbookpro2021.webp',
        title: 'Compare Macbook Pro 2022 vs Macbook Air 2023',
        date: 'Dec 22, 2023 | 2 Comments',
        topic: 'in Laptop',
        link: '#'
    },

    {
        id: 15,
        image: 'assets/images/laptop/macbookpro2021.webp',
        title: 'Compare Macbook Pro 2022 vs Macbook Air 2023',
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
        var {image, title, date, topic, link} = item;
        return(
            `
                <div class="entry-item lifestyle shopping col-sm-6 col-lg-4">
                    <article class="entry entry-mask">
                        <figure class="entry-media">
                            <a href="#">
                                <img src=${image} alt="image desc">
                            </a>
                        </figure>

                        <div class="entry-body">
                            <div class="entry-meta">
                                <a href="#">
                                    ${date}
                                </a>
                            </div><!-- End .entry-meta -->

                            <h2 class="entry-title">
                                <a href="#">${title}</a>
                            </h2>

                            <div class="entry-cats">
                                <a href="#">${topic}</a>
                            </div>
                        </div>
                    </article>
                </div>
            `
        )

    }).join('')
};

displayItem(blog);