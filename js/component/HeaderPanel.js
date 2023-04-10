import html from '../core.js';
import { connect } from '../store.js';

function HeaderPanel() {
    return html`
        <div class="store__panel container-fluid bg-black text-sm-center p-5">
            <h1 class="store__panel__heading display-1"><strong>MOBILEWORLD</strong></h1>
        </div>
    `;
}

export default connect()(HeaderPanel);
