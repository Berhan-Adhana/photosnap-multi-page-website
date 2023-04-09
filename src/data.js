import {
  AiFillFacebook,
  AiFillYoutube,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";

import responsive from "./assets/features/desktop/responsive.svg";
import noLimit from "./assets/features/desktop/no-limit.svg";
import embed from "./assets/features/desktop/embed.svg";
import customDomain from "./assets/features/desktop/custom-domain.svg";
import boostExposure from "./assets/features/desktop/boost-exposure.svg";
import dragAndDrop from "./assets/features/desktop/drag-drop.svg";

import mountains from "./assets/stories/mobile/mountains.jpg";
import mountainsDesktop from "./assets/stories/desktop/mountains.jpg";
import cityscapes from "./assets/stories/mobile/cityscapes.jpg";
import cityscapesDesktop from "./assets/stories/desktop/cityscapes.jpg";
import voyage from "./assets/stories/mobile/18-days-voyage.jpg";
import voyageDesktop from "./assets/stories/desktop/18-days-voyage.jpg";
import architecturals from "./assets/stories/mobile/architecturals.jpg";
import architecturalsDesktop from "./assets/stories/desktop/architecturals.jpg";
import worldTour from "./assets/stories/mobile/world-tour.jpg";
import worldTourDesktop from "./assets/stories/desktop/world-tour.jpg";
import unforeseenCorners from "./assets/stories/mobile/unforeseen-corners.jpg";
import unforeseenCornersDesktop from "./assets/stories/desktop/unforeseen-corners.jpg";
import kingOnAfrica from "./assets/stories/mobile/king-on-africa.jpg";
import kingOnAfricaDesktop from "./assets/stories/desktop/king-on-africa.jpg";
import tripToNowhere from "./assets/stories/mobile/trip-to-nowhere.jpg";
import tripToNowhereDesktop from "./assets/stories/desktop/trip-to-nowhere.jpg";
import rageOnSea from "./assets/stories/mobile/rage-of-the-sea.jpg";
import rageOnSeaDesktop from "./assets/stories/desktop/rage-of-the-sea.jpg";
import runningFree from "./assets/stories/mobile/running-free.jpg";
import runningFreeDesktop from "./assets/stories/desktop/running-free.jpg";
import behindTheWaves from "./assets/stories/mobile/behind-the-waves.jpg";
import behindTheWavesDesktop from "./assets/stories/desktop/behind-the-waves.jpg";
import calmWaters from "./assets/stories/mobile/calm-waters.jpg";
import calmWatersDesktop from "./assets/stories/desktop/calm-waters.jpg";
import milkyWay from "./assets/stories/mobile/milky-way.jpg";
import milkyWayDesktop from "./assets/stories/desktop/milky-way.jpg";
import darkForest from "./assets/stories/mobile/dark-forest.jpg";
import darkForestDesktop from "./assets/stories/desktop/dark-forest.jpg";
import somwarpet from "./assets/stories/mobile/somwarpet.jpg";
import somwarpetDesktop from "./assets/stories/desktop/somwarpet.jpg";
import landOfDreams from "./assets/stories/mobile/land-of-dreams.jpg";
import landOfDreamsDesktop from "./assets/stories/desktop/land-of-dreams.jpg";

import createAndShare from "./assets/home/mobile/create-and-share.jpg";
import createAndShareTablet from "./assets/home/tablet/create-and-share.jpg";
import createAndShareDesktop from "./assets/home/desktop/create-and-share.jpg";
import beautifulStories from "./assets/home/mobile/beautiful-stories.jpg";
import beautifulStoriesTablet from "./assets/home/tablet/beautiful-stories.jpg";
import beautifulStoriesDesktop from "./assets/home/desktop/beautiful-stories.jpg";
import designForEveryone from "./assets/home/mobile/designed-for-everyone.jpg";
import designForEveryoneTablet from "./assets/home/tablet/designed-for-everyone.jpg";
import designForEveryoneDesktop from "./assets/home/desktop/designed-for-everyone.jpg";

import image from "./assets/pricing/mobile/hero.jpg";
import imageTablet from "./assets/pricing/tablet/hero.jpg";
import imageDesktop from "./assets/pricing/desktop/hero.jpg";

import facebook from "./assets/shared/desktop/facebook.svg";
import youtube from "./assets/shared/desktop/youtube.svg";
import instagram from "./assets/shared/desktop/instagram.svg";
import twitter from "./assets/shared/desktop/twitter.svg";
import pinterest from "./assets/shared/desktop/pinterest.svg";

export const menu = [
  { item: "Home", link: "/" },
  { item: "STORIES", link: "/stories" },
  { item: "FEATURES", link: "/features" },
  { item: "PRICING", link: "/pricing" },
];

export const socialMedia = [
  {
    icon: AiFillFacebook,
    url: "https://www.facebook.com",
    onHover: facebook,
    name: "facebook",
  },
  {
    icon: AiFillYoutube,
    url: "https://www.youtube.com",
    onHover: youtube,
    name: "youtube",
  },
  {
    icon: AiOutlineTwitter,
    url: "https://www.twitter.com",
    onHover: twitter,
    name: "twitter",
  },
  {
    icon: BsPinterest,
    url: "https://www.pinterest.com",
    onHover: pinterest,
    name: "pinterest",
  },
  {
    icon: AiOutlineInstagram,
    url: "https://www.instagram.com",
    onHover: instagram,
    name: "instagram",
  },
];

export const features = [
  {
    icon: responsive,
    name: "100% Responsive",
    desc: "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.",
  },
  {
    icon: noLimit,
    name: "No Photo Upload Limit",
    desc: "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",
  },
  {
    icon: embed,
    name: "Available to Embed",
    desc: "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. ",
  },
  {
    icon: customDomain,
    name: "Custom Domain",
    desc: "With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!",
  },
  {
    icon: boostExposure,
    name: "Boost Your Exposure",
    desc: "Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.",
  },
  {
    icon: dragAndDrop,
    name: "Drag & Drop Image",
    desc: "Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.",
  },
];

export const stories = [
  {
    id: 1,
    takenDate: "April 16th 2020",
    title: "The Mountains",
    capturedBy: "John Appleseed",
    image: mountains,
    imageDesktop: mountainsDesktop,
    isFeatured: true,
  },
  {
    id: 2,
    takenDate: "April 14th 2020",
    title: "Sunset Cityscapes",
    capturedBy: "JBenjamin Cruz",
    image: cityscapes,
    imageDesktop: cityscapesDesktop,
    isFeatured: true,
  },
  {
    id: 3,
    takenDate: "April 11th 2020",
    title: "18 Days Voyage",
    capturedBy: "Alexei Borodin",
    image: voyage,
    imageDesktop: voyageDesktop,
    isFeatured: true,
  },
  {
    id: 4,
    takenDate: "April 9th 2020",
    title: "Architecturals",
    capturedBy: "Samantha Brooke",
    image: architecturals,
    imageDesktop: architecturalsDesktop,
    isFeatured: true,
  },
  {
    id: 4,
    takenDate: "April 7th 2020",
    title: "World Tour 2019",
    capturedBy: "Timothy Wagner",
    image: worldTour,
    imageDesktop: worldTourDesktop,
    isFeatured: false,
  },
  {
    id: 5,
    takenDate: "April 3rd 2020",
    title: "Unforeseen Corners",
    capturedBy: "William Malcolm",
    image: unforeseenCorners,
    imageDesktop: unforeseenCornersDesktop,
    isFeatured: false,
  },
  {
    id: 6,
    takenDate: "March 29th 2020",
    title: "King on Africa: Part II",
    capturedBy: "Tim Hillenburg",
    image: kingOnAfrica,
    imageDesktop: kingOnAfricaDesktop,
    isFeatured: false,
  },
  {
    id: 7,
    takenDate: "March 21st 2020",
    title: "The Trip to Nowhere",
    capturedBy: "Felicia Rourke",
    image: tripToNowhere,
    imageDesktop: tripToNowhereDesktop,
    isFeatured: false,
  },
  {
    id: 8,
    takenDate: "March 19th 2020",
    title: "Rage of The Sea",
    capturedBy: "Mohammed Abdul",
    image: rageOnSea,
    imageDesktop: rageOnSeaDesktop,
    isFeatured: false,
  },
  {
    id: 9,
    takenDate: "March 16th 2020",
    title: "Running Free",
    capturedBy: "Michelle",
    image: runningFree,
    imageDesktop: runningFreeDesktop,
    isFeatured: false,
  },
  {
    id: 10,
    takenDate: "March 11th 2020",
    title: "Behind the Waves",
    capturedBy: "Lamarr Wilson",
    image: behindTheWaves,
    imageDesktop: behindTheWavesDesktop,
    isFeatured: false,
  },
  {
    id: 11,
    takenDate: "March 9th 2020",
    title: "Calm Waters",
    capturedBy: "Samantha Brooke",
    image: calmWaters,
    imageDesktop: calmWatersDesktop,
    isFeatured: false,
  },
  {
    id: 12,
    takenDate: "March 5th 2020",
    title: "The Milky Way",
    capturedBy: "Benjamin Cruz",
    image: milkyWay,
    imageDesktop: milkyWayDesktop,
    isFeatured: false,
  },
  {
    id: 12,
    takenDate: "March 4th 2020",
    title: "Night at The Dark Forest",
    capturedBy: "Mohammed Abdul",
    image: darkForest,
    imageDesktop: darkForestDesktop,
    isFeatured: false,
  },
  {
    id: 13,
    takenDate: "March 1st 2020",
    title: "Somwarpet’s Beauty",
    capturedBy: "Michelle",
    image: somwarpet,
    imageDesktop: somwarpetDesktop,
    isFeatured: false,
  },
  {
    id: 14,
    takenDate: "February 25th 2020",
    title: "Land of Dreams",
    capturedBy: "William Malcolm",
    image: landOfDreams,
    imageDesktop: landOfDreamsDesktop,
    isFeatured: false,
  },
];

export const homeData = [
  {
    image: createAndShare,
    imageTablet: createAndShareTablet,
    imageDesktop: createAndShareDesktop,
    title: "Create and share your photo stories.",
    desc: "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.",
    isReversed: true,
  },
  {
    image: beautifulStories,
    imageTablet: beautifulStoriesTablet,
    imageDesktop: beautifulStoriesDesktop,
    title: "BEAUTIFUL STORIES EVERY TIME ",
    desc: "We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.",
    isReversed: false,
  },
  {
    image: designForEveryone,
    imageTablet: designForEveryoneTablet,
    imageDesktop: designForEveryoneDesktop,
    title: "DESIGNED FOR EVERYONE ",
    desc: "Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. ",
    isReversed: true,
  },
];

export const pricingPlan = [
  {
    name: "Basic",
    desc: "Includes basic usage of our platform. Recommended for new and aspiring photographers.",
    monthlyPrice: 19.0,
    yearlyPrice: "200.00",
    features: [
      { name: "UNLIMITED STORY POSTING", isAvailable: true },
      { name: "UNLIMITED PHOTO UPLOAD", isAvailable: true },
      { name: "EMBEDDING CUSTOM CONTENT", isAvailable: false },
      { name: "CUSTOMIZE METADATA", isAvailable: false },
      { name: "ADVANCED METRICS", isAvailable: false },
      { name: "PHOTO DOWNLOADS", isAvailable: false },
      { name: "SEARCH ENGINE INDEXING", isAvailable: false },
      { name: "CUSTOM ANALYTICS", isAvailable: false },
    ],
  },
  {
    name: "Pro",
    desc: "More advanced features available. Recommended for photography veterans and professionals.",
    monthlyPrice: "39.00",
    yearlyPrice: "440.00",
    features: [
      { name: "UNLIMITED STORY POSTING", isAvailable: true },
      { name: "UNLIMITED PHOTO UPLOAD", isAvailable: true },
      { name: "EMBEDDING CUSTOM CONTENT", isAvailable: true },
      { name: "CUSTOMIZE METADATA", isAvailable: true },
      { name: "ADVANCED METRICS", isAvailable: false },
      { name: "PHOTO DOWNLOADS", isAvailable: false },
      { name: "SEARCH ENGINE INDEXING", isAvailable: false },
      { name: "CUSTOM ANALYTICS", isAvailable: false },
    ],
  },
  {
    name: "Business",
    desc: "Additional features available such as more detailed metrics. Recommended for business owners.",
    monthlyPrice: "99.99",
    yearlyPrice: "1099.99",
    features: [
      { name: "UNLIMITED STORY POSTING", isAvailable: true },
      { name: "UNLIMITED PHOTO UPLOAD", isAvailable: true },
      { name: "EMBEDDING CUSTOM CONTENT", isAvailable: true },
      { name: "CUSTOMIZE METADATA", isAvailable: true },
      { name: "ADVANCED METRICS", isAvailable: true },
      { name: "PHOTO DOWNLOADS", isAvailable: true },
      { name: "SEARCH ENGINE INDEXING", isAvailable: true },
      { name: "CUSTOM ANALYTICS", isAvailable: true },
    ],
  },
];

export const pricingData = {
  image: image,
  imageTablet: imageTablet,
  imageDesktop: imageDesktop,
  title: "FEATURES",
  isReversed: true,
  desc: "We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.",
};
