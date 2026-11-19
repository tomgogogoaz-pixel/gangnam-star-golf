import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import SectionDots from "@/components/SectionDots";
import { features, kakaoHref, memberships, notices, programs, site } from "@/lib/site";

function Photo({ src, tone }: { src?: string; tone: number }) {
  return src ? (
    <div className="zbg ph-img" style={{ backgroundImage: `url(${src})` }} />
  ) : (
    <div className={`zbg ph ph-${tone}`} />
  );
}

function KakaoIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="ico-fill">
      <path d="M12 3C6.5 3 2 6.6 2 11c0 2.8 1.9 5.3 4.7 6.7l-1 3.6c-.1.3.3.6.6.4l4.2-2.8c.5.1 1 .1 1.5.1 5.5 0 10-3.6 10-8S17.5 3 12 3z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}

export default function Home() {
  const kakao = kakaoHref();
  const kakaoExternal = kakao.startsWith("http");
  const ext = kakaoExternal ? { target: "_blank", rel: "noopener noreferrer" } : {};
  const naverMap = `https://map.naver.com/p/search/${encodeURIComponent(site.mapQuery)}`;
  const kakaoMap = `https://map.kakao.com/?q=${encodeURIComponent(site.mapQuery)}`;

  return (
    <>
      <a href="#programs" className="skip">본문 바로가기</a>
      <Header />
      <SectionDots />

      <main>
        <HeroSlider />

        {/* 2. 프로그램 3분할 */}
        <section id="programs" className="fp split is-dark" aria-label="프로그램">
          {programs.map((p, i) => (
            <a key={p.en} href="#membership" className="split-item zoom">
              <Photo src={p.image} tone={(i % 3) + 1} />
              <div className="shade" />
              <div className="split-copy">
                <span className="split-no">0{i + 1}</span>
                <h2 className="split-en">{p.en}</h2>
                <p className="split-ko">{p.ko}</p>
                <p className="split-more">
                  {p.desc}
                  <span>자세히 보기</span>
                </p>
              </div>
            </a>
          ))}
        </section>

        {/* 3. 센터 특징 */}
        <section id="about" className="fp light">
          <div className="wrap sec-in">
            <div className="sec-head row">
              <div>
                <p className="kicker dark">WHY STAR</p>
                <h2 className="sec-title">
                  레슨 받고, 타석에서 치고,
                  <br />
                  헬스로 몸까지.
                </h2>
              </div>
              <p className="sec-lead">
                테헤란로 원빌딩 지하 2층. 골프와 피트니스를 한 공간에서 끝내는 {site.name}입니다.
              </p>
            </div>
            <ul className="feat">
              {features.map((f, i) => (
                <li key={f.no} className="feat-item lift">
                  <div className="feat-img zoom">
                    <Photo src={f.image} tone={(i % 2) + 4} />
                  </div>
                  <div className="feat-body">
                    <span className="feat-no">{f.no}</span>
                    <h3>{f.title}</h3>
                    <p>{f.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 4. 회원권 */}
        <section id="membership" className="fp is-dark mem">
          <div className="wrap sec-in">
            <div className="sec-head">
              <p className="kicker">MEMBERSHIP</p>
              <h2 className="sec-title">회원권 안내</h2>
            </div>
            <ul className="mem-list">
              {memberships.map((m) => (
                <li key={m.en} className={`mem-item lift${m.highlight ? " is-hl" : ""}`}>
                  <span className="mem-en">{m.en}</span>
                  <h3>{m.name}</h3>
                  {m.price ? (
                    <p className="mem-price">
                      {m.price}
                      <small> {m.unit}</small>
                    </p>
                  ) : (
                    <p className="mem-ask">상담 후 안내</p>
                  )}
                  <p className="mem-note">{m.note}</p>
                </li>
              ))}
            </ul>
            <a className="btn-kakao" href={kakao} {...ext}>
              <KakaoIcon />
              카카오톡으로 가격 · 체험 문의
            </a>
          </div>
        </section>

        {/* 5. 소식 */}
        <section id="news" className="fp white">
          <div className="wrap sec-in news">
            <div className="news-list">
              <div className="news-head">
                <h2 className="en-title">NEWS &amp; NOTICE</h2>
              </div>
              {notices.length > 0 ? (
                <ul>
                  {notices.map((n, i) => (
                    <li key={i}>
                      <a href={n.url || site.blogUrl} target="_blank" rel="noopener noreferrer">
                        <span className="news-kind">{n.kind}</span>
                        <span className="news-title">{n.title}</span>
                        <span className="news-date">{n.date}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="news-empty">
                  이벤트와 운영 소식은 네이버 블로그에 가장 먼저 올라옵니다.
                </p>
              )}
            </div>
            <a className="news-blog lift zoom" href={site.blogUrl} target="_blank" rel="noopener noreferrer">
              <div className="zbg blog-bg" />
              <span className="en-small">NAVER BLOG</span>
              <strong>
                {site.name}
                <br />
                블로그 바로가기
              </strong>
            </a>
          </div>
        </section>

        {/* 6. 오시는 길 */}
        <section id="location" className="fp light">
          <div className="wrap sec-in loc">
            <div className="loc-info">
              <div className="sec-head">
                <p className="kicker dark">LOCATION</p>
                <h2 className="sec-title">오시는 길</h2>
              </div>
              <dl>
                <dt>주소</dt>
                <dd>
                  {site.address}
                  <small>({site.addressSub})</small>
                </dd>
                <dt>전화</dt>
                <dd>
                  <a className="loc-tel" href={`tel:${site.phoneTel}`}>{site.phone}</a>
                </dd>
                <dt>운영시간</dt>
                <dd>
                  {site.hours.map((h) => (
                    <span key={h.label} className="loc-hour">
                      <b>{h.label}</b> {h.value}
                    </span>
                  ))}
                </dd>
                <dt>주차</dt>
                <dd>{site.parking}</dd>
              </dl>
              <div className="loc-btns">
                <a className="btn-naver" href={naverMap} target="_blank" rel="noopener noreferrer">네이버 지도</a>
                <a className="btn-kmap" href={kakaoMap} target="_blank" rel="noopener noreferrer">카카오맵</a>
              </div>
            </div>
            <a className="loc-map zoom" href={naverMap} target="_blank" rel="noopener noreferrer" aria-label="네이버 지도에서 위치 보기">
              <div className="zbg ph ph-5" />
              <span className="loc-map-txt">
                <strong>{site.mapQuery}</strong>
                지도에서 보기 →
              </span>
            </a>
          </div>
        </section>
      </main>

      <footer className="ft">
        <div className="wrap">
          <div className="ft-top">
            <nav className="ft-links" aria-label="하단 메뉴">
              <a href={site.blogUrl} target="_blank" rel="noopener noreferrer">블로그</a>
              <a href={kakao} {...ext}>카카오톡 채널</a>
              <a href={`tel:${site.phoneTel}`}>전화 문의</a>
            </nav>
            <a className="ft-tel" href={`tel:${site.phoneTel}`}>{site.phone}</a>
          </div>
          <p>
            {site.name} · 대표 {site.business.owner} · 사업자등록번호 {site.business.regNo}
            <br />
            {site.address} · TEL {site.phone}
          </p>
          <p className="ft-copy">© {site.name}. All rights reserved.</p>
        </div>
      </footer>

      {/* 오른쪽 고정 퀵메뉴 (PC) */}
      <aside className="quick" aria-label="빠른 상담">
        <a className="q-kakao" href={kakao} {...ext}>
          <KakaoIcon />
          <span>카톡상담</span>
        </a>
        <a className="q-tel" href={`tel:${site.phoneTel}`}>
          <PhoneIcon />
          <span>전화문의</span>
        </a>
        <a className="q-top" href="#top">
          <span>TOP</span>
        </a>
      </aside>

      {/* 하단 고정 바 (모바일) */}
      <div className="mbar">
        <a className="mbar-tel" href={`tel:${site.phoneTel}`}>
          <PhoneIcon />
          전화 상담
        </a>
        <a className="mbar-kakao" href={kakao} {...ext}>
          <KakaoIcon />
          카카오톡 상담
        </a>
      </div>
    </>
  );
}
