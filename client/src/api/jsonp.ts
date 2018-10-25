import originJSONP from "jsonp";

export default function(url: string, data: object, option: object) {
    url += (url.indexOf("?") < 0 ? "?" : "&") + param(data);
    return new Promise((resolve, reject) => {
        originJSONP("http://localhost:3000" + url, option, (err: any, data: any) => {
            if (!err) {
                resolve(data);
            } else {
                reject(err);
            }
        });
    });
}

// 拼接参数到url上
function param(data: any) {
    let url = "";
    for (const key in data) {
        if (data.hasOwnPorperty(key)) {
            const val = data[key] !== undefined ? data[key] : "";
            url += `&${key}=${encodeURIComponent(val)}`;
        }
    }
    return url ? url.substring(1) : "";
}
