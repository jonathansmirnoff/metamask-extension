import React from 'react';
import OnboardingWelcome from './welcome';

export default {
  title: 'Pages/OnboardingFlow/Welcome',
};

export const DefaultStory = (args) => <OnboardingWelcome {...args} />;

DefaultStory.storyName = 'Default';
