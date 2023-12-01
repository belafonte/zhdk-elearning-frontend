import { error } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
// import rss from "rss";
import sanitizeHtml from "sanitize-html";
import URQLClient from "$graphql/urqlClient";
import type { GetRssDataQuery } from "$graphql/types";
import { GET_RSS_DATA } from "$graphql/queries";
import { PUBLIC_ASSETS, PUBLIC_STATE } from "$env/static/public";

export const GET = (async () => {
	const posts = await URQLClient.query<GetRssDataQuery>(GET_RSS_DATA, {
		limit: 10,
		sort: { _modified: true },
		filter: { _state: 1 }
	})
		.toPromise()
		.then((res) => res.data?.contentModel);

	console.debug(posts);
	// if (!posts) {
	// 	throw error(500, "No Items in Feed");
	// }
	//
	// // Define the RSS feed as a string
	// const rssItems = posts.map((post) => {
	// 	const date = post?._created ? new Date(post?._created * 1000) : "";
	//
	// 	return {
	// 		title: post?.title || "",
	// 		description: post?.subhead || "",
	// 		url: `https://elearning.zhdk.ch/${post?.category}/${post?.slug}` || "",
	// 		date: date,
	// 		enclosure: {
	// 			url: PUBLIC_ASSETS + post?.title_image.path,
	// 			type: post?.title_image.mime,
	// 			size: post?.title_image.size
	// 		}
	// 	};
	// });
	//
	// const feed = new rss({
	// 	title: "ZHdK E-Learning RSS Feed",
	// 	description: "RSS Feed showing the last ten modified posts",
	// 	feed_url: "https://elearning.zhdk.ch/feed",
	// 	site_url: "https://elearning.zhdk.ch",
	// 	image_url: "https://elearning.zhdk.ch/logo.png",
	// 	managingEditor: "manuel.weibel@zhdk.ch (Manuel Weibel)",
	// 	webMaster: "hello@bureau314.ch (Jan Pistor)",
	// 	language: "de-CH",
	// 	pubDate: new Date(),
	// 	ttl: 60
	// });
	//
	// rssItems.forEach((rssItem) => {
	// 	feed.item(rssItem);
	// });
	//

	const rssItems = posts?.map((post) => {
		const date = post?._created ? new Date(post?._created * 1000).toUTCString() : "";
		if (!post) return "";

		const link =
			"https://elearning.zhdk.ch/" +
			post?.category.toLowerCase() +
			"/" +
			sanitizeHtml(post?.slug || "", { allowedTags: [], allowedAttributes: [] });

		const sanatizedTitle =
			sanitizeHtml(post?.title || "", { allowedTags: [], allowedAttributes: [] }) || "";

		const options = {
			weekday: undefined,
			year: "2-digit",
			month: "numeric",
			day: "numeric"
		} as Intl.DateTimeFormatOptions;

		const fromDate = post?.event?.fromDate
			? new Date(post?.event?.fromDate || "").toLocaleDateString("de-DE", options)
			: "";

		const toDate = post?.event?.toDate
			? new Date(post?.event?.toDate || "").toLocaleDateString("de-DE", options)
			: "";

		const title =
			post?.category === "Event"
				? `${fromDate}${" - " + toDate || ""} ${sanatizedTitle}`
				: sanatizedTitle;

		return `
		<item>
			<title>${title}</title>
			<description>${sanitizeHtml(post?.subhead || "", { allowedTags: [], allowedAttributes: [] }) || ""
			}</description>
			<link>${link}</link>
			<guid>${link}</guid>	
			<pubDate>${date}</pubDate>
			<enclosure url="${PUBLIC_ASSETS + post?.title_image.path}" type="${post?.title_image.mime
			}" length="${post?.title_image.size}"></enclosure>
		</item>`;
	});

	const feed = `<?xml version="1.0" encoding="UTF-8"?>
			<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
	 		<channel>
	   		<title>ZHdK E-Learning RSS Feed</title>
	   		<description>RSS Feed showing the last ten modified posts</description>
	   		<link>https://elearning.zhdk.ch/</link>
				<atom:link href="https://elearning.zhdk.ch/feed" rel="self" type="application/rss+xml" />
	   		<language>de-ch</language>
	   		<pubDate>${new Date().toUTCString()}</pubDate>
	   		<lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
	   		<image>
	     		<url>https://elearning.zhdk.ch/logo.png</url>
	     		<title>ZHdK E-Learning RSS Feed</title>
	     		<link>https://elearning.zhdk.ch/</link>
	   		</image>
					${rssItems?.join("")}
	 		</channel>
		</rss>`;

	const xml = feed;
	const headers = {
		"Cache-Control": "max-age=0, s-maxage=3600",
		"Content-Type": "application/xml"
	};

	return new Response(xml, { headers: headers });
}) satisfies RequestHandler;
