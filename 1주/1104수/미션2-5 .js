let data = [{
        "id": 1,
        "name": "Yong",
        "phone": "010-0000-0000",
        "type": "sk",
        "childnode": [{
            "id": 11,
            "name": "echo",
            "phone": "010-0000-1111",
            "type": "kt",
            "childnode": [{
                    "id": 115,
                    "name": "hary",
                    "phone": "211-1111-0000",
                    "type": "sk",
                    "childnode": [{
                        "id": 1159,
                        "name": "pobi",
                        "phone": "010-444-000",
                        "type": "kt",
                        "childnode": [{
                                "id": 11592,
                                "name": "cherry",
                                "phone": "111-222-0000",
                                "type": "lg",
                                "childnode": []
                            },
                            {
                                "id": 11595,
                                "name": "solvin",
                                "phone": "010-000-3333",
                                "type": "sk",
                                "childnode": []
                            }
                        ]
                    }]
                },
                {
                    "id": 116,
                    "name": "kim",
                    "phone": "444-111-0200",
                    "type": "kt",
                    "childnode": [{
                        "id": 1168,
                        "name": "hani",
                        "phone": "010-222-0000",
                        "type": "sk",
                        "childnode": [{
                            "id": 11689,
                            "name": "ho",
                            "phone": "010-000-0000",
                            "type": "kt",
                            "childnode": [{
                                    "id": 116890,
                                    "name": "wonsuk",
                                    "phone": "010-000-0000",
                                    "type": "kt",
                                    "childnode": []
                                },
                                {
                                    "id": 1168901,
                                    "name": "chulsu",
                                    "phone": "010-0000-0000",
                                    "type": "sk",
                                    "childnode": []
                                }
                            ]
                        }]
                    }]
                },
                {
                    "id": 117,
                    "name": "hong",
                    "phone": "010-0000-0000",
                    "type": "lg",
                    "childnode": []
                }
            ]
        }]
    }]
    // const data = require('./미션2-5.js')

let list = [];

function findValues(obj) {

    for (let i in obj) {
        if (obj[i].type == "sk") { //parent node 탐색
            list.push(obj[i].name);
        }
        if (obj[i].childnode.length !== 0) { //child node를 탐색 //0이 아닐때 탐색, 0이면 탐색 멈춤
            findValues(obj[i].childnode); //재귀 //findValues에 obj가 obj[i].childnode 넣고 함수실행
        }
    }
}
findValues(data);
console.log(list);

// 자바스크립트에서 for...in 문은 객체의 프로퍼티를 순회하는 데 사용된다. 

//[{}] // {}가 i가 되고 obj는 []