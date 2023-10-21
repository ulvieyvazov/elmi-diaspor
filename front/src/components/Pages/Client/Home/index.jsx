import React from 'react'
import "./index.scss"
import { FaLocationDot } from "react-icons/fa6";


const Home = () => {
  return (
    <div className='home-container'>
      <div className='home-parent'>
        <div className='home-left'>
          <img src="https://elmidiaspor.edu.az/images/HAnew.jpg" alt="" />

          <div className='left-card'>
            <h3>Layihə yenilikləri</h3>
            <div className='left-card-body'>
              <ul>
                <a href=""><li>Layihənin iş planı</li></a>
                <a href=""><li>Layihənin tərəfdaşları</li></a>
              </ul>
            </div>
          </div>

          <div className='left-card' style={{ margin: '20px 0' }}>
            <h3>Diaspor xəbərləri</h3>
            <div className='left-card-body'>
              <ul>
                <a href=""><li>Diasporla iş üzrə Dövlət Komitəsi</li></a>
                <a href=""><li>Azərbaycan Dövlət İnformasiya Agentliyi</li></a>
                <a href=""><li>APA İnformasiya Agentliyi</li></a>
                <a href=""><li>“Report” İnformasiya Agentliyi</li></a>
              </ul>
            </div>
          </div>

          <div className='left-card' style={{ margin: '20px 0' }}>
            <h3>Tanış olun: bizim elmi diaspor</h3>
            <div className='left-card-body'>
              <ul>
                <a href=""><li>Səbzəli Cavadov</li></a>
              </ul>
            </div>
          </div>

          <a href="https://www.aztu.edu.az/az" target='_blank'><img src="https://elmidiaspor.edu.az/images/AzTU.jpg" alt="" /></a>


          <div className='left-card' style={{ margin: '20px 0' }}>
            <h3>Hava proqnozu</h3>
            <div className='left-card-body'>
              <div>
                <a href="https://www.gismeteo.com/weather-baku-5302/" target='_blank'>
                  <img src="https://www.treehugger.com/thmb/3-kDdYqWzDQiwY2UlvOpmLhXv3c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__treehugger__images__2019__09__cloud-0693b27e05ee4a1c802182da4aa117a9.jpg" alt="" />
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className='home-main'>

          <div className='diaspor-uzvleri'>
            {/* <a href=""> <FaLocationDot/> Baslangic/</a>
            <a href="">Diaspor uzvləri</a> */}
            <h2>Diaspor üzvləri</h2>
          </div>

        </div>

        <div className='home-right'>

        </div>
      </div>
    </div>
  )
}

export default Home
