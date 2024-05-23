// const template = document.createElement("template");
// template.innerHTML = `
//     <slot></slot>
//     <p></p>
// `;

// class WordCounter extends HTMLElement {

//     shadowRoot = null;
//     constructor() {
//         super();
//         this.shadowRoot = this.attachShadow({ mode: "open" });
//         this.shadowRoot.appendChild(template.content.cloneNode(true));

//         this.innerText = 'Shadow DOM paragraph';
//     }

//     get innerText() {
//         return this.shadowRoot.querySelector("p").innerText;
//     }
//     set innerText(text) {
//         this.shadowRoot.querySelector("p").innerText = text;
//     }

//     connectedCallback() {
//         console.log('connectedCallback');
//     }
// }
// customElements.define("word-counter", WordCounter);



// class WordCounter extends HTMLParagraphElement {
//   constructor() {
//     super();
//   }

//   connectedCallback() {
//     this.textContent = "This is a custom paragraph element!";
//   }

//   get numWords() {
//     return this.innerText.split(/\s+/g).length;
//   }
// }
// customElements.define('word-counter', WordCounter, { extends: 'p' });


// window.onload = () => { 
//     const wordCounter = document.querySelector("p");
//     wordCounter.innerText = "Hello World! qweqwe";
//     console.log(wordCounter.numWords);
// }


// class WordCounter {

//     #view;

//     constructor() {
//         this.#view = document.querySelector(".word-counter");
//     }

//     get numWords() {
//         return this.innerText.split(" ").length;
//     }

//     set innerText(text) {
//         this.#view.querySelector("p").innerText = text;
//     }
//     get innerText() {
//         return this.#view.querySelector("p").innerText;
//     }
// }

class WordCounter extends HTMLElement {

    static observedAttributes = ["name"];

    innerText;

    constructor() {
        super();
        console.log("component constructed");

        console.log(WordCounter.observedAttributes);
    }

    get numWords() {
        return this.querySelector("p").innerText.split(" ").length;
    }

    createElement(tag, content) {
        const elem = document.createElement(tag);
        this.appendChild(elem);

        elem.innerText = content;
        console.log(elem.innerText);
    }

    createAudio(url){
        const audio = document.createElement("audio");
        audio.src = url;
        audio.controls = true;
        this.appendChild(audio);
    }

    connectedCallback() {

        // this.observedAttributes = ["name"];
        console.log("Custom element added to page.");
    }

    disconnectedCallback() {
        console.log("Custom element removed from page.");
    }

    adoptedCallback() {
        console.log("Custom element moved to new page.");
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`Attribute ${name} has changed.`);
    }

    static getValue() {
        return "Hello Worssssld!";
    }
}
customElements.define('word-counter', WordCounter);
 
window.onload = () => { 

    const wordCounter = document.querySelector("word-counter");
    console.log(wordCounter.numWords);

    wordCounter.setAttribute("name", "changed");    
    // wordCounter.setAttribute("name", "chenged");
    // wordCounter.createElement("label", "Hello Worldz!");
    // wordCounter.createAudio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3");

    // document.body.removeChild(document.querySelector("word-counter"));
}