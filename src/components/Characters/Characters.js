import './Characters.css';
import { getDataApi } from '../../utils/getDataApi';
import { IMG_STANDARD_XLARGE } from '../../constants/api';
import { ROOT_MODAL } from '../../constants/root';

import imgCloseWhite from './img/close-white.svg';

import Notification from '../Notification';


class Characters {
    renderContent(data){
        let htmlContent = '';

        data.forEach(({ name, thumbnail: {path, extension} }) => {
            const imgSrc = path + '/' + IMG_STANDARD_XLARGE + '.' + extension;
            
            htmlContent += `
                <li class="characters__item">
                    <img class="characters__img img-cover" src="${imgSrc}" />
                    <span class="characters__name">"${name}"</span>
                </li>
            `;
        });

        const htmlWrapper = `
        <div class="wrapper">
            <ul class="characters__container">
                ${htmlContent}
            </ul>
            <button class="characters__closed btn bg-contain" 
            onclick="modal.innerHTML = ''"
            style="background-image: url(${imgCloseWhite})"
            >
            
            </button>
        </div>
        `;

        

        ROOT_MODAL.innerHTML = htmlWrapper;
    }

   async render(uri) {
        const data = await getDataApi.getData(uri);
        
        data.length ? this.renderContent(data) : Notification.render();
    }
}


export default new Characters();