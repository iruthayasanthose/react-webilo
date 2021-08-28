import React from 'react'
import { ServicesContainer, ServicesH1, ServicesWrapper, SevicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements'
import Icon1 from '../../images/webilo-designing.svg'
import Icon2 from '../../images/webilo-development.svg'
import Icon3 from '../../images/webilo-cms.png'
import Icon4 from '../../images/webilo-marketing.svg'
import Icon5 from '../../images/webilo-software-products.svg'
const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <SevicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Web Designing</ServicesH2>
                    <ServicesP>We offering web design services at affordable prices.</ServicesP>
                </SevicesCard>

                <SevicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Web Development</ServicesH2>
                    <ServicesP>We deliver beautiful scalable web apps for any businesses.</ServicesP>
                </SevicesCard>

                <SevicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>CMS Development</ServicesH2>
                    <ServicesP>We are capable of doing WordPress websites for any ideas.</ServicesP>
                </SevicesCard>

                <SevicesCard>
                    <ServicesIcon src={Icon4} />
                    <ServicesH2>SEO Marketing</ServicesH2>
                    <ServicesP>We are best in SEO and could help you to rank your websites.</ServicesP>
                </SevicesCard>

                <SevicesCard>
                    <ServicesIcon src={Icon5} />
                    <ServicesH2>Software Products</ServicesH2>
                    <ServicesP>We are delivering auto softwares for businesses to simplify the tasks.</ServicesP>
                </SevicesCard>


            </ServicesWrapper>
            
        </ServicesContainer>
    )
}

export default Services
