export default class GalleryModel {
    #modelData;
    constructor() {

    }

    async initialize(url) {
        const storageData = JSON.parse(localStorage.getItem("web-gallery"))
        if (storageData) {
            this.#modelData = storageData
        } else {

        const req = await fetch(url);
        this.#modelData = await req.json();
        }
        

        window.localStorage.setItem("web-gallery", JSON.stringify(this.#modelData))
        const test = JSON.parse(localStorage.getItem("web-gallery"))
        console.log(test)
    }

    addItem(item) {
        this.#modelData.push(item)
        localStorage.setItem("web-gallery", JSON.stringify(storageData));
    }

    updateItem(index, item) {

        console.log('update', item)
    }

    get data() {
        return this.#modelData
    }


}