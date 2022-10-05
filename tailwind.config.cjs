const config = {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		fontSize: {
			110: ["110px", "110px"],
			68: ["68px", "68px"],
			60: ["60px", "60px"],
			50: ["50px", "50px"],
			42: ["42px", "43px"],
			30: ["30px", "32px"],
			36: ["36px", "36px"],
			24: ["24px", "26px"],
			19: ["19px", "21px"],
			14: ["14px", "17px"],
			12: ["12px", "17px"]
		},
		fontFamily: {
			sans: ["Helvetica"],
			serif: ["Georgia"]
		},
		spacing: {
			0: "0px",
			1: "1px",
			5: "5px",
			8: "8px",
			10: "10px",
			15: "15px",
			32: "32px",
			50: "50px",
			60: "60px",
			84: "84px"
		},
		extend: {
			colors: {
				"light-gray": "#EEEEEE",
				"dark-gray": "#BFBFBF",
				yellow: "#E0FF1C",
				rose: "#FF979771",
				"light-blue": "#BDE4FF",
				orange: "#FF5E13",
				violet: "#9C46FF",
				"light-green": "#BBFFA3",
				brown: "#AB6034",
				green: "#ABFF39",
				"dark-green": "#1EA666",
				red: "#BB061A"
			},
			gridTemplateColumns: {
				4: "repeat(4, minmax(0, 1fr))",
				12: "repeat(12, minmax(0, 1fr))",
				16: "repeat(16, minmax(0, 1fr))"
			},
			screens: {
				tablet: "640px",
				laptop: "1024px",
				desktop: "1280px"
			}
		}
	},

	plugins: []
};

module.exports = config;
