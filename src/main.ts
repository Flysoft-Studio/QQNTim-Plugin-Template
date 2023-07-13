import type { QQNTim } from "@flysoftbeta/qqntim-typings";

export default class Entry implements QQNTim.Entry.Main {
    constructor(qqntim: QQNTim.API.Main.API) {
        console.log("[Template] Hello world!", qqntim);
    }
}
