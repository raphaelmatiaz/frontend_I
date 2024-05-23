
window.onload = () => {
    const webGallery = document.querySelector("web-gallery");
    webGallery.dataURL = "gallery_data.json";

}


/**
class WebGallery extends HTMLElement {

    static observedAttributes = ['data-url'];
    #galleryData;
    shadowRoot = null;
    constructor() {
        super();

        this.shadowRoot = this.attachShadow({ mode: 'closed' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {

        const imageContainer = this.shadowRoot.querySelector('#images-container');
        const item = itemTemplate.content.cloneNode(true);
        imageContainer.appendChild(item);

        this.shadowRoot.querySelector('#previous').onclick = () => {
            console.log('previous clicked');
        }

        this.shadowRoot.querySelector('#next').onclick = () => {
            console.log('next clicked');
        }

        this.shadowRoot.querySelector('#play-pause').onclick = () => {
            console.log('play pause clicked');
        }
    }


    attributeChangedCallback(attrName, oldVal, newVal) {
        switch(attrName) {
            case 'data-url':
            this.#loadData();
            break;
        }
    }

    async #loadData() {
        const req = await fetch(this.dataURL);
        this.#galleryData = await req.json();
        console.log(this.#galleryData)
    }
    
    set dataURL(value) {
        this.setAttribute('data-url', value);
    }
    get dataURL() {
        return this.getAttribute('data-url');
    }
}
*/