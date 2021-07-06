import React from 'react'
import { 
    FaFacebook,
    FaInstagram,
    FaLinkedin
} from 'react-icons/fa'
import { Button } from '../../globalStyle'
import
 { FooterContainer, 
    FooterSubscription, 
    FooterSubHeading, 
    FooterSubText, 
    Form,
    FormInput, 
    FooterLinksContainer,
     FooterLinksWrapper,  
     FooterLinksItems, 
     FooterLinkTitle, 
     FooterLink,
     SocialMediaWrap,
     SocialMedia,
     SocialIconLink,
     SocialIcon,
     SocialIcons,
     WebsiteRights,
     SocialLogo

} from './Footer.Element'

const Footer = () => {
    return (
        <>
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Join our exclusive membership to recieve the latest news and trends
                    </FooterSubHeading>
                    <FooterSubText>
                        You can unsubscribe at any time
                        </FooterSubText>
                        <Form>
                            <FormInput name='email' type='email' placeholder='Your Email' />
                            <Button fontBig> Subscribe </Button>
                            </Form>
                </FooterSubscription>
                
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to="/">
                                <SocialIcon />
                                 QuizClub
                                </SocialLogo>
                                <WebsiteRights> QuizClub @ 2021 </WebsiteRights>
                                <SocialIcons>
                                    <SocialIconLink href='/' target="_blank" aria-label="Facebook">
                                        <FaFacebook />
                                        </SocialIconLink>
                                        <SocialIconLink href='/' target="_blank" aria-label="Instagram">
                                        <FaInstagram />
                                        </SocialIconLink>
                                        <SocialIconLink href='/' target="_blank" aria-label="Linkedin">
                                        <FaLinkedin />
                                        </SocialIconLink>
                                        </SocialIcons>
                            </SocialMediaWrap>
                    </SocialMedia>
        </FooterContainer>
        </>
    )
}

export default Footer