from pathlib import Path
p=Path('/mnt/data/g2finalwork/public/css/custom.css')
s=p.read_text(encoding='utf-8')
# append a final override block so it wins over old accumulated overrides
block=r'''

/* =========================================================
   GO2ABROAD FINAL VISUAL BALANCE — TEAM / MOTION / TYPE / SERVICES / INQUIRY
========================================================= */

/* Typography: Poppins, compact but breathable. */
html, body, button, input, select, textarea { font-family:"Poppins",sans-serif !important; }
body { font-size:15px !important; letter-spacing:0 !important; }
body p { font-size:14px !important; line-height:1.65 !important; letter-spacing:0 !important; }
h1,h2,h3,h4,h5,h6 { font-family:"Poppins",sans-serif !important; font-weight:600 !important; letter-spacing:-.012em !important; line-height:1.22 !important; }
.sisf-m-title, .sis-section-title h1, .sis-section-title h2 { font-weight:600 !important; }
.sis-btn-default { font-weight:500 !important; letter-spacing:0 !important; }

/* Restore natural site-wide motion. Less distance than the original, but visible. */
[data-aos][data-aos] { transition-duration:.78s !important; }
[data-aos="fade-up"] { transform:translate3d(0,35px,0) !important; }
[data-aos="fade-down"] { transform:translate3d(0,-35px,0) !important; }
[data-aos="fade-left"] { transform:translate3d(35px,0,0) !important; }
[data-aos="fade-right"] { transform:translate3d(-35px,0,0) !important; }
[data-aos="zoom-in"] { transform:scale(.95) !important; }
[data-aos].aos-animate { transform:none !important; }

/* Hero: keep the entrance animation, with a restrained range. */
.home-page .hero-content,
.home-page .hero-content .sis-section-title,
.home-page .sisf-content-center { transform:none !important; }
.home-page .hero-content .hero-animate {
  opacity:0 !important;
  animation:g2aHeroFinalIn .72s cubic-bezier(.22,.61,.36,1) both !important;
}
.home-page .hero-content .hero-animate-1 { animation-delay:.05s !important; }
.home-page .hero-content .hero-animate-2 { animation-delay:.12s !important; }
.home-page .hero-content .hero-animate-3 { animation-delay:.19s !important; }
.home-page .hero-content .hero-animate-4 { animation-delay:.26s !important; }
.home-page .hero-content .hero-animate-5 { animation-delay:.33s !important; }
.home-page .hero-main-image-animate {
  opacity:0 !important;
  animation:g2aHeroFinalImage .86s cubic-bezier(.22,.61,.36,1) .12s both !important;
}
.home-page .hero-bg-animate { animation:g2aHeroFinalBg .9s ease-out .03s both !important; }
@keyframes g2aHeroFinalIn { from{opacity:0;transform:translate3d(0,16px,0)} to{opacity:1;transform:translate3d(0,0,0)} }
@keyframes g2aHeroFinalImage { from{opacity:.7;transform:translate3d(14px,5px,0) scale(.992)} to{opacity:1;transform:none} }
@keyframes g2aHeroFinalBg { from{opacity:.82;transform:scale(1.012)} to{opacity:1;transform:none} }

/* Team: restore the original card feel; only the interaction changes to hover. */
.g2-team-card {
  position:relative !important; overflow:hidden !important; border-radius:16px !important;
  background:#fff !important; box-shadow:0 12px 28px rgba(0,0,0,.10) !important;
  transition:transform .3s ease,box-shadow .3s ease !important;
}
.g2-team-card:hover { transform:translateY(-4px) !important; box-shadow:0 18px 34px rgba(0,0,0,.16) !important; }
.g2-team-image { position:relative !important; height:330px !important; overflow:hidden !important; background:#fff !important; }
.g2-team-image img { width:100% !important; height:100% !important; object-fit:cover !important; object-position:center top !important; display:block !important; transition:transform .45s ease !important; }
.g2-team-card:hover .g2-team-image img { transform:scale(1.025) !important; }
.g2-team-hover {
  position:absolute !important; inset:0 !important; z-index:3 !important;
  display:flex !important; align-items:flex-end !important; opacity:0 !important;
  background:linear-gradient(to top,rgba(8,28,45,.96) 0%,rgba(8,28,45,.72) 43%,rgba(8,28,45,0) 76%) !important;
  transition:opacity .3s ease !important; pointer-events:none !important;
}
.g2-team-card:hover .g2-team-hover { opacity:1 !important; }
.g2-team-hover-content { width:100% !important; padding:22px 22px 20px !important; color:#fff !important; }
.g2-team-name-row { display:flex !important; align-items:center !important; gap:9px !important; margin-bottom:3px !important; }
.g2-team-name-row h3 { margin:0 !important; color:#fff !important; font-size:18px !important; line-height:1.2 !important; font-weight:600 !important; }
.g2-team-linkedin {
  width:28px !important; height:28px !important; border-radius:50% !important; display:inline-flex !important;
  align-items:center !important; justify-content:center !important; background:#fff !important; color:#0b263b !important;
  text-decoration:none !important; flex:0 0 28px !important; transition:.2s ease !important; pointer-events:auto !important;
}
.g2-team-linkedin:hover { background:#4fa8dc !important; color:#fff !important; transform:translateY(-2px) !important; }
.g2-team-role { display:block !important; color:#65b9e8 !important; font-size:13px !important; line-height:1.4 !important; font-weight:500 !important; }
.g2-team-hover-content p { margin:8px 0 0 !important; color:rgba(255,255,255,.88) !important; font-size:12.5px !important; line-height:1.55 !important; }
.g2-team-arrow { display:none !important; }
.g2-team-default-info {
  min-height:92px !important; padding:17px 18px !important; display:flex !important; align-items:center !important;
  justify-content:space-between !important; gap:14px !important; background:#fff !important;
}
.g2-team-default-info h3 { margin:0 0 4px !important; color:#162536 !important; font-size:17px !important; line-height:1.25 !important; font-weight:600 !important; }
.g2-team-default-info p { margin:0 !important; color:#5d6f84 !important; font-size:13px !important; line-height:1.45 !important; font-weight:400 !important; }
.g2-team-default-arrow { width:44px !important; height:44px !important; border-radius:50% !important; display:flex !important; align-items:center !important; justify-content:center !important; background:#112333 !important; color:#fff !important; flex:0 0 44px !important; }
.g2-team-grid { row-gap:18px !important; }

/* Inquiry: more premium colour system and comfortable spacing. */
.sis-contact-us-section .sis-contect-right {
  border:1px solid #d9e6ef !important; border-top:4px solid #4fa8dc !important;
  border-radius:20px !important; background:linear-gradient(145deg,#fff 0%,#f6fafc 100%) !important;
  box-shadow:0 18px 42px rgba(13,42,66,.10) !important;
}
.sis-contact-us-section .sis-contect-right > .sisf-sis-section-title { padding:22px 24px 9px !important; }
.sis-contact-us-section .sis-contect-right .sisf-m-title { font-size:28px !important; font-weight:600 !important; line-height:1.2 !important; }
.sis-contact-us-section .sis-contect-right .sisf-m-text p { font-size:13px !important; line-height:1.55 !important; color:#667b91 !important; }
.sis-contact-us-section .form-section {
  margin:0 16px 16px !important; padding:16px !important; border:1px solid #e0e9f0 !important;
  border-radius:14px !important; background:#fff !important; box-shadow:0 8px 22px rgba(18,45,72,.05) !important;
}
.sis-contact-us-section .sis-form-label { font-size:10.5px !important; font-weight:600 !important; color:#29415a !important; margin-bottom:5px !important; }
.sis-contact-us-section .form-section .form-control,
.sis-contact-us-section .form-section .sis-native-select { height:40px !important; min-height:40px !important; border-radius:9px !important; font-size:12.5px !important; }
.sis-contact-us-section .form-section textarea.form-control { height:68px !important; min-height:68px !important; }
.sis-contact-us-section .sis-form-field { margin-bottom:11px !important; }
.sis-contact-us-section .sis-form-consent { font-size:10.5px !important; line-height:1.5 !important; padding:9px 10px !important; background:#f5f9fc !important; }
.sis-contact-us-section .sisf-m-btn .sis-btn-default { height:44px !important; min-height:44px !important; font-size:13px !important; border-radius:9px !important; }

/* Services: return to the original image-card composition. */
.aboutService .sisf-sis-section-title {
  padding:0 !important; border:0 !important; border-radius:0 !important; background:transparent !important;
  box-shadow:none !important; backdrop-filter:none !important;
}
.aboutService .sisf-sis-section-title h2 { color:#fff !important; text-shadow:0 2px 10px rgba(0,0,0,.55) !important; }
.aboutService .sisf-sis-section-title .sisf-m-text p { color:#fff !important; text-shadow:0 2px 8px rgba(0,0,0,.55) !important; }
.aboutService .sisf-sis-e-service-list .sisf-e-inner { overflow:hidden !important; background:#fff !important; }
.aboutService .sisf-sis-e-service-list .sisf-service-image { height:300px !important; overflow:hidden !important; }
.aboutService .sisf-sis-e-service-list .sisf-service-image img { height:300px !important; object-fit:cover !important; transition:transform .45s ease !important; }
.aboutService .sisf-sis-e-service-list .sisf-e-content {
  position:absolute !important; left:0 !important; right:0 !important; bottom:0 !important; z-index:3 !important;
  height:auto !important; min-height:118px !important; padding:22px 18px 18px !important;
  align-items:flex-end !important; background:linear-gradient(to top,rgba(7,26,43,.94) 0%,rgba(7,26,43,.72) 58%,rgba(7,26,43,0) 100%) !important;
}
.aboutService .sisf-sis-e-service-list .sisf-e-title { margin:0 0 5px !important; font-size:16px !important; line-height:1.25 !important; font-weight:600 !important; }
.aboutService .sisf-sis-e-service-list .sisf-e-title a { color:#fff !important; text-shadow:0 1px 6px rgba(0,0,0,.35) !important; }
.aboutService .sisf-sis-e-service-list .sisf-m-text p { margin:0 !important; color:rgba(255,255,255,.94) !important; font-size:12.5px !important; line-height:1.5 !important; text-shadow:0 1px 5px rgba(0,0,0,.45) !important; }
.aboutService .sisf-sis-e-service-list .sisf-e-service-icon { flex:0 0 auto !important; }
.aboutService .sisf-sis-e-service-list .sisf-e-service-icon a { width:42px !important; height:42px !important; border-radius:50% !important; background:#13283a !important; color:#fff !important; display:flex !important; align-items:center !important; justify-content:center !important; }
.aboutService .sisf-sis-e-service-list:hover .sisf-service-image img { transform:scale(1.035) !important; }
.aboutService .sisf-sis-top-left-image,.aboutService .sisf-sis-bottom-right-image { opacity:.20 !important; }

@media (max-width:991px){
  .g2-team-image,.g2-team-image img { height:300px !important; }
  .sis-contact-us-section .sis-contect-right { height:auto !important; min-height:0 !important; max-height:none !important; }
  .aboutService .sisf-sis-e-service-list .sisf-service-image,
  .aboutService .sisf-sis-e-service-list .sisf-service-image img { height:270px !important; }
}
@media (max-width:575px){
  body p { font-size:13.5px !important; }
  .g2-team-image,.g2-team-image img { height:280px !important; }
  .g2-team-name-row h3 { font-size:17px !important; }
  .aboutService .sisf-sis-e-service-list .sisf-service-image,
  .aboutService .sisf-sis-e-service-list .sisf-service-image img { height:250px !important; }
}
'''
s += block
p.write_text(s,encoding='utf-8')
