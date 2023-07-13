import type { QQNTim } from "@flysoftbeta/qqntim-typings";

export default class Entry implements QQNTim.Entry.Renderer {
    constructor(qqntim: QQNTim.API.Renderer.API) {
        console.log("[Template] Hello world!", qqntim);
    }
}
