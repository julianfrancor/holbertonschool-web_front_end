#!/usr/bin/node

let roomDimensions = {
  width: 50,
  length: 100,
  getArea: function(){
    return (width * length)
  }
}

let boundGetArea = roomDimensions.getArea.bind(roomDimensions)
