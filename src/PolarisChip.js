import { LitElement, html, css } from 'lit';
export class PolarisChip extends LitElement {
  static get properties() {
    return {
     
    };
  }
  static get styles() {
    return css`
      .grid {
        display: grid;
        grid-template-columns: repeat(3, 29rem);
        gap: 1rem;
      }
      .card {
        background-size: cover;
        height: 360px;
        width: 419px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        background-color: rgba(0, 3, 33, 0.5);
      }
      .card1 {
        background-color: #1e407c;
        color: #fff;
        font-weight: bold;
        text-align: center;
      }
      .card2 {
        background-color: #fff;
        color: #001e44;
       font-weight: normal;
       text-align: left;
      }
      .card3 {
        background: linear-gradient(180deg, rgba(30, 64, 124, 1) 0%, rgba(0, 30, 68, 1) 65%, rgba(0, 30, 68, 1) 100%);
        color: #fff;
        font-weight: bold;
        text-align: center;
      }
      .card4 {
        background-image: url('https://www.psu.edu/psu-edu-assets/images/power-facts/penn-state-tuition.jpg');
        background-color: rgba(0, 3, 33, 0.5);
        color: #fff;
        font-weight: bold;
        text-align: center;
      }
      .card5 {
        background-color: #1e407c;
        color: #fff;
        font-weight: bold;
        text-align: center;
      }
      .card6 {
        background-color: #f2f2f4;
        color: #001e44;
        font-weight: normal;
        text-align: left;
      }
      .card7 {
        background-color: #001e44;
        color: #fff;
        font-weight: bold;
        text-align: center;
      }
      .card8 {
        background-color: #001e44;
        color: #fff;
        font-weight: bold;
        text-align: center;
      }
      .card9 {
        background-color: rgba(0, 3, 33, 0.5);
        background-image: url('	https://www.psu.edu/psu-edu-assets/images/power-facts/data-digest.jpg');
        color: #fff;
        font-weight: bold;
        text-align: center;
      }
      .card{
        font-size: 2.5rem;
        margin-top: 0;
        margin-bottom: 1rem;
        line-height: 1.5;
      }
    `;
  }
  constructor() {
    super();
  
  }
  render() {
    return html`
      <div class="grid">
        <div class="card card1">
        <slot name="card1"></slot>
      
        </div>
        <div class="card card2">
        <slot name="card2"></slot>
        </div>
        <div class="card card3">
        <slot name="card3"></slot>
        </div>
        <div class="card card4">
        <slot name="card4"></slot>
        </div>
        <div class="card card5">
        <slot name="card5"></slot>
        
        </div>
        <div class="card card6">
        <slot name="card6"></slot>
         
        </div>
        <div class="card card7">
        <slot name="card7"></slot>
      
        </div>
        <div class="card card8">
        <slot name="card8"></slot>
        
        </div>
        <div class="card card9">
        <slot name="card9"></slot>
          
        </div>
      </div>
    `;
  }
}

