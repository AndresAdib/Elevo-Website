import React from 'react';
import "./Team.css";

export const Team = () => {
    return (
        <section id='prueba'>
            <h3 className='team-title' data-aos="zoom-in">TEAM</h3>
            <h4 className='leader-title' data-aos="slide-up">LEADERSHIP</h4>
            <div className='container_cards' data-aos="slide-up">
                <div className='card'>
                    <div className="cover">
                        <img src="/src/assets/Nick-fondo.png" alt="Nick" />
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
                                Nick has served as Vice Chair of the University of Akron Board of Trustees. He has been a champion of
                                entrepreneurship on the national level as a Board Member of the National Small Business Association
                                (NSBA) in Washington, DC, and as Vice Chair of the Council of Smaller Enterprises (COSE), the largest
                                small business member organization in the country</p>
                    </div>
                </div>
                <div className='card'>
                    <div className="cover">
                        <img src="/src/assets/John-fondo.png" alt="John" />
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
                <div className='card'>
                    <div className="cover">
                        <img src="/src/assets/Audrey-fondo.png" alt="Audrey" />
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
            </div>
        </section>
    )
}
