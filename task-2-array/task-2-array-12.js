// 12) Отсортировать массив объектов по возрастающему количеству ног животных: 
//[ {kind: "tarantula", info: {legs: 8, eyes: 8}}, {kind: "french bulldog", info: {legs: 4, eyes: 2}}, {kind: "human", info: {legs: 2, eyes: 2}}, {kind: "lobster", info: {legs: 10, eyes: 2}},




let array = [{
            kind: "tarantula",
            info: {
                legs: 8,
                eyes: 8
            }
        }, {
            kind: "french bulldog",
            info: {
                legs: 4,
                eyes: 2
            }
        }, {
            kind: "human",
            info: {
                legs: 2,
                eyes: 2
            }
        }, {
            kind: "lobster",
            info: {
                legs: 10,
                eyes: 2
            }
        }];

        function sortLegs(arr) {
            arrSort = arr.sort((a,b) => a.info.legs - b.info.legs);
            return arrSort;
        }



        console.log(sortLegs(array));