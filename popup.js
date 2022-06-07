window.addEventListener("load", async function() {
    (async() => {
        let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: f,
        });
    })()

    document.getElementsByTagName("button")[0].addEventListener("click", async() => {

        let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: a,
        });

        function a() {
            if (document.getElementById("meadta")) {
                const meadta = document.getElementById("meadta")
                meadta.innerHTML = "REQUEST-STOP"
                console.log(true)
            }
        }
    })
})

function f() {
    function sendClientMessage(txt) {
        const ele = document.createElement("div")
        ele.className = "chat-line__message"
        ele.innerHTML = `<img class="chat-badge" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAIAAADYYG7QAAAEX0lEQVRYhc2Zb0wbZRzHf+1zvbZc2VqytYxJ3WgKG44SSGGKM4shkFB9A5vD4DBhSxBcNhMkGjVRF32DYIwxEXyhvFCzaMgSEyER3Av2p2Yi6mBxzO744zDAoevK9X/ver7oUsu/3tO7pt33zeWe53e/+9zvvs/v+qSKmgvN8DCJiB32ULsd+4+mK+mSb3Vkbhw/XkdSlcbSy4sT/wPlU7tPHToenvpdPg0y5dP6f1MCevdwxy33wjqgmNzdZ+UD6VpPwdPV+PHNJY4n9lbdci/ETpXyCeTIath3ruLFxBFiu9AMSEdSHz3VJbh/SRzMZoXee/wlPZkTufFK4mDWKtRc4qguqOYmTwPHJo5np0Ix6/Cz/VH3xIapLADFrcPP9m+ezQLQltaJK9Me2s46cWW0QkmskwWg5NbJAlBy68SVIQ+JWieuTFQIxzpxya0QWV5B2irWZbRYVYQqfoppHblAZHkFcbw193AVADBr0WWPEJ+yFaL9ABef/ewb13fDc+MPrPOziHWkAyFTvvb189Sh0qm7/NhIwPkn5w0JG2IsRlRXpj1ddrK9rEVDEDjWkQikrW/QnOleZFH/Bf/UX9x2YTTD05f4r64qTh5RN9ohvK+LYNsxmVIwtba+YUf3m+O0onPQl4QmLm9IGLgUfHnQB7qDQuXXQOSmEyhG8+FIoG84gHlJTDTDdwz6l0J7MZmwgAiLVXOme+xmZHQ6khJNTCue6Affh3m1GYrfSg8QOvvGIotSrU2iaIbvHQ6SBQ6loUoukLa+QV9q7RsOSqaJyenipu7y0YM9coGijud+cnE0w8sEAoCBH4Nkzq7kRRIBQqZ8fal1dDosnwYAaIafZfiw6XnpQGR5hT8UdbrEFzmmRqcjCoNdOhBYS+8wGxuxHNFMVEsZkqx/EaCo9TGcHoiv2RUeAJS5ByQCpV2bP3wblOW9/WaJA1FqRRrvpxPLJgKkmrxqMaH08UCRCQGA9F0Hv7JkK0Sij4WvGivh8/ydJEAEKOi8AgA1xWnbCzxZTBD3r0kHErxe9vpEXRmZFhqbmTDuUCqXh6QDAQA39KWtENnMaShSZ606dG9KYGdkAYVv/MZen3jNoZbppEY7WWREStf7ycOw+lCg5209yXU/o5VMYzMTHbWaIP158vLgAgle71pXZ+UjgjQmixGdb9L4F8eUcx+LBuN2ao52BXreOWoR+tso084U+nujnfy0jYowl4mZV3HiU0gdcl5huzr2KNcG2qjWI+KWspmJ3haqo1YTWvhWe/sc5l1SWzsc7WLbW8hjL5xoOtFk1/0wHXG6uA0/B0w7leVmVFdG2goR+88MN9mrwNjSbw1k6PsE97rZ22pDXn3JrkZ7DgD4w8KdlahODUVGBAARTuBCboFd1SEvFHUi6EyeTJF7AGB+HdCyb/WLm0NbvsA8rf7R3IKt8ngg4EFBpFVpSKXKmKcCANd9Px/lVwP3XO553GcDAJj/lfnjAdzD9vfUf56Arrxun6qCAAAAAElFTkSuQmCC" style="width: 20px;">
        <b style="color:#ea62a6;">Chrome Extension: </b>${txt}`
        ele.style.background = "#00aa0090"
        document.getElementsByClassName("Layout-sc-nxg1ff-0 aleoz chat-scrollable-area__message-container")[0].appendChild(ele)
    }

    if (document.getElementById("meadta")) {
        const meadta = document.getElementById("meadta")
        const dta = JSON.parse(meadta.innerHTML)
        console.log(dta)
        sendClientMessage(`This extension has claimed ${dta.timeClaimes} bonuses this session`)
    } else {
        sendClientMessage("I am on &#128553;")
        var meadta = document.createElement("div")
        meadta.id = "meadta"
        meadta.style.display = "none"
        meadta.innerHTML = `{"timeClaimes":0}`
        document.body.appendChild(meadta)
        let count = 0
        const x = setInterval(() => {
            if (meadta.innerHTML == "REQUEST-STOP") {
                sendClientMessage("ara~ ara~ sayonara")
                meadta.parentNode.removeChild(meadta)
                clearInterval(x)
            }
            if (document.getElementsByClassName("Aqzax")[0].children[0].children[0] &&
                document.getElementsByClassName("Aqzax")[0].children[0].children[0].children[0]) {
                count += 1
                document.getElementsByClassName("Aqzax")[0].children[0].children[0].children[0].children[0].click()
                sendClientMessage("Bonus Claimed")
                meadta.innerHTML = `{"timeClaimes":${count}}`
            }
        }, 1000);
    }
}