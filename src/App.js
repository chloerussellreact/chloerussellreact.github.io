import "./App.css";
import { useRef, useEffect, useState } from "react";

function App() {
  const [gameState, setGameState] = useState("face");
  const [bodyTypes, setBodyType] = useState([
    {
      id: 1,
      image: "images/bodytype1_lines.png",
      color: "M97.1,134.2c3.7-21.4,12.7-37,33-48.7c11.9-7.9,27.7-10.1,45.6-9.2c23.4-1.8,39.8,1.3,49,9.5l20.4,11.6l15.3,16l9.9,26.2c1.9,8.7,2.6,17,0,23.9l-5.8,18c-1.8,5.6-0.1,12.4,2,19.4l-5.1,20.1c-4.3,8.1-9.3,15.5-16,20.8c-7.2,5.5-15.3,9.8-24.5,12.5l-17.4-0.6l-3.7,1.4l2,21.4l19.4,18.4l26.9,10.2l8.5,1.7l13.6,6.5l14.6,10.6l9.5,13.3l7.1,17.4l11.2,18.7l7.1,9.5l2,4.3l0.1-17.9v-13.6l0.6-14l-1.5-14.3l-1.2-15.7l-1.4-3.6c-6.4-0.7-10.1-3.2-13.1-6.3l-6.5-6.5l-6.3-7.5l-9.9-8.9l-8.1-4.9l0-4.3l2.7-3.1l6.1-2l11.2,5.4l8.9,2l4.1-1.4l3.1-5.8l-0.9-8l-1.2-6.3c-3.7-21.3-4.3-39.8-2.4-56l0.3-4.2l4.8-1.4l4.1,3.1c-0.2,12.2,0.7,25.1,4.8,39.7l0.7,8.5l4.1,1.9l2.7-3.1l3.1-33.7l3.4-19.4c1.5-4.1,3.6-5.5,6.3-4.7c1.9,3.1,3.4,6,3.6,8.1l-4.4,46.3v7.8l2.7,1c6-2.5,6.3-10.9,7.1-18.8l8.9-23.4l3.4-5.8l3.4-0.3l3.7,3.4l-3.1,12.3l-3.7,13.9l-3.1,14.1l-1.4,6.8l3.1,1.4l8.2-7.1l11.7-16.5l4.5-3.6l1.9,0.6v4.5l-11.9,21.2l-2.4,8.9L362,303l0.3,11.2l0.7,5.1l-1.2,7l4.3,28.9l3.2,23.3l3.6,13.6l3.5,22.3l7,44.8l-2.4,14.5l-4.4,17.5l-8.9,9.5l-11.3,2.1l-10.2-2.1l-17-18.4l-16.7-15.3l-6.8-9.2l-12.6-16.3l-6.8-9.2l-12.6-14l-6.5-2.7l1.7,44.9l4.4,42.9l6.5,24.5c3.9,12.1,7.3,23.4,4.8,26.5l5.1,38.4l2.2,63.3c-2.4,33.2-8.9,78.5-15.8,125l-16.1,68.8l-4,29.3l-12.6,32.7l-6.1,4.1c-10.8,41.7-19.8,86.8-27.6,134.4l1.3,13.4l2.8,10.6l49,34.1l23.5,11.9l13.6,6.1l3.1,4.8l-2.6,5.8l-11.2,5.4l-33.2-1.5l-40.6,3.1l-35.6-1.8l-17.4-6.1c-5.4-1.2-6.8-5.9-8.2-10.6l2.6-26.5c5.9-22.1,7.3-42.9,1.1-61.4l-2.9-91.1l2.6-30.6l9.2-22.6l7.9-15.7l7.7-13.8l0.1-47.2l3.1-53.5l3.4-25.9l2.6-28.3l0.8-25l0.9-5.3l-4.1,22.8L171,752.8l-8.5,32l-4.1,16.3l-2.7,14l-7.9,19.7l-6.1,13.8l-4.3,9.7l-9.5,17.4l-1.8,30.6l-2,22.3L108.3,974l-9.2,23.2l-7.8,27.9l-3.6,35.7l1.2,29.9l2,32.7l-1.7,15c1.6,5,0.1,7.5-3.3,8.3l-18.8-0.3l-31.3,2.6l-22.1-3.4l-7.9-3l-1-9.2l21.6-27.4c8.9-10.6,14.2-20.2,13.1-27.8l3.1-23.2l-0.7-43.2l1.7-50.5l0.8-26.5l3.4-32l7.2-28.4l8.7-17l3.8-9.2l8.2-19.7l2.4-22.8l-0.7-26.2L79,747l1.4-22.5l2.4-25.5l2.7-16.3l1-27.7l1.9-28.4l10.4-55.2l10.2-18.4l16-38.8c3.1-5.5,5.5-10.9,2-16l-3.4-26.5l-3.8-25.3l-4.1-16.2l-1.4-5.5l-3.1,24.9l-4.4,27.2l-4.4,37.1c1,11.8-4.1,26.6-11.9,42.9L77,590.4c-5.1,8.2-9.4,20.4-12.8,37.1l2,16.5l2.9,15.8l6.5,12.9c3.2,7.3,4.1,17.1,3.1,28.9l0.3,16.7c-3.7,1.1-6.9,0.6-9.2-3.4l-3.1-5.5l-3.7-17.4l-3.1-1l-1.4,6.5l-0.3,3.7l0.3,8.8l1.4,11.2l3.7,9.9l4.1,6.8l1.4,4.1l1,6.5l-0.7,3.1l-2.7,2.4l-7.7-5.4l-5.6-3.8l-4.8-1.4l-3.1-1.7l-3.3-2.9l-5.9-2.2l-4.4-3.1l-2.9-2.7l-5.1-6.5c-3.6-10.5-6.1-20-2.9-29l4.3-20.7l0.9-32.7l3.3-18.7l0.7-30.3l4.4-36.4l2.4-8.9l7.8-15.3l7.2-18l5.1-11.2l1.4-20.1l-2.3-18.7l2-21.5l-3.8-19.9l-2.7-22.3l-1-24.2l2.4-18.7l4.4-9.9l6.5-14.6l8.2-7.8l32.7-19.7c14.8-9.6,26.5-20.1,32.3-32l0.4-28.3l-2-17l-11.4-13l-8.7-17.7c-5.3,7.3-20.9-2.2-22.8-16.5l-4.1-8.8l3.7-12.8l4.9-8.5"
    },
    {
      id: 2,
      image: "images/bodytype2_lines.png",
      color: "M96.4,151.7l-4.9,8.5L88.7,173l3.1,8.8c1.9,14.3,17.5,23.8,22.8,16.5l8.7,17.7l9.3,10.5l-0.4,18.8l-3.9,28.9c-5.8,11.9-12.2,21.3-27.1,31L66.1,325l-9.5,9.5L47,347.5l-3.7,12.6l-3.4,19.7l0.7,26.5l0.3,22.8l2,16.7l2.4,20.4l0.7,19.4l-0.3,15l-3.5,15.7l-7.2,15l-4.4,16.3l-3.4,9.5l-5.8,21.5l2.4,40.8l1.4,23.1l-4.8,31.3l-1.4,21.1c-3.2,9,0.3,19.4,3.9,30l5.1,6.5l2.9,2.7l4.4,3.1l5.9,2.2l3.3,2.9l3.1,1.7l4.8,1.4l5.6,3.8l7.7,5.4l2.7-2.4l0.7-3.1l-1-6.5l-1.4-4.1l-4.1-6.8l-3.7-9.9l-1.4-11.2l-0.3-8.8l0.3-3.7l1.4-6.5l3.1,1l3.7,17.4l3.1,5.5c2.3,4,5.5,4.5,9.2,3.4l-0.3-16.7c1-11.8,0.2-21.7-3.1-28.9l-6.5-12.9l-2.9-15.8l-2-16.5c3.4-16.8,7.7-29,12.8-37.1l13.6-33.7c7.8-16.3,12.9-31.1,11.9-42.9l4.4-37.1l4.4-27.2l-0.3-2.3l2.7,8.1l1.7,10.5l1.7,12.9l-1.4,23.8c-2.4,8.5-2,21.8-5.1,27.2l-6.1,22.8l-3.8,18.7L89.4,628l-3.9,27.4l-1,27.7l-2.7,16.3L79.4,725L78,747.5l-1.7,32.4L77,806l-2.4,22.8l-8.2,19.7l-3.8,9.2l-8.7,17l-7.2,28.4l-3.4,32l-0.8,26.5l-1.7,50.5l0.7,43.2l-3.1,23.2c1,7.6-4.3,17.1-13.1,27.8l-21.6,27.4l1,9.2l7.9,3c8,3.2,15.6,5,22.1,3.4l31.3-2.6l18.8,0.3c3.4-0.8,4.9-3.4,3.3-8.3l1.7-15l-2-32.7l9.2-33.7l10.9-33.4l6.8-27.2l10.2-25.2l11.4-39l8.2-30.3l-0.2-20.3l1.4-15l7.8-15.7l11.2-20.8l4.4-17l5.4-16.3l2-12.6l5.8-21.1l5.5-25.9l-3.4,25.9l-3.1,53.5l-0.1,47.2l-7.7,13.8l-7.9,15.7l-9.2,22.6l-2.6,30.6l2.9,91.1c6.2,18.5,4.7,39.3-1.1,61.4l-2.6,26.5c1.4,4.7,0.3,9.8,5.7,11.1l15.1,5.4l40.3,2l31.4-2.4l36.8,2.9l14.9-3l4-8.7l-4.5-5.4l-11.5-7l-23.5-11.9c-18.6-11.9-37.2-23.7-40.5-34.7l-1-10.2l4.4-17c7.7-47.6,16.4-90.1,27.2-131.7l14.4-18.7l9.1-19.8l4.1-27.2l14.3-67.4c6.9-46.5,13.9-85.6,16.3-118.8l-1.7-64.3l-4.8-35.4c2.5-3.2-2.9-19.3-6.8-31.3l-6.5-25.2l-3.4-26.2l-2-13.6l1-16l-0.7-18.4l-0.7,13.6l13,16.3l11.2,11.9l19.1,18.7l11.8,8.1l15.7,1.8l11.3-2.1l8.9-9.5l4.4-17.5l2.4-14.5l-9-44.8l-2.6-18.9l-2.5-17l-3.2-23.3l-1-27.4l0.3-8.9l-1.4-6.9l-0.9-9.4l9.8-47.1l4.4-8.6l10.9-20.5l-1-5.5l-1.9-0.6l-4.5,3.6l-11.7,16.5l-5.8,7.8l-4.1-0.5l0-8.3l3.1-14.1l6.4-19.9l0.4-6.3l-3.6-1.7l-2.5-0.3l-3.4,5.8l-9.9,22.4c-0.8,7.9-1.6,9.8-5.6,19.4l-4.2-1.6l2-7.8c0.3-12.3,2.1-28.5,3.8-46.3c-0.2-2.2-2.1-3.1-4-6.2c-2.7-0.7-5.9,1.3-7.3,3.7l-3.4,18.4l-3.1,33.7l-2.7,3.1l-4.1-1.9l-0.7-8.5c-4.1-14.6-5-27.4-4.8-39.7l-4.5-1.9l-4.4,2.2l-0.3,2.2c-1.9,16.2-1.3,34.7,2.4,56l1.2,6.3l2,7.9l-2.9,6.8l-5.4,0.4l-8.9-2l-11.2-4.4l-6.1,1l-2.7,3.1l0,4.3l8.1,4.9l9.9,8.9l6.3,7.5l6.5,6.5c3,3,6.7,5.6,13.1,6.3l1.4,3.6l1.2,15.7l1.5,14.3l-0.6,14v13.6l-0.1,17.9l2-7.3L318,371l-8.5-17.4l-9.5-16.3l-10.9-16.3l-15.3-12.3l-14.3-4.1l-10.9-2l-28.2-7.2c-8.5-5-15.3-11-19.4-18.4l-2-21.4l6,0.7l15.1-1.4c9.2-2.7,17.3-7,24.5-12.5c6.7-5.2,11.7-12.6,16-20.8l5.1-20.1c-2.1-7-3.8-13.8-2-19.4l5.8-18c2.6-7,1.9-15.2,0-23.9l-9.9-26.2l-15.3-16l-20.4-11.6c-9.2-8.2-25.7-11.3-49-9.5c-17.9-0.9-33.7,1.3-45.6,9.2c-20.3,11.6-29.3,27.3-33,48.7"
    },
    {
      id: 3,
      image: "images/bodytype3_lines.png",
      color:"M95.8,133.8c3.7-21.4,12.7-37.1,33-48.7c11.9-7.9,27.7-10.1,45.6-9.2c23.4-1.8,39.8,1.3,49,9.5L243.8,97l15.3,16l9.9,26.2c1.9,8.7,2.6,17,0,23.9l-5.8,18c-1.8,5.6-0.1,12.4,2,19.4l-5.1,20.1c-4.3,8.1-9.3,15.5-16,20.8c-7.2,5.5-15.3,9.8-24.5,12.5l-15.1,1.4l-6-0.7l2,21.5c4.1,7.4,10.9,13.4,19.4,18.4c9.2,5,17.2,6,24.2,3.8l17.9,2.3l16.9,3.8l15.8,12l9,13l11.7,16.6l5.4,12l2,21.3l-2,7.3l0.1-17.9v-13.6l0.6-14l-1.5-14.3l1.6-14.7l-0.3-4.8c0-2.7-3.7-4.1-8.9-6.1l-3.7-7l-7.1-7.7l-11.8-8.2l-8.1-4.9l0-4.3l2.7-3.1l6.1-2l11.5,3.5l8.6,3.9l4.1-1.4l3.1-5.8l0.9-6l-2.9-8.3c-3.7-21.3-4.3-39.8-2.4-56l0.3-4.2l4.8-1.4l4,2c1.7,11,3.1,19.6,4.9,40.7l0.7,8.5l4.1,0.9l2.7-2.1l3.1-33.7l4.4-19.4c1.5-4.1,4-5.1,6.7-4.4c1.9,3.1,3.7,8.4,3.9,10.6l-5.2,43.6l-1,7.8l2.7,1c6-2.5,7.2-13.6,9.1-19.4l8.2-22.5l3.6-5.1l3.8,0.3l1.9,1.7l-3.1,12.3l-3.7,13.9l-3.1,14.1l-0.4,6.8l2.1,1.4c5.6-0.6,7.2-3.7,8.2-7.1l11.7-16.5l4.5-3.6l1.9,0.6l1.7,3.7l-13.7,22l-2.4,8.9l-9.1,48.3l-1.4,10.2l0.4,3.7l0.5,12.3l1.7,28.9l1.4,16.7l3.7,17l5.8,37.8l-0.4,28.6l-2.4,14.5l-4.4,17.5l-8.9,9.5l-11.3,2.1l-15.7-1.8l-11.1-5l-12.3-6.5l1.4,8.2l6.1,20.8c3.9,12.1,8.6,30.2,6.1,33.4v39.2l-7.5,72.5c-2.4,33.2-17.6,72-24.5,118.5L282,846.9l-6.9,29l-9.1,19.8l-14.4,18.7c-10.8,41.7-19.5,84.1-27.2,131.7l-4.4,17l1,10.2c3.3,11,22,22.9,40.5,34.7l23.5,11.9l11.5,7l4.5,5.4l-4,8.7l-14.9,3l-36.8-2.9l-31.4,2.4l-40.3-2l-15.1-5.4c-5.4-1.2-4.3-6.4-5.7-11.1l2.6-26.5c5.9-22.1,7.3-42.9,1.1-61.4l-2.9-91.1l2.6-30.6l9.2-22.6l7.9-15.7l7.7-13.8l0.1-47.2l-2.3-9.2l-14.4,22.8l-6.7,20.1l-5.1,17.7l-1.7,14.6l-1,20.8l-5.1,25.2l-16.3,43.6l-9.5,25.2l-11.3,26.2l-10.9,33.4l-9.2,33.7l2,32.7l-1.7,15c1.6,5,0.1,7.5-3.3,8.3l-18.8-0.3l-31.3,2.6c-6.5,1.6-14.1-0.2-22.1-3.4l-7.8-3l-1-9.2l21.6-27.4c8.9-10.6,14.2-20.2,13.1-27.8l3.1-23.2l-0.7-43.2l1.7-50.5l0.8-26.5l3.4-32l7.2-28.4l6.7-17l2.8-13l1.8-19.2l1.8-22l1.5-25l1-33.5l1.5-19.4v-23l3.1-20.9l2.6-26.3l2.8-33.5l13.5-48.3l12.1-84.5l-1.4,25c1,11.8-3.9,27.7-11.7,43.9l-10.5,32.2c-5.1,8.2-6.1,19-9.4,35.7l-3.1,17.1l-2.4,14.1l7.9,15.8c3.2,7.3,4.1,17.1,3.1,28.9l0.3,16.7c-3.7,1.1-6.9,0.6-9.2-3.4l-3.1-5.5l-3.7-17.4l-3.1-1l-1.4,6.5l-0.3,3.7l0.3,8.8l1.4,11.2l3.7,9.9l4.1,6.8l1.4,4.1l1,6.5l-0.7,3.1l-2.7,2.4l-7.7-5.4l-5.6-3.8l-4.8-1.4l-3.1-1.7l-3.3-2.9l-5.9-2.2l-4.4-3.1l-2.9-2.7l-5.1-6.5c-3.6-10.5-7.1-21-3.9-30l1.4-21.1l4.8-31.3l-1.4-23.1l-2.4-40.9l5.8-21.5l3.4-9.5l4.4-16.3l7.2-15l3.5-15.7l0.3-15L45,465.3l-2.4-20.4l-2-16.7l-0.3-22.8l-0.7-26.5l3.4-19.7l3.7-12.6l9.5-12.9l9.5-9.5l32.9-19.7c12.8-15.6,19-17.7,24.8-29.6c7-9.5,9.9-19.6,8.4-30.3l0.4-18.8l-9.3-10.5l-8.7-17.7c-5.3,7.3-20.9-2.2-22.8-16.5l-3.1-8.8l2.7-12.8l4.9-8.5"
    }
  ])
  const [clothingSize, setClothingSize] = useState("small");
  const [selectedBodyType, setSelectedBodyType] = useState("1");
  const [clothingItems, setClothingItems] = useState([
    {
      id: 43,
      category: "tops",
      name: "remove",
      image: "images/hair_2.png",
      thumbnail: "images/remove_thumbnail.png"
    },
    {
      id: 44,
      category: "bottoms",
      name: "remove",
      image: "images/hair_2.png",
      thumbnail: "images/remove_thumbnail.png"
    },
    {
      id: 45,
      category: "dresses",
      name: "remove",
      image: "images/hair_2.png",
      thumbnail: "images/remove_thumbnail.png"
    },
    {
      id: 46,
      category: "layers",
      name: "remove",
      image: "images/hair_2.png",
      thumbnail: "images/remove_thumbnail.png"
    },
    {
      id: 47,
      category: "socks",
      name: "remove",
      image: "images/hair_2.png",
      thumbnail: "images/remove_thumbnail.png"
    },
    {
      id: 48,
      category: "shoes",
      name: "remove",
      image: "images/hair_2.png",
      thumbnail: "images/remove_thumbnail.png"
    },
    {
      id: 49,
      category: "accessories",
      name: "remove",
      image: "images/hair_2.png",
      thumbnail: "images/remove_thumbnail.png"
    },
    {
      id: 42,
      category: "bangs",
      stage: "face",
      name: "bald!",
      image: "images/hair_2.png",
      thumbnail: "images/hair_2_thumbnail.png"
    },
    {
      id: 2,
      category: "hair",
      stage: "face",
      name: "bald!",
      image: "images/hair_2.png",
      thumbnail: "images/hair_2_thumbnail.png"
    },
    {
      id: 1,
      category: "hair",
      stage: "face",
      name: "hair one",
      image: "images/hair_1.png",
      thumbnail: "images/hair_1_thumbnail.png",
      color: "M183.1,67.6l-1.5,0l-8.9-5.6l-8.7-3.1l-6.9,1.3l-13.5,3.1l-8.9,4.3l-8.9,2.3l-5.6,1l-7.4-1.5l-8.2-3.1l-4.3-1.4c0.9,5,3.8,9.5,12.4,12.4c-11.4,0-19.2,2.9-25,7.4l-3.2,4l-3.3,8.8l-9.2,16.7c-9.7,5.9-19,8.1-26.8-3.4c-0.6,5.6-2.2,11.3,12.4,14.2c-7.7,6.8-12.6,15.6-14.2,26.8l-0.6,6.1c3.3,11.6,1.9,18.6-2.9,22.5c-5.6,4-9.6,8.8-9.3,16c1.6,4.7,4,8.2,10,6.3c-1.9-3.8-2.4-7.5-1.3-11.1c10.1,6.4,5.2,26.9-6.8,20.7c2.6,4,4.6,8.4,14.2,6c-5.6,9.2-8.2,16.8-5.1,21.1c5.4,3.1,10.6,6.2,10.5,11.6c-1.3,4.1-4.5,9.3-9.2,15.3c-4,6.3-5.2,13.1,0.6,21.2c1.3,5.5,0.1,8.7-4.5,8.7c6.5,2.1,11.4,0.7,12.6-8l8.8,5.5c4.4,3.1,2.8,7.9-3.1,14c-6,11.9-3.8,19.5,4.7,23.6c-1.5-6.8-0.6-11.5,2.3-14.4c0,5.9,1.3,11.8,5.6,17.6l5.6-6c0.6,3.9,1.9,7.5,5.2,10c2.1,2.7,2.3,5.3,0.1,7.8c2.6-1.3,5.3-3.3,8.4-8.2l4.3-5.2c2.6,4.6,6.5,8.1,12.4,9.6c3.1,5.5,2.6,9.1-6.6,8.2c5.2,4.7,11.2,6.6,20-1.3c2.1-4.7,4-8.9,5.4-10.7c1.9,1.4,4.5,4.4,7.9,10.1c0.1,2.4-1,5.6-4.7,10.7c7.2,2.6,13.9,1.6,19.3-8.2c-3.7-7-4.2-16,4.2-17.6c-0.4,0.3,1,2.8,7.5,12c1.8,5.4-1.2,8.7-8,10.5c7,1.1,14.3,0.8,23-8.6c0.3,17,16.1,22.1,23.9,8.3c-10.5,6.6-11-13.4-3.6-18.4c2.9,12.6,8.3,22.1,24.3,18.7c-10.5-13.5-4-22,8.3-28.9c0.6,4,1.4,7.6,3.6,8.7c-0.3,3.5-2.8,5.1-7.7,4.6c7.8,4.5,15.6,7.9,22.2-10.7c4.8,8.1,10,15.6,18,17.1c-6.1-11.3-4.6-20,5.4-26l14.2-7c-0.1,3.5-0.8,6.7-2.9,9.4c4.1,1.8,8.2,3.2,12.5-5.9c-2.3-3.8-4.6-7.7-2.6-12.5c5.7-1.4,8.6-4.4,7.7-9.4c-2.8-5-3.4-10.8-2.2-17.1c4.4,2.1,8.8,3,13-1.7c-5.6-0.6-8.7-3.2-7.3-10c2.5-3.6-1.1-6-5.5-8.2c-3.2-2.4-2.8-6.7-1.3-11.5c1.5,5.2,4.9,7.8,14.6,1.8c-6.9,1.7-10.8,0.6-7.1-7.7c2.1-3.7-1.4-4.6-6.8-4.7c-7.5-2.3-0.8-12.7,3.8-21.8c3.5-7.4,0.8-13.9-6.8-19.7c6.2-0.2,10.7-2.6,11.9-9.2c-14.6,10.5-16.6,0.1-6.5-17.1c-11.2,1.5-13.1-4.8-7.5-17.5c6.7-9,11.5-17.6,2.4-23.1c-4.4-5.3-10.4-9.6-17.5-13.1c4.3,0,8-0.7,10.7-2.9c-20.6,2.6-22.3-22.3-26.7-27.7c-5-7.3-15.1-9.2-25.4-10.7c6.1-3.3,8.1-7.8,7-13.1c-6,10.1-15.5,12.5-29.5,5.1C195.3,58.6,186.2,59.3,183.1,67.6z"
    },
    {
      id: 3,
      category: "eyes",
      stage: "face",
      name: "deer in headlights",
      image: "images/eyes_1.png",
      thumbnail: "images/eyes_1_thumbnail.png"
    },
    {
      id: 4,
      category: "eyes",
      stage: "face",
      name: "sleep deprivation",
      image: "images/eyes_2.png",
      thumbnail: "images/eyes_2_thumbnail.png"
    },
    {
      id: 5,
      category: "nose",
      stage: "face",
      name: "nose 1",
      image: "images/nose_1.png",
      thumbnail: "images/nose_1_thumbnail.png"
    },
    {
      id: 6,
      category: "eyes",
      stage: "face",
      name: "big beautiful doe eyes",
      image: "images/eyes_3.png",
      thumbnail: "images/eyes_3_thumbnail.png"
    },
    {
      id: 7,
      category: "eyes",
      stage: "face",
      name: "scary anime guy",
      image: "images/eyes_4.png",
      thumbnail: "images/eyes_4_thumbnail.png"
    },
    {
      id: 8,
      category: "eyes",
      stage: "face",
      name: "goth gf",
      image: "images/eyes_5.png",
      thumbnail: "images/eyes_5_thumbnail.png"
    },
    {
      id: 9,
      category: "eyes",
      stage: "face",
      name: "highly intelligent cupid",
      image: "images/eyes_6.png",
      thumbnail: "images/eyes_6_thumbnail.png"
    },
    {
      id: 10,
      category: "eyes",
      stage: "face",
      name: "max androgyny",
      image: "images/eyes_7.png",
      thumbnail: "images/eyes_7_thumbnail.png"
    },
    {
      id: 11,
      category: "eyes",
      stage: "face",
      name: "honk shoo",
      image: "images/eyes_8.png",
      thumbnail: "images/eyes_8_thumbnail.png"
    },
    {
      id: 12,
      category: "layers",
      stage: "clothing",
      name: "BIG sweater",
      small: "images/layer_1_small.png",
      medium: "images/layer_1_medium.png",
      large: "images/layer_1_large.png",
      thumbnail: "images/layer_1_thumbnail.png",
      fact: "this thrifted sweater is one of my favorite finds ever. it's obviously handmade and probably weighs twenty pounds. i rarely wash it because i'm afraid the ridiculous puffballs will fall off."
    },
    {
      id: 13,
      category: "bangs",
      stage: "face",
      name: "diy with safety scissors",
      image: "images/bangs_1.png",
      color: "M179.5,73.2c0,0-14.8-14.3-30.1-6.9c-15.3,7.4-16.9,6.4-20.9,0.3c-4.1-6.1,0-9.2,0-9.2s-12.8,14.3,1.5,25.3c0,0-6.9-6.4-17.9,13c0,0-11,23.2-28.1,17.6c0,0,1.5,9.2,14,10.7c0,0-11.5,0.3-13,19.9c-0.8,10.2-3.6,17.3-8.9,14.3c0,0,10,18.9,34-8.2c0,0,1.3,24.3,12,24c0,0-4.1-14,2-15.3c0,0,36,6.4,36.5-24.5c0,0,7.4,9.7,1,17.1c0,0,14.8-1.8,17.9-12.5c0,0,7.4,17.6,31.1,17.6c0,0-20.9-20.9,9.4-44.9c0,0,0,30.1-5.6,40.1c0,0,16.3,5.9,22.5-10.5s4.1-23.5,4.1-23.5s10.7,21.2-10.2,39.1c0,0,33.4,12,38-25c0,0,7.4,19.7-10.7,29.6c0,0,28.4,7,30.4-19.1c1.5-18.6-22.3-38.8-26.4-39.6c0,0,12.5-4.9,11.5-16.3c0,0-14.6,9.2-32.4-5.1S200.7,68.9,179.5,73.2",
      thumbnail: "images/bangs_1_thumbnail.png"
    },
    {
      id: 14,
      category: "nose",
      stage: "face",
      name: "slight hook",
      image: "images/nose_2.png",
      thumbnail: "images/nose_2_thumbnail.png"
    },
    {
      id: 15,
      category: "nose",
      stage: "face",
      name: "flat bridge",
      image: "images/nose_3.png",
      thumbnail: "images/nose_3_thumbnail.png"
    },
    {
      id: 16,
      category: "nose",
      stage: "face",
      name: "straight and small",
      image: "images/nose_4.png",
      thumbnail: "images/nose_4_thumbnail.png"
    },
    {
      id: 17,
      category: "eyebrows",
      stage: "face",
      name: "drawn on",
      image: "images/eyebrows_1.png",
      thumbnail: "images/eyebrows_1_thumbnail.png"
    },
    {
      id: 18,
      category: "eyes",
      stage: "face",
      name: "downturned",
      image: "images/eyes_9.png",
      thumbnail: "images/eyes_9_thumbnail.png"
    },
    {
      id: 18,
      category: "eyes",
      stage: "face",
      name: "spooky wonyoung lashes",
      image: "images/eyes_10.png",
      thumbnail: "images/eyes_10_thumbnail.png"
    },
    {
      id: 19,
      category: "eyebrows",
      stage: "face",
      name: "inoffensive yet ungroomed",
      image: "images/eyebrows_2.png",
      thumbnail: "images/eyebrow_2_thumbnail.png"
    },
    {
      id: 20,
      category: "eyebrows",
      stage: "face",
      name: "bushy brows!",
      image: "images/eyebrows_3.png",
      thumbnail: "images/eyebrows_3_thumbnail.png"
    },
    {
      id: 21,
      category: "eyebrows",
      stage: "face",
      name: "meticulous and incredulous",
      image: "images/eyebrows_4.png",
      thumbnail: "images/eyebrows_4_thumbnail.png"
    },
    {
      id: 22,
      category: "nose",
      stage: "face",
      name: "flat bridged",
      image: "images/nose_5.png",
      thumbnail: "images/nose_5_thumbnail.png"
    },
    {
      id: 23,
      category: "hair",
      stage: "face",
      name: "short mullet",
      image: "images/hair_3.png",
      color: "M170.8,70c4.7-3.8,7.5-7.6,7.8-11.5c3.6,0.9,2.1,9.3,2.1,9.3c2.2-1.7,29.6-5.4,39.8,2.1c6.6,4.8,19.2,6.6,19.2,6.6c-2.4,2.6-12.8,1-12.8,1c17.4,7.1,29.3,22.5,29.3,22.5c16,29.3,27.7,25,27.7,25c-4.6,7.5-12.6,9.7-12.6,9.7c19.2,10.9-0.5,52.3-0.5,52.3s-1.2-7-1.7-4.6s-5.6,9.4-5.6,9.4c-9.2,9.7-5.3,30.1-5.3,30.1c-1.5-0.2-5.3-7.5-5.3-7.5c1.7,9-28.1,33.4-28.1,33.4l2.6-7.7c0,0-9.7,5.4-17.7,13.1c-8,7.7,1.5,8,1.5,8c-7.7,11.1-14.8,2.2-14.8,2.2c-2.6,0.2-10.2,9.9-11.4,10.7c-1.2,0.9-5.4-7.9-5.4-7.9c-4.8-1-4.6,12.4-4.6,12.4c-1.2,4.3-12.9-21.4-12.9-21.4c-5.6,12.6-22.8,16-22.8,16c17.2-7.7,0-31.3,0-31.3c-3.7,2.7-2.9,9.5-2.9,9.5c-1.2,2.6-7.5-5.4-7.5-5.4c-3.1,3.6-17.4,4.1-17.4,4.1c7.3-9.2,5.1-21.8,2.7-23.1c-2.4-1.4-6.9,9.8-6.9,9.8c0.2-6.1-10.8-24.8-10.8-24.8c-5.8,9.5-13.6,9.3-13.6,9.3s8.8-16.9,4.6-25.3c-17.2-34.2-6.4-58-6.4-58l-4.6,7.1c-1.7-12.2,12.1-30.1,12.1-30.1l-8.5,2c2-1.2,11.8-7.9,20.4-17c10.5-11.1,24.5-22.8,24.5-22.8c-4.1,0-8.9-8.9-5.8-5.8c3.1,3.1,17.2,0,17.2,0C148,66.7,159.5,66.6,170.8,70z",
      thumbnail: "images/hair_3_thumbnail.png"
    },
    {
      id: 24,
      category: "hair",
      stage: "face",
      name: "grown-out crop",
      image: "images/hair_4.png",
      color: "M87.3,132.8c0,0-2,12.6-1.5,14.6l1.5-2.6l4.3,39.3l1.7-2.6c0,0,7.3,28.1,13.1,32l2.2-1.7c0,0,7.1,14.1,19.9,18.2l3.2,0.7c0,0,13.3,14.3,16,15.1l3.9,2l8.2,4.1h2.4l5.1,4.4h3.2l6.5,3.6l1-1.9l5.3,1.9h3.6l4.3-1l3.6,1l2.6-2.4l2.7,2.4l3.6-2.4c0,0,8.2,0,9.5-2.4c1.4-2.4,1.4-2.4,1.4-2.4l1.9,1.9l3.9-7.1c0,0,8.5-11.4,9.4-14.1l1.9-1.9l1.4,2.9c0,0,16.3-15.8,20.8-30.6c4.4-14.8,1.4-12.3,1.4-12.3l7.5-12.1c0,0,3.7-9.4,4.3-12.4c0.5-3.1,5.8-5.4,6.5-17l0.7,1c0,0,6.8-11.9-4.4-25.7h1.7l-1.7-7.1c0,0-14.3-15.7-15.7-17.7c-1.4-2-14.1-13.1-16-13.8h3.6c0,0-17.5-10.9-22.1-11.2c-4.6-0.3-13.4-6.3-17.4-6c0,0-17.2-2.6-25.7,1.8c0,0-5.1-2.8-15.1-3.3c-10-0.5-15.1-2.8-15.1-2.8l4.9,3.1c0,0-15.1,1.8-22.7,6.1c-7.7,4.3-12,4.6-12,4.6l7.1,2.6c0,0-15.6,5.6-22.5,15.8l2.3,1c0,0-10.7,13.3-11.5,18.4c-0.8,5.1-1.4,17.1-1.4,17.1s-2.9-1.2-2.9-0.2",
      thumbnail: "images/hair_4_thumbnail.png"
    },
    {
      id: 25,
      category: "hair",
      stage: "face",
      name: "rapunzel is that you",
      image: "images/hair_5.png",
      color: "M177.7,71.2c0,0-25-5.6-38.8,3.1s-46,29.6-46,29.6s-23,46.5-24,72.5c-1,26,0,83.2,0,83.2l2,67.9l-5.1,114.4v130.2l15.3,2.9l2.6-22.8l3.3,19.9c0,0,21.7,4.3,23.7-0.3c2-4.6,1.3-19.1,1.3-19.1l2.3,18.6c0,0,47.5,5.4,57.2-5.1l-0.5-9.2l8.4,13c0,0,60.3,8.4,63.8,1.5l2-11.7l10.2,13.5c0,0,43.7-2.3,45.2-5.4c1.5-3.1,1-8.9,1-8.9l1.3,12c0,0,13.5-3.1,13.5-6.1s-7.4-88.1-7.4-88.1l-17.1-125.1l-20.4-140.9l-12.8-79.1c0,0-3.3-17.6-3.3-20.4s-5.9-24.8-9.7-27.6c-3.8-2.8-16.3-14.3-30.9-14.3S177.7,71.2,177.7,71.2z",
      thumbnail: "images/hair_5_thumbnail.png"
    },
    {
      id: 26,
      category: "hair",
      stage: "face",
      name: "casual lob",
      image: "images/hair_6.png",
      color: "M170.7,72.2c0,0-2.4-2.7-20.4-1s-35.7,12.2-35.7,12.2s-20.4,24.2-21.8,28.3c-1.4,4.1-12.3,30.6-11.6,44.3c0.7,13.6,1.7,54.8,1.7,54.8l1.4,72.9l2,74.2c2.7,2.5,63.6,6.4,65.3,1c0,0-4.4-22.2-0.6-29.7l7.8,27.3l29.3,6.5l-2.2-20.4l9,17.7l45.8-3.2c0,0,2.6-19.2,0.9-27.1l7.1,31c22.2-2.6,45.6-5.1,48.7-8.2l0.7-6.8l-17.7-102.5l-4.4-51.7l-7.1-60.9c0,0-7.1-34-21.8-43.9s-22.1-15.7-35.4-19.1c-13.3-3.4-25.9-3.1-31.7,0C174.1,70.8,170.7,72.2,170.7,72.2z",
      thumbnail: "images/hair_6_thumbnail.png"
    },
    {
      id: 27,
      category: "mouth",
      stage: "face",
      name: "slightly concerned",
      image: "images/mouth_1.png",
      thumbnail: "images/mouth_1_thumbnail.png"
    },
    {
      id: 28,
      category: "mouth",
      stage: "face",
      name: "smile",
      image: "images/mouth_2.png",
      thumbnail: "images/mouth_2_thumbnail.png"
    },
    {
      id: 29,
      category: "mouth",
      stage: "face",
      name: "snarky dimples",
      image: "images/mouth_3.png",
      thumbnail: "images/mouth_3_thumbnail.png"
    },
    {
      id: 30,
      category: "mouth",
      stage: "face",
      name: "anime pout",
      image: "images/mouth_4.png",
      thumbnail: "images/mouth_4_thumbnail.png"
    },
    {
      id: 31,
      category: "hair",
      stage: "face",
      name: "curly lob",
      image: "images/hair_7.png",
      color: "M169.1,67.3c0,0-12.6-15.7-36.8,2c0,0-17,18.7-26.2,24.2c0,0-14,20.4-20.1,35.4c-6.1,15-11.6,17-16.3,12.3c0,0,1,9.9,9.2,10.2c0,0-17.1,18.2-13.4,35.2c3.7,17,1.7,47.7-17,31.3c0,0,1,22.5,26.5,10.2c0,0,2.7,4.4-8.2,15c-10.9,10.6-7.5,37.8,8.2,42.2c0,0-11.2-10.2-1-20.4c0,0-3.4,16.3,11.9,20.4c0,0,6.5,5.1-0.7,8.9c0,0,17.7,9.5,26.6-5.8c0,0-7.5-13.6,8.2-17.7c0,0-7.8,15,17,24.9c0,0-10.9-16.7,4.8-26.2c0,0-4.4,12.3,9.2,14.6c0,0,5.4,6.8-7.1,7.1c0,0,23.1,13.3,22.8-12.3c0,0,8.2,0.3,7.5,12.9c0,0,3.7,12.9,14,8.5c0,0-9.9-2.7,4.1-16.3c0,0-0.3,20.1,20.1,20.1c0,0-16.3-9.5,12.3-24.2c0,0,2,17.4-5.1,20.8c0,0,22.1,3.4,24.2-14.6c0,0,11.6,12.9,22.8,1c0,0-18.4-4.1-4.1-24.5c0,0,0.7,17.7,13.3,10.9c0,0-18-1.4,4.1-16.3c0,0-0.1-2-5.4-3.8c0,0,7.9-10,12.8-13.5c4.9-3.6-5.1-13.3-5.1-13.3s8.7,4.1,12.5-2c0,0-30.1-1-3.1-36.5c0,0-3.8-0.5-8.4-2.3s6.1-26.3,6.1-26.3s-5.1-6.9-10.2-8.4s-2-8.4-2-8.4s5.6,5.4,6.9,4.1c0,0-7.1-9.2-6.4-15.1c0.8-5.9-3.8-21.4-12.5-27.1S250,89.3,250,89.3S229.8,75,223.4,73.7s-10.2-5.9-14-6.6C205.5,66.3,176.9,61.2,169.1,67.3z",
      thumbnail: "images/hair_7_thumbnail.png"
    },
    {
      id: 32,
      category: "hair",
      stage: "face",
      name: "chaewon BOB <3",
      image: "images/hair_8.png",
      color: "M177.9,68.4c0,0-14.6-7.1-25.1-3.4c-10.6,3.7-37.2,7.8-52.2,34s-18.7,48.7-18.7,48.7l-1.7,36.8l2.4,46.3l-2.4,40.5l40.2,4.1l2.7-19.1l1.7,19.1h51.1l3.7-21.1l9.5,16.7c0,0,48.3,3.7,49.4-1.4c1-5.1,3.7-11.6,3.7-11.6l4.4,12.9h32l-5.8-78l-2.4-46.6c0,0,6.1-30.6,2.7-35.7c-3.4-5.1-8.5-18.7-21.8-25.2s-15.7-11.6-36.8-18.7S177.9,68.4,177.9,68.4z",
      thumbnail: "images/hair_8_thumbnail.png"
    },
    {
      id: 33,
      category: "bottoms",
      stage: "clothing",
      name: "gay pants",
      small: "images/bottoms_1_small.png",
      medium: "images/bottoms_1_medium.png",
      large: "images/bottoms_1_large.png",
      thumbnail: "images/bottoms_1_thumbnail.png",
      fact: "i hand-embroidered these pants - the rainbow flag on one side and the lesbian flag on the other side. you can wear them if you're not a lesbian, if you promise you're cool."
    },
    {
      id: 34,
      category: "bottoms",
      stage: "clothing",
      name: "my wife's tennis coach",
      small: "images/bottoms_2_small.png",
      medium: "images/bottoms_2_medium.png",
      large: "images/bottoms_2_large.png",
      thumbnail: "images/bottoms_2_thumbnail.png",
      fact: "literally COVERED in charcoal, this skirt. that stuff doesn't come out and i haven't taken drawing in over two years."
    },
    {
      id: 35,
      category: "bangs",
      stage: "face",
      name: "tucks hair behind ear seductively",
      image: "images/bangs_2.png",
      color: "M274.8,139c0,0-3.1-22.5-9.4-33.4c-6.4-11-19.7-30.6-24.8-31.9s-10.7-3.1-13,0c0,0-4.9-7.7-8.4-8.2c-3.6-0.5-24.5-6.4-44.2-3.8c-19.7,2.6-42.9,10.2-45.7,11.7c-2.8,1.5-27.1,22.2-33.4,43.9c-6.4,21.7,0,35.2,0,35.2s9.7-6.9,17.1,1.6c12,13.7,42,18.8,60.7,0.7c0,0,35.7-38,39.3-54.6c3.6-16.6,2-4.6,2-4.6s11-2.6,11-0.3c0,0,17.3-1.6,22.7,5c1.3,1.6,0.8,1,2.3,2.9c4.7,5.8,10.1,12.2,13.5,14.5L274.8,139z",
      thumbnail: "images/bangs_2_thumbnail.png"
    },
    {
      id: 36,
      category: "bangs",
      stage: "face",
      name: "unfortunate bowl cut",
      image: "images/bangs_3.png",
      color: "M176.2,69.1c0,0,26.3-6.1,30.6-5.9c4.3,0.3,29.1,8.9,32.2,11.7c3.1,2.8,24.8,15.6,27.6,20.2c2.8,4.6,16.9,20.2,17.1,32.2s2,19.4,2,19.4s-17.6,5.9-27.6,5.5c-0.4,0-0.9,0-1.3-0.1c0,0-13.8,2.8-22.2,3.3c-8.4,0.5-17.9,1.8-17.9,1.8l-4.9-13.5l-0.3,12.3c0,0-7.9,3.3-15.4,3.6c-7.6,0.3-16,2.6-16,2.6l-7.1-16.1c0,0-0.3,12.3,1,16.1s-52.6,8.7-52.6,8.7s-7.7-5.6-12.3-15.1s-26.6,0.5-19.9,19.2c0,0-4.6-10.5-5.1-15.1c-0.5-4.6-10.2-21.2-1.5-31.9s12-32.9,29.4-46s40.3-13.5,40.3-13.5L176.2,69.1z",
      thumbnail: "images/bangs_3_thumbnail.png"
    },
    {
      id: 37,
      category: "bangs",
      stage: "face",
      name: "emo side bangs",
      image: "images/bangs_4.png",
      color: "M166.9,71.7c0,0,21.5-12.3,52.2,1.8s41.9,37,41.9,37s6.4,12.8,9.7,29.9c3.3,17.1-2.6,17.4,10.2,26.8c0,0-21.4,15.1-36-20.2c0,0,3.6,12.8-2.6,18.6c0,0-9.4-16.1-24-13.3c0,0-24.3-3.8-29.1-8.4c-4.9-4.6,12.8,11.5,20.2,13.3c0,0-35.7,14-51.3-44.2c0,0-21.7-9.2-24.5-2.8c-2.8,6.4-11.5,41.1,5.4,52.9c0,0-16.3-4.6-21.2-10.2c0,0,7.1,19.9-5.9,28.6c0,0,3.8-20.4-5.4-27.8c0,0-5.9-4.9-11.7-1c0,0-3.6-11.5-1.3-16.3l-7.4,4.6c0,0,12.3-19.9,11-38.3c0,0,12-17.1,22.5-22.2s20.2-8.7,25-9.7C149.4,69.6,166.9,71.7,166.9,71.7z",
      thumbnail: "images/bangs_4_thumbnail.png"
    },
    {
      id: 38,
      category: "bangs",
      stage: "face",
      name: "face framing layers",
      image: "images/bangs_5.png",
      color: "M128.2,170.2c0,0,21.2-0.2,24.5-6.3c0,0-9.9,18.3-16.3,22.2c0,0,19.4-1.8,31.4-32.2s16.9-39.6,16.6-53.9c0,0,14.2-3.8,15.7-1.5c0,0,23-5,25.4,2.8c3.8,12.3,18.3,26.9,23.2,34.5c9.8,15,6.4,24.4,5.1,30.1l7.4-7.1c0,0,0.5,22.5,12.3,32.4c0,0-9.2-6.1,11.7-38.6c0,0,1-9.2-3.8-18.9c0,0,8.7,3.1,8.7,0c0,0-16.6-12.3-24.3-29.4S242,76.3,242,76.3s-30.2-14-42-9.2s-5.2,1.3-5.2,1.3S169,59.2,150.4,63s-38,12.3-52.9,37.3s-15.1,38.8-15.1,38.8s5.1,16.3,8.2,17.9c3.1,1.5,1,43.1,12.3,54.6s0.8,17.1,30.4,13.3c0,0-16.3-7.7-18.9-15.6c0,0,14.6,7.7,15.8,4.9c0,0-26.3-7.9-3.3-43.7",
      thumbnail: "images/bangs_5_thumbnail.png"
    },
    {
      id: 39,
      category: "tops",
      stage: "clothing",
      name: "austin powers called...",
      small: "images/top_1_small.png",
      medium: "images/top_1_medium.png",
      large: "images/top_1_large.png",
      thumbnail: "images/top_1_thumbnail.png",
      fact: "this is genuine vintage! it had been stored in my roommate's grandma's attic since the seventies until it came into my possession."
    },
    {
      id: 40,
      category: "bangs",
      stage: "face",
      name: "grown-out buzz",
      image: "images/bangs_6.png",
      color: "M261.2,96.4l-12.8-9.7c0,0,0.6-4.8-3.2-5.8s-4.7-4.8-18.5-6.5c-15.5-1.9-3.6,0-3.6,0l3.6-2.6c0,0-9.4-2.6-16.8-1.5l3.8-3.3c0,0-13.7-2.8-19.5-0.9l0.8-3.6c0,0-5,0.6-7.9,2.9c-2.9,2.3-17.2-3.7-17.2-3.7s0.8,2.2,1.4,2.6c0.6,0.4-7.1-0.8-7.1-0.8V65c0,0-3.4-1.4-6.6-0.8c-3.2,0.6-16.3,1.9-16.3,1.9s0.4,1.7,1,2c0.6,0.4-4.5,2.6-4.5,2.6s-7.5,2.6-9.8,4.3c-2.3,1.8-14.2,10-16.5,12.5l1.7,0.8c0,0-16.7,12.6-20.4,24.5l2.9-0.1c0,0-2,1.9-4.3,8.6c-2.3,6.6-3.6,14.2-3.6,14.2v7.9c0,0,1.5,9.6,4.7,10.7c3.2,1.1,3.6,0,3.6,0s9.7-7.5,15.7,1.5c0,0,3.3,8.7,3.3,10.5s2.6,10.6,2.6,10.6l13-1.4l2.4-24l2.8-4.2l4.3-8.3l1.5-3.1l0.4-2.4l2.7-1.5l4.7-6.4l0.3-3.1c0,0,5.7-6.5,8.2-11.9c2.4-5.4,2.7-3.3,2.7-3.3l-0.6,4.9l4.2-6.5l2.2-1.7l4.1-2.4l8.4-3.6l0.4,2.7c0,0,6.6-4.9,7.3-3.2c0.6,1.7-0.3,4.1-0.3,4.1s5.2-1.7,6.8-3.8c1.5-2.2,0.4,2.8,0.4,2.8s4-0.5,4.6-1.7c0.6-1.1,1,2,1,2s5.7,0.4,6.4-1.8c0,0,1.1,2,2,1.9s7.3-3.3,7.3-3.3l0.4,3.1c0,0,11.2-1.4,12.5,0.6c1.3,2,4.7,2.6,4.7,2.6l6.4-0.8c0,0,11.6,1.8,12.3,0c0.6-1.8-0.5-2.7-0.5-2.7l9.4,0.8l-0.9-2.7L261.2,96.4z",
      thumbnail: "images/bangs_6_thumbnail.png"
    },
    {
      id: 41,
      category: "dresses",
      stage: "clothing",
      name: "coquette moment!",
      small: "images/dress_1_small.png",
      medium: "images/dress_1_medium.png",
      large: "images/dress_1_large.png",
      thumbnail: "images/dress_1_thumbnail.png",
      fact: "i find this dress totally inoffensive now, at twenty-one years old, and i wear it to class at least once a week, but it violates almost every tenant of my high school's dress code. what is up with that?"
    },
    {
      id: 50,
      category: "socks",
      stage: "clothing",
      name: "unbeatable classic, i fear",
      small: "images/socks_1_small.png",
      medium: "images/socks_1_medium.png",
      large: "images/socks_1_large.png",
      thumbnail: "images/socks_1_thumbnail.png",
      fact: "as weird as my clothes are, i wear regular white crew socks most of the time. always scrunched down, of course, because i have tattoos on my calves i don't want them to cover."
    },
    {
      id: 51,
      category: "accessories_face",
      stage: "face",
      name: "for people who are very smart",
      image: "images/accessories_face_1.png",
      thumbnail: "images/accessories_face_1_thumbnail.png",
    },
    {
      id: 52,
      category: "accessories_face",
      stage: "face",
      name: "for people who are just blind, ig",
      image: "images/accessories_face_2.png",
      thumbnail: "images/accessories_face_2_thumbnail.png",
    },
    {
      id: 53,
      category: "accessories_clothes",
      stage: "clothing",
      name: "daily uniform",
      small: "images/accessories_clothes_1.png",
      medium: "images/accessories_clothes_1.png",
      large: "images/accessories_clothes_1.png",
      thumbnail: "images/accessories_clothes_1_thumbnail.png",
      fact: "this is my most common jewelry set-up. as of right now, i have just five ear piercings across both ears, but i'm in the very slow process of getting more."
    },
    {
      id: 54,
      category: "details",
      stage: "face",
      name: "yeah i can grow a mustache",
      image: "images/details_1.png",
      thumbnail: "images/details_1_thumbnail.png",
    },
  ]);
  const [selectedClothingItems, setSelectedClothingItems] = useState([
    {
      id: "0",
      name: "placeholder",
      category: "placeholder",
      image: null
    }
  ]);
  const [hairColor, setHairColor] = useState("#FFFFFF");
  const [skinColor, setSkinColor] = useState("#FFFFFF");

  const [selectedMenuCategory, setSelectedMenuCategory] = useState("hair");

  const [buttonLabel, setButtonLabel] = useState("continue")


    function Menu() {


        function GameStateButton () {

          const forwardButton = () => {
            if (gameState === "face") {
              setGameState("clothing");
            }
            if (gameState === "clothing") {
              setGameState("end");
            }
          }

          const backwardButton = () => {
            if (gameState === "clothing") {
              setGameState("face");
            }
            if (gameState === "end") {
              setGameState("clothing");
            }
          }

          if (gameState !== "end") {
          return (
            <div id="game_state_buttons">
              <button
              onClick={() => backwardButton()}
              className="game_state_button2">
                back
              </button>
              <button
              onClick={() => forwardButton()}
              className="game_state_button1">
                continue
              </button>
            </div>
          )
          }
          else if (gameState === "end") {
            return (
            <div id="game_state_buttons">
            <button
            onClick={() => backwardButton()}
            className="game_state_button2">
              back
            </button>
            </div>
            )
          }
        }

        function ColorSelectionMenu () {
          return (
            <div id="color_selectionMenu">
            </div>
          )
        }

        function MenuTabs() {
            const [menuCategories, setMenuCategories] = useState([
                {
                    id: 1,
                    stage: "face",
                    name: "hair",
                    image: "images/hair_icon.png"
                  },
                  {
                    id: 14,
                    stage: "face",
                    name: "bangs",
                    image: "images/bangs_icon.png"
                  },
                  {
                    id: 2,
                    stage: "face",
                    name: "eyes",
                    image: "images/eyes_icon.png"
                  },
                  {
                    id: 15,
                    stage: "face",
                    name: "eyebrows",
                    image: "images/eyebrows_icon.png"
                  },
                  {
                    id: 3,
                    stage: "face",
                    name: "nose",
                    image: "images/nose_icon.png"
                  },
                  {
                    id: 4,
                    stage: "face",
                    name: "mouth",
                    image: "images/mouth_icon.png"
                  },
                  {
                    id: 5,
                    stage: "face",
                    name: "details",
                    image: "images/details_icon.png"
                  },
                  {
                    id: 6,
                    stage: "face",
                    name: "accessories_face",
                    image: "images/accessories_icon.png"
                  },
                  {
                    id: 7,
                    stage: "clothing",
                    name: "tops",
                    image: "images/tops_icon.png"
                  },
                  {
                    id: 8,
                    stage: "clothing",
                    name: "bottoms",
                    image: "images/bottoms_icon.png"
                  },
                  {
                    id: 9,
                    stage:"clothing",
                    name: "dresses",
                    image: "images/dress_icon.png"
                  },
                  {
                    id: 10,
                    stage: "clothing",
                    name: "layers",
                    image: "images/layers_icon.png"
                  },
                  {
                    id: 11,
                    stage: "clothing",
                    name: "socks",
                    image: "images/socks_icon.png"
                  },
                  {
                    id: 12,
                    stage: "clothing",
                    name: "shoes"
                  },
                  {
                    id: 13,
                    stage: "clothing",
                    name: "accessories_clothes"
                  }
            ]);
            

            const filteredMenuCategories = menuCategories.filter(menuCategory => menuCategory.stage === gameState);

            const handleMenuSelection = (newCategory) => {
              setSelectedMenuCategory(newCategory);
            }

            const buildMenuTabClass = (thisMenuCategory) => {
              const inactiveMenuTab = "menu_tab"
              const activeMenuTab = "menu_tab active"
              if (thisMenuCategory === selectedMenuCategory) {
                return (
                  activeMenuTab
                )
              }
              else {
                return (
                  inactiveMenuTab
                )
              }
            }
            return filteredMenuCategories.map((menuCategory, index) => {
              return ( <li key = {index}
              className = {buildMenuTabClass(menuCategory.name)}
              onClick = {() => handleMenuSelection(menuCategory.name)}>
                <img src={menuCategory.image}
                className = "menu_icon"/>
              </li> )
          });
          };
        function ClothingItems() {

          const filteredClothingItems = clothingItems.filter(clothingItem => clothingItem.category === selectedMenuCategory);

          const handleClothingItemSelection = (newClothingItem) => {
            let newSelection = selectedClothingItems;
            console.log(newSelection)
            for (let i=0; i < selectedClothingItems.length; i++) {
              if (selectedClothingItems[i].category === newClothingItem.category) {
                const removeSelection = () => {
                  newSelection = selectedClothingItems.filter(selectedClothingItem => selectedClothingItem.category != newClothingItem.category);
                };
                removeSelection();
              }
              else {
                continue;
              };
            };
            setSelectedClothingItems(null);
            setSelectedClothingItems([newSelection]);
            let concatArray = ([newSelection, newClothingItem]);
            let newSelectionArray = [];
            let concatSelection = newSelectionArray.concat(...concatArray);
            setSelectedClothingItems(concatSelection);
            console.log(selectedClothingItems);
          }

          useEffect(() => {
            console.log(JSON.stringify(selectedClothingItems));
          }, []);

          
          return filteredClothingItems.map((clothingItem, index) => {
            return ( <li key = {index}
            className = {"menu_option"}
            onClick = {() => handleClothingItemSelection(clothingItem)}>
              <img
              className ="item_thumbnail"
              src={clothingItem.thumbnail}/>
            </li> )
        });
        };

        function SideMenu() {
          function SkinColorSelection () {
            const [newSkinColor, setNewSkinColor] = useState("");

            const skinColorSubmission = () => {
              setSkinColor(newSkinColor)
            }
            return(
              <form onSubmit={skinColorSubmission}>
                <input
                className="color_input"
                type="color"
                value={skinColor}
                onChange={e => setNewSkinColor(e.target.value)}>
                </input>
                <button className="submit_button" type="submit">
                  v
                </button>
              </form>
            );
          }
          function HairColorSelection(){
            const [newHairColor, setNewHairColor] = useState("");

            const hairColorSubmission = () => {
              setHairColor(newHairColor)
            }
            return(
              <form onSubmit={hairColorSubmission}>
                <input
                className="color_input"
                type="color"
                value={hairColor}
                onChange={e => setNewHairColor(e.target.value)}>
                </input>
                <button className="submit_button" type="submit">
                  v
                </button>
              </form>
            );
          };
          function BodyTypeSelection() {

            const handleBodyTypeSelection = (newBodyType) => {
              setSelectedBodyType(newBodyType);
              console.log(selectedBodyType);
              if (newBodyType === 1) {
                setClothingSize("small");
              }
              else if (newBodyType === 2) {
                setClothingSize("medium");
              }
              else if (newBodyType === 3) {
                setClothingSize("large");
              }
            }

            return bodyTypes.map((bodyType, index) => {
              return ( <li key = {index}
              className = {"body_type_button"}
              onClick = {() => handleBodyTypeSelection(bodyType.id)}>
                {bodyType.id}
              </li> )
          });
        }
        return (
          <div id="side_menu">
            <h3 className="side_menu_label">skin</h3>
            <SkinColorSelection/>
            <h3 className="side_menu_label">hair</h3>
            <HairColorSelection/>
            <h3 className="side_menu_label">body type</h3>
            <BodyTypeSelection/>
          </div>
        )
      };

      function FunFacts() {
        if (gameState === "clothing") {
          return (
            <div className="fun_facts">
              <h3>
                fun fact!
              </h3>
              <li>
                {selectedClothingItems[selectedClothingItems.length-1].fact}
              </li>
            </div>
          )
        }
      };

      function EndMessage() {
        const handleReload = () => {
          window.location.reload();
        }
        
        return (
          <div id="end_message">
            <h3>
              thanks for playing!
            </h3>
            <p>
              feel free to go back and play again, if you like. you can also screenshot this little character and share it with your friends, or even with me! (i would appreciate that.) if you want to see more stuff from me, you can check out my portfolio at chloerussell.work.
            </p>
            <button className="ending_button" onClick={() => handleReload()}>
              play again!
            </button>
            <button className="ending_button">
              my portfolio
            </button>
          </div>
        )
      }
        
      if (gameState !== "end") {
      return (
        <div id="all_buttons">
          <SideMenu/>
          <GameStateButton/>
          <FunFacts/>
        <div id="menu_container">
          <div id="item_options_menu">
            <div id="menu_content">
              <ClothingItems/>
            </div>
          </div>
          <div id="menu_tabs">
            <MenuTabs/>
          </div>
        </div>
        </div>
      )
    }

    else {
      return (
        <div id="end_buttons">
          <GameStateButton/>
          <EndMessage/>
        </div>
      )
    }

    };

    function Display() {
      
      const buildDisplayClass = (item) => {
        const faceDisplayClass = "display_item face";
        const clothingDisplayClass = "display_item clothing";
        const hairFaceDisplayClass = "display_item face hair";
        const hairClothingDisplayClass = "display_item clothing hair";
        const bangFaceDisplayClass = "display_item face bangs";
        const bangClothingDisplayClass = "display_item clothing bangs"
        const underclothesFaceDisplayClass = "display_item face underclothes"
        const underclothesClothingDisplayClass = "display_item clothing underclothes"
        if (gameState === "face") {
          if (item === "hair") {
            return (
              hairFaceDisplayClass
            )
          }
          else if (item === "bottoms") {
            return (
              underclothesFaceDisplayClass
            )
          }
          else if (item === "bangs") {
            return (
              bangFaceDisplayClass
            )
          }
          else {
          return (
            faceDisplayClass
          )
        }
        }
        else {
          if (item === "hair") {
            return (
              hairClothingDisplayClass
            )
          }
          else if (item === "bangs") {
            return (
              bangClothingDisplayClass
            )
          }
          else if (item === "bottoms") {
            return (
              underclothesClothingDisplayClass
            )
          }
          else {
          return (
            clothingDisplayClass
          )
        }
        }
      }

      function BodyTypeDisplay() {

        return (
          <div className="body_type_container">
            <svg
            fill= {skinColor}
            className={buildDisplayClass("placeholder")}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 1150">
            <defs>
            </defs><path className="cls-1" d={bodyTypes[selectedBodyType-1].color}/>
            </svg>
            <img className={buildDisplayClass("placeholder")}
            src={bodyTypes[selectedBodyType-1].image}/>
          </div>
        )
      };

      function HairColorDisplay() {
        for (let i=0; i < selectedClothingItems.length; i++) {
          if (selectedClothingItems[i].category === "hair") {
            return (
              <div className = "hair_color_container" id="hair_color">
                <svg
                  fill = {hairColor}
                  className={buildDisplayClass("placeholder")}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 400 1150">
                  <path className="st3" d={selectedClothingItems[i].color}/>
                  </svg>
              </div>
            )
          }
        }
      }

        function BangColorDisplay() {
          for (let i=0; i < selectedClothingItems.length; i++) {
          if (selectedClothingItems[i].category === "bangs") {
            return (
              <div className = "bang_color_container">
                  <svg
                  fill = {hairColor}
                  className={buildDisplayClass("placeholder")}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 400 1150">
                  <path className="st5" d={selectedClothingItems[i].color}/>
                  </svg>
              </div>
            )
          }
        }
        }



      function ClothingItemDisplay() {
        console.log(selectedClothingItems);
          return (
            selectedClothingItems.map((selectedClothingItem, index) => {
            if (selectedClothingItem.stage === "face") {
            return (
                <img key={selectedClothingItem.id}
                  className = {buildDisplayClass(selectedClothingItem.category)}
                  src={selectedClothingItem.image}/>
              )
            }
            else if (selectedClothingItem.stage === "clothing") {
              console.log(clothingSize);
              const getClothingSize = () => {
                if (clothingSize === "small") {
                  return (selectedClothingItem.small)
                }
                if (clothingSize === "medium") {
                  return (selectedClothingItem.medium)
                }
                else if (clothingSize === "large") {
                  return (selectedClothingItem.large)
                }
              }
              console.log([selectedClothingItem.clothingSize])
              return (
                <img key={selectedClothingItem.id}
                className = {buildDisplayClass(selectedClothingItem.category)}
                src={getClothingSize()}
                />
              )
            }
        })
        )
      }
      ;

      return (
        <div id="display_container">
          <HairColorDisplay/>
          <BodyTypeDisplay/>
          <BangColorDisplay/>
          <ClothingItemDisplay/>
        </div>
      );
    };

    return(
      <div id="entire_container">
          <Menu/>
          <Display/>
      </div>
    )
};

export default App;
