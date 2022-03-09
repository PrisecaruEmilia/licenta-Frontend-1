import React, { Component } from 'react';

export class MegaMenu extends Component {
  constructor() {
    super();
    this.MegaMenu = this.MegaMenu.bind(this);
  }

  componentDidMount() {
    this.MegaMenu();
  }

  MegaMenu() {
    var acc = document.getElementsByClassName('accordion');
    var accNum = acc.length;
    var i;
    for (i = 0; i < accNum; i++) {
      acc[i].addEventListener('click', function () {
        this.classList.toggle('active');
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + 'px';
        }
      });
    }
  }
  render() {
    return (
      <div className="accordionMenuDiv">
        <div className="accordionMenuDivInside">
          <button className="accordion">
            <img
              className="accordionMenuIcon"
              src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100"
            />
            &nbsp; Men's Shoes
          </button>
          <div className="panel">
            <ul>
              <li>
                <a href="#" className="accordionItem">
                  Mans Shoes 1
                </a>
              </li>
              <li>
                <a href="#" className="accordionItem">
                  Mans Shoes 2
                </a>
              </li>
            </ul>
          </div>

          <button className="accordion">
            <img
              className="accordionMenuIcon"
              src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100"
            />
            &nbsp; Men's Shoes
          </button>
          <div className="panel">
            <ul>
              <li>
                <a href="#" className="accordionItem">
                  Mans Shoes 1
                </a>
              </li>
              <li>
                <a href="#" className="accordionItem">
                  Mans Shoes 2
                </a>
              </li>
            </ul>
          </div>

          <button className="accordion">
            <img
              className="accordionMenuIcon"
              src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100"
            />
            &nbsp; Men's Shoes
          </button>
          <div className="panel">
            <ul>
              <li>
                <a href="#" className="accordionItem">
                  Mans Shoes 1
                </a>
              </li>
              <li>
                <a href="#" className="accordionItem">
                  Mans Shoes 2
                </a>
              </li>
            </ul>
          </div>

          <button className="accordion">
            <img
              className="accordionMenuIcon"
              src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100"
            />
            &nbsp; Men's Shoes
          </button>
          <div className="panel">
            <ul>
              <li>
                <a href="#" className="accordionItem">
                  Mans Shoes 1
                </a>
              </li>
              <li>
                <a href="#" className="accordionItem">
                  Mans Shoes 2
                </a>
              </li>
            </ul>
          </div>

          <button className="accordion">
            <img
              className="accordionMenuIcon"
              src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100"
            />
            &nbsp; Men's Shoes
          </button>
          <div className="panel">
            <ul>
              <li>
                <a href="#" className="accordionItem">
                  Mans Shoes 1
                </a>
              </li>
              <li>
                <a href="#" className="accordionItem">
                  Mans Shoes 2
                </a>
              </li>
            </ul>
          </div>

          <button className="accordion">
            <img
              className="accordionMenuIcon"
              src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100"
            />
            &nbsp; Men's Shoes
          </button>
          <div className="panel">
            <ul>
              <li>
                <a href="#" className="accordionItem">
                  Mans Shoes 1
                </a>
              </li>
              <li>
                <a href="#" className="accordionItem">
                  Mans Shoes 2
                </a>
              </li>
            </ul>
          </div>

          <button className="accordion">
            <img
              className="accordionMenuIcon"
              src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100"
            />
            &nbsp; Men's Shoes
          </button>
          <div className="panel">
            <ul>
              <li>
                <a href="#" className="accordionItem">
                  Mans Shoes 1
                </a>
              </li>
              <li>
                <a href="#" className="accordionItem">
                  Mans Shoes 2
                </a>
              </li>
            </ul>
          </div>

          <button className="accordion">
            <img
              className="accordionMenuIcon"
              src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100"
            />
            &nbsp; Men's Shoes
          </button>
          <div className="panel">
            <ul>
              <li>
                <a href="#" className="accordionItem">
                  Mans Shoes 1
                </a>
              </li>
              <li>
                <a href="#" className="accordionItem">
                  Mans Shoes 2
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default MegaMenu;
