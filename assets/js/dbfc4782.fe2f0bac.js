"use strict";(self.webpackChunkblueskysdk=self.webpackChunkblueskysdk||[]).push([[749],{1895:e=>{e.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"discovering-posts-on-bluesky-with-searchposts-api-using-bluesky-sdk","metadata":{"permalink":"/blog/discovering-posts-on-bluesky-with-searchposts-api-using-bluesky-sdk","editUrl":"https://github.com/shahmal1yev/blueskysdkdocs/tree/main/blog/2024-12-11-how-to-search-posts-by-filters-using-bluesky-sdk/index.md","source":"@site/blog/2024-12-11-how-to-search-posts-by-filters-using-bluesky-sdk/index.md","title":"Discovering Posts on Bluesky with SearchPosts API Using BlueSky SDK","description":"Discover how to use the SearchPosts API in the BlueSky PHP SDK to search and filter Bluesky posts by  hashtags, URLs, languages, and more with ease and precision.","date":"2024-12-11T00:00:00.000Z","tags":[],"readingTime":3.835,"hasTruncateMarker":true,"authors":[{"name":"Eldar Shahmaliyev","title":"Maintainer of BlueSky SDK","url":"https://shahmal1yev.dev/about","email":"shahmal1yevv@proton.me","socials":{},"imageURL":"https://github.com/shahmal1yev.png","key":"shahmal1yev","page":null}],"frontMatter":{"title":"Discovering Posts on Bluesky with SearchPosts API Using BlueSky SDK","description":"Discover how to use the SearchPosts API in the BlueSky PHP SDK to search and filter Bluesky posts by  hashtags, URLs, languages, and more with ease and precision.","authors":[{"key":"shahmal1yev"}],"slug":"discovering-posts-on-bluesky-with-searchposts-api-using-bluesky-sdk","image":"./social-card.webp"},"unlisted":false,"nextItem":{"title":"Post Creation with Externals in BlueSky Social Network using BlueSky PHP SDK","permalink":"/blog/creating-posts-on-bluesky-with-externals-using-blueskysdk"}},"content":"Are you ready to tap into Bluesky Social Network\u2019s rich data with unparalleled precision and simplicity? The \\n`SearchPosts` API in the BlueSky PHP SDK is here to elevate your application\u2019s capabilities. From searching for \\nposts by query to filtering by tags, URLs, and languages, the SDK empowers developers to navigate Bluesky\u2019s \\necosystem efficiently. With this powerful tool, you can build robust applications that truly leverage Bluesky\u2019s \\nvast social network. \ud83d\udd0d\ud83d\udca1 Let\u2019s take a journey into unlocking its potential. \ud83d\ude80\\n\\n---\\n\\n\x3c!-- truncate --\x3e\\n\\n### Getting Started with SearchPosts\\n\\nBefore accessing the search API, authentication is a prerequisite. The SDK makes this seamless and straightforward:\\n\\n```php\\nuse Atproto\\\\Client;\\n\\n$client = new Client();\\n$client->authenticate(\'handle\', \'password\'); // Replace with your Bluesky username and password\\n```\\n\\nUpon successful authentication, the SDK generates an access token, enabling interaction with endpoints such as `SearchPosts`. This process ensures secure and reliable communication with the Bluesky network, setting the stage for advanced functionalities.\\n\\nNow, let\u2019s delve into searching posts effectively. \u2705\\n\\n---\\n\\n### Crafting a Search Query\\n\\nTo search posts, specify your query and configure additional parameters as needed. Whether you\u2019re searching for the latest trends or specific content, the process is straightforward:\\n\\n```php\\nuse Atproto\\\\Lexicons\\\\App\\\\Bsky\\\\Feed\\\\SearchPosts;\\n\\n$response = $client->app()->bsky()->feed()->searchPosts()->forge(\'Hello World!\') // \\"query\\" is required and is reflected in all search results \\n    ->limit(5) // Optional: Restrict results to the latest 5 posts\\n    ->sort(SortEnum::get(\'latest\')) // Optional: Sort by \'latest\' or \'top\'\\n    ->send();\\n\\nforeach ($response->posts() as $post) {\\n    echo $post->record()->text() . PHP_EOL;\\n}\\n```\\n\\nThis fetches posts containing the phrase \u201cHello World!\u201d. It\u2019s a great starting point for exploring content on Bluesky.\\n\\n---\\n\\n### Filtering with Tags\\n\\nEnhance specificity by narrowing your search to include posts with specific hashtags. For instance, imagine you\'re running a campaign to promote a product or an event; filtering by relevant tags allows you to track engagement and identify key discussions effectively. This is especially useful for targeting niche topics:\\n\\n```php\\n$response = $client->app()->bsky()->feed()->searchPosts()->forge(\'Example Query\')\\n    ->tag([\'tag1\', \'tag2\'])\\n    ->limit(5)\\n    ->send();\\n\\nforeach ($response->posts() as $post) {\\n    echo $post->record()->text() . PHP_EOL;\\n}\\n```\\n\\nEfficiently find posts that contain `tag1` or `tag2`. \ud83c\udf3f Tags make your searches precise and targeted, saving time and effort.\\n\\n---\\n\\n### Searching by URL\\n\\nTo locate posts referencing a particular URL, the SDK provides an easy method to integrate this filter. This is perfect for finding mentions of specific links:\\n\\n```php\\n$response = $client->app()->bsky()->feed()->searchPosts()->forge(\'Check this out\')\\n    ->url(\'https://example.com\')\\n    ->limit(3)\\n    ->send();\\n\\nforeach ($response->posts() as $post) {\\n    echo $post->record()->text() . PHP_EOL;\\n}\\n```\\n\\nThis limits results to posts mentioning \u201c[https://example.com](https://example.com)\u201d. \ud83c\udf10 Leveraging URLs makes it simple to monitor discussions around your links.\\n\\n---\\n\\n### Filtering by Author\\n\\nSearching posts by a specific author is another powerful feature. This allows you to explore all content created by a particular handle:\\n\\n```php\\n$response = $client->app()->bsky()->feed()->searchPosts()->forge(\'test\')\\n    ->author(\'shahmal1yevv.bsky.social\')\\n    ->limit(3)\\n    ->send();\\n\\nforeach ($response->posts() as $post) {\\n    echo $post->record()->text() . PHP_EOL;\\n}\\n```\\n\\nThis query fetches posts from the user \\"shahmal1yevv.bsky.social,\\" making it easy to track contributions by a specific author. \ud83d\udc64\\n\\n---\\n\\n### Filtering by Language\\n\\nSometimes, language preference is critical when searching posts. The SDK makes it easy to filter results by language:\\n\\n```php\\n$response = $client->app()->bsky()->feed()->searchPosts()->forge(\'Multilingual Content\')\\n    ->lang(\'en\')\\n    ->limit(3)\\n    ->send();\\n\\nforeach ($response->posts() as $post) {\\n    echo $post->record()->text() . PHP_EOL;\\n}\\n```\\n\\nThis fetches only English posts, ensuring language-specific results. \ud83c\udf10\\n\\n---\\n\\n### Combining Multiple Filters\\n\\nWhy stop at one filter? By combining filters, you can achieve granular searches and highly customized results that cater to a wide range of application needs. For developers, this means the ability to refine content discovery for different use cases\u2014whether you\'re building analytics tools, content recommendation engines, or monitoring systems. This approach not only enhances precision but also ensures your applications can adapt to complex user requirements effectively. This approach unlocks the full potential of the API:\\n\\n```php\\n$response = $client->app()->bsky()->feed()->searchPosts()->forge(\'Advanced Search\')\\n    ->tag([\'tag1\', \'tag2\'])\\n    ->url(\'https://example.com\')\\n    ->lang(\'en\') // Filter posts in English\\n    ->limit(10)\\n    ->sort(\'top\')\\n    ->send();\\n\\nforeach ($response->posts() as $post) {\\n    echo $post->record()->text() . PHP_EOL;\\n}\\n```\\n\\nThis query fetches English posts with the specified tags and URL, sorted by popularity. \u2b50 Combining filters allows for a truly tailored search experience, making your applications smarter and more efficient.\\n\\n---\\n\\n### Wrapping It Up\\n\\nThe `SearchPosts` API in the BlueSky PHP SDK offers developers a robust tool for seamless post discovery on Bluesky, enabling precise searches, trend analysis, and enhanced application capabilities. Whether you\u2019re searching for specific content, exploring tags, analyzing trends, or building data-driven applications, this tool offers unparalleled flexibility and power. \ud83c\udf89\\n\\nStart exploring today, and let your application thrive on Bluesky\u2019s vibrant network. If you encounter any issues or have questions, drop by [GitHub](https://github.com/shahmal1yev/blueskysdk) or check out the [official documentation](https://blueskysdk.shahmal1yev.dev).\\n\\nHappy coding! \ud83d\ude80"},{"id":"creating-posts-on-bluesky-with-externals-using-blueskysdk","metadata":{"permalink":"/blog/creating-posts-on-bluesky-with-externals-using-blueskysdk","editUrl":"https://github.com/shahmal1yev/blueskysdkdocs/tree/main/blog/2024-12-08-post-creation-with-externals-bluesky-php-sdk/index.md","source":"@site/blog/2024-12-08-post-creation-with-externals-bluesky-php-sdk/index.md","title":"Post Creation with Externals in BlueSky Social Network using BlueSky PHP SDK","description":"Learn how to create posts using externals in the BlueSky PHP SDK.","date":"2024-12-08T00:00:00.000Z","tags":[],"readingTime":2.46,"hasTruncateMarker":true,"authors":[{"name":"Eldar Shahmaliyev","title":"Maintainer of BlueSky SDK","url":"https://shahmal1yev.dev/about","email":"shahmal1yevv@proton.me","socials":{},"imageURL":"https://github.com/shahmal1yev.png","key":"shahmal1yev","page":null}],"frontMatter":{"title":"Post Creation with Externals in BlueSky Social Network using BlueSky PHP SDK","description":"Learn how to create posts using externals in the BlueSky PHP SDK.","authors":[{"key":"shahmal1yev"}],"slug":"creating-posts-on-bluesky-with-externals-using-blueskysdk","image":"./img.png"},"unlisted":false,"prevItem":{"title":"Discovering Posts on Bluesky with SearchPosts API Using BlueSky SDK","permalink":"/blog/discovering-posts-on-bluesky-with-searchposts-api-using-bluesky-sdk"},"nextItem":{"title":"How to Create and Share Posts on BlueSky Using BlueSky SDK","permalink":"/blog/creating-posts-on-bluesky-with-blueskysdk"}},"content":"Want to create engaging and interactive posts on the Bluesky network? With the BlueSky PHP SDK, it\u2019s effortless. By \\nadding external content (externals) and images, you can enrich your posts and make them more captivating.\\n\\nIn this post, you\'ll learn how to authenticate with the SDK and embed external links, thumbnails, and images into your \\nposts.\\n\\n\\n---\\n\\n\x3c!-- truncate --\x3e\\n\\n## Authentication\\n\\nThe first step to accessing the Bluesky network is authentication. Use the SDK to log in with your username and password:\\n\\n```php title=\\"Authenticate with Your Credentials\\"\\n<?php\\n\\nuse Atproto\\\\Client;\\n\\n$client = new Client();\\n$client->authenticate(\'handle\', \'password\'); // Replace with your Bluesky username and password\\n```\\n\\nOnce authenticated, you\'re ready to start creating posts! \ud83d\ude80\\n\\n---\\n\\n## Adding External Links\\n\\nWant to add external links, titles, descriptions, and even thumbnails to your posts? The SDK makes this simple. For \\ninstance, if you want to link to your personal blog or website, here\'s how you can do it:\\n\\n### Uploading a Thumbnail Image\\n\\nUpload an image to be used as a thumbnail for the external content:\\n\\n![Post image](post-image.png)\\n\\n```php\\n<?php\\n\\n$uploadedBlob = $client->com()->atproto()->repo()->uploadBlob()->forge()\\n    ->token($client->authenticated()->accessJwt())\\n    ->blob(\'path_of_image\') // File path of the image to be uploaded\\n    ->send()\\n    ->blob();\\n```\\n\\nThis uploaded image will serve as the thumbnail for your external content.\\n\\n### Creating the External Content\\n\\nAdd the URI, title, and description for the link, and use the uploaded image as the thumbnail:\\n\\n```php\\n<?php\\n\\n$external = $client->app()->bsky()->embed()->external()->forge(\\n    \'https://shahmal1yev.dev\', // URI\\n    \'Eldar Shahmaliyev\\\\\'s blog\', // Title\\n    \'A personal blog about cybersecurity and development.\' // Description\\n)->thumb($uploadedBlob); // thumbnail\\n```\\n\\n### Creating the Post\\n\\nAdd the prepared external content to your post and make it ready to share:\\n\\n```php\\n<?php\\n\\n$post = $client->app()->bsky()->feed()->post()->forge()\\n    ->text(\'Come to my blog: \')\\n    ->link(\'https://shahmal1yev.dev\', \'click here and read the posts\')\\n    ->embed($external);\\n```\\n\\nWith these steps, you\u2019re all set to add captivating external links to your Bluesky posts.\\n\\n---\\n\\n## Adding Images\\n\\nWant to include one or multiple images in your posts? The SDK allows you to use the `ImageCollection` object for \\nthis purpose.\\n\\n### Creating an Image Collection\\n\\nFirst, upload the image and add it to an `ImageCollection` object:\\n\\n```php\\n<?php\\n\\nuse Atproto\\\\Lexicons\\\\App\\\\Bsky\\\\Embed\\\\Collections\\\\ImageCollection;\\nuse Atproto\\\\Lexicons\\\\App\\\\Bsky\\\\Embed\\\\Image;\\n\\n$uploadedBlob = $client->com()->atproto()->repo()->uploadBlob()->forge()\\n    ->token($client->authenticated()->accessJwt())\\n    ->blob(\'path_of_image\')\\n    ->send()\\n    ->blob();\\n\\n$images = new ImageCollection([\\n    new Image(\\n        $uploadedBlob, // Blob\\n        \'Alt text\' // Image description\\n    )\\n]);\\n```\\n\\n### Adding Images to the Post\\n\\nAttach the image collection to your post and get it ready to share:\\n\\n```php\\n<?php\\n\\n$post = $client->app()->bsky()->feed()->post()->forge()\\n    ->text(\'Check out my gallery: \')\\n    ->embed($images);\\n```\\n\\n---\\n\\n## Sharing the Post\\n\\nThe final step is to share your post on the Bluesky network. \ud83c\udf89\\n\\n```php\\n<?php\\n\\n$createRecord = $client->com()->atproto()->repo()->createRecord()->forge()\\n    ->record($post)\\n    ->repo($client->authenticated()->did())\\n    ->collection($post->nsid());\\n\\n$response = $createRecord->send();\\n\\necho $response->uri();\\n```\\n\\nOnce the process is complete, your post will be live on the Bluesky network!\\n\\n---\\n\\n## Conclusion\\n\\nCreating posts with the BlueSky PHP SDK is straightforward and offers a variety of options. Adding external content \\nand enriching posts with images is a great way to capture your audience\u2019s attention."},{"id":"creating-posts-on-bluesky-with-blueskysdk","metadata":{"permalink":"/blog/creating-posts-on-bluesky-with-blueskysdk","editUrl":"https://github.com/shahmal1yev/blueskysdkdocs/tree/main/blog/2024-12-07-how-to-create-posts-on-bluesky-using-bluesky-sdk/index.md","source":"@site/blog/2024-12-07-how-to-create-posts-on-bluesky-using-bluesky-sdk/index.md","title":"How to Create and Share Posts on BlueSky Using BlueSky SDK","description":"A comprehensive guide on creating and sharing posts on the Bluesky Social Network using the BlueSky PHP SDK, complete with step-by-step instructions and code examples.","date":"2024-12-07T00:00:00.000Z","tags":[],"readingTime":2.55,"hasTruncateMarker":true,"authors":[{"name":"Eldar Shahmaliyev","title":"Maintainer of BlueSky SDK","url":"https://shahmal1yev.dev/about","email":"shahmal1yevv@proton.me","socials":{},"imageURL":"https://github.com/shahmal1yev.png","key":"shahmal1yev","page":null}],"frontMatter":{"authors":[{"key":"shahmal1yev"}],"slug":"creating-posts-on-bluesky-with-blueskysdk","title":"How to Create and Share Posts on BlueSky Using BlueSky SDK","description":"A comprehensive guide on creating and sharing posts on the Bluesky Social Network using the BlueSky PHP SDK, complete with step-by-step instructions and code examples.","image":"./cover.png"},"unlisted":false,"prevItem":{"title":"Post Creation with Externals in BlueSky Social Network using BlueSky PHP SDK","permalink":"/blog/creating-posts-on-bluesky-with-externals-using-blueskysdk"}},"content":"Hey there! \ud83c\udf89 Have you ever wondered how to programmatically create and share posts on the **Bluesky Social \\nNetwork**? Well, you\'re in luck! With the **BlueSky PHP SDK**, it\'s surprisingly simple. In this post, I\'ll guide \\nyou step-by-step to authenticate, create posts, upload images, and share them effortlessly. Let\u2019s dive right in! \ud83d\ude80\\n\\n---\\n\\n\x3c!-- truncate --\x3e\\n\\n### Getting Started: Share Your First Post\\n\\nFirst things first\u2014you need to authenticate with your credentials. This is required because the \\n`app.bsky.feed.post` endpoint needs an access token to make things happen. \\nHere\u2019s how you can do it in just a few lines of PHP:\\n\\n```php title=\\"Authenticate with Your Credentials\\"\\n<?php\\n\\nuse Atproto\\\\Client;\\n\\n$client = new Client();\\n$client->authenticate(\'handle\', \'password\'); // Replace with your Bluesky username and password\\n```\\n\\nOnce you\'re authenticated, the SDK generates an access token for you, so you\u2019re ready to roll.\\n\\n---\\n\\n### Step 1: Creating the Magic (Your Post)\\n\\nNow that authentication is sorted, let\u2019s create your first post. Imagine writing something cool like, \\"Hey Bluesky, \\nI just discovered documentation!\\" Here\u2019s how you can code that moment:\\n\\n```php title=\\"Create Your First Post\\"\\n$post = $client->app()->bsky()->feed()->post()->forge()\\n    ->text(\'Hey Bluesky! I just discovered documentation, and it feels amazing! \ud83d\ude04\');\\n```\\n\\nSimple, isn\u2019t it? Let\u2019s take it up a notch by adding an image.\\n\\n---\\n\\n### Step 2: Adding a Touch of Visuals (Upload an Image)\\n\\nThey say a picture is worth a thousand words, and Bluesky posts are no exception! Here\u2019s how you can upload an \\nimage to make your post more engaging:\\n\\n```php title=\\"Upload an Image\\"\\n$uploadedBlob = $client->com()->atproto()->repo()->createRecord()->forge()\\n    ->blob(\'docs-released.png\') // Your image file here\\n    ->send()\\n    ->blob();\\n```\\n\\nCool, right? The uploaded image gets converted into a [`blob data model`](https://atproto.com/specs/blob) object, \\nwhich you\u2019ll need in the next step.\\n\\nTo help you visualize the flow, here\u2019s an image that represents what the process looks like when you\'re working \\nwith the BlueSky PHP SDK:\\n\\n![An example image for creating posts with BlueSky PHP SDK](docs-released.png)\\n\\n---\\n\\n### Step 3: Embedding the Image (Making It Shine)\\n\\nNow, let\u2019s embed that shiny new image into your post. Here\u2019s how:\\n\\n```php title=\\"Embed Image into Post\\"\\nuse Atproto\\\\Lexicons\\\\App\\\\Bsky\\\\Embed\\\\Collections\\\\ImageCollection;\\nuse Atproto\\\\Lexicons\\\\App\\\\Bsky\\\\Embed\\\\Image;\\n\\n$post->embed(new ImageCollection([\\n    new Image($uploadedBlob, \\"An example image for a Bluesky blog post\\")\\n]));\\n```\\n\\nBoom! Your post now has a visual element, and it\u2019s ready to be shared with the world.\\n\\n---\\n\\n### Step 4: Hitting the Share Button (Publish the Post)\\n\\nHere comes the moment of truth\u2014publishing your post! Let\u2019s send it to the Bluesky network for everyone to see:\\n\\n```php title=\\"Publish Your Post\\"\\n$createdRecord = $client->com()->atproto()->repo()->createRecord()\\n    ->record($post)\\n    ->repo($client->authenticated()->did())\\n    ->collection($post->nsid())\\n    ->send();\\n```\\n\\nAnd guess what? Your post is live! \ud83c\udf89 If you want to grab the post\u2019s URI, here\u2019s how:\\n\\n```php title=\\"Get Post URI\\"\\necho $createdRecord->uri();\\n```\\n\\nThere you go\u2014your Bluesky post is out there, ready to make waves!\\n\\n---\\n\\n### Wrap-Up\\n\\nCongratulations! \ud83c\udf8a You\u2019ve just created and shared your first post on the Bluesky Social Network using the **BlueSky \\nPHP SDK**. Whether it\u2019s a simple update or a vibrant post with images, this SDK has got your back.\\n\\nUntil next time, happy coding and happy posting! \ud83d\ude80"}]}}')}}]);