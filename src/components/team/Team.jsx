import React from 'react';
import { useState } from 'react';
import "./Team.css";

export const Team = () => {

    const [activeCard, setActiveCard] = useState(null);

    const handleCardClick = (index) => {
        // Alternar la tarjeta activa: si ya está activa, la desactiva; si no, activa la seleccionada
        setActiveCard(index === activeCard ? null : index);
    };

    return (
        <section id='prueba'>
            
            <h4 className='leader-title' data-aos="slide-up">TEAM</h4>
            <div className='container_cards' data-aos="slide-up">
                <div className={`card ${activeCard === 0 ? 'active' : ''}`}
                    onClick={() => handleCardClick(0)} >
                    <div className="cover">
                        <img src="/src/assets/Nick.png" alt="Nick" />
                        <div className="img_back"></div>
                    </div>
                    <div className="biografia">
                        <h2>Nick York</h2>
                        <p>Nick is an Entrepreneur, Strategic Business Advisor and Attorney with experience ranging from startups to Fortune
                        500 companies, universities and national non-profit organizations. </p><p className='hover-text'>Prior to dedicating himself full-time to
                        his entrepreneurial endeavors, Nick had a highly successful twenty-year legal practice with firms in
                        Cleveland, Chicago and Columbus. As an Entrepreneur, Nick has been an owner, investor, director and
                        partner in several companies throughout his career with domestic and international operations.
                        Nick’s motivation and passion over his 25-year career has been to inspire and help people and
                        organizations maximize potential. He has played leadership roles in a number of community and nonprofit organizations focused on improving the lives and conditions of the communities around him.
                        Nick is the Co-founder and Board Chair of the Ohio Innovation and Technology Associaiton (OITA). Nick has served as Vice Chair of the University of Akron Board of Trustees. He has been a champion of
                        entrepreneurship on the national level as a Board Member of the National Small Business Association
                        (NSBA) in Washington, DC, and as Vice Chair of the Council of Smaller Enterprises (COSE), the largest
                        small business member organization in the country</p>
                    </div>
                </div>
                <div className={`card ${activeCard === 1 ? 'active' : ''}`}
                    onClick={() => handleCardClick(1)}>
                    <div className="cover">
                        <img src="/src/assets/John.png" alt="John" />
                        <div className="img_back"></div>
                    </div>
                    <div className="biografia">
                        <h2>John Patterson</h2>
                        <p>John is an accomplished and dynamic Business Entrepreneur and Attorney driven to create innovative
                        business solutions with a broad impact. </p><p className='hover-text'>He blends a profound understanding of legal intricacies and
                        business acumen to be at the forefront of opportunities in competitive business landscapes. As an
                        Attorney, John built a longstanding reputation as a leading product liability practitioner serving Fortune
                        100 companies nationwide. His legal career spanned over 25 years, where he led some of the industry’s
                        most complex legal matters, representing diversified clientele in manufacturing, distribution, and retail.
                        Here, he executed complex case and negotiation strategies to create favorable business outcomes and
                        disarm high-risk matters with uncompromising ethical standards.
                        John now pairs his legal acumen and business savvy to drive business innovation and visionary leadership
                        across new ventures and opportunities. He leverages data-driven solutions to optimize processes, close
                        performance gaps, and adopt best practices with an unyielding pursuit of excellence. John ushers a steady
                        leadership approach to build consensus and effectively manage expectations of key stakeholders, client
                        partners, and cross-functional teams to achieve goals and outperform expectations. He skillfully navigates
                        the complex intersection of business and law to deliver distinctive professional capabilities to business
                        pursuits and transform ideas into thriving opportunities.</p>
                    </div>
                </div>
                <div className={`card ${activeCard === 2 ? 'active' : ''}`}
                    onClick={() => handleCardClick(2)}>
                    <div className="cover">
                        <img src="/src/assets/Audrey.png" alt="Audrey" />
                        <div className="img_back"></div>
                    </div>
                    <div className="biografia">
                        <h2>Audrey Prinzbach</h2>
                        <p>Audrey is an Operations and Team Building <br />expert driven by delivering results to affect a client’s bottom line. 
                        </p><p className='hover-text'>An experienced entrepreneur as a Co-Founder of Transom Group, an international technology development company, and Operation’s Director for 2 additional start-ups, Audrey understands what it takes to be successful and how to integrate people and implement processes to make it happen.
                        Audrey has spent the past 15 years building teams and creating a powerhouse of relationships to engage the very best in the market. She has built her career on creating trust and confidence and brings a diversified set of skills to ensure success; whether it’s working directly with clients on consulting assignments, sourcing and placing top talent to meet client demands, or working to create an environment to help employees thrive and grow.
                        Results oriented, client centric, and passionate about ELEVO’s core value of maximizing potential for clients, employees, and communities, Audrey is uniquely suited to provide tailored customer solutions and to attract and retain the best to ELEVO.
                        </p>
                    </div>
                </div>

                
                <div className={`card ${activeCard === 3 ? 'active' : ''}`}
                    onClick={() => handleCardClick(3)}>
                    <div className="cover">
                        <img src="/src/assets/Craig.png" alt="Nick" />
                        <div className="img_back"></div>
                    </div>
                    <div className="biografia">
                        <h2>Craig Cook</h2>
                        <p>Craig is an accomplished Entrepreneur and Business Leader with a diverse background in law, 
                        manufacturing, and mergers & acquisitions.  </p><p className='hover-text'>He is co-founder and former CEO of Precision Production LLC, a supplier of machined components and 
                        assemblies serving global OEM customers across various markets. Craig previously practiced law with 
                        Reminger LPA in Cleveland.  
                        Craig sold a majority stake in Precision Production in 2019 and stayed on as CEO through 2023. Under 
                        Craig's leadership, the company expanded with the strategic acquisition of a manufacturing company in 
                        the Chicago area. As an attorney who operated and grew a private business over 28 plus years, Craig 
                        understands the concerns and needs of business owners and appreciates the sometimes complicated 
                        relationship owners have when dealing with legal issues and the legal profession in general.  
                        Craig earned a BA from Muskingum University in Ohio, JD from Case Western Reserve University 
                        School of Law in Cleveland, MBA from Baldwin Wallace University in Berea, Ohio, as well as a Master 
                        of Laws in Intellectual Property from the University of Akron School of Law. His diverse, 
                        multidisciplinary background provides a unique perspective on the challenges faced by small and 
                        medium-sized businesses dealing with legal challenges that are beyond the scope of their core operations. </p>
                    </div>
                </div>
                <div className={`card ${activeCard === 4 ? 'active' : ''}`}
                    onClick={() => handleCardClick(4)}>
                    <div className="cover">
                        <img src="/src/assets/Miguel.png" alt="John" />
                        <div className="img_back"></div>
                    </div>
                    <div className="biografia">
                        <h2>Miguel Gomez</h2>
                        <p>Miguel is a bilingual Executive with +25 years of International experience with Fortune 500 companies in 
                        the Manufacturing, Consumer Goods and Consulting industries.   </p><p className='hover-text'>His expertise is in providing vision, leadership, and management to teams to drive profitability, growth, 
                        visibility and process effectiveness through the architecture, design and implementation of technology-
                        based solutions and best practices. 
                        Visionary, entrepreneur, change agent with a track record of success, Miguel has built performing 
                        organizations in multinational environments creating a culture of continuous improvement, partnership 
                        and customer focus, bringing value and positively impacting enterprise performance and customer 
                        satisfaction. 
                        He has led large teams in domestic and international markets to deliver large scale programs including IT 
                        Strategic Planning, Shared Services, Business Process Outsourcing, IT Financial Transformation, 
                        Acquisition Integrations, Enterprise IT Governance and Security, Data Harmonization, Business 
                        Information Visibility / Data Warehouse, ERP & CRM implementations, Applications Development and 
                        IT Infrastructure modernization. 
                        A firm believer of technology as means to maximize potential, Miguel has expanded his domain of 
                        proficiency beyond IT to a broader scope including IoT, Industrial Automation, Industry 4.0 and Energy 
                        Services. 
                        Objective, open-minded, trusted adviser with in-depth technology expertise and global mindset, Miguel 
                        builds organizations focused on true partnership and value creation. </p>
                    </div>
                </div>
                <div className={`card ${activeCard === 5 ? 'active' : ''}`}
                    onClick={() => handleCardClick(5)}>
                    <div className="cover">
                        <img src="/src/assets/Travis.png" alt="Audrey" />
                        <div className="img_back"></div>
                    </div>
                    <div className="biografia">
                        <h2>Travis Faber</h2>
                        <p>Travis is an Attorney whose expertise extends across diverse industries, where he has developed a robust 
                        practice advising and collaborating with numerous business partners.   
                        </p><p className='hover-text'>His clients include steel fabricators, industrial manufacturers, medical providers, restaurants, car 
                        dealerships, national franchises, building contractors, and large agricultural operations.  
                        Travis is proficient in business law, handling an array of matters from: business formation, mergers and 
                        acquisitions, contracts, licensing, employment, non-competes, insurance claims, state and federal 
                        regulatory investigations and government affairs among others. His broad skill set makes him a valuable 
                        asset to businesses seeking thorough legal counsel and strategic advice.  
                        Travis is committed to community service and professional development. He serves on the board of Park 
                        National Bank's Western Division, contributing to the financial and strategic oversight of the institution. 
                        He is also a board member of VentureLinx Career Academy, a community-based organization dedicated 
                        to providing employment opportunities for individuals with disabilities, reflecting his dedication to 
                        making a positive impact.  
                        Travis's combination of legal acumen, industry knowledge, and community involvement underscores his 
                        reputation as a trusted advisor and advocate for his clients and the community. 
                        </p>
                    </div>
                </div>
                <div className={`card ${activeCard === 6 ? 'active' : ''}`}
                    onClick={() => handleCardClick(6)}>
                    <div className="cover">
                        <img src="/src/assets/Francisco.png" alt="Audrey" />
                        <div className="img_back"></div>
                    </div>
                    <div className="biografia">
                        <h2>Francisco Escamilla</h2>
                        <p>Francisco is a bicultural entrepreneur with an extensive background in launching and advising 
                        companies in both the USA and Mexico.   
                        </p><p className='hover-text'>His unique background across these two cultures have endowed him with a deep understanding of 
                        the business landscapes in both countries, enabling him to navigate and bridge the nuances of each. 
                        Francisco’s extensive background and diverse international expertise make him a pivotal leader 
                        dedicated to driving innovation and excellence. 
                        Francisco is currently the President and CEO of Direx Factor Humano, an HR consulting firm he 
                        started in 2015 in Monterrey Mexico. With over nine years of leadership in business process and 
                        organizational institutionalization, human factor consulting, and strategic planning, Francisco has 
                        driven significant growth and development within the company. 
                        In addition to his role at Direx, Francisco has been the Vice President of Mexico Relations for 
                        NASCO (North America Strategy for Competitiveness) since 2006, focusing on enhancing the 
                        competitiveness of the North American supply chain, workforce, the environment, and energy 
                        independence. He also founded and participated as a board member for various companies in the 
                        USA and Mexico related to the import/export of Industrial Consumables, International Logistics, 
                        Robotics and Education. 
                        Francisco spent a decade in Overland Park, Kansas, where he earned his MBA from Baker 
                        University and gained valuable corporate experience. He worked for Marley Cooling Systems, 
                        where he led business development across Latin America, the Caribbean, Africa, the Middle East, 
                        and China.  
                        Francisco has been a guest trainer for Sandler Training México for over a decade, where he delivers 
                        training in sales, strategic planning, conflict resolution, and business management.  
                        </p>
                    </div>
                </div>
            </div>

        </section>
    )
}
