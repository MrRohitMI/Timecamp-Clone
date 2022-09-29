import style from "../Components/nav.module.css"
import React from 'react'
import {  Link, Text } from "@chakra-ui/react"


const Footer = () => {
  return (
    <div className={style.pfooter}>
      <div className={style.footer}>
        <div className={style.fchild1}>
          <Text fontSize="22px" color="black" marginBottom="15%">
            Product
          </Text>
          <p>Features</p>
          <p>Integrations</p>
          <p>Applications</p>
          <p>Product updates</p>
          <p>Customer Stories</p>
          <p>Self-hosting</p>
        </div>
        <div>
          <Text fontSize="22px" color="black" marginBottom="15%">
            Support
          </Text>
          <p>support</p>
          <p>Knowledge base</p>
          <p>Developers API</p>
          <p>Server Status</p>
        </div>
        <div>
          <Text fontSize="22px" color="black" marginBottom="15%">
            Integrations
          </Text>
          <p>Trello</p>
          <p>Monday.com</p>
          <p>Google Calendar</p>
          <p>Asana</p>
          <p>Jira</p>
          <p>All integrations</p>
        </div>
        <div>
          <Text fontSize="22px" color="black" marginBottom="15%">
            Resources
          </Text>
          <p>Contact</p>
          <p>HeySpace</p>
          <p>About Us</p>
          <p>Press</p>
          <p>Become a Partner</p>
        </div>
        <div>
          <Text fontSize="22px" color="black" marginBottom="15%">
            Calculators
          </Text>
          <p>Profit Margin Calculator</p>
          <p>Online Timer</p>
          <p>Overtime Calculator</p>
          <p>ROI Calculator</p>
          <p>Time Crd Calculator</p>
        </div>
        <div>
          <Text fontSize="22px" color="black" marginBottom="15%">
            Legal
          </Text>
          <p>Terms</p>
          <p>Privacy</p>
          <p>Seecurity</p>
        </div>
      </div>
      <div className={style.footerLogo}>
        <a href="">
          <i class="fa-brands fa-facebook-f"></i>
        </a>
        <a href="">
          <i class="fa-brands fa-linkedin-in"></i>
        </a>
        <a href="">
          <i class="fa-brands fa-twitter"></i>
        </a>
      </div>
      <div style={{ color: "gray" }}>Copyright © 2022 TimeCamp. Inc.</div>
      <div style={{ fontSize: "13px", color: "gray" }}>
        We use cookies. Click here to learn more
      </div>
    </div>
  );
}

export default Footer

// https://cdn-m.timecamp.com/img/backgroundTop.webp
// 2888 1386


