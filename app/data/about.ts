import rawData from "./about.json";

export interface AboutFeature {
  title: string;
  icon: string;
}

export interface WhoWeAre {
  tag: string;
  title: string;
  description1: string;
  description2: string;
  features: AboutFeature[];
}

export interface TimelineItem {
  year: string;
  title: string;
  desc: string;
}

export interface OurJourney {
  tag: string;
  title: string;
  timeline: TimelineItem[];
}

export interface CoreValue {
  title: string;
  desc: string;
}

export interface WhatDrivesUs {
  tag: string;
  title: string;
  values: CoreValue[];
}

export interface TeamMember {
  name: string;
  role: string;
  label: string;
  bio: string;
  areasOfPractice: string[];
}

export interface MeetTheExperts {
  tag: string;
  title: string;
  subtitle: string;
  team: TeamMember[];
}

export interface AboutData {
  whoWeAre: WhoWeAre;
  ourJourney: OurJourney;
  whatDrivesUs: WhatDrivesUs;
  meetTheExperts: MeetTheExperts;
}

const aboutData: AboutData = rawData as AboutData;

export const { whoWeAre, ourJourney, whatDrivesUs, meetTheExperts } = aboutData;

export default aboutData;
