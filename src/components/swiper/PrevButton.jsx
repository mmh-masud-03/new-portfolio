"use client";
import { React } from "react";
import { useSwiper } from "swiper/react";

export default function PrevButton() {
  const swiper = useSwiper();

  return <button onClick={() => swiper.slidePrev()}>Previous</button>;
}
