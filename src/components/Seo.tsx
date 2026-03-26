import { useEffect } from 'react';
import { formatPageTitle, getAbsoluteUrl, getSiteUrl, siteConfig } from '../config/site';

type JsonLd = Record<string, unknown> | Record<string, unknown>[];

type SeoProps = {
  title: string;
  description: string;
  path?: string;
  canonicalUrl?: string;
  type?: 'website' | 'article' | 'profile';
  image?: string;
  keywords?: string[];
  noindex?: boolean;
  jsonLd?: JsonLd;
};

const replaceTag = (
  selector: string,
  createTag: () => HTMLElement,
  ownedNodes: HTMLElement[],
) => {
  document.head.querySelectorAll(selector).forEach((node) => node.remove());
  const element = createTag();
  document.head.appendChild(element);
  ownedNodes.push(element);
};

const Seo = ({
  title,
  description,
  path,
  canonicalUrl,
  type = 'website',
  image,
  keywords = [],
  noindex = false,
  jsonLd,
}: SeoProps) => {
  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }

    const ownedNodes: HTMLElement[] = [];
    const previousTitle = document.title;
    const fullTitle = title.includes(siteConfig.name) ? title : formatPageTitle(title);
    const canonical = canonicalUrl ?? getAbsoluteUrl(path ?? window.location.pathname);
    const resolvedUrl = canonical.startsWith('http') ? canonical : getAbsoluteUrl(canonical);
    const robotsContent = noindex ? 'noindex, nofollow' : 'index, follow';
    const keywordText = keywords.length > 0 ? keywords.join(', ') : siteConfig.keywords.join(', ');

    document.title = fullTitle;

    replaceTag('meta[name="description"]', () => {
      const tag = document.createElement('meta');
      tag.setAttribute('name', 'description');
      tag.setAttribute('content', description);
      return tag;
    }, ownedNodes);

    replaceTag('meta[name="robots"]', () => {
      const tag = document.createElement('meta');
      tag.setAttribute('name', 'robots');
      tag.setAttribute('content', robotsContent);
      return tag;
    }, ownedNodes);

    replaceTag('meta[name="keywords"]', () => {
      const tag = document.createElement('meta');
      tag.setAttribute('name', 'keywords');
      tag.setAttribute('content', keywordText);
      return tag;
    }, ownedNodes);

    replaceTag('meta[name="author"]', () => {
      const tag = document.createElement('meta');
      tag.setAttribute('name', 'author');
      tag.setAttribute('content', siteConfig.name);
      return tag;
    }, ownedNodes);

    replaceTag('meta[name="application-name"]', () => {
      const tag = document.createElement('meta');
      tag.setAttribute('name', 'application-name');
      tag.setAttribute('content', siteConfig.shortName);
      return tag;
    }, ownedNodes);

    replaceTag('meta[property="og:title"]', () => {
      const tag = document.createElement('meta');
      tag.setAttribute('property', 'og:title');
      tag.setAttribute('content', fullTitle);
      return tag;
    }, ownedNodes);

    replaceTag('meta[property="og:description"]', () => {
      const tag = document.createElement('meta');
      tag.setAttribute('property', 'og:description');
      tag.setAttribute('content', description);
      return tag;
    }, ownedNodes);

    replaceTag('meta[property="og:type"]', () => {
      const tag = document.createElement('meta');
      tag.setAttribute('property', 'og:type');
      tag.setAttribute('content', type);
      return tag;
    }, ownedNodes);

    replaceTag('meta[property="og:url"]', () => {
      const tag = document.createElement('meta');
      tag.setAttribute('property', 'og:url');
      tag.setAttribute('content', resolvedUrl);
      return tag;
    }, ownedNodes);

    replaceTag('meta[property="og:site_name"]', () => {
      const tag = document.createElement('meta');
      tag.setAttribute('property', 'og:site_name');
      tag.setAttribute('content', siteConfig.name);
      return tag;
    }, ownedNodes);

    replaceTag('meta[property="og:image"]', () => {
      const tag = document.createElement('meta');
      tag.setAttribute('property', 'og:image');
      tag.setAttribute('content', image ?? `${getSiteUrl()}/favicon.ico`);
      return tag;
    }, ownedNodes);

    replaceTag('meta[name="twitter:card"]', () => {
      const tag = document.createElement('meta');
      tag.setAttribute('name', 'twitter:card');
      tag.setAttribute('content', image ? 'summary_large_image' : 'summary');
      return tag;
    }, ownedNodes);

    replaceTag('meta[name="twitter:title"]', () => {
      const tag = document.createElement('meta');
      tag.setAttribute('name', 'twitter:title');
      tag.setAttribute('content', fullTitle);
      return tag;
    }, ownedNodes);

    replaceTag('meta[name="twitter:description"]', () => {
      const tag = document.createElement('meta');
      tag.setAttribute('name', 'twitter:description');
      tag.setAttribute('content', description);
      return tag;
    }, ownedNodes);

    if (image) {
      replaceTag('meta[name="twitter:image"]', () => {
        const tag = document.createElement('meta');
        tag.setAttribute('name', 'twitter:image');
        tag.setAttribute('content', image);
        return tag;
      }, ownedNodes);
    } else {
      document.head.querySelectorAll('meta[name="twitter:image"]').forEach((node) => node.remove());
    }

    replaceTag('link[rel="canonical"]', () => {
      const tag = document.createElement('link');
      tag.setAttribute('rel', 'canonical');
      tag.setAttribute('href', resolvedUrl);
      return tag;
    }, ownedNodes);

    replaceTag('meta[property="og:locale"]', () => {
      const tag = document.createElement('meta');
      tag.setAttribute('property', 'og:locale');
      tag.setAttribute('content', 'en_US');
      return tag;
    }, ownedNodes);

    document.head.querySelectorAll('script[data-seo="json-ld"]').forEach((node) => node.remove());

    if (jsonLd) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo', 'json-ld');
      script.textContent = JSON.stringify(jsonLd, null, 2);
      document.head.appendChild(script);
      ownedNodes.push(script);
    }

    return () => {
      ownedNodes.forEach((node) => node.remove());
      document.title = previousTitle;
    };
  }, [canonicalUrl, description, image, jsonLd, keywords, noindex, path, title, type]);

  return null;
};

export default Seo;
