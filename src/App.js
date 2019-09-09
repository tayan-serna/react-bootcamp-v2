import React from 'react';
import './App.scss';

function App() {
  /* return (
    <div className="App">
      <h1 className="App_header">RICK AND MORTY V2</h1>
      <section className="App_content">
        <div className="App_detail">
          <div className="App_detail_image-container">
            <span role="img" aria-label="back" className="App_detail__back">
              🔙
            </span>
            <img
              className="App_detail__image"
              src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            />
            <span role="img" aria-label="star" className="App_detail__favorite">
              ⭐
            </span>
          </div>
          <div className="App_detail__details">
            <div className="App_detail__item">
              <strong className="App_detail__label">NAME: </strong>
              <span className="App_datail_info">
                Rick Sanchez <span>(Alive)</span>
              </span>
            </div>
            <div className="App_detail__item">
              <strong className="App_detail__label">SPECIE: </strong>
              <span className="App_datail_info">Human</span>
            </div>
            <div className="App_detail__item">
              <strong className="App_detail__label">TYPE: </strong>
              <span className="App_datail_info">'N/A'</span>
            </div>
            <div className="App_detail__item">
              <strong className="App_detail__label">GENDER: </strong>
              <span className="App_datail_info">Male</span>
            </div>
            <div className="App_detail__item">
              <strong className="App_detail__label">LOCATION: </strong>
              <span className="App_datail_info">Earth</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  ); */
  return (
    <div className="App">
      <h1 className="App_header">RICK AND MORTY V2</h1>
      <section className="App_content">
        <ul className="App_card-list">
          <li className="App_card">
            <img
              src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
              className="App_card_image"
            />
            <div className="App_card_info">
              <span className="App_card_name">Rick Sanchez</span>
              <span className="App_card_favorite">⭐</span>
            </div>
          </li>
          <li className="App_card">
            <img
              src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
              className="App_card_image"
            />
            <div className="App_card_info">
              <span className="App_card_name">Rick Sanchez</span>
              <span className="App_card_favorite">⭐</span>
            </div>
          </li>
          <li className="App_card">
            <img
              src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
              className="App_card_image"
            />
            <div className="App_card_info">
              <span className="App_card_name">Rick Sanchez</span>
              <span className="App_card_favorite">⭐</span>
            </div>
          </li>
          <li className="App_card">
            <img
              src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
              className="App_card_image"
            />
            <div className="App_card_info">
              <span className="App_card_name">Rick Sanchez</span>
              <span className="App_card_favorite">⭐</span>
            </div>
          </li>
          <li className="App_card">
            <img
              src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
              className="App_card_image"
            />
            <div className="App_card_info">
              <span className="App_card_name">Rick Sanchez</span>
              <span className="App_card_favorite">⭐</span>
            </div>
          </li>
          <li className="App_card">
            <img
              src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
              className="App_card_image"
            />
            <div className="App_card_info">
              <span className="App_card_name">Rick Sanchez</span>
              <span className="App_card_favorite">⭐</span>
            </div>
          </li>
        </ul>
        <section className="App_comments-container">
          <div className="App_form">
            <form>
              <div className="App_label-group">
                <label>Name:</label>
                <input />
              </div>
              <div className="App_label-group">
                <label>Comment:</label>
                <textarea />
              </div>
              <button>Submit</button>
            </form>
          </div>
          <div className="App_comments">
            <div className="App_comment">
              <p>
                lorem loremlorem loremlorem loremlorem lorem lorem loremlorem
                loremlorem lorem lorem lorem lorem loremlorem loremlorem
                loremlorem loremlorem loremlorem lorem
              </p>
              <span>By: Adrian</span>
            </div>
            <div className="App_comment">
              <p>
                lorem loremlorem loremlorem loremlorem lorem lorem loremlorem
                loremlorem lorem lorem lorem lorem loremlorem loremlorem
                loremlorem loremlorem loremlorem lorem
              </p>
              <span>By: Adrian</span>
            </div>
            <div className="App_comment">
              <p>
                lorem loremlorem loremlorem loremlorem lorem lorem loremlorem
                loremlorem lorem lorem lorem lorem loremlorem loremlorem
                loremlorem loremlorem loremlorem lorem
              </p>
              <span>By: Adrian</span>
            </div>
            <div className="App_comment">
              <p>
                lorem loremlorem loremlorem loremlorem lorem lorem loremlorem
                loremlorem lorem lorem lorem lorem loremlorem loremlorem
                loremlorem loremlorem loremlorem lorem
              </p>
              <span>By: Adrian</span>
            </div>
            <div className="App_comment">
              <p>
                lorem loremlorem loremlorem loremlorem lorem lorem loremlorem
                loremlorem lorem lorem lorem lorem loremlorem loremlorem
                loremlorem loremlorem loremlorem lorem
              </p>
              <span>By: Adrian</span>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default App;
