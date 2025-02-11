import React from 'react';
import Link from '@docusaurus/Link';

export default function FooterWrapper() {
  return (
    <section className="footer-bottom">
      <div className="div-block-2">
        <img src="https://kira.network/images/Mask-group-3.svg" alt="" className="image-3" />
      </div>
      <div className="div-block-3">
        <div className="div-block-4">
          <img src="https://kira.network/images/logo-2.svg" alt="" className="image-6" />
          <div className="text-block-4">
            Building the future of trustless computing by enabling scalable solutions for resource-intensive applications
          </div>
          <div className="text-block-6">
            2024 KIRA Network, All rights reserved.
          </div>
        </div>
        <div className="div-block-5">
          <div className="footer-links-wrapper">
            <div className="footer-link title">Ecosystem</div>
            <a href="https://kira.network/" target="_blank" className="footer-link">Home</a>
            <a href="https://kira.network/token.html" target="_blank" className="footer-link">Token & Economics</a>
            <a href="https://kira.network/build.html" target="_blank" className="footer-link">Build on KIRA</a>
            <Link to="/node-operators/" className="footer-link">Run a node</Link>
          </div>
          <div className="footer-links-wrapper">
            <div className="footer-link title">Resources</div>
            <a href="https://git.kira.network/" target="_blank" className="footer-link">Github</a>
            <a href="https://kira-network.notion.site/Careers" target="_blank" className="footer-link">Careers</a>
            <a href="https://blog.kira.network/" target="_blank" className="footer-link">Blog</a>
            <a href="https://kira.network/contact-us.html" target="_blank" className="footer-link">Contact us</a>
          </div>
          <div className="footer-links-wrapper">
            <div className="footer-link title">Community</div>
            <a href="https://twitter.kira.network/" target="_blank" className="footer-link">X</a>
            <a href="https://tg.kira.network/" target="_blank" className="footer-link">Telegram</a>
            <a href="https://discord.kira.network/" target="_blank" className="footer-link">Discord</a>
          </div>
        </div>
        <div className="div-block-6">
          <a href="mailto:hello@kira.network" className="email-kira-white">hello@kira.network</a>
          <div className="footer-icon-wrapper">
          <a href="https://git.kira.network/" target="_blank" className="icon-wrapper">
              <img src="https://kira.network/images/Github.svg" alt="" className="icon-menu" />
            </a>
            <a href="https://tg.kira.network/" target="_blank" className="icon-wrapper">
              <img src="https://kira.network/images/Telegram.svg" alt="" className="icon-menu" />
            </a>
            <a href="https://discord.kira.network/" target="_blank" className="icon-wrapper">
              <img src="https://kira.network/images/Discord-1.svg" alt="" className="icon-menu" />
            </a>
            <a href="https://twitter.kira.network/" target="_blank" className="icon-wrapper">
              <img src="https://kira.network/images/x.svg" alt="" className="icon-menu" />
            </a>
          </div>
        </div>
        <div className="copy-right-mobile">
          2024 KIRA Network, All rights reserved.
        </div>
      </div>
    </section>
  );
}
