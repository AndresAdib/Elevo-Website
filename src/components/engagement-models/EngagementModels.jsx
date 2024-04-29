import React from 'react'
import "./EngagementModels.css"

export default function EngagementModels() {
    return (
        <section id='models'>

            <h3 className='models-title' >Engagement Models</h3>
            <div className='model-text'>
                <p>We offer flexible fixed price engagement models that ensure budget flexibility, transparency, and certainty; including:</p>
            </div>

            <div className='model-list'>
                <div className='model-cards'>
                    <div className='model-card'>
                        <h3>Consultation Plus (+)</h3>
                        <div className='hover-list'>
                            <p>A series of meetings  (weekly, monthly, or quarterly) along with a package of standard documents and information to address common legal needs for each stage of your business:</p>
                            <ul>
                                <li>Start Up</li>
                                <li>Capital Raise</li>
                                <li>Business Expansion</li>
                                <li>Acquisitions</li>
                                <li>Joint Ventures</li>
                                <li>Exit Plannig</li>
                            </ul>
                        </div>
                    </div>
                    <div className='model-card'>
                        <h3>Project Centric:</h3>
                        <div className='hover-list'>
                            <p>Project specific “just in time” assignment on a part-time, full-time, or “as needed” basis to get the job done. </p>
                            <ul>
                                <li>Business Formation</li>
                                <li>Capital Raise/Acquisitions/Joint Venture</li>
                                <li>HR/Labor Matters</li>
                                <li>Intellectual Property Protection</li>
                                <li>New Tech (AI/Cyber-security)</li>
                                <li>Regulatory Compliance/Government Relations</li>
                                <li>International Transactions</li>
                                <li>Crisis Resolution/Communication</li>
                                <li>Litigation Management </li>
                                <li>Exit or Sale of the Business</li>
                            </ul>
                        </div>
                    </div>
                    <div className='model-card'>
                        <h3>Strategic Advisory</h3>
                        <div className='hover-list'>
                            <p>A dedicated “outside general counsel” assignment, on-premises, remote or hybrid with C-level reporting requirements and responsibility. Advise, guide and manage organizational legal strategy and compliance, including: </p>
                            <ul>
                                <li>Advise/consult CEO and executive management team on strategic initiatives.</li>
                                <li>Board of Directors and Governance responsibility and reporting.</li>
                                <li>Manage internal legal team/assignments and outside counsel.</li>
                                <li>Available to lead and/or assist in implementing strategic initiatives and due diligence.</li>
                                <li>Responsible for certain external communications, government, and/or public affairs.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='tag'>
                    <h3>It's a matter of TIME...we take the risk of inefficiency out of the equation. </h3>
                </div>

                <h3 className='surrounded'>Surrounded by Value</h3>
                <div className='model-client'>
                    <div className='arrow-up'>
                        <p><b>EXPERIENCE</b></p>
                        <img src="/src/assets/flecha-correcta.png" alt="" />
                    </div>
                    <div className='client-contain'>
                        <div className='arrow-left'>
                            <img src="/src/assets/flecha-correcta.png" alt="" />
                            <p><b>TECHNOLOGY</b></p>
                        </div>
                        <div className='client'>
                            <img src="/src/assets/clientes.png" alt="" />
                        </div>
                        <div className='arrow-right'>
                            <img src="/src/assets/flecha-correcta.png" alt="" />
                            <p><b>NETWORK</b></p>
                        </div>
                    </div>
                    <div className='arrow-down'>
                        <img src="/src/assets/flecha-correcta.png" alt="" />
                        <p><b>COST</b></p>
                    </div>
                </div>
            </div>

        </section>
    )
}

