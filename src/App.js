import img1 from './images/doublephones.png';
import './App.css';
import Handpointer from './images/tap.png'
import Fingerprint from './images/fingerprint.png'
import square from './images/square.png'
import location from './images/location.png'
import settings from './images/settings1.png'
import worldwide from './images/global.png'
import React from 'react';
import phoneimg from './images/phoneimg.png'
import { FaBell, FaPaperPlane } from 'react-icons/fa'
import { FaVideo } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { FaLayerGroup } from 'react-icons/fa'
import phoneimg1 from './images/thumb2.png'
import { FaBrush } from 'react-icons/fa'
import { FaFire } from 'react-icons/fa'
import { MdAppSettingsAlt } from 'react-icons/md'
import { AiOutlineCloudDownload } from 'react-icons/ai'
import { FaShoppingCart } from 'react-icons/fa'
import { GoSettings } from 'react-icons/go'
import { BiRightArrow } from 'react-icons/bi'
import bike from './images/bike.png'
import motorbike from './images/motorbike.png'
import GooglePlay from './images/google-play.png'
import AppStore from './images/app-store.png'
import { GiDogHouse } from 'react-icons/gi'
import { AiFillPhone } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import { AiOutlineArrowUp } from 'react-icons/ai'








function App() {


  return (
    <div className="App">
      <head>
        <title>App Showcase</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </head>
      <body>
        <nav className='custom-select'>
          <select>
            <option value="Home">Home</option>
          </select>
          <a href="#features" className='nav-links'>Features</a>
          <select><option value="Pages">Pages</option></select>

          <a href="#screenshots" className='nav-links'>Screenshots</a>
          <a href="#pricing" className='nav-links'>Pricing</a>
          <a href="#contact" className='nav-links'>Contact</a>
        </nav>
        <div><div className='div-home'>
          <h1 className='home-heading'>Creative way to Showcase your App</h1>

          <p className='home-paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex praesentium assumenda, voluptate cumque nulla a voluptates vero exercitationem quisquam vitae. </p>
          <button className='home-btn'>Get Started</button>
        </div>
          <img src={img1} alt="Phone showcase" className='home-img1' />





        </div>
        <div className='features-div'>
          <h1 className='features-heading'>Code Challenge</h1>
          <hr className='features-line' />
          <p className='features-paragraph'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro quos quis a cumque optio! Asperiores illum modi animi sit beatae!</p>
        </div>
        <section className='features'>
          <div className='features-section'>
            <img src={Handpointer} alt="Hand pointer" className='features-img' />
            <h1 className='section-heading'>Fully functional</h1>
            <p className='section-paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem cum est porro ratione harum vero.</p>
          </div>

          <div className='features-section'>
            <img src={Fingerprint} alt="Finger print" className='features-img' />
            <h1 className='section-heading'>Fully functional</h1>
            <p className='section-paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem cum est porro ratione harum vero.</p>
          </div>
          <div className='features-section'>
            <img src={square} alt="square" className='features-img' />
            <h1 className='section-heading'>Fully functional</h1>
            <p className='section-paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem cum est porro ratione harum vero.</p>
          </div>
          <div className='features-section'>
            <img src={location} alt="Location" className='features-img' />
            <h1 className='section-heading'>Location Tracking</h1>
            <p className='section-paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem cum est porro ratione harum vero.</p>
          </div>
          <div className='features-section'>
            <img src={settings} alt="settings" className='features-img' />
            <h1 className='section-heading'>Powerful settings</h1>
            <p className='section-paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem cum est porro ratione harum vero.</p>
          </div>
          <div className='features-section'>
            <img src={worldwide} alt="global" className='features-img' />
            <h1 className='section-heading'>Multiple Language</h1>
            <p className='section-paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem cum est porro ratione harum vero.</p>
          </div>

        </section>
        <article className='powerful-tools'>
          <div>
            <img src={phoneimg} className='phone-img' alt="Phone Image" />
          </div>
          <div className='second-div'><h1 className='article-heading'>Work faster with powerful tools.</h1>
            <ul className='unordered-list'>
              <li>Combined with a handful of model sentence structures <br /><div className='list-space'> looks reasonable </div></li>
              <li>Contrary to popular belief Lorem ipsum is not simply <br /><div className='list-space'>random text.</div></li>
              <li>Sed ut perspiciats unde omnis iste natus error sit <br /> <div className='list-space'> voplupatem accusantium.</div></li>
              <li>Natus error sit volaptatem unde omnis iste natus error sit <br /> <div className='list-space'>volupatem accusantium.</div></li>
              <li>All the lorem generators on the internet tend to  <div className='list-space'> repeat necessary.</div></li></ul>
            <div className='article-icon'>
              <button className='icon-btnn'><FaBell className='icon-btn' /> </button>
              <button className='icon-btnn'> <FiMail className='icon-btn' /> </button>
              <button className='icon-btnn' ><FaVideo className='icon-btn' /> </button> </div></div>

        </article>
        <article className='article2'>
          <div className='article2-first'>
            <h1 className='article2-heading'>Share your photos with friends easily</h1>

            <ul className='list2'>
              <li> <FaLayerGroup className='layergroup' />Fully layered dolor sit amet, Lorem ipsum dolor sit amet,<div className='li-list2'> consectetur  adipisicing elit. Totam, hic!</div></li>
              <li> <FaBrush className='layergroup' />Customizable design Lorem ipsum dolor sit amet consectetur <div className='li-list2'>adipisicing elit. Perspiciatis natus quidem,asperiores exercitationem aut dignissimos!</div>  </li>
              <li> <FaFire className='layergroup' />Drop ipsum Lorem ipsum, dolor sit amet consectetur <div className='li-list2'> adipisicing elit. Repudiandae, ipsum.</div></li>
              <li> <FaShoppingCart className='layergroup' /> Marketing chart Lorem, ipsum dolor sit amet consectetur <div className='li-list2'>adipisicing elit. Nostrum, corrupti.</div> </li>
            </ul>
            <button className='home-btn'>Learn more</button>

          </div>

          <div>
            <img src={phoneimg1} alt="Phone image" className='phoneimg1' />
          </div>

        </article >
        <section className='section1'>
          <div className='features-div'>
            <h1 className='headingone'>Code Challenge</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum tempora necessitatibus temporibus in voluptatibus alias.</p></div>
          <div className='section-in'>
            <div className='first-setting'>
              <AiOutlineCloudDownload className='icon-setting' />
              <h1>install the app</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, ea.</p>
            </div>
            <div><BiRightArrow className='icon-setting1' /></div>
            <div className='first-setting'><GoSettings className='icon-setting' />
              <h1> Setup your profile</h1>
              <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, odit.</p>
            </div>
            <div><BiRightArrow className='icon-setting1' /></div>
            <div className='first-setting1'><MdAppSettingsAlt className='icon-setting' />
              <h1>Enjoy the features!</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, fuga.</p>
            </div>
          </div>
        </section>
        <section className='prices'>
          <div className='features-div1'>
            <h1 className='features-heading'>BASMA code Challenge</h1>
            <hr className='features-line' />
            <p className='features-paragraph'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro quos quis a cumque optio! Asperiores illum modi animi sit beatae!</p>
          </div>
          <div className='prices-list'>
            <div className='prices-listdiv'>
              <img src={bike} alt="Bike" />
              <h3 className='prices-p'>BASIC</h3>
              <h1>$49</h1>
              <p>5GB Linux Web Space</p>
              <p>5 MySQL Databases</p>
              <p>24/7 Tech Support</p>
              <p className='paara'>Daily backups</p>
              <button>Sign up</button>
            </div>
            <div className='prices-listdiv1'>
              <img src={motorbike} alt="Motorbike" />
              <h3 className='prices-p'>PRO</h3>
              <h1>$129</h1>
              <p>10GB Linux Web Space</p>
              <p>5 MySQL Databases</p>
              <p>Unlimited Email</p>
              <p className='paara'>Daily backups</p>
              <button>Sign up</button>

            </div>
          </div>

          <h4>Not sure what to choose? Contact Us</h4>
        </section>
        <section >
          <div className="ContactUs">
            <h1>BASMA is available for all devices</h1>
            <p className='contactpara1'>sApp is available for all devices, Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora animi at iusto unde fugiat aspernatur libero pariatur eius quae labore.</p>
            <div className='justImg'>
              <img src={GooglePlay} className='Google play' />
              <img src={AppStore} className='App store' />
            </div>
            <p className='contactpara'>*Availabe on Iphone,Ipad and all Androir devices</p>
          </div>
        </section>
        <div className='Updates'>
          <h1>Subscribe to get updates</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos nobis excepturi ex fuga dolor veritatis iusto, quaerat suscipit, dolorum nulla doloribus eius, necessitatibus aliquam. Quae deleniti necessitatibus voluptatibus nulla harum?</p>
          <input type="email" name="Email" placeholder='Enter your email' />
          <button className='updates-btn'>Subscribe</button>
        </div>

        <section className="contact-section">
          <div className='features-div1'>
            <h1 className='features-heading'>Stay Tuned</h1>
            <hr className='features-line' />
            <p className='features-paragraph'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro quos quis a cumque optio! Asperiores illum modi animi sit beatae!</p>
          </div>
          <div className='contact-div'>
            <div className='contact-div1'><p>Contrary to popular belief Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus laboriosam deleniti odio aliquid, corporis maiores sunt mollitia deserunt sint incidunt.</p>
              <ul className='contact-ul'>
                <li> <GiDogHouse className='contact-icon' />Vestibulium nulla libero,covalis, tincidunt <div className='ul-jump'> suscipit diam,DC 2002</div></li>
                <li><AiFillPhone className='contact-icon' />+1 239 456 789-012 345 6789</li>
                <li><MdEmail className='contact-icon' /> exampledomain@domain.com</li></ul>
            </div>
            <div className='contact-div2'><input type="text" name="Name" id="" placeholder='Name' />
              <input type="email" name="Email" placeholder='Email' id="" />
              <input type="text" name="" id="" placeholder='Subject' />
              <textarea name="Message" id="" placeholder='Message' cols="20" rows="5"></textarea>
              <button><FaPaperPlane /> Send message</button></div>
          </div>
        </section>

        <div className='last-div'>
          <button className='last-btn' > <a href="#"> <AiOutlineArrowUp className='arrow-up' /></a></button></div>
      </body >
    </div>
  );
}

export default App;
