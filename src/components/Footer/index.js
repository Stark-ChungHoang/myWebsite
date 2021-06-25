import React from 'react';
import {animateScroll as scroll} from "react-scroll"
import {FaFacebook,FaInstagram,FaYoutube,FaTwitter,FaLinkedin} from "react-icons/fa"
import { FooterContainer, FooterLink, FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, FooterWrap, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights} from './FooterElements'
import {FooterLinksItems,SocialIconsLink} from "./FooterElements"

function Footer() {
    const toggleHome = ()=> {
        scroll.scrollToTop();
    }
    return (
  
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>About us </FooterLinkTitle>
                                <FooterLink to='/signin'>About us</FooterLink>
                                <FooterLink to='/signin'>How it works</FooterLink>
                                <FooterLink to='/signin'>Testimonials</FooterLink>
                                <FooterLink to='/signin'>Careers</FooterLink>
                                <FooterLink to='/signin'>Invertors</FooterLink>
                                <FooterLink to='/signin'>Term of services</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>Useful Links </FooterLinkTitle>
                                <FooterLink to='/signin'>Techer</FooterLink>
                                <FooterLink to='/signin'>Course</FooterLink>
                                <FooterLink to='/signin'>Support</FooterLink>
                                <FooterLink to='/signin'>Why us</FooterLink>
                                <FooterLink to='/signin'>Social Media</FooterLink>
                                <FooterLink to='/signin'>Careens</FooterLink>
                                
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>Recent Tweets </FooterLinkTitle>
                                <FooterLink to='/signin'>WordPress</FooterLink>
                                <FooterLink to='/signin'>Read more</FooterLink>
                                <FooterLink to='/signin'>Testimonials</FooterLink>
                                <FooterLink to='/signin'>Support</FooterLink>
                                <FooterLink to='/signin'>Learning English</FooterLink>
                                <FooterLink to='/signin'>Tutorial</FooterLink>
           
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>Last course </FooterLinkTitle>
                                <FooterLink to='/signin'>Html,css,javascript</FooterLink>
                                <FooterLink to='/signin'>Reactjs</FooterLink>
                                <FooterLink to='/signin'>Angular</FooterLink>
                                <FooterLink to='/signin'>PHP</FooterLink>
                                <FooterLink to='/signin'>JAVA</FooterLink>
                                <FooterLink to='/signin'>WordPress</FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo onClick = {toggleHome} to="/">dolla</SocialLogo>
                        <WebsiteRights>dolla 2020 {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                                <SocialIconsLink href="/" target="_blank" aria-label="Facebook">
                                        <FaFacebook />
                                </SocialIconsLink>
                                <SocialIconsLink href="/" target="_blank" aria-label="Instagram">
                                        <FaInstagram />
                                </SocialIconsLink>
                                <SocialIconsLink href="/" target="_blank" aria-label="Youtube">
                                        <FaYoutube />
                                </SocialIconsLink>
                                <SocialIconsLink href="/" target="_blank" aria-label="Twitter">
                                        <FaTwitter />
                                </SocialIconsLink>
                                <SocialIconsLink href="/" target="_blank" aria-label="Linkedin">
                                        <FaLinkedin />
                                </SocialIconsLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
            
        </FooterContainer>
    )
}

export default Footer
