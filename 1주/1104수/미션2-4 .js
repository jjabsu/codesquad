let data = {
    "debug": "on",
    "window": {
        "title": "Sample Konfabulator Widget",
        "name": "main_window",
        "width": 500,
        "height": 500
    },
    "image": {
        "src": "Images/Sun.png",
        "name": "sun1",
        "hOffset": 250,
        "vOffset": 250,
        "alignment": "center"
    },
    "text": {
        "data": "Click Here",
        "size": 36,
        "style": "bold",
        "name": "text1",
        "hOffset": 250,
        "vOffset": 100,
        "alignment": "center",
        "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
    }
}

let list = []

function findNumber(obj) {

    for (let i in obj) {
        if (typeof (obj[i]) === 'number') {
            list.push(i) //넘버랑 일치하면 넣어줌
        } else if (typeof (obj[i]) === 'object') {
            findNumber(obj[i]); //넘버랑 일치하지않는것들은 다시한번
        }
    }
}

findNumber(data)



console.log(list)