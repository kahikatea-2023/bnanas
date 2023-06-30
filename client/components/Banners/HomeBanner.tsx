import { useNavigate } from 'react-router-dom'

function HomeBanner() {
  const navigate = useNavigate()
  function goTo(link: string) {
    navigate(link)
  }

  return (
    <div className="about-banner">
      <div className="container-fluid">
        <div className="row">
          <div className="col col-md-6">
            <div className="col-full-bleed">
              <img src="images/leaningbanana.png" alt="team"></img>
            </div>
          </div>
          <div className="col col-md-6 col-vertical-center">
            <div className="col-constrain">
              <img src="images/logo.png" alt="logo"></img>
              <h1>Bnana.</h1>
              <p className="subtitle about-banner__subtitle">
                Take a tropical journey with our luscious tropical bananas.
              </p>
              <button onClick={() => goTo('/shop')}>view full range</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeBanner