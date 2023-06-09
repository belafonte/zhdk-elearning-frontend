const config = {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		fontSize: {
			130: ["130px", "130px"],
			110: ["110px", "110px"],
			68: ["68px", "68px"],
			60: ["60px", "60px"],
			50: ["50px", "50px"],
			45: ["45px", "45px"],
			42: ["42px", "43px"],
			38: ["38px", "38px"],
			36: ["36px", "37px"],
			30: ["30px", "32px"],
			26: ["26px", "32px"],
			24: ["24px", "27px"],
			23: ["23px", "29px"],
			22: ["22px", "26px"],
			20: ["20px", "25px"],
			19: ["19px", "21px"],
			14: ["14px", "17px"],
			13: ["13px", "14px"],
			12: ["12px", "17px"]
		},
		fontFamily: {
			sans: ["Helvetica"],
			serif: ["Georgia"]
		},
		extend: {
			spacing: {
				0: "0px",
				1: "1px",
				5: "5px",
				7: "7px",
				8: "8px",
				10: "10px",
				15: "15px",
				16: "16px",
				20: "20px",
				32: "32px",
				42: "42px",
				50: "50px",
				60: "60px",
				72: "72px",
				84: "84px",
				col: "var(--app-col-size)",
				"grid-width": "var(--app-grid-width)"
			},
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
				16: "repeat(16, minmax(0, 1fr))",
				24: "repeat(24, minmax(0, 1fr))"
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
