// Dom
const GREEN = "#86efac";
const DIMMED = "#e2e8f0";
const _array = document.getElementById("array");
const _arrayLength = document.getElementById("options__length");
const _arraySubmit = document.getElementById("options__submit");


class BinarySearch {
    static search(array, target) {
        let start = 0;
        let end = array.length - 1;
        let middle = Math.round((end - start) / 2);

        console.log(middle)

        array[middle].style.backgroundColor = GREEN;
        array[middle].style.boxShadow = `0 0 2.4rem ${GREEN}`;

        for (let i = 0; i < array.length; i++) {
            setTimeout(() => {
                if (target == middle) { return "Found it!" }
                console.log(middle);
    
                if (target > middle) {
                    start = middle;
                    middle = Math.round((end - start) / 2);
                }
                if (target < middle) {
                    end = middle;
                    middle = Math.round((end - start) / 2);
                }
    
                if (i >= 10) { return "Passou de 10 tentavias." }
            }, 1000);

        }
    }
}

const ArrayRenderer = {
    render: (size) => {
        for (let i = 0; i < size; i++) {
            const _card = document.createElement("div");
            _card.classList.add("array__element");
            _card.setAttribute("content", i);
            _card.textContent = i;
            _array.appendChild(_card);
            console.log("run")
        }
    },
    flush: async () => {
        let _elements = document.querySelectorAll(".array__element");
        if ( _elements.length == 0 ) { return; }
         _elements.forEach(element => {
            setTimeout(() => {
                element.remove();
            }, 100);
        });
    }
}

_arrayLength.value = 5;

_arrayLength.addEventListener("keydown", (e) => {
    if (e.code != "Enter") { return; }

    ArrayRenderer.flush();
    ArrayRenderer.render(_arrayLength.value);
    let _elements = document.querySelectorAll(".array__element");
    BinarySearch.search(_elements, 5);
})

_arraySubmit.addEventListener("click", () => {
    ArrayRenderer.flush();
    ArrayRenderer.render(_arrayLength.value);
    let _elements = document.querySelectorAll(".array__element");
    console.log(BinarySearch.search(_elements, 5));
})