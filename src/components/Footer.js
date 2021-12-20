import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import logo from "../assets/Logo.svg";

function Footer() {
  return (
    <footer className="bg-secondary font-inter">
      <div className="container mx-auto py-14 grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-4">
        <div>
          <div className="mb-5">
            <img
              src={logo}
              onClick={() => scroll.scrollToTop()}
              className="mx-auto md:mx-0 lg:mx-auto cursor-pointer"
              alt="GymZone Logo"
            />
          </div>
          <div className="flex items-center w-2/4 mx-auto justify-center md:mx-0 md:justify-start lg:mx-auto lg:justify-center space-x-3">
            <div>
              <svg
                width="30"
                height="30"
                viewBox="0 0 35 35"
                className="cursor-pointer"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.0781 3.82812H4.92188C4.31689 3.82812 3.82812 4.31689 3.82812 4.92188V30.0781C3.82812 30.6831 4.31689 31.1719 4.92188 31.1719H30.0781C30.6831 31.1719 31.1719 30.6831 31.1719 30.0781V4.92188C31.1719 4.31689 30.6831 3.82812 30.0781 3.82812ZM26.9199 11.8091H24.7358C23.0234 11.8091 22.6919 12.6226 22.6919 13.8188V16.4541H26.7798L26.2466 20.5796H22.6919V31.1719H18.4297V20.583H14.8647V16.4541H18.4297V13.4121C18.4297 9.88135 20.5864 7.95703 23.7378 7.95703C25.2485 7.95703 26.5439 8.06982 26.9233 8.12109V11.8091H26.9199Z"
                  fill="white"
                />
              </svg>
            </div>
            <div>
              <svg
                width="30"
                height="30"
                viewBox="0 0 35 35"
                className="cursor-pointer"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 12.9439C14.9913 12.9439 12.9439 14.9913 12.9439 17.5C12.9439 20.0088 14.9913 22.0562 17.5 22.0562C20.0088 22.0562 22.0562 20.0088 22.0562 17.5C22.0562 14.9913 20.0088 12.9439 17.5 12.9439ZM31.1651 17.5C31.1651 15.6133 31.1822 13.7437 31.0762 11.8604C30.9703 9.67289 30.4712 7.73149 28.8716 6.13188C27.2686 4.52885 25.3306 4.03324 23.1431 3.92729C21.2564 3.82133 19.3868 3.83842 17.5035 3.83842C15.6167 3.83842 13.7471 3.82133 11.8638 3.92729C9.67631 4.03324 7.7349 4.53227 6.13529 6.13188C4.53227 7.7349 4.03666 9.67289 3.9307 11.8604C3.82475 13.7471 3.84184 15.6167 3.84184 17.5C3.84184 19.3833 3.82475 21.2564 3.9307 23.1397C4.03666 25.3272 4.53568 27.2686 6.13529 28.8682C7.73832 30.4712 9.67631 30.9668 11.8638 31.0728C13.7505 31.1787 15.6202 31.1617 17.5035 31.1617C19.3902 31.1617 21.2598 31.1787 23.1431 31.0728C25.3306 30.9668 27.272 30.4678 28.8716 28.8682C30.4747 27.2652 30.9703 25.3272 31.0762 23.1397C31.1856 21.2564 31.1651 19.3868 31.1651 17.5ZM17.5 24.5103C13.6206 24.5103 10.4898 21.3794 10.4898 17.5C10.4898 13.6206 13.6206 10.4898 17.5 10.4898C21.3794 10.4898 24.5103 13.6206 24.5103 17.5C24.5103 21.3794 21.3794 24.5103 17.5 24.5103ZM24.7974 11.8399C23.8916 11.8399 23.1602 11.1084 23.1602 10.2027C23.1602 9.29692 23.8916 8.56547 24.7974 8.56547C25.7032 8.56547 26.4346 9.29692 26.4346 10.2027C26.4349 10.4178 26.3927 10.6308 26.3105 10.8295C26.2284 11.0283 26.1078 11.2089 25.9557 11.361C25.8036 11.513 25.623 11.6336 25.4243 11.7158C25.2255 11.798 25.0125 11.8402 24.7974 11.8399Z"
                  fill="white"
                />
              </svg>
            </div>
            <div>
              <svg
                width="30"
                height="30"
                viewBox="0 0 35 35"
                className="cursor-pointer"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0)">
                  <path
                    d="M34.2708 9.48944C34.0726 8.78249 33.6866 8.14245 33.1537 7.63736C32.6058 7.11674 31.9343 6.74433 31.2025 6.55528C28.4637 5.8334 17.4912 5.8334 17.4912 5.8334C12.9169 5.78136 8.34374 6.01026 3.79748 6.51882C3.06568 6.72184 2.39539 7.10257 1.84623 7.62715C1.30665 8.14632 0.915818 8.78653 0.711651 9.48799C0.221203 12.1301 -0.0170896 14.8129 -1.54685e-05 17.5001C-0.0175155 20.1849 0.220193 22.8667 0.711651 25.5122C0.911443 26.2107 1.30082 26.848 1.84186 27.3628C2.3829 27.8776 3.05665 28.2494 3.79748 28.4463C6.57269 29.1667 17.4912 29.1667 17.4912 29.1667C22.0714 29.2189 26.6504 28.99 31.2025 28.4813C31.9343 28.2923 32.6058 27.9199 33.1537 27.3992C33.6933 26.8844 34.0769 26.2442 34.2694 25.5472C34.7726 22.906 35.0173 20.2222 35 17.5336C35.0378 14.8337 34.7935 12.1371 34.2708 9.48799V9.48944ZM14.0029 22.4934V12.5082L23.1321 17.5015L14.0029 22.4934Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="35" height="35" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="text-center md:text-left">
          <div className="mb-5">
            <h3 className="uppercase font-bold text-white">Quick Links</h3>
          </div>
          <ul className="text-gray-300">
            <li className="text-sm hover:text-primary cursor-pointer mb-3" onClick={() => scroll.scrollToTop()}>
              Back to top
            </li>
            <ScrollLink to="about" className="text-sm" smooth={true} duration={500}>
              <li className="hover:text-primary transition duration-150 mb-3 cursor-pointer">About</li>
            </ScrollLink>
            <ScrollLink to="trainers" className="text-sm" smooth={true} duration={500} offset={-50}>
              <li className="hover:text-primary transition duration-150 mb-3 cursor-pointer">Trainers</li>
            </ScrollLink>
            <Link to="/login" className="text-sm">
              <li className="hover:text-primary transition duration-150 cursor-pointer">Membership</li>
            </Link>
          </ul>
        </div>
        <div className="text-center md:text-left">
          <div className="mb-5">
            <h3 className="uppercase font-bold text-white">Locations</h3>
          </div>
          <ul className="space-y-3 text-gray-300">
            <li className="text-sm">Brooklyn, NY</li>
            <li className="text-sm">Queens, NY</li>
            <li className="text-sm">Los Angeles, CA</li>
            <li className="text-sm">San Francisco, CA</li>
          </ul>
        </div>
        <div className="text-center md:text-left">
          <div className="mb-5">
            <h3 className="uppercase font-bold text-white">Contact Us</h3>
          </div>
          <ul className="space-y-3 text-gray-300">
            <li className="text-sm text-gray-300 flex items-center justify-center md:justify-start">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                className="mr-3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.0594 20.1375L21.1594 18.0375C21.4423 17.7582 21.8001 17.567 22.1895 17.4871C22.5789 17.4072 22.9832 17.4421 23.3532 17.5875L25.9125 18.6094C26.2864 18.7612 26.607 19.0202 26.8339 19.3539C27.0608 19.6876 27.1838 20.0809 27.1875 20.4844V25.1719C27.1854 25.4464 27.1277 25.7176 27.0179 25.9692C26.9082 26.2208 26.7486 26.4476 26.5489 26.6359C26.3492 26.8242 26.1135 26.9701 25.8559 27.065C25.5983 27.1598 25.3242 27.2015 25.05 27.1875C7.11566 26.0719 3.49691 10.8844 2.81253 5.07191C2.78076 4.78648 2.80979 4.49755 2.8977 4.22414C2.98562 3.95073 3.13042 3.69903 3.3226 3.4856C3.51477 3.27218 3.74996 3.10186 4.01268 2.98585C4.27541 2.86984 4.55972 2.81078 4.84691 2.81254H9.37503C9.77911 2.81373 10.1736 2.93579 10.5077 3.163C10.8419 3.39022 11.1004 3.7122 11.25 4.08754L12.2719 6.64691C12.4221 7.01542 12.4605 7.42002 12.3821 7.81017C12.3037 8.20033 12.1122 8.55875 11.8313 8.84066L9.73128 10.9407C9.73128 10.9407 10.9407 19.125 19.0594 20.1375Z"
                  fill="#FEE402"
                />
              </svg>
              +1234567890
            </li>
            <li className="text-sm text-gray-300 flex items-center justify-center md:justify-start">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                className="mr-3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.25 12.5V5C26.25 3.625 25.125 2.5 23.75 2.5H3.75C2.375 2.5 1.2625 3.625 1.2625 5L1.25 20C1.25 21.375 2.375 22.5 3.75 22.5H17.5V16.25C17.5 14.175 19.175 12.5 21.25 12.5H26.25ZM13.75 13.75L3.75 7.5V5L13.75 11.25L23.75 5V7.5L13.75 13.75Z"
                  fill="#FEE402"
                />
                <path
                  d="M26.25 17.5V22.5C26.25 23.875 25.125 25 23.75 25C22.375 25 21.25 23.875 21.25 22.5V16.875C21.25 16.525 21.525 16.25 21.875 16.25C22.225 16.25 22.5 16.525 22.5 16.875V22.5H25V16.875C25 16.0462 24.6708 15.2513 24.0847 14.6653C23.4987 14.0792 22.7038 13.75 21.875 13.75C21.0462 13.75 20.2513 14.0792 19.6653 14.6653C19.0792 15.2513 18.75 16.0462 18.75 16.875V22.5C18.75 25.2625 20.9875 27.5 23.75 27.5C26.5125 27.5 28.75 25.2625 28.75 22.5V17.5H26.25Z"
                  fill="#FEE402"
                />
              </svg>
              gymzone@gmail.com
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto text-center border-t-2 border-gray-800 py-4">
        <p className="text-gray-400 text-sm">Copyright &copy; 2021 - GymZone | All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
