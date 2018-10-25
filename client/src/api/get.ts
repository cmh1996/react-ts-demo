import "whatwg-fetch";

export function get(url: string) {
    return fetch("http://localhost:3000" + url, {
        headers: {
            Authorization: localStorage.getItem("token") ? "Bearer " + localStorage.getItem("token") : ""
        }
    });
}
