import * as qqntim from "qqntim/renderer";

export default class Entry implements QQNTim.Entry.Renderer {
    constructor() {
        console.log("[Template] Hello world!", qqntim);
    }
}
