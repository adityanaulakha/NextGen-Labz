// Dynamic SEO hook for per-route metadata injection
// Usage: useSEO({ title, description, canonical, keywords, image, type, noindex, jsonLd })
// Adds/updates: <title>, meta description, keywords, canonical link, OG & Twitter tags, optional robots, and JSON-LD block.
// All elements it manages are tagged with data-dynamic-seo so they can be updated/cleaned on route change.

import { useEffect } from 'react'

const DOMAIN = 'https://www.nextgenlabz.studio'
const DEFAULT_IMAGE = `${DOMAIN}/og-cover.png`
const DEFAULT_TYPE = 'website'

// Helper to upsert a meta tag by name or property
function upsertMeta(attr, key, value) {
	if (!value) return
	let el = document.head.querySelector(`meta[${attr}="${key}"][data-dynamic-seo]`)
	if (!el) {
		// Try to reuse an existing static tag to avoid duplicates
		el = document.head.querySelector(`meta[${attr}="${key}"]`)
	}
	if (!el) {
		el = document.createElement('meta')
		el.setAttribute(attr, key)
		document.head.appendChild(el)
	}
	el.setAttribute('content', value)
	el.setAttribute('data-dynamic-seo', 'true')
}

function upsertLink(rel, href) {
	if (!href) return
	let el = document.head.querySelector(`link[rel="${rel}"][data-dynamic-seo]`)
	if (!el) {
		el = document.head.querySelector(`link[rel="${rel}"]`)
	}
	if (!el) {
		el = document.createElement('link')
		el.setAttribute('rel', rel)
		document.head.appendChild(el)
	}
	el.setAttribute('href', href)
	el.setAttribute('data-dynamic-seo', 'true')
}

function removePrevious() {
	const nodes = document.head.querySelectorAll('[data-dynamic-seo]')
	nodes.forEach(n => n.remove())
}

export function useSEO(options = {}) {
	const {
		title,
		description,
		canonical,
		keywords,
		image,
		type,
		noindex = false,
		jsonLd // object or array of objects
	} = options

	useEffect(() => {
		// Clean existing dynamic tags before applying new ones
		removePrevious()

		// Title
		if (title) document.title = title

		// Meta basics
		if (description) upsertMeta('name', 'description', description)
		if (keywords) upsertMeta('name', 'keywords', keywords)

		// Canonical
		const canonicalUrl = canonical ? canonical : DOMAIN + window.location.pathname
		upsertLink('canonical', canonicalUrl)

		// Robots
		if (noindex) {
			upsertMeta('name', 'robots', 'noindex, nofollow')
		}

		const img = image || DEFAULT_IMAGE
		const ogType = type || DEFAULT_TYPE

		// Open Graph
		upsertMeta('property', 'og:title', title)
		upsertMeta('property', 'og:description', description)
		upsertMeta('property', 'og:url', canonicalUrl)
		upsertMeta('property', 'og:image', img)
		upsertMeta('property', 'og:type', ogType)
		upsertMeta('property', 'og:site_name', 'NextGen Labz')

		// Twitter
		upsertMeta('name', 'twitter:card', 'summary_large_image')
		upsertMeta('name', 'twitter:title', title)
		upsertMeta('name', 'twitter:description', description)
		upsertMeta('name', 'twitter:image', img)

		// JSON-LD (skip if none). Support single or multiple scripts.
		if (jsonLd) {
			const scripts = Array.isArray(jsonLd) ? jsonLd : [jsonLd]
			scripts.forEach((schemaObj, i) => {
				if (!schemaObj || typeof schemaObj !== 'object') return
				const script = document.createElement('script')
				script.type = 'application/ld+json'
				script.setAttribute('data-dynamic-seo', 'true')
				// Allow multiple by index marker
				script.setAttribute('data-schema-index', String(i))
				try {
					script.textContent = JSON.stringify(schemaObj)
					document.head.appendChild(script)
				} catch (e) {
					// Silent fail to avoid breaking app
					console.warn('Failed to inject JSON-LD', e)
				}
			})
		}
	// Re-run whenever key SEO inputs change
	}, [title, description, canonical, keywords, image, type, noindex, JSON.stringify(jsonLd)])
}

export default useSEO

