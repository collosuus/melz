import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ArticleClient from '@/components/ArticleClient';

interface ArticleMeta {
  title: string;
  description: string;
  canonical: string;
  ogTitle: string;
  ogDesc: string;
  datePublished: string;
  dateModified: string;
}

const articlesMeta: Record<string, ArticleMeta> = {
  'gtip-kodu-nedir': {
    title: 'GTİP Kodu Nedir? Nasıl Bulunur? | Melz Gümrük Müşavirliği',
    description: 'GTİP kodu nedir, nasıl tespit edilir ve yanlış sınıflandırmanın riskleri nelerdir? Melz Gümrük uzmanlarından kapsamlı rehber.',
    canonical: 'https://www.melzgumruk.com/blog/gtip-kodu-nedir',
    ogTitle: 'GTİP Kodu Nedir? Nasıl Bulunur?',
    ogDesc: 'İthalat ve ihracatta GTİP kodunun önemi, nasıl tespit edildiği ve yanlış sınıflandırmanın riskleri.',
    datePublished: '2026-06-25',
    dateModified: '2026-06-25',
  },
  'ithalat-belgeleri': {
    title: 'İthalatta Hangi Belgeler Gerekir? | Melz Gümrük Müşavirliği',
    description: 'İthalat işlemlerinde gerekli tüm belgeler: ticari fatura, konşimento, menşe şahadetnamesi, CE belgesi ve daha fazlası. Eksiksiz rehber.',
    canonical: 'https://www.melzgumruk.com/blog/ithalat-belgeleri',
    ogTitle: 'İthalatta Hangi Belgeler Gerekir?',
    ogDesc: 'İthalat sürecinde ihtiyaç duyulan tüm belgeler hakkında kapsamlı rehber.',
    datePublished: '2026-06-25',
    dateModified: '2026-06-25',
  },
  'gumruk-vergisi-hesaplama': {
    title: 'Gümrük Vergisi Nasıl Hesaplanır? | Melz Gümrük Müşavirliği',
    description: 'CIF değeri, gümrük vergisi oranları, KDV, ÖTV ve tüm kesintilerle adım adım gümrük vergisi hesaplama rehberi. Gerçek örnekle anlat.',
    canonical: 'https://www.melzgumruk.com/blog/gumruk-vergisi-hesaplama',
    ogTitle: 'Gümrük Vergisi Nasıl Hesaplanır?',
    ogDesc: 'Adım adım gümrük vergisi hesaplama: CIF değeri, vergi oranları, KDV ve ÖTV.',
    datePublished: '2026-05-15',
    dateModified: '2026-06-25',
  },
};

export async function generateStaticParams() {
  return Object.keys(articlesMeta).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articlesMeta[slug];
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: article.canonical },
    openGraph: { title: article.ogTitle, description: article.ogDesc, url: article.canonical, type: 'article' },
  };
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articlesMeta[slug];
  if (!article) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.ogTitle,
    description: article.description,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: { '@type': 'Organization', name: 'Melz Gümrük Müşavirliği' },
    publisher: { '@type': 'Organization', name: 'Melz Gümrük Müşavirliği', url: 'https://www.melzgumruk.com' },
    url: article.canonical,
    inLanguage: 'tr',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ArticleClient slug={slug} />
    </>
  );
}
