"use client";

import { useCallback, useEffect, useState } from "react";
import { heroSlides } from "@/lib/site";

const INTERVAL = 6000;

export default function HeroSlider() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = heroSlides.length;

  const go = useCallback((d: number) => setIdx((i) => (i + d + total) % total), [total]);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => go(1), INTERVAL);
    return () => clearTimeout(t);
  }, [idx, paused, go]);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <section id="top" className="fp hero is-dark" aria-roledescription="carousel" aria-label="메인">
      {heroSlides.map((s, i) => (
        <div
          key={i}
          className={`hero-slide${i === idx ? " is-on" : ""}`}
          aria-hidden={i !== idx}
        >
          <div className="hero-media">
            {s.video ? (
              <video src={s.video} autoPlay muted loop playsInline />
            ) : s.image ? (
              <div className="ph-img" style={{ backgroundImage: `url(${s.image})` }} />
            ) : (
              <div className={`ph ph-${(i % 3) + 1}`} />
            )}
          </div>
          <div className="hero-shade" />
          <div className="hero-copy wrap">
            <p className="kicker">{s.kicker}</p>
            {i === 0 ? (
              <h1>
                {s.title[0]}
                <br />
                {s.title[1]}
              </h1>
            ) : (
              <p className="h1">
                {s.title[0]}
                <br />
                {s.title[1]}
              </p>
            )}
            <p className="hero-sub">{s.sub}</p>
          </div>
        </div>
      ))}

      <div className="hero-ctrl wrap">
        <span className="hero-count">
          {pad(idx + 1)} <span>/ {pad(total)}</span>
        </span>
        <span className="hero-bar" aria-hidden="true">
          <span key={`${idx}-${paused}`} className={paused ? "" : "run"} style={{ animationDuration: `${INTERVAL}ms` }} />
        </span>
        <button type="button" aria-label="이전 슬라이드" onClick={() => go(-1)}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg>
        </button>
        <button type="button" aria-label={paused ? "자동 넘김 켜기" : "자동 넘김 멈추기"} onClick={() => setPaused((p) => !p)}>
          {paused ? (
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5l11 7-11 7z" /></svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5v14M15 5v14" /></svg>
          )}
        </button>
        <button type="button" aria-label="다음 슬라이드" onClick={() => go(1)}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7" /></svg>
        </button>
        <a href="#programs" className="hero-scroll">SCROLL</a>
      </div>
    </section>
  );
}
