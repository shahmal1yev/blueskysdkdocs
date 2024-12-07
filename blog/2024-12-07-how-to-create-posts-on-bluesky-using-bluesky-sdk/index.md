---
authors:
  - key: shahmal1yev
slug: creating-posts-on-bluesky-with-blueskysdk
title: "How to Create and Share Posts on BlueSky Using BlueSky SDK"
description: "A comprehensive guide on creating and sharing posts on the Bluesky Social Network using the BlueSky PHP SDK, complete with step-by-step instructions and code examples."
image: ./cover.png
---

Hey there! 🎉 Have you ever wondered how to programmatically create and share posts on the **Bluesky Social 
Network**? Well, you're in luck! With the **BlueSky PHP SDK**, it's surprisingly simple. In this post, I'll guide 
you step-by-step to authenticate, create posts, upload images, and share them effortlessly. Let’s dive right in! 🚀

---

<!-- truncate -->

### Getting Started: Share Your First Post

First things first—you need to authenticate with your credentials. This is required because the 
`app.bsky.feed.post` endpoint needs an access token to make things happen. 
Here’s how you can do it in just a few lines of PHP:

```php title="Authenticate with Your Credentials"
<?php

use Atproto\Client;

$client = new Client();
$client->authenticate('handle', 'password'); // Replace with your Bluesky username and password
```

Once you're authenticated, the SDK generates an access token for you, so you’re ready to roll.

---

### Step 1: Creating the Magic (Your Post)

Now that authentication is sorted, let’s create your first post. Imagine writing something cool like, "Hey Bluesky, 
I just discovered documentation!" Here’s how you can code that moment:

```php title="Create Your First Post"
$post = $client->app()->bsky()->feed()->post()->forge()
    ->text('Hey Bluesky! I just discovered documentation, and it feels amazing! 😄');
```

Simple, isn’t it? Let’s take it up a notch by adding an image.

---

### Step 2: Adding a Touch of Visuals (Upload an Image)

They say a picture is worth a thousand words, and Bluesky posts are no exception! Here’s how you can upload an 
image to make your post more engaging:

```php title="Upload an Image"
$uploadedBlob = $client->com()->atproto()->repo()->createRecord()->forge()
    ->blob('docs-released.png') // Your image file here
    ->send()
    ->blob();
```

Cool, right? The uploaded image gets converted into a [`blob data model`](https://atproto.com/specs/blob) object, 
which you’ll need in the next step.

To help you visualize the flow, here’s an image that represents what the process looks like when you're working 
with the BlueSky PHP SDK:

![An example image for creating posts with BlueSky PHP SDK](docs-released.png)

---

### Step 3: Embedding the Image (Making It Shine)

Now, let’s embed that shiny new image into your post. Here’s how:

```php title="Embed Image into Post"
use Atproto\Lexicons\App\Bsky\Embed\Collections\ImageCollection;
use Atproto\Lexicons\App\Bsky\Embed\Image;

$post->embed(new ImageCollection([
    new Image($uploadedBlob, "An example image for a Bluesky blog post")
]));
```

Boom! Your post now has a visual element, and it’s ready to be shared with the world.

---

### Step 4: Hitting the Share Button (Publish the Post)

Here comes the moment of truth—publishing your post! Let’s send it to the Bluesky network for everyone to see:

```php title="Publish Your Post"
$createdRecord = $client->com()->atproto()->repo()->createRecord()
    ->record($post)
    ->repo($client->authenticated()->did())
    ->collection($post->nsid())
    ->send();
```

And guess what? Your post is live! 🎉 If you want to grab the post’s URI, here’s how:

```php title="Get Post URI"
echo $createdRecord->uri();
```

There you go—your Bluesky post is out there, ready to make waves!

---

### Wrap-Up

Congratulations! 🎊 You’ve just created and shared your first post on the Bluesky Social Network using the **BlueSky 
PHP SDK**. Whether it’s a simple update or a vibrant post with images, this SDK has got your back.

Until next time, happy coding and happy posting! 🚀
