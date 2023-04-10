import html from '../core.js';

function NavBar(htmlPage = '') {
    return html`
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
            <div class="container-fluid collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                <ul class="nav__list navbar-nav gap-lg-5">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="${htmlPage === 'home' ? '#' : '../index.html'}">Trang chủ</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link active" href="${htmlPage === 'iphone' ? '#' : './iphone.html'}">Iphone</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link active" href="${htmlPage === 'samsung'? '#' : './samsung.html'}">Samsung</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link active" href="${htmlPage === 'googlepixel'? '#' : './googlepixel.html'}">Google Pixel</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link active" href="${htmlPage === 'oppo'? '#' : './oppo.html'}">Oppo</a>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Phụ kiện
                        </a>

                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a class="dropdown-item" href="${htmlPage === 'sacduphong' ? '#' : './sacduphong.html'}">Sạc dự phòng</a></li>
                            <li><a class="dropdown-item" href="${htmlPage === 'saccap' ? '#' : './saccap.html'}">Sạc cáp</a></li>
                            <li><a class="dropdown-item" href="${htmlPage === 'oplungdienthoai' ? '#' : './oplungdienthoai.html'}">Ốp lưng điện thoại</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    `
}

export default NavBar;
