import React from 'react';

import {GreetingsComponent} from '../components/greetings/greetings.component';
import {LanguagesComponent} from '../components/languages/languages.component';
import {DefaultLayout} from '../layouts/default/default.layout';

/**
 * Index page
 * Path: /
 *
 * @returns {React.ReactElement} - Index page component
 */
export default function IndexPage() {
  return (
    <DefaultLayout>
      <div>
        <GreetingsComponent />
      </div>
      <div>
        <LanguagesComponent />
      </div>
    </DefaultLayout>
  );
}
