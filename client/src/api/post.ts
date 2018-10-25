import "whatwg-fetch";

// 将对象拼接成 key1=val1&key2=val2&key3=val3 的字符串形式
function obj2params(obj: any) {
    let result = "";
    for (const item in obj) {
        if (obj.hasOwnProperty(item)) {
            result += "&" + item + "=" + encodeURIComponent(obj[item]);
        }
    }

    if (result) {
        result = result.slice(1);
    }

    return result;
}

// 发送 post 请求
export function post(url: string, paramsObj: object) {
    return fetch("http://localhost:3000" + url, {
        method: "POST",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: localStorage.getItem("token") ? "Bearer " + localStorage.getItem("token") : ""
        },
        body: obj2params(paramsObj)
    });
}
