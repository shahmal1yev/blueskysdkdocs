---
title: "Discovering Posts on Bluesky with SearchPosts API Using BlueSky SDK"
description: "Discover how to use the SearchPosts API in the BlueSky PHP SDK to search and filter Bluesky posts by 
 hashtags, URLs, languages, and more with ease and precision."
authors:
- key: shahmal1yev
slug: discovering-posts-on-bluesky-with-searchposts-api-using-bluesky-sdk
image: ./social-card.webp
---

Are you ready to tap into Bluesky Social Network’s rich data with unparalleled precision and simplicity? The 
`SearchPosts` API in the BlueSky PHP SDK is here to elevate your application’s capabilities. From searching for 
posts by query to filtering by tags, URLs, and languages, the SDK empowers developers to navigate Bluesky’s 
ecosystem efficiently. With this powerful tool, you can build robust applications that truly leverage Bluesky’s 
vast social network. 🔍💡 Let’s take a journey into unlocking its potential. 🚀

---

<!-- truncate -->

### Getting Started with SearchPosts

Before accessing the search API, authentication is a prerequisite. The SDK makes this seamless and straightforward:

```php
use Atproto\Client;

$client = new Client();
$client->authenticate('handle', 'password'); // Replace with your Bluesky username and password
```

Upon successful authentication, the SDK generates an access token, enabling interaction with endpoints such as `SearchPosts`. This process ensures secure and reliable communication with the Bluesky network, setting the stage for advanced functionalities.

Now, let’s delve into searching posts effectively. ✅

---

### Crafting a Search Query

To search posts, specify your query and configure additional parameters as needed. Whether you’re searching for the latest trends or specific content, the process is straightforward:

```php
use Atproto\Lexicons\App\Bsky\Feed\SearchPosts;

$response = $client->app()->bsky()->feed()->searchPosts()->forge('Hello World!') // "query" is required and is reflected in all search results 
    ->limit(5) // Optional: Restrict results to the latest 5 posts
    ->sort(SortEnum::get('latest')) // Optional: Sort by 'latest' or 'top'
    ->send();

foreach ($response->posts() as $post) {
    echo $post->record()->text() . PHP_EOL;
}
```

This fetches posts containing the phrase “Hello World!”. It’s a great starting point for exploring content on Bluesky.

---

### Filtering with Tags

Enhance specificity by narrowing your search to include posts with specific hashtags. For instance, imagine you're running a campaign to promote a product or an event; filtering by relevant tags allows you to track engagement and identify key discussions effectively. This is especially useful for targeting niche topics:

```php
$response = $client->app()->bsky()->feed()->searchPosts()->forge('Example Query')
    ->tag(['tag1', 'tag2'])
    ->limit(5)
    ->send();

foreach ($response->posts() as $post) {
    echo $post->record()->text() . PHP_EOL;
}
```

Efficiently find posts that contain `tag1` or `tag2`. 🌿 Tags make your searches precise and targeted, saving time and effort.

---

### Searching by URL

To locate posts referencing a particular URL, the SDK provides an easy method to integrate this filter. This is perfect for finding mentions of specific links:

```php
$response = $client->app()->bsky()->feed()->searchPosts()->forge('Check this out')
    ->url('https://example.com')
    ->limit(3)
    ->send();

foreach ($response->posts() as $post) {
    echo $post->record()->text() . PHP_EOL;
}
```

This limits results to posts mentioning “[https://example.com](https://example.com)”. 🌐 Leveraging URLs makes it simple to monitor discussions around your links.

---

### Filtering by Author

Searching posts by a specific author is another powerful feature. This allows you to explore all content created by a particular handle:

```php
$response = $client->app()->bsky()->feed()->searchPosts()->forge('test')
    ->author('shahmal1yevv.bsky.social')
    ->limit(3)
    ->send();

foreach ($response->posts() as $post) {
    echo $post->record()->text() . PHP_EOL;
}
```

This query fetches posts from the user "shahmal1yevv.bsky.social," making it easy to track contributions by a specific author. 👤

---

### Filtering by Language

Sometimes, language preference is critical when searching posts. The SDK makes it easy to filter results by language:

```php
$response = $client->app()->bsky()->feed()->searchPosts()->forge('Multilingual Content')
    ->lang('en')
    ->limit(3)
    ->send();

foreach ($response->posts() as $post) {
    echo $post->record()->text() . PHP_EOL;
}
```

This fetches only English posts, ensuring language-specific results. 🌐

---

### Combining Multiple Filters

Why stop at one filter? By combining filters, you can achieve granular searches and highly customized results that cater to a wide range of application needs. For developers, this means the ability to refine content discovery for different use cases—whether you're building analytics tools, content recommendation engines, or monitoring systems. This approach not only enhances precision but also ensures your applications can adapt to complex user requirements effectively. This approach unlocks the full potential of the API:

```php
$response = $client->app()->bsky()->feed()->searchPosts()->forge('Advanced Search')
    ->tag(['tag1', 'tag2'])
    ->url('https://example.com')
    ->lang('en') // Filter posts in English
    ->limit(10)
    ->sort('top')
    ->send();

foreach ($response->posts() as $post) {
    echo $post->record()->text() . PHP_EOL;
}
```

This query fetches English posts with the specified tags and URL, sorted by popularity. ⭐ Combining filters allows for a truly tailored search experience, making your applications smarter and more efficient.

---

### Wrapping It Up

The `SearchPosts` API in the BlueSky PHP SDK offers developers a robust tool for seamless post discovery on Bluesky, enabling precise searches, trend analysis, and enhanced application capabilities. Whether you’re searching for specific content, exploring tags, analyzing trends, or building data-driven applications, this tool offers unparalleled flexibility and power. 🎉

Start exploring today, and let your application thrive on Bluesky’s vibrant network. If you encounter any issues or have questions, drop by [GitHub](https://github.com/shahmal1yev/blueskysdk) or check out the [official documentation](https://blueskysdk.shahmal1yev.dev).

Happy coding! 🚀
