import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  PagerIndicator,
  Slider,
  Text,
} from "components";

const HomepageLightV2Page = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);
  const sliderRef1 = React.useRef(null);
  const [sliderState1, setsliderState1] = React.useState(0);

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-poppins items-center justify-start mx-auto overflow-auto w-full">
        <header className="bg-gray-50_01 flex md:gap-10 items-center justify-between md:px-5 px-[100px] py-6 w-full">
          <div className="flex flex-row gap-3 items-start justify-center pt-[3px] w-1/5">
            <Img
              className="h-[37px] w-[37px]"
              src="images/img_user.svg"
              alt="user"
            />
            <Text
              className="sm:text-[26.5px] md:text-[28.5px] text-[30.5px] text-indigo-900"
              size="txtPoppinsSemiBold305"
            >
              DelphiScript
            </Text>
          </div>
          <ul className="flex md:flex-col flex-row gap-8 md:hidden items-center justify-start w-auto common-row-list">
            <li>
              <a
                href="javascript:"
                className="hover:font-semibold text-base text-gray-900"
              >
                <Text size="txtPoppinsSemiBold16">Home</Text>
              </a>
            </li>
            <li>
              <a
                href="javascript:"
                className="hover:font-semibold text-base hover:text-gray-900 text-gray-900_cc"
              >
                <Text size="txtPoppinsRegular16">Courses</Text>
              </a>
            </li>
            <li>
              <a
                href="javascript:"
                className="hover:font-semibold text-base hover:text-gray-900 text-gray-900_cc"
              >
                <Text size="txtPoppinsRegular16">Events</Text>
              </a>
            </li>
            <li>
              <a
                href="javascript:"
                className="hover:font-semibold text-base hover:text-gray-900 text-gray-900_cc"
              >
                <Text size="txtPoppinsRegular16">About us</Text>
              </a>
            </li>
            <li>
              <a
                href="javascript:"
                className="hover:font-semibold text-base hover:text-gray-900 text-gray-900_cc"
              >
                <Text size="txtPoppinsRegular16">Blog</Text>
              </a>
            </li>
            <li>
              <a
                href="javascript:"
                className="hover:font-semibold text-base hover:text-gray-900 text-gray-900_cc"
              >
                <Text size="txtPoppinsRegular16">Contact us</Text>
              </a>
            </li>
            <li>
              <a href="javascript:">
                <Button
                  className="cursor-pointer font-medium text-base text-center"
                  color="yellow_800_deep_orange_700"
                >
                  Book demo
                </Button>
              </a>
            </li>
          </ul>
        </header>
        <div className="flex flex-col md:gap-10 gap-16 items-center justify-start max-w-[1916px] mx-auto md:px-5 py-16 w-full">
          <div className="flex flex-col gap-10 items-center justify-start w-auto md:w-full">
            <div className="flex flex-col gap-6 items-center justify-start w-auto md:w-full">
              <Text
                className="leading-[60.00px] max-w-[716px] md:max-w-full sm:text-[32px] md:text-[38px] text-[42px] text-center text-gray-900"
                size="txtPoppinsBold42"
              >
                Unleash your potential: A journey into Tech excellence
              </Text>
              <Text
                className="max-w-[594px] md:max-w-full text-base text-center text-gray-900_cc"
                size="txtPoppinsRegular16"
              >
                In the dynamic realm of technology, where innovation and
                advancement are the driving forces, staying ahead of the curve
                is essential.
              </Text>
            </div>
            <div className="flex flex-col gap-2.5 items-center justify-center w-auto">
              <Button
                className="cursor-pointer font-medium text-base text-center w-full"
                color="yellow_800_deep_orange_700"
              >
                Get started
              </Button>
              <div className="flex flex-row gap-1 items-center justify-start w-auto">
                <div className="flex relative w-[72px]">
                  <div className="flex my-auto w-[78%]">
                    <div className="flex my-auto w-[72%]">
                      <Img
                        className="h-6 my-auto rounded-[50%] w-6"
                        src="images/img_ellipse8.png"
                        alt="ellipseEight"
                      />
                      <Img
                        className="h-6 ml-[-8px] my-auto rounded-[50%] w-6 z-[1]"
                        src="images/img_ellipse10.png"
                        alt="ellipseTen"
                      />
                    </div>
                    <Img
                      className="h-6 ml-[-8px] my-auto rounded-[50%] w-6 z-[1]"
                      src="images/img_ellipse11.png"
                      alt="ellipseEleven"
                    />
                  </div>
                  <Img
                    className="h-6 ml-[-8px] my-auto rounded-[50%] w-6 z-[1]"
                    src="images/img_ellipse9.png"
                    alt="ellipseNine"
                  />
                </div>
                <Text
                  className="text-base text-gray-900 w-auto"
                  size="txtPoppinsRegular16Gray900"
                >
                  <span className="text-gray-900 font-poppins text-left font-normal">
                    Trusted by{" "}
                  </span>
                  <span className="text-gray-900 font-poppins text-left font-semibold">
                    1000+
                  </span>
                  <span className="text-gray-900 font-poppins text-left font-normal">
                    {" "}
                    Students
                  </span>
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start md:px-10 sm:px-5 px-[238px] w-full">
            <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
              <Img
                className="flex-1 h-[267px] md:h-auto object-cover rounded-[12px] w-full"
                src="images/img_rectangle18.png"
                alt="rectangle"
              />
              <Img
                className="flex-1 h-[267px] md:h-auto object-cover rounded-[12px] w-full"
                src="images/img_rectangle19.png"
                alt="rectangle"
              />
              <Img
                className="flex-1 h-[267px] md:h-auto object-cover rounded-[12px] w-full"
                src="images/img_rectangle20.png"
                alt="rectangle"
              />
              <Img
                className="flex-1 h-[267px] md:h-auto object-cover rounded-[12px] w-full"
                src="images/img_rectangle21.png"
                alt="rectangle"
              />
              <Img
                className="flex-1 h-[267px] md:h-auto object-cover rounded-[12px] w-full"
                src="images/img_rectangle24.png"
                alt="rectangle"
              />
              <Img
                className="flex-1 h-[267px] md:h-auto object-cover rounded-[12px] w-full"
                src="images/img_rectangle23.png"
                alt="rectangle"
              />
              <Img
                className="flex-1 h-[267px] md:h-auto object-cover rounded-[12px] w-full"
                src="images/img_rectangle25.png"
                alt="rectangle"
              />
              <Img
                className="flex-1 h-[267px] md:h-auto object-cover rounded-[12px] w-full"
                src="images/img_rectangle18.png"
                alt="rectangle"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="overflow-x-auto w-full">
            <div className="sm:h-[577px] md:h-[680px] h-[872px] md:px-5 px-[100px] py-24 relative w-[1440px] md:w-full">
              <div className="absolute bg-white-100 flex flex-col h-full inset-[0] items-center justify-center m-auto max-w-[1440px] md:px-10 sm:px-5 px-[100px] py-24 w-full">
                <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                
                  <Img
                    className="content-fit "
                    src="\images\cursole.jpg"
                    alt="frameFortyTwo"
                  />
                </div>
              </div>
              <div className="overflow-x-auto w-full">
  {/* Explore Our Courses Section */}
  {/* 
  <div className="flex flex-col gap-10 items-start justify-center max-w-[1440px] md:px-10 sm:px-5 px-[100px] py-24 w-full">
    {/* ... (code between lines 280 and 341) ... */}
  </div>
</div>

          <div className="flex flex-col gap-12 items-center justify-start max-w-[1440px] py-24 w-full">
            <Text
              className="sm:text-[32px] md:text-[38px] text-[42px] text-center text-gray-900 w-auto"
              size="txtPoppinsBold42"
            >
              Why choose us
            </Text>
            <List
              className="flex flex-col gap-12 items-center max-w-[1240px] mx-auto md:px-5 w-full"
              orientation="vertical"
            >
              <div className="flex md:flex-1 md:flex-col flex-row gap-6 items-center justify-center w-auto md:w-full">
                <Img
                  className="h-[400px] sm:h-auto object-cover rounded-[24px] w-[608px] md:w-full"
                  src="images/img_rectangle28.png"
                  alt="rectangleTwentyEight"
                />
                <div className="flex flex-col items-start justify-start w-[608px] md:w-full">
                  <div className="flex flex-col gap-8 items-start justify-start w-full">
                    <div className="flex flex-col gap-3 items-start justify-start w-full">
                      <Text
                        className="sm:text-[32px] md:text-[38px] text-[42px] text-gray-900 w-full"
                        size="txtPoppinsBold42"
                      >
                        Expert Led Live Training
                      </Text>
                      <Text
                        className="max-w-[608px] md:max-w-full text-base text-gray-900_cc"
                        size="txtPoppinsRegular16"
                      >
                        Experience interactive learning with expert trainers
                        from top universities. Enhance your skills and excel in
                        your academic journey.
                      </Text>
                    </div>
                    <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-full">
                      <div className="flex flex-col gap-3 items-start justify-start w-[291px]">
                        <Text
                          className="text-deep_orange-700 text-xl w-auto"
                          size="txtPoppinsSemiBold20"
                        >
                          Expert guidance
                        </Text>
                        <Text
                          className="max-w-[267px] md:max-w-full text-base text-black-900_cc"
                          size="txtPoppinsRegular16Black900cc"
                        >
                          Get access to live training sessions with industry
                          experts and university mentors.
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[15px] items-start justify-start w-[293px]">
                        <Text
                          className="text-deep_orange-700 text-xl w-auto"
                          size="txtPoppinsSemiBold20"
                        >
                          Hands-on projects
                        </Text>
                        <Text
                          className="max-w-[267px] md:max-w-full text-base text-black-900_cc"
                          size="txtPoppinsRegular16Black900cc"
                        >
                          Apply your knowledge through practical hands-on
                          projects and real-world scenarios.
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 md:flex-col flex-row gap-6 items-center justify-center w-auto md:w-full">
                <div className="flex flex-col items-start justify-start w-[608px] md:w-full">
                  <div className="flex flex-col gap-8 items-start justify-start w-full">
                    <div className="flex flex-col gap-3 items-start justify-start w-full">
                      <Text
                        className="leading-[60.00px] max-w-[608px] md:max-w-full sm:text-[32px] md:text-[38px] text-[42px] text-gray-900"
                        size="txtPoppinsBold42"
                      >
                        On Demand Academic Expert Sessions
                      </Text>
                      <Text
                        className="max-w-[608px] md:max-w-full text-base text-gray-900_cc"
                        size="txtPoppinsRegular16"
                      >
                        Experience interactive learning with expert trainers
                        from top universities. Enhance your skills and excel in
                        your academic journey.
                      </Text>
                    </div>
                    <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-full">
                      <div className="flex flex-col gap-3 items-start justify-start w-[291px]">
                        <Text
                          className="text-deep_orange-700 text-xl w-auto"
                          size="txtPoppinsSemiBold20"
                        >
                          Expert guidance
                        </Text>
                        <Text
                          className="max-w-[267px] md:max-w-full text-base text-black-900_cc"
                          size="txtPoppinsRegular16Black900cc"
                        >
                          Get access to live training sessions with industry
                          experts and university mentors.
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[15px] items-start justify-start w-[293px]">
                        <Text
                          className="text-deep_orange-700 text-xl w-auto"
                          size="txtPoppinsSemiBold20"
                        >
                          Hands-on projects
                        </Text>
                        <Text
                          className="max-w-[267px] md:max-w-full text-base text-black-900_cc"
                          size="txtPoppinsRegular16Black900cc"
                        >
                          Apply your knowledge through practical hands-on
                          projects and real-world scenarios.
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <Img
                  className="h-[400px] sm:h-auto object-cover rounded-[24px] w-[608px] md:w-full"
                  src="images/img_rectangle28_400x608.png"
                  alt="rectangleTwentyEight"
                />
              </div>
              <div className="flex md:flex-1 md:flex-col flex-row gap-6 items-center justify-center w-auto md:w-full">
                <Img
                  className="h-[400px] sm:h-auto object-cover rounded-[24px] w-[608px] md:w-full"
                  src="images/img_rectangle29.png"
                  alt="rectangleTwentyNine"
                />
                <div className="flex flex-col items-start justify-start w-[608px] md:w-full">
                  <div className="flex flex-col gap-8 items-start justify-start w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="leading-[60.00px] max-w-[608px] md:max-w-full sm:text-[32px] md:text-[38px] text-[42px] text-gray-900"
                        size="txtPoppinsBold42"
                      >
                        Hands On Real World Projects
                      </Text>
                    </div>
                    <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-full">
                      <div className="flex flex-col gap-3 items-start justify-start w-[291px]">
                        <Text
                          className="text-deep_orange-700 text-xl w-auto"
                          size="txtPoppinsSemiBold20"
                        >
                          Expert training
                        </Text>
                        <Text
                          className="max-w-[267px] md:max-w-full text-base text-black-900_cc"
                          size="txtPoppinsRegular16Black900cc"
                        >
                          Join our live training sessions with top university
                          mentors and gain valuable knowledge.
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[15px] items-start justify-start w-[293px]">
                        <Text
                          className="text-deep_orange-700 text-xl w-auto"
                          size="txtPoppinsSemiBold20"
                        >
                          Flexible Schedule
                        </Text>
                        <Text
                          className="max-w-[267px] md:max-w-full text-base text-black-900_cc"
                          size="txtPoppinsRegular16Black900cc"
                        >
                          Learn at your own pace with our on-demand academic
                          sessions and hands-on projects.
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 md:flex-col flex-row gap-6 items-center justify-center w-auto md:w-full">
                <div className="flex flex-col items-start justify-start w-[608px] md:w-full">
                  <div className="flex flex-col gap-8 items-start justify-start w-full">
                    <div className="flex flex-col gap-3 items-start justify-start w-full">
                      <Text
                        className="sm:text-[32px] md:text-[38px] text-[42px] text-gray-900 w-full"
                        size="txtPoppinsBold42"
                      >
                        Earn Your Certificate
                      </Text>
                      <Text
                        className="max-w-[608px] md:max-w-full text-base text-gray-900_cc"
                        size="txtPoppinsRegular16"
                      >
                        Experience interactive learning with expert trainers
                        from top universities. Enhance your skills and excel in
                        your academic journey.
                      </Text>
                    </div>
                    <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-full">
                      <div className="flex flex-col gap-3 items-start justify-start w-[291px]">
                        <Text
                          className="text-deep_orange-700 text-xl w-auto"
                          size="txtPoppinsSemiBold20"
                        >
                          Expert guidance
                        </Text>
                        <Text
                          className="max-w-[267px] md:max-w-full text-base text-black-900_cc"
                          size="txtPoppinsRegular16Black900cc"
                        >
                          Get access to live training sessions with industry
                          experts and university mentors.
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[15px] items-start justify-start w-[293px]">
                        <Text
                          className="text-deep_orange-700 text-xl w-auto"
                          size="txtPoppinsSemiBold20"
                        >
                          Hands-on projects
                        </Text>
                        <Text
                          className="max-w-[267px] md:max-w-full text-base text-black-900_cc"
                          size="txtPoppinsRegular16Black900cc"
                        >
                          Apply your knowledge through practical hands-on
                          projects and real-world scenarios.
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <Img
                  className="h-[400px] sm:h-auto object-cover rounded-[24px] w-[608px] md:w-full"
                  src="images/img_rectangle28_1.png"
                  alt="rectangleTwentyEight"
                />
              </div>
            </List>
          </div>
          <div className="flex flex-col items-start justify-start py-24 w-auto md:w-full">
            <div className="flex flex-col items-start justify-start max-w-[1440px] md:px-10 sm:px-5 px-[100px] w-full">
              <div className="flex flex-col gap-3 items-center justify-start max-w-[1240px] mx-auto w-full">
                <Text
                  className="sm:text-[32px] md:text-[38px] text-[42px] text-center text-gray-900 w-full"
                  size="txtPoppinsBold42"
                >
                  Our Mentors
                </Text>
                <div className="flex flex-col gap-3 items-center justify-start">
                  <Text
                    className="leading-[32.00px] text-center text-gray-900_cc text-xl w-full"
                    size="txtPoppinsSemiBold20Gray900cc"
                  >
                    Experience academic excellence with our Top University
                    Mentors from IIT,NIT, Jadavpur University and IIEST Shibpur.
                  </Text>
                  <Text
                    className="text-base text-center text-gray-900_cc w-full"
                    size="txtPoppinsRegular16"
                  >
                    Beyond traditional education, they offer rich insights and
                    personalized mentorship, guiding you to success. Benefit
                    from their expertise and real-world wisdom as you elevate
                    your learning journey
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-indigo-900 flex flex-col gap-8 items-center justify-start max-w-[1440px] md:px-10 sm:px-5 px-[100px] py-24 w-full">
            <div className="flex flex-col gap-2 items-center justify-start max-w-[1240px] mx-auto w-full">
              <Text
                className="sm:text-[32px] md:text-[38px] text-[42px] text-center text-gray-50_01 w-auto"
                size="txtPoppinsBold42Gray5001"
              >
                Affordable Education, Infinite Possibilities
              </Text>
              <Text
                className="max-w-[737px] md:max-w-full text-base text-center text-gray-50_cc"
                size="txtPoppinsRegular16Gray50cc"
              >
                <>
                  Welcome to a world where knowledge knows no bounds and
                  learning is not just a privilege, but a right for everyone. At
                  our social learning site, we&#39;re committed to making
                  education accessible to all without compromising on quality.
                  Our dedication to affordability means that you can embark on a
                  journey of continuous learning without breaking the bank.
                </>
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-auto">
              <Button
                className="cursor-pointer leading-[normal] text-base text-center w-[292px]"
                color="yellow_800_deep_orange_700"
              >
                Get started
              </Button>
            </div>
          </div>
          <div className="bg-indigo-900 flex flex-col gap-10 items-center justify-start max-w-[1440px] py-24 w-full">
            <div className="flex flex-col gap-4 items-center justify-start md:px-5 w-auto sm:w-full">
              <Text
                className="sm:text-[32px] md:text-[38px] text-[42px] text-gray-50_01 w-auto"
                size="txtPoppinsBold42Gray5001"
              >
                FAQs
              </Text>
              <Text
                className="max-w-[398px] md:max-w-full text-base text-center text-gray-50_cc"
                size="txtPoppinsRegular16Gray50cc"
              >
                Find answers to common questions about our courses, platform,
                and learning methodology.
              </Text>
            </div>
            <div className="flex flex-col gap-6 items-start justify-start md:px-5 w-auto md:w-full">
              <div className="bg-white-A700 flex md:flex-col flex-row gap-3 items-start justify-start max-w-[818px] p-6 sm:px-5 rounded-[12px] shadow-bs w-full">
                <div className="flex flex-1 flex-col gap-3 items-start justify-start w-full">
                  <Text
                    className="text-gray-900 text-xl w-auto"
                    size="txtPoppinsSemiBold20Gray900"
                  >
                    How do I enroll?
                  </Text>
                  <Text
                    className="max-w-[734px] md:max-w-full text-base text-gray-900_cc"
                    size="txtPoppinsRegular16"
                  >
                    <>
                      Enrolling in our courses is easy. Simply visit our
                      website, choose the course you&#39;re interested in, and
                      click on the &#39;Enroll&#39; button. Follow the prompts
                      to complete the enrollment process.
                    </>
                  </Text>
                </div>
                <Img
                  className="h-6 w-6"
                  src="images/img_icoutlineminus.svg"
                  alt="icoutlineminus"
                />
              </div>
              <List
                className="flex flex-col gap-6 items-center w-full"
                orientation="vertical"
              >
                <div className="bg-white-A700 flex flex-1 md:flex-col flex-row gap-3 items-start justify-start max-w-[818px] p-6 sm:px-5 rounded-[12px] shadow-bs w-full">
                  <div className="flex flex-1 flex-col items-start justify-start w-full">
                    <Text
                      className="text-gray-900 text-xl w-auto"
                      size="txtPoppinsSemiBold20Gray900"
                    >
                      What courses are available?
                    </Text>
                  </div>
                  <Img
                    className="h-6 w-6"
                    src="images/img_icsharpplus.svg"
                    alt="icsharpplus"
                  />
                </div>
                <div className="bg-white-A700 flex flex-1 md:flex-col flex-row gap-3 items-start justify-start max-w-[818px] p-6 sm:px-5 rounded-[12px] shadow-bs w-full">
                  <div className="flex flex-1 flex-col items-start justify-start w-full">
                    <Text
                      className="text-gray-900 text-xl w-auto"
                      size="txtPoppinsSemiBold20Gray900"
                    >
                      How does live training work?
                    </Text>
                  </div>
                  <Img
                    className="h-6 w-6"
                    src="images/img_icsharpplus.svg"
                    alt="icsharpplus"
                  />
                </div>
                <div className="bg-white-A700 flex flex-1 md:flex-col flex-row gap-3 items-start justify-start max-w-[818px] p-6 sm:px-5 rounded-[12px] shadow-bs w-full">
                  <div className="flex flex-1 flex-col items-start justify-start w-full">
                    <Text
                      className="text-gray-900 text-xl w-auto"
                      size="txtPoppinsSemiBold20Gray900"
                    >
                      Do you have mentors?
                    </Text>
                  </div>
                  <Img
                    className="h-6 w-6"
                    src="images/img_icsharpplus.svg"
                    alt="icsharpplus"
                  />
                </div>
                <div className="bg-white-A700 flex flex-1 md:flex-col flex-row gap-3 items-start justify-start max-w-[818px] p-6 sm:px-5 rounded-[12px] shadow-bs w-full">
                  <div className="flex flex-1 flex-col items-start justify-start w-full">
                    <Text
                      className="text-gray-900 text-xl w-auto"
                      size="txtPoppinsSemiBold20Gray900"
                    >
                      Can I access academic sessions on demand?
                    </Text>
                  </div>
                  <Img
                    className="h-6 w-6"
                    src="images/img_icsharpplus.svg"
                    alt="icsharpplus"
                  />
                </div>
              </List>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-6 items-start justify-center max-w-[1440px] md:px-10 sm:px-5 px-[100px] py-24 w-full">
            <div className="flex sm:flex-1 flex-col gap-8 items-start justify-start w-[397px] sm:w-full">
              <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                <Text
                  className="sm:text-[32px] md:text-[38px] text-[42px] text-gray-900 w-auto"
                  size="txtPoppinsBold42"
                >
                  Contact us
                </Text>
                <Text
                  className="max-w-[397px] md:max-w-full text-base text-gray-900_cc"
                  size="txtPoppinsRegular16"
                >
                  If you want enroll our courses or have any query please fill
                  the form or use any other contact option below.
                </Text>
              </div>
              <div className="flex flex-col gap-3 items-start justify-start w-auto">
                <div className="flex flex-row gap-2 items-start justify-start w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_iconamoonlocationpinfill.svg"
                    alt="iconamoonlocati"
                  />
                  <Text
                    className="text-base text-gray-900 w-auto"
                    size="txtPoppinsRegular16Gray900"
                  >
                    Jadhavpur, Kolkata, West Bengal.
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-center justify-start w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_icroundphone.svg"
                    alt="icroundphone"
                  />
                  <div className="flex flex-row gap-4 items-center justify-start w-auto">
                    <Text
                      className="text-base text-gray-900 w-auto"
                      size="txtPoppinsRegular16Gray900"
                    >
                      +91 74396 40878
                    </Text>
                    <Text
                      className="text-base text-gray-900 w-auto"
                      size="txtPoppinsRegular16Gray900"
                    >
                      +91 90732 85435
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_materialsymbolslightmail.svg"
                    alt="materialsymbols"
                  />
                  <Text
                    className="text-base text-gray-900 w-auto"
                    size="txtPoppinsRegular16Gray900"
                  >
                    info@delphiscript.com
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-5 items-start justify-start w-auto md:w-full">
              <div className="flex flex-col gap-3 items-start justify-start w-auto md:w-full">
                <div className="flex flex-col gap-2 items-start justify-start w-auto md:w-full">
                  <Text
                    className="text-base text-gray-900 w-auto"
                    size="txtPoppinsMedium16"
                  >
                    Name
                  </Text>
                  <Input
                    name="frameSixtySix"
                    placeholder="Enter your name"
                    className="leading-[normal] p-0 placeholder:text-gray-900 text-base text-left w-full"
                    wrapClassName="border border-gray-900 border-solid w-full"
                    type="text"
                    shape="round"
                    color="gray_900_19"
                    size="sm"
                    variant="fill"
                  ></Input>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-auto md:w-full">
                  <Text
                    className="text-base text-gray-900 w-auto"
                    size="txtPoppinsMedium16"
                  >
                    Phone
                  </Text>
                  <div className="bg-gray-900_19 border border-gray-900 border-solid flex flex-col items-start justify-start sm:px-5 px-6 py-3 rounded-[12px] w-[608px] md:w-full">
                    <Input
                      name="frameSixtyThree"
                      placeholder="Enter your phone number"
                      className="leading-[normal] p-0 placeholder:text-gray-900 sm:pr-5 text-base text-gray-900 text-left w-full"
                      wrapClassName="pr-[35px] w-full"
                      type="number"
                      size="xs"
                    ></Input>
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-auto md:w-full">
                  <Text
                    className="text-base text-gray-900 w-auto"
                    size="txtPoppinsMedium16"
                  >
                    Email
                  </Text>
                  <Input
                    name="frameSixtySix_One"
                    placeholder="Enter your email"
                    className="leading-[normal] p-0 placeholder:text-gray-900 text-base text-left w-full"
                    wrapClassName="border border-gray-900 border-solid w-full"
                    type="email"
                    shape="round"
                    color="gray_900_19"
                    size="sm"
                    variant="fill"
                  ></Input>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-auto md:w-full">
                  <Text
                    className="text-base text-gray-900 w-auto"
                    size="txtPoppinsMedium16"
                  >
                    Message
                  </Text>
                  <div className="bg-gray-900_19 border border-gray-900 border-solid flex flex-col h-24 md:h-auto items-start justify-start sm:px-5 px-6 py-3 rounded-[12px] w-[608px] md:w-full">
                    <Input
                      name="frameSixtyThree_One"
                      placeholder="Enter your message here"
                      className="leading-[normal] p-0 placeholder:text-gray-900 sm:pr-5 text-base text-gray-900 text-left w-full"
                      wrapClassName="pr-[35px] w-full"
                      size="xs"
                    ></Input>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-full">
                <Button
                  className="!text-white-A700 cursor-pointer font-medium text-base text-center w-[292px]"
                  color="yellow_800_deep_orange_700"
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start max-w-[1440px] md:px-10 sm:px-5 px-[100px] py-12 w-full">
            <div className="bg-gradient  flex md:flex-col flex-row gap-6 items-center justify-start max-w-[1240px] mx-auto pl-8 md:px-5 py-8 rounded-[24px] shadow-bs1 w-full">
              <div className="flex flex-1 flex-col gap-8 items-start justify-start w-full">
                <div className="flex flex-col gap-3 items-start justify-start w-full">
                  <Text
                    className="leading-[38.00px] md:max-w-full max-w-xl md:text-2xl sm:text-[22px] text-[26px] text-gray-50_01"
                    size="txtPoppinsSemiBold26"
                  >
                    Transforming Education Through Social Learning
                  </Text>
                  <Text
                    className="md:max-w-full max-w-xl text-gray-50_cc text-sm"
                    size="txtPoppinsRegular14"
                  >
                    We are Building a Revolutionary Social Media application
                    designed exclusively for School and College Students across
                    India. This platform aims to foster a collaborative
                    environment where students can engage in Discussions About
                    Technology, Do Their Projects, Explore Startup Ideas, Learn
                    New Skills, and Showcase Their Talents.
                  </Text>
                </div>
                <Button
                  className="cursor-pointer font-medium text-base text-center w-[187px]"
                  color="gray_50_01"
                  variant="fill"
                >
                  Join waitlist
                </Button>
              </div>
              <Img
                className="md:flex-1 h-[312px] sm:h-auto object-cover rounded-bl-[24px] rounded-tl-[24px] w-[608px] md:w-full"
                src="images/img_rectangle28_312x608.png"
                alt="rectangleTwentyEight"
              />
            </div>
          </div>
          <footer className="bg-indigo-900 flex items-center justify-center md:px-5 px-[100px] py-8 w-full">
            <div className="flex flex-col gap-8 items-center justify-center w-full">
              <div className="flex md:flex-col flex-row gap-6 items-start justify-between w-full">
                <div className="flex sm:flex-1 flex-col gap-6 items-start justify-start w-auto sm:w-full">
                  <div className="flex flex-col gap-3 items-start justify-start w-[397px] sm:w-full">
                    <div className="flex flex-row gap-3 items-start justify-start pt-[3px] w-3/5 md:w-full">
                      <Img
                        className="h-[37px] w-[37px]"
                        src="images/img_user_black_900.svg"
                        alt="user_One"
                      />
                      <Text
                        className="sm:text-[26.5px] md:text-[28.5px] text-[30.5px] text-white-A700"
                        size="txtPoppinsSemiBold305WhiteA700"
                      >
                        DelphiScript
                      </Text>
                    </div>
                    <Text
                      className="max-w-[397px] md:max-w-full text-gray-50_cc text-xs"
                      size="txtPoppinsRegular12"
                    >
                      <span className="text-gray-50_cc font-poppins text-left font-normal">
                        Lorem ipsum dolor sit amet consectetur. Id id neque
                        pulvinar amet hac quis cursus condimentum. Quam quisque
                        duis accumsan feugiat.{" "}
                      </span>
                      <span className="text-gray-50_cc font-poppins text-left font-normal">
                        Quam quisque duis accumsan feugiat.
                      </span>
                    </Text>
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-start w-[397px] sm:w-full">
                    <Text
                      className="text-base text-gray-50_01 w-auto"
                      size="txtPoppinsSemiBold16Gray5001"
                    >
                      Address
                    </Text>
                    <Text
                      className="text-base text-gray-50_cc w-full"
                      size="txtPoppinsRegular16Gray50cc"
                    >
                      Jadhavpur, Kolkata, West Bengal.
                    </Text>
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-center w-auto">
                    <Text
                      className="text-base text-gray-50_01 w-auto"
                      size="txtPoppinsSemiBold16Gray5001"
                    >
                      Contact
                    </Text>
                    <Input
                      name="frameSeventy"
                      placeholder="+91 74396 40878"
                      className="leading-[normal] p-0 placeholder:text-gray-50_cc sm:pr-5 text-base text-gray-50_cc text-left w-full"
                      wrapClassName="flex pr-[35px] w-full"
                      prefix={
                        <Img
                          className="mt-auto mb-px h-6 mr-2"
                          src="images/img_icroundphone_gray_50_01.svg"
                          alt="ic:round-phone"
                        />
                      }
                    ></Input>
                  </div>
                  <div className="flex flex-row gap-6 items-start justify-start w-auto">
                    <Img
                      className="h-6 w-6"
                      src="images/img_mdilinkedin.svg"
                      alt="mdilinkedin"
                    />
                    <Img
                      className="h-6 w-[21px]"
                      src="images/img_airplane.svg"
                      alt="airplane"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_raphaelfacebook.svg"
                      alt="raphaelfacebook"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_riinstagramfill.svg"
                      alt="riinstagramfill"
                    />
                  </div>
                </div>
                <Line className="bg-gray-50_cc h-[312px] md:h-px md:w-full w-px" />
                <ul className="flex md:flex-1 flex-col gap-6 items-start justify-center w-[186px] md:w-full common-column-list">
                  <li>
                    <a href="javascript:" className="text-base text-gray-50_01">
                      <Text size="txtPoppinsMedium16Gray5001">Courses</Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:" className="text-base text-gray-50_01">
                      <Text size="txtPoppinsMedium16Gray5001">Events</Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:" className="text-base text-gray-50_01">
                      <Text size="txtPoppinsMedium16Gray5001">About us</Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:" className="text-base text-gray-50_01">
                      <Text size="txtPoppinsMedium16Gray5001">Contact us</Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:" className="text-base text-gray-50_01">
                      <Text size="txtPoppinsMedium16Gray5001">Blogs</Text>
                    </a>
                  </li>
                </ul>
                <div className="flex flex-col gap-6 items-start justify-center w-[187px]">
                  <a
                    href="javascript:"
                    className="text-base text-gray-50_01 w-auto"
                  >
                    <Text size="txtPoppinsMedium16Gray5001">
                      Privacy policy
                    </Text>
                  </a>
                  <a
                    href="javascript:"
                    className="text-base text-gray-50_01 w-auto"
                  >
                    <Text size="txtPoppinsMedium16Gray5001">
                      Terms of service
                    </Text>
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center p-2.5 w-full">
                <Text
                  className="text-base text-gray-50_cc w-auto"
                  size="txtPoppinsRegular16Gray50cc"
                >
                  © 2023 Delphiscript. All rights reserved.
                </Text>
              </div>
            </div>
          </footer>
        </div>
      </div>
      </div>
    </>
  );
};

export default HomepageLightV2Page;
