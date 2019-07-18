import React, { Component } from 'react';
import './index.css'

export class Tips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: 'https://via.placeholder.com/150'
    }
  }
  render() {
    return (
      <section className="main_tips">
        <section className="questions">
          <h2>Any Questions ?</h2>
          <section className="faq">
            <article className="question">
              <p><span className="bold">This is the first question ?</span></p>
              <p>This is the response</p>
            </article>
            <article className="question">
              <p><span className="bold">This is the first question ?</span></p>
              <p>This is the response</p>
            </article>
            <article className="question">
              <p><span className="bold">This is the first question ?</span></p>
              <p>This is the response</p>
            </article>
            <article className="question">
              <p><span className="bold">This is the first question ?</span></p>
              <p>This is the response</p>
            </article>
          </section>
        </section>

        <section className="tutorials">
          <h2>Tips and tutorials</h2>

          <section className="tutorials_Box">
            <section className="subMain">
              <h2>How to fix your CV</h2>
              <section className="subMainBox">
                <div className="subMainBox_img">
                  <img src={this.state.imgSrc} alt="Justa a text" />
                </div>
                <div className="subMainBox_content">
                  <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                </div>
              </section>
            </section>

            <section className="subMain">
              <h2>Make the most of Open-Days</h2>
              <section className="subMainBox">
                <div className="subMainBox_img">
                  <img src={this.state.imgSrc} alt="Justa a text" />
                </div>
                <div className="subMainBox_content">
                  <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                </div>
              </section>
            </section>

            <section className="subMain">
              <h2>How to Network</h2>
              <section className="subMainBox">
                <div className="subMainBox_img">
                  <img src={this.state.imgSrc} alt="Justa a text" />
                </div>
                <div className="subMainBox_content">
                  <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                </div>
              </section>
            </section>

          </section>

        </section>
      </section>
    )
  }
}

export default Tips
