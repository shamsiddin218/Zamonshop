import { useEffect, useState } from "react";

export function useLiked() {
  const [likedItems, setLikedItems] = useState([]);

  // localStorage-dan olish
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("savedProducts")) || [];
    setLikedItems(saved);
  }, []);

  // Like bosganda toggle
  const toggleLike = (product) => {
    const exists = likedItems.some(item => item.id === product.id);
    let updated;

    if (exists) {
      updated = likedItems.filter(item => item.id !== product.id);
    } else {
      updated = [...likedItems, product];
    }

    setLikedItems(updated);
    localStorage.setItem("savedProducts", JSON.stringify(updated));
  };

  // Like bosilganini tekshirish
  const isLiked = (id) => {
    return likedItems.some(item => item.id === id);
  };

  return { toggleLike, isLiked, likedItems };
}
