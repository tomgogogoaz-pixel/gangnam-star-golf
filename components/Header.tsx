"use client";

import Image from "next/image";
import { useState } from "react";
import { nav, site } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="hd">
      <div className="hd-in">
        <a href="#top" className="hd-logo" onClick={() => setOpen(false)}>
          <Image src="/logo.png" alt="" width={44} height={44} priority />
          <span className="hd-name">
            <strong>{site.name}</strong>
            <em>{site.nameEn}</em>
          </span>
        </a>

        <nav className="hd-nav" aria-label="주 메뉴">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`}>
              <span className="en">{n.en}</span>
              <span className="ko">{n.ko}</span>
            </a>
          ))}
        </nav>

        <a href={`tel:${site.phoneTel}`} className="hd-tel">
          {site.phone}
        </a>

        <button
          type="button"
          className="hd-burger"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <nav className="hd-mnav" aria-label="모바일 메뉴">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)}>
              {n.ko}
              <span className="en">{n.en}</span>
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
