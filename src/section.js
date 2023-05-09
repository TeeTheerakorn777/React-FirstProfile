import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas); // เพิ่ม package ของ free-brands-svg-icons เข้าไปใน library ของ FontAwesome

function All() {
    return (
        <div className="title">
                <div className="con-text">
                    <h1>I'm <span>Theerakorn</span></h1>
                    <h2>Front-End Developer.</h2>
                </div>
                <div className="con-contact">
                    <p><img src={process.env.PUBLIC_URL + '/dotmap.png'} className="address" /> Songkhla, Thailand</p>
                    <p><img src={process.env.PUBLIC_URL + '/email.png'}  className="email"/> theerakorn.dev@gmail.com</p>
                </div>
                <div className="con-skills">
                    <h4>PROGRAMMIMG / FRAMWORK</h4>
                    <div className="card-skills">
                        <div className="skill">
                            <FontAwesomeIcon icon={['fab', 'html5']} style={{ color: '#ee652c' }} />
                        </div>
                        <div className="skill">
                            <FontAwesomeIcon icon={['fab', 'css3-alt']} style={{ color: '#20abdb' }} />
                        </div>
                        <div className="skill">
                            <FontAwesomeIcon icon={['fab', 'js']} style={{ color: '#f9d837' }} />
                        </div>
                        <div className="skill">
                            <FontAwesomeIcon icon={['fab', 'php']} style={{ color: '#787cb4' }} />
                        </div>
                        <div className="skill">
                            <FontAwesomeIcon icon={['fab', 'react']} style={{ color: '#00d8fe' }} />
                        </div>
                    </div>
                </div>
                <div className="con-tools">
                    <h4>TOOLS</h4>
                    <div className="card-tools">
                        <div className="tool">
                            <FontAwesomeIcon icon={['fab', 'git-alt']} style={{ color: '#f05133' }} />
                        </div>
                        <div className="tool">
                            <FontAwesomeIcon icon={['fab', 'github']} style={{ color: '#fff' }} />
                        </div>
                        <div className="tool">
                            <img src={process.env.PUBLIC_URL + 'vscode.png'}></img>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default All