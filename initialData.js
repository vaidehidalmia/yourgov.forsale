var width = window.innerWidth,
    height = window.innerHeight,
    nodes, links;

var LINK_TYPE = {
    Business: {
        name: "business",
        color: "#8FD5A6"
    },
    Political: {
        name: "political",
        color: "#FC7753"
    },
    Personal: {
        name: "personal",
        color: "#EB5160"
    }
}

nodes = {
    "United States": {
        "name": "United States",
        "USA": true,
        "index": 1,
        "x": width * 0.75,
        "y": height * 0.7,
        "image": "american-flag.png"
    },
    "Russia": {
        "name": "Russia",
        "USA": false,
        "index": 2,
        "x": width * 0.85,
        "y": height * 0.3,
        "image": "russia-flag.png"
    }
}

links = [

  {
    "source": nodes["United States"],
    "target": nodes["Russia"],
    "linknum": 1000,
    "confirmed": true
  },
  {
    "source": nodes["Russia"],
    "target": nodes["United States"],
    "linknum": 1000,
    "confirmed": true
  },
  {
    "source": nodes["United States"],
    "target": nodes["Russia"],
    "linknum": 0,
    "confirmed": true
  },
  {
    "source": nodes["Russia"],
    "target": nodes["United States"],
    "linknum": 0,
    "confirmed": true
  },
  {
    "source": nodes["United States"],
    "target": nodes["Russia"],
    "linknum": 30,
    "confirmed": true
  },
  {
    "source": nodes["Russia"],
    "target": nodes["United States"],
    "linknum": 30,
    "confirmed": true
  },
  {
    "source": nodes["United States"],
    "target": nodes["Russia"],
    "linknum": 60,
    "confirmed": true
  },
  {
    "source": nodes["Russia"],
    "target": nodes["United States"],
    "linknum": 60,
    "confirmed": true
  }
];