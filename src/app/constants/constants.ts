export const CHARS = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
export const NUMBERS = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
export const SPECIAL_CHARS = [".", ",", "/", "?", "!", "|", "-", "_", "(", ")", "*", "&", "^", "%", "$", "#", "@"];

export const JIKNO_API_ROOT = "http://localhost:8888/";
export const JIKNO_API_KEY = "qjkiqewrjkaslf";

export const POST_HEADERS = {
	method: "POST",
	mode: "cors",
	cache: "no-cache",
	credentials: "same-origin",
	headers: {
		"Content-Type": "application/x-www-form-urlencoded",
	},
	redirect: "follow",
	referrer: "no-referrer",
};
export const IMAGE_HEADERS = {
	method: "POST",
	mode: "cors",
	cache: "no-cache",
	credentials: "same-origin",
	headers: {
		'Content-Type': 'multipart/form-data'
	},
	redirect: "follow",
	referrer: "no-referrer",
};