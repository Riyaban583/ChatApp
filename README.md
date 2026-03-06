<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>ChatApp — Real-Time Full Stack Chat</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700;1,900&family=JetBrains+Mono:wght@300;400;500;700&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --cream:#f5f0e8;
  --cream2:#ede8df;
  --black:#0a0a0a;
  --black2:#141414;
  --black3:#1e1e1e;
  --yellow:#ffe000;
  --yellow2:#ffd000;
  --red:#e82d2d;
  --green:#00c853;
  --blue:#0066ff;
  --muted:#6b6560;
  --muted2:#9a948e;
  --border:#d4cec6;
  --border2:#c4beb6;
  --white:#ffffff;
}
html{scroll-behavior:smooth}
body{background:var(--cream);color:var(--black);font-family:'Manrope',sans-serif;overflow-x:hidden;cursor:none}

/* CURSOR */
#cur{position:fixed;width:12px;height:12px;background:var(--black);border-radius:50%;top:0;left:0;pointer-events:none;z-index:9999;transform:translate(-50%,-50%);transition:width .18s,height .18s,background .18s,border-radius .18s}
#cur.hov{width:44px;height:44px;background:var(--yellow);border-radius:4px}

/* NAV */
nav{
  position:fixed;top:0;left:0;right:0;z-index:100;
  display:flex;align-items:stretch;
  background:var(--black);
  border-bottom:2px solid var(--yellow);
  height:56px;
}
.nav-brand{
  display:flex;align-items:center;padding:0 28px;
  font-family:'JetBrains Mono',monospace;font-size:13px;font-weight:700;
  color:var(--yellow);letter-spacing:.04em;
  border-right:1px solid #2a2a2a;
  white-space:nowrap;
}
.nav-links{display:flex;align-items:center;gap:0;padding:0 16px;flex:1}
.nav-links a{
  font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:500;
  color:#666;text-decoration:none;letter-spacing:.12em;text-transform:uppercase;
  padding:0 14px;height:100%;display:flex;align-items:center;
  transition:color .15s,background .15s;
}
.nav-links a:hover{color:var(--yellow);background:#1a1a1a}
.nav-cta{
  display:flex;align-items:center;padding:0 24px;
  font-family:'JetBrains Mono',monospace;font-size:11px;font-weight:700;
  color:var(--black);background:var(--yellow);text-decoration:none;letter-spacing:.06em;
  border-left:1px solid var(--yellow2);
  transition:background .15s;white-space:nowrap;
}
.nav-cta:hover{background:var(--yellow2)}

/* HERO */
.hero{
  min-height:100vh;
  display:grid;grid-template-columns:1fr 1fr;
  border-top:56px solid transparent;
}
.hero-left{
  padding:80px 64px;
  border-right:2px solid var(--border2);
  display:flex;flex-direction:column;justify-content:center;
  position:relative;
  background:var(--cream);
}
.hero-left::after{
  content:'';position:absolute;bottom:0;left:0;right:0;height:3px;
  background:repeating-linear-gradient(90deg,var(--yellow) 0,var(--yellow) 6px,transparent 6px,transparent 12px);
}
.hero-eyebrow{
  font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:500;
  letter-spacing:.2em;text-transform:uppercase;color:var(--muted);
  margin-bottom:24px;display:flex;align-items:center;gap:10px;
  animation:up .5s ease both;
}
.hero-eyebrow::before{content:'';width:20px;height:1px;background:var(--black)}
.hero-title{
  font-family:'Playfair Display',serif;
  font-size:clamp(56px,7.5vw,112px);
  font-weight:900;line-height:.88;letter-spacing:-.03em;
  margin-bottom:28px;
  animation:up .5s .08s ease both;
}
.hero-title em{font-style:italic;color:transparent;-webkit-text-stroke:2px var(--black)}
.hero-title .yel{color:var(--yellow);-webkit-text-stroke:0}
.hero-desc{
  font-size:16px;line-height:1.7;color:var(--muted);
  max-width:440px;margin-bottom:44px;
  animation:up .5s .16s ease both;
}
.hero-btns{display:flex;gap:12px;flex-wrap:wrap;animation:up .5s .24s ease both}
.btn-blk{
  font-family:'JetBrains Mono',monospace;font-size:12px;font-weight:700;
  color:var(--cream);background:var(--black);
  padding:14px 28px;text-decoration:none;letter-spacing:.06em;
  border:2px solid var(--black);transition:background .15s,color .15s;
}
.btn-blk:hover{background:var(--yellow);color:var(--black);border-color:var(--yellow)}
.btn-out{
  font-family:'JetBrains Mono',monospace;font-size:12px;font-weight:700;
  color:var(--black);background:transparent;
  padding:14px 28px;text-decoration:none;letter-spacing:.06em;
  border:2px solid var(--black);transition:background .15s;
}
.btn-out:hover{background:var(--cream2)}
.hero-tags{display:flex;flex-wrap:wrap;gap:8px;margin-top:36px;animation:up .5s .32s ease both}
.tag{
  font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:500;
  padding:5px 11px;letter-spacing:.06em;
  border:1px solid var(--border2);color:var(--muted);
  background:var(--white);
}

/* HERO RIGHT — MOCKUP */
.hero-right{
  background:var(--black2);
  display:flex;flex-direction:column;align-items:center;justify-content:center;
  padding:60px 48px;position:relative;overflow:hidden;
  animation:up .6s .2s ease both;
}
.hero-right::before{
  content:'';position:absolute;inset:0;
  background:repeating-linear-gradient(45deg,transparent,transparent 30px,rgba(255,224,0,.02) 30px,rgba(255,224,0,.02) 31px);
}
.device{
  width:100%;max-width:420px;
  background:#0f0f0f;border-radius:10px;overflow:hidden;
  border:1px solid #2a2a2a;
  box-shadow:0 0 0 1px #000,0 32px 64px rgba(0,0,0,.8),0 0 60px rgba(255,224,0,.06);
  position:relative;z-index:1;
}
.dbar{background:#1a1a1a;padding:11px 15px;display:flex;align-items:center;gap:10px;border-bottom:1px solid #2a2a2a}
.ddots{display:flex;gap:5px}
.ddots span{width:10px;height:10px;border-radius:50%}
.dot1{background:#ff5f57}.dot2{background:#febc2e}.dot3{background:#28c840}
.durl{flex:1;text-align:center;font-family:'JetBrains Mono',monospace;font-size:10px;color:#444;background:#111;border-radius:4px;padding:4px 12px}
.dlayout{display:flex;height:340px}
.dsb{width:170px;flex-shrink:0;border-right:1px solid #1e1e1e;display:flex;flex-direction:column;background:#0a0a0a}
.dsb-title{padding:12px 12px 8px;font-family:'JetBrains Mono',monospace;font-size:9px;font-weight:700;color:#444;letter-spacing:.12em;text-transform:uppercase;border-bottom:1px solid #1e1e1e}
.dsb-search{margin:8px 8px;background:#111;border:1px solid #1e1e1e;border-radius:5px;padding:5px 9px;font-family:'JetBrains Mono',monospace;font-size:9px;color:#333}
.du{display:flex;align-items:center;gap:8px;padding:8px 10px;cursor:pointer;transition:background .12s}
.du.on,.du:hover{background:#111}
.du.on{border-left:2px solid var(--yellow)}
.dav{width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:800;color:#000;flex-shrink:0;position:relative}
.gpip{position:absolute;bottom:-1px;right:-1px;width:7px;height:7px;border-radius:50%;background:var(--green);border:1.5px solid #0a0a0a}
.dun{font-size:10px;font-weight:700;color:#ccc;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.dul{font-family:'JetBrains Mono',monospace;font-size:8px;color:#444;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:90px}
.dnb{margin-left:auto;background:var(--red);color:#fff;font-size:8px;font-family:'JetBrains Mono',monospace;border-radius:8px;padding:1px 5px}
.dchat{flex:1;display:flex;flex-direction:column;overflow:hidden}
.dtop{padding:9px 12px;display:flex;align-items:center;gap:8px;border-bottom:1px solid #1e1e1e;background:#0d0d0d}
.dtop-av{width:24px;height:24px;border-radius:50%;background:linear-gradient(135deg,#ffe000,#ff6b00);display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:800;color:#000;flex-shrink:0}
.dtop-n{font-size:11px;font-weight:700;color:#ddd}
.dtop-s{font-family:'JetBrains Mono',monospace;font-size:8px;color:var(--green)}
.dmsgs{flex:1;padding:10px;display:flex;flex-direction:column;gap:7px;overflow:hidden}
.msg{display:flex;gap:5px;max-width:86%}
.msg.me{align-self:flex-end;flex-direction:row-reverse}
.mav{width:18px;height:18px;border-radius:50%;font-size:7px;font-weight:800;color:#000;display:flex;align-items:center;justify-content:center;flex-shrink:0;align-self:flex-end}
.mb{padding:6px 10px;border-radius:10px;font-size:9px;line-height:1.55;max-width:180px}
.msg:not(.me) .mb{background:#1a1a1a;color:#ccc;border-radius:3px 10px 10px 10px;border:1px solid #222}
.msg.me .mb{background:var(--yellow);color:#000;border-radius:10px 3px 10px 10px;font-weight:700}
.dinp{padding:8px 10px;border-top:1px solid #1e1e1e;display:flex;gap:6px}
.dibox{flex:1;background:#111;border:1px solid #1e1e1e;border-radius:6px;padding:6px 10px;font-size:9px;color:#333;font-family:'JetBrains Mono',monospace}
.dsend{width:26px;height:26px;border-radius:5px;background:var(--yellow);border:none;cursor:pointer;color:#000;font-size:12px;font-weight:900}

/* floating labels */
.flabels{position:absolute;right:-10px;top:40px;display:flex;flex-direction:column;gap:8px;z-index:2}
.flabel{
  background:var(--yellow);color:var(--black);
  font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:700;
  padding:7px 12px;display:flex;align-items:center;gap:6px;
  box-shadow:3px 3px 0 rgba(0,0,0,0.3);
  animation:fl 3s ease-in-out infinite;
}
.flabel:nth-child(2){animation-delay:.8s;background:#fff}
.flabel:nth-child(3){animation-delay:1.6s;background:var(--green);color:#fff}
.fldot{width:6px;height:6px;border-radius:50%;background:currentColor;opacity:.6}
@keyframes fl{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}

/* STAT BAR */
.statbar{
  display:grid;grid-template-columns:repeat(4,1fr);
  border-top:2px solid var(--black);border-bottom:2px solid var(--black);
}
.stat{
  padding:32px 40px;
  border-right:2px solid var(--black);
  position:relative;
}
.stat:last-child{border-right:none}
.stat-num{font-family:'Playfair Display',serif;font-size:52px;font-weight:900;line-height:1;letter-spacing:-.04em;margin-bottom:6px}
.stat-label{font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:500;color:var(--muted);letter-spacing:.12em;text-transform:uppercase}
.stat:nth-child(1) .stat-num{color:var(--black)}
.stat:nth-child(2) .stat-num{color:var(--black);-webkit-text-stroke:1.5px var(--black);-webkit-text-fill-color:transparent}
.stat:nth-child(3) .stat-num{color:var(--black)}
.stat:nth-child(4) .stat-num{color:var(--black)}
.stat-bg{position:absolute;top:12px;right:16px;font-size:48px;opacity:.06;line-height:1}

/* SECTION PATTERN */
.sec-wrap{padding:96px 0}
.sec-wrap.dark{background:var(--black);color:var(--cream)}
.sec-wrap.cream2{background:var(--cream2)}
.sec-inner{max-width:1240px;margin:0 auto;padding:0 64px}
.sec-label{
  font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:700;
  letter-spacing:.2em;text-transform:uppercase;
  display:inline-flex;align-items:center;gap:8px;
  margin-bottom:16px;
}
.sec-label .sl-num{
  width:22px;height:22px;display:flex;align-items:center;justify-content:center;
  background:var(--yellow);color:var(--black);font-size:10px;font-weight:800;
  flex-shrink:0;
}
.sec-h{
  font-family:'Playfair Display',serif;
  font-size:clamp(36px,4.5vw,60px);font-weight:900;
  line-height:1;letter-spacing:-.03em;margin-bottom:56px;
}
.sec-h em{font-style:italic}
.sec-wrap.dark .sec-label{color:var(--yellow)}
.sec-wrap.dark .sec-h{color:var(--cream)}

/* FEATURES GRID */
.feat-grid{
  display:grid;grid-template-columns:repeat(3,1fr);
  border:2px solid var(--border2);
}
.feat-card{
  padding:36px 32px;border-right:2px solid var(--border2);border-bottom:2px solid var(--border2);
  position:relative;transition:background .2s;cursor:default;overflow:hidden;
}
.feat-card:hover{background:var(--yellow)}
.feat-card:nth-child(3n){border-right:none}
.feat-card:nth-child(4),.feat-card:nth-child(5),.feat-card:nth-child(6){border-bottom:none}
.feat-card:hover .feat-ico{transform:scale(1.15) rotate(-5deg)}
.feat-card:hover .feat-t,.feat-card:hover .feat-ul li{color:var(--black)}
.feat-card:hover .feat-ul li::before{color:var(--black)}
.feat-ico{font-size:28px;margin-bottom:18px;display:block;transition:transform .2s}
.feat-t{font-size:16px;font-weight:800;color:var(--black);margin-bottom:14px;transition:color .2s}
.feat-ul{list-style:none;display:flex;flex-direction:column;gap:6px}
.feat-ul li{font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--muted);display:flex;align-items:flex-start;gap:7px;transition:color .2s}
.feat-ul li::before{content:'→';color:var(--muted2);flex-shrink:0;transition:color .2s}

/* SCREENSHOTS */
.ss-grid{display:grid;grid-template-columns:1fr 1fr;gap:2px;background:var(--border2)}
.ss-card{background:var(--black2);overflow:hidden;position:relative;transition:transform .3s}
.ss-card:hover{transform:scale(1.01);z-index:1}
.ss-topbar{background:#111;padding:10px 14px;display:flex;align-items:center;gap:9px;border-bottom:1px solid #222}
.sstdots{display:flex;gap:5px}
.sstdots span{width:9px;height:9px;border-radius:50%}
.ssturl{flex:1;text-align:center;background:#0a0a0a;border-radius:4px;padding:3px 10px;font-family:'JetBrains Mono',monospace;font-size:10px;color:#333}
.ss-label{background:var(--yellow);color:var(--black);font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:700;padding:8px 14px;letter-spacing:.06em;border-top:1px solid #000}

/* LOGIN SCREEN */
.slogin{
  min-height:280px;
  background:radial-gradient(ellipse at 50% 0%,rgba(255,224,0,.08) 0%,transparent 60%),#0a0a0a;
  display:flex;flex-direction:column;align-items:center;justify-content:center;
  padding:36px 32px;
}
.slogin-brand{font-family:'Playfair Display',serif;font-size:26px;font-weight:900;color:var(--yellow);margin-bottom:4px;letter-spacing:-.02em}
.slogin-sub{font-family:'JetBrains Mono',monospace;font-size:9px;color:#333;margin-bottom:24px;letter-spacing:.1em}
.slogin-form{width:100%;max-width:240px;display:flex;flex-direction:column;gap:8px}
.sf{background:#111;border:1px solid #222;border-radius:5px;padding:9px 12px;font-family:'JetBrains Mono',monospace;font-size:10px;color:#888}
.sf.act{border-color:var(--yellow);box-shadow:0 0 0 2px rgba(255,224,0,.15)}
.sb2{background:var(--yellow);border:none;border-radius:5px;padding:10px;font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:800;color:#000;cursor:pointer;letter-spacing:.08em}
.slink{text-align:center;font-family:'JetBrains Mono',monospace;font-size:9px;color:#333;margin-top:4px}
.slink span{color:var(--yellow)}

/* DASHBOARD SCREEN */
.sdash{height:280px;display:flex;background:#0a0a0a}
.sd-sb{width:138px;flex-shrink:0;border-right:1px solid #1a1a1a;background:#050505}
.sd-sbt{padding:11px 10px;font-family:'Playfair Display',serif;font-size:16px;font-weight:900;color:var(--yellow);border-bottom:1px solid #1a1a1a;font-style:italic}
.sd-u{display:flex;align-items:center;gap:6px;padding:7px 8px;cursor:pointer;transition:background .12s}
.sd-u.on{background:#111;border-left:2px solid var(--yellow)}
.sdav{width:24px;height:24px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:800;color:#000;flex-shrink:0;position:relative}
.sdpip{position:absolute;bottom:-1px;right:-1px;width:6px;height:6px;border-radius:50%;background:var(--green);border:1.5px solid #050505}
.sdun{font-size:10px;font-weight:700;color:#bbb}
.sdul{font-family:'JetBrains Mono',monospace;font-size:8px;color:#333;max-width:70px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.sdnb{margin-left:auto;background:var(--red);color:#fff;font-size:8px;border-radius:6px;padding:1px 4px}
.sd-main{flex:1;display:flex;flex-direction:column}
.sd-top{padding:8px 12px;display:flex;align-items:center;gap:7px;border-bottom:1px solid #1a1a1a}
.sd-tav{width:22px;height:22px;border-radius:50%;background:linear-gradient(135deg,#ffe000,#ff6b00);display:flex;align-items:center;justify-content:center;font-size:8px;font-weight:800;color:#000;flex-shrink:0}
.sd-tn{font-size:10px;font-weight:700;color:#ccc}
.sd-ts{font-family:'JetBrains Mono',monospace;font-size:7px;color:var(--green)}
.sd-msgs{flex:1;padding:8px 10px;display:flex;flex-direction:column;gap:5px;overflow:hidden}
.sdm{display:flex}
.sdm.me{justify-content:flex-end}
.sdmb{padding:5px 8px;font-size:9px;border-radius:8px;max-width:68%;line-height:1.5}
.sdm:not(.me) .sdmb{background:#1a1a1a;color:#aaa;border:1px solid #222;border-radius:3px 8px 8px 8px}
.sdm.me .sdmb{background:var(--yellow);color:#000;font-weight:700;border-radius:8px 3px 8px 8px}
.sd-inp{padding:7px 10px;border-top:1px solid #1a1a1a;display:flex;gap:5px}
.sdinp{flex:1;background:#111;border:1px solid #1a1a1a;border-radius:5px;padding:5px 8px;font-size:9px;color:#333;font-family:'JetBrains Mono',monospace}
.sdsend{width:22px;height:22px;border-radius:4px;background:var(--yellow);border:none;cursor:pointer;color:#000;font-size:10px;font-weight:900}

/* PROFILE SCREEN */
.sprof{
  min-height:280px;background:#0a0a0a;
  display:flex;flex-direction:column;align-items:center;padding:0 0 24px;
}
.spcover{width:100%;height:64px;background:repeating-linear-gradient(45deg,#1a1a00,#1a1a00 4px,#222200 4px,#222200 8px);border-bottom:2px solid var(--yellow);margin-bottom:-28px}
.spphoto{width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg,#ffe000,#ff6b00);border:3px solid #0a0a0a;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:900;color:#000;margin-bottom:10px;z-index:1;font-family:'Playfair Display',serif}
.spname{font-family:'Playfair Display',serif;font-size:15px;font-weight:900;color:#eee;margin-bottom:2px}
.spemail{font-family:'JetBrains Mono',monospace;font-size:9px;color:#333;margin-bottom:18px}
.sp-fields{width:100%;padding:0 18px;display:flex;flex-direction:column;gap:7px}
.spf{background:#111;border:1px solid #1e1e1e;border-radius:6px;padding:8px 12px}
.spfl{font-family:'JetBrains Mono',monospace;font-size:8px;color:#333;text-transform:uppercase;letter-spacing:.1em;margin-bottom:1px}
.spfv{font-size:11px;color:#bbb;font-weight:600}
.spfv.hi{color:var(--yellow)}

/* ONLINE SCREEN */
.sonline{min-height:280px;background:#0a0a0a;padding:16px}
.son-hd{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px}
.son-title{font-family:'Playfair Display',serif;font-size:16px;font-weight:900;color:#eee;font-style:italic}
.son-count{font-family:'JetBrains Mono',monospace;font-size:9px;color:var(--green);background:rgba(0,200,83,.1);border:1px solid rgba(0,200,83,.2);border-radius:4px;padding:2px 8px}
.son-list{display:flex;flex-direction:column;gap:6px}
.son-item{display:flex;align-items:center;gap:9px;background:#0f0f0f;border:1px solid #1e1e1e;border-radius:6px;padding:9px 11px;transition:border-color .15s}
.son-item:hover{border-color:rgba(255,224,0,.3)}
.son-av{width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;color:#000;position:relative;flex-shrink:0}
.son-av::after{content:'';position:absolute;bottom:0;right:0;width:8px;height:8px;border-radius:50%;background:var(--green);border:2px solid #0a0a0a}
.son-name{font-size:11px;font-weight:700;color:#ccc}
.son-time{font-family:'JetBrains Mono',monospace;font-size:9px;color:#333}
.son-btn{margin-left:auto;background:rgba(255,224,0,.08);border:1px solid rgba(255,224,0,.2);color:var(--yellow);font-size:9px;font-family:'JetBrains Mono',monospace;border-radius:4px;padding:3px 8px;cursor:pointer}

/* TECH STACK */
.tech-2col{display:grid;grid-template-columns:1fr 1fr;gap:2px;background:var(--border)}
.tech-half{background:var(--cream);padding:48px}
.tech-half.dark2{background:var(--black);color:var(--cream)}
.tech-hl{font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;margin-bottom:24px;display:flex;align-items:center;gap:8px}
.tech-hl::before{content:'';width:12px;height:2px;background:var(--yellow)}
.tech-row{display:flex;align-items:center;gap:14px;padding:14px 0;border-bottom:1px solid var(--border)}
.tech-half.dark2 .tech-row{border-bottom-color:#1e1e1e}
.tech-row:last-child{border-bottom:none}
.tich{width:34px;height:34px;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:15px;flex-shrink:0}
.tname{font-size:14px;font-weight:700}
.trole{font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--muted);margin-left:auto}
.tech-half.dark2 .trole{color:#555}

/* API */
.api-2col{display:grid;grid-template-columns:3fr 2fr;gap:2px;background:var(--border2);margin-bottom:2px}
.api-panel{background:var(--cream);padding:0}
.api-panel.dark3{background:#111}
.api-ph{padding:14px 20px;background:var(--black);color:var(--yellow);font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;border-bottom:1px solid #222}
.api-row2{display:flex;align-items:center;gap:10px;padding:13px 20px;border-bottom:1px solid var(--cream2)}
.api-panel.dark3 .api-row2{border-bottom-color:#1a1a1a}
.api-row2:last-child{border-bottom:none}
.meth{font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:700;padding:3px 8px;border-radius:3px;min-width:42px;text-align:center}
.mg{background:rgba(0,200,83,.12);color:#00c853;border:1px solid rgba(0,200,83,.25)}
.mp2{background:rgba(0,102,255,.12);color:#0066ff;border:1px solid rgba(0,102,255,.25)}
.mpu{background:rgba(232,45,45,.12);color:#e8453d;border:1px solid rgba(232,45,45,.25)}
.apath{font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--black)}
.api-panel.dark3 .apath{color:#888}
.evttable{width:100%;border-collapse:collapse}
.evttable th{font-family:'JetBrains Mono',monospace;font-size:9px;letter-spacing:.12em;text-transform:uppercase;color:#555;text-align:left;padding:12px 20px;border-bottom:1px solid #1e1e1e}
.evttable td{padding:12px 20px;font-size:12px;border-bottom:1px solid #1a1a1a;color:#888}
.evttable tr:last-child td{border-bottom:none}
.evttable tr:hover td{background:rgba(255,255,255,.02)}
.evtname{font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--blue)}
.api-panel.dark3 .evtname{color:#4da6ff}

/* INSTALL */
.inst-grid{display:grid;grid-template-columns:1fr 1fr;gap:2px;background:var(--border)}
.code-panel{background:var(--black);overflow:hidden}
.code-ph{padding:12px 18px;background:#111;font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:700;color:var(--yellow);border-bottom:1px solid #1e1e1e;letter-spacing:.04em}
.code-body{padding:20px 18px;font-family:'JetBrains Mono',monospace;font-size:11px;line-height:1.95}
.cp{color:var(--yellow)}.cc{color:#aaa}.ccmt{color:#444}.ckey{color:#e8923d}.cval{color:#4da6ff}

/* TREE */
.tree-panel{background:var(--black);border:none;padding:28px 24px;font-family:'JetBrains Mono',monospace;font-size:11px;line-height:2;border-top:2px solid #1a1a1a}
.tr{display:block}.tdir{color:#a855f7}.tfile{color:#4da6ff}.tcmt{color:#333}.tbr{color:#2a2a2a}

/* FUTURE */
.fut-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:2px;background:var(--border2)}
.fut-card{background:var(--cream);padding:24px 22px;display:flex;align-items:center;gap:14px;transition:background .15s,color .15s;cursor:default}
.fut-card:hover{background:var(--black);color:var(--yellow)}
.fut-ico{font-size:22px;flex-shrink:0}
.fut-txt{font-size:13px;font-weight:700}

/* DEPLOY */
.dep-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:2px;background:var(--border2);margin-top:2px}
.dep-card{background:var(--cream2);padding:24px 28px}
.dep-lbl{font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);margin-bottom:14px;display:flex;align-items:center;gap:7px}
.dep-lbl::before{content:'';width:10px;height:2px;background:var(--yellow)}
.dep-items{display:flex;flex-direction:column;gap:8px}
.dep-item{font-size:14px;font-weight:700;display:flex;align-items:center;gap:9px}
.dep-item::before{content:'▸';color:var(--muted2);font-size:11px}

/* AUTHOR */
.author-wrap{
  background:var(--black);padding:100px 64px;text-align:center;
  border-top:2px solid var(--yellow);
  position:relative;overflow:hidden;
}
.author-wrap::before{
  content:'RIYA\ABANSAL';white-space:pre;
  position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);
  font-family:'Playfair Display',serif;font-size:200px;font-weight:900;
  color:rgba(255,224,0,.03);letter-spacing:-.06em;line-height:.8;
  pointer-events:none;
}
.author-av{
  width:90px;height:90px;border-radius:50%;
  background:linear-gradient(135deg,var(--yellow),#ff6b00);
  margin:0 auto 24px;display:flex;align-items:center;justify-content:center;
  font-family:'Playfair Display',serif;font-size:36px;font-weight:900;
  color:#000;font-style:italic;
  border:3px solid var(--yellow);
}
.author-name{font-family:'Playfair Display',serif;font-size:48px;font-weight:900;color:var(--cream);letter-spacing:-.03em;margin-bottom:8px}
.author-sub{font-family:'JetBrains Mono',monospace;font-size:12px;color:#555;letter-spacing:.12em;margin-bottom:36px}
.ghbtn{
  display:inline-flex;align-items:center;gap:10px;
  background:transparent;color:var(--cream);
  padding:14px 32px;border:2px solid #333;
  font-family:'JetBrains Mono',monospace;font-size:12px;font-weight:700;
  text-decoration:none;letter-spacing:.06em;
  transition:border-color .15s,background .15s,color .15s;
}
.ghbtn:hover{border-color:var(--yellow);color:var(--yellow);background:rgba(255,224,0,.04)}
.star-note{margin-top:28px;font-family:'JetBrains Mono',monospace;font-size:11px;color:#333}

/* FOOTER */
footer{
  background:var(--black);border-top:2px solid #1a1a1a;
  padding:24px 64px;display:flex;align-items:center;justify-content:space-between;
  font-family:'JetBrains Mono',monospace;font-size:10px;color:#333;letter-spacing:.06em;
}
footer span{color:var(--yellow)}

@keyframes up{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}

@media(max-width:960px){
  .hero{grid-template-columns:1fr}
  .hero-right{display:none}
  .statbar{grid-template-columns:1fr 1fr}
  .feat-grid,.tech-2col,.api-2col,.inst-grid,.ss-grid{grid-template-columns:1fr}
  .feat-card:nth-child(3n){border-right:2px solid var(--border2)}
  .feat-card:nth-child(2n){border-right:none}
  .feat-card:nth-child(4),.feat-card:nth-child(5),.feat-card:nth-child(6){border-bottom:2px solid var(--border2)}
  .fut-grid,.dep-grid{grid-template-columns:1fr 1fr}
  nav{flex-wrap:wrap}.nav-links{display:none}
  .sec-inner,.author-wrap,footer{padding-left:24px;padding-right:24px}
}
</style>
</head>
<body>

<div id="cur"></div>

<!-- NAV -->
<nav>
  <div class="nav-brand">&#128172; ChatApp</div>
  <div class="nav-links">
    <a href="#features">Features</a>
    <a href="#screenshots">Screenshots</a>
    <a href="#stack">Stack</a>
    <a href="#api">API</a>
    <a href="#install">Install</a>
  </div>
  <a class="nav-cta" href="https://github.com/Riyaban583/ChatApp" target="_blank">&#11088; Star on GitHub</a>
</nav>

<!-- HERO -->
<section class="hero">
  <div class="hero-left">
    <div class="hero-eyebrow">Full-Stack &bull; Real-Time &bull; Open Source</div>
    <h1 class="hero-title">
      Real&#8209;<br/>
      <em>Time</em><br/>
      <span class="yel">Chat.</span>
    </h1>
    <p class="hero-desc">A production-ready chat platform built with React, Node.js, MongoDB &amp; Socket.io &mdash; featuring live messaging, JWT auth, online presence tracking, and Cloudinary image hosting.</p>
    <div class="hero-btns">
      <a class="btn-blk" href="https://github.com/Riyaban583/ChatApp" target="_blank">View on GitHub &rarr;</a>
      <a class="btn-out" href="#screenshots">See Screenshots</a>
    </div>
    <div class="hero-tags">
      <span class="tag">React 18</span>
      <span class="tag">Node.js</span>
      <span class="tag">MongoDB</span>
      <span class="tag">Socket.io</span>
      <span class="tag">JWT Auth</span>
      <span class="tag">Cloudinary</span>
      <span class="tag">MIT License</span>
    </div>
  </div>
  <div class="hero-right">
    <div style="position:relative;width:100%;max-width:420px">
      <div class="device">
        <div class="dbar">
          <div class="ddots"><span class="dot1"></span><span class="dot2"></span><span class="dot3"></span></div>
          <div class="durl">localhost:5173 &mdash; ChatApp</div>
        </div>
        <div class="dlayout">
          <div class="dsb">
            <div class="dsb-title">Messages</div>
            <div class="dsb-search">&#128269; Search&hellip;</div>
            <div class="du on">
              <div class="dav" style="background:linear-gradient(135deg,#ffe000,#ff6b00)">A<div class="gpip"></div></div>
              <div><div class="dun">Alice</div><div class="dul">hey! socket.io &#128293;</div></div>
            </div>
            <div class="du">
              <div class="dav" style="background:linear-gradient(135deg,#00c853,#00a040)">B<div class="gpip"></div></div>
              <div><div class="dun">Bob</div><div class="dul">sounds great!</div></div>
              <div class="dnb">2</div>
            </div>
            <div class="du">
              <div class="dav" style="background:linear-gradient(135deg,#0066ff,#0044cc)">C</div>
              <div><div class="dun">Carol</div><div class="dul">see you later</div></div>
            </div>
            <div class="du">
              <div class="dav" style="background:linear-gradient(135deg,#e8453d,#c03030)">D<div class="gpip"></div></div>
              <div><div class="dun">Dave</div><div class="dul">on my way!</div></div>
            </div>
          </div>
          <div class="dchat">
            <div class="dtop">
              <div class="dtop-av">A</div>
              <div><div class="dtop-n">Alice</div><div class="dtop-s">&#9679; online now</div></div>
            </div>
            <div class="dmsgs">
              <div class="msg">
                <div class="mav" style="background:linear-gradient(135deg,#ffe000,#ff6b00)">A</div>
                <div class="mb">Hey! How's the project? &#128522;</div>
              </div>
              <div class="msg me">
                <div class="mav" style="background:linear-gradient(135deg,#ffe000,#ff6b00)">R</div>
                <div class="mb">Going great! Almost done &#128640;</div>
              </div>
              <div class="msg">
                <div class="mav" style="background:linear-gradient(135deg,#ffe000,#ff6b00)">A</div>
                <div class="mb">Real-time is so cool! &#9889;</div>
              </div>
              <div class="msg me">
                <div class="mav" style="background:linear-gradient(135deg,#ffe000,#ff6b00)">R</div>
                <div class="mb">Socket.io makes it easy &#128299;</div>
              </div>
            </div>
            <div class="dinp">
              <div class="dibox">Type a message&hellip;</div>
              <div class="dsend">&rarr;</div>
            </div>
          </div>
        </div>
      </div>
      <!-- Floating labels -->
      <div class="flabels">
        <div class="flabel"><div class="fldot"></div>4 online</div>
        <div class="flabel"><div class="fldot"></div>&#9889; Live</div>
        <div class="flabel"><div class="fldot"></div>&#128272; Secured</div>
      </div>
    </div>
  </div>
</section>

<!-- STAT BAR -->
<div class="statbar">
  <div class="stat"><div class="stat-bg">&#128172;</div><div class="stat-num">6+</div><div class="stat-label">Core Features</div></div>
  <div class="stat"><div class="stat-bg">&#9889;</div><div class="stat-num">RT</div><div class="stat-label">Real-Time Sync</div></div>
  <div class="stat"><div class="stat-bg">&#128272;</div><div class="stat-num">JWT</div><div class="stat-label">Auth System</div></div>
  <div class="stat"><div class="stat-bg">&#127381;</div><div class="stat-num">MIT</div><div class="stat-label">Open Source</div></div>
</div>

<!-- FEATURES -->
<div class="sec-wrap cream2" id="features">
  <div class="sec-inner">
    <div class="sec-label"><div class="sl-num">01</div>Live Features</div>
    <h2 class="sec-h">Everything in<br/><em>one place</em></h2>
    <div class="feat-grid">
      <div class="feat-card">
        <span class="feat-ico">&#128272;</span>
        <div class="feat-t">Authentication System</div>
        <ul class="feat-ul"><li>User Signup &amp; Login</li><li>JWT token-based auth</li><li>Protected routes</li><li>Secure session handling</li></ul>
      </div>
      <div class="feat-card">
        <span class="feat-ico">&#128172;</span>
        <div class="feat-t">Real-Time Messaging</div>
        <ul class="feat-ul"><li>Instant message delivery</li><li>Socket.io WebSockets</li><li>Live UI updates</li><li>Persistent message history</li></ul>
      </div>
      <div class="feat-card">
        <span class="feat-ico">&#128994;</span>
        <div class="feat-t">Online Presence</div>
        <ul class="feat-ul"><li>Live online indicators</li><li>Instant connect / disconnect</li><li>Real-time presence tracking</li><li>Active users panel</li></ul>
      </div>
      <div class="feat-card">
        <span class="feat-ico">&#128233;</span>
        <div class="feat-t">Unread Messages</div>
        <ul class="feat-ul"><li>Notification counters</li><li>Per-conversation tracking</li><li>Auto-mark as read</li></ul>
      </div>
      <div class="feat-card">
        <span class="feat-ico">&#128100;</span>
        <div class="feat-t">User Profiles</div>
        <ul class="feat-ul"><li>Edit profile details</li><li>Upload profile photo</li><li>Cloudinary CDN hosting</li><li>Search users by name</li></ul>
      </div>
      <div class="feat-card">
        <span class="feat-ico">&#9889;</span>
        <div class="feat-t">Modern UI</div>
        <ul class="feat-ul"><li>Fully responsive layout</li><li>Vite-powered frontend</li><li>React Context API state</li><li>Tailwind CSS styling</li></ul>
      </div>
    </div>
  </div>
</div>

<!-- SCREENSHOTS -->
<div class="sec-wrap" id="screenshots" style="padding-bottom:0">
  <div class="sec-inner">
    <div class="sec-label"><div class="sl-num">02</div>UI Walkthrough</div>
    <h2 class="sec-h">App <em>Screenshots</em></h2>
  </div>
  <div class="ss-grid">

    <!-- LOGIN -->
    <div class="ss-card">
      <div class="ss-topbar"><div class="sstdots"><span class="dot1"></span><span class="dot2"></span><span class="dot3"></span></div><div class="ssturl">localhost:5173/login</div></div>
      <div class="slogin">
        <div class="slogin-brand">&#128172; ChatApp</div>
        <div class="slogin-sub">// welcome back &mdash; sign in</div>
        <div class="slogin-form">
          <div class="sf act">riya@example.com</div>
          <div class="sf" style="letter-spacing:.2em;color:#222">&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;</div>
          <button class="sb2">SIGN IN &rarr;</button>
          <div class="slink">No account? <span>Create one free</span></div>
        </div>
      </div>
      <div class="ss-label">&#128272; Login Page &mdash; JWT Authentication</div>
    </div>

    <!-- DASHBOARD -->
    <div class="ss-card">
      <div class="ss-topbar"><div class="sstdots"><span class="dot1"></span><span class="dot2"></span><span class="dot3"></span></div><div class="ssturl">localhost:5173/ &mdash; Home</div></div>
      <div class="sdash">
        <div class="sd-sb">
          <div class="sd-sbt">Chat</div>
          <div class="sd-u on">
            <div class="sdav" style="background:linear-gradient(135deg,#ffe000,#ff6b00)">A<div class="sdpip"></div></div>
            <div><div class="sdun">Alice</div><div class="sdul">Socket magic!</div></div>
          </div>
          <div class="sd-u">
            <div class="sdav" style="background:linear-gradient(135deg,#00c853,#00a040)">B<div class="sdpip"></div></div>
            <div><div class="sdun">Bob</div><div class="sdul">Sounds great</div></div>
            <div class="sdnb">3</div>
          </div>
          <div class="sd-u">
            <div class="sdav" style="background:linear-gradient(135deg,#0066ff,#0044cc)">C</div>
            <div><div class="sdun">Carol</div><div class="sdul">See you!</div></div>
          </div>
          <div class="sd-u">
            <div class="sdav" style="background:linear-gradient(135deg,#e8453d,#c03030)">D<div class="sdpip"></div></div>
            <div><div class="sdun">Dave</div><div class="sdul">On my way!</div></div>
          </div>
        </div>
        <div class="sd-main">
          <div class="sd-top">
            <div class="sd-tav">A</div>
            <div><div class="sd-tn">Alice</div><div class="sd-ts">&#9679; Online</div></div>
          </div>
          <div class="sd-msgs">
            <div class="sdm"><div class="sdmb">Hey! How's the project? &#128522;</div></div>
            <div class="sdm me"><div class="sdmb">Going great! &#128640; Almost done</div></div>
            <div class="sdm"><div class="sdmb">Real-time is amazing!</div></div>
            <div class="sdm me"><div class="sdmb">Socket.io &#9889; magic!</div></div>
          </div>
          <div class="sd-inp">
            <div class="sdinp">Type a message&hellip;</div>
            <div class="sdsend">&rarr;</div>
          </div>
        </div>
      </div>
      <div class="ss-label">&#128172; Chat Dashboard &mdash; Real-Time Messaging</div>
    </div>

    <!-- PROFILE -->
    <div class="ss-card">
      <div class="ss-topbar"><div class="sstdots"><span class="dot1"></span><span class="dot2"></span><span class="dot3"></span></div><div class="ssturl">localhost:5173/profile</div></div>
      <div class="sprof">
        <div class="spcover"></div>
        <div class="spphoto">R</div>
        <div class="spname">Riya Bansal</div>
        <div class="spemail">riya@example.com</div>
        <div class="sp-fields">
          <div class="spf"><div class="spfl">Display Name</div><div class="spfv">Riya Bansal</div></div>
          <div class="spf"><div class="spfl">Email Address</div><div class="spfv">riya@example.com</div></div>
          <div class="spf"><div class="spfl">Profile Image</div><div class="spfv hi">&#9729;&#65039; Cloudinary CDN</div></div>
        </div>
      </div>
      <div class="ss-label">&#128100; Profile Page &mdash; Cloudinary Upload</div>
    </div>

    <!-- ONLINE -->
    <div class="ss-card">
      <div class="ss-topbar"><div class="sstdots"><span class="dot1"></span><span class="dot2"></span><span class="dot3"></span></div><div class="ssturl">localhost:5173/ &mdash; Online Users</div></div>
      <div class="sonline">
        <div class="son-hd">
          <div class="son-title">Active Users</div>
          <div class="son-count">&#9679; 4 online</div>
        </div>
        <div class="son-list">
          <div class="son-item">
            <div class="son-av" style="background:linear-gradient(135deg,#ffe000,#ff6b00)">A</div>
            <div><div class="son-name">Alice</div><div class="son-time">active now</div></div>
            <button class="son-btn">Message</button>
          </div>
          <div class="son-item">
            <div class="son-av" style="background:linear-gradient(135deg,#00c853,#00a040)">B</div>
            <div><div class="son-name">Bob</div><div class="son-time">active now</div></div>
            <button class="son-btn">Message</button>
          </div>
          <div class="son-item">
            <div class="son-av" style="background:linear-gradient(135deg,#e8453d,#c03030)">D</div>
            <div><div class="son-name">Dave</div><div class="son-time">active now</div></div>
            <button class="son-btn">Message</button>
          </div>
        </div>
      </div>
      <div class="ss-label">&#128994; Online Users &mdash; Real-Time Presence</div>
    </div>

  </div>
</div>

<!-- TECH STACK -->
<div class="sec-wrap" id="stack">
  <div class="sec-inner">
    <div class="sec-label"><div class="sl-num">03</div>Technology</div>
    <h2 class="sec-h">Tech <em>Stack</em></h2>
  </div>
  <div class="tech-2col">
    <div class="tech-half">
      <div class="tech-hl">Frontend</div>
      <div class="tech-row"><div class="tich" style="background:rgba(97,218,251,.1)">&#9883;&#65039;</div><div class="tname">React</div><div class="trole">UI Framework</div></div>
      <div class="tech-row"><div class="tich" style="background:rgba(160,105,255,.1)">&#9889;</div><div class="tname">Vite</div><div class="trole">Build Tool</div></div>
      <div class="tech-row"><div class="tich" style="background:rgba(0,150,80,.08)">&#128260;</div><div class="tname">Context API</div><div class="trole">State Management</div></div>
      <div class="tech-row"><div class="tich" style="background:rgba(0,100,200,.08)">&#128225;</div><div class="tname">Axios</div><div class="trole">HTTP Client</div></div>
      <div class="tech-row"><div class="tich" style="background:rgba(0,0,0,.04)">&#128299;</div><div class="tname">Socket.io Client</div><div class="trole">WebSocket Events</div></div>
      <div class="tech-row"><div class="tich" style="background:rgba(56,189,248,.08)">&#127912;</div><div class="tname">Tailwind CSS</div><div class="trole">Styling</div></div>
    </div>
    <div class="tech-half dark2">
      <div class="tech-hl">Backend</div>
      <div class="tech-row"><div class="tich" style="background:rgba(104,160,99,.12)">&#128994;</div><div class="tname" style="color:#eee">Node.js</div><div class="trole">Runtime</div></div>
      <div class="tech-row"><div class="tich" style="background:rgba(160,105,255,.12)">&#128642;</div><div class="tname" style="color:#eee">Express.js</div><div class="trole">Web Framework</div></div>
      <div class="tech-row"><div class="tich" style="background:rgba(77,179,61,.12)">&#127807;</div><div class="tname" style="color:#eee">MongoDB</div><div class="trole">Database</div></div>
      <div class="tech-row"><div class="tich" style="background:rgba(200,50,50,.12)">&#128308;</div><div class="tname" style="color:#eee">Mongoose</div><div class="trole">ODM</div></div>
      <div class="tech-row"><div class="tich" style="background:rgba(255,255,255,.04)">&#128299;</div><div class="tname" style="color:#eee">Socket.io</div><div class="trole">WebSocket Server</div></div>
      <div class="tech-row"><div class="tich" style="background:rgba(255,170,0,.12)">&#9729;&#65039;</div><div class="tname" style="color:#eee">Cloudinary</div><div class="trole">Image Hosting</div></div>
    </div>
  </div>
</div>

<!-- API -->
<div class="sec-wrap cream2" id="api">
  <div class="sec-inner">
    <div class="sec-label"><div class="sl-num">04</div>REST API</div>
    <h2 class="sec-h">API <em>Reference</em></h2>
  </div>
  <div class="api-2col">
    <div class="api-panel">
      <div class="api-ph">User Routes</div>
      <div class="api-row2"><span class="meth mp2">POST</span><span class="apath">/api/users/signup</span></div>
      <div class="api-row2"><span class="meth mp2">POST</span><span class="apath">/api/users/login</span></div>
      <div class="api-row2"><span class="meth mg">GET</span><span class="apath">/api/users/check</span></div>
      <div class="api-row2"><span class="meth mpu">PUT</span><span class="apath">/api/users/update-profile</span></div>
      <div class="api-ph" style="margin-top:2px">Message Routes</div>
      <div class="api-row2"><span class="meth mp2">POST</span><span class="apath">/api/messages/send</span></div>
      <div class="api-row2"><span class="meth mg">GET</span><span class="apath">/api/messages/:id</span></div>
    </div>
    <div class="api-panel dark3">
      <div class="api-ph">Socket Events</div>
      <table class="evttable">
        <thead><tr><th>Event</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td><span class="evtname">connection</span></td><td>User connects</td></tr>
          <tr><td><span class="evtname">getOnlineUsers</span></td><td>Returns online list</td></tr>
          <tr><td><span class="evtname">disconnect</span></td><td>User disconnects</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

<!-- INSTALL -->
<div class="sec-wrap dark" id="install">
  <div class="sec-inner">
    <div class="sec-label"><div class="sl-num">05</div>Setup</div>
    <h2 class="sec-h">Installation <em>Guide</em></h2>
  </div>
  <div class="inst-grid">
    <div style="display:flex;flex-direction:column;gap:2px">
      <div class="code-panel">
        <div class="code-ph">&#128230; Clone &amp; Install</div>
        <div class="code-body">
          <span class="ccmt"># 1. Clone</span><br/>
          <span class="cp">$</span> <span class="cc">git clone https://github.com/Riyaban583/ChatApp.git</span><br/>
          <span class="cp">$</span> <span class="cc">cd ChatApp</span><br/><br/>
          <span class="ccmt"># 2. Install frontend</span><br/>
          <span class="cp">$</span> <span class="cc">cd client &amp;&amp; npm install</span><br/><br/>
          <span class="ccmt"># 3. Install backend</span><br/>
          <span class="cp">$</span> <span class="cc">cd server &amp;&amp; npm install</span>
        </div>
      </div>
      <div class="code-panel">
        <div class="code-ph">&#9654;&#65039; Run the App</div>
        <div class="code-body">
          <span class="ccmt"># Backend &rarr; http://localhost:5000</span><br/>
          <span class="cp">$</span> <span class="cc">cd server &amp;&amp; npm run dev</span><br/><br/>
          <span class="ccmt"># Frontend &rarr; http://localhost:5173</span><br/>
          <span class="cp">$</span> <span class="cc">cd client &amp;&amp; npm run dev</span>
        </div>
      </div>
    </div>
    <div class="code-panel">
      <div class="code-ph">&#128273; server/.env</div>
      <div class="code-body">
        <span class="ccmt"># Server port</span><br/>
        <span class="ckey">PORT</span>=<span class="cval">5000</span><br/><br/>
        <span class="ccmt"># MongoDB Atlas</span><br/>
        <span class="ckey">MONGO_URI</span>=<span class="cval">your_mongodb_connection_string</span><br/><br/>
        <span class="ccmt"># JSON Web Token</span><br/>
        <span class="ckey">JWT_SECRET</span>=<span class="cval">your_secret_key</span><br/><br/>
        <span class="ccmt"># Cloudinary</span><br/>
        <span class="ckey">CLOUDINARY_CLOUD_NAME</span>=<span class="cval">your_cloud_name</span><br/>
        <span class="ckey">CLOUDINARY_API_KEY</span>=<span class="cval">your_api_key</span><br/>
        <span class="ckey">CLOUDINARY_API_SECRET</span>=<span class="cval">your_api_secret</span><br/><br/>
        <span class="ccmt">&#9888;&#65039;  Never push .env to GitHub</span>
      </div>
    </div>
  </div>

  <!-- TREE -->
  <div class="sec-inner" style="margin-top:64px">
    <div class="sec-label"><div class="sl-num">06</div>Codebase</div>
    <h2 class="sec-h">Project <em>Structure</em></h2>
  </div>
  <div class="tree-panel" style="max-width:900px;margin:0 64px">
    <span class="tr"><span class="tbr">&#128193; </span><span class="tdir">ChatApp/</span></span>
    <span class="tr"><span class="tbr">&#9500;&#9472;&#9472; &#128193; </span><span class="tdir">client/</span></span>
    <span class="tr"><span class="tbr">&#9474;   &#9500;&#9472;&#9472; &#128193; </span><span class="tdir">context/</span></span>
    <span class="tr"><span class="tbr">&#9474;   &#9474;   &#9500;&#9472;&#9472; </span><span class="tfile">AuthContext.jsx</span><span class="tcmt">   // JWT auth state &amp; session</span></span>
    <span class="tr"><span class="tbr">&#9474;   &#9474;   &#9492;&#9472;&#9472; </span><span class="tfile">ChatContext.jsx</span><span class="tcmt">   // messages, socket &amp; online users</span></span>
    <span class="tr"><span class="tbr">&#9474;   &#9492;&#9472;&#9472; &#128193; </span><span class="tdir">src/</span></span>
    <span class="tr"><span class="tbr">&#9474;       &#9500;&#9472;&#9472; &#128193; </span><span class="tdir">components/</span></span>
    <span class="tr"><span class="tbr">&#9474;       &#9474;   &#9500;&#9472;&#9472; </span><span class="tfile">ChatContainer.jsx</span><span class="tcmt">  // main chat panel &amp; messages</span></span>
    <span class="tr"><span class="tbr">&#9474;       &#9474;   &#9500;&#9472;&#9472; </span><span class="tfile">Sidebar.jsx</span><span class="tcmt">        // user list &amp; search</span></span>
    <span class="tr"><span class="tbr">&#9474;       &#9474;   &#9492;&#9472;&#9472; </span><span class="tfile">RightSidebar.jsx</span><span class="tcmt">   // online users panel</span></span>
    <span class="tr"><span class="tbr">&#9474;       &#9492;&#9472;&#9472; &#128193; </span><span class="tdir">pages/</span></span>
    <span class="tr"><span class="tbr">&#9474;           &#9500;&#9472;&#9472; </span><span class="tfile">HomePage.jsx</span><span class="tcmt">       // main dashboard</span></span>
    <span class="tr"><span class="tbr">&#9474;           &#9500;&#9472;&#9472; </span><span class="tfile">LoginPage.jsx</span><span class="tcmt">      // auth page</span></span>
    <span class="tr"><span class="tbr">&#9474;           &#9492;&#9472;&#9472; </span><span class="tfile">ProfilePage.jsx</span><span class="tcmt">    // profile editor</span></span>
    <span class="tr"><span class="tbr">&#9474;</span></span>
    <span class="tr"><span class="tbr">&#9492;&#9472;&#9472; &#128193; </span><span class="tdir">server/</span></span>
    <span class="tr"><span class="tbr">    &#9500;&#9472;&#9472; &#128193; </span><span class="tdir">controllers/</span><span class="tcmt">    messageController.js &middot; userController.js</span></span>
    <span class="tr"><span class="tbr">    &#9500;&#9472;&#9472; &#128193; </span><span class="tdir">middleware/</span><span class="tcmt">     auth.js &mdash; JWT verification middleware</span></span>
    <span class="tr"><span class="tbr">    &#9500;&#9472;&#9472; &#128193; </span><span class="tdir">models/</span><span class="tcmt">         Message.js &middot; User.js</span></span>
    <span class="tr"><span class="tbr">    &#9500;&#9472;&#9472; &#128193; </span><span class="tdir">routes/</span><span class="tcmt">         messageRoutes.js &middot; userRoutes.js</span></span>
    <span class="tr"><span class="tbr">    &#9500;&#9472;&#9472; &#128193; </span><span class="tdir">lib/</span><span class="tcmt">            db.js &middot; cloudinary.js &middot; utils.js</span></span>
    <span class="tr"><span class="tbr">    &#9492;&#9472;&#9472; </span><span class="tfile">server.js</span><span class="tcmt">           // Express + Socket.io entry point</span></span>
  </div>
</div>

<!-- FUTURE -->
<div class="sec-wrap">
  <div class="sec-inner">
    <div class="sec-label"><div class="sl-num">07</div>Roadmap</div>
    <h2 class="sec-h">Future <em>Improvements</em></h2>
    <div class="fut-grid">
      <div class="fut-card"><div class="fut-ico">&#9000;&#65039;</div><div class="fut-txt">Typing Indicator</div></div>
      <div class="fut-card"><div class="fut-ico">&#9989;</div><div class="fut-txt">Message Seen Status</div></div>
      <div class="fut-card"><div class="fut-ico">&#128101;</div><div class="fut-txt">Group Chat</div></div>
      <div class="fut-card"><div class="fut-ico">&#128206;</div><div class="fut-txt">Media &amp; File Sharing</div></div>
      <div class="fut-card"><div class="fut-ico">&#128222;</div><div class="fut-txt">Voice &amp; Video Calls</div></div>
      <div class="fut-card"><div class="fut-ico">&#128276;</div><div class="fut-txt">Push Notifications</div></div>
    </div>

    <br/><br/><br/>
    <div class="sec-label"><div class="sl-num">08</div>Deployment</div>
    <h2 class="sec-h">Deploy <em>Anywhere</em></h2>
    <div class="dep-grid">
      <div class="dep-card">
        <div class="dep-lbl">Frontend</div>
        <div class="dep-items">
          <div class="dep-item">Vercel</div>
          <div class="dep-item">Netlify</div>
        </div>
      </div>
      <div class="dep-card">
        <div class="dep-lbl">Backend</div>
        <div class="dep-items">
          <div class="dep-item">Render</div>
          <div class="dep-item">Railway</div>
          <div class="dep-item">AWS EC2</div>
        </div>
      </div>
      <div class="dep-card">
        <div class="dep-lbl">Database</div>
        <div class="dep-items">
          <div class="dep-item">MongoDB Atlas</div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- AUTHOR -->
<div class="author-wrap">
  <div class="author-av">R</div>
  <div class="author-name">Riya Bansal</div>
  <div class="author-sub">// Full-Stack Developer</div>
  <a class="ghbtn" href="https://github.com/Riyaban583" target="_blank">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
    github.com/Riyaban583
  </a>
  <div class="star-note">&#11088; If you like this project, give it a star on GitHub!</div>
</div>

<footer>
  <span style="color:#333">&#128172; ChatApp</span>
  <span>Built with &#10084;&#65039; by <span>Riya Bansal</span></span>
  <span style="color:#333">React &middot; Node.js &middot; MongoDB &middot; Socket.io &middot; <span>MIT</span></span>
</footer>

<script>
const cur = document.getElementById('cur');
let mx=0,my=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cur.style.left=mx+'px';cur.style.top=my+'px'});
document.querySelectorAll('a,button,.feat-card,.ss-card,.fut-card,.son-item,.tech-row,.dep-card,.stat').forEach(el=>{
  el.addEventListener('mouseenter',()=>cur.classList.add('hov'));
  el.addEventListener('mouseleave',()=>cur.classList.remove('hov'));
});
</script>
</body>
</html>
