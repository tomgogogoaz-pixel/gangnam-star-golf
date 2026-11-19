"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "top", label: "메인" },
  { id: "programs", label: "프로그램" },
  { id: "about", label: "센터 특징" },
  { id: "membership", label: "회원권" },
  { id: "news", label: "소식" },
  { id: "location", label: "오시는 길" },
];

export default function SectionDots() {
  const [active, setActive] = useState("top");
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(e.target.id);
            setDark(e.target.classList.contains("is-dark"));
          }
        });
      },
      { threshold: 0.55 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <nav className={`dots${dark ? " on-dark" : ""}`} aria-label="섹션 이동">
      {SECTIONS.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className={active === s.id ? "is-on" : ""}
          aria-label={s.label}
          aria-current={active === s.id ? "true" : undefined}
        >
          <span className="dots-label">{s.label}</span>
        </a>
      ))}
    </nav>
  );
}
