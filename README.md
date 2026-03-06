<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>ChatApp — Real-Time Full Stack Chat</title>
<link href="https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,400&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,700;0,9..144,900;1,9..144,400&family=Cabinet+Grotesk:wght@400;500;700;800&display=swap" rel="stylesheet"/>
<style>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --ink: #0e0c1a;
  --ink2: #1a1729;
  --ink3: #252336;
  --surface: #f7f5ff;
  --surface2: #edeaff;
  --lime: #c8f135;
  --violet: #6c47ff;
  --violet-light: #8b68ff;
  --rose: #ff4f6d;
  --sky: #38c8f5;
  --amber: #ffb830;
  --text: #0e0c1a;
  --muted: #7a7890;
  --white: #ffffff;
  --green: #22d991;
}

html { scroll-behavior: smooth; }

body {
  background: var(--surface);
  color: var(--text);
  font-family: 'Cabinet Grotesk', sans-serif;
  overflow-x: hidden;
  cursor: none;
}

.cursor {
  width: 12px; height: 12px;
  background: var(--violet);
  border-radius: 50%;
  position: fixed; top: 0; left: 0;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%,-50%);
  transition: transform 0.08s, width 0.2s, height 0.2s, background 0.2s;
  mix-blend-mode: multiply;
}
.cursor.big { width: 40px; height: 40px; background: var(--lime); }

nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  display: flex; align-items: center; justify-content: space-between;
  padding: 18px 48px;
  background: rgba(247,245,255,0.88);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(108,71,255,0.1);
}
.nav-logo { font-family: 'Fraunces', serif; font-size: 22px; font-weight: 900; color: var(--violet); letter-spacing: -0.02em; }
.nav-links { display: flex; gap: 32px; }
.nav-links a { font-size: 13px; font-weight: 700; color: var(--muted); text-decoration: none; letter-spacing: 0.06em; text-transform: uppercase; transition: color 0.2s; }
.nav-links a:hover { color: var(--violet); }
.nav-cta { background: var(--violet); color: var(--white); padding: 10px 22px; border-radius: 100px; font-size: 13px; font-weight: 700; text-decoration: none; letter-spacing: 0.04em; transition: background 0.2s, transform 0.2s; }
.nav-cta:hover { background: var(--violet-light); transform: scale(1.03); }

/* HERO */
.hero {
  min-height: 100vh;
  display: grid; grid-template-columns: 1fr 1fr;
  align-items: center; padding: 120px 48px 80px; position: relative; overflow: hidden; gap: 48px;
}
.hero-bg-blob { position: absolute; border-radius: 50%; filter: blur(80px); pointer-events: none; z-index: 0; }
.blob1 { width: 600px; height: 600px; background: rgba(108,71,255,0.12); top: -100px; right: -100px; }
.blob2 { width: 400px; height: 400px; background: rgba(200,241,53,0.15); bottom: 0; left: 200px; }
.blob3 { width: 300px; height: 300px; background: rgba(56,200,245,0.1); top: 40%; right: 30%; }

.hero-left { position: relative; z-index: 1; }

.hero-pill {
  display: inline-flex; align-items: center; gap: 8px;
  background: var(--ink); color: var(--lime); border-radius: 100px; padding: 6px 16px 6px 6px;
  font-family: 'DM Mono', monospace; font-size: 11px; letter-spacing: 0.08em; margin-bottom: 28px;
  animation: slideDown 0.5s ease both;
}
.pill-dot { width: 20px; height: 20px; border-radius: 50%; background: var(--lime); display: flex; align-items: center; justify-content: center; }
.pill-dot::after { content: ''; width: 8px; height: 8px; border-radius: 50%; background: var(--ink); }

.hero-title { font-family: 'Fraunces', serif; font-size: clamp(52px, 6.5vw, 92px); font-weight: 900; line-height: 0.95; letter-spacing: -0.03em; margin-bottom: 24px; animation: slideDown 0.5s 0.1s ease both; }
.hero-title .highlight { color: var(--violet); font-style: italic; }
.hero-title .stroke { -webkit-text-stroke: 2px var(--ink); color: transparent; }
.hero-desc { font-size: 17px; color: var(--muted); line-height: 1.7; max-width: 460px; margin-bottom: 36px; animation: slideDown 0.5s 0.2s ease both; }
.hero-actions { display: flex; gap: 12px; flex-wrap: wrap; animation: slideDown 0.5s 0.3s ease both; }

.btn-primary { background: var(--ink); color: var(--lime); padding: 14px 30px; border-radius: 100px; font-size: 14px; font-weight: 800; text-decoration: none; letter-spacing: 0.04em; transition: transform 0.2s, background 0.2s; display: inline-flex; align-items: center; gap: 8px; }
.btn-primary:hover { background: var(--violet); transform: translateY(-2px); }
.btn-outline { background: transparent; color: var(--ink); padding: 13px 28px; border-radius: 100px; font-size: 14px; font-weight: 800; text-decoration: none; letter-spacing: 0.04em; border: 2px solid var(--ink); transition: transform 0.2s, border-color 0.2s, color 0.2s; }
.btn-outline:hover { border-color: var(--violet); color: var(--violet); transform: translateY(-2px); }

.badge-row { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 36px; animation: slideDown 0.5s 0.4s ease both; }
.badge { font-family: 'DM Mono', monospace; font-size: 10px; letter-spacing: 0.08em; padding: 5px 12px; border-radius: 6px; font-weight: 500; }
.badge-react  { background: #e8f8ff; color: #0095c8; border: 1px solid #b8eaff; }
.badge-node   { background: #edfff0; color: #1a7f37; border: 1px solid #b0f0bc; }
.badge-mongo  { background: #e8fff1; color: #116149; border: 1px solid #a3e8c8; }
.badge-socket { background: #f0f0f5; color: #444;    border: 1px solid #d0d0e0; }
.badge-mit    { background: #fff8e8; color: #a05f00; border: 1px solid #fde8a0; }

/* HERO DEVICE */
.hero-right { position: relative; z-index: 1; animation: slideUp 0.7s 0.3s ease both; }
.mock-device { width: 100%; max-width: 440px; margin-left: auto; background: var(--ink2); border-radius: 24px; overflow: hidden; border: 1px solid rgba(255,255,255,0.08); box-shadow: 0 0 0 1px rgba(0,0,0,0.3), 0 40px 80px rgba(14,12,26,0.4), 0 0 120px rgba(108,71,255,0.15); }
.device-header { background: var(--ink); padding: 14px 18px; display: flex; align-items: center; gap: 12px; border-bottom: 1px solid rgba(255,255,255,0.06); }
.device-dots { display: flex; gap: 6px; }
.device-dots span { width: 10px; height: 10px; border-radius: 50%; }
.d-red{background:#ff5f57} .d-yellow{background:#febc2e} .d-green{background:#28c840}
.device-url { flex: 1; text-align: center; font-family: 'DM Mono', monospace; font-size: 11px; color: rgba(255,255,255,0.3); }
.chat-layout { display: flex; height: 380px; }
.chat-sidebar-mini { width: 190px; border-right: 1px solid rgba(255,255,255,0.06); display: flex; flex-direction: column; flex-shrink: 0; }
.cs-header { padding: 14px 14px 10px; font-size: 11px; font-weight: 700; color: rgba(255,255,255,0.5); font-family: 'DM Mono', monospace; letter-spacing: 0.08em; text-transform: uppercase; border-bottom: 1px solid rgba(255,255,255,0.06); }
.cs-search { margin: 10px; background: rgba(255,255,255,0.05); border-radius: 8px; padding: 6px 10px; font-family: 'DM Mono', monospace; font-size: 10px; color: rgba(255,255,255,0.25); border: 1px solid rgba(255,255,255,0.06); }
.cs-user { display: flex; align-items: center; gap: 8px; padding: 9px 12px; transition: background 0.15s; position: relative; }
.cs-user.active { background: rgba(108,71,255,0.2); }
.cs-user:hover { background: rgba(255,255,255,0.04); }
.cs-av { width: 30px; height: 30px; border-radius: 50%; font-size: 11px; font-weight: 800; color: var(--ink); display: flex; align-items: center; justify-content: center; flex-shrink: 0; position: relative; }
.cs-av .pip { position: absolute; bottom: -1px; right: -1px; width: 8px; height: 8px; border-radius: 50%; background: var(--green); border: 2px solid var(--ink2); }
.cs-info { flex: 1; overflow: hidden; }
.cs-name { font-size: 11px; font-weight: 700; color: rgba(255,255,255,0.85); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.cs-preview { font-size: 10px; color: rgba(255,255,255,0.3); font-family: 'DM Mono', monospace; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.cs-badge { background: var(--rose); color: #fff; font-size: 9px; font-family: 'DM Mono', monospace; border-radius: 100px; padding: 1px 5px; }
.chat-main-panel { flex: 1; display: flex; flex-direction: column; overflow: hidden; }
.chat-topbar { padding: 12px 14px; display: flex; align-items: center; gap: 10px; border-bottom: 1px solid rgba(255,255,255,0.06); background: rgba(255,255,255,0.02); }
.topbar-av { width: 28px; height: 28px; border-radius: 50%; background: linear-gradient(135deg,#6c47ff,#38c8f5); display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 800; color: #fff; flex-shrink: 0; }
.topbar-name { font-size: 12px; font-weight: 700; color: rgba(255,255,255,0.9); }
.topbar-status { font-size: 10px; color: var(--green); font-family: 'DM Mono', monospace; }
.chat-msgs { flex: 1; padding: 12px; display: flex; flex-direction: column; gap: 8px; overflow: hidden; }
.msg-row { display: flex; gap: 7px; max-width: 90%; }
.msg-row.me { align-self: flex-end; flex-direction: row-reverse; }
.msg-av-sm { width: 22px; height: 22px; border-radius: 50%; font-size: 9px; font-weight: 800; color: var(--ink); display: flex; align-items: center; justify-content: center; flex-shrink: 0; align-self: flex-end; }
.msg-bubble { padding: 7px 11px; border-radius: 14px; font-size: 11px; line-height: 1.5; max-width: 200px; }
.msg-row:not(.me) .msg-bubble { background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.85); border-radius: 3px 14px 14px 14px; }
.msg-row.me .msg-bubble { background: var(--violet); color: #fff; border-radius: 14px 3px 14px 14px; }
.chat-input-bar { padding: 10px 12px; display: flex; gap: 8px; align-items: center; border-top: 1px solid rgba(255,255,255,0.06); }
.input-box { flex: 1; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 7px 12px; font-size: 11px; color: rgba(255,255,255,0.3); font-family: 'DM Mono', monospace; }
.send-btn { width: 30px; height: 30px; border-radius: 10px; background: var(--violet); border: none; display: flex; align-items: center; justify-content: center; font-size: 14px; color:#fff; cursor:pointer; }

.chip { background: var(--white); border-radius: 12px; padding: 8px 14px; font-size: 11px; font-weight: 700; box-shadow: 0 4px 20px rgba(14,12,26,0.15); display: flex; align-items: center; gap: 6px; white-space: nowrap; animation: floatChip 3s ease-in-out infinite; }
.chip:nth-child(2){animation-delay:1s} .chip:nth-child(3){animation-delay:2s}
.chip-dot{width:8px;height:8px;border-radius:50%}
@keyframes floatChip{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}

/* SECTIONS */
.section-eyebrow { font-family: 'DM Mono', monospace; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: var(--violet); font-weight: 500; display: flex; align-items: center; gap: 10px; margin-bottom: 16px; }
.section-eyebrow::before { content: ''; display: block; width: 24px; height: 2px; background: var(--violet); }
.section-heading { font-family: 'Fraunces', serif; font-size: clamp(36px, 4.5vw, 58px); font-weight: 900; letter-spacing: -0.03em; line-height: 1.05; margin-bottom: 52px; }
.section { padding: 96px 48px; max-width: 1200px; margin: 0 auto; }

/* FEATURES */
.features-wrap { background: var(--ink); padding: 96px 0; }
.features-inner { max-width: 1200px; margin: 0 auto; padding: 0 48px; }
.features-inner .section-eyebrow { color: var(--lime); }
.features-inner .section-eyebrow::before { background: var(--lime); }
.features-inner .section-heading { color: var(--white); }
.features-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1px; background: rgba(255,255,255,0.08); border-radius: 20px; overflow: hidden; border: 1px solid rgba(255,255,255,0.08); }
.feat-card { background: var(--ink2); padding: 36px 30px; transition: background 0.2s; position: relative; overflow: hidden; }
.feat-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: var(--lime); transform: scaleX(0); transform-origin: left; transition: transform 0.3s; }
.feat-card:hover { background: var(--ink3); }
.feat-card:hover::before { transform: scaleX(1); }
.feat-icon { width: 48px; height: 48px; border-radius: 14px; display: flex; align-items: center; justify-content: center; font-size: 22px; margin-bottom: 20px; }
.feat-title { font-size: 17px; font-weight: 800; color: var(--white); margin-bottom: 10px; }
.feat-list { list-style: none; display: flex; flex-direction: column; gap: 6px; }
.feat-list li { font-family: 'DM Mono', monospace; font-size: 12px; color: rgba(255,255,255,0.45); display: flex; align-items: flex-start; gap: 8px; }
.feat-list li::before { content: '→'; color: var(--lime); flex-shrink: 0; }

/* SCREENSHOTS */
.screenshots-wrap { padding: 96px 0; background: var(--surface2); }
.screenshots-inner { max-width: 1200px; margin: 0 auto; padding: 0 48px; }
.screens-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.screen-card { border-radius: 18px; overflow: hidden; border: 1px solid rgba(108,71,255,0.15); box-shadow: 0 20px 60px rgba(14,12,26,0.12); transition: transform 0.3s, box-shadow 0.3s; background: var(--ink2); }
.screen-card:hover { transform: translateY(-4px); box-shadow: 0 32px 80px rgba(14,12,26,0.2); }
.screen-bar { background: var(--ink); padding: 10px 14px; display: flex; align-items: center; gap: 10px; border-bottom: 1px solid rgba(255,255,255,0.06); }
.bar-dots { display: flex; gap: 5px; }
.bar-dots span { width: 9px; height: 9px; border-radius: 50%; }
.bar-url { flex: 1; text-align: center; background: rgba(255,255,255,0.05); border-radius: 6px; padding: 3px 10px; font-family: 'DM Mono', monospace; font-size: 10px; color: rgba(255,255,255,0.25); }
.screen-caption { background: var(--ink); padding: 10px 16px; font-family: 'DM Mono', monospace; font-size: 11px; color: rgba(255,255,255,0.4); letter-spacing: 0.04em; display: flex; align-items: center; gap: 8px; border-top: 1px solid rgba(255,255,255,0.06); }
.cap-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--lime); flex-shrink: 0; }

/* LOGIN MOCK */
.s-login { min-height: 280px; background: radial-gradient(ellipse at 60% 0%,rgba(108,71,255,0.2) 0%,transparent 60%), linear-gradient(180deg,#0e0c1a 0%,#1a1729 100%); display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 40px; }
.login-brand { font-family: 'Fraunces', serif; font-size: 32px; font-weight: 900; color: var(--violet-light); margin-bottom: 4px; }
.login-sub { font-family: 'DM Mono', monospace; font-size: 10px; color: rgba(255,255,255,0.3); margin-bottom: 28px; letter-spacing: 0.1em; }
.login-form { width: 100%; max-width: 260px; display: flex; flex-direction: column; gap: 10px; }
.mock-field { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 10px 14px; font-family: 'DM Mono', monospace; font-size: 11px; color: rgba(255,255,255,0.6); }
.mock-field.focus { border-color: var(--violet); box-shadow: 0 0 0 3px rgba(108,71,255,0.2); }
.mock-submit { background: linear-gradient(135deg,var(--violet),var(--violet-light)); border: none; border-radius: 10px; padding: 11px; font-size: 12px; font-weight: 800; color: #fff; font-family: 'Cabinet Grotesk', sans-serif; letter-spacing: 0.06em; cursor:pointer; }
.mock-divider { text-align: center; font-family: 'DM Mono', monospace; font-size: 10px; color: rgba(255,255,255,0.2); }
.mock-signup-link { text-align: center; font-family: 'DM Mono', monospace; font-size: 10px; color: rgba(255,255,255,0.3); }
.mock-signup-link span { color: var(--violet-light); }

/* DASHBOARD MOCK */
.s-dashboard { height: 280px; display: flex; }
.dash-sidebar { width: 150px; flex-shrink: 0; border-right: 1px solid rgba(255,255,255,0.06); display: flex; flex-direction: column; background: var(--ink); }
.ds-top { padding: 14px 12px; font-family: 'Fraunces', serif; font-size: 18px; font-weight: 900; color: var(--violet-light); border-bottom: 1px solid rgba(255,255,255,0.06); }
.ds-user { display: flex; align-items: center; gap: 8px; padding: 8px 10px; transition: background 0.15s; }
.ds-user.active { background: rgba(108,71,255,0.2); border-left: 2px solid var(--violet); }
.ds-av { width: 26px; height: 26px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: 800; color: var(--ink); position: relative; flex-shrink: 0; }
.ds-av .pip { position: absolute; bottom: -1px; right: -1px; width: 7px; height: 7px; border-radius: 50%; background: var(--green); border: 1.5px solid var(--ink); }
.ds-uname { font-size: 11px; font-weight: 700; color: rgba(255,255,255,0.8); }
.ds-ulast { font-size: 9px; color: rgba(255,255,255,0.3); font-family: 'DM Mono', monospace; max-width: 70px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.ds-notif { margin-left: auto; background: var(--rose); color: #fff; font-size: 9px; border-radius: 100px; padding: 1px 5px; }
.dash-chat { flex: 1; display: flex; flex-direction: column; }
.dc-header { padding: 10px 14px; display: flex; align-items: center; gap: 8px; border-bottom: 1px solid rgba(255,255,255,0.06); }
.dc-av { width: 26px; height: 26px; border-radius: 50%; background: linear-gradient(135deg,#6c47ff,#38c8f5); display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: 800; color: #fff; flex-shrink: 0; }
.dc-name { font-size: 12px; font-weight: 800; color: rgba(255,255,255,0.9); }
.dc-online { font-family: 'DM Mono', monospace; font-size: 9px; color: var(--green); }
.dc-msgs { flex: 1; padding: 10px 12px; display: flex; flex-direction: column; gap: 7px; overflow: hidden; }
.dc-msg { display: flex; }
.dc-msg.me { justify-content: flex-end; }
.dc-bub { padding: 6px 10px; font-size: 10px; border-radius: 12px; max-width: 75%; line-height: 1.5; }
.dc-msg:not(.me) .dc-bub { background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.8); border-radius: 3px 12px 12px 12px; }
.dc-msg.me .dc-bub { background: var(--violet); color: #fff; border-radius: 12px 3px 12px 12px; }
.dc-input { padding: 8px 12px; border-top: 1px solid rgba(255,255,255,0.06); display: flex; gap: 6px; align-items: center; }
.dc-ibox { flex: 1; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 6px 10px; font-size: 10px; color: rgba(255,255,255,0.2); font-family: 'DM Mono', monospace; }
.dc-send { width: 26px; height: 26px; border-radius: 8px; background: var(--violet); border: none; cursor: pointer; color:#fff; font-size:12px; }

/* PROFILE MOCK */
.s-profile { min-height: 280px; background: linear-gradient(180deg,#0e0c1a 0%,#1a1729 100%); display: flex; flex-direction: column; align-items: center; padding: 0 0 24px; }
.profile-cover-bar { width: 100%; height: 70px; background: linear-gradient(135deg,var(--violet) 0%,var(--sky) 100%); margin-bottom: -30px; }
.prof-photo { width: 60px; height: 60px; border-radius: 50%; background: linear-gradient(135deg,var(--amber),var(--rose)); border: 3px solid #0e0c1a; display: flex; align-items: center; justify-content: center; font-size: 22px; font-weight: 900; color: #fff; margin-bottom: 10px; z-index: 1; }
.prof-name { font-size: 16px; font-weight: 800; color: #fff; margin-bottom: 2px; }
.prof-email { font-family: 'DM Mono', monospace; font-size: 10px; color: rgba(255,255,255,0.3); margin-bottom: 20px; }
.prof-fields { width: 100%; padding: 0 24px; display: flex; flex-direction: column; gap: 8px; }
.prof-field { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 10px 14px; }
.pf-label { font-family: 'DM Mono', monospace; font-size: 9px; color: rgba(255,255,255,0.3); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 2px; }
.pf-val { font-size: 12px; color: rgba(255,255,255,0.8); font-weight: 600; }
.pf-val.hi { color: var(--violet-light); }

/* ONLINE MOCK */
.s-online { min-height: 280px; background: linear-gradient(180deg,#0e0c1a 0%,#1a1729 100%); padding: 18px; }
.online-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
.online-title { font-size: 13px; font-weight: 800; color: rgba(255,255,255,0.9); }
.online-count { font-family: 'DM Mono', monospace; font-size: 10px; color: var(--green); background: rgba(34,217,145,0.12); border: 1px solid rgba(34,217,145,0.2); border-radius: 100px; padding: 2px 10px; }
.online-list { display: flex; flex-direction: column; gap: 6px; }
.online-item { display: flex; align-items: center; gap: 10px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.07); border-radius: 12px; padding: 10px 12px; transition: background 0.15s; }
.online-item:hover { background: rgba(108,71,255,0.1); }
.on-av { width: 34px; height: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 800; color: var(--ink); position: relative; flex-shrink: 0; }
.on-av::after { content: ''; position: absolute; bottom: 0; right: 0; width: 9px; height: 9px; border-radius: 50%; background: var(--green); border: 2px solid #1a1729; }
.on-name { font-size: 12px; font-weight: 700; color: rgba(255,255,255,0.85); }
.on-time { font-family: 'DM Mono', monospace; font-size: 10px; color: rgba(255,255,255,0.3); }
.on-msg-btn { margin-left: auto; background: rgba(108,71,255,0.2); border: 1px solid rgba(108,71,255,0.3); color: var(--violet-light); font-size: 10px; font-family: 'DM Mono', monospace; border-radius: 8px; padding: 4px 10px; cursor: pointer; transition: background 0.15s; }
.on-msg-btn:hover { background: rgba(108,71,255,0.35); }

/* TECH STACK */
.tech-wrap { padding: 96px 0; }
.tech-inner { max-width: 1200px; margin: 0 auto; padding: 0 48px; }
.tech-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.tech-card { background: var(--white); border-radius: 20px; padding: 32px 36px; border: 1px solid rgba(108,71,255,0.1); box-shadow: 0 4px 24px rgba(14,12,26,0.06); }
.tc-label { font-family: 'DM Mono', monospace; font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--violet); margin-bottom: 20px; display: flex; align-items: center; gap: 8px; }
.tc-label::before { content: ''; width: 16px; height: 2px; background: var(--violet); }
.tech-stack-item { display: flex; align-items: center; gap: 14px; padding: 12px 0; border-bottom: 1px solid rgba(14,12,26,0.06); }
.tech-stack-item:last-child { border-bottom: none; }
.tech-icon { width: 36px; height: 36px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 16px; flex-shrink: 0; }
.tech-name { font-size: 15px; font-weight: 700; }
.tech-role { font-family: 'DM Mono', monospace; font-size: 11px; color: var(--muted); margin-left: auto; }

/* API */
.api-wrap { background: var(--ink); padding: 96px 0; }
.api-inner { max-width: 1200px; margin: 0 auto; padding: 0 48px; }
.api-inner .section-eyebrow { color: var(--lime); }
.api-inner .section-eyebrow::before { background: var(--lime); }
.api-inner .section-heading { color: var(--white); }
.api-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.api-card { background: var(--ink2); border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; overflow: hidden; }
.api-card-head { padding: 14px 20px; background: var(--ink3); font-family: 'DM Mono', monospace; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--lime); border-bottom: 1px solid rgba(255,255,255,0.06); }
.api-ep { display: flex; align-items: center; gap: 12px; padding: 13px 20px; border-bottom: 1px solid rgba(255,255,255,0.04); }
.api-ep:last-child { border-bottom: none; }
.method-badge { font-family: 'DM Mono', monospace; font-size: 10px; font-weight: 700; padding: 3px 9px; border-radius: 6px; min-width: 44px; text-align: center; }
.m-get  { background: rgba(34,217,145,0.15); color: var(--green); border: 1px solid rgba(34,217,145,0.25); }
.m-post { background: rgba(108,71,255,0.2); color: var(--violet-light); border: 1px solid rgba(108,71,255,0.3); }
.m-put  { background: rgba(255,184,48,0.15); color: var(--amber); border: 1px solid rgba(255,184,48,0.25); }
.api-path { font-family: 'DM Mono', monospace; font-size: 12px; color: rgba(255,255,255,0.7); }
.socket-table { width: 100%; border-collapse: collapse; color: rgba(255,255,255,0.75); }
.socket-table th { font-family: 'DM Mono', monospace; font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,255,255,0.3); text-align: left; padding: 12px 20px; border-bottom: 1px solid rgba(255,255,255,0.06); }
.socket-table td { padding: 13px 20px; font-size: 13px; border-bottom: 1px solid rgba(255,255,255,0.04); }
.socket-table tr:last-child td { border-bottom: none; }
.socket-table tr:hover td { background: rgba(255,255,255,0.02); }
.event-tag { font-family: 'DM Mono', monospace; font-size: 11px; color: var(--sky); }

/* INSTALL */
.install-wrap { padding: 96px 0; background: var(--surface2); }
.install-inner { max-width: 1200px; margin: 0 auto; padding: 0 48px; }
.install-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.code-card { background: var(--ink); border-radius: 16px; overflow: hidden; border: 1px solid rgba(255,255,255,0.06); }
.code-card-head { padding: 12px 18px; background: var(--ink2); font-family: 'DM Mono', monospace; font-size: 11px; color: var(--lime); border-bottom: 1px solid rgba(255,255,255,0.06); }
.code-body { padding: 20px; font-family: 'DM Mono', monospace; font-size: 12px; line-height: 1.9; }
.c-prompt{color:var(--lime)} .c-cmd{color:rgba(255,255,255,0.8)} .c-cmt{color:rgba(255,255,255,0.25)} .c-key{color:var(--amber)} .c-val{color:var(--sky)}

/* TREE */
.tree-card { background: var(--ink); border-radius: 16px; overflow: hidden; border: 1px solid rgba(255,255,255,0.06); padding: 28px 24px; font-family: 'DM Mono', monospace; font-size: 12px; line-height: 2; }
.tr{display:block} .t-dir{color:var(--violet-light)} .t-file{color:var(--sky)} .t-cmt{color:rgba(255,255,255,0.22)} .t-branch{color:rgba(255,255,255,0.2)}

/* FUTURE */
.future-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 12px; }
.future-card { background: var(--white); border: 1px solid rgba(108,71,255,0.12); border-radius: 14px; padding: 22px 20px; display: flex; align-items: center; gap: 14px; transition: border-color 0.2s, transform 0.2s; }
.future-card:hover { border-color: var(--violet); transform: translateY(-2px); }
.future-icon{font-size:24px} .future-text{font-size:14px;font-weight:700}

/* DEPLOY */
.deploy-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 16px; }
.deploy-card { background: var(--ink2); border: 1px solid rgba(255,255,255,0.06); border-radius: 14px; padding: 24px 20px; }
.deploy-label { font-family: 'DM Mono', monospace; font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--lime); margin-bottom: 14px; }
.deploy-items { display: flex; flex-direction: column; gap: 8px; }
.deploy-item { display: flex; align-items: center; gap: 10px; font-size: 14px; color: rgba(255,255,255,0.7); font-weight: 600; }
.deploy-item::before { content: '▸'; color: var(--violet-light); }

/* AUTHOR */
.author-wrap { padding: 96px 48px; text-align: center; }
.author-av { width: 90px; height: 90px; border-radius: 50%; background: linear-gradient(135deg,var(--violet),var(--sky)); margin: 0 auto 22px; display: flex; align-items: center; justify-content: center; font-family: 'Fraunces', serif; font-size: 36px; font-weight: 900; color: #fff; box-shadow: 0 12px 40px rgba(108,71,255,0.35); }
.author-name { font-family: 'Fraunces', serif; font-size: 36px; font-weight: 900; letter-spacing: -0.02em; margin-bottom: 6px; }
.author-role { font-family: 'DM Mono', monospace; font-size: 13px; color: var(--muted); margin-bottom: 28px; }
.gh-btn { display: inline-flex; align-items: center; gap: 10px; background: var(--ink); color: var(--white); padding: 14px 28px; border-radius: 100px; font-size: 14px; font-weight: 700; text-decoration: none; transition: background 0.2s, transform 0.2s; letter-spacing: 0.02em; }
.gh-btn:hover { background: var(--violet); transform: translateY(-2px); }
.star-note { margin-top: 28px; font-family: 'DM Mono', monospace; font-size: 12px; color: var(--muted); }

footer { background: var(--ink); padding: 32px 48px; text-align: center; font-family: 'DM Mono', monospace; font-size: 11px; color: rgba(255,255,255,0.3); letter-spacing: 0.04em; }
footer span { color: var(--lime); }

@keyframes slideDown{from{opacity:0;transform:translateY(-16px)}to{opacity:1;transform:translateY(0)}}
@keyframes slideUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}

@media(max-width:900px){
  .hero{grid-template-columns:1fr;text-align:center;padding-top:100px}
  .hero-desc{margin:0 auto 36px}
  .hero-actions,.badge-row{justify-content:center}
  .hero-right{display:none}
  .features-grid,.screens-grid,.tech-grid,.api-grid,.install-grid{grid-template-columns:1fr}
  .future-grid,.deploy-grid{grid-template-columns:1fr 1fr}
  nav{padding:16px 24px}
  .nav-links{display:none}
}
</style>
</head>
<body>

<div class="cursor" id="cursor"></div>

<nav>
  <div class="nav-logo">💬 ChatApp</div>
  <div class="nav-links">
    <a href="#features">Features</a>
    <a href="#screenshots">Screenshots</a>
    <a href="#stack">Stack</a>
    <a href="#api">API</a>
    <a href="#install">Install</a>
  </div>
  <a class="nav-cta" href="https://github.com/Riyaban583/ChatApp" target="_blank">GitHub →</a>
</nav>

<!-- ═══ HERO ═══ -->
<div class="hero">
  <div class="hero-bg-blob blob1"></div>
  <div class="hero-bg-blob blob2"></div>
  <div class="hero-bg-blob blob3"></div>

  <div class="hero-left">
    <div class="hero-pill">
      <div class="pill-dot"></div>
      FULL·STACK · REAL·TIME · OPEN SOURCE
    </div>
    <h1 class="hero-title">
      Real-Time<br/>
      <span class="highlight">Chat</span><br/>
      <span class="stroke">Application</span>
    </h1>
    <p class="hero-desc">A production-ready chat platform built with React, Node.js, MongoDB &amp; Socket.io — live messaging, JWT auth, online presence, and Cloudinary image hosting.</p>
    <div class="hero-actions">
      <a class="btn-primary" href="https://github.com/Riyaban583/ChatApp" target="_blank">View Source →</a>
      <a class="btn-outline" href="#screenshots">See UI →</a>
    </div>
    <div class="badge-row">
      <span class="badge badge-react">React</span>
      <span class="badge badge-node">Node.js</span>
      <span class="badge badge-mongo">MongoDB</span>
      <span class="badge badge-socket">Socket.io</span>
      <span class="badge badge-mit">MIT</span>
    </div>
  </div>

  <div class="hero-right">
    <div style="position:relative">
      <div class="mock-device">
        <div class="device-header">
          <div class="device-dots"><span class="d-red"></span><span class="d-yellow"></span><span class="d-green"></span></div>
          <div class="device-url">localhost:5173 — ChatApp</div>
        </div>
        <div class="chat-layout">
          <div class="chat-sidebar-mini">
            <div class="cs-header">Messages</div>
            <div class="cs-search">🔍 Search…</div>
            <div class="cs-user active">
              <div class="cs-av" style="background:linear-gradient(135deg,#6c47ff,#38c8f5)">A<div class="pip"></div></div>
              <div class="cs-info"><div class="cs-name">Alice</div><div class="cs-preview">Socket.io magic!</div></div>
            </div>
            <div class="cs-user">
              <div class="cs-av" style="background:linear-gradient(135deg,#ffb830,#ff4f6d)">B<div class="pip"></div></div>
              <div class="cs-info"><div class="cs-name">Bob</div><div class="cs-preview">Sounds great 👍</div></div>
              <div class="cs-badge">2</div>
            </div>
            <div class="cs-user">
              <div class="cs-av" style="background:linear-gradient(135deg,#c8f135,#38c8f5)">C</div>
              <div class="cs-info"><div class="cs-name">Carol</div><div class="cs-preview">See you later!</div></div>
            </div>
            <div class="cs-user">
              <div class="cs-av" style="background:linear-gradient(135deg,#ff4f6d,#ffb830)">D<div class="pip"></div></div>
              <div class="cs-info"><div class="cs-name">Dave</div><div class="cs-preview">On my way!</div></div>
            </div>
          </div>
          <div class="chat-main-panel">
            <div class="chat-topbar">
              <div class="topbar-av">A</div>
              <div><div class="topbar-name">Alice</div><div class="topbar-status">● Online now</div></div>
            </div>
            <div class="chat-msgs">
              <div class="msg-row">
                <div class="msg-av-sm" style="background:linear-gradient(135deg,#6c47ff,#38c8f5)">A</div>
                <div class="msg-bubble">Hey! How's the project? 😊</div>
              </div>
              <div class="msg-row me">
                <div class="msg-av-sm" style="background:linear-gradient(135deg,#c8f135,#38c8f5)">R</div>
                <div class="msg-bubble">Going great! Almost done 🚀</div>
              </div>
              <div class="msg-row">
                <div class="msg-av-sm" style="background:linear-gradient(135deg,#6c47ff,#38c8f5)">A</div>
                <div class="msg-bubble">Real-time chat is amazing!</div>
              </div>
              <div class="msg-row me">
                <div class="msg-av-sm" style="background:linear-gradient(135deg,#c8f135,#38c8f5)">R</div>
                <div class="msg-bubble">Socket.io magic ⚡️</div>
              </div>
            </div>
            <div class="chat-input-bar">
              <div class="input-box">Type a message…</div>
              <div class="send-btn">→</div>
            </div>
          </div>
        </div>
      </div>
      <div style="position:absolute;top:-14px;right:-16px;display:flex;flex-direction:column;gap:8px;z-index:10">
        <div class="chip"><div class="chip-dot" style="background:var(--green)"></div> 4 users online</div>
        <div class="chip">⚡ Socket.io live</div>
        <div class="chip">🔐 JWT secured</div>
      </div>
    </div>
  </div>
</div>

<!-- ═══ FEATURES ═══ -->
<div class="features-wrap" id="features">
  <div class="features-inner">
    <div class="section-eyebrow">Live Features</div>
    <h2 class="section-heading">Everything you need<br/>in a modern chat app</h2>
    <div class="features-grid">
      <div class="feat-card">
        <div class="feat-icon" style="background:rgba(108,71,255,0.2)">🔐</div>
        <div class="feat-title">Authentication System</div>
        <ul class="feat-list">
          <li>User Signup &amp; Login</li>
          <li>JWT token-based auth</li>
          <li>Protected routes</li>
          <li>Secure session handling</li>
        </ul>
      </div>
      <div class="feat-card">
        <div class="feat-icon" style="background:rgba(56,200,245,0.2)">💬</div>
        <div class="feat-title">Real-Time Messaging</div>
        <ul class="feat-list">
          <li>Instant message delivery</li>
          <li>Socket.io WebSockets</li>
          <li>Live UI updates</li>
          <li>Persistent message history</li>
        </ul>
      </div>
      <div class="feat-card">
        <div class="feat-icon" style="background:rgba(34,217,145,0.2)">🟢</div>
        <div class="feat-title">Online Presence</div>
        <ul class="feat-list">
          <li>Live online status</li>
          <li>Instant connect/disconnect</li>
          <li>User presence tracking</li>
          <li>Active user sidebar</li>
        </ul>
      </div>
      <div class="feat-card">
        <div class="feat-icon" style="background:rgba(255,79,109,0.2)">📩</div>
        <div class="feat-title">Unread Messages</div>
        <ul class="feat-list">
          <li>Notification counters</li>
          <li>Per-conversation tracking</li>
          <li>Auto-mark as read</li>
        </ul>
      </div>
      <div class="feat-card">
        <div class="feat-icon" style="background:rgba(255,184,48,0.2)">👤</div>
        <div class="feat-title">User Profiles</div>
        <ul class="feat-list">
          <li>Edit profile details</li>
          <li>Upload profile photo</li>
          <li>Cloudinary CDN hosting</li>
          <li>User search by name</li>
        </ul>
      </div>
      <div class="feat-card">
        <div class="feat-icon" style="background:rgba(200,241,53,0.2)">⚡</div>
        <div class="feat-title">Modern UI</div>
        <ul class="feat-list">
          <li>Responsive layout</li>
          <li>Vite-powered frontend</li>
          <li>React Context API state</li>
          <li>Tailwind CSS styling</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<!-- ═══ SCREENSHOTS ═══ -->
<div class="screenshots-wrap" id="screenshots">
  <div class="screenshots-inner">
    <div class="section-eyebrow">UI Walkthrough</div>
    <h2 class="section-heading">Screenshots</h2>
    <div class="screens-grid">

      <!-- LOGIN -->
      <div class="screen-card">
        <div class="screen-bar">
          <div class="bar-dots"><span class="d-red"></span><span class="d-yellow"></span><span class="d-green"></span></div>
          <div class="bar-url">localhost:5173/login</div>
        </div>
        <div class="s-login">
          <div class="login-brand">💬 ChatApp</div>
          <div class="login-sub">// Welcome back — sign in</div>
          <div class="login-form">
            <div class="mock-field focus">riya@example.com</div>
            <div class="mock-field" style="letter-spacing:0.2em;color:rgba(255,255,255,0.4)">••••••••••</div>
            <button class="mock-submit">SIGN IN →</button>
            <div class="mock-divider">— or —</div>
            <div class="mock-signup-link">No account? <span>Create one free</span></div>
          </div>
        </div>
        <div class="screen-caption"><div class="cap-dot"></div>Login Page — JWT Authentication</div>
      </div>

      <!-- CHAT DASHBOARD -->
      <div class="screen-card">
        <div class="screen-bar">
          <div class="bar-dots"><span class="d-red"></span><span class="d-yellow"></span><span class="d-green"></span></div>
          <div class="bar-url">localhost:5173/ — Home</div>
        </div>
        <div class="s-dashboard">
          <div class="dash-sidebar">
            <div class="ds-top">Chat</div>
            <div class="ds-user active">
              <div class="ds-av" style="background:linear-gradient(135deg,#6c47ff,#38c8f5)">A<div class="pip"></div></div>
              <div><div class="ds-uname">Alice</div><div class="ds-ulast">Socket magic!</div></div>
            </div>
            <div class="ds-user">
              <div class="ds-av" style="background:linear-gradient(135deg,#ffb830,#ff4f6d)">B<div class="pip"></div></div>
              <div><div class="ds-uname">Bob</div><div class="ds-ulast">Sounds great</div></div>
              <div class="ds-notif">3</div>
            </div>
            <div class="ds-user">
              <div class="ds-av" style="background:linear-gradient(135deg,#c8f135,#38c8f5)">C</div>
              <div><div class="ds-uname">Carol</div><div class="ds-ulast">See you!</div></div>
            </div>
            <div class="ds-user">
              <div class="ds-av" style="background:linear-gradient(135deg,#ff4f6d,#ffb830)">D<div class="pip"></div></div>
              <div><div class="ds-uname">Dave</div><div class="ds-ulast">On my way!</div></div>
            </div>
          </div>
          <div class="dash-chat">
            <div class="dc-header">
              <div class="dc-av">A</div>
              <div><div class="dc-name">Alice</div><div class="dc-online">● Online</div></div>
            </div>
            <div class="dc-msgs">
              <div class="dc-msg"><div class="dc-bub">Hey! How's the project? 😊</div></div>
              <div class="dc-msg me"><div class="dc-bub">Going great! 🚀 Almost done</div></div>
              <div class="dc-msg"><div class="dc-bub">Real-time is amazing!</div></div>
              <div class="dc-msg me"><div class="dc-bub">Socket.io ⚡ is the magic</div></div>
            </div>
            <div class="dc-input">
              <div class="dc-ibox">Type a message…</div>
              <div class="dc-send">→</div>
            </div>
          </div>
        </div>
        <div class="screen-caption"><div class="cap-dot"></div>Chat Dashboard — Real-Time Messaging</div>
      </div>

      <!-- PROFILE -->
      <div class="screen-card">
        <div class="screen-bar">
          <div class="bar-dots"><span class="d-red"></span><span class="d-yellow"></span><span class="d-green"></span></div>
          <div class="bar-url">localhost:5173/profile</div>
        </div>
        <div class="s-profile">
          <div class="profile-cover-bar"></div>
          <div class="prof-photo">R</div>
          <div class="prof-name">Riya Bansal</div>
          <div class="prof-email">riya@example.com</div>
          <div class="prof-fields">
            <div class="prof-field"><div class="pf-label">Display Name</div><div class="pf-val">Riya Bansal</div></div>
            <div class="prof-field"><div class="pf-label">Email Address</div><div class="pf-val">riya@example.com</div></div>
            <div class="prof-field"><div class="pf-label">Profile Image</div><div class="pf-val hi">☁️ Stored on Cloudinary</div></div>
          </div>
        </div>
        <div class="screen-caption"><div class="cap-dot"></div>Profile Page — Cloudinary Image Upload</div>
      </div>

      <!-- ONLINE USERS -->
      <div class="screen-card">
        <div class="screen-bar">
          <div class="bar-dots"><span class="d-red"></span><span class="d-yellow"></span><span class="d-green"></span></div>
          <div class="bar-url">localhost:5173/ — Online Users</div>
        </div>
        <div class="s-online">
          <div class="online-head">
            <div class="online-title">Active Users</div>
            <div class="online-count">● 4 online</div>
          </div>
          <div class="online-list">
            <div class="online-item">
              <div class="on-av" style="background:linear-gradient(135deg,#6c47ff,#38c8f5)">A</div>
              <div><div class="on-name">Alice</div><div class="on-time">Active now</div></div>
              <button class="on-msg-btn">Message</button>
            </div>
            <div class="online-item">
              <div class="on-av" style="background:linear-gradient(135deg,#ffb830,#ff4f6d)">B</div>
              <div><div class="on-name">Bob</div><div class="on-time">Active now</div></div>
              <button class="on-msg-btn">Message</button>
            </div>
            <div class="online-item">
              <div class="on-av" style="background:linear-gradient(135deg,#ff4f6d,#ffb830)">D</div>
              <div><div class="on-name">Dave</div><div class="on-time">Active now</div></div>
              <button class="on-msg-btn">Message</button>
            </div>
          </div>
        </div>
        <div class="screen-caption"><div class="cap-dot"></div>Online Users — Real-Time Presence</div>
      </div>

    </div>
  </div>
</div>

<!-- ═══ TECH STACK ═══ -->
<div class="tech-wrap" id="stack">
  <div class="tech-inner">
    <div class="section-eyebrow">Technology</div>
    <h2 class="section-heading">Tech Stack</h2>
    <div class="tech-grid">
      <div class="tech-card">
        <div class="tc-label">Frontend</div>
        <div class="tech-stack-item"><div class="tech-icon" style="background:#e8f8ff">⚛️</div><div class="tech-name">React</div><div class="tech-role">UI Framework</div></div>
        <div class="tech-stack-item"><div class="tech-icon" style="background:#f3e8ff">⚡</div><div class="tech-name">Vite</div><div class="tech-role">Build Tool</div></div>
        <div class="tech-stack-item"><div class="tech-icon" style="background:#e8fff5">🔄</div><div class="tech-name">Context API</div><div class="tech-role">State Management</div></div>
        <div class="tech-stack-item"><div class="tech-icon" style="background:#fff8e8">📡</div><div class="tech-name">Axios</div><div class="tech-role">HTTP Client</div></div>
        <div class="tech-stack-item"><div class="tech-icon" style="background:#f0f0f8">🔌</div><div class="tech-name">Socket.io Client</div><div class="tech-role">WebSocket Events</div></div>
        <div class="tech-stack-item"><div class="tech-icon" style="background:#e8f4ff">🎨</div><div class="tech-name">Tailwind CSS</div><div class="tech-role">Styling</div></div>
      </div>
      <div class="tech-card">
        <div class="tc-label">Backend</div>
        <div class="tech-stack-item"><div class="tech-icon" style="background:#edfff0">🟢</div><div class="tech-name">Node.js</div><div class="tech-role">Runtime</div></div>
        <div class="tech-stack-item"><div class="tech-icon" style="background:#f3e8ff">🚂</div><div class="tech-name">Express.js</div><div class="tech-role">Web Framework</div></div>
        <div class="tech-stack-item"><div class="tech-icon" style="background:#e8fff0">🍃</div><div class="tech-name">MongoDB</div><div class="tech-role">Database</div></div>
        <div class="tech-stack-item"><div class="tech-icon" style="background:#ffe8e8">🔴</div><div class="tech-name">Mongoose</div><div class="tech-role">ODM</div></div>
        <div class="tech-stack-item"><div class="tech-icon" style="background:#f0f0f8">🔌</div><div class="tech-name">Socket.io</div><div class="tech-role">WebSocket Server</div></div>
        <div class="tech-stack-item"><div class="tech-icon" style="background:#fff8e8">☁️</div><div class="tech-name">Cloudinary</div><div class="tech-role">Image Hosting</div></div>
      </div>
    </div>
  </div>
</div>

<!-- ═══ API ═══ -->
<div class="api-wrap" id="api">
  <div class="api-inner">
    <div class="section-eyebrow">REST API</div>
    <h2 class="section-heading">API Endpoints</h2>
    <div class="api-grid">
      <div class="api-card">
        <div class="api-card-head">User Routes</div>
        <div class="api-ep"><span class="method-badge m-post">POST</span><span class="api-path">/api/users/signup</span></div>
        <div class="api-ep"><span class="method-badge m-post">POST</span><span class="api-path">/api/users/login</span></div>
        <div class="api-ep"><span class="method-badge m-get">GET</span><span class="api-path">/api/users/check</span></div>
        <div class="api-ep"><span class="method-badge m-put">PUT</span><span class="api-path">/api/users/update-profile</span></div>
      </div>
      <div class="api-card">
        <div class="api-card-head">Message Routes</div>
        <div class="api-ep"><span class="method-badge m-post">POST</span><span class="api-path">/api/messages/send</span></div>
        <div class="api-ep"><span class="method-badge m-get">GET</span><span class="api-path">/api/messages/:id</span></div>
      </div>
    </div>
    <br/><br/>
    <div class="section-eyebrow">WebSocket</div>
    <h2 class="section-heading" style="margin-bottom:28px">Socket Events</h2>
    <div class="api-card" style="max-width:600px">
      <div class="api-card-head">Socket.io Events</div>
      <table class="socket-table">
        <thead><tr><th>Event</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td><span class="event-tag">connection</span></td><td>Fired when a user connects</td></tr>
          <tr><td><span class="event-tag">getOnlineUsers</span></td><td>Emits current online user list</td></tr>
          <tr><td><span class="event-tag">disconnect</span></td><td>Fired when a user disconnects</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

<!-- ═══ INSTALL ═══ -->
<div class="install-wrap" id="install">
  <div class="install-inner">
    <div class="section-eyebrow">Getting Started</div>
    <h2 class="section-heading">Installation Guide</h2>
    <div class="install-grid">
      <div style="display:flex;flex-direction:column;gap:16px">
        <div class="code-card">
          <div class="code-card-head">📦 Clone &amp; Install</div>
          <div class="code-body">
            <span class="c-cmt"># 1. Clone the repo</span><br/>
            <span class="c-prompt">$</span> <span class="c-cmd">git clone https://github.com/Riyaban583/ChatApp.git</span><br/>
            <span class="c-prompt">$</span> <span class="c-cmd">cd ChatApp</span><br/><br/>
            <span class="c-cmt"># 2. Install frontend deps</span><br/>
            <span class="c-prompt">$</span> <span class="c-cmd">cd client &amp;&amp; npm install</span><br/><br/>
            <span class="c-cmt"># 3. Install backend deps</span><br/>
            <span class="c-prompt">$</span> <span class="c-cmd">cd server &amp;&amp; npm install</span>
          </div>
        </div>
        <div class="code-card">
          <div class="code-card-head">▶️ Run the App</div>
          <div class="code-body">
            <span class="c-cmt"># Start backend (port 5000)</span><br/>
            <span class="c-prompt">$</span> <span class="c-cmd">cd server &amp;&amp; npm run dev</span><br/><br/>
            <span class="c-cmt"># Start frontend (port 5173)</span><br/>
            <span class="c-prompt">$</span> <span class="c-cmd">cd client &amp;&amp; npm run dev</span>
          </div>
        </div>
      </div>
      <div class="code-card">
        <div class="code-card-head">🔑 server/.env</div>
        <div class="code-body">
          <span class="c-cmt"># Server</span><br/>
          <span class="c-key">PORT</span>=<span class="c-val">5000</span><br/><br/>
          <span class="c-cmt"># MongoDB</span><br/>
          <span class="c-key">MONGO_URI</span>=<span class="c-val">your_mongodb_connection_string</span><br/><br/>
          <span class="c-cmt"># JWT</span><br/>
          <span class="c-key">JWT_SECRET</span>=<span class="c-val">your_secret_key</span><br/><br/>
          <span class="c-cmt"># Cloudinary</span><br/>
          <span class="c-key">CLOUDINARY_CLOUD_NAME</span>=<span class="c-val">your_cloud</span><br/>
          <span class="c-key">CLOUDINARY_API_KEY</span>=<span class="c-val">your_api_key</span><br/>
          <span class="c-key">CLOUDINARY_API_SECRET</span>=<span class="c-val">your_secret</span><br/><br/>
          <span class="c-cmt">⚠️  Never push .env to GitHub</span>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ═══ STRUCTURE ═══ -->
<div class="api-wrap">
  <div class="api-inner">
    <div class="section-eyebrow">Codebase</div>
    <h2 class="section-heading">Project Structure</h2>
    <div class="tree-card">
      <span class="tr"><span class="t-branch">📁 </span><span class="t-dir">ChatApp/</span></span>
      <span class="tr"><span class="t-branch">├── 📁 </span><span class="t-dir">client/</span></span>
      <span class="tr"><span class="t-branch">│   ├── 📁 </span><span class="t-dir">context/</span></span>
      <span class="tr"><span class="t-branch">│   │   ├── </span><span class="t-file">AuthContext.jsx</span><span class="t-cmt">     // JWT auth state</span></span>
      <span class="tr"><span class="t-branch">│   │   └── </span><span class="t-file">ChatContext.jsx</span><span class="t-cmt">     // messages &amp; socket</span></span>
      <span class="tr"><span class="t-branch">│   └── 📁 </span><span class="t-dir">src/</span></span>
      <span class="tr"><span class="t-branch">│       ├── 📁 </span><span class="t-dir">components/</span></span>
      <span class="tr"><span class="t-branch">│       │   ├── </span><span class="t-file">ChatContainer.jsx</span><span class="t-cmt">   // chat window</span></span>
      <span class="tr"><span class="t-branch">│       │   ├── </span><span class="t-file">Sidebar.jsx</span><span class="t-cmt">         // user list</span></span>
      <span class="tr"><span class="t-branch">│       │   └── </span><span class="t-file">RightSidebar.jsx</span><span class="t-cmt">    // online panel</span></span>
      <span class="tr"><span class="t-branch">│       └── 📁 </span><span class="t-dir">pages/</span></span>
      <span class="tr"><span class="t-branch">│           ├── </span><span class="t-file">HomePage.jsx</span></span>
      <span class="tr"><span class="t-branch">│           ├── </span><span class="t-file">LoginPage.jsx</span></span>
      <span class="tr"><span class="t-branch">│           └── </span><span class="t-file">ProfilePage.jsx</span></span>
      <span class="tr"><span class="t-branch">│</span></span>
      <span class="tr"><span class="t-branch">└── 📁 </span><span class="t-dir">server/</span></span>
      <span class="tr"><span class="t-branch">    ├── 📁 </span><span class="t-dir">controllers/</span><span class="t-cmt">    messageController.js · userController.js</span></span>
      <span class="tr"><span class="t-branch">    ├── 📁 </span><span class="t-dir">middleware/</span><span class="t-cmt">     auth.js</span></span>
      <span class="tr"><span class="t-branch">    ├── 📁 </span><span class="t-dir">models/</span><span class="t-cmt">         Message.js · User.js</span></span>
      <span class="tr"><span class="t-branch">    ├── 📁 </span><span class="t-dir">routes/</span><span class="t-cmt">         messageRoutes.js · userRoutes.js</span></span>
      <span class="tr"><span class="t-branch">    ├── 📁 </span><span class="t-dir">lib/</span><span class="t-cmt">            db.js · cloudinary.js · utils.js</span></span>
      <span class="tr"><span class="t-branch">    └── </span><span class="t-file">server.js</span><span class="t-cmt">           // Express + Socket.io entry</span></span>
    </div>
  </div>
</div>

<!-- ═══ FUTURE + DEPLOY ═══ -->
<div class="section">
  <div class="section-eyebrow">Roadmap</div>
  <h2 class="section-heading">Future Improvements</h2>
  <div class="future-grid">
    <div class="future-card"><div class="future-icon">⌨️</div><div class="future-text">Typing Indicator</div></div>
    <div class="future-card"><div class="future-icon">✅</div><div class="future-text">Message Seen Status</div></div>
    <div class="future-card"><div class="future-icon">👥</div><div class="future-text">Group Chat</div></div>
    <div class="future-card"><div class="future-icon">📎</div><div class="future-text">Media &amp; File Sharing</div></div>
    <div class="future-card"><div class="future-icon">📞</div><div class="future-text">Voice &amp; Video Calls</div></div>
    <div class="future-card"><div class="future-icon">🔔</div><div class="future-text">Push Notifications</div></div>
  </div>
  <br/><br/><br/>
  <div class="section-eyebrow">Deployment</div>
  <h2 class="section-heading">Deployment Ideas</h2>
  <div class="deploy-grid">
    <div class="deploy-card">
      <div class="deploy-label">Frontend</div>
      <div class="deploy-items"><div class="deploy-item">Vercel</div><div class="deploy-item">Netlify</div></div>
    </div>
    <div class="deploy-card">
      <div class="deploy-label">Backend</div>
      <div class="deploy-items"><div class="deploy-item">Render</div><div class="deploy-item">Railway</div><div class="deploy-item">AWS EC2</div></div>
    </div>
    <div class="deploy-card">
      <div class="deploy-label">Database</div>
      <div class="deploy-items"><div class="deploy-item">MongoDB Atlas</div></div>
    </div>
  </div>
</div>

<!-- ═══ AUTHOR ═══ -->
<div class="author-wrap">
  <div class="author-av">R</div>
  <div class="author-name">Riya Bansal</div>
  <div class="author-role">// Full Stack Developer</div>
  <a class="gh-btn" href="https://github.com/Riyaban583" target="_blank">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
    github.com/Riyaban583
  </a>
  <div class="star-note">⭐ If you like this project, give it a star on GitHub!</div>
</div>

<footer>
  Built with ❤️ by <span>Riya Bansal</span> &nbsp;·&nbsp; React · Node.js · MongoDB · Socket.io &nbsp;·&nbsp; <span>MIT License</span>
</footer>

<script>
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});
document.querySelectorAll('a, button, .feat-card, .screen-card, .tech-card, .future-card, .online-item').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('big'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('big'));
});
</script>
</body>
</html>
