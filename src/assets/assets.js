import credits from "./credits.png";
import video_banner from "./homepage-banner.mp4";
import logo from "./logo.png";
import people from "./people.png";
import people_org from "./people_org.png";

export const assets = {
    logo,
    video_banner,
    people,
    people_org,
    credits,
}

export const steps = [
    {
        step: "Step 1",
        title: "Upload Your Image",
        description: `Drag and drop your image file or click to browse. We support JPG, PNG,
                and WebP formats. Your image is processed securely and never stored on our servers.`
    },
    {
        step: "Step 2",
        title: "AI Magic Removes the Background",
        description: `Our advanced AI automatically detects and removes the background in seconds.
                Watch as your subject is perfectly isolated with clean, crisp edges—no manual editing required.`
    },
    {
        step: "Step 3",
        title: "Download Your Image",
        description:`Preview the result and download your background-free image in your preferred format.
                Choose between PNG with transparency or keep the original format with the background removed.`
    },
];

export const categories = [
    "People", "Animals", "Graphics", "Products", "Cars"
];

export const plans = [
  {
    planId: "basic",
    planName: "Starter Membership",
    subscriptionFee: 499,
    includedCredits: "100 credits",
    summary: "Our essential plan for individual creators.",
    isPopularChoice: false,
  },
  {
    planId: "premium",
    planName: "Premium Membership",
    subscriptionFee: 899,
    includedCredits: "250 credits",
    summary: "Our most popular plan for teams and businesses.",
    isPopularChoice: true,
  },
  {
    planId: "ultimate",
    planName: "Ultimate Membership",
    subscriptionFee: 1499,
    includedCredits: "1000 credits",
    summary: "Maximum capabilities for enterprise clients.",
    isPopularChoice: false,
  },
];

export const testimonials = [
  {
    id: 1,
    quote:"This platform has transformed the way we handle our projects. The simplicity and accuracy are unmatched.",
    author: "Emily Roberts",
    handle: "@design_emily",
  },
  {
    id: 2,
    quote:"Our workflow is now smoother and faster than ever. The results consistently exceed our expectations.",
    author: "James Anderson",
    handle: "@dev_james",
  },
  {
    id: 3,
    quote:"I was blown away by the quality and attention to detail. It feels like we leveled up our entire business overnight.",
    author: "Priya Sharma",
    handle: "@priya_creates",
  },
];

export const FOOTER_ICONS = [
  {
    url: "https://linkedin.com",
    logo: "https://img.icons8.com/fluent/30/000000/linkedin-2.png",
  },
  {
    url: "https://twitter.com",
    logo: "https://img.icons8.com/fluent/30/000000/twitter.png",
  },
];
