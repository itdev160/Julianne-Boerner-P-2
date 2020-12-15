$(function() {
    var data= [
        {
            id: 1,
            title: 'Blinds',
            body: 'Blinds feature vanes or slats that rotate the light either horizontally or vertical.  They are a great choice for rooms with changing light. They are usually made from wood, faux wood, metal, vinal, or fabric materials.',
            url: "https://www.blinds.com/SqlImages/3159cf8f-ef86-e511-9465-0a986990730e.jpg?quality=90&format=jpg&scale=both&width=680&height=535&mode=crop"                  
        },
        {
            id: 2,
            title: 'Shades',
            body: 'Shades are made from a softer fabric or similar material offering several degrees of light control.  The come in a range of opacities allowing more or less light in.  Soft light to diffuse a room or Black Out to block out all sunlight.  Shades are available in a number of lift options and offer full view when raised.  Lift options can include corded, cordless, and motorization.  Some shades such as cellular are great for insulation and temperature control.',
            url: "https://www.blinds.com/SqlImages/fea2a4b0-16ab-ea11-9480-0a986990730e.jpg?quality=90&format=jpg&scale=both&width=680&height=535&mode=crop"
        },
        {
            id: 3,
            title: 'Shutters',
            body: 'Shutters are the cream of the crop and enhance the aesthetics of any room.  The are available in a variety of louver sizes, colors and frame styles.  They add value to your home.  The are hard window treatments.  The are cordless and cover the entire frame and look good inside and out.  Available in wood or faux wood.  Sometimes you can get a wood or faux wood blind with a wider slat that will have the look of shutters without the cost.',
            url: "https://www.blinds.com/SqlImages/f0b6ea79-e15a-e511-9465-0a986990730e.jpg?quality=90&format=jpg&scale=both&width=680&height=535&mode=crop"
        },
        {
            id: 4,
            title: 'Custom Drapery',
            body: 'Custom Drapery comes in a wide array of styles featuring custom fabric, valances and cornices from simple to ornate. Valances and Cornices give window treatments a beautiful clean finished look. They are more expensive then Ready Made which are usually drapery panels or valances that are made to standard widths and lengths.  You pay more for custom drapery because it is specifically made for you and your window size, and is unique to you.',
            url: "https://www.blinds.com/SqlImages/b8fca685-b358-e511-9465-0a986990730e.jpg?quality=90&format=jpg&scale=both&width=680&height=535&mode=crop"
        },
    ];
    var $nav = $('#nav-container');
    var $intro = $('#intro');
    var $posts = $('#post-container');

    function initPosts() {
        for (let i = 0; i<data.length; i++) {
            // Create elements
            var postId = 'post-' + data[i].id,
            $post = $('<section class="post"></section'),
            $title = $('<h2 class="title"></h2>'),
            $body = $('<blockquote></blockquote>'),
            $picture = $('<img class="picture">'),
            $navItem = $('<li></li>');

            // Add post data
            $title.text(data[i].title);
            $body.text(data[i].body);
            $picture.attr('src',data[i].url);

            //Add nav item data
            $navItem.attr('id', data[i].id);
            $navItem.text(data[i].title);

            // Combine post elements
            $post.attr('id', postId);
            $post.append($title);
            $post.append($body);
            $post.append($picture);

            //Add post and nav elements to page
            $posts.append($post);
            $nav.append($navItem);

            //Wire up nav item click event handler
            $navItem.on('click', function() {
                var id = $(this).attr('id');
                $posts.children().hide();
                $posts.find('#post-' + id).fadeIn();
            });

            // Hide all posts and show the intro
            $posts.children('.post').hide();
            $intro.fadeIn(1000);
        }
    }

    initPosts();

});

    