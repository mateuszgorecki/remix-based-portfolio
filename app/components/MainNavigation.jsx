import { NavLink, Link } from '@remix-run/react'

export default function MainNavigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/'>main</NavLink>
        </li>
        <li>
          <NavLink to='/about'>about</NavLink>
        </li>
        <li>
          <NavLink to='/portfolio'>portfolio</NavLink>
        </li>
        <li>
          <NavLink to='/contact'>contact</NavLink>
        </li>
        <li>
          <Link to='/github'>
            <svg
              width='33'
              height='31'
              viewBox='0 0 33 31'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M16.5 1.40845C8.17438 1.40845 1.43412 7.98169 1.43412 16.0766C1.43412 22.0204 5.06825 27.1353 10.2987 29.436C10.846 29.6773 11.3809 29.5816 11.7989 29.2743C12.03 29.0978 12.2164 28.8713 12.3433 28.6125C12.4702 28.3536 12.5342 28.0695 12.5304 27.7823V27.014L10.6645 26.766C10.6507 26.7642 10.6369 26.762 10.6233 26.7593C9.59475 26.5625 8.90038 26.208 8.39163 25.6972C7.964 25.2673 7.70275 24.7524 7.48137 24.3157L7.40438 24.1634C7.19977 23.7451 6.97634 23.3359 6.73475 22.9369C6.54912 22.6485 6.40475 22.5002 6.26175 22.4072C5.89875 22.1714 5.5495 21.7711 5.5495 21.271C5.54826 21.1271 5.57969 20.9847 5.64153 20.8542C5.70336 20.7236 5.79404 20.6082 5.907 20.5163C6.1202 20.3508 6.38591 20.264 6.65775 20.271C6.963 20.271 7.25038 20.3626 7.48962 20.4677C7.73438 20.5756 7.97775 20.7184 8.20463 20.8667C8.75737 21.2279 9.30188 21.6552 9.7625 22.1822C10.2424 22.7294 10.582 23.0771 11.0935 23.1485C11.5142 23.2078 11.9432 23.2092 12.2774 23.1944C12.3238 22.935 12.4004 22.6818 12.5056 22.4396C12.0975 22.3462 11.695 22.2311 11.2998 22.0945C10.4005 21.7819 9.39812 21.2953 8.72437 20.5581C7.98462 19.7467 7.52675 19.0229 7.271 18.1765C7.02213 17.3516 6.98088 16.458 6.98088 15.3582C6.98088 13.6735 7.72475 12.2542 8.283 11.5008C8.06852 10.8412 7.91437 10.1642 7.82238 9.47776C7.76145 9.04488 7.76191 8.60583 7.82375 8.17308C7.8925 7.77818 8.06437 7.29297 8.51675 7.00049C8.95262 6.71611 9.46412 6.72824 9.86287 6.80102C10.2767 6.87784 10.7071 7.04632 11.1031 7.23905C11.748 7.55174 12.3888 7.96956 12.8686 8.32404C13.6964 8.08547 15.1608 7.77818 16.4849 7.74987H16.5151C17.8406 7.77818 19.239 8.08547 20.0461 8.32269C20.5274 7.96956 21.1667 7.5504 21.8103 7.23905C22.2063 7.04632 22.6353 6.87784 23.0505 6.80102C23.4492 6.72824 23.9607 6.71611 24.398 6.99914C24.849 7.29297 25.0222 7.77818 25.0896 8.17308C25.1597 8.58416 25.1432 9.04376 25.0896 9.47776C24.998 10.1641 24.8443 10.8411 24.6304 11.5008C25.1886 12.2556 25.9325 13.6748 25.9325 15.3582C25.9325 16.458 25.8912 17.3516 25.6437 18.1751C25.3866 19.0242 24.9287 19.7467 24.189 20.5581C23.5152 21.2953 22.5129 21.7819 21.6136 22.0945C21.1363 22.259 20.6485 22.3927 20.1534 22.4948C20.3225 22.9962 20.383 23.4019 20.383 23.6351V27.7998C20.383 28.4333 20.6841 28.9737 21.1117 29.2891C21.527 29.5978 22.0605 29.6935 22.6077 29.4589C27.8877 27.1785 31.5645 22.0501 31.5645 16.0753C31.5645 7.98169 24.827 1.40845 16.5 1.40845ZM13.0295 24.5435C12.672 24.5934 13.0281 24.5435 13.0281 24.5435H13.024L13.013 24.5462L12.9731 24.5516C12.7689 24.5751 12.5639 24.5917 12.3585 24.6015C11.8691 24.6265 11.3785 24.6071 10.8927 24.5435C9.80513 24.3925 9.14375 23.6378 8.71613 23.1472L8.67488 23.1014C8.53506 22.9424 8.38487 22.7925 8.22525 22.6525C8.36687 22.9086 8.514 23.1944 8.67212 23.5017L8.68587 23.5286L8.756 23.6688C8.99662 24.1378 9.15475 24.4505 9.41737 24.712C9.67313 24.9681 10.0719 25.2161 10.8776 25.3724L13.3444 25.6999C13.5167 25.7228 13.6746 25.8061 13.7889 25.9346C13.9032 26.063 13.9661 26.2277 13.9659 26.3981V27.7823C13.9659 28.8605 13.4502 29.8215 12.6596 30.4038C12.2445 30.7147 11.7507 30.9086 11.2315 30.9646C10.7122 31.0207 10.1872 30.9367 9.713 30.7218C3.99025 28.2055 0 22.6027 0 16.0766C0 7.19188 7.39337 0 16.5 0C25.6066 0 33 7.19188 33 16.0766C33 22.6364 28.9589 28.254 23.1866 30.7488C22.7121 30.9596 22.188 31.04 21.6704 30.9814C21.1528 30.9227 20.6612 30.7273 20.2482 30.4159C19.8399 30.1077 19.51 29.711 19.2843 29.2569C19.0586 28.8028 18.9433 28.3036 18.9475 27.7985V23.6337C18.9475 23.5394 18.8801 22.9949 18.5047 22.263C18.4529 22.1615 18.4268 22.0493 18.4287 21.9358C18.4305 21.8224 18.4602 21.711 18.5152 21.6112C18.5702 21.5113 18.649 21.426 18.7448 21.3623C18.8407 21.2986 18.9508 21.2586 19.0658 21.2454C19.7707 21.1588 20.464 20.998 21.1337 20.7656C21.9505 20.4826 22.6834 20.0944 23.1192 19.6173C23.7669 18.9083 24.09 18.3638 24.2674 17.7748C24.4516 17.1643 24.4984 16.454 24.4984 15.3582C24.4984 13.8204 23.6734 12.5278 23.2939 12.1114C23.2077 12.0172 23.149 11.9021 23.1238 11.7781C23.0987 11.6541 23.108 11.5257 23.1509 11.4065C23.3953 10.7274 23.5681 10.0256 23.6665 9.31198C23.7105 8.94133 23.7133 8.63134 23.6748 8.4076C23.6661 8.3258 23.6409 8.24652 23.6005 8.17443C23.5058 8.15837 23.4088 8.16251 23.3159 8.18656C23.0821 8.22969 22.7837 8.33751 22.4455 8.50195C21.7717 8.82811 21.0705 9.31063 20.636 9.65567C20.5402 9.73187 20.4259 9.78247 20.3042 9.80254C20.1825 9.82262 20.0576 9.81149 19.9416 9.77023C18.8283 9.41326 17.6703 9.20782 16.5 9.15967C15.1154 9.19202 13.5176 9.57749 12.9718 9.77023C12.8558 9.81149 12.7309 9.82262 12.6092 9.80254C12.4875 9.78247 12.3732 9.73187 12.2774 9.65567C11.7155 9.21223 11.1092 8.82569 10.4679 8.50195C10.1925 8.36019 9.89944 8.25417 9.59612 8.18656C9.50368 8.1627 9.40709 8.15857 9.31287 8.17443C9.27246 8.2465 9.24721 8.32579 9.23862 8.4076C9.20012 8.63134 9.20288 8.94133 9.24687 9.31198C9.34597 10.0254 9.51873 10.7272 9.7625 11.4065C9.84912 11.6491 9.7955 11.9186 9.6195 12.1114C9.24 12.5278 8.415 13.8204 8.415 15.3582C8.415 16.4526 8.46175 17.1643 8.646 17.7748C8.82475 18.3638 9.1465 18.907 9.79275 19.6173C10.23 20.0944 10.9615 20.4826 11.7796 20.7656C12.4489 20.9978 13.1418 21.1587 13.8462 21.2454C13.9912 21.2607 14.1279 21.3188 14.2383 21.4121C14.3487 21.5054 14.4275 21.6295 14.4643 21.7677C14.501 21.906 14.4939 22.052 14.4439 22.1862C14.3939 22.3204 14.3035 22.4365 14.1845 22.5191C13.9576 22.6781 13.8077 22.9639 13.7239 23.2941C13.6806 23.4641 13.6548 23.6379 13.6469 23.813V23.8386C13.6486 24.0095 13.587 24.1752 13.4734 24.3049C13.3599 24.4345 13.2021 24.5193 13.0295 24.5435Z'
              />
            </svg>
          </Link>
        </li>
        <li>
          <Link to='/facebook'>
            <svg
              width='33'
              height='32'
              viewBox='0 0 33 32'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M33 16C33 12.8355 32.0323 9.74207 30.2192 7.11088C28.4062 4.4797 25.8293 2.42894 22.8143 1.21793C19.7993 0.00693226 16.4817 -0.309921 13.281 0.307443C10.0803 0.924806 7.14031 2.44866 4.83274 4.6863C2.52518 6.92394 0.953706 9.77486 0.31705 12.8786C-0.319606 15.9823 0.00714886 19.1993 1.25599 22.1229C2.50484 25.0466 4.61969 27.5454 7.3331 29.3035C10.0465 31.0616 13.2366 32 16.5 32C20.8748 31.9958 25.0691 30.3088 28.1625 27.3091C31.256 24.3094 32.9957 20.2422 33 16ZM17.4706 30.0863V19.451H21.6765C21.9339 19.451 22.1808 19.3518 22.3628 19.1753C22.5448 18.9988 22.6471 18.7594 22.6471 18.5098C22.6471 18.2602 22.5448 18.0208 22.3628 17.8443C22.1808 17.6678 21.9339 17.5686 21.6765 17.5686H17.4706V13.4902C17.4748 12.7426 17.783 12.0268 18.3281 11.4982C18.8733 10.9696 19.6114 10.6708 20.3824 10.6667H22.9706C23.228 10.6667 23.4749 10.5675 23.6569 10.391C23.8389 10.2145 23.9412 9.97511 23.9412 9.7255C23.9412 9.47588 23.8389 9.23649 23.6569 9.05998C23.4749 8.88348 23.228 8.78432 22.9706 8.78432H20.3824C19.0966 8.78845 17.8647 9.28558 16.9555 10.1672C16.0463 11.0488 15.5337 12.2434 15.5294 13.4902V17.5686H11.3235C11.0661 17.5686 10.8192 17.6678 10.6372 17.8443C10.4552 18.0208 10.3529 18.2602 10.3529 18.5098C10.3529 18.7594 10.4552 18.9988 10.6372 19.1753C10.8192 19.3518 11.0661 19.451 11.3235 19.451H15.5294V30.0863C11.7607 29.8421 8.23728 28.1871 5.70335 25.4709C3.16942 22.7547 1.82331 19.1899 1.94928 15.5292C2.07526 11.8685 3.66346 8.39862 6.37849 5.85225C9.09352 3.30588 12.7228 1.88239 16.5 1.88239C20.2772 1.88239 23.9065 3.30588 26.6215 5.85225C29.3365 8.39862 30.9247 11.8685 31.0507 15.5292C31.1767 19.1899 29.8306 22.7547 27.2967 25.4709C24.7627 28.1871 21.2394 29.8421 17.4706 30.0863Z'
              />
            </svg>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
