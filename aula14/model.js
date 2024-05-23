export default class GalleryModel {

    #modelData;
    #dataURL;
    constructor() {

    }

    async initialize(url) {

        this.#dataURL = url;
        const storageData = JSON.parse(localStorage.getItem("web-gallery"));
        if(storageData) {
            this.#modelData = storageData;
        } else {
            const req = await fetch(this.#dataURL);
            this.#modelData = await req.json();
        }
        this.#updateLocalStorage();
    }

    addItem(item) {
        this.#modelData.push(item);
        this.#updateLocalStorage();
    }
    updateItem(index, item) {

        this.#modelData[index] = item;
        this.#updateLocalStorage();
    }

    deleteItem(index) {
        this.#modelData.splice(index, 1);
        this.#updateLocalStorage();
    }

    reset() {
        localStorage.removeItem("web-gallery");
        this.initialize(this.#dataURL);
    }

    #updateLocalStorage() {
        localStorage.setItem("web-gallery", JSON.stringify(this.#modelData));
    }

    get data() {
        return this.#modelData;
    }
}