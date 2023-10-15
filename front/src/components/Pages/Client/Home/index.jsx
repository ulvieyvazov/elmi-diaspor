import React from 'react'
import "./index.scss"

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

          <div className='left-card' style={{margin: '20px 0'}}>
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

        </div>

        <div className='home-main'>

        </div>

        <div className='home-right'>

        </div>
      </div>
    </div>
  )
}

export default Home
