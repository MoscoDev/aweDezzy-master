import React from "react";
import Tables from "../components/Table";
import Accordion from "../components/Accordion";
import { Button } from "antd";
import { Content } from "antd/lib/layout/layout";
import Slider from "../components/Carousel";
import Banner from "../components/Banner";
import CardSection from "../components/CardSection";
import personSVG from "../images/nn.svg";
import Bodysection from "../components/Bodysection";
import mm from "../images/mm.svg";
import pp from "../images/pp.svg";
import Ourpartners from "../components/Ourpartners";
import Faq from "./Faq";

export default function Home() {
  return (
    <div>
      <Banner />
      <Content >
        <CardSection />
        <Bodysection 
          title="Your phone +
          our app +
          a debit card =
          a simpler life."
          img={personSVG}
          direction="right"
          article="We designed a banking app for your busy lifestyle, and we’ll give you a free debit card to go with it. That’s all you need to make the right moves with your money, no sweat."
          cta="Open An Account in Minutes"
        />
        <Bodysection
          
          title="It’s your money, we just help you manage it."
          img={mm}
          direction="left"
          article="Save it, spend it, send it. It’s up to you. Whatever you choose to do with your money, we’ll make sure it’s done better and free of charge. We take responsibility for that."
          cta="Get Help"
        />
        <Bodysection
          title="We’re always happy to help you."
          img={pp}
          direction="right"
          article="You can chat with us on the app, slide into our DMs, tweet, leave an Instagram comment, send an email or call. However you choose to reach out, there’ll always be a friendly person there to make your life easy."
          cta="Get Help"
        />
        <Ourpartners />
        <Tables />
        <Faq />
        <Accordion />
      </Content>
    </div>
  );
}
