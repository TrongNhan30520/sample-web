import * as React from "react";
import Drop from "../assets/images/drop.png";
import Point from "../assets/images/point.png";
import Logo from "../assets/images/logo.png";
import Browser from "../assets/images/browser.png";
import Logo2 from "../assets/images/logo2.png";
import CalLogo from "../assets/images/cal-logo.png";
import Notion from "../assets/images/notion.png";
import Discord from "../assets/images/discord.png";
import Github from "../assets/images/github.png";
import BigImage from "../assets/images/big-image.png";
import MediumImage from "../assets/images/medium-image.png";
import Check from "../assets/images/check.png";

const navItems = [
  {
    label: "Pricing",
  },
  { label: "Updates" },
  { label: "Story" },
  { label: "Download" },
  {
    label: "Developers",
    icon: Drop,
  },
];

const socialIcons = [Browser, Logo2, CalLogo, Notion, Discord, Github];

const NavItem = ({ label, icon }) => (
  <div className="flex gap-2.5 justify-center px-3 py-2.5 my-auto cursor-pointer rounded-md">
    <div>{label}</div>
    {icon && (
      <img
        src={icon}
        alt=""
        className="shrink-0 self-start w-3 m-auto aspect-square"
      />
    )}
  </div>
);

const SocialIcon = ({ src }) => (
  <img
    src={src}
    alt=""
    className="shrink-0 w-10 aspect-[0.98] cursor-pointer transition   hover:scale-150"
  />
);

function MyComponent() {
  return (
    <div className="flex flex-col items-center pt-4 pb-20 bg-neutral-950">
      <nav className="flex gap-0 py-2 pr-4 pl-3.5 text-sm leading-5 rounded-2xl border border-solid bg-neutral-900 border-zinc-800 max-md:flex-wrap max-sm:flex max-sm:flex-row max-sm:mx-auto">
        <div className="flex gap-5 pr-9 whitespace-nowrap text-neutral-50 max-md:flex-wrap max-sm:flex max-sm:flex-row max-sm:p-0">
          <img
            src={Logo}
            alt="Logo"
            className="shrink-0 self-start my-auto aspect-square w-[30px] max-sm:m-auto"
          />
          <div className="flex flex-auto gap-2 max-md:flex-wrap max-md:max-w-full max-sm:flex max-sm:flex-row max-sm:flex-wrap max-sm:mx-auto max-sm:mb-auto">
            {navItems.map((item, index) => (
              <NavItem key={index} label={item.label} icon={item.icon} />
            ))}
          </div>
        </div>
        <div className="justify-center px-3 py-2.5 my-auto rounded-md bg-neutral-50 text-zinc-900 max-sm:mx-auto hover:bg-sky-300">
          Sign in
        </div>
      </nav>
      <div className="flex gap-5 justify-center px-7 py-3 mt-16 text-sm leading-5 cursor-pointer rounded-full border border-solid border-zinc-800 text-neutral-50 max-md:px-5 max-md:mt-10">
        <div className="flex-auto">Announcing Early Adopters Plan</div>
        <img
          loading="lazy"
          src={Point}
          alt=""
          className="shrink-0 self-start my-auto w-3 aspect-square"
        />
      </div>
      <section className="flex overflow-hidden relative flex-col items-end self-center px-16 pb-20 mt-9 max-w-full w-[1236px] max-md:px-5">
        <div className="flex relative z-10 flex-col items-center mx-auto mb-14 max-w-full w-[720px] max-md:mr-2.5 max-md:mb-10">
          <h1 className="self-stretch w-auto text-6xl text-center leading-[56px] text-neutral-50 max-md:max-w-full max-md:text-4xl">
            Run your business smarter.
          </h1>
          <p className="mt-7 text-base leading-6 text-neutral-500 max-md:max-w-full">
            Midday provides you with greater insight into your business and
            automates the{" "}
          </p>
          <p className="mt-2 text-base leading-6 text-neutral-500 max-md:max-w-full">
            boring tasks, allowing you to focus on what you love to do instead.
          </p>
          <div className="flex gap-4 mt-9 text-sm leading-5">
            <button className="justify-center px-6 py-5 rounded-md border border-solid border-neutral-50 text-neutral-50 max-md:px-5 hover:bg-sky-300 hover:text-zinc-900 hover:border-sky-300">
              Talk to us
            </button>
            <button className="justify-center px-5 py-4 rounded-md bg-neutral-50 text-zinc-900 border border-solid hover:border-sky-300 hover:text-sky-300 hover:bg-transparent">
              Get Early Access
            </button>
          </div>
          <p className="mt-7 text-xs leading-4 text-neutral-500">
            No credit card required.
          </p>
        </div>
        <img
          src={BigImage}
          alt=""
          className="object-contain inset-0 size-full"
        />
        <div className="flex relative z-10 flex-col items-center mx-auto mb-14 max-w-full w-[720px] max-md:mr-2.5 max-md:mb-10">
          <div className="flex gap-2 p-2.5 rounded-2xl border mt-10 border-solid border-neutral-500  max-md:mt-10">
            {socialIcons.map((icon, index) => (
              <SocialIcon key={index} src={icon} />
            ))}
          </div>
        </div>
      </section>
      <h2 className="mt-10 ml-14 text-8xl leading-[96px] text-neutral-50 max-md:max-w-full max-md:text-4xl">
        Save hours.
      </h2>
      <section className="box-border flex relative flex-col shrink-0 mx-auto text-center">
        <div className="mt-12 p-1 text-base leading-6 text-zinc-500 max-md:mt-10 max-md:max-w-full">
          <p className="mt-2 text-base leading-6 text-zinc-500 max-md:max-w-full">
            From automated receipt-to-transaction mapping to conversing with
            your financials
          </p>
          <p className="mt-2 text-base leading-6 text-zinc-500 max-md:max-w-full">
            and consolidating all your files, Midday not only assists you with
            your most
          </p>
          <p className="mt-2 text-base leading-6 text-zinc-500 max-md:max-w-full">
            tiresome business tasks but also enhances your ability to gain
            valuable business
          </p>
          <p className="mt-2 text-base leading-6 text-zinc-500 max-md:max-w-full">
            insights.
          </p>
        </div>
      </section>
      <section className="justify-center px-11 pt-10 mt-12 w-full rounded-2xl border border-solid bg-neutral-900 border-zinc-800 max-w-[1344px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <img
              src={MediumImage}
              alt=""
              className="grow w-full aspect-[1.96] max-md:mt-10 max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto text-base leading-6 text-zinc-500 max-md:mt-10 max-md:max-w-full">
              <h3 className="text-2xl leading-8 text-neutral-50 max-md:max-w-full">
                Financial overview
              </h3>
              <p className="mt-6 max-md:max-w-full">
                Bring your own bank. We connect to over 20 000+ banks in 33{" "}
              </p>
              <p className="max-md:max-w-full">
                countries across US, Canada, UK and Europe. Keep tabs on your{" "}
              </p>
              <p className="max-md:max-w-full">
                expenses and income, and gain a clearer picture of your{" "}
              </p>
              <p className="max-md:max-w-full">
                business's financial track record and current situation.
              </p>
              <div className="flex gap-2 self-start mt-10">
                <img
                  src={Check}
                  alt=""
                  className="shrink-0 self-start aspect-[1.39] w-[18px]"
                />
                <div className="flex-auto">Share financial reports</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MyComponent;
