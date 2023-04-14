import { error } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import rss from "rss";
import URQLClient from "$graphql/urqlClient";
import type { GetRssDataQuery } from "$graphql/types";
import { GET_RSS_DATA } from "$graphql/queries";
import { PUBLIC_ASSETS, PUBLIC_STATE } from "$env/static/public";

export const GET = (async () => {
	const posts = await URQLClient.query<GetRssDataQuery>(GET_RSS_DATA, {
		limit: 10,
		sort: { _modified: true },
		filter: { _state: PUBLIC_STATE }
	})
		.toPromise()
		.then((res) => res.data?.contentModel);

	if (!posts) {
		throw error(500, "No Items in Feed");
	}
	const rssItems = posts.map((post) => {
		const date = post?._created ? new Date(post?._created * 1000) : "";

		return {
			title: post?.title || "",
			description: post?.subhead || "",
			url: `https://elearning.zhdk.ch/${post?.category}/${post?.slug}` || "",
			date: date,
			enclosure: {
				url: PUBLIC_ASSETS + post?.title_image.path,
				type: post?.title_image.mime,
				size: post?.title_image.size
			}
		};
	});

	const feed = new rss({
		title: "ZHdK E-Learning RSS Feed",
		description: "RSS Feed showing the last ten modified posts",
		feed_url: "https://elearning.zhdk.ch/feed",
		site_url: "https://elearning.zhdk.ch",
		image_url: "https://elearning.zhdk.ch/logo.png",
		managingEditor: "manuel.weibel@zhdk.ch (Manuel Weibel)",
		webMaster: "hello@bureau314.ch (Jan Pistor)",
		language: "de-CH",
		pubDate: new Date(),
		ttl: 60
	});

	rssItems.forEach((rssItem) => {
		feed.item(rssItem);
	});

	const xml = feed.xml({ indent: true });
	const headers = {
		"Cache-Control": "max-age=0, s-maxage=3600",
		"Content-Type": "application/xml"
	};
	return new Response(xml, { headers: headers });
}) satisfies RequestHandler;
