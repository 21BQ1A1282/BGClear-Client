import video_banner from "./homepage-banner.mp4";
import logo from "./logo.png";
import people from "./people.png";
import people_org from "./people_org.png";

export const assets = {
    logo,
    video_banner,
    people,
    people_org,
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