import { Social, Changelog, Projects } from './'

export interface Portfolio {
    firstName: string;
    lastName: string;
    subheading: string;
    socialMedia: Social[];
    introduction: string;
    changelog: Changelog[];
    projects: Projects[];
    speakerBio: string
}

// Social will be another interface
// 