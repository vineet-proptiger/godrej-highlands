import './globals.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Open_Sans, Montserrat, Cormorant_Garamond, Poppins } from 'next/font/google'
import { CITY_DISPLAY } from '../lib/config'
import { faviconImage } from '../lib/images'
import localFont from 'next/font/local'
import { GoogleTagManager } from '@next/third-parties/google'
import Script from 'next/script'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jost',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
})

const nephilm = localFont({
  src: '../public/fonts/Nephilm.otf',
  variable: '--font-nephilm',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://godrejcitypanvelhighlands.com'),
  title: 'Godrej City Panvel The Highlands | 2 & 3 BHK Hillside Homes',
  description: 'Discover Godrej City Panvel The Highlands in Navi Mumbai. Offering spacious 2 & 3 BHK hillside residences across a sprawling 145-acre township with world-class lifestyle amenities.',
  icons: {
    icon: faviconImage,
    shortcut: faviconImage,
    apple: faviconImage,
  },
  alternates: {
    canonical: 'https://godrejcitypanvelhighlands.com',
  },
  openGraph: {
    title: 'Godrej City Panvel The Highlands | 2 & 3 BHK Hillside Homes',
    description: 'Discover Godrej City Panvel The Highlands in Navi Mumbai. Offering spacious 2 & 3 BHK hillside residences across a sprawling 145-acre township with world-class lifestyle amenities.',
    url: 'https://godrejcitypanvelhighlands.com',
    siteName: 'Godrej City Panvel The Highlands',
    images: [
      {
        url: '/projects/iris-tower.jpg',
        width: 1200,
        height: 630,
        alt: 'Godrej City Panvel The Highlands Navi Mumbai',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Godrej City Panvel The Highlands | 2 & 3 BHK Hillside Homes',
    description: 'Discover Godrej City Panvel The Highlands in Navi Mumbai. Offering spacious 2 & 3 BHK hillside residences across a sprawling 145-acre township with world-class lifestyle amenities.',
    images: ['/projects/iris-tower.jpg'],
  },
}

import SmoothScroll from '../components/SmoothScroll'

export default function RootLayout({ children }) {  
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-575H8R87" />
      <head>
        <link rel="icon" href={faviconImage} type="image/webp" />
        <link rel="shortcut icon" href={faviconImage} type="image/webp" />
        <link rel="apple-touch-icon" href={faviconImage} type="image/webp" />
        <Script
          id="json-ld-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Godrej City Panvel The Highlands",
              "url": "https://godrejcitypanvelhighlands.com",
              "logo": "https://godrejcitypanvelhighlands.com/projects/iris-tower.jpg",
              "image": "https://godrejcitypanvelhighlands.com/projects/iris-tower.jpg",
              "description": "Godrej City Panvel The Highlands, Navi Mumbai's premier 145-acre township offering luxurious hillside 2 & 3 BHK residences.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Panvel",
                "addressLocality": "Navi Mumbai",
                "addressRegion": "Maharashtra",
                "postalCode": "410210",
                "addressCountry": "IN"
              },
              "telephone": "+919718344024",
              "priceRange": "₹ 1.20 Cr Onwards",
              "sameAs": [
                "https://godrejcitypanvelhighlands.com"
              ]
            })
          }}
        />
      </head>
      <body className={`${openSans.variable} ${montserrat.variable} ${cormorant.variable} ${nephilm.variable} ${poppins.variable} font-sans text-dark antialiased`}>
        <Script id="gtag-init" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
window.dataLayer.push({ 'city': '${CITY_DISPLAY}' });
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`} 
        </Script>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
