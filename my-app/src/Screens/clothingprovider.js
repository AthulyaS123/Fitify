import React, { createContext, useState, useContext } from "react";
import * as Clothes from './Clothes';

const ClothingContext = createContext();

export const ClothingProvider = ({ children }) => {
  const [clothingItems, setClothingItems] = useState([
    { id: 1, name: "White Floral Babydoll Top", img: Clothes.femtop1, color: "white", occasion: "music-festival", gender: "feminine", aesthetic: "cottagecore" },
    { id: 2, name: "Denim Halter Top", img: Clothes.femtop2, color: "blue", occasion: "music-festival", gender: "feminine", aesthetic: "western"},
    { id: 3, name: "Floral Tank Top", img: Clothes.femtop3, color: "white", occasion: "music-festival", gender: "feminine", aesthetic: "cottagecore"},
    { id: 4, name: "Denim Shorts", img: Clothes.fembottom1, color: "blue", occasion: "music-festival", gender: "feminine", aesthetic: "western"},
    { id: 5, name: "White Ruffled Skirt", img: Clothes.fembottom2, color: "white", occasion: "music-festival", gender: "feminine", aesthetic: "coquette"},
    { id: 6, name: "Floral Maxi Skirt", img: Clothes.fembottom3, color: "black", occasion: "music-festival", gender: "feminine", aesthetic: "preppy"},
    { id: 7, name: "White Converse", img: Clothes.femshoe1, color: "white", occasion: "music-festival", gender: "feminine", aesthetic: "streetwear"},
    { id: 8, name: "Brown Platform Boots", img: Clothes.femshoe1, color: "brown", occasion: "music-festival", gender: "feminine", aesthetic: "western"},
    { id: 9, name: "White Heels", img: Clothes.femshoe3, color: "white", occasion: "music-festival", gender: "feminine", aesthetic: "preppy"},

    { id: 10, name: "Beige Short-Sleeve Shirt", img: Clothes.unitop1, color: "beige", occasion: "music-festival", gender: "unisex", aesthetic: "casual"},
    { id: 11, name: "Black Tank Top", img: Clothes.unitop2, color: "black", occasion: "music-festival", gender: "unisex", aesthetic: "casual"},
    { id: 12, name: "Blue Short-Sleeve Button Up", img: Clothes.unitop3, color: "blue", occasion: "music-festival", gender: "unisex", aesthetic: "western"},
    { id: 13, name: "Black Dress Pants", img: Clothes.unibottom1, color: "black", occasion: "music-festival", gender: "unisex", aesthetic: "preppy"},
    { id: 14, name: "Green Army Pants", img: Clothes.unibottom2, color: "green", occasion: "music-festival", gender: "unisex", aesthetic: "streetwear"},
    { id: 15, name: "Brown Shorts", img: Clothes.unibottom3, color: "brown", occasion: "music-festival", gender: "unisex", aesthetic: "casual"},
    { id: 16, name: "White Crocs", img: Clothes.unishoe1, color: "white", occasion: "music-festival", gender: "unisex", aesthetic: "casual"},
    { id: 17, name: "White Sneakers", img: Clothes.unishoe2, color: "black", occasion: "music-festival", gender: "unisex", aesthetic: "preppy"},
    { id: 18, name: "Tan Sneakers", img: Clothes.unishoe3, color: "brown", occasion: "music-festival", gender: "unisex", aesthetic: "streetwear"},
    
    { id: 19, name: "White Short-Sleeve Shirt", img: Clothes.masctop1, color: "white", occasion: "music-festival", gender: "masculine", aesthetic: "casual"},
    { id: 20, name: "Grey Ribbed Polo", img: Clothes.masctop2, color: "grey", occasion: "music-festival", gender: "masculine", aesthetic: "clean"},
    { id: 21, name: "Floral White Shirt", img: Clothes.masctop3, color: "multi", occasion: "music-festival", gender: "masculine", aesthetic: "fun"},
    { id: 22, name: "Brown Shorts", img: Clothes.mascbottom1, color: "brown", occasion: "music-festival", gender: "masculine", aesthetic: "casual"},
    { id: 23, name: "Beige Baggy Pants", img: Clothes.mascbottom2, color: "beige", occasion: "music-festival", gender: "masculine", aesthetic: "clean"},
    { id: 24, name: "Black Ruffled Shorts", img: Clothes.mascbottom3, color: "black", occasion: "music-festival", gender: "masculine", aesthetic: "casual"},
    { id: 25, name: "White Sneakers", img: Clothes.mascshoe1, color: "white", occasion: "music-festival", gender: "masculine", aesthetic: "preppy"},
    { id: 26, name: "Navy Blue Canvas", img: Clothes.mascshoe2, color: "bluee", occasion: "music-festival", gender: "masculine", aesthetic: "casual"},
    { id: 27, name: "Brown Sneakers", img: Clothes.mascshoe3, color: "brown", occasion: "music-festival", gender: "masculine", aesthetic: "clean"},


  ]);

  const [likedItems, setLikedItems] = useState([]);

  const likeClothing = (id) => {
    const item = clothingItems.find((item) => item.id === id);
    if (item && !likedItems.some((liked) => liked.id === id)) {
      setLikedItems([...likedItems, item]);
    }
  };

  return (
    <ClothingContext.Provider value={{ clothingItems, likedItems, likeClothing }}>
      {children}
    </ClothingContext.Provider>
  );
};

export const useClothing = () => useContext(ClothingContext);
