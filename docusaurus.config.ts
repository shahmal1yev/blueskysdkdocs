import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'BlueSky PHP SDK',
  tagline: 'Welcome to official documentation of the SDK',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://blueskysdk.shahmal1yev.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'shahmal1yev', // Usually your GitHub org/user name.
  projectName: 'blueskysdkdocs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
              'https://github.com/shahmal1yev/blueskysdkdocs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: 'all',
            copyright: 'Copyright © ${new Date().getFullYear()} Eldar Shahmaliyev',
            xslt: true,
          },
          blogSidebarCount: 5,
          blogSidebarTitle: 'Recent Posts',

          readingTime: ({content, frontMatter, defaultReadingTime}) =>
              defaultReadingTime({content, options: {wordsPerMinute: 200}}),

          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
              'https://github.com/shahmal1yev/blueskysdkdocs/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          // authorsMapPath: 'blob/authors.yml'
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
        gtag: {
          trackingID: 'G-KV7908LCZ6',
          anonymizeIP: true,
        }
      } satisfies Preset.Options,
    ]
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'BlueSky SDK',
      logo: {
        alt: 'BlueSky Logo',
        src: 'img/logo.svg',
      },
      items: [
        { type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Documentation' },
        { to: '/blog', label: 'Blog', position: 'left' },
        { label: 'Releases', href: 'https://github.com/shahmal1yev/blueskysdk/releases', position: 'right' },
        { label: 'Packagist', href: 'https://packagist.org/packages/shahmal1yev/blueskysdk', position: 'right' },
        {
          type: 'dropdown',
          label: 'Community',
          position: 'right',
          items: [
            { label: 'GitHub', href: 'https://github.com/shahmal1yev/blueskysdk' },
            { label: 'Discord', href: 'https://discord.gg/UPWYXC2YN5' },
            { label: 'Twitter', href: 'https://x.com/shahmal1yev' },
          ],
        },
        {
          type: 'dropdown',
          label: 'Support',
          position: 'right',
          items: [
            { label: 'GitHub Sponsors', href: 'https://github.com/sponsors/shahmal1yev' },
            { label: 'Buy me a coffee', href: 'https://buymeacoffee.com/shahmal1yev' },
          ],
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            { label: 'Documentation', to: '/docs/intro' },
            { label: 'Blog', to: '/blog' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'Discord', href: 'https://discord.gg/UPWYXC2YN5' },
            { label: 'GitHub', href: 'https://github.com/shahmal1yev/blueskysdk' },
          ],
        },
        {
          title: 'Follow Me',
          items: [
            { label: 'LinkedIn', href: 'https://linkedin.com/in/shahmal1yev' },
            { label: 'Twitter', href: 'https://x.com/shahmal1yev' },
          ],
        },
        {
          title: 'Support',
          items: [
            { label: 'GitHub Sponsors', href: 'https://github.com/sponsors/shahmal1yev' },
            { label: 'Buy me a coffee', href: 'https://buymeacoffee.com/shahmal1yev' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'Releases', href: 'https://github.com/shahmal1yev/blueskysdk/releases' },
            { label: 'Packagist', href: 'https://packagist.org/packages/shahmal1yev/blueskysdk' },
          ],
        },
      ],
      copyright: `
    <div style="margin-top: 35px !important">
      Copyright © ${new Date().getFullYear()} BlueSky PHP SDK. Built with ❤️ by <a href="https://shahmal1yev.dev/about" target="_blank">Eldar Shahmaliyev</a>.
      <br/>
      Documentation powered by <a href="https://docusaurus.io" target="_blank">Docusaurus</a>.
    </div>
  `,

    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["php"]
    },

    metadata: [
      { name: 'keywords', content: 'BlueSky PHP SDK, PHP, SDK, documentation, Bluesky' },
      { name: 'description', content: 'The official documentation for the BlueSky PHP SDK. Learn how to integrate and build applications with ease.' },
    ],

    colorMode: {
      defaultMode: 'dark',
    },


  } satisfies Preset.ThemeConfig,

  headTags: [
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org/',
        '@type': 'SoftwareApplication',
        name: 'BlueSky PHP SDK',
        description: 'A powerful PHP SDK for ATProtocol.',
        url: 'https://blueskysdk.shahmal1yev.dev',
        publisher: {
          '@type': 'Person',
          name: 'Eldar Shahmaliyev',
        },
      }),
    },
  ],

  trailingSlash: true,

};

export default config;
