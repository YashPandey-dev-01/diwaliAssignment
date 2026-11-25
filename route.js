const findRoute = function (connections, route, start, destination) {
  let cityPos;
  for (const connection of connections) {
    if (connection.city === start) {
      cityPos = connections.indexOf(connection);
      break;
    }
  }


}


const connections = [
  {
    city: "Mumbai",
    connections: ["Bangalore", "New Delhi"],
  },
  {
    city: "New Delhi",
    connections: ["Bangalore", "Mumbai", "Kolkata"],
  },
  {
    city: "Bangalore",
    connections: ["Chennai", "Mumbai"],
  },
  {
    city: "Kolkata",
    connections: ["Shillong"],
  },
  {
    city: "Shillong",
    connections: ["Guwahati"],
  },
];

const route = [];
findRoute(connections, route, "Mumbai", "Guwahati");