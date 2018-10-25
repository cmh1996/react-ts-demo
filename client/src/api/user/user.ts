import { get } from "../get";

export function currentUser(id: string) {
    const result = get("/api/user/data?id=" + id);
    return new Promise((resolve, reject) => {
        result
            .then((res) => {
                if (res.status === 200) {
                    return res.json();
                } else {
                    reject(res.status);
                }
            })
            .then((json) => {
                if (json.code === 0) {
                    resolve(json.data);
                } else {
                    reject(json.message);
                }
            })
            .catch((e) => {
                reject(e.toString());
            });
    });
}
