import './titlePage.css'

function TitlePage({ onGetStarted }) {
  return (
    <div className="title-page">
      <div className="title-page__overlay" />

      <header className="title-page__header">
        <p className="title-page__logo">
          Cook<span>Cat</span>
        </p>
      </header>

      <main className="title-page__content">
        <h1 className="title-page__title">COOKING</h1>
        <p className="title-page__subtitle">
          Discover recipes, master techniques, and cook with{' '}
          <span>confidence</span>
        </p>
        <button type="button" className="title-page__btn" onClick={onGetStarted}>
          Get Started
        </button>
      </main>
    </div>
  )
}

export default TitlePage
