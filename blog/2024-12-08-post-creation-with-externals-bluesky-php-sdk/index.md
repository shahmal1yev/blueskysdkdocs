---
title: "Post Creation with Externals in BlueSky Social Network using BlueSky PHP SDK"
description: "Learn how to create posts using externals in the BlueSky PHP SDK."
authors:
- key: shahmal1yev
slug: creating-posts-on-bluesky-with-externals-using-blueskysdk
image: ./img.png
---

Want to create engaging and interactive posts on the Bluesky network? With the BlueSky PHP SDK, it’s effortless. By 
adding external content (externals) and images, you can enrich your posts and make them more captivating.

In this post, you'll learn how to authenticate with the SDK and embed external links, thumbnails, and images into your 
posts.


---

<!-- truncate -->

## Authentication

The first step to accessing the Bluesky network is authentication. Use the SDK to log in with your username and password:

```php title="Authenticate with Your Credentials"
<?php

use Atproto\Client;

$client = new Client();
$client->authenticate('handle', 'password'); // Replace with your Bluesky username and password
```

Once authenticated, you're ready to start creating posts! 🚀

---

## Adding External Links

Want to add external links, titles, descriptions, and even thumbnails to your posts? The SDK makes this simple. For 
instance, if you want to link to your personal blog or website, here's how you can do it:

### Uploading a Thumbnail Image

Upload an image to be used as a thumbnail for the external content:

![Post image](post-image.png)

```php
<?php

$uploadedBlob = $client->com()->atproto()->repo()->uploadBlob()->forge()
    ->token($client->authenticated()->accessJwt())
    ->blob('path_of_image') // File path of the image to be uploaded
    ->send()
    ->blob();
```

This uploaded image will serve as the thumbnail for your external content.

### Creating the External Content

Add the URI, title, and description for the link, and use the uploaded image as the thumbnail:

```php
<?php

$external = $client->app()->bsky()->embed()->external()->forge(
    'https://shahmal1yev.dev', // URI
    'Eldar Shahmaliyev\'s blog', // Title
    'A personal blog about cybersecurity and development.' // Description
)->thumb($uploadedBlob); // thumbnail
```

### Creating the Post

Add the prepared external content to your post and make it ready to share:

```php
<?php

$post = $client->app()->bsky()->feed()->post()->forge()
    ->text('Come to my blog: ')
    ->link('https://shahmal1yev.dev', 'click here and read the posts')
    ->embed($external);
```

With these steps, you’re all set to add captivating external links to your Bluesky posts.

---

## Adding Images

Want to include one or multiple images in your posts? The SDK allows you to use the `ImageCollection` object for 
this purpose.

### Creating an Image Collection

First, upload the image and add it to an `ImageCollection` object:

```php
<?php

use Atproto\Lexicons\App\Bsky\Embed\Collections\ImageCollection;
use Atproto\Lexicons\App\Bsky\Embed\Image;

$uploadedBlob = $client->com()->atproto()->repo()->uploadBlob()->forge()
    ->token($client->authenticated()->accessJwt())
    ->blob('path_of_image')
    ->send()
    ->blob();

$images = new ImageCollection([
    new Image(
        $uploadedBlob, // Blob
        'Alt text' // Image description
    )
]);
```

### Adding Images to the Post

Attach the image collection to your post and get it ready to share:

```php
<?php

$post = $client->app()->bsky()->feed()->post()->forge()
    ->text('Check out my gallery: ')
    ->embed($images);
```

---

## Sharing the Post

The final step is to share your post on the Bluesky network. 🎉

```php
<?php

$createRecord = $client->com()->atproto()->repo()->createRecord()->forge()
    ->record($post)
    ->repo($client->authenticated()->did())
    ->collection($post->nsid());

$response = $createRecord->send();

echo $response->uri();
```

Once the process is complete, your post will be live on the Bluesky network!

---

## Conclusion

Creating posts with the BlueSky PHP SDK is straightforward and offers a variety of options. Adding external content 
and enriching posts with images is a great way to capture your audience’s attention.