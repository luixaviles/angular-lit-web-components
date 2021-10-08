import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { User } from './user';

@customElement('card-user')
export class CardUser extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    .card {
      box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.5);
      max-width: 160px;
    }
    .card-content {
      padding: 10px;
    }
  `;

  @property({ type: Object }) user?: User = {
    id: 0,
    fullName: 'Luis Aviles',
    role: 'Software Engineer',
  };

  render() {
    if (this.user === undefined) {
      return '';
    }

    return html`
      <div class="card">
        <img
          width="160px"
          src=${this.user.avatar
            ? this.user.avatar
            : 'assets/images/avatar.png'}
        />
        <div class="card-content">
          <h4>${this.user.fullName}</h4>
          <p>${this.user.role}</p>
          <button @click=${this.handleEdit}>Edit</button>
        </div>
      </div>
    `;
  }

  private handleEdit() {
    this.dispatchEvent(
      new CustomEvent<User>('edit', {
        detail: this.user,
      })
    );
  }
}
