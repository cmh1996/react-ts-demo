//获取屏幕宽高
export function getClientSize(): object {
	const h = window.innerHeight;
	const w = window.innerWidth;
	return {
		width: w,
		height: h
	};
}

//转换为XX万数字
export function convertUnit(num: number): string {
	if (num < 10000) {
		return num + "";
	} else {
		return Number(num / 10000).toFixed(1) + "万";
	}
}

//unicode转中文
export function decode(unicode: string): string {
	return unicode.replace(/&#(\d+);/g, (match, dec) => {
		return String.fromCharCode(dec);
	});
}

//准化为00:00这种格式
export function convertTime(seconds: number): string {
	return [parseInt(((seconds / 60) % 60) + "", 10), parseInt((seconds % 60) + "", 10)]
		.join(":")
		.replace(/\b(\d)\b/g, "0$1");
}

//数组乱序
export function shuffle(arr: any[]): any[] {
	for (let i = arr.length - 1; i >= 0; i--) {
		const randomIndex = Math.floor(Math.random() * (i + 1));
		const itemAtIndex = arr[randomIndex];
		arr[randomIndex] = arr[i];
		arr[i] = itemAtIndex;
	}
	return arr;
}
