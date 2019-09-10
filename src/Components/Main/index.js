import React from 'react';
import Title from '../Title';

function Main() {
  return (
    <div className="App">
      <Title />
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

export default Main;
