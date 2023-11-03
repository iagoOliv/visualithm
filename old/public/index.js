// Dom
const _array = document.getElementById("array");
const _arrayLength = document.getElementById("options__length");
const _arraySubmit = document.getElementById("options__submit");
const _arrayTarget = document.getElementById("options__input");
const _arraySearch = document.getElementById("options__search");

class BinarySearch {
    static async search(array, target) {
        let start = 0;
        let end = array.length - 1;
        let middle = Math.round((end + start) / 2);
        array[middle].setAttribute("isMiddle", true);

        if (target > end || target < start) {
            Notification.trigger("Out of range!")
            return;
        }

        for (let i = 0; i < end; i++) {
            if (target > middle) {
                start = middle;
                array[middle].setAttribute("isMiddle", false);
                middle = Math.round((start + end) / 2);
                array[middle].setAttribute("isMiddle", true);
            } else if (target < middle) {
                end = middle;
                array[middle].setAttribute("isMiddle", false);
                middle = Math.round((start + end) / 2);
                array[middle].setAttribute("isMiddle", true);
            } else {
                array[middle].setAttribute("isMiddle", true);
                return;
            }
            ResultRenderer.render(i + 1)

            // Cria uma promessa setTimeout
            await Timer.stop(1000)

            console.log(`Target: ${target} | Middle: ${middle} | Start: ${start} | End: ${end}`);
        };
    }
}

class Notification {
    static trigger(string) {
        alert(string);
    }
}

class Timer {
    static async stop(ms) {
        await new Promise(resolve => setTimeout(resolve, ms))
    }
}

const ResultRenderer = {
    render: (i) => {
        let _currentResult = document.querySelectorAll(".result")
        if (_currentResult.length >= 1) { _currentResult[0].remove(); }

        const _result = document.createElement("div");
        _result.classList.add("result");
        _result.textContent = i;
        document.body.appendChild(_result);
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
        }
    },
    flush: async () => {
        let _elements = document.querySelectorAll(".array__element");
        if ( _elements.length == 0 ) { return; }
        _elements.forEach(element => {
            element.remove();
        });
    }
}

_arrayLength.value = 10;
_arrayTarget.value = 5;


_arraySubmit.addEventListener("click", (e) => {
    ArrayRenderer.flush();
    ArrayRenderer.render(_arrayLength.value);
})

_arraySearch.addEventListener("click", (e) => {
    let _elements = document.querySelectorAll(".array__element");
    BinarySearch.search(_elements, _arrayTarget.value);
})