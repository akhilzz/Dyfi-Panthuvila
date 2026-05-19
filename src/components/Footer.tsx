'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="custom-footer">
      <div className="footer-top">
        <div>
          <div className="footer-brand">DYFI PANTHUVILA</div>
          <div className="footer-sub">THIRUVANANTHAPURAM DISTRICT · PANTHUVILA BRANCH</div>
        </div>
        <div className="footer-links">
          <div className="fl-col">
            <div className="fl-col-title">NAVIGATE</div>
            <a href="#s-history">HISTORY</a>
            <a href="#s-members">MEMBERS</a>
            <a href="#s-achievements">ACHIEVEMENTS</a>
            <a href="#s-events">GALLERY</a>
            <a href="#s-students">STUDENTS</a>
            <a href="#s-support">SUPPORT</a>
            <a href="#s-niv">NIVEDANAM</a>
            <a href="#s-news">NEWS</a>
          </div>
          <div className="fl-col">
            <div className="fl-col-title">DYFI OFFICIAL</div>
            <a href="https://dyfi.in" target="_blank" rel="noopener noreferrer">DYFI.IN</a>
            <a href="https://facebook.com/dyfikerala" target="_blank" rel="noopener noreferrer">DYFI KERALA FB</a>
            <a href="https://cpimkerala.org" target="_blank" rel="noopener noreferrer">CPM KERALA</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="fb-txt">FOR THE PEOPLE, BY THE PEOPLE</div>
        <div className="fb-txt">© 2025 DYFI PANTHUVILA — ALL RIGHTS RESERVED</div>
      </div>
    </footer>
  );
}
